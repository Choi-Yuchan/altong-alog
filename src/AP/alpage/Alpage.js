import React, { useState } from 'react';
import styled from 'styled-components';
import AlogFolderMaking from './AlogFolderMaking';



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
const GlobalIcon = styled.div`
  cursor: pointer;
  margin-right:10px;
  margin-top:5px;

`;
const Global =styled.img`
  width:30px;
  position:relative;
  z-index:2;
`;



const Logo = styled.img`
  width:35px;
  height:38px;
  margin-right:10px;
  cursor:pointer;
`;


const Title = styled.div`
  font-size:1.5rem;
  color:#fefefe;
  font-weight:bold;
  width:50%;
  position:absolute;
  text-align:center;
  top:30%;
  left:50%;
  transform:translateX(-50%);

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
  top:5%;
  right:6%;
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

const langAlpage = {
  ko:{
    allData : 
    {
        title: "알통이여 영원하라",
        date: "2021.04.14",
        money: "100,000",
      }
    ,
      //고정
      H : ["폴더를 선택해주세요"],

      Option :["여행, 그 모든 것","음악"],
      //고정
      SaveBtn : ["저장"],
      //고정
      Makingp : ["새폴더 만들기"],
      //고정
      Value : ["알"],
      //고정
      confirmMention: "퍼가시면 Value값 만큼 알이 차감됩니다, 정말로 가져가시겠습니까?",
      

  },
};

function Alpage() {

  const [isShow, setIsShow] = useState(false);

  const titleShow = () => {
    setIsShow(!isShow);
  }

  const [colorIs, setColorShow] = useState(false);

  const colorShow = () => {
    setColorShow(!colorIs);

  }


  const allDate2 = langAlpage.ko.allData;
  const chooseFolder = langAlpage.ko.H;
  const titleName =langAlpage.ko.Option;
  const save =langAlpage.ko.SaveBtn;
  const folder =langAlpage.ko.Makingp;
  const egg =langAlpage.ko.Value;
  const mention = langAlpage.ko.confirmMention;


  const [globalIs,setGlobal] = useState(false);

  const globalShow = () => {
    setGlobal(!globalIs);
  }

  const Icons = styled.div`
    width:100%; height:38px;
    display:flex;
    justify-content:flex-end;
    
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

  const BringHunhunAl = true; //훈훈알 받았을 떄 생기고, 받은 총 갯 수 표시
  return (
    <Box>
      <Frame>
        { BringHunhunAl &&
        <Hunhun><HunhunImg src={process.env.PUBLIC_URL + '/images/answer_almoney.svg'}/><HunhunCount>1,000</HunhunCount></Hunhun>
      }
      <Icons>
      <GlobalIcon onClick={globalShow}>
        { globalIs === true 
          ? <Global src={process.env.PUBLIC_URL + '/images/language_on.svg'}></Global>
          : <Global src={process.env.PUBLIC_URL + '/images/language.svg'}></Global>
        }
      </GlobalIcon>
      <Logo onClick={() => titleShow() } src={process.env.PUBLIC_URL + '/images/alog.png'}></Logo>
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
        {colorIs === true ?  <AlogFolderMaking></AlogFolderMaking> : null}
    </Box>
  


  );
};


export default Alpage;
