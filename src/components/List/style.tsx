import styled from "styled-components";

export const Frame = styled.div`
    margin-top: 24px;

    @media screen and (max-width: 550px){
        & #desktop-filter {
            display: none;
        }

        & #mobile-filter {
            display: flex;
            color: var(--filter-textColor);
        }
    }

    & #forowerflow {
        overflow: hidden;
        border-radius: 5px;
        background-color: var(--todo-backColor);
    }
`

export const ItemsFrame = styled.div`
    box-shadow: 0px 35px 50px -15px var(--todo-shadowColor);
`