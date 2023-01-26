import {  Outlet } from "react-router-dom";
import { Container, Header, Nav, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header >
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/variables">Variables</Link>
        </Nav>
      </Header>
      <Outlet />
      {/* <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense> */}
    </Container>
  );
};
