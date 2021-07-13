/* eslint-disable */
import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AlogMain from './domain/AlogMain';
import AlogMainSearch from './domain/AlogMainSearch';
import AlogPersonalMain from './domain/AlogPersonalMain';
import AlogHeader from './components/AlogHeader';
import { useDetectOutsideClick } from './components/function/useDetectOutsideClick'
import AlogPage from './domain/AlogPage';
import Hamburger from './components/Hamburger';
import AlogWrite from './domain/AlogWrite';
import ScrollToTop from './components/function/ScrollToTop';
import './style/App.css';
import Notice from './domain/Notice';
import NoticePaste from './noticeLists/NoticePaste';
import NoticeReply from './noticeLists/NoticeReply';
import NoticeRefund from './noticeLists/NoticeRefund';
import NoticeModify from './noticeLists/NoticeModify';
import NoticeMessage from './noticeLists/NoticeMessage';
import NoticeMento from './noticeLists/NoticeMento';
import NoticeHun from './noticeLists/NoticeHun';
import NoticeRefundData from './dummydata/NoticeRefundData.json'; 
import NoticeModifyData from './dummydata/NoticeModifyData.json'; 
import NoticeReplyData from './dummydata/NoticeReplyData.json'; 
import NoticePasteData from './dummydata/NoticePasteData.json'; 
import NoticeMessageData from './dummydata/NoticeMessageData.json'; 
import NoticeMentoData from './dummydata/NoticeMentoData.json'; 
import NoticeMentiData from './dummydata/NoticeMentiData.json'; 
import NoticeHunData from './dummydata/NoticeHunData.json'; 


function App() {
  const [shows, setShows] = useState(false);
  const clicks = () => { setShows(!shows); }
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
  const RefundArray = NoticeRefundData.ko.refundArray; //환불 데이터
  const [usersRefund, setUserRefund] = useState(RefundArray);
  const onRemoveRefund = id => {
      setUserRefund(usersRefund.filter(user => user.id !== id));
    };
  const whyArray = ["저작권 위반", "유해성", "장난성", "중복성", "비속어/반말", "비 정보 지식", "음해/비방", "기타"];


  const modifyArray = NoticeModifyData.ko.modifyArray; //수정 데이터
  const [usersModify, setUserModify] = useState(modifyArray);
  const onRemoveModify = id => {
      setUserModify(usersModify.filter(user => user.id !== id));
    };  

  const ReplyArray = NoticeReplyData.ko.ReplyArray; //답변 데이터
  const [usersReply, setUserReply] = useState(ReplyArray);
  const onRemoveReply = id => {
      setUserReply(usersReply.filter(user => user.id !== id));
    };    
 
  const pasteArray = NoticePasteData.ko.pasteArray; //퍼가기 데이터
  const [usersPaste, setUserPaste] = useState(pasteArray);
  const onRemovePaste = id => {
      setUserPaste(usersPaste.filter(user => user.id !== id));
    };   

  const messageArray = NoticeMessageData.ko.messageArray; // 메시지 데이터
  const [usersMessage, setUserMessage] = useState(messageArray);
  const onRemoveMessage = id => {
      setUserMessage(usersMessage.filter(user => user.id !== id));
    };  
    
  const mentoArray = NoticeMentoData.ko.mentoArray; // 멘토 데이터
  const [usersMento, setUserMento] = useState(mentoArray);
  const onRemoveMento = id => {
      setUserMento(usersMento.filter(user => user.id !== id));
    };  

  const mentiArray = NoticeMentiData.ko.mentiArray; // 멘티 데이터
  const [usersMenti, setUserMenti] = useState(mentiArray);
  const onRemoveMenti = id => {
      setUserMenti(usersMenti.filter(user => user.id !== id));
    };  

  const hunArray = NoticeHunData.ko.hunArray; // 훈훈알 데이터
  const [usersHun, setUserHun] = useState(hunArray);
  const onRemoveHun = id => {
      setUserHun(usersHun.filter(user => user.id !== id));
    };
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

  return(
    <Wrap onClick={(e)=>{setBody(true); e.stopPropagation();}}>
    <Container>
      <AlogHeader isActive={isActive} setIsActive={setIsActive} openInput={openInput} setOpenInput={setOpenInput} text={text} setText={setText} setSearchOption={setSearchOption} />
      <Hamburger  isActive={isActive} setIsActive={setIsActive} usersHun={usersHun} usersRefund={usersRefund} usersModify={usersModify} usersReply={usersReply} usersPaste={usersPaste} usersMessage={usersMessage} usersMento={usersMento}/>
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
      <Switch>
        <Route exact path="/notice" component={Notice} />
        <Route
        path="/notice/paste"
        render={() => <NoticePaste onRemovePaste={onRemovePaste} usersPaste={usersPaste} setUserPaste={setUserPaste}/>}
         />
        <Route
        path="/notice/reply"
        render={() => <NoticeReply onRemoveReply={onRemoveReply} usersReply={usersReply} setUserReply={setUserReply}/>}
         />
        <Route
        path="/notice/refund"
        render={() => <NoticeRefund onRemoveRefund={onRemoveRefund} usersRefund={usersRefund} setUserRefund={setUserRefund} whyArray={whyArray}/>}
         />
        <Route
        path="/notice/modify"
        render={() => <NoticeModify onRemoveModify={onRemoveModify} usersModify={usersModify} setUserModify={setUserModify}/>}
         />
         <Route 
        path="/notice/message"
        render={() => <NoticeMessage onRemoveMessage={onRemoveMessage} usersMessage={usersMessage} setUserMessage={setUserMessage}/>}
         />
        <Route 
        path="/notice/hun"
        render={() => <NoticeHun onRemoveHun={onRemoveHun} usersHun={usersHun} setUserHun={setUserHun}/>}
         />
        <Route 
        path="/notice/mento"
        render={() => <NoticeMento body={body} setBody={setBody} onRemoveMento={onRemoveMento} usersMento={usersMento} setUserMento={setUserMento} onRemoveMenti={onRemoveMenti} usersMenti={usersMenti} setUserMenti={setUserMenti}/>}
         />     
      </Switch>
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

export default App;
