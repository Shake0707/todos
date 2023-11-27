import styled from "styled-components";

export const Frame = styled.form`
    margin-top: 40px;
    padding: 20px 0 20px 24px;
    background-color: var(--todo-backColor);
    border-radius: 5px;
    box-shadow: 0px 35px 50px -15px var(--todo-shadowColor);
    display: flex;

    &>input[type="checkbox"] {
        display: none;
    }
`