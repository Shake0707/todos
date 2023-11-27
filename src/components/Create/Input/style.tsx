import styled from "styled-components";

export const Input = styled.input`
    width: calc(100% - 72px);
    color: var(--create-inp-textColor);
    caret-color: #3A7CFD;

    &::placeholder {
        color: var(--create-inpColor);
    }
`