const { styled, css } = require("styled-components");

export const CardTitle = styled.a`
    font-size: 1.25rem;
    cursor: pointer;
    text-decoration: none;
    ${props => 
        props.$primary ? css`color: green` : ''
    }
    ${props => 
        props.$danger ? css`color: red` : ''
    }

`