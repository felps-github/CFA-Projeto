import styled from 'styled-components';

export const Header = styled.header`
    position: absolute;
    width: 1000px;
    height: 96px;
    left: 0px;
    top: 0px;
    
    img {
        position: absolute;
        width: 282px;
        height: 30px;
        left: 30px;
        top: 30px;
    }
    nav{
        position: absolute;
        width: 654px;
        height: 48px;
        left: 388px;
        top: 24px;
    }
`;

export const LinkComo = styled.div`
a{
    position: absolute;
    text-decoration: none;
    color: #000;
    width: 105px;
    height: 20px;
    left: 300px;
    top: 24px;
}
`;

export const LinkRegu = styled.div`
a{
    position: absolute;
    text-decoration: none;
    color: #000;
    width: 90px;
    height: 20px;
    left: 500px;
    top: 24px;
}
`;

export const LinkFale = styled.div`
a{
    color: #000;
    text-decoration: none;
    position: absolute;
    width: 90px;
    height: 20px;
    left: 700px;
    top: 24px;
    
}
   
`;

export const Formul = styled.form`

    position: absolute;
    width: 382px;
    height: 200px;
    left: 88px;
    top: 280px;
    text-align: center;
`;

export const Template = styled.div`
    img {
        position: absolute;
        width: 500px;
        height: 470px;
        left: 700px;
        top: 90px;
    }
`;

export const Icon = styled.div`
    img{
    position: absolute;
    width: 116px;
    height: 115px;
    left: 222px;
    top: 110px;
    }
    
`;
export const ButtonLogin = styled.div`
    button{
        width: 382px;
        background-color: #F69809;
        color: #FFFF;
        
    }
    background-color: #F69809;
    
    position: absolute;
    left: 92px;
    top: 450px;
    background-color: none;
    border-color: white;
`;

export const InputCPF = styled.label`
    input{
        width: 350px;
    }
`;
export const InputSenha = styled.label`
    input{
        width: 350px;
    }
`;