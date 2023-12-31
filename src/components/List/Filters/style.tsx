import styled from "styled-components";

export const Frame = styled.div`
    color: var(--filter-textColor);
    padding: 16px 24px 20px 24px;
    display: flex;

    & span, label {
        &:hover {
            color: var(--filter-hover);
        }
    }

    @media screen and (max-width: 550px){
        & {
            justify-content: space-between;
        }
    }
`

export const ItemsCount = styled.p`
    font-size: 14px;
    letter-spacing: -0.194px;
`