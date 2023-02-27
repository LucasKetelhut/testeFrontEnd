import styled from 'styled-components';
import React from "react";

const StyledButton = styled.button`
    position: fixed;
    width: 56px;
    height: 56px;
    bottom: 25px;
    right: 25px;
    border-radius: 50%;
    outline: none;
    border: 0;

    background: #2CC3D5;

    :hover {
        cursor: pointer;
        background: #00CED0;
    }
`;

export default class AddButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledButton><img src="/images/addButton.svg" alt="Adicionar" /></StyledButton>
        );
    }
}