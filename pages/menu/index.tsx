import { controller } from "@/api";
import * as components from "@/components";
import { authToken, modeContext, validate } from "@/utils";
import '@/public/global.css';
import cookies from 'js-cookie';
import { memo, useEffect, useState } from "react";
import Dashboard from "@/pages/dashboard";
import * as styles from "./styles";

export default memo(() => {
  const [getModeContext, setModeContext] = useState<modeContext>(modeContext.lightMode);
  const [getMenuItemChecked, setMenuItemChecked] = useState<string>("Dashboard");

  useEffect(() => {
    if (cookies.get('modeContext')) setModeContext(cookies.get('modeContext') as modeContext);
    else if (new Date().getHours() >= 18) setModeContext(modeContext.darkMode);
    else setModeContext(modeContext.lightMode);
  }, []);
  return <components.defaultBackground modeContext={[getModeContext, setModeContext]} menuItemChecked={[getMenuItemChecked, setMenuItemChecked]} styleChildren={{ alignItems: "end", justifyContent: "center" }} >
    {getMenuItemChecked == "Dashboard" && <Dashboard />}
  </components.defaultBackground>
});