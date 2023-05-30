import styled from "styled-components"

export const ContainerHome = styled.div`
  width: 65%;

  position: absolute;
  top: 20%;
  left: 20%;

  padding: 20px;

  border: solid 1px var(--brand2);
  border-radius: 10px;
`;

export const HeaderHome = styled.header`
 
  display: flex;
  align-items: center;

  padding: 20px 12%;
  margin: auto;
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

export const ButtonfirstLetterUser = styled.button`
  width: 50px;
  height: 50px;

  border: 1px solid var(--brand1);
  border-radius: 50%;

  color: var(--brand1);
  background-color: transparent;

  margin-right: 10px;
`

export const ConteinerUl = styled.ul`
  width: 90%;
  height: 376px;

  margin: auto;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--gray1); 
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--brand2); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--brand1); 
  }

  h3 {
    width: 65%;
    padding: 0 0 0 25%;

    color: var(--gray2);

    margin: auto;
  }

  li {
    width: 70%;

    display: flex;
    justify-content: space-between;
    gap: 5px;

    padding: 10px 15px;
    margin: 10px auto;

    border: 1px solid var(--brand1);
    border-radius: 12px;
  }

`

export const ContainerTitleContacs = styled.div`
  width: 70%;

  display: flex;
  justify-content: space-between;

  margin: auto;
  padding: 10px 5px;
  
  h2{
    text-align: center;

    color: var(--gray2);
  }

  
  button {
    
    width: 20%;
    height: 35px;
    
    font-size: 12px;

    color: var(--brand2);
    background-color: var(--blue1);

    border: 1.2px solid var(--brand1);
    border-radius: 4px;

    margin-bottom: 1px;

    span {
      font-size: 20px;

      padding: 0 5px;
      margin-left: 10px;
      
      border: 1px solid;
    }
  }

`

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  gap: 10PX;

`
export const ContainerDivLi = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    padding-bottom: 5px;

    h4 {
    font-size: 13px;

    color: var(--gray2);
    }

    p {
    font-size: 11px;

    color: var(--gray2);
    }

  }
`

export const ContainerSearch = styled.div`
  margin-top: 30px;
  
  span {
    width: 63%;
    height: 50px;

    display: flex;
    align-items: center;
    gap: 10px;

    border: 1px solid var(--brand1);
    border-radius: 10px;

    margin: auto auto 30px;
    padding-left: 20px;
   
  }

  input {
    width: 80%;
    height: 30px;

    border: transparent;
    background-color: var(--blue1);

    padding-left: 10px;
  }

  input:focus {
    outline-color: var(--brand2);
  }

  input:disabled{
    cursor: not-allowed;

    opacity: .5;
  }

  img {
    height: 30px;
  }

`

