import * as components from "@/components";
import '@/public/global.css'
import { modeContext, validate } from "@/utils";
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
  return <components.signupPasswordresetBackground modeContext={[getModeContext, setModeContext]} styleChildren={{ alignItems: "center", justifyContent: "center" }}>
    <styles.superFormControl modeContext={getModeContext}>
      <styles.formControl modeContext={getModeContext}>
        <label className="title" children="Cadastro" />
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Nome" inputPlaceholder="Nome e sobrenome" inputValue={[getUserNameValue, setUserNameValue]}/>
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Telefone" inputPlaceholder="Telefone: +00 (00) 00000-0000" inputValue={[getUserFoneValue, setUserFoneValue]} inputIsPhone={true}/>
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Email" inputPlaceholder="Email: usuario@seudominio.com.br" inputValue={[getUserEmailValue, setUserEmailValue]}/>
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Senha" inputPlaceholder="Senha: ******" inputValue={[getPasswordValue, setPasswordValue]}/>
        <components.input modeContext={[getModeContext, setModeContext]} titleValue="Confirmar senha" inputPlaceholder="Confirmar senha: ******" inputValue={[getCheckPasswordValue, setCheckPasswordValue]}/>
        <components.button modeContext={[getModeContext, setModeContext]} showButton={(getUserNameValue ?? "") != "" && (getUserFoneValue ?? "") != "" && (getUserEmailValue ?? "") != "" && (getCheckPasswordValue ?? "") != ""} buttonValue="Cadastrar"
          onClick={async () => {
            if ((getUserNameValue ?? "") == "") components.toast.showMessage("Campo não preenchido", "O campo 'Nome e sobrenome' deve ser informado", undefined, "warning");
            else if ((getUserFoneValue ?? "") == "") components.toast.showMessage("Campo não preenchido", "O campo 'Telefone' deve ser informado", undefined, "warning");
            else if (!validate.fone(getUserFoneValue)) components.toast.showMessage("Campo inválido", "O texto digitado no campo 'Telefone' não é valido", undefined, "warning");
            else if ((getUserEmailValue ?? "") == "") components.toast.showMessage("Campo não preenchido", "O campo 'Email' deve ser informado", undefined, "warning");
            else if (!validate.email(getUserEmailValue)) components.toast.showMessage("Campo inválido", "O texto digitado no campo 'Email' não é valido", undefined, "warning");
            else if ((getPasswordValue ?? "") == "") components.toast.showMessage("Campo não preenchido", "O campo 'Senha' deve ser informado", undefined, "warning");
            else if ((getCheckPasswordValue ?? "") == "") components.toast.showMessage("Campo não preenchido", "O campo 'Confirmar senha' deve ser informado", undefined, "warning");
            else components.toast.showMessage("Bem vindo ao fiscalizi", "Será redirecionado para tela de signin para realizar o seu login", async () => { router.push('/signin') });
          }} />
        <styles.line modeContext={getModeContext} />
        <styles.signin modeContext={getModeContext}>
          <label className="text" children="Já possui cadastro? " />
          <a className="link" children="entre aqui" href="/signin" />
        </styles.signin>
      </styles.formControl>
    </styles.superFormControl>
  </components.signupPasswordresetBackground>
}