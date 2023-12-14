import styled from "styled-components";

export const Frame = styled.div`
    width: 100%;
    margin-top: 16px;
    display: none;
    box-shadow: 0px 35px 50px -15px var(--todo-shadowColor);
`

export const InFrame = styled.div`
    background-color: var(--todo-backColor);
    padding: 15px 80px;
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
`