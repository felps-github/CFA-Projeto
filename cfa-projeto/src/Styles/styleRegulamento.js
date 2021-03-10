import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    
    h2{
        text-align: center;
        color: #DD5900;
    }
    hr{
        background-color: #DD5900;
        border-width: 3px;
        width: 300px;
        margin-top: -3px;
    }
    p{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const DivImgs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const DivJobs = styled.div`
    display: flex;
    justify-content: space-evenly;
`;