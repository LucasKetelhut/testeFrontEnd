import React from 'react';
import styled from 'styled-components';
import SearchField from './SearchField';
import Button from './Button';

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

const StyledButton = styled.button`
    border: none;
    background-color: #fff;
    margin: 0 2.5px;

    :hover {
        cursor: pointer;
    }
`;

export default class FirstSection extends React.Component {
    render() {
        return (
            <SectionDiv>
                <H1>My chatbots</H1>
                <FilterDiv>
                    <SearchField></SearchField>
                    <Button title="Order by name" />
                    <Button title="Order by creation" />
                    <StyledButton><img src='/images/blocks.svg' alt='Blocks'></img></StyledButton>
                    <StyledButton><img src='/images/list.svg' alt='List'></img></StyledButton>
                </FilterDiv>
            </SectionDiv>
        );
    }
}