import React from 'react';
import StyledCard from './StyledCard';
import Link from 'next/link';
import styled from 'styled-components';

const BotImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-bottom: 15px;

  background: #55CFFF;
`;

const BotName = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #52636C;
  margin: 0;
`;

const BotType = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: #738192;
  margin: 0;
`;

const StyledButton = styled.button`
  margin-left: -140px;
  margin-top: -25px;
  border: none;
  background-color: #fff;

  :hover {
    cursor: pointer;
  }
`;

export default class BotCard extends React.Component {    
      render() {    
        return(
          <>
            <StyledCard>
              <StyledButton><img src='/images/favoriteGray.svg' alt='Not favorited'></img></StyledButton>
              <BotImage />
              <BotName>{this.props.name}</BotName>
              <BotType>{this.props.type === 'builder' ? 'Builder' : 'Router'}</BotType>
              {/*<Link href={`/${shortName}/details`}>See</Link>*/}
            </StyledCard>
          </>
        );
      }
}