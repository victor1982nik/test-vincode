import { Container, Header, Text } from "./Variable.styled";

const Variable = ({ vars }) => {
  return (
    <Container>
      <Header>{vars.Name}</Header>
      <Text>{vars.Description.replace(/<\/?[a-zA-Z]+>/gi, "")}</Text>
    </Container>
  );
};

export default Variable;
