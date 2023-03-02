import React from 'react';
import styled from 'styled-components';

const BotInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const BotName = styled.p`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin: 0;

    color: #56616E;
`;

const BotType = styled.p`
    font-family: 'Nunito Sans';
    color: #8CA0B3;
    font-size: 14px;
    margin: 0;
`;

export default class BotInfo extends React.Component {
    render() {
        return (
            <BotInfoDiv>
                <BotName>{this.props.name}</BotName>
                <BotType>Id: {this.props.id}</BotType>
            </BotInfoDiv>
        );
    };
} ;