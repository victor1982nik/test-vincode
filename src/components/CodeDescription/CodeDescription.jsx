import { Container, List, Text } from "./CodesDescription.styled";

const CodesDescription = ({ code }) => {
  //console.log(code);
  const arr = Object.entries(code);
  //console.log(arr)
  const filteredData = arr.filter((item) => item[1] !== "");
  //console.log(data)

  return (
    <Container>
      <List>
        {filteredData.map((item) => (
          <li key={item[0]}>
            <Text>{item[0]}</Text> - {item[1]}
          </li>
        ))}
      </List>
    </Container>
  );
};

export default CodesDescription;
