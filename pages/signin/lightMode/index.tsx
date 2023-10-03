import * as components from "@/components";
import '@/public/global.css'
import { useState } from "react";
import * as styles from "./styles";

export default () => {
  const [getUserNameValue, setUserNameValue] = useState<string>();
  const [getPasswordValue, setPasswordValue] = useState<string>();

  return <components.signinBackground styleChildren={{ alignItems: "end", justifyContent: "center" }}>
    <styles.superFormControlLogin>
      <label className="title" children="Bem vindo" />
      <styles.formControlLogin>
        <label className="title" children="Login" />
        <components.input titleValue="Login" inputPlaceholder="Entrar com email" inputValue={[getUserNameValue, setUserNameValue]}></components.input>
        <components.input titleValue="Senha" inputPlaceholder="Senha" inputValue={[getPasswordValue, setPasswordValue]}></components.input>
        <styles.passwordreset children="Esqueceu a senha?" href="/passwordreset" />
        <components.button showButton={(getUserNameValue ?? "") != "" && (getPasswordValue ?? "") != ""} buttonValue="Entrar"
          onClick={async () => {
            
          }} />
        <styles.signup>
          <label className="text" children="Não possui cadastro? " />
          <a className="link" children="cadastre-se?" href="/signup" />
        </styles.signup>
      </styles.formControlLogin>
    </styles.superFormControlLogin>
  </components.signinBackground>
}