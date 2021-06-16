import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListNav from './components/ListNav';
import Profile from './components/Profile';
import { Statistic } from './components/Statistic';
import {CSSTransition} from 'react-transition-group';


const langHamburger = {
  ko:{
    grade : [ "알천사","나비천사","미소천사","열혈천사","황금천사","수호천사","빛의천사","천사장","대천사","대천사장","알통폐인"],
    userData : {
      id:"ingu8349",
      code:"KOR",
      profileImg:`${process.env.PUBLIC_URL + `/images/profile-image.png`}`,
      countryImg:`${process.env.PUBLIC_URL + `/images/korea.png`}`,
      profileAlt:"프로필",
      countryAlt:"국기",
    },
    visitorCount:
      {
        total: 158900, // 총 방문자 변수
        yesterday: 24500, // 어제 방문자 변수
        today: 12800, // 오늘 방문자 변수
      }
    ,
    mentoAlarm: [
      { 
        id: 1, 
        nickname:"우주인우주인우주인", // ID 변수
        data:"개발자의 삶이란 너무나도 어렵다", // 컨텐츠 제목 
        profile:`${process.env.PUBLIC_URL + '/images/profile-image.png'}`,//프로필 이미지 변수
        dataUrl:"/contents", //클릭 시 이동하는 위치 변수
        time:20,//시간변수
        minutes:'분 전'//고정
      },
      { 
        id: 2, 
        nickname:"화성인",
        data:"저녁이 있는 삶", 
        profile:`${process.env.PUBLIC_URL + '/images/face.png'}`,
        dataUrl:"/contents",
        time:30,
        minutes:'분 전'
      }
    ],
    //고정
    listTitle : [
      "알림",
      "멘토 새 글",
      "즐겨찾기 멘토 목록",
      "최근 본 알록달록"
    ],
    listTitleArrow: `${process.env.PUBLIC_URL + '/images/arrow.png'}`,
    buttonText : [
      "내 알록달록",
      "글쓰기",
      "알통 가기",
      "나의 지식발전소"
    ],
    logoAlt: "알통 로고",
  },
}

const alarmArray = [
  {
    id:1,
    Front : "새롭게 공지 된 사항이",
    Count: 0,
    Back : "건 있습니다.",
    time:10,
    minutes:"분 전",
    state:false,
    href:""
},
 {
    id:2,
    Front : "내 알록달록 중",
    Count: 1,
    Back : "개를 퍼갔습니다!",
    time: 11,
    minutes:"분 전",
    state:true,
    href:""
},
{
    id:3,
    Front : "내 알록달록에",
    Count: 0,
    Back : "개의 댓글이 달렸습니다.",
    time:20,
    minutes:"분 전",
    state:true,
    href:""
},
{
    id:4,
    Front : "훈훈알 수입이",
    Count: 4,
    Back : "건 발생했습니다.",
    time:18,
    minutes:"분 전",
    state:true,
    href:""
},
 {
    id:5,
    Front : "새 쪽지가",
    Count: 0,
    Back : "건 있습니다.",
    time:16,
    minutes:"분 전",
    state:true,
    href:""
},
{
    id:6,
    Front : "새로운 멘토로",
    Count: 1,
    Back : "명이 선정하셨습니다!",
    time:40,
    minutes:"분 전",
    state:true,
    href:""
},
{
    id:7,
    Front : "환불이",
    Count: 0,
    Back : "건 발생했습니다.",
    time:4,
    minutes:"분 전",
    state:true,
    href:""
},
{
    id:8,
    Front : "수정된 달록이",
    Count: 1,
    Back : "건 있습니다.",
    time:13,
    minutes:"분 전",
    state:true,
    href:""
}

]
const bookmarkMento = [
  { 
    id: 1, 
    nickname:"우주에서 온 외계인", // ID 변수
    profile:`${process.env.PUBLIC_URL + '/images/profile-image.png'}`,//프로필 이미지 변수
    href:"/contents" //클릭 시 이동하는 해당 ID의 알록달록 메인
  },
  { 
    id: 2, 
    nickname:"KOREA Team",
    profile:`${process.env.PUBLIC_URL + '/images/face.png'}`,
    href:"/contents" 
  },
  { 
    id: 3, 
    nickname:"가나다라마바사", // ID 변수
    profile:`${process.env.PUBLIC_URL + '/images/face.png'}`,
    href:"/contents" 
  },
  { 
    id: 4, 
    nickname:"Apple Pie",
    profile:`${process.env.PUBLIC_URL + '/images/profile-image.png'}`,//프로필 이미지 변수
    href:"/contents" 
  },
  { 
    id: 5, 
    nickname:"아리스토텔레스", // ID 변수
    profile:`${process.env.PUBLIC_URL + '/images/face.png'}`,
    href:"/contents" 
  },
  { 
    id: 6, 
    nickname:"Samsung",
    profile:`${process.env.PUBLIC_URL + '/images/profile-image.png'}`,//프로필 이미지 변수
    href:"/contents" 
  }
]
const visited = [
  { 
    id: 1, 
    nickname:"우주인우주인우주인", // ID 변수
    data:"개발자의 삶이란 너무나도 어렵다", // 컨텐츠 제목 
    profile:`${process.env.PUBLIC_URL + '/images/profile-image.png'}`,//프로필 이미지 변수
    dataUrl:"/contents", //클릭 시 이동하는 위치 변수
    time:20,//시간변수
    minutes:'분 전'//고정
  },
  { 
    id: 2, 
    nickname:"화성인",
    data:"저녁이 있는 삶", 
    profile:`${process.env.PUBLIC_URL + '/images/face.png'}`,
    dataUrl:"/contents",
    time:30,
    minutes:'분 전'
  }
]

