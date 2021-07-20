import React, { useState } from 'react';
import styled from 'styled-components';
import NoticeMentoContents from './NoticeMentoContents';
import { useTranslation } from 'react-i18next';

function NoticeMento({dummyData, setDummyData, body, setBody}) {

    const {t} = useTranslation();
    const [show, setShow] = useState("mento");
    const onRemoveMento = (id) => {
        setDummyData({...dummyData, mento: dummyData.mento.filter(data => data.id !== id)})
    }
    const onRemoveMentee = (id) => {
        setDummyData({...dummyData, mentee: dummyData.mentee.filter(data => data.id !== id)})
    }


    const TabContent = ({show, onRemoveMento, onRemoveMentee, body, setBody}) => {
        if (show === "mento"){
            return(<>
                    <Total>{t('Notice_Mento')[1]} <TotalNum>{dummyData.mento.length}</TotalNum>{t('Notice_Mento')[7]}</Total>
                    {dummyData.mento.map((mentoList)=>
                        <NoticeMentoContents key={mentoList.id} mentoList={mentoList} onRemove={onRemoveMento} body={body} setBody={setBody}/>       
                    )}
            </>)
        } else if (show === "mentee") {
            return (<>
                <Total>{t('Notice_Mento')[2]} <TotalNum>{dummyData.mentee.length}</TotalNum>{t('Notice_Mento')[7]}</Total>
                {dummyData.mentee.map((mentiList)=>
                    <NoticeMentoContents key={mentiList.id} mentoList={mentiList} onRemove={onRemoveMentee} body={body} setBody={setBody}/>       
                )}
            </>)
        } 
    }

    return(
        <>
            <TopTitle>{t('Notice_Mento')[0]}</TopTitle>
            <Frame>
                <MentoBox show={show} onClick={()=>{setShow("mento")}}>{t('Notice_Mento')[1]}</MentoBox>
                <MentiBox show={show} onClick={()=>{setShow("mentee")}}>{t('Notice_Mento')[2]}</MentiBox>
            </Frame>
            <TabContent body={body} setBody={setBody} show={show} onRemoveMento={onRemoveMento} onRemoveMentee={onRemoveMentee}></TabContent>
        </>
    )
};

export default NoticeMento;

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
    border-bottom:${props => props.show === "mentee" ? "3px solid #fd0031" : "none" };
    color:${props => props.show === "mentee" ? "#fd0031" : "#000" };
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
