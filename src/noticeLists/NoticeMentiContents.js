import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AlogMessage from '../AlogMessage';

const MentoContents = styled.div`
    position:relative;
`;

const Contents = styled.div`
    width:100%;
    border:1px solid #ccc;
    border-radius: 10px;
    margin-bottom:5px;
    display:flex;
    padding:10px 10px 10px 3vw;
    box-sizing: border-box;
`;
const LeftSide = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 40%;
    justify-content: center;
`;
const RightSide = styled.div`
    display:flex;
    font-size:12px;
    align-items: center;
    margin-left:5px;
    flex-basis: 60%;
    justify-content: center;
    text-align: center;

    @media screen and (min-width: 768px){
        font-size: 14px;
    }
`;
const Photo = styled.img`
    width:40px; height:40px;
    border-radius:50%;
 
`;
const Wrap = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
`;
const Grade = styled.div`
    border:1px solid #fd0031;
    border-radius: 10px;
    color:#fd0031;
    text-align: center;
    width:45px;
    padding:1px;
    font-size:10px;

    @media screen and (min-width: 768px){
        width:50px;
        font-size: 11px;
    }
`;
const Nickname = styled.div`
    font-size:14px;
    font-weight: bold;
    padding:3px;
    white-space:normal;
    overflow:hidden;
    text-overflow:ellipsis;
    line-height: 1.2; 
    height: 1.2em;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;

    @media screen and (min-width: 768px){
        font-size: 15px;
    }
`;
const Direct = styled(Link)`
    color:#666;
    font-size:10px;
    margin-top:5px;
`;
const Line = styled.span`
    width:1px; height:100%;
    background:#666;
    margin:0 10px;

`;
const Wrap2 = styled.div``;
const Upper = styled.div`
    margin-bottom:10px;
    display:flex;
    flex-direction: column;
    
    @media screen and (min-width: 480px){
        flex-direction: row;
        margin-bottom:0px;
        align-items: center;
    }
`;
const Below = styled.div`
    margin-top:10px;
    display:flex;
    flex-direction: column;

    @media screen and (min-width: 480px){
        flex-direction: row;
        margin-bottom:0px;
        align-items: center;
    }
`;
const Space = styled.span`   
    margin-top:3px;
    @media screen and (min-width: 480px){
        margin-top:0px;
        margin-left:10px;
    }
`;
const Dot = styled.img`
    width:20px; height:30px;
    cursor:pointer;
`;

const Pop = styled.div`
    width:100px; height:50px;
    position:absolute;
    right:30px; top:20px;
    background:#fff;
    border:1px solid #666666;
    z-index:999999;
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px 0 10px 10px;
    box-shadow: 2px 2px 2px #ddd;
`;
const Icon = styled.img`
    width:15px;
    margin:0 5px;
`;
const Word = styled.div`
    font-size:10px;
    flex-basis: 50%;
    display:flex;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
`;
const Delete = styled.span`
    color:#fd0031;
`;

const NoticeMentiContents  = ({mentiList, onRemoveMenti, body, setBody}) => {

    const IconsName = {
            title:"멘토 / 멘티",
            mento:"멘토",
            menti:"멘티",
            myMento:"내 멘토",
            myMenti:"내 멘티",
            Delete:"삭제",
            message:"쪽지 보내기",
            people:"명",
            haveAlog:"보유 알록 수",
            haveDalog:"보유 달록 수",
            haveMento:"멘토 수",
            haveMenti:"멘티 수",
            many:"개",
            direct:"알록달록 바로가기 >"    
    }
    const deletes = IconsName.Delete;
    const message = IconsName.message;

    function confirmModal({mentiList, onRemoveMenti}) {
        if (window.confirm(`${mentiList.nickname}` + "님을 정말 삭제하시겠습니까?")) {
            onRemoveMenti(mentiList.id);
        } 
     }
    const people = IconsName.people;
    const haveAlog = IconsName.haveAlog;
    const haveDalog = IconsName.haveDalog;
    const haveMento = IconsName.haveMento;
    const haveMenti = IconsName.haveMenti;
    const many = IconsName.many;
    const direct = IconsName.direct;

    const [show, setShow] = useState(false);
    const [close, setClose] = useState(false);
    useEffect(()=>{
        if (body === true) {
            setShow(false);
        }
    }, [body, show])
    
          return (
                <MentoContents>    
                    <Contents>
                        <LeftSide>
                            <Wrap>
                                <Photo src={mentiList.profileImg} alt="profile" />  
                                <div>
                                    <Grade>{mentiList.grade}</Grade>
                                    <Nickname>{mentiList.nickname}</Nickname>
                                </div>
                            </Wrap>
                                <Direct to="">{direct}</Direct>
                        </LeftSide>
                        <RightSide>
                            <Wrap2>
                                <Upper>{haveAlog} <Space><span>{mentiList.haveAlog.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>{many}</Space></Upper>
                                <Below>{haveDalog} <Space><span>{mentiList.haveDalog.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>{many}</Space></Below>
                            </Wrap2>
                            <Line></Line>
                            <Wrap2>
                                <Upper>{haveMento} <Space><span>{mentiList.mento.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>{people}</Space></Upper>
                                <Below>{haveMenti} <Space><span>{mentiList.menti.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>{people}</Space></Below>
                            </Wrap2>
                        </RightSide>
                        <Dot src={process.env.PUBLIC_URL + '/images/dot.png'} onClick={(e)=>{setShow(true); setBody(false); e.stopPropagation();}}></Dot>
                        </Contents>
                        {
                            show === true && 
                            <Pop onClick={(e)=>{e.stopPropagation();}}>
                                <Word onClick={()=>{confirmModal({mentiList, onRemoveMenti});}}>
                                    <Icon src={process.env.PUBLIC_URL + '/images/delete.png'}></Icon><Delete>{deletes}</Delete>
                                </Word>
                                <Word onClick={()=>{setClose(true); setShow(false)} }>
                                    <Icon src={process.env.PUBLIC_URL + '/images/icon_message.png'}></Icon>{message}
                                </Word>
                            </Pop>
                        }
                        <AlogMessage close={close} setClose={setClose} List={mentiList}></AlogMessage>
            </MentoContents>
          )
    };

export default NoticeMentiContents;