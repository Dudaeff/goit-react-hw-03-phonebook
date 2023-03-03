import PropTypes from 'prop-types';
import { Layout, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Layout>
      <Title>{title && title}</Title>
      {children}
    </Layout>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
