import { modeContext } from '@/utils';
import styled from 'styled-components';

import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-calendars/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-notifications/styles/material.css';
import "@syncfusion/ej2-react-grids/styles/material.css";

export const container = styled.div<{ modeContext: modeContext }>`
    background: "transparent";
    align-items: start;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;
container.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const formButton = styled.div<{ modeContext: modeContext }>`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%
`;
formButton.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const formTitle = styled.div<{ modeContext: modeContext }>`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
formTitle.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const formControl = styled.div<{ modeContext: modeContext }>`
    align-items: end;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
formControl.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const dialog = styled.div<{ modeContext: modeContext }>`
    height: 100%;
    width: 100%;
`;
dialog.shouldForwardProp = (prop) => !['modeContext'].includes(prop);