import React, {useState} from 'react';
import styled from 'styled-components';
import AlogProfileSetting from '../AlogProfileSetting';
import AlogMento from '../AlogMento';
import AlogMenti from '../AlogMenti';
import AlogMessage from '../AlogMessage';
import HunPopup from '../HunPopup';
import { Link } from 'react-router-dom';

const langAlogProfile = {
    ko:{
        userID: ["Vivien"],
        grade:"알천사",
        intro:"님의 알록달록에 오신걸 환영합니다.",
        hashtag1:"음주",
        hashtag2:"여행",
        hashtag3:"축구",
        statistic:"통계 보러가기",
        mento:"멘토",
        menti:"멘티",
        write:"글쓰기",
        make:"폴더를<br>생성해주세요",
        many:"명"
    }
}

function AlogProfile () {
    const nickname = langAlogProfile.ko.userID;
    const grade = langAlogProfile.ko.grade;
    const intro = langAlogProfile.ko.intro;
    const hashtag1 = langAlogProfile.ko.hashtag1;
    const hashtag2 = langAlogProfile.ko.hashtag2;
    const hashtag3 = langAlogProfile.ko.hashtag3;
    const statistic = langAlogProfile.ko.statistic;
    const mento = langAlogProfile.ko.mento;
    const menti = langAlogProfile.ko.menti;
    const write = langAlogProfile.ko.write;
    const make = langAlogProfile.ko.make;
    const many = langAlogProfile.ko.many;

    const [add, addChange] = useState(0);
    const [show, setShow] = useState(true);
    const [Opend, setOpend] = useState(false);

    const [Opent, SetOpent] = useState(false);
    const Openert = () => {
        SetOpent(!Opent);
    }

    const [Opents, SetOpents] = useState(false);
    const Openerts = () => {
        SetOpents(!Opents);
    }
    
    const [message, messageOpen] = useState(false);
    const messages = () => {
        messageOpen(!message);
    }

    const [hun, SetHun] = useState(false);
    const HunEgg = () => {
        SetHun(!hun);
    }
    
    // 내가 로그인 했을 때만 노출됨.
    const selfLogin = true;

    const [state, setState] = useState(true);
    
    return (
        <>
        <Back>
            <BackImg src={process.env.PUBLIC_URL + '/images/background.jpg'}></BackImg>
        </Back>
        <Frame>
            <PicContainer>
                <Pic src={process.env.PUBLIC_URL + '/images/face.png'} alt="지식발전소 메인으로 이동"></Pic>
            </PicContainer>
            
            <SetPicFrame>
            { selfLogin === true && <SetPic src={process.env.PUBLIC_URL + '/images/setting.png'} onClick={ () => { setOpend(true) }}/> }
            </SetPicFrame>
            { Opend && <AlogProfileSetting setOpend={setOpend} /> }
            <Nickname>
                {/* 국기 주석처리
                <Country>
                    <Flag src={process.env.PUBLIC_URL + '/images/flag.png'}/>
                    <CountryName>KOR</CountryName>
                </Country> */}
                <Link to="/personalMain"><NicknameID>{nickname}</NicknameID></Link>
                <Grade>{grade}</Grade>
                <Statics>활동</Statics>
            </Nickname>
            <ProfileBottom>
                <Intro>
                    <Sentence>{nickname}{intro}</Sentence>
                    <Hashtag># <span>{hashtag1}</span> # <span>{hashtag2}</span> # <span>{hashtag3}</span></Hashtag>
                </Intro>
                <Icons>
                    <MentoBox>
                        <Wrap onClick={ () => { Openert() }}><Mento>{mento}</Mento><Count>{ add }</Count><Dot state={state}/></Wrap>
                        { Opent ? <AlogMento />: null }
                        <Wrap onClick={ () => { Openerts() }}><Mento>{menti}</Mento><Count>100</Count><Dot state={state}/></Wrap>
                        { Opents ? <AlogMenti />: null }
                        {/* { message ? <AlogMessage /> : null } */}
                    </MentoBox>
                    <ThreeIcons>
                        <Images show={show} src={show?process.env.PUBLIC_URL + '/images/add-mento.png':process.env.PUBLIC_URL + '/images/added-mento.png'} 
                            onClick={ 
                                ()=> {
                                    addChange(add + 1 );
                                    setShow(false);
                                }
                            } />
                        <Images src={process.env.PUBLIC_URL + '/images/hun.svg'} onClick={ () => { HunEgg() }}/>
                        {/* { hun ? <HunPopup />: null } */}
                        <Images src={process.env.PUBLIC_URL + '/images/message.svg'} onClick={ () => { messages() } } />
                        <AlogMessage close={message} setClose={messageOpen} />
                        <HunPopup hunAl={hun} setHunAl={SetHun} />
                    </ThreeIcons>
                </Icons>
            </ProfileBottom>
        </Frame>
        </>
    );
};

