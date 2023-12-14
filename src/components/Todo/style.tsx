import styled from "styled-components";

export const Frame = styled.div`
    width: 100%;
    position: absolute;
    top: 70px;
`

export const InFrame = styled.div`
    max-width: 540px;
    margin: 0 auto;
    padding: 0 24px;
`

export const Head = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MainTitle = styled.h1`
    color: #FFF;
    font-size: 40px;
    letter-spacing: 15px;

    @media screen and (max-width: 500px) {
        & {
            font-size: 35px;
            letter-spacing: 12px;
        }
    }
`