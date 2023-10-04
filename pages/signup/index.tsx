import * as components from "@/components";
import '@/public/global.css'
import { modeContext } from "@/utils";
import { useRouter } from "next/router";
import cookies from 'js-cookie';
import { useEffect, useState } from "react";
import * as styles from "./styles";

export default () => {
  const router = useRouter();
  const [getModeContext, setModeContext] = useState<modeContext>(modeContext.lightMode);
  const [getUserNameValue, setUserNameValue] = useState<string>();
  const [getUserFoneValue, setUserFoneValue] = useState<string>();
  const [getUserEmailValue, setUserEmailValue] = useState<string>();
  const [getPasswordValue, setPasswordValue] = useState<string>();
  const [getCheckPasswordValue, setCheckPasswordValue] = useState<string>();

  useEffect(() => {
    if (cookies.get('modeContext')) setModeContext(cookies.get('modeContext') as modeContext);
    else if (new Date().getHours() >= 18) setModeContext(modeContext.darkMode);
    else setModeContext(modeContext.lightMode);
  }, []);
  return <components.defaultBackground modeContext={[getModeContext, setModeContext]} styleChildren={{ alignItems: "center", justifyContent: "center" }}>
    <styles.superFormControl modeContext={getModeContext}>
      <styles.formControl modeContext={getModeContext}>
        <label className="title" children="Cadastro" />
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Nome" inputPlaceholder="Nome e sobrenome" inputValue={[getUserNameValue, setUserNameValue]}></components.input>
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Telefone" inputPlaceholder="Telefone: (00) 00000-0000" inputValue={[getUserFoneValue, setUserFoneValue]}></components.input>
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Email" inputPlaceholder="Email: usuario@seudominio.com.br" inputValue={[getUserEmailValue, setUserEmailValue]}></components.input>
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Senha" inputPlaceholder="Senha: ******" inputValue={[getPasswordValue, setPasswordValue]}></components.input>
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Confirmar senha" inputPlaceholder="Confirmar senha: ******" inputValue={[getCheckPasswordValue, setCheckPasswordValue]}></components.input>
        <components.button modeContext={[getModeContext, setModeContext]} showButton={(getUserNameValue ?? "") != "" && (getUserFoneValue ?? "") != "" && (getUserEmailValue ?? "") != "" && (getCheckPasswordValue ?? "") != ""} buttonValue="Cadastrar"
          onClick={async () => {
            router.push('/signin');
          }} />
        <styles.line modeContext={getModeContext} />
        <styles.signin modeContext={getModeContext}>
          <label className="text" children="Já possui cadastro? " />
          <a className="link" children="entre aqui" href="/signin" />
        </styles.signin>
      </styles.formControl>
    </styles.superFormControl>
  </components.defaultBackground>
}