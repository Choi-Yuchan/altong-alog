import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListNav from './ListNav';
import Profile from './Profile';
import { Statistic } from './Statistic';
import i18n from '../config/lang/i18n';
import { useTranslation } from 'react-i18next';


function Hamburger({naviRef, isActive, setIsActive, usersHun, usersRefund, usersModify, usersReply, usersPaste, usersMessage, usersMento}) {

  const {t} = useTranslation();
  const langHamburger = {
    grade : t('Grade'),
    userData : {
      id:"ingu8349",
      code:"KOR",
      profileImg:`${process.env.PUBLIC_URL + `/images/profile-image.png`}`,
      countryImg:`${process.env.PUBLIC_URL + `/images/korea.png`}`,
      profileAlt:"Profile",
      countryAlt:"Flag",
    },
    visitorCount:
      {
        total: 158900, // 총 방문자 변수
        yesterday: 24500, // 어제 방문자 변수
        today: 12800, // 오늘 방문자 변수
      }
    ,
    listTitle : t('Notification'),
    listTitleArrow: `${process.env.PUBLIC_URL + '/images/arrow.png'}`,
    buttonText : t('My_AlogDalog'),
    logoAlt: "Altong Logo",
  }
  const grade = langHamburger.grade;
  const userData = langHamburger.userData;
  const listTitle = langHamburger.listTitle;
  const listTitleArrow = langHamburger.listTitleArrow;
  const visitorCount = langHamburger.visitorCount;
  const ButtonText = langHamburger.buttonText;
  const logoAlt = langHamburger.logoAlt;

  
  const closeNav = () => {
    setIsActive(!isActive);
  }

  return (
    <Container id='Con'>
      {isActive ? 
      <>
      <Wrap onClick = { (e) => {e.preventDefault(); closeNav();} }></Wrap>
      <SideMenu ref={naviRef}>
        <CloseBox>
          <CloseButton onClick={() => closeNav()} src={process.env.PUBLIC_URL + `/images/close-button.svg`}></CloseButton>
        </CloseBox>
        <Profile 
        grade={grade[3]} 
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
        <ListNav 
        className="list" 
        title={listTitle}
        arrow={listTitleArrow} 
        closeNav={closeNav}
        usersRefund={usersRefund} 
        usersModify={usersModify}
        usersReply={usersReply}
        usersPaste={usersPaste}
        usersMento={usersMento}
        usersMessage={usersMessage}
        usersHun={usersHun}
        />
        <Statistic 
        total={visitorCount.total} 
        yesterday={visitorCount.yesterday}
        today={visitorCount.today}>
        </Statistic>
        <LangMenu>
          <Langlist onClick={()=>{i18n.changeLanguage('ko')}}>한글</Langlist>/
          <Langlist onClick={()=>{i18n.changeLanguage('en')}}>EN</Langlist>/
          <Langlist onClick={()=>{i18n.changeLanguage('ja')}}>日本語 </Langlist>/
          <Langlist onClick={()=>{i18n.changeLanguage('zh')}}>中文 </Langlist>
        </LangMenu>
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
const LangMenu = styled.ul`
  list-style:none;
  display:felx;
  justify-content:center;
  align-items:center;
  margin-top:10px;
`;
const Langlist = styled.li`
  font-size:14px;
  font-weight:bold;
  margin:0 10px;
  padding:0 4px;
  cursor:pointer;
`;

export default Hamburger;
