import * as components from "@/components";
import Dashboard from "@/pages/dashboard";
import IntegrationWithOnlinePayment from "@/pages/integrationWithOnlinePayment";
import IPTUCollection from "@/pages/iptuCollection";
import MapsAndGeolocation from "@/pages/mapsAndGeolocation";
import OwnershipTransferMonitoring from "@/pages/ownershipTransferMonitoring";
import RegistrationOfCityHalls from "@/pages/registrationOfCityHalls";
import PropertyManagement from "@/pages/propertyManagement";
import SystemConfiguration from "@/pages/systemConfiguration";
import TaxpayerRegistration from "@/pages/taxpayerRegistration";
import UserManagement from "@/pages/userManagement";
import { modeContext } from "@/utils";
import '@/public/global.css';
import cookies from 'js-cookie';
import { memo, useEffect, useState } from "react";

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
    {getMenuItemChecked == "Configuração de sistema" && <SystemConfiguration />}
    {getMenuItemChecked == "Gerenciamento de usuário" && <UserManagement />}
    {getMenuItemChecked == "Cadastro de contribuintes" && <TaxpayerRegistration />}
    {getMenuItemChecked == "Gerenciamento de imóves" && <PropertyManagement />}
    {getMenuItemChecked == "Cadastro de prefeituras" && <RegistrationOfCityHalls />}
    {getMenuItemChecked == "Coleta de ITPU" && <IPTUCollection />}
    {getMenuItemChecked == "Integração com Pagto Online" && <IntegrationWithOnlinePayment />}
    {getMenuItemChecked == "Mapas e Geolocalização" && <MapsAndGeolocation />}
    {getMenuItemChecked == "Monit. de Transf. titularidade" && <OwnershipTransferMonitoring />}
  </components.defaultBackground>
});