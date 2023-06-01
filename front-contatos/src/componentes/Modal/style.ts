import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  
  background: rgba(18, 18, 20, 0.5);
`

export const ContainerModal = styled.div`
  
  width: 35%;
  height: 450px;
  position: absolute;
  top: 20%;
  left: 30%;

  background-color: var(--blue1);

  overflow-y: auto;

  border-radius: 10px 10PX;

  span {
    display: flex;
    justify-content: space-between;

    padding: 20px;
    margin-bottom: 10px;

    background: var(--blue1);
    border-radius: 4px 4px 0px 0px;
    
    button {
      width: 30px;
      height: 20px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    width: 90%;
    margin: auto;

    button {
      width: 100%;
      height: 30px;
      margin-bottom: 20px;
    }
  }

  h2 {
    width: 50%;
    font-weight: 700;
    font-size: 14px;

    color: var(--brand1);
  }

  label {
    font-weight: 400;
    font-size: 10px;

    color: var(--gray2);
    padding-bottom: 5px;
  }

  input {
    width: 100%;
    height: 30px;
    font-size: 11.3px;

    background: var(--blue2);

    border: 1px solid var(--blue1);
    border-radius: 4px;

    padding-left: 25px;
    margin-bottom: 10px;
    
  }

  input:focus {
    outline-color: var(--brand2);
  }

  input:disabled{
    cursor: not-allowed;

    opacity: .5;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: red;
    
    font-size: 10px;
  }

  @media(max-width: 743px) {
    width: 50%;
    left: 20%;
  }

   @media(max-width: 420px) {
    width: 80%;
    left: 40px;
  }
  

`

export const ContactsUl = styled.ul`
  
  width: 90%;

  margin: auto;

  h3 {
    width: 90%;
    padding: 0 0 0 25%;

    color: var(--gray2);
  }

  li {
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 5px;

    padding: 10px 15px;
    margin-bottom: 10px;

    border: 1px solid var(--brand1);
    border-radius: 12px;

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