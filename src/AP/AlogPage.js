import React, { useState } from 'react';
import styled from 'styled-components';
import Space from './space/Space';
import Alpage from './alpage/Alpage';
import New from './new/New';
import AlogSearch2 from '../alogSearch2/AlogSearch2';
import AlogProfile from '../alogprofile/AlogProfile';


const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  max-width:800px;
  margin:0 auto;
`;



function AlogPage() {

  return (
    <Container>
      <Alpage/>
      <Space/>
      <AlogProfile />
      <New/>
      <AlogSearch2/>
    </Container>
  );
};
 
export default AlogPage;


