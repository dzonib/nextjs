import styled from 'styled-components'


export const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1.4rem;
    height: 3rem;
    align-items: center;
    font-weight: bold;
    background: black;
    a {
        color: black;
        min-width: 5rem;
        text-align: center;
        transform: skewX(-20deg);
        background: #f4f4f4;
        transition: all 0.3s;
        &:hover {
            color: black;
            transform: scale(1.4);
            transition: all 0.3s;
        }
        &:active {
            color: black;
            transform: scale(1.4);
            transition: all 0.3s;
        }
    }
`
