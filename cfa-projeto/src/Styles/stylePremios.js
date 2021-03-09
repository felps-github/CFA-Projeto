import styled from 'styled-components';

export const DivContainers = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFF;
    margin-top: 80px;
    flex-wrap: wrap;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        .Button{
            margin-top: -25px;
            margin-bottom: 100px;
            background-color: #000;
            border-radius: 100px;
            width: 250px;
            height: 50px;
            color: #FFF;
        }
    }
    .base{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #DD5900;
        color: #FFF;
        width: 350px;
        height: 300px;
    p{
        font-size: 50px;
    }
    small{
        font-size: 20px;
    }
    }
`;

export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E7E7E7;
    height: 250px;

    img{
    width: 350px;
    height: 150px;
    }
`;