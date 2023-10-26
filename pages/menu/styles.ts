import { modeContext } from '@/utils';
import styled from 'styled-components';

export const superFormControl = styled.div<{ modeContext: modeContext }>`
    align-items: start;
    display: flex;
    flex-direction: column;
    height: 400px;
    margin-right: 8%;
    width: 20%;

    .title {
        color: white;
        font-size: 25pt;
        margin-bottom: 10px;
    };
`;
superFormControl.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const formControl = styled.div<{ modeContext: modeContext }>`
    align-items: center;
    background: ${prop => prop.modeContext == modeContext.darkMode ? "#1D1D1B" : "#FFFFFF"};
    border: 1px solid ${prop => prop.modeContext == modeContext.darkMode ? "#1EBADD" : "transparent"};
    border-radius: 5%;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 3%;
    width: 100%;

    .title {
        color: ${prop => prop.modeContext == modeContext.darkMode ? "#FFFFFF" : "#211C45"};
        font-size: 20pt;
    };
`;
formControl.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const passwordreset = styled.a<{ modeContext: modeContext }>`
    color: #1EBADD;
    text-decoration: none;
`;
passwordreset.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const line = styled.div`
    width: 100%;
    height: 0px;

    border: 0.5px solid #000000;
`;
line.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const signup = styled.div<{ modeContext: modeContext }>`
    .text {
        color: ${prop => prop.modeContext == modeContext.darkMode ? "#FFFFFF" : "#1D1F20"};
    };
    .link {
        cursor: pointer;
        color: #1EBADD;
        text-decoration: none;
    };
`;
signup.shouldForwardProp = (prop) => !['modeContext'].includes(prop);