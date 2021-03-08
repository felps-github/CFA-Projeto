import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 96px;

    img {
        display: flex;
        align-items: center;
        width: 250px;
        height: 30px;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 800px;
        height: 30px;
    }

    a{
        padding: 10px;
        color: #000;
        margin-top: 15px;
    }
    a:hover{
        text-decoration: none;
        color: #FFF;
        background-color: #979797;
    }
    .LinkImgLogo:hover{
        background-color: #FFF;
    }
`;

export const Formul = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .Button{
        background-color: #dd5900;
        height: 50px;
        color: #FFF;   
    }
    .Mui-focused{
        color: #dd5900;
    }
    .MuiFormControl-root{
        width: 350px;
    }
    img{
        width: 120px;
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: space-around;
`;