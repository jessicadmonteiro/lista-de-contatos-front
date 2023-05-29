import styled from "styled-components"

export const ContainerHome = styled.div`
    width: 65%;

    position: absolute;
    top: 20%;
    left: 20%;

    padding: 20px;

    border: solid 1px var(--brand2);
    border-radius: 10px;

`

export const HeaderHome = styled.header`
    display: flex;
    align-items: center;

    padding: 20px 60px;
    margin-top: 20px;

    border-bottom: 1px solid var(--brand1);

    h3 {
        width: 80%;

        font-weight: 700;
        font-size: 18px;

        color: var(--gray2);
    }

    button {
        width: 20%;
    }
`


export const ContainerButtonContacts = styled.div`

    display: flex;
    gap: 35px;

    margin: 50px 0 0 60px;
    padding-bottom: 50px;

    p {
        padding: 10px; 
    }

    button {
        width: 16%;
        height: 35px;

        font-size: 12px;

        color: var(--brand2);
        background-color: var(--blue1);

        border: 1.2px solid var(--brand1);
        border-radius: 4px;
        
        margin-bottom: 1px;
    }
`