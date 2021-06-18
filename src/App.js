/* eslint-disable */
import styled from 'styled-components';
import React, { useCallback, useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import AlogMain from './alogmain/AlogMain';
import AlogSearch2 from './alogSearch2/AlogSearch2';
import AlogPersonalMain from './AlogPersonalMain';
import AlogPersonalcontents from './AlogPersonalContents';
import AlogHeader from './components/AlogHeader';
import { useDetectOutsideClick } from './components/function/useDetectOutsideClick'
import AlogPage from './AP/AlogPage';
import Hamburger from './Hamburger';
import AlogWrite from './alogWrite/AlogWrite';
import ScrollToTop from './ScrollToTop';
import './App.css';
import Notice from './Notice';

function App() {
  const [shows, setShows] = useState(false);
  const clicks = () => { setShows(!shows); }
  const naviRef= useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(naviRef, false);
  const defaultBgImg = 'logo.jpg'; // 폴더 기본 배경 이미지

  return(
    
    <Wrap>
      {/* <AlogMainPopup></AlogMainPopup>   */}
    <Container>
      <ScrollToTop>
      <AlogHeader isActive={isActive} setIsActive={setIsActive}/>
      <Hamburger  isActive={isActive} setIsActive={setIsActive}/>    
      <Route path="/" exact={true} component={AlogMain} />
      <Route
        path='/personalMain'
        render={() => <AlogPersonalMain bgImg={defaultBgImg} />}
      />
      <Route
        path='/personalContents'
        render={() => <AlogPersonalcontents bgImg={defaultBgImg} />}
      />
      <Route path="/contents" component={AlogPage} />
      <Route path="/writing" component={AlogWrite} />
      <Route path="/search" component={AlogSearch2} />
      <Route path="/notice" component={Notice} />
      </ScrollToTop>
    </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
    width:100%; height:100%;
    position:relative;
`;

const Container = styled.div`
  width:100%; 
  margin:0 auto;
  max-width:800px;
  padding-top:45px; 

  @media all and (min-width:480px) { padding-top:60px; }
`;

export default App;
