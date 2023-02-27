import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default StyledDiv;