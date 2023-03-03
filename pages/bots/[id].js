import { useRouter } from "next/router";
import api from '../../src/api';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import Header from "../../src/components/Header/Header";
import HrDiv from "../../src/components/HrDiv";
import Footer from "../../src/components/Footer/Footer";
import MainDiv from "../../src/components/MainDiv";
import SectionDiv from "../../src/components/SectionDiv";
import BotComplement from "../../src/components/BotComplement";
import BotInitialInfo from "../../src/components/BotInitialInfo";
import BotInfo from "../../src/components/BotInfo/BotInfo";
import BotDataDiv from "../../src/components/BotDataDiv";
import BotData from "../../src/components/BotData";
import AccountData from "../../src/components/AccountData";
import StyledButton from "../../src/components/StyledButton";
import RegionData from "../../src/components/RegionData";
import NumbersData from "../../src/components/NumbersData";
import DataInfo from "../../src/components/DataInfo/DataInfo";

const Title = styled.h1`
  text-align: center;
`;

const ContentDiv = styled.div`
    padding: 0 100px;
`;

const StatusAccount = styled.p`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #8CA0B3;

    margin-top: 50px;
    margin-bottom: 0px;
`;

const Free = styled.p`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    
    color: #56616E;

    margin-top: 0px;
`;

const RegionIdiomTimeZone = styled.p`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #52636C;
`;

const RegionIdiomTimeZoneData = styled.p`
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    color: #52636C;

    margin-top: 0;
`;

const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;

    border-radius: 50%;

    background-color: #517BF2;
`;

export default function BotPage() {

    const [isOnline, setIsOnline] = useState(false);
    const [bot, setBot] = useState();
    const { query } = useRouter();

    useEffect(() => {
        async function getBot() {
            try {
                const { data } = await api.get(`${query?.id.replace(' ', '_').toLowerCase()}/details`); 
                
                setBot(data);
                setIsOnline(true);
            } catch (error) {
                console.log(error);
            }
        }
        getBot();
    }, [query]);

    while (!isOnline) {
        return <Title>Loading...</Title>;
    }

    return (
        <>
            <MainDiv>
                <Header />
                <SectionDiv>
                        <BotInitialInfo>
                            <img src="/images/botIcon.svg" alt="Bot Icon" />
                            <BotInfo name={bot.name} id={bot.name.toLowerCase().replace(' ', '')}/>
                        </BotInitialInfo>
                        <BotComplement>{`Created at ${new Date(Date.parse(bot.created)).toLocaleDateString()}`}</BotComplement>
                </SectionDiv>
                <ContentDiv>
                    <HrDiv />
                        <BotDataDiv>
                            <BotData>
                                <RegionData>
                                    <RegionIdiomTimeZone>Region and idiom</RegionIdiomTimeZone>
                                    <RegionIdiomTimeZoneData>{bot.culture}</RegionIdiomTimeZoneData>
                                    <RegionIdiomTimeZone>Timezone</RegionIdiomTimeZone>
                                    <RegionIdiomTimeZoneData>(UTC - 03:00) Brasília</RegionIdiomTimeZoneData>
                                </RegionData>
                                <NumbersData>
                                    <img src="/images/userActive.svg" alt="Users Active" />
                                    <DataInfo number={bot.analytics.user.actived} info="Usuários ativos" />
                                </NumbersData>
                                <NumbersData>
                                    <img src="/images/messageReceived.svg" alt="Messages Received" />
                                    <DataInfo number={bot.analytics.message.received} info="Mensagens recebidas" />
                                </NumbersData>
                                <NumbersData>
                                    <ImageDiv>
                                        <img src="/images/messageSent.svg" alt="Messages Sent" />
                                    </ImageDiv>
                                    <DataInfo number={bot.analytics.message.sent} info="Mensagens enviadas" />
                                </NumbersData>
                            </BotData>
                            <AccountData>
                                <img src="/images/baloon.svg" alt="Baloon" />
                                <StatusAccount>Status account</StatusAccount>
                                <Free>Free</Free>
                                <StyledButton>Update account</StyledButton>
                            </AccountData>
                        </BotDataDiv>
                    <HrDiv />
                </ContentDiv>
                <Footer />
            </MainDiv>
        </>
    );
}
