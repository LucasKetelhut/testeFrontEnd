import { useRouter } from "next/router";
import api from '../../src/api';
import UserCardList from "../../src/components/UserCardList";
import styled from 'styled-components';
import Link from "next/dist/client/link";
import { useState, useEffect } from "react";

const Title = styled.h1`
  text-align: center;
`;

const CenterLink = styled.div`
    text-align: center;
`

export default function Users() {

    const [isOnline, setIsOnline] = useState(false);
    const [users, setUsers] = useState([]);
    const [team, setTeam] = useState(null);
    const { query } = useRouter();

    useEffect(() => {
        async function getTeam() {
            try {
                const { data } = await api.get(`teams/${query.id}`); 
                setTeam(data);
                
            } catch (error) {
                console.log(error);
            }
        }
        async function getUsers() {
            try {
                const { data } = await api.get("users"); 
                setUsers(data);
                setIsOnline(true);
            } catch (error) {
                console.log(error);
            }
        }
        getTeam();
        getUsers();
    }, []);


    while (!isOnline) {
        return <Title>Loading...</Title>;
    }

    const usersList = users.filter(user => team.teamMemberIds.includes(user.id));

    return (
        <>
            <Title>Users</Title>
            <UserCardList users={usersList}></UserCardList>
            <CenterLink>
                <Link href="/">Back</Link>
            </CenterLink>
        </>
    );
}
