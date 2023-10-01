import styled from 'styled-components';

export const view = styled.div`
    align-items: center;
    background: black;
    display: flex;
    justify-content: right;
    height: 100vh;
    margin: -8px;
    width: 100vw;
`;
export const FormControlLogin = styled.div`
    align-items: right;
    border: 1px solid #66DAC6;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 5%;
    height: 50%;
    padding: 3%;
`;
export const passwordreset = styled.a`
    color: #66DAC6;
    text-decoration: none;
`;
export const signup = styled.div`
    color: black;
    .text {
        color: white;
    };
    .link {
        color: #66DAC6;
        text-decoration: none;
    };
`;