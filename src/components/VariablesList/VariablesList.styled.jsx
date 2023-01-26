import styled from '@emotion/styled';

export const Container = styled.div`
width: 100%;  
  margin-left: auto;
  margin-right: auto;
  padding: 5px 15px;  
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px;
      padding-left: 20px;
      padding-right: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
      padding-left: 32px;
      padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }    
`;

export const List = styled.li`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 15px;  
  text-align: justify;

`;

export const Link = styled.span`
  font-size: 18px;
  font-weight: 500;
  :hover {
    color: violet;
  }
`;

