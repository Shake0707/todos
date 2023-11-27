import styled from "styled-components";

export const Frame = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: relative;
    margin-right: 24px;
    border-radius: 50%;
    background-position: center;
    background-image: url('./assets/complated.png');
    border: 1.6px solid var(--todo-complated-borderColor);

    /* ? */
    &.active {
        border: none;
    }
    &.active>div{
        width: 0;
        height: 0;
    }
    
    &:hover {
        border-color: transparent;
    }

    &>div {
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: var(--todo-backColor);
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    }
`