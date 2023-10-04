import { modeContext } from '@/utils';
import styled from 'styled-components';

export const view = styled.div<{ modeContext: modeContext }>`
    align-items: center;
    background: ${prop => prop.modeContext == modeContext.darkMode ? "#242423" : "#FFFFFF"};
    display: flex;
    justify-content: center;
    height: 100vh;
    margin: -8px;
    position: fixed;
    width: 100vw;
    z-index: -1;
`;
view.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const circle01 = styled.div<{ modeContext: modeContext }>`
    background: ${prop => prop.modeContext == modeContext.darkMode ? "#1D1D1B" : "#1EBADD"};
    border: 5px solid #1EBADD;
    border-radius: 100%;
    box-shadow: 70px 0px 28px rgba(0, 0, 0, 0.01), 39px 0px 24px rgba(0, 0, 0, 0.05), 17px 0px 17px rgba(0, 0, 0, 0.09), 4px 0px 10px rgba(0, 0, 0, 0.1);
    bottom: 10%;
    height: 200vh;
    right: 70%;
    position: fixed;
    width: calc(100vw);
`;
circle01.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const circle02 = styled.div<{ modeContext: modeContext }>`
    background: ${prop => prop.modeContext == modeContext.darkMode ? "#1D1D1B" : "#1EBADD"};
    border: 5px solid #1EBADD;
    border-radius: 100%;
    box-shadow: -82px 0px 33px rgba(0, 0, 0, 0.01), -46px 0px 28px rgba(0, 0, 0, 0.05), -21px 0px 21px rgba(0, 0, 0, 0.09), -5px 0px 11px rgba(0, 0, 0, 0.1);
    height: 200vh;
    left: 70%;
    position: fixed;
    width: calc(100vw);
    top: 10%;
`;
circle02.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const iconWithText = styled.svg<{ modeContext: modeContext }>`
    position: fixed;
    top: 10px;
`;
iconWithText.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const iconWithoutText = styled.svg<{ modeContext: modeContext }>`
    bottom: 0;
    height: 60vh;
    left: 0;
    position: fixed;
    width: 35vw;
`;
iconWithoutText.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const children = styled.div<{ modeContext: modeContext }>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    width: 100vw;
`;
children.shouldForwardProp = (prop) => !['modeContext'].includes(prop);