import { controller } from "@/api";
import { FormLabel } from "@chakra-ui/react";
import * as components from "@/components";
import '@/public/global.css';
import { authToken, modeContext, validate } from "@/utils";
import cookies from 'js-cookie';
import { Fragment, memo, useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Tooltip as TooltipChart } from 'recharts';
import * as styles from "./styles";

export default memo(() => {
  const [getModeContext, setModeContext] = useState<modeContext>(modeContext.lightMode);
  const [getDashBoard, setDashBoard] = useState<{
    Highlights: {
      Label: string;
      Tooltip: string;
      Text: string;
    }[];
    UnsuccessfulConsultations: {
      Label: string;
      Tooltip: string;
      Graphic: {
        XAxis: string;
        YAxis: string;
      }[];
      Highlights: {
        Label: string;
        Tooltip: string;
        Text: string;
      }[];
    };
    SuccessfulQueriesHistory: {
      Label: string;
      Tooltip: string;
      Graphic: {
        XAxis: string;
        YAxis: string;
      }[];
    };
    TaxesExpectedToBePaid: {
      Label: string;
      Tooltip: string;
      Graphic: {
        XAxis: string;
        YAxis: string;
      }[];
    };
  }>();

  useEffect(() => {
    if (cookies.get('modeContext')) setModeContext(cookies.get('modeContext') as modeContext);
    else if (new Date().getHours() >= 18) setModeContext(modeContext.darkMode);
    else setModeContext(modeContext.lightMode);
  }, []);
  useEffect(() => {
    async function didMount() {
      let response = await controller.dashboard.metricsandhighlights();
      if (validate.APIExecutedSuccessfully(response.status)) setDashBoard(response.data);
      else components.toast.showMessage("Houve um problema ao trazer os dados para o dashboard", "tente atualizar a página para recarregar as informações", undefined, "warning");
    }
    didMount();
  }, []);
  return <styles.container modeContext={getModeContext}>
    <FormLabel style={{
      alignItems: "center", color: getModeContext == modeContext.darkMode ? "#FCFCFC" : "#000000",
      cursor: "pointer", fontSize: "20px", marginLeft: "20px", whiteSpace: "nowrap"
    }} children="Destaques" />
    <styles.dashboardContainer modeContext={getModeContext}>
      {getDashBoard && getDashBoard!.Highlights.map((Item) => <styles.dashboardValue modeContext={getModeContext}>
        <styles.dashboardValueLabel modeContext={getModeContext} children={Item.Label} />
        <styles.dashboardValueText modeContext={getModeContext} children={Item.Text} />
      </styles.dashboardValue>)}
    </styles.dashboardContainer>
    <FormLabel style={{
      alignItems: "center",
      color: getModeContext == modeContext.darkMode ? "#FCFCFC" : "#000000",
      cursor: "pointer",
      fontSize: "20px",
      marginLeft: "20px",
      whiteSpace: "nowrap"
    }} children="Métricas" />
    <styles.dashboardContainer style={{
      display: "flex",
      flexDirection: "row",
      height: "calc(100% - 250px)"
    }} modeContext={getModeContext}>
      <styles.dashboardValue modeContext={getModeContext} style={{ width: "30%" }}>
        <ResponsiveContainer width="100%" height="3100%">
          <PieChart >
            <Pie data={getDashBoard ? getDashBoard!.UnsuccessfulConsultations.Graphic.map((Item) => {
              return {
                name: Item.XAxis,
                value: parseFloat(Item.YAxis.replace(/[^\d.,]/g, '').replaceAll('.', '').replaceAll(',', '.'))
              };
            }) : []} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" />
            <TooltipChart />
          </PieChart>
        </ResponsiveContainer>
        {getDashBoard ? getDashBoard!.UnsuccessfulConsultations.Graphic.map((Item) => <Fragment>
          <styles.dashboardValueLabel modeContext={getModeContext} children={Item.XAxis} />
          <styles.dashboardValueText modeContext={getModeContext} children={Item.YAxis} />
        </Fragment>) : []}
      </styles.dashboardValue>
      <styles.dashboardContainer style={{
        display: "flex",
        flexDirection: "column"
      }} modeContext={getModeContext}>
        <styles.dashboardContainer modeContext={getModeContext} style={{ height: "240px", width: "100%" }}>
          <styles.dashboardValue style={{ minWidth: "23%" }} modeContext={getModeContext}>
            <styles.dashboardValueLabel modeContext={getModeContext} children="titulo" />
            <styles.dashboardValueText modeContext={getModeContext} children="0,00" />
          </styles.dashboardValue>
          <styles.dashboardValue style={{ minWidth: "23%" }} modeContext={getModeContext}>
            <styles.dashboardValueLabel modeContext={getModeContext} children="titulo" />
            <styles.dashboardValueText modeContext={getModeContext} children="0,00" />
          </styles.dashboardValue>
          <styles.dashboardValue style={{ minWidth: "23%" }} modeContext={getModeContext}>
            <styles.dashboardValueLabel modeContext={getModeContext} children="titulo" />
            <styles.dashboardValueText modeContext={getModeContext} children="0,00" />
          </styles.dashboardValue>
        </styles.dashboardContainer>
        <styles.dashboardValue modeContext={getModeContext} style={{ height: "100%" }}>
          <styles.dashboardValueLabel modeContext={getModeContext} children="titulo" />
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={[
                {
                  name: 'Page A',
                  uv: 4000,
                  pv: 2400,
                  amt: 2400,
                },
                {
                  name: 'Page B',
                  uv: 3000,
                  pv: 1398,
                  amt: 2210,
                },
                {
                  name: 'Page C',
                  uv: 2000,
                  pv: 9800,
                  amt: 2290,
                }
              ]}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="uv" />
              <TooltipChart />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </styles.dashboardValue>
      </styles.dashboardContainer>
    </styles.dashboardContainer>
  </styles.container>
});