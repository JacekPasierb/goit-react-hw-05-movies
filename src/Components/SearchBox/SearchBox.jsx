import { Input, Button, Form } from "./SearchBox.styled";

const SearchBox = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="searchInput"
        type="text"
        placeholder="Write title movie"
        autocomplete="off"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
export default SearchBox;
