import PropTypes from 'prop-types';

const saveToLocal = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const deleteFromLocal = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove state error: ', error.message);
  }
};

const getFromLocal = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export { saveToLocal, deleteFromLocal, getFromLocal };

saveToLocal.propTypes = {
  key: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

deleteFromLocal.propTypes = {
  key: PropTypes.string.isRequired,
};

getFromLocal.propTypes = {
  key: PropTypes.string.isRequired,
};
