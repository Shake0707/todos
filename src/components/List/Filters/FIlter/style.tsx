import styled from "styled-components";

export const Frame = styled.form`
    width: 166px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

export const Item = styled.label`
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.194px;
    
    & input {
        display: none;
    }

    &>input[type="radio"]:checked ~ span{
        color: #3A7CFD;
    }
` 