import styled from '@emotion/styled';
import { NavLink} from "react-router-dom";

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

export const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  padding-left: 16px;    
`;

export const Link = styled(NavLink)`
  color: black;
  margin: 10px;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: red;
  }
`;