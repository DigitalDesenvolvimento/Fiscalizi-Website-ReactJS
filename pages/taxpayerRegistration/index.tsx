import { controller } from "@/api";
import { FormLabel } from "@chakra-ui/react";
import * as components from "@/components";
import { localization } from '@/data';
import * as format from '@/format';
import { syncfusion } from '@/license';
import '@/public/global.css';
import { modeContext } from "@/utils";
import { L10n, registerLicense, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnMenu, ColumnsDirective, Filter, Grid, GridComponent, Group, Inject, Page, PdfExport, PdfHeaderQueryCellInfoEventArgs, PdfQueryCellInfoEventArgs, Reorder, Resize, Sort, Toolbar } from '@syncfusion/ej2-react-grids';
import cookies from 'js-cookie';
import { Fragment, memo, useEffect, useState } from "react";
import './app.css';
import * as styles from "./styles";
import { uuid } from "@/types";

try {
  registerLicense(syncfusion);
  L10n.load(localization);
  setCulture('pt');
  setCurrencyCode('BRL');
} catch { }

interface Record {
  Id: uuid,
  NameOrCompany?: string,
  SSNorEIN?: string,
  Email?: string,
  DDI?: string,
  DDD?: string,
  Phone?: string
}

export default memo(() => {
  var GridComponentRef: Grid | null;
  const [getModeContext, setModeContext] = useState<modeContext>(modeContext.lightMode);
  const [getShowAddDialog, setShowAddDialog] = useState<boolean>(false);
  const [getRecords, setRecords] = useState<Array<Record>>([{ Id: "0" }, { Id: "1" }]);
  const [getSelectedRecords, setSelectedRecords] = useState<Array<number>>([]);

  const [getNameOrCompany, setNameOrCompany] = useState<string>();
  const [getSSNorEIN, setSSNorEIN] = useState<string>();
  const [getEmail, setEmail] = useState<string>();
  const [getDDI, setDDI] = useState<string>();
  const [getDDD, setDDD] = useState<string>();
  const [getPhone, setPhone] = useState<string>();

  useEffect(() => {
    if (cookies.get('modeContext')) setModeContext(cookies.get('modeContext') as modeContext);
    else if (new Date().getHours() >= 18) setModeContext(modeContext.darkMode);
    else setModeContext(modeContext.lightMode);
  }, []);

  const component_Add = <styles.dialog modeContext={getModeContext}>
    <components.input modeContext={[getModeContext, setModeContext]} formStyle={{marginTop: "10px"}}
      titleValue={`${(getSSNorEIN ?? "").length <= 11 ? "CPF" : "CNPJ"}`}
      inputPlaceholder="Informe o CPF/CNPJ" inputValue={[getSSNorEIN, setSSNorEIN]} OnInputFormat={async (text) => format.cpf.format(text)} />
    <label children="\n"/>
    <components.input modeContext={[getModeContext, setModeContext]} formStyle={{marginTop: "10px"}}
      titleValue={`${(getSSNorEIN ?? "").length <= 11 ? "Nome" : "Razão social"}`}
      inputPlaceholder={`Informe o ${`${(getSSNorEIN ?? "").length <= 11 ? "Nome" : "Razão social"}`.toLowerCase()}`}
      inputValue={[getNameOrCompany, setNameOrCompany]} />
    <label children="\n"/>
    <components.input modeContext={[getModeContext, setModeContext]} formStyle={{marginTop: "10px"}}
      titleValue="Email" inputPlaceholder="Informe o email" inputValue={[getEmail, setEmail]} />
    <label children="\n"/>
    <components.input modeContext={[getModeContext, setModeContext]} formStyle={{marginTop: "10px"}}
      titleValue="DDI" inputPlaceholder="Informe o DDI" inputValue={[getDDI, setDDI]} />
    <label children="\n"/>
    <components.input modeContext={[getModeContext, setModeContext]} formStyle={{marginTop: "10px"}}
      titleValue="DDD" inputPlaceholder="Informe o DDD" inputValue={[getDDD, setDDD]} />
    <label children="\n"/>
    <components.input modeContext={[getModeContext, setModeContext]} formStyle={{marginTop: "10px"}}
      titleValue="Telefone" inputPlaceholder="Informe o número de telefone" inputValue={[getPhone, setPhone]} />
    <label children="\n"/>
  </styles.dialog>;
  const component_Delete = <div>
    {JSON.stringify(getSelectedRecords)}
  </div>;
  const component_Download = <div style={{ display: "flex", flexDirection: "column" }}>
    {(getSelectedRecords.length == 0)
      ? <Fragment>
        <label style={{ fontWeight: "bold", marginBottom: "10px" }} children="Confirma o downlaod de todos os contribuintes?" />
      </Fragment>
      : <Fragment>
        <label style={{ fontWeight: "bold", marginBottom: "10px" }} children="Confirma o downlaod dos seguintes contribuintes:" />
        {getSelectedRecords.map((Item) => <div>
          <label style={{ marginBottom: "10px" }} children={`${getRecords[Item].Id}: ${getRecords[Item].NameOrCompany}`} />
        </div>)}
      </Fragment>}
  </div>;

  return <styles.container modeContext={getModeContext}>
    <FormLabel style={{
      alignItems: "center", color: getModeContext == modeContext.darkMode ? "#FCFCFC" : "#15004C",
      fontSize: "30px", marginBottom: "10px", whiteSpace: "nowrap"
    }} children="Cadastro de contribuinte" />
    <styles.formControl modeContext={getModeContext}>
      <styles.formTitle modeContext={getModeContext}>
        <FormLabel style={{
          alignItems: "center", color: getModeContext == modeContext.darkMode ? "#FCFCFC" : "#15004C",
          fontSize: "20px", marginBottom: "10px", whiteSpace: "nowrap"
        }} children="Lista de contribuintes cadastrados" />
      </styles.formTitle>
      <styles.formButton modeContext={getModeContext}>
        <components.buttonIcon modeContext={[getModeContext, setModeContext]} showButton={true} buttonIcon="TaxpayerRegistration_Delete"
          useDialog={true} titleDialog="Removendo contribuinte..." bodyDialog={component_Delete} validate={async () => {
            if (getSelectedRecords.length == 0) {
              components.toast.showMessage("Nenhum contribuinte foi selecionado", "Marque o(s) contribuinte(s) que deseja excluir", undefined, "info");
              return false;
            }
            else return true;
          }} onClick={async () => {
            setSelectedRecords(GridComponentRef?.getSelectedRecords().map((Item, Index) => Index) ?? [])
          }} onClose={async () => { GridComponentRef!.selectRows(getSelectedRecords); }} />
        <components.buttonIcon modeContext={[getModeContext, setModeContext]} showButton={true} buttonIcon="TaxpayerRegistration_Download"
          useDialog={true} titleDialog="Solicitação de download!" bodyDialog={component_Download} onClick={async () => {
            setSelectedRecords(GridComponentRef?.getSelectedRecords().map((Item, Index) => Index) ?? [])
          }} onClose={async () => { GridComponentRef!.selectRows(getSelectedRecords); }} />
        <components.buttonIcon modeContext={[getModeContext, setModeContext]} showButton={true} buttonIcon="TaxpayerRegistration_Add"
          useDialog={true} titleDialog="Novo contribuinte." bodyDialog={component_Add}
          onClose={async () => { GridComponentRef!.selectRows(getSelectedRecords); }}
          button01_Title="Sim" button01_OnClick={async () => {
            components.toast.showMessage("Novo contribuinte cadastrado!", "O mesmo já se encontra na tabela abaixo", undefined, "success");
            return true;
          }} />
      </styles.formButton>
    </styles.formControl>
    <GridComponent id="GridComponentRef" ref={(ref) => GridComponentRef = ref} dataSource={getRecords} height="100%" width='100%'
      allowResizing={true} allowPaging={true} allowGrouping={true} allowPdfExport={true} allowFiltering={true} allowReordering={true} allowSorting={false}
      pdfHeaderQueryCellInfo={(args: PdfHeaderQueryCellInfoEventArgs | any) => (args.cell as any).row.pdfGrid.repeatHeader = true}
      pdfExportComplete={() => { /*if (GridComponentRef) (GridComponentRef.columns[0] as Column).visible = true;*/ }}
      pdfQueryCellInfo={(args: PdfQueryCellInfoEventArgs) => {
        // if (args.column && args.column.field === "valorAVista") {
        //   if (args.value) args.value = args.value as string
        // }
      }}
      groupSettings={{ showGroupedColumn: true, showUngroupButton: true }}
      filterSettings={{ ignoreAccent: true, immediateModeDelay: 50, mode: "Immediate", type: "Excel" }}
      pageSettings={{ pageSizes: [50, 100, 200], pageSize: 50 }}>
      <ColumnsDirective>
        <ColumnDirective type='checkbox' width='50px' />
        <ColumnDirective field="Id" headerText="Cód." textAlign="Center" width="400px" isPrimaryKey={true} />
        <ColumnDirective field="NameOrCompany" headerText="Nome/Razão social" textAlign="Center" width="400px" isPrimaryKey={false} />
        <ColumnDirective field="SSNorEIN" headerText="CPF/CNPJ" textAlign="Center" width="200px" isPrimaryKey={false} />
        <ColumnDirective field="Email" headerText="Email" textAlign="Center" width="400px" isPrimaryKey={false} />
        <ColumnDirective field="DDI" headerText="DDI" textAlign="Center" width="200px" isPrimaryKey={false} />
        <ColumnDirective field="DDD" headerText="DDD" textAlign="Center" width="200px" isPrimaryKey={false} />
        <ColumnDirective field="Phone" headerText="Telefone" textAlign="Center" width="200px" isPrimaryKey={false} />
      </ColumnsDirective>
      <Inject services={[Filter, ColumnMenu, Group, Page, PdfExport, Reorder, Resize, Sort, Toolbar]} />
    </GridComponent>
  </styles.container>
});