import React, { useState } from 'react';
import styled from 'styled-components';
import Space from '../components/Space';
import Alpage from '../alogPage/Alpage';
import AlogMainSearch from './AlogMainSearch';
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
      <AlogMainSearch/>
    </Container>
  );
};
 
export default AlogPage;


