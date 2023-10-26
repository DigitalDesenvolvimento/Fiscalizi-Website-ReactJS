import { controller } from "@/api";
import * as components from "@/components";
import { authToken, modeContext, validate } from "@/utils";
import '@/public/global.css';
import cookies from 'js-cookie';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as styles from "./styles";

export default () => {
  const router = useRouter();
  const [getModeContext, setModeContext] = useState<modeContext>(modeContext.lightMode);
  const [getUserNameValue, setUserNameValue] = useState<string>();
  const [getPasswordValue, setPasswordValue] = useState<string>();

  useEffect(() => {
    if (cookies.get('modeContext')) setModeContext(cookies.get('modeContext') as modeContext);
    else if (new Date().getHours() >= 18) setModeContext(modeContext.darkMode);
    else setModeContext(modeContext.lightMode);
  }, []);
  return <components.signinBackground modeContext={[getModeContext, setModeContext]} styleChildren={{ alignItems: "end", justifyContent: "center" }} >
    <styles.superFormControl modeContext={getModeContext}>
      <label className="title" children="Bem vindo" />
      <styles.formControl modeContext={getModeContext}>
        <label className="title" children="Login" />
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Login:" inputPlaceholder="Entrar com email" inputValue={[getUserNameValue, setUserNameValue]}></components.input>
        <components.input inputIsPassword={true} modeContext={[getModeContext, setModeContext]} titleValue="Senha:" inputPlaceholder="Senha: ******" inputValue={[getPasswordValue, setPasswordValue]}></components.input>
        <styles.passwordreset modeContext={getModeContext} children="Esqueceu a senha?" onClick={async () => await router.push("/passwordreset")} />
        <components.button modeContext={[getModeContext, setModeContext]} showButton={(getUserNameValue ?? "") != "" && (getPasswordValue ?? "") != ""} buttonValue="Entrar"
          onClick={async () => {
            if ((getUserNameValue ?? "") == "") components.toast.showMessage("Campo não preenchido", "O campo de login deve ser informado", undefined, "warning");
            else if (!validate.email(getUserNameValue)) components.toast.showMessage("Campo não preenchido", "O texto digitado no campo de login não é valido", undefined, "warning");
            else if ((getPasswordValue ?? "") == "") components.toast.showMessage("Campo não preenchido", "O campo 'Senha' deve ser informado", undefined, "warning");
            else if (getUserNameValue && getPasswordValue) {
              let response = await controller.user.accesstoken(getUserNameValue, getPasswordValue);
              if (validate.APIExecutedSuccessfully(response.status)) components.toast.showMessage("Bem vindo ao fiscalizi", "Será redirecionado para a página inicial", async () => {
                authToken.set(response.data.IntegrationToken, response.data.ClientSecret, response.data.AccessToken, response.data.TimeOut);
                await router.push("/menu");
              });
              else alert(JSON.stringify(response.data))
            }
          }} />
        <styles.line />
        <styles.signup modeContext={getModeContext}>
          <label className="text" children="Não possui cadastro? " />
          <label className="link" children="Cadastre-se?" onClick={async () => await router.push('/signup')} />
        </styles.signup>
      </styles.formControl>
    </styles.superFormControl>
  </components.signinBackground>
}