const Back = styled.div`
    width:100%; height:50vw;
    object-fit:cover;
    object-position: center;
    margin:0 auto;

    @media all and (min-width:441px) {
        height:221px;
    }
    @media all and (min-width:800px) {
        width:800px;
    }
`;

const BackImg = styled.img `
    width:100%; height:100%;
`;

const Frame = styled.div`
    border-top:1px solid rgba(0,0,0,0.2);
    border-bottom:1px solid rgba(0,0,0,0.2);
    display:flex;
    flex-direction:column;
    position:relative;
`;

const PicContainer = styled.div `
    width:9rem;
    height:9rem;
    border-radius:50%;
    overflow:hidden;
    cursor:pointer;
    position:absolute;
    top:-4.5rem;
    right:15px;
    transform-origin:right center;
    transform:scale(0.7);
    transition:all 0.3s;

    @media (min-width:480px) {
        transform:scale(1);
        right:30px;
    }
`;

const Pic = styled.img`
    width:100%;
    height:100%;
`;

const Set = styled.div`
`;

const SetPicFrame = styled.div`
    padding:0.3rem;
    width:1.2rem;
    height:1.2rem;
`;
const SetPic = styled.img`
    width:100%;
    cursor:pointer;
`;

const Nickname = styled.div`
    display:flex;
    align-items:center;
    padding-left:0.8rem;
`;

const NicknameID = styled.span`
    font-size:1.5em;
    font-weight:bold;
    color:#707070;
    cursor:pointer;

    @media (min-width:480px) {
        font-size:2em;
    }
`;

// const Country = styled.div`
//     display:inline-block;
//     width:19px; height:30px;
//     margin-left:5%;
//     transform:translateY(17px);
// `;

// const Flag = styled.img`
//     width:20px; height:15px;
// `;

// const CountryName = styled.span`
//     width:100%;
//     font-weight:bold;
//     font-size:10px;
// `; 

const Grade = styled.div`
    font-size:11px;
    border:1px solid #ff4a4a;
    color:#fd0031;
    padding:1px 5px;
    border-radius:20px;
    margin:0 0.5rem;
`;

const Intro = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
`;

const Sentence = styled.div`
    font-size:0.8em;
    color:#707070;
    margin-bottom:0.8rem;
    line-height:1.2em;

    @media (min-width:480px) {
        font-size:1em;
    }
`;
const ProfileBottom = styled.div`
    display:flex;
    padding:1rem 0.7rem 0.8rem;
    justify-content: space-between;

    @media (min-width:480px) {
        padding:1.5rem 0.9rem 1rem;
    }
`;

const MentoBox = styled.div`
    display:flex;
    font-size:0.9em;
    justify-content: space-between;

    @media (min-width:768px) {
        width:150px;
        margin-right:20px;
    }
`;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight:bold;
    color:#555;
    position:relative;
    justify-content: space-around;
    cursor: pointer;

    :nth-child(1){
        margin-right: 10px;
    }
    @media (min-width:768px) {
        flex-direction: row;
    }
`;
const Dot = styled.div`
    position:absolute;
    left:-2px; top:-2px;
    width:8px; height:8px;
    background:${props => props.state === true ? '#fd0031' : '#ccc'};
    border-radius: 50%;
`;
const Mento = styled.div`
    font-size:12px;
    padding:2px 10px;
    cursor:pointer;
    white-space:nowrap;
    letter-spacing:-0.5px;
    background: #ddd;
    border-radius: 10px;
    margin-bottom: 3px;
    
    @media (min-width:768px) {
        margin-bottom: 0px;   
    }
`;

const Count = styled.span`
     @media (min-width:768px) {
        margin-left: 10px;   
    }
`;

const Icons = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Hashtag = styled.div`
    font-size:0.8rem;

    @media (min-width:480px) {
        font-size:1rem;
    }
`;
const Statics = styled.div`
    font-size:16px;
    border:1px solid #333;
    padding:2px 10px;
    border-radius:30px;
    cursor:pointer;
`;

const ThreeIcons = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-top:1rem;
`;
const Images = styled.img`
    width:25px;
    margin-right:0.5rem;

    @media (min-width:480px) {
        width:30px;
    }
`;



export default AlogProfile;