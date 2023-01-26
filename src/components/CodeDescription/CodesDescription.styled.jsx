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

export const List = styled.ul`
text-align: justify;
`;

export const Text = styled.span`
font-weight: 500;
`;