import { modeContext } from '@/utils';
import styled from 'styled-components';

export const superFormControl = styled.div<{ modeContext: modeContext }>`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 20%;
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
    .text {
        color: ${prop => prop.modeContext == modeContext.darkMode ? "#FFFFFF" : "#211C45"};
    };
`;
formControl.shouldForwardProp = (prop) => !['modeContext'].includes(prop);