import React from 'react';

function getDisplayName(WrappedComponent, suffix = '') {
  return `${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }${suffix}`;
}

const contextWrapper = (WrappedComponent, context, wrapperName) => {
  const { getServerSideProps } = WrappedComponent;
  const CustomComponent = (props) => {
    const customProps = context();
    return <WrappedComponent {...props} {...customProps} />;
  };
  if (typeof getServerSideProps === 'function') {
    CustomComponent.getServerSideProps = getServerSideProps;
  }
  CustomComponent.originalName = getDisplayName(WrappedComponent);
  CustomComponent.displayName = getDisplayName(WrappedComponent, wrapperName);
  return CustomComponent;
};

export default contextWrapper;
