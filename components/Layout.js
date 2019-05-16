import React from 'react';

const Layout = ({ children }) => (
  <div
    style={{
      // width: '30em',
      paddingLeft: '100px',
      paddingRight: '100px',
      // height: '100vw',
      // backgroundColor: 'tomato',
    }}
  >
    {children}
  </div>
);

export default Layout;
