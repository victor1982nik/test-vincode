import { NavLink } from "react-router-dom";
import { List, Link, Container } from "./VariablesList.styled";

const VariablesList = ({ vars }) => {
  return (
    <Container>
      <ul>
        {vars.map(({ ID, Name, Description }) => (
          <List key={ID}>
            <NavLink to={`/variables/${ID}`} state={{ from: "location" }}>
              <Link>{Name}</Link>
            </NavLink>{" "}
            {Description.replace(/<\/?[a-zA-Z]+>/gi, "")}
          </List>
        ))}
      </ul>
    </Container>
  );
};

export default VariablesList;
