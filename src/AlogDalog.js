/* eslint-disable */
import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import { Route } from 'react-router-dom';
import AlogMain from './domain/AlogMain';
import AlogMainSearch from './domain/AlogMainSearch';
import AlogPersonalMain from './domain/AlogPersonalMain';
import AlogHeader from './components/AlogHeader';
import { useDetectOutsideClick } from './components/function/useDetectOutsideClick'
import AlogPage from './domain/AlogPage';
import Domang from './domain/Domang';
import Hamburger from './components/Hamburger';
import AlogWrite from './domain/AlogWrite';
import ScrollToTop from './components/function/ScrollToTop';
import './style/App.css';
import Notice from './domain/Notice';
import NoticeDummy from './dummydata/NoticeDummy.json';


function AlogDalog() {
  const naviRef= useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(naviRef, false);
  //AlogPage 관련 Data
  const defaultBgImg = 'logo.jpg'; // 폴더 기본 배경 이미지
  const sample = [
    {
        id: 0,
        title: "알록달록 튜토리얼",
        profile: "default-profile.png",
        backImg: "default-background.png",
        nickname: "알록달록",
        time: '',
        view: '',
        reply: '',
    },
    {
        id:1,
        title: "알통끝판왕인 가평 닭갈비 맛집 소개",
        text: "알통 며칠 전 가평에 들렀다가 이 근처에서 장작구이로 엄청 유명하다는 가평 닭갈비 맛집을 찾았는데요. 쫄깃한 닭갈비에 막국수까지 먹어주니 같이 방문한 지인들 모두에게 만족을 안겨준 식당이에요. 1. 아침고요 장작구이 숯불닭갈비 13,000원, ...",
        profile: 'profile01.jpg',
        nickname: 'Vivien',
        backImg: 'bg06.jpg',
        time: 1612292323330,
        view: 16,
        reply: 12,
        hunAl: 1000,
        take: 40,
        good: 230
    },
    {
        id:2,
        title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
        text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
        profile: 'profile02.jpg',
        nickname: '고양이',
        backImg: 'bg01.jpg',
        time: 1608255682130,
        view: 6,
        reply: 12,
        hunAl: 2000,
        take: 39,
        good: 20
    },
    {
        id:3,
        title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
        text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
        profile: 'profile03.jpg',
        nickname: '고양이',
        backImg: 'bg02.jpg',
        time: 1608255682130,
        view: 6,
        reply: 12,
        hunAl: 2000,
        take: 39,
        good: 20
    },
    {
        id:4,
        title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
        text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
        profile: 'profile03.jpg',
        nickname: '고양이',
        backImg: 'bg02.jpg',
        time: 1608255682130,
        view: 6,
        reply: 12,
        hunAl: 2000,
        take: 39,
        good: 20
    },
    {
        id:5,
        title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
        text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
        profile: 'profile03.jpg',
        nickname: '고양이',
        backImg: 'bg02.jpg',
        time: 1608255682130,
        view: 6,
        reply: 12,
        hunAl: 2000,
        take: 39,
        good: 20
    },
  ];
  const [newGroup, setNewGroup] = useState(false); //나의 알록달록 설정 팝업 
  const [myMainAlogSlide, setMyAlogSlide] = useState(false);
  const [checkList, setCheckList] = useState(false); //새 그룹 만들기, 기능 설정 팝업 체크아이콘 유무
  const [opened, setOpened] = useState(false); //배경설정하기 팝업
  const [bgSetting, setBgSetting] = useState(false); //새 그룹만들기에서 배경설정 팝업 적용
  const [body, setBody] = useState(false);
  useEffect(()=>{
    if (body === true) {
      setBody(false);
    }
  }, [body]);

  const [text, setText] = useState('');
  const [openInput, setOpenInput] = useState(false);
  const [searchOption, setSearchOption] = useState(1);

  const [siren, setSiren] = useState(false);
  const [showBgEdit, setShowBgEdit] = useState(false);

  const [dummyData, setDummyData] = useState(NoticeDummy);

  return(
    <Wrap onClick={(e)=>{setBody(true); e.stopPropagation();}}>
    <Container>
      <AlogHeader 
        isActive={isActive} setIsActive={setIsActive} 
        openInput={openInput} setOpenInput={setOpenInput} 
        text={text} setText={setText} 
        setSearchOption={setSearchOption} 
      />
      <Hamburger  
        isActive={isActive} setIsActive={setIsActive} 
        dummyData={dummyData} setDummyData={setDummyData}
      />
      <ScrollToTop>    
        <Route exact path="/" component={AlogMain} />
        <Route
          path='/personalMain'
          render={() => 
          <AlogPersonalMain bgImg={defaultBgImg} setNewGroup={setNewGroup} newGroup={newGroup} 
          setMyAlogSlide={setMyAlogSlide} setCheckList={setCheckList} checkList={checkList} 
          myMainAlogSlide={myMainAlogSlide} sample={sample} opened={opened} setOpened={setOpened}
          bgSetting={bgSetting} setBgSetting={setBgSetting} setShowBgEdit={setShowBgEdit} showBgEdit={showBgEdit}
          />}
        />
        <Route
          path="/contents"
          render={() => 
          <AlogPage body={body} setBody={setBody} setNewGroup={setNewGroup} newGroup={newGroup}
          sample={sample} checkList={checkList} myMainAlogSlide={myMainAlogSlide} setMyAlogSlide={setMyAlogSlide}
          opened={opened} setOpened={setOpened} bgSetting={bgSetting} setBgSetting={setBgSetting} siren={siren} setSiren={setSiren}
          setShowBgEdit={setShowBgEdit} showBgEdit={showBgEdit}
          />}
          />
        <Route path="/writing" component={AlogWrite} />
        <Route path={"/search/"+ text} render={()=> <AlogMainSearch text={text} setText={setText} searchOption={searchOption} />} />
        <Route path="/notice" render={()=>
          <Notice 
            dummyData={dummyData} setDummyData={setDummyData}
            body={body} setBody={setBody}
          />
        }/>
        <Route path="/domang" component={Domang} />
      </ScrollToTop>
    </Container>
    </Wrap>
  
  )
}

const Wrap = styled.div`
    width:100%; height:100vh;
    position:relative;
`;

const Container = styled.div`
  width:100%; height:auto;
  margin:0 auto;
  max-width:800px;
  position:relative;
  padding-top:45px; 

  @media all and (min-width:480px) { padding-top:60px; }
`;

export default AlogDalog;
