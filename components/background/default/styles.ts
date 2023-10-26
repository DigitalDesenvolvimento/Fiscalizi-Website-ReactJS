import { modeContext } from '@/utils';
import styled from 'styled-components';

export const view = styled.div<{ modeContext: modeContext }>`
    align-items: flex-start;
    background: ${prop => prop.modeContext == modeContext.darkMode ? "#242423" : "#F3F3F3"};
    display: flex;
    justify-content: left;
    height: 100vh;
    margin: -8px;
    position: fixed;
    width: 100vw;
    z-index: -1;
`;
view.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const topHeader = styled.div<{ modeContext: modeContext }>`
    align-items: center;
    background: ${prop => prop.modeContext == modeContext.darkMode ? "transparent" : "transparent"};
    display: flex;
    flex-direction: row;
    justify-content: right;
    height: 70px;
    margin-left: "25%";
    right: 0;
    position: absolute;
    width: 75%;
`;
topHeader.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const leftHeader = styled.div<{ modeContext: modeContext }>`
    align-items: center;
    background: ${prop => prop.modeContext == modeContext.darkMode ? "#1D1D1B" : "#FCFCFC"};
    box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 25%;
`;
leftHeader.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const rightHeader = styled.div<{ modeContext: modeContext }>`
    align-items: start;
    background: ${prop => prop.modeContext == modeContext.darkMode ? "transparent" : "transparent"};
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 100vh;
    margin-left: 20px;
    margin-top: 70px;
    border: black;
    width: 75%;
`;
rightHeader.shouldForwardProp = (prop) => !['modeContext'].includes(prop);