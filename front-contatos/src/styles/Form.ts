import styled from "styled-components"


export const ContainerForm = styled.div`
  width: 30%;

  position: absolute;
  top: 20%;
  left: 35%;

  padding: 20px;
  border: solid 1px var(--brand2);
  border-radius: 10px;

  h2 {
    font-weight: 700;
    font-size: 18px;

    color: var(--gray2);

    text-align: center;
    padding-bottom: 15px;
  }

  p {
    text-align: center;

    font-weight: 600;
    font-size: 12px;
    color: var(--gray1);

    margin: 15px;
  }

  @media(max-width: 740px){
    width: 70%;
    left: 15%;
  }

  @media(max-width: 440px){
    width: 90%;
    left: 5%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: var(--gray1);
    font-weight: 400;
    font-size: 10.5px;

    padding-bottom: 5px;
  }

  input {
    width: 100%;
    height: 48px;
    font-size: 11.3px;

    background: var(--blue2);

    border: 1.2182px solid var(--blue1);
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

  
`