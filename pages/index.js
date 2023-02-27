import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../src/api';
import AddButton from '../src/components/AddButton';
import BotList from '../src/components/BotList';
import FavoriteBotList from '../src/components/FavoriteBotList';
import FirstSection from '../src/components/FirstSection';
import Header from '../src/components/Header';

const Title = styled.h1`
  text-align: center;
`;

export default function Home() {

  const [isOnline, setIsOnline] = useState(false);
  const [bots, setBots] = useState([]);

  useEffect(() => {
    async function getTeams() {
      try {
        const { data } = await api.get("bots"); 
        setBots(data);
        setIsOnline(true);
      } catch (error) {
        console.log(error);
      }
    }
    getTeams();
  }, []);

  while (!isOnline) {
    return <Title>Loading...</Title>;
  }
  return (
    <>
      <Header />
      <FirstSection />
      <FavoriteBotList bots={bots}></FavoriteBotList>
      <BotList bots={bots}></BotList>
      <AddButton />
    </>
  );
}
