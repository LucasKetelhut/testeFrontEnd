import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../src/api';
import AddButton from '../src/components/AddButton';
import BotComplement from '../src/components/BotComplement';
import BotImage from '../src/components/BotImage';
import BotListImage from '../src/components/BotListImage';
import BotName from '../src/components/BotName';
import FavoriteButton from '../src/components/FavoriteButton';
import FavoriteListButton from '../src/components/FavoriteListButton';
import Header from '../src/components/Header';
import RouterImage from '../src/components/RouterImage';
import RouterListImage from '../src/components/RouterListImage';
import SearchField from '../src/components/SearchField';
import StyledButton from '../src/components/StyledButton';
import StyledCard from '../src/components/StyledCard';
import StyledDiv from '../src/components/StyledDiv';
import StyledListCard from '../src/components/StyledListCard';

const Title = styled.h1`
  text-align: center;
`;

const BotListDiv = styled.div`
    padding: 0 100px;
    height: 100%;
    background-color: #F5F8F9;
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

const SectionDiv = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const FilterDiv = styled.div`
    display: flex;
`;

const H1 = styled.h1`
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    color: #56616E;
`;

const Button = styled.button`
    border: none;
    background-color: #F5F8F9;
    margin: 0 2.5px;

    :hover {
        cursor: pointer;
    }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;
  background-color: #F5F8F9;
`;

export default function Home() {

  const [isOnline, setIsOnline] = useState(false);
  const [botList, setBotList] = useState([]);
  const [botListToShow, setBotListToShow] = useState([]);
  const [shouldReload, setShouldReload] = useState(false);
  const [blockVisualization, setBlockVisualization] = useState(true);
  const [listVisualizaton, setListVisualization] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getBots() {
      try {
        const { data } = await api.get("bots");

        let botsWithFavoriteAttribute = [];

        for (let i = 0; i < data.length; i++) {
          let bot = {
            name: data[i].name,
            created: data[i].created,
            type: data[i].type,
            favorited: false,
            favoritedImage: '/images/favoriteGray.svg'
          };

          botsWithFavoriteAttribute.push(bot);
        }

        setBotList(botsWithFavoriteAttribute);
        setBotListToShow(botsWithFavoriteAttribute);
        
        setIsOnline(true);
      } catch (error) {
        console.log(error);
      }
    }
    getBots();
  }, []);

  useEffect(() => {
    let filteredList = botList.filter(bot => bot.name.toLowerCase().includes(search.toLowerCase()));

    setBotListToShow(filteredList);
    
  }, [search]);
  
  const setFavorite = (bot) => {
    if (bot.favorited) {
      bot.favoritedImage = '/images/favoriteGray.svg';
    } else {
      bot.favoritedImage = '/images/favoriteYellow.svg';
    };
    bot.favorited = !bot.favorited;
  }

  const compareName = (a, b) => {
    if (a.name < b.name){
      return -1;
    }
    if (a.name > b.name){
      return 1;
    }
    return 0;
  }

  const compareCreation = (a, b) => {
    if (a.created < b.created){
      return -1;
    }
    if (a.created > b.created){
      return 1;
    }
    return 0;
  }

  const orderByName = () => {
    botListToShow.sort(compareName);
    setShouldReload(!shouldReload);
  }

  const orderByCreation = () => {
    botListToShow.sort(compareCreation);
    setShouldReload(!shouldReload);
  }

  while (!isOnline) {
    return <Title>Loading...</Title>;
  }
  return (
    <>
      <Div>
        <Header />
        <SectionDiv>
          <H1>My chatbots</H1>
          <FilterDiv>
              <SearchField type="search" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
              <StyledButton
                onClick={() => orderByName()}
              >Order by name</StyledButton>
              <StyledButton
                onClick={() => orderByCreation()}
              >Order by creation</StyledButton>
              <Button
                onClick={() => {
                  setBlockVisualization(true);
                  setListVisualization(false);
                }}
              ><img src={blockVisualization? '/images/blocks_selected.svg' : '/images/blocks.svg'} alt='Blocks'></img></Button>
              <Button
                onClick={() => {
                  setBlockVisualization(false);
                  setListVisualization(true);
                }}
              ><img src={listVisualizaton ? '/images/list_selected.svg': '/images/list.svg'} alt='List'></img></Button>
          </FilterDiv>
        </SectionDiv>
        <BotListDiv>
          <H2>Favorites</H2>
          {blockVisualization && (
            <>
              <StyledDiv>
                {botListToShow.filter(bot => bot.favorited).map((bot) => {
                return (
                  <>
                  <StyledCard>
                    <FavoriteButton
                      onClick={() => {
                          setFavorite(bot);
                          setShouldReload(!shouldReload);
                        }
                      }
                    ><img src={bot.favoritedImage} alt='Favorite Button'></img></FavoriteButton>
                    {bot.type === 'router' ? <RouterImage /> : <BotImage />}
                    <Link href={`/bots/${bot.name}`}><BotName>{bot.name}</BotName></Link>
                    <BotComplement>{bot.type === 'router' ? 'Router' : 'Builder'}</BotComplement>
                  </StyledCard>
                </>
                );
              })}
            </StyledDiv>
            <HrDiv />
            <StyledDiv>
              {botListToShow.filter(bot => !bot.favorited).map((bot) => {
                return (
                  <>
                  <StyledCard>
                    <FavoriteButton
                      onClick={() => {
                        setFavorite(bot);
                        setShouldReload(!shouldReload);
                      }
                    }
                    ><img src={bot.favoritedImage} alt='Favorite Button'></img></FavoriteButton>
                    {bot.type === 'router' ? <RouterImage /> : <BotImage />}
                    <Link href={`/bots/${bot.name}`}><BotName>{bot.name}</BotName></Link>
                    <BotComplement>{bot.type === 'router' ? 'Router' : 'Builder'}</BotComplement>
                  </StyledCard>
                </>
                );
              })}
            </StyledDiv>
          </>
          )}
          {listVisualizaton && (
            <>
              {botListToShow.filter(bot => bot.favorited).map((bot) => {
                return (
                  <>
                    <StyledListCard>
                      <FavoriteListButton
                        onClick={() => {
                            setFavorite(bot);
                            setShouldReload(!shouldReload);
                          }
                        }
                      ><img src={bot.favoritedImage} alt='Favorite Button'></img></FavoriteListButton>
                        {bot.type === 'router' ? <RouterListImage /> : <BotListImage />}
                        <Link href={`/bots/${bot.name}`}><BotName>{bot.name}</BotName></Link>
                      <BotComplement>{`Created at ${new Date(Date.parse(bot.created)).toLocaleDateString()}`}</BotComplement>
                    </StyledListCard>
                  </>
                );
              })}
              <HrDiv />
              {botListToShow.filter(bot => !bot.favorited).map((bot) => {
                return (
                  <>
                    <StyledListCard>
                      <FavoriteListButton
                        onClick={() => {
                            setFavorite(bot);
                            setShouldReload(!shouldReload);
                          }
                        }
                      ><img src={bot.favoritedImage} alt='Favorite Button'></img></FavoriteListButton>
                      {bot.type === 'router' ? <RouterListImage /> : <BotListImage />}
                      <Link href={`/bots/${bot.name}`}><BotName>{bot.name}</BotName></Link>
                      <BotComplement>{`Created at ${new Date(Date.parse(bot.created)).toLocaleDateString()}`}</BotComplement>
                    </StyledListCard>
                  </>
                );
              })}
            </>
          )}
        </BotListDiv>
        <AddButton><img src="/images/addButton.svg" alt="Add Button" /></AddButton>
      </Div>
    </>
  );
}
