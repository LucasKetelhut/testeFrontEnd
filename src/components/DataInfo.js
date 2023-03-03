import React from "react";
import styled from 'styled-components';

const DataInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    margin-left: 15px;
`;

const Number = styled.p`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 100%;

    text-align: center;

    color: #52636C;

    margin-bottom: 5px;
`

const NumberInfo = styled.p`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #52636C;

    margin-top: 0;
`;



export default class DataInfo extends React.Component {
    render() {
        return (
            <DataInfoDiv>
                <Number>{this.props.number}</Number>
                <NumberInfo>{this.props.info}</NumberInfo>
            </DataInfoDiv>
        );
    }
}