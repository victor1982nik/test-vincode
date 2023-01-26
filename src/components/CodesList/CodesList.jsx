import { Container, List } from "./CodesList.styled";

const CodesList = ({ requestInCache }) => {
  //console.log(requestInCache);
  return (
    <Container>
      <List>
        {requestInCache.map(({ VIN }) => (
          <li key={VIN}>{VIN}</li>
        ))}
      </List>
    </Container>
  );
};

export default CodesList;
