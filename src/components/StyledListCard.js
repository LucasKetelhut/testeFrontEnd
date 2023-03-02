import styled from 'styled-components';

const StyledListCard = styled.div`
  display: grid;
  grid-template-rows: 50px;
  grid-column-gap: 100px;
  grid-row-gap: 0px;
  padding: 10px;
  align-items: center;
  grid-template-columns: 1px 1px 1fr auto;

  background: #FFFFFF;

  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 8px;
  margin-bottom: 25px;

`;

export default StyledListCard;