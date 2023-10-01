import * as components from "@/components";
import { useEffect, useState } from "react";
import * as styles from "./styles";

export default () => {
  const [getUserNameValue, setUserNameValue] = useState<string>();
  const [getPasswordValue, setPasswordValue] = useState<string>();

  useEffect(() => {
    try {

    }
    catch { }
  });

  return <styles.view>
    <styles.FormControlLogin>
      <components.input titleValue="Login" inputPlaceholder="Entrar com email" inputValue={[getUserNameValue, setUserNameValue]}></components.input>
      <components.input titleValue="Senha" inputPlaceholder="Senha" inputValue={[getPasswordValue, setPasswordValue]}></components.input>
      <styles.passwordreset children="Esqueceu a senha?" href="/passwordreset" />
      <components.button showButton={(getUserNameValue ?? "") != "" && (getPasswordValue ?? "") != ""} buttonValue="Entrar" />
      <styles.signup>
        <label className="text" children="Não possui cadastro? " />
        <a className="link" children="cadastre-se?" href="/signup" />
      </styles.signup>
    </styles.FormControlLogin>
  </styles.view>;
};