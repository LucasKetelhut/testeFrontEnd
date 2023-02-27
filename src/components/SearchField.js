import styled from 'styled-components';
import React, { useState, useEffect } from "react";

const Input = styled.input`
    border: 1px solid #D2DFE6;
    padding: 10px;
    width: 312px;
    margin: 0 2.5px;
    border-radius: 8px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    height: 20px;
    font-style: normal;
    line-height: 22px;
    color: #8CA0B3;
    outline: none;
`;

const Div = styled.div`
    text-align: center;
`
export default class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        console.log(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <Div>
                <Input type="text" placeholder='Search' onChange={this.handleChange} value={this.state.value}>
                </Input>
            </Div>
        );
    }
}