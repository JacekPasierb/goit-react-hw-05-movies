import { Input, Button, Form } from "./SearchBox.styled";
import PropTypes from "prop-types";

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

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
}
export default SearchBox;
