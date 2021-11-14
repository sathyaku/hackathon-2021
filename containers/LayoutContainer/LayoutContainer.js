import React from 'react';
import layOutStyle from './LayoutContainer.style';
import ContainerWrap from '@/ui/Container';

const LayoutContainer = ({ products }) => {
  const { results = [] } = products;
  return (
    <ContainerWrap>
      <style jsx>{layOutStyle}</style>
    </ContainerWrap>
  );
};

export default LayoutContainer;
