import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
        width: 100%;
        padding: 16px;
        justify-content:center;
        border:0;
        border-radius:10px;
        margin-top:24px;
        background: #FF9000;
        color: #312E38;
        font-weight:500;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#FF9000')}
        }
`;
