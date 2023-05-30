import styled, { keyframes } from "styled-components"

const animation = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
`

export const ContainerSpinner = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;

  margin: 10% auto 0 auto;

  background-color: var(--brand1);
  border-radius: 50%;

`

export const SpinnerImg = styled.img`
  width: 40px;
  height: 40px;

  margin: auto;

  animation: ${animation} 1s infinite linear;

`
