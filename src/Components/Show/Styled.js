/* eslint-disable */
import Styled from 'styled-components';

export const FlexGrid = Styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
`;

export const SearchCard = Styled.div`
width: 300px;
height: 100%;
margin: 0 15px 40px;

.img-wrapper {
  width: 100%;
  border-radius: 40px;
  height: 420px;
  overflow: hidden;
  border: 1px solid #ddd;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
`;
