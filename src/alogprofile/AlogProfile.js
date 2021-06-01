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
    const [Opend, SetOpen] = useState(false);
    const Opener = () => {
        SetOpen(!Opend);
    }

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

    return (
        <Frame>
            <PicContainer>
                <Pic src={process.env.PUBLIC_URL + '/images/face.png'} alt="지식발전소 메인으로 이동"></Pic>
            </PicContainer>
            
                <Set>
                    <SetPicFrame>
                    { selfLogin === true && 
                        <SetPic src={process.env.PUBLIC_URL + '/images/setting.png'} onClick={ () => { Opener() }}/> }
                    </SetPicFrame>
                   
                </Set>           
           
            { Opend ? <AlogProfileSetting />: null }
            <Nickname>
                <Country>
                    <Flag src={process.env.PUBLIC_URL + '/images/flag.png'}/>
                    <CountryName>KOR</CountryName>
                </Country>
                <Link to="/personalMain"><NicknameID>{nickname}</NicknameID></Link>
                <Grade>{grade}</Grade>
            </Nickname>
            <Intro>
                <Sentence>{nickname}{intro}</Sentence>
                <MentoBox>
                    <Mento  onClick={ () => { Openert() }}>{mento} <span>{ add }</span>{many}</Mento>
                    { Opent ? <AlogMento />: null }
                    <Menti onClick={ () => { Openerts() }}>{menti} <span>100</span>{many}</Menti>
                    { Opents ? <AlogMenti />: null }
                    {/* { message ? <AlogMessage /> : null } */}
                </MentoBox>
            </Intro>
            <Icons>
                <Circle>
                    <Hashtag># <span>{hashtag1}</span> # <span>{hashtag2}</span> # <span>{hashtag3}</span></Hashtag>
                    <Statics>{statistic}</Statics>
                </Circle>
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
        </Frame>
    );
};

const Frame = styled.div`
    width:100%;
    height:113px;
    border-top:1px solid rgba(0,0,0,.2);
    border-bottom:1px solid rgba(0,0,0,.2);
    position:relative;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    font-family:"Noto Sans CJK KR";

    @media all and (min-width:800px){
        width:800px;
        margin:0 auto;
    }
    @media all and (min-width:500px){
        height:24vw;
    }
    @media all and (min-width:800px){
        height:194px;
    }
`;

const PicContainer = styled.div `
    width:82px; height:82px;
    object-fit:contain;
    border-radius:50%;
    overflow:hidden;
    position:absolute;
    right:10vw; top:-41px;

    @media all and (min-width:500px){
        transform:scale(1.5);
        transform-origin:center center;
    }
    
    @media all and (min-width:600px){
        transform:scale(1.7);
        transform-origin:center center;
        right:17vw;
    }
    @media all and (min-width:700px){
        transform:scale(1.8);
        transform-origin:center center;
    }
    @media all and (min-width:800px){
        right:120px;
    }
`;

const Pic = styled.img`
    width:100%; height:100%;
    cursor:pointer;
`;

const Set = styled.div`
    width:100%; 
    height:10%;
    position:relative;
    margin-top:0.5vw;
    margin-left:0.5vw;
    z-index:99;
`;

const SetPicFrame = styled.div`
    width:4vw; height:4vw;
    cursor: pointer;


    @media all and (min-width:500px){
        width:25px; height:25px;
    }
`;
const SetPic = styled.img`
    width:100%; height:100%;
    margin-top:1vw;
    margin-left:1vw; 
    z-index:9999;
    position:relative;
    cursor:pointer;
`;

const Nickname = styled.div`
    width:100%; height:30%;
    padding-left:3vw;
    color:#707070;
    box-sizing:border-box;
    @media all and (min-width:500px){
        padding-top:10px;
    }
    @media all and (min-width:600px){
        padding-top:20px;
    }
    @media all and (min-width:800px){
        padding-left:65px;
    }
`;

