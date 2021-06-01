/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import AlogPersonalMain from './AlogPersonalMain';

function AlogMento () {

    
    const MentoInfo = [
        {
            id:1,
            Nickname: "디디바오",
            profit: '80,000',
            gun: '120',
            answer: '50',
            percent: '70'
        },
        {
            id:2,
            Nickname: "디디바오",
            profit: '80,000',
            gun: '120',
            answer: '50',
            percent: '70'
        },
        {
            id:3,
            Nickname: "디디바오",
            profit: '80,000',
            gun: '120',
            answer: '50',
            percent: '70'
        },
        {
            id:4,
            Nickname: "디디바오",
            profit: '80,000',
            gun: '120',
            answer: '50',
            percent: '70'
        },
        {
            id:5,
            Nickname: "디디바오",
            profit: '80,000',
            gun: '120',
            answer: '50',
            percent: '70'
        },
  
    ];
    const 닉네임 = "사용자";
    const count = "100";
    const [close, setClose] = useState(true);

    const langMento = {
        ko:{
            userID:["사용자"],
            mento:"님의 멘토",
            people:"명",
            grade:"알천사",
            direct:"지식발전소 바로가기",
            profit:"질문수익",
            answer:"답변수익",
            egg:"알",
            per:"감사알 지급 건 수",
            percent:"감사알 지급률",
            gun:"건",
            deleted:"멘토 삭제는 알통 - 나의 공간 - 멘토 에서 가능합니다."
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
    const percent = langMento.ko.percent;
    const gun = langMento.ko.gun;
    const deleted = langMento.ko.deleted;

    return (
        <>
        { close ?
            <MentoBox>
                <ExitFrame><Exit src={process.env.PUBLIC_URL + '/images/close-button.svg'} onClick = { () => { setClose(!close) } }></Exit></ExitFrame>
                <Nick>'<span>{ userID }</span>'{mento}(<span>{count}</span>{people})</Nick>
                <Contents>
                    {
                        MentoInfo.map( info => (
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
                                    <Profile>{direct}</Profile>
                                    <Question>{profit}<span>{ info.profit }</span>{egg} | {per} <span>{ info.gun }</span>{gun} </Question>
                                    <Answer>{answer} <span>{ info.answer }</span>{egg} | {percent} <span>{ info.percent }</span>% </Answer>
                                </WordBox>
                            </UserInfo>
                             )
                        )
                    }
                </Contents>
                <Inform>{deleted}</Inform>
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
    width:300px; height:520px;
    background:#fefefe;
    margin:120px auto 0 ;
    border:1px solid rgba(0,0,0,.3);
    position:absolute;
    z-index:999;
    left:50%; top:-180px;
    transform:translateX(-50%);
`;

const Nick = styled.div`
    text-align:center;
    color:#676767;
    width:100%; height:20px; 
    margin-top:10px;
    font-size:1em;
`;

const Contents = styled.div`
    width:280px; height:400px;
    margin:14px auto 0;
    display:flex;
    flex-direction:column;
`;

const UserInfo = styled.div`
    width:280px; height:72px;
    margin:0 auto 10px;
    border:1px solid rgba(0,0,0,.2);
    border-radius:20px;
    display:flex;
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
    font-weight:bold;
    color:#707070;
`;
const Answer = styled.div`
    font-size:0.438em;
    font-weight:bold;
    color:#707070;
`;

const Inform = styled.div`
    text-align:right;
    color:#676767;
    width:100%; height:20px; 
    margin-top:30px;
    font-size:0.625em;
`;


export default AlogMento;