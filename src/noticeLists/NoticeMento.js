import React, { useState } from 'react';
import styled from 'styled-components';
import NoticeMentoContents from './NoticeMentoContents';
import NoticeMentiContents from './NoticeMentiContents';

const TopTitle = styled.div`
    font-size: 18px Cabin;
    text-align: center;
    padding: 15px 0;
    color:#333333;
    font-weight: bold;
`;
const Frame = styled.div`
    width:100%; height:50px;
    border-bottom: 1px solid #666666;
    display:flex;
    justify-content: space-around;
`;
const MentoBox = styled.div`
    font-size: 14px;
    width:40%; height:50px;
    border-bottom:${props => props.show === "mento" ? "3px solid #fd0031" : "none" };
    color:${props => props.show === "mento" ? "#fd0031" : "#000" };
    font-weight: bold;
    line-height: 4;
    text-align: center;
    cursor:pointer;

    @media all and (min-width:480px){
        font-size: 16px;
        width:25%;
    }
`;
const MentiBox = styled.div`
    font-size: 14px;
    width:40%; height:50px;
    border-bottom:${props => props.show === "menti" ? "3px solid #fd0031" : "none" };
    color:${props => props.show === "menti" ? "#fd0031" : "#000" };
    font-weight: bold;
    line-height: 4;
    text-align: center;
    cursor:pointer;

    @media all and (min-width:480px){
        font-size: 16px;
        width:25%;
    }
`;
const Total = styled.div`
    margin-top:10px;
    font-weight: bold;
    color:#666666;
    font-size:12px;
    padding:2vw 1vw 1vw 2vw;

    @media all and (min-width:480px){
        font-size: 16px;
    }
`;
const TotalNum = styled.span`
    color:#fd0031;
`;

const NoticeMento  = ({onRemoveMento, usersMento, onRemoveMenti, usersMenti, body, setBody}) => {

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
    
    const title = IconsName.title;
    const mento = IconsName.mento;
    const menti = IconsName.menti;
    const myMento = IconsName.myMento;
    const myMenti = IconsName.myMenti;
    const people = IconsName.people;

    const [show, setShow] = useState("mento");
    const [name, changeName] = useState(0);
    const [open, setOpen] = useState(true);

    function TabContent({name, onRemoveMento, usersMento, body, setBody, onRemoveMenti, usersMenti}){

        if (name === 0){
            return(
                    <>
                    <Total>{myMento} <TotalNum>{usersMento.length}</TotalNum>{people}</Total>
                    {
                        usersMento.map((mentoList)=>{
                            return(
                                 <NoticeMentoContents mentoList={mentoList} onRemoveMento={onRemoveMento} usersMento={usersMento} body={body} setBody={setBody}/>       
                                )
                        })
                    }
                    </>                
            )
        }else if (name === 1){
          return (
                <>
                <Total>{myMenti} <TotalNum>{usersMenti.length}</TotalNum>{people}</Total>
                {
                    usersMenti.map((mentiList)=>{
                        return(
                            <NoticeMentiContents mentiList={mentiList} onRemoveMenti={onRemoveMenti} usersMenti={usersMenti} body={body} setBody={setBody}/>       
                            )
                    })
                }
                </> 
            )
        } 
    }

    return(
        <>
        <TopTitle>{title}</TopTitle>
        <Frame>
            <MentoBox show={show} onClick={()=>{setShow("mento"); changeName(0)}}>{mento}</MentoBox>
            <MentiBox show={show} onClick={()=>{setShow("menti"); changeName(1)}}>{menti}</MentiBox>
        </Frame>
        <TabContent body={body} setBody={setBody} name={name} onRemoveMento={onRemoveMento} usersMento={usersMento} onRemoveMenti={onRemoveMenti} usersMenti={usersMenti} open={open} setOpen={setOpen}></TabContent>
        </>
    )
};

export default NoticeMento;