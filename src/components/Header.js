import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    width: 100%;
    height: 44px;
    background-color: #1A2437;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default class Header extends React.Component {
    render() {
        return (
            <HeaderDiv>
                <img src="/images/logo.svg" alt="Logotipo"/>
            </HeaderDiv>
        );
    }
}