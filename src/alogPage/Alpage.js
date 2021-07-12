import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HunPopup from '../components/HunPopup';
import AlogSiren from '../components/AlogSiren';
import AlpageContents from '../components/AlpageContents';
import ScrapCaution from './ScrapCaution';
import ScrapOptionBox from './ScrapOptionBox';
import AlogProfileSetting from '../profileSetting/AlogProfileSetting';
import NewGroupPopup from './NewGroupPopup';
import Refund from '../domain/Refund';

function Alpage({body, setBody, newGroup, setNewGroup, sample, checkList, setMyAlogSlide, myMainAlogSlide, opened, setOpened, bgSetting, setBgSetting, siren, setSiren, showBgEdit, setShowBgEdit}) {
  const langAlpage = {
    ko:{
      allData : 
      {
          title: "알통이여 영원하라 알통이여 영원하라 알통이여 영원하라 알통이여 영원하라",
          date: "2021.04.14",
          money: "100,000",
        }
      ,
        //고정
        H : ["폴더를 선택해주세요"],
        Option :["여행, 그 모든 것","음악"],
        SaveBtn : ["저장"],
        Makingp : ["새폴더 만들기"],
        Value : ["알"],
        confirmMention: "퍼가시면 Value값 만큼 알이 차감됩니다, 정말로 가져가시겠습니까?",
    }
  };
  const allDate2 = langAlpage.ko.allData;
  const chooseFolder = langAlpage.ko.H;
  const titleName =langAlpage.ko.Option;
  const save =langAlpage.ko.SaveBtn;
  const folder =langAlpage.ko.Makingp;
  const egg =langAlpage.ko.Value;
  const mention = langAlpage.ko.confirmMention;
  const hunAl = "훈훈알";
  const call ="신고";
  const modify ="수정";
  const refund = "환불";

  const [isShow, setIsShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const titleShow = () => {
    setIsShow(!isShow);
  }

  const [colorIs, setColorShow] = useState(false);
  const colorShow = () => {
    setColorShow(!colorIs);
  }
  const [viewCaution, setViewCaution] = useState(false); // 퍼가기 주의사항 팝업 상태
  const [scrapOption, setScrapOption] = useState(false); // 퍼가기 시 옵션 창 상태
  const [scrapComplete, setScrapComplete] = useState(false); // 퍼가기 완료 됐을 때 알림창 상태
  const [scrapDisable, setScrapDisable] = useState(false); // 나의 '알록' 퍼가기 했을 때 경고창 상태
  const [deletedOrigin, setDeletedOrigin] = useState(false); // 원문가기 클릭 시 원문이 삭제되었을 경우 
  const [showRefund, setShowRefund] = useState(false); // 환불 요청 페이지 보여주기

  useEffect(()=>{
    if (body === true) {
      setShowMenu(false);
    }
  }, [body, showMenu])

  const [hun, SetHun] = useState(false);
  const HunEgg = () => {
      SetHun(!hun);
  }

  const [showNewGroup, setShowNewGroup] = useState(false);

  const BringHunhunAl = true; //훈훈알 받았을 떄 생기고, 받은 총 갯 수 표시

  const SirenPop = () => {
    setSiren(true);
  }
  return (
    <>

      {/* 퍼가기 전 유의사항 페이지 */}
      {viewCaution === true &&<ScrapCaution viewCaution={viewCaution} setViewCaution={setViewCaution}/>}
      {/* 그룹 선택 및 만들기 팝업 */}
      {showNewGroup === true && <NewGroupPopup 
      newGroup={newGroup} setNewGroup={setNewGroup} sample={sample}
      checkList={checkList} myMainAlogSlide={myMainAlogSlide} setShowNewGroup={setShowNewGroup} showNewGroup={showNewGroup}
      opened = {opened} setOpened={setOpened} setBgSetting={setBgSetting} bgSetting={bgSetting}
      />}
      {/* 그룹 배경 설정 */}
      {showBgEdit === true && <AlogProfileSetting setOpened={setOpened} bgSetting={bgSetting} setShowBgEdit={setShowBgEdit}/>}
      
      <Box onClick={() => {setScrapOption(false)}}>
        {scrapOption === true && 
          <ScrapOptionBox setShowNewGroup={setShowNewGroup} showNewGroup={showNewGroup} setShowBgEdit={setShowBgEdit} showBgEdit={showBgEdit}
          setMyAlogSlide={setMyAlogSlide} scrapComplete={scrapComplete} setScrapComplete={setScrapComplete}
          />
        }
        <Frame>
          { BringHunhunAl &&
          <Hunhun><HunhunImg src={process.env.PUBLIC_URL + '/images/answer_almoney.svg'}/><HunhunCount>1,000</HunhunCount></Hunhun>
        }
        <Icons>
        <Logo onClick={(e) => {e.stopPropagation(); setShowMenu(true); setBody(false)} } src={process.env.PUBLIC_URL + '/images/dot2.png'}></Logo>
        { showMenu &&
        <DropMenu>
          <Menus onClick={HunEgg}>{hunAl}</Menus>
          <Menus onClick={SirenPop}>{call}</Menus>
          <Menus>{modify}</Menus>
          <Menus>{refund}</Menus>
        </DropMenu>
        }
        <HunPopup hunAl={hun} setHunAl={SetHun}></HunPopup>
        <AlogSiren siren={siren} setSiren={setSiren}></AlogSiren>      
        </Icons>
        </Frame>
        {isShow ? (
          <Folder>
            <Close src={process.env.PUBLIC_URL + '/images/close-button.svg'}  onClick={() => titleShow()}></Close>
            <H>{chooseFolder}</H>
            <SelectBox>
              <Select>
                <Option>
                  {titleName[0]}
                </Option>
                <Option>
                  {titleName[1]}
                </Option>
              </Select>
              <SaveBtn onClick={()=>{window.confirm(String(mention))}}>{save}</SaveBtn>
            </SelectBox>
            <MakingBox onClick={() => colorShow() }>
              <MakingBtn src={process.env.PUBLIC_URL + '/images/add.png'} />
              <Makingp>{folder}</Makingp> 
            </MakingBox>  
        </Folder>) : null}
        <Title>
          {allDate2.title}
        </Title>
        <SubTitle>
          <Date>
          {allDate2.date}
          </Date>
          <Value>
            Value : {allDate2.money}{egg}
          </Value>
        </SubTitle>
      </Box>
      <AlpageContents 
      viewCaution={viewCaution} setViewCaution={setViewCaution}
      scrapOption={scrapOption} setScrapOption={setScrapOption}
      deletedOrigin={deletedOrigin} setDeletedOrigin={setDeletedOrigin}
      scrapDisable={scrapDisable} setScrapDisable={setScrapDisable}
      />
      {showRefund === true &&
      <Refund showRefund={showRefund} setShowRefund={setShowRefund}/>
      }
      { scrapComplete === true &&
      <CompleteMySlideWrap onClick={()=>{setScrapComplete(false)}}>
        <SlideConfirmBox>
          <ConfirmText>원 알록 순자러버님의</ConfirmText>
          <ConfirmText>'알통은 무엇인가? 그것에 대해 알아봅시다.'</ConfirmText>
          <ConfirmText>글이 퍼가기 <span>완료</span>되었습니다.</ConfirmText>
        </SlideConfirmBox>
      </CompleteMySlideWrap>
      }
      { scrapDisable === true &&
      <CompleteMySlideWrap onClick={()=>{setScrapDisable(false)}}>
        <SlideConfirmBox>
          <ConfirmText>나의 <span>알록</span>은 퍼가기 하실 수 없습니다.</ConfirmText>
        </SlideConfirmBox>
      </CompleteMySlideWrap>
      }
      { deletedOrigin === true &&
      <CompleteMySlideWrap onClick={()=>{setDeletedOrigin(false)}}>
        <SlideConfirmBox>
          <ConfirmText>순자러버님의</ConfirmText>
          <ConfirmText>'알통은 무엇인가? 그것에 대해 알아봅시다.'</ConfirmText>
          <ConfirmText>원 알록이 <span>삭제</span>되었습니다.</ConfirmText>
        </SlideConfirmBox>
      </CompleteMySlideWrap>
      }
    </>
  );
};
const CompleteMySlideWrap = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:99999;
`;
const SlideConfirmBox = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:rgba(85,85,85, 0.7);
    color:#fff;
    width:90%;
    min-height:150px;
    max-width:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:10px 2rem;
`;
const ConfirmText = styled.p`
    font-size:14px;
    margin:10px 0;

    span {
      font-weight: bold;
      color:#fd0031;
    }
`;

const Box = styled.div`
  height: 223px;
  display:flex;
  padding: 15px 20px;
  width:100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  margin: 0 auto;
  color: #333;
  align-items:center;
  justify-content: space-around;
  flex-direction:column;
  position:relative;
  background-color: skyblue;
  z-index:1;

  &::after {
    content:"";
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    background:rgba(0,0,0,.3);
    z-index:-1;
  } 
`;

const Logo = styled.img`
  width:35px;
  height:38px;
  margin-right:10px;
  width:5px; height:25px;
  margin-right:15px;
  cursor:pointer;
`;


const Title = styled.div`
  font-size:1.5rem;
  color:#fefefe;
  font-weight:bold;
  width:80%;
  position:absolute;
  text-align:center;
  top:30%;
  left:50%;
  transform:translateX(-50%);
  white-space:normal;
  overflow:hidden;
  text-overflow:ellipsis;
  word-wrap: break-word; 
  display: -webkit-box; 
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
`;

const Icons = styled.div`
  width:100%; height:38px;
  display:flex;
  justify-content:flex-end;
  align-items: center;
`;

const SubTitle = styled.div`
  color:#fefefe;
  font-weight:bold;
  font-size:1rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top:5rem;
  box-sizing:border-box;
  position:absolute;
  bottom:1.5rem;
  left:0;
`;

const Date = styled.div`
  font-size:0.875rem;
`;

const Value = styled.div`
  font-size:0.875rem;
`;

const Folder = styled.div`
  background-color:#fff;
  width: 70%;
  border-radius:15px;
  position: absolute;
  top: 7%;
  display:flex;
  flex-flow:column wrap;
  justify-content:center;
  align-items:center;
  border:1px solid #707070;
  z-index:99;
`;

const Close = styled.img `
  width:15px;
  position: absolute;
  top:5%; right:6%;
  cursor:pointer;
`;

const H =styled.p`
  text-align:center;
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const SelectBox = styled.div`
  display:flex;
  margin-top:1rem;
`;
const Select = styled.select`
    width:130px;
    height:25px;
    padding: 1px 0 1px 12px;
    background-color:#F5F5F5;
    font-size:0.625rem;
    font-weight:bold;
    border:none;
    border-radius:0; /* 아이폰 사파리 보더 없애기 */
    border:0;
    outline:0;
    text-align:center;
    
    @media all and (min-width:800px){ width:200px; }
`;
const Option = styled.option`
    height:25px;
    background-color:#F5F5F5;
    border-bottom: 1px solid red;
    padding: 1px 20px;
    font-size:0.625rem;
    font-weight:bold;
`;
const SaveBtn = styled.div`
    width:60%; height:20px;
    border:1px solid #707070;
    border-radius:25px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.75rem;
    margin-left:0.5rem;
`;

const MakingBox = styled.div`
  display:flex;
  align-items:center;
  margin-top:0.5rem;
  margin-bottom:0.5rem;
`;

const MakingBtn = styled.img`
  margin-right:0.5rem;
  width:20px;
  height:20px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content: center;
  outline:none;
`;

const Makingp = styled.p`
  font-size:0.75rem;
`;

const Frame = styled.div`
  display:flex;
  width:100%; height:38px;
  justify-content:space-between;
  position:absolute;
  left:0; top:10px;
`;

const Hunhun = styled.div`
  width:50px; height:100%;
  margin-left:10px;
  display:flex;
  flex-direction:row;
`;

const HunhunImg = styled.img`
  width:20px;
  margin-top:px;  
`;
const HunhunCount = styled.span`
  display:inline-block;
  line-height:38px;
  color:#fd0031;
  margin-left:5px;
  font-size:1rem;
`;

const DropMenu = styled.div`
  width:120px; height:120px;
  position:absolute;
  right:30px; top:15px;
  z-index:9999;
  display:flex;
  flex-direction: column;
  @media all and (min-width:480px){
    right:50px;
  }
`;
const Menus = styled.div`
  flex-basis:25%;
  background:#fefefe;
  text-align:center;
  line-height: 30px;
  border:1px solid #777;
  font-size: 12px;
  box-sizing: border-box;
    :hover{
      background:#ccc;
    }
    :nth-child(2), :nth-child(3), :nth-child(4){
      border-top:none;
    }
  
  @media all and (min-width:480px){
    font-size:14px;
    width:140px; height:120px;
  }
`;

export default Alpage;
