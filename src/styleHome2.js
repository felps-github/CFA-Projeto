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