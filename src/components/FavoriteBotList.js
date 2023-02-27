import React from 'react';
import styled from 'styled-components';
import FavoriteBotCard from './FavoriteBotCard';
import StyledDiv from './StyledDiv';

const FavoriteBotListDiv = styled.div`
    padding: 0 100px;
`;

const H2 = styled.h2`
    width: 143px;
    height: 40px;

    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    
    color: #607B99;
`;

const HrDiv = styled.div`
    border-bottom: 1px solid #D2DFE6;
    margin-top: 25px;
    margin-bottom: 50px;
`;

export default class FavoriteBotList extends React.Component {
    
    render() {
        const { bots } = this.props;

        return (
            <>
                <FavoriteBotListDiv>
                    <H2>Favorites</H2>
                    <StyledDiv>
                        {bots.map(bot => (
                            <FavoriteBotCard name={bot.name} type={bot.type} key={bot.name}>
                            </FavoriteBotCard>
                        ))}
                    </StyledDiv>
                    <HrDiv />
                </FavoriteBotListDiv>
            </>
        );
    }
}