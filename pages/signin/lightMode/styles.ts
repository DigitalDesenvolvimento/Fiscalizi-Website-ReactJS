import styled from 'styled-components';

export const superFormControlLogin = styled.div`
    align-items: center;
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
export const passwordreset = styled.a`
    color: #1EBADD;
    text-decoration: none;
`;
export const signup = styled.div`
    color: #1D1D1B;
    
    .text {
        color: white;
    };
    .link {
        color: #1EBADD;
        text-decoration: none;
    };
`;