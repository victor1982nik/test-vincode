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

export const Header = styled.h1`
padding-top: 15px;
padding-bottom: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  @media screen and (min-width: 768px)  {    
      padding-left: 32px;
      padding-right: 32px;
  }
`;

export const FormStyled = styled.form`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;  
`;

export const Label = styled.label`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const Div = styled.div`
  text-align: center;  
  font-size: 20px;
  display: flex;
`;

export const Button = styled.button`
margin-left: 10x;
cursor: pointer;
border-radius: 4px;
&:hover {
    background-color: lightblue;
}
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  text-align: justify;  
`;