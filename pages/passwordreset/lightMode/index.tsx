import * as components from "@/components";
import '@/public/global.css'
import { useRouter } from 'next/router';
import { useState } from "react";
import * as styles from "./styles";

export default () => {
  const router = useRouter();
  const [getTextLog, setTextLog] = useState<string>("Enviaremos um link para o seu endereço de email para redefinição de senha.");
  const [getButtonText, setButtonText] = useState<string>("Enviar");
  const [getUserEmailValue, setUserEmailValue] = useState<string>();

  return <components.defaultBackground styleChildren={{ alignItems: "center", justifyContent: "center" }}>
    <styles.superFormControlLogin>
      <styles.formControlLogin>
        <label className="title" children="Redefinir senha" />
        <label className="text" children={getTextLog} />
        <components.input showInput={getButtonText == "Enviar"} titleValue="Email" inputPlaceholder="Email: usuario@seudominio.com.br" inputValue={[getUserEmailValue, setUserEmailValue]}></components.input>
        <components.button showButton={(getUserEmailValue ?? "") != ""} buttonValue={getButtonText}
          onClick={async () => {
            if (getButtonText == "Enviar") {
              setTextLog("Link para redefinição de senha enviado. ☑️");
              setButtonText("Voltar a pagina de signin");
            }
            else {
              router.push('/signin');
            }
          }} />
      </styles.formControlLogin>
    </styles.superFormControlLogin>
  </components.defaultBackground>
}