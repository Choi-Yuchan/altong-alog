/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import AlogPersonalMain from './AP/myMainAlog/AlogPersonalMain';

function AlogMento () {

    
    const MentoInfo = [
        {
            id:1,
            Nickname: "디디바오",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
        {
            id:2,
            Nickname: "디디바오",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
        {
            id:3,
            Nickname: "디디바오",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
        {
            id:4,
            Nickname: "디디바오",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
        {
            id:5,
            Nickname: "디디바오",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
  
    ];
    const 닉네임 = "사용자";
    const [close, setClose] = useState(true);

    const langMento = {
        ko:{
            userID:["사용자"],
            mento:"님의 멘토",
            people:"명",
            grade:"알천사",
            direct:"프로필보기>",
            profit:"보유 알록 수",
            answer:"보유 달록 수",
            egg:"개",
            per:"멘토 수",
            percent:"멘티 수",
            find:"찾기",
            x:"삭제"
        }
    }
    
    const userID = langMento.ko.userID;
    const mento = langMento.ko.mento;
    const people = langMento.ko.people;
    const grade = langMento.ko.grade;
    const direct = langMento.ko.direct;
    const profit = langMento.ko.profit;
    const answer = langMento.ko.answer;
    const egg = langMento.ko.egg;
    const per = langMento.ko.per;
    const find = langMento.ko.find;
    const percent = langMento.ko.percent;
    const x = langMento.ko.x;
    
    const [user, setUser] = useState(MentoInfo);
    const star = (id) => {
        setUser(
            user.map( user =>
                user.id === id + 1 ? {...user, state: false} : user
                )
        )
    };
    
    return (
        <>
        { close ?
            <MentoBox>
                <ExitFrame><Exit src={process.env.PUBLIC_URL + '/images/close-button.svg'} onClick = { () => { setClose(!close) } }></Exit></ExitFrame>
                <Nick>'<span>{ userID }</span>'{mento}(<span>{MentoInfo.length}</span>{people})</Nick>
                <Wrap>
                    <NickImg src={process.env.PUBLIC_URL + '/images/nicksearch.svg'}></NickImg><Typing type="text"></Typing><Found>{find}</Found>
                </Wrap>
                <Delete>{x}</Delete>
                <Contents>
                    {
                        user.map( (info, i) => (
                            <Label>
                            <Check type="checkbox" name="checkDelete"></Check>
                            <UserInfo info={info}>
                                <Link to="/personalMain">
                                <ImgBox>
                                    <PicImg src={process.env.PUBLIC_URL + '/images/back.png'} alt="해당 계정 알로그 가기"/>
                                </ImgBox>
                                </Link>
                                <WordBox>
                                    <First>
                                        <Grade>{grade}</Grade><NickName>{info.Nickname}</NickName>
                                    </First>
                                    <Profile to="">{direct}</Profile> {/*해당 계정 알록달록 바로가기*/}
                                    <Question>{profit} <span>{ info.profit }</span>{egg} | {per} <span>{ info.gun }</span>{people} </Question>
                                    <Answer>{answer} <span>{ info.answer }</span>{egg} | {percent} <span>{ info.percent }</span>{people} </Answer>
                                </WordBox>
                                <Star src={info.state === true ? process.env.PUBLIC_URL + '/images/star.png':process.env.PUBLIC_URL + '/images/star_on.png'}
                                onClick={(e)=>{e.preventDefault(); star(i)}}></Star>
                            </UserInfo>
                            </Label>
                             )
                        )
                    }
                </Contents>
            </MentoBox>
        : null    
        }
    </>
    )
};
const ExitFrame = styled.div`
    width:100%; height:20px;
    position:relative;
`;
const Exit = styled.img `
    width:20px; height:20px;
    position:absolute;
    right:10px; top:10px;
    cursor:pointer;
`;
const MentoBox = styled.div`
    width:300px; height:450px;
    background:#fefefe;
    margin:120px auto 0 ;
    border:1px solid rgba(0,0,0,.3);
    position:fixed;
    z-index:99;
    left:50%; top:-5%;
    transform: translateX(-50%);
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none; 
    }
    @media all and (min-width:480px) {
        padding:30px;
    }
    @media all and (min-height:650px) {
        top:2%;
    }
    @media all and (min-height:800px) {
        top:5%;
    }          
`;
const Label = styled.label`
    display:flex;
    align-items: center;
`;
const Nick = styled.div`
    text-align:center;
    color:#676767;
    width:100%; height:20px; 
    margin-top:10px;
    font-size:1.2em;
`;

const Contents = styled.div`
    width:280px; height:400px;
    margin:14px auto 0;
    display:flex;
    flex-direction:column;
    
    @media all and (min-width:480px) {
        width:320px;
    }
`;

const UserInfo = styled.div`
    width:280px; height:72px;
    margin:0 auto 10px;
    border:1px solid rgba(0,0,0,.2);
    border-radius:20px;
    display:flex;
    padding:5px 0;
    position:relative;
`;

const ImgBox = styled.div`
    width:52px; height:52px;
    margin-top:8px;
    border-radius:50%;
    margin-left:10px;
`;
const PicImg = styled.img`
    width:100%;
    border-radius:50%;
    object-fit:cover;
    cursor:pointer;
`;

const WordBox = styled.div`
    margin-left:10px;
    padding-top:5px;
`;

const Grade = styled.div`
    width:40px; height:15px;
    border:1px solid #FF4A4A;
    color:#FF4A4A;
    text-align:center;
    font-size:0.625em;
    border-radius:20px;
    line-height:15px;
`;
const NickName = styled.span`
    font-size:0.625em;
    color:#707070;
    line-height:15px;
    margin-left:10px;
    font-weight:bold;
`;
const First = styled.div`
    font-size:0.625em;
    display:flex;
    margin-bottom:5px;
    
`;
const Profile = styled.div`
    font-size:0.438em;
    cursor:pointer;
    margin-bottom:5px;
    color:#707070;
`;
const Question = styled.div`
    font-size:0.438em;
    margin-bottom:5px;
    color:#707070;
`;
const Answer = styled.div`
    font-size:0.438em;
    color:#707070;
`;

const Star = styled.img`
    width:30px; height:30px;
    position:absolute;
    right:10px; top:50%;
    transform: translateY(-110%);

    @media all and (min-width:480px) {
        transform: translateY(-50%);
    }
`;

const Wrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    width:200px;
    margin:15px auto 5px;
`;
const NickImg = styled.img`
    width:30px;
`;
const Typing = styled.input`
    width:100px;
    border:none;
    border-bottom:1px solid #777; 
    :focus {outline:none;}
`;
const Found = styled.button`
    background: #fefefe;
    border:1px solid #777;
    border-radius:10px;
    font-size: 12px;
    cursor:pointer;
`;
const Delete = styled.button`
    background: #fefefe;
    border:1px solid #777;
    border-radius:10px;
    margin-left:250px;
    font-size: 12px;
    cursor:pointer;
`;

const Check = styled.input`
`;
export default AlogMento;