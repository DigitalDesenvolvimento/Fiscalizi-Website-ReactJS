import { modeContext } from '@/utils';
import styled from 'styled-components';

export const container = styled.div<{ modeContext: modeContext }>`
   height: 100%;
    width: 100%;
`;
container.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const dashboardContainer = styled.div<{ modeContext: modeContext }>`
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    width: 100%;
`;
dashboardContainer.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const dashboardValue = styled.div<{ modeContext: modeContext }>`
    background: #FFFFFF;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    min-height: 60px;
    min-width: 210px;
    padding: 20px;
    margin: 20px;
`;
dashboardValue.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const dashboardValueLabel = styled.label<{ modeContext: modeContext }>`
    align-items: end;
    display: flex;
    flex-direction: column;
    font-size: 100%;
    justify-content: center;
    height: 30%;
    width: 100%;
`;
dashboardValue.shouldForwardProp = (prop) => !['modeContext'].includes(prop);
export const dashboardValueText = styled.label<{ modeContext: modeContext }>`
    align-items: end;
    display: flex;
    flex-direction: column;
    font-size: 300%;
    font-weight: bold;
    justify-content: center;
    height: 100%;
    width: 100%;
`;
dashboardValueText.shouldForwardProp = (prop) => !['modeContext'].includes(prop);