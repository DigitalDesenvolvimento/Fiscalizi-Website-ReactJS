import styled from 'styled-components';

export const view = styled.div`
    align-items: center;
    background: #1D1D1B;
    display: flex;
    justify-content: center;
    height: 100vh;
    margin: -8px;
    position: fixed;
    width: 100vw;
    z-index: -1;
`;
export const circle01 = styled.div`
    border: #1D1D1B;
    border: 5px solid #1EBADD;
    border-radius: 100%;
    bottom: 10%;
    height: 200vh;
    right: 70%;
    position: fixed;
    width: calc(100vw);
`;
export const circle02 = styled.div`
    border: #1D1D1B;
    border: 5px solid #1EBADD;
    border-radius: 100%;
    height: 200vh;
    left: 70%;
    position: fixed;
    width: calc(100vw);
    top: 10%;
`;
export const iconWithText = styled.svg`
    position: fixed;
    top: 10px;
`;
export const iconWithoutText = styled.svg`
    bottom: 0;
    height: 60vh;
    left: 0;
    position: fixed;
    width: 35vw
`;
export const children = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    width: 100vw;
`;