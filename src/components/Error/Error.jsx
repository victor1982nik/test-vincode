import { Container, Text } from "./Error.styled";

const Error = ({ text }) => {
  return (
    <Container>      
      <Text>{text}</Text>
    </Container>
  );
};

export default Error;
