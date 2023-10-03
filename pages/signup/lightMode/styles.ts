import styled from 'styled-components';

export const superFormControlLogin = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 20%;
`;
export const formControlLogin = styled.div`
    align-items: center;
    border: 1px solid #1EBADD;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 3%;
    width: 100%;

    .title {
        color: white;
        font-size: 20pt;
    };
`;
export const signin = styled.div`
    color: #1D1D1B;
    
    .text {
        color: white;
    };
    .link {
        color: #1EBADD;
        text-decoration: none;
    };
`;