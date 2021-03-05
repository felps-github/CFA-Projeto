import styled from 'styled-components';

export const Div = styled.div`
    height: 20%;
    .carousel-control-prev-icon{
        background-color: #000;
        width: 50px;
        height: 50px;
    }
    .carousel-control-next-icon{
        background-color: #000;
        width: 50px;
        height: 50px;
    }
    .carousel{
        text-align: center;
        width: auto;
        height: auto;
    }
    .carousel-item{
        height: 50%;
    }
`;

export const DivLogin = styled.div`
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

export const DivTudo = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Header = styled.header`
    nav{
        background-color: #000;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 50px;
    }
    a{
        padding: 8px;
        color: #FFF;
        text-decoration: none;
    }
    a:hover{
        background-color: #979797;
        color: #000;
        text-decoration: none;
    }
    .linkLogin{
        color: #000;
    }
`;

// export const DivHeader = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

export const DivMain = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #000;
    color: #FFF;
    height: 120px;
    .divLocal{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        img{
            width: 25px;
        }
        p{
            width: 200px;
            text-align: center;
        }
    }
    .divInsta{
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            margin-top: 5px;
        }
    }
    .divFace{
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            margin-top: 6px;
        }
    }
    .divTel{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        p{
            font-size: 15px;
            width: 300px;
            text-align: center;
        }
    }
`;

export const DivCopy = styled.div`
    display: flex;
    justify-content: center;
    background-color: #979797;
    color: #FFF;
    div{
        width: 350px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        text-align: center;
        text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
        font-size: 21px;
    }
`;