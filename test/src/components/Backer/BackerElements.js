import styled from 'styled-components';

export const BackerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: bold;
`;

export const BackerHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 35%;
    width: 30%;
`;

export const BackerInfo = styled.div`
    text-align: center;
`;

export const BackerImg = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;


    @media screen and (max-width: 768px) {
        display: none;
    }    
`;

export const BackerItem = styled.li`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;

    text-align: left; 
    justify-content: center;
    padding: 20px 50px;
`
