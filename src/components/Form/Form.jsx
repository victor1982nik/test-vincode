import { Container, Header, FormStyled, Label, Div, Button } from "./Form.styled";

const Form = ({ onSubmit }) => {
  return (
    <Container>
      <Header>
        Enter Vin code of venicle 1FTFW1CT5DFC10312 JN1AZ4EH7DM430111
      </Header>
      <FormStyled onSubmit={onSubmit}>
        <Label htmlFor="query"> Enter 17 digit Vin-code</Label>
        <Div>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Enter vincode"
            maxLength="17"
            minLength="17"
            pattern="^[a-zA-Z0-9]+$"
            required
          />
          <Button type="submit" aria-label="search button">
            Search
          </Button>
        </Div>
      </FormStyled>
    </Container>
  );
};

export default Form;
