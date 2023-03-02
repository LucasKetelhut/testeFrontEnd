import styled from 'styled-components';
const StyledButton = styled.button`
    align-items: center;
    padding: 10px 16px;
    margin: 0 2.5px;
    height: 40px;
    background: #2CC3D5;
    border-radius: 8px; 
    outline: none;
    border: none;
    transition: all ease-in-out 0.3s;

    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #F8FBFB;

    :hover {
        cursor: pointer;
        background: #00CED0;
    }
`;

export default StyledButton;