const NicknameID = styled.span`
    margin-left:10px;
    font-size:1em; 
    font-weight:bold;
    color:#707070;
    cursor:pointer;

    @media all and (min-width:500px){
        font-size:1.5em;
    }
    @media all and (min-width:600px){
        font-size:2em; 
    }
`;

const Country = styled.div`
    display:inline-block;
    width:19px; height:30px;
    margin-left:5%;
    transform:translateY(17px);
`;

const Flag = styled.img`
    width:20px; height:15px;
`;

const CountryName = styled.span`
    width:100%;
    font-weight:bold;
    font-size:10px;
`; 

const Grade = styled.div`
    width:36px; height:13px;
    border:1px solid #FF4A4A;
    border-radius:50px;
    font-size:8px; 
    font-weight:normal;
    text-align:center;
    color:#FF4A4A;
    display:inline-block;
    margin-left:10px;
    line-height:13px;

    @media all and (min-width:800px){
        font-size:10px; 
        height:15px;
        line-height:15px;
    }
`;

const Intro = styled.div`
    width:100%; 
    height:30%;
    display:flex;
    justify-content:center;

    @media all and (min-width:800px){
        width:800px;
    }
`;

const Sentence = styled.div`
    font-size:0.625em; 
    color:#707070;
    margin-top:2.5vw;
    margin-left:17%;
    flex-basis:60%;

    @media all and (min-width:500px){
        font-size:0.85em; 
    }
    @media all and (min-width:600px){
        font-size:1em; 
    }
    @media all and (min-width:800px){
        margin-top:20px;
    } 
    
`;

const MentoBox = styled.div`
    margin-top:5vw;
    height:40%;
    flex-basis:40%;
    font-weight:bold;
    font-size:0.625em;
    display:flex;
    color:#707070;
    text-align:left;

    @media all and (min-width:500px){
        font-size:0.85em; 
    }
    @media all and (min-width:600px){
        font-size:1em; 
    }
    @media all and (min-width:800px){
        margin-top:40px; 
    }
`;

const Mento = styled.div`
    flex-basis:50%;
    text-align:center;
    cursor:pointer;
`;
const Menti = styled.div`
    margin-left:5px;
    flex-basis:50%;
    cursor:pointer;
`;

const Icons = styled.div`
    width:100%; 
    height:30%;
    display:flex;
`;

const Circle = styled.div`
    height:100%;
    flex-basis:70%;
    display:flex;
    justify-content:flex-end;
    padding-top:8px;
    font-size:0.625em;
    color:#707070;
    text-align:center;

    @media all and (min-width:500px){
        font-size:0.85em; 
    }
    @media all and (min-width:600px){
        font-size:1em; 
    }
`;

const Hashtag = styled.div`
    height:50%; width:45%;
    border:1px solid rgba(0,0,0,.2);
    border-radius:50px;
    margin-right:10px;
    padding-top:2px;
    box-sizing:border-box;

    @media all and (min-width:500px){
        padding-top:1px;
    }
    @media all and (min-width:800px){
        padding-top:3px;
    }
`;
const Statics = styled.div`
    height:50%; width:35%;
    border:1px solid rgba(0,0,0,.2);
    border-radius:50px;
    padding-top:2px;
    margin-right:20px;
    box-sizing:border-box;
    cursor:pointer;

    @media all and (min-width:500px){
        padding-top:1px;
    }
    @media all and (min-width:800px){
        padding-top:3px;
    }
`;

const ThreeIcons = styled.div`
    padding-top:10px;
    flex-basis:30%;
    width:100%; height:100%;
    display:flex;
    justify-content:center;
`;
const Images = styled.img`
    width:18px; height:17px;
    margin-right:15px;
    cursor:pointer;
    

    @media all and (min-width:500px){
        width:25px; height:24px;
    }
    @media all and (min-width:600px){
        width:25px; height:24px;
    }
    @media all and (min-width:800px){
        margin-top:8px;
        width:30px; height:29px;
    }

`;



export default AlogProfile;