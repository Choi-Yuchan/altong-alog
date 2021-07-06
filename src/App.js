/* eslint-disable */
import styled from 'styled-components';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AlogMain from './alogmain/AlogMain';
import AlogMainSearch from './alogMainSearch/AlogMainSearch';
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
import NoticePaste from './noticeLists/NoticePaste';
import NoticeReply from './noticeLists/NoticeReply';
import NoticeRefund from './noticeLists/NoticeRefund';
import NoticeModify from './noticeLists/NoticeModify';
import NoticeMessage from './noticeLists/NoticeMessage';
import NoticeMento from './noticeLists/NoticeMento';
import NoticeHun from './noticeLists/NoticeHun';
import NoticeRefundData from './NoticeRefundData.json'; 
import NoticeModifyData from './NoticeModifyData.json'; 
import NoticeReplyData from './NoticeReplyData.json'; 
import NoticePasteData from './NoticePasteData.json'; 
import NoticeMessageData from './NoticeMessageData.json'; 
import NoticeMentoData from './NoticeMentoData.json'; 
import NoticeMentiData from './NoticeMentiData.json'; 
import NoticeHunData from './NoticeHunData.json'; 

function App() {
  const [shows, setShows] = useState(false);
  const clicks = () => { setShows(!shows); }
  const naviRef= useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(naviRef, false);
  const defaultBgImg = 'logo.jpg'; // 폴더 기본 배경 이미지
  
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

  return(
    
    <Wrap onClick={(e)=>{setBody(true); e.stopPropagation();}}>
    <Container>
      <AlogHeader isActive={isActive} setIsActive={setIsActive}/>
      <Hamburger  isActive={isActive} setIsActive={setIsActive} usersHun={usersHun} usersRefund={usersRefund} usersModify={usersModify} usersReply={usersReply} usersPaste={usersPaste} usersMessage={usersMessage} usersMento={usersMento}/>
      <ScrollToTop>    
      <Route exact path="/" component={AlogMain} />
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