function Hamburger({naviRef, isActive, setIsActive}) {
  const grade = langHamburger.ko.grade;
  const userData = langHamburger.ko.userData;
  const listTitle = langHamburger.ko.listTitle;
  const listTitleArrow = langHamburger.ko.listTitleArrow;
  const visitorCount = langHamburger.ko.visitorCount;
  const mentoAlarm = langHamburger.ko.mentoAlarm;
  const ButtonText = langHamburger.ko.buttonText;
  const logoAlt = langHamburger.ko.logoAlt;

  alarmArray.sort(function(a,b){
    return a.time - b.time
  });
  mentoAlarm.sort(function(a,b){
    return a.time - b.time
  });
  visited.sort(function(a,b){
    return a.time - b.time
  });
  bookmarkMento.sort(function(a, b) { // 오름차순
    return a.nickname < b.nickname ? -1 : a.nickname > b.nickname ? 1 : 0;  
  });

  const closeNav = () => {
    setIsActive(!isActive);
  }

  return (
    <Container id='Con'>
      {isActive ? 
      <>
      <Wrap onClick = { (e) => {e.preventDefault(); closeNav(); } }></Wrap>
      <SideMenu ref={naviRef}>
        <CloseBox>
          <CloseButton onClick={() => closeNav()} src={process.env.PUBLIC_URL + `/images/close-button.svg`}></CloseButton>
        </CloseBox>
        <Profile 
        grade={grade[0]} 
        id={userData.id} 
        code={userData.code} 
        profileImg={userData.profileImg} 
        countryImg={userData.countryImg}
        profileAlt={userData.profileAlt}
        countryAlt={userData.countryAlt}/>
        <ButtonSection>
          <Button to="/personalMain" onClick = { () => { closeNav(); } }>{ButtonText[0]}</Button>
          <Button to="/writing" onClick = { ( ) => { closeNav(); } }>{ButtonText[1]} <WriteIcon src={process.env.PUBLIC_URL + '/images/que_icon.svg'}></WriteIcon></Button>
        </ButtonSection>

        <ListNav className="list" 
        title={listTitle}
        alarmArray={alarmArray}
        arrow={listTitleArrow} 
        mentoAlarm={mentoAlarm}
        bookmarkMento={bookmarkMento}
        visited={visited}
        closeNav={closeNav}
        />

        <Statistic 
        total={visitorCount.total} 
        yesterday={visitorCount.yesterday}
        today={visitorCount.today}>
        </Statistic>

        <LSection> 
          <LButton to="/" onClick = { () => { closeNav(); } }>
            <LogoImg src={process.env.PUBLIC_URL + `/images/altong-logo.svg`} alt={logoAlt}/>
            {ButtonText[2]}
            </LButton>
          <LButton to="/" onClick = { () => { closeNav(); } }>{ButtonText[3]}</LButton>
        </LSection>
      </SideMenu>
      </>
      :
      (null
      )}
    </Container>
  );
}

const Wrap = styled.div`
  width:100%; height:150%;
  position:fixed;
  left:0; top:-100px;
  z-index:1;
  background:rgba(0,0,0,.3);
`;

const Container = styled.div`
  margin:0 auto;
  background:transparent;
  color:#707070;
  box-sizing:border-box;
  overflow:hidden;
  position:relative;
  z-index:99999;
`;

const SideMenu = styled.nav`
  width:80%;
  height:100vh;
  background-color:#fefefe;
  box-shadow:0 0.1em 0.2em rgba(0,0,0,0.7);
  z-index:999;
  display:flex;
  flex-flow:column nowrap;
  overflow:scroll;
  align-content:center;
  padding:0.5rem 0;
  position:fixed;
  top:0;
  left:0;
  ::-webkit-scrollbar{
    display:none;
  }

  @media (min-width:480px){
    width: 300px;
  }
`;

const CloseBox = styled.div`
  display:flex;
  justify-content:flex-end;
  padding-right:0.5rem;
`;
const CloseButton = styled.img`
  color:#bebebe;
  border:1px solid #bdbdbd;
  border-radius:50%;
  background-color:#fefefe;
  line-height:19px;
  outline:none;
  cursor:pointer;
`;

const ButtonSection = styled.div`
  margin:0.5rem 0;
  padding-bottom: 1rem;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;

  @media (min-width:480px){
    margin:1rem 0;
  }
`;
const Button = styled(Link)`
  height:18px;
  text-decoration:none;
  color:#707070;
  font-size:1rem;
  line-height: 1.1;
  font-weight:bold;
  padding: 0.5em 1em;
  border:1px solid rgba(0,0,0,.2);
  border-radius:10px;
  background-color:#fefefe;
  :not(:last-child){
  margin-right:0.5rem;
  }

  @media (min-width:480px){
    :not(:last-child){
      margin-right:1rem;
    }
  }
`;

const LSection = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-bottom:1rem;
  flex:1;
  @media (min-width:600px){
    margin-top: 1rem;
  }
`;

const LButton = styled(Link)`
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  font-size:0.875rem;
  font-weight:bold;
  color:#707070;
  background-color:#fefefe;
  border:1px solid rgba(0,0,0,.2);
  border-radius:19px;
  padding:0.25em 0.75rem;
  width:120px;
  height:40px;
  :first-child{
    display:flex;
    align-items:center;
    margin-bottom:0.875rem;
  }

  @media (min-width:480px){
    width:150px;
    padding:0.25em 1rem;
  }
`;
const LogoImg = styled.img`
  padding-right:0.5em;
`;

const WriteIcon = styled.img`
 width:15px;
`;

export default Hamburger;
