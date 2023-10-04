import { modeContext } from '@/utils';
import styled from 'styled-components';

export const view = styled.div<{ modeContext: modeContext }>`
    align-items: center;
    background: ${prop => prop.modeContext == modeContext.darkMode ? "#242423" : "#FFFFFF"};
    display: flex;
    justify-content: right;
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
    box-shadow: -2px 0px 23px rgba(0, 0, 0, 0.1);
    height: calc(200vh);
    left: 50%;
    position: fixed;
    width: 100vw;
`;
circle01.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const circle02 = styled.div<{ modeContext: modeContext }>`
    background: ${prop => prop.modeContext == modeContext.darkMode ? "#1D1D1B" : "#1EBADD"};
    border: 5px solid #1EBADD;
    border-radius: 100%;
    box-shadow: -93px 0px 37px rgba(0, 0, 0, 0.01), -52px 0px 31px rgba(0, 0, 0, 0.05), -23px 0px 23px rgba(0, 0, 0, 0.09), -6px 0px 13px rgba(0, 0, 0, 0.1);
    height: calc(200vh);
    left: calc(50% + 50px);
    position: fixed;
    width: calc(100vw + 50px);
`;
circle02.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const iconWithText = styled.svg<{ modeContext: modeContext }>`
    left: 5%;
    position: fixed;
    top: 10%;
    width: 25vw;
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
export const modeContextIcon = styled.div<{ modeContext: modeContext }>`
    cursor: pointer;
    right: 5%;
    position: absolute;
    top: 5%;
`;
modeContextIcon.shouldForwardProp = (prop) => !['modeContext'].includes(prop);