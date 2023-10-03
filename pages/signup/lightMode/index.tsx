import * as components from "@/components";
import '@/public/global.css'
import { useState } from "react";
import * as styles from "./styles";

export default () => {
  const [getUserNameValue, setUserNameValue] = useState<string>();
  const [getUserFoneValue, setUserFoneValue] = useState<string>();
  const [getUserEmailValue, setUserEmailValue] = useState<string>();
  const [getPasswordValue, setPasswordValue] = useState<string>();
  const [getCheckPasswordValue, setCheckPasswordValue] = useState<string>();

  return <components.defaultBackground styleChildren={{ alignItems: "center", justifyContent: "center" }}>
    <styles.superFormControlLogin>
      <styles.formControlLogin>
        <label className="title" children="Cadastro" />
        <components.input titleValue="Nome" inputPlaceholder="Nome e sobrenome" inputValue={[getUserNameValue, setUserNameValue]}></components.input>
        <components.input titleValue="Telefone" inputPlaceholder="Telefone: (00) 00000-0000" inputValue={[getUserFoneValue, setUserFoneValue]}></components.input>
        <components.input titleValue="Email" inputPlaceholder="Email: usuario@seudominio.com.br" inputValue={[getUserEmailValue, setUserEmailValue]}></components.input>
        <components.input titleValue="Senha" inputPlaceholder="Senha: ******" inputValue={[getPasswordValue, setPasswordValue]}></components.input>
        <components.input titleValue="Confirmar senha" inputPlaceholder="Confirmar senha: ******" inputValue={[getCheckPasswordValue, setCheckPasswordValue]}></components.input>
        <components.button showButton={(getUserNameValue ?? "") != "" && (getUserFoneValue ?? "") != "" && (getUserEmailValue ?? "") != "" && (getCheckPasswordValue ?? "") != ""} buttonValue="Cadastrar"
          onClick={async () => {

          }} />
        <styles.signin>
          <label className="text" children="Já possui cadastro? " />
          <a className="link" children="entre aqui" href="/signin" />
        </styles.signin>
      </styles.formControlLogin>
    </styles.superFormControlLogin>
  </components.defaultBackground>
}