import React from 'react';
import styled from 'styled-components';
import BotCard from './BotCard';
import StyledDiv from './StyledDiv';

const BotListDiv = styled.div`
    padding: 0 100px;
`;

export default class BotList extends React.Component {
    
    render() {
        const { bots } = this.props;

        return (
            <>
                <BotListDiv>
                    <StyledDiv>
                        {bots.map(bot => (
                            <BotCard name={bot.name} type={bot.type} key={bot.name}>
                            </BotCard>
                        ))}
                    </StyledDiv>
                </BotListDiv>
            </>
        );
    }
}