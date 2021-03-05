import styled from 'styled-components';

export const Header = styled.header`
    nav{
        background-color: #000;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 50px;
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    margin-right: 10px;
     .icon{
        width: 50px;
        margin-right: 10px;
    }
    a{
        font-family: Roboto;
        color: #000;
        text-decoration: none;
    }
`;

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
`;

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LinkRegula = styled.div`
    a{
        background-color: #000;
        color: #FFF;
        text-decoration: none;
    }
`;

export const LinkFaleCon = styled.div`
    a{
        background-color: #000;
        color: #FFF;
        text-decoration: none;
        
    }
`;

export const LinkPremios = styled.div`
    a{
        background-color: #000;
        color: #FFF;
        text-decoration: none;
        
    }
    a:hover{
        
    }
`;

export const Footer = styled.footer`
    background-color: #000;

`;
export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #979797;
    color: #FFF;
    height: 50px;
    div{
        font-weight: bold;
        text-align: center;
        width: 250px;
    }
`;