import styled from "styled-components";

export const Frame = styled.label`
    display: flex;
    padding: 20px 24px 20px 24px;
    cursor: pointer;
    
    &>input {
        display: none;
    }

    &:hover #del {
        display: block;
    }
`

export const InFrame = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const Text = styled.p`
    color: var(--todo-textColor);
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.25px;
    position: relative;

    &>div {
        display: none;
        width: 100%;
        height: 1.5px;
        background-color: var(--todo-comlated-textColor);
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    }

    &.active {
        color: var(--todo-comlated-textColor);

        &>div {
            display: block;
        }
    }
`

export const Btn_del = styled.div`
    display: none;
    width: 18px;
    height: 18px;
    background-image: url('./assets/x.svg');
    margin-left: auto;
`