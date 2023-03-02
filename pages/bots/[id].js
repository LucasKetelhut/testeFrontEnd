import { useRouter } from "next/router";
import api from '../../src/api';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import Header from "../../src/components/Header";

const Title = styled.h1`
  text-align: center;
`;

export default function BotPage() {

    const [isOnline, setIsOnline] = useState(false);
    const [bot, setBot] = useState(null);
    const { query } = useRouter();

    useEffect(() => {
        async function getBot() {
            try {
                const { data } = await api.get(`${query.id.replace(' ', '_').toLowerCase()}/details`); 
                console.log(data);
                setBot(data);
            } catch (error) {
                console.log(error);
            }
        }
        getBot();
        setIsOnline(true);
    }, []);


    while (!isOnline) {
        return <Title>Loading...</Title>;
    }

    return (
        <>
            <Header />
        </>
    );
}
