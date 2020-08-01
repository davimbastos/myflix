import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-top: 8px;
  padding: 16px;
  top: 0;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    top: -8px;
    transition: all .1s ease-in-out;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
