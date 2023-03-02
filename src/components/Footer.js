import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    width: 100%;
    height: 44px;
    background-color: #F5F8F9;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const P = styled.p`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #738192;
`;

export default class Footer extends React.Component {
    render() {
        return (
            <FooterDiv>
                <P>©2019, BLiP Todos os direitos reservados | <b>Termos de Uso</b></P>
            </FooterDiv>
        );
    }
}