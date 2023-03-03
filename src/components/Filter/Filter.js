import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
