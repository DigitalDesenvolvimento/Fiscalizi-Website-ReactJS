import * as components from "@/components";
import '@/public/global.css';
import cookies from 'js-cookie';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as styles from "./styles";
import { modeContext } from "@/utils";

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
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Senha:" inputPlaceholder="Senha: ******" inputValue={[getPasswordValue, setPasswordValue]}></components.input>
        <styles.passwordreset modeContext={getModeContext} children="Esqueceu a senha?" href="/passwordreset" />
        <components.button modeContext={[getModeContext, setModeContext]} showButton={(getUserNameValue ?? "") != "" && (getPasswordValue ?? "") != ""} buttonValue="Entrar"
          onClick={async () => {
            await router.push('/menu');
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