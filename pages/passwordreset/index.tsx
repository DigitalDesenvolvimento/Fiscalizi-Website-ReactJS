import { controller } from "@/api";
import * as components from "@/components";
import '@/public/global.css'
import { modeContext, validate } from "@/utils";
import { useRouter } from 'next/router';
import cookies from 'js-cookie';
import { useEffect, useState } from "react";
import * as styles from "./styles";

export default () => {
  const router = useRouter();
  const [getModeContext, setModeContext] = useState<modeContext>(modeContext.lightMode);
  const [getTextLog, setTextLog] = useState<string>("Enviaremos um link para o seu endereço de email para redefinição de senha.");
  const [getButtonText, setButtonText] = useState<string>("Enviar");
  const [getUserEmailValue, setUserEmailValue] = useState<string>();

  useEffect(() => {
    if (cookies.get('modeContext')) setModeContext(cookies.get('modeContext') as modeContext);
    else if (new Date().getHours() >= 18) setModeContext(modeContext.darkMode);
    else setModeContext(modeContext.lightMode);
  }, []);
  return <components.signupPasswordresetBackground modeContext={[getModeContext, setModeContext]} styleChildren={{ alignItems: "center", justifyContent: "center" }}>
    <styles.superFormControl modeContext={getModeContext}>
      <styles.formControl modeContext={getModeContext}>
        <label className="title" children="Redefinir senha" />
        <label className="text" children={getTextLog} />
        <components.input modeContext={[getModeContext, setModeContext]} showInput={getButtonText == "Enviar"} titleValue="Email" inputPlaceholder="Email: usuario@seudominio.com.br" inputValue={[getUserEmailValue, setUserEmailValue]}></components.input>
        <components.button modeContext={[getModeContext, setModeContext]} showButton={(getUserEmailValue ?? "") != ""} buttonValue={getButtonText}
          onClick={async () => {
            if (getButtonText == "Enviar") {
              if ((getUserEmailValue ?? "") == "") components.toast.showMessage("Campo não preenchido", "O campo 'Email' deve ser informado", undefined, "warning");
              else if (!validate.email(getUserEmailValue)) components.toast.showMessage("Campo não preenchido", "O texto digitado no campo 'Email' não é valido", undefined, "warning");
              else if (getUserEmailValue) {
                let response = await controller.user.newpassword(getUserEmailValue);
                if (validate.APIExecutedSuccessfully(response.status)) {
                  components.toast.showMessage("Link para redefinição de senha enviado ☑️", "Verifique a caixa de entrada ou caixa de spam para realizar a redefinição de senha", async () => { await router.push('/signin'); });
                  setTextLog("Link para redefinição de senha enviado. ☑️");
                  setButtonText("Voltar a pagina de signin");
                }
                else {
                  components.toast.showMessage("Falha ao enviar o link de redefinição de senha", "Verifique se o campo 'Email' foi informado corretamente", undefined, "error");
                }
              }
            }
            else {
              router.push('/signin');
            }
          }} />
      </styles.formControl>
    </styles.superFormControl>
  </components.signupPasswordresetBackground>
}