import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #dd5900;
    color: #FFF;
    #filled-basic{
        background-color: #FFF;
    }
    textarea{
        background-color: #FFF;
        width: 700px;
    }
    .MuiFormControl-root{
        width: 700px;
    }
    h2{
        margin-top: 20px;
    }
`;
export const Formul = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    .Button{
        background-color: #000;
        color: #FFF;
        width: 400px;
    }
`;