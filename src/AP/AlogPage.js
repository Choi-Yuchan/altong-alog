import React, { useState } from 'react';
import styled from 'styled-components';
import Space from './space/Space';
import Alpage from './alpage/Alpage';
import New from './new/New';
import AlogMainSearch from '../alogMainSearch/AlogMainSearch';
import AlogProfile from '../alogprofile/AlogProfile';


const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  max-width:800px;
  margin:0 auto;
`;

function AlogPage({body, setBody}) {

  return (
    <Container>
      <Alpage body={body} setBody={setBody}/>
      <Space/>
      <AlogProfile />
      <New/>
      <AlogMainSearch/>
    </Container>
  );
};
 
export default AlogPage;


