import React from 'react';
import PropTypes from 'prop-types';

const CodeLayout = ({ children }) => (
  <div style={{ fontSize: '19px' }}> {children} </div>
);

CodeLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default CodeLayout;
