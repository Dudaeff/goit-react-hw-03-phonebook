import PropTypes from 'prop-types';
import { DeleteBtn, List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <p>{name}: </p>
            <p>{number}</p>
            <DeleteBtn
              type="button"
              onClick={() => {
                onClick(id);
              }}
            >
              Delete
            </DeleteBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
      onClick: PropTypes.func,
    }).isRequired
  ),
};
