import React, { useState } from 'react';
import styled from 'styled-components';
import NoticeMentoContents from './NoticeMentoContents';
import NoticeMentiContents from './NoticeMentiContents';
import { useTranslation } from 'react-i18next';

const NoticeMento  = ({onRemoveMento, usersMento, onRemoveMenti, usersMenti, body, setBody}) => {

    const {t} = useTranslation();
    const [show, setShow] = useState("mento");
    const [name, changeName] = useState(0);
    const [open, setOpen] = useState(true);

    function TabContent({name, onRemoveMento, usersMento, body, setBody, onRemoveMenti, usersMenti}){

        if (name === 0){
            return(
                    <>
                    <Total>{t('Notice_Mento')[1]} <TotalNum>{usersMento.length}</TotalNum>{t('Notice_Mento')[7]}</Total>
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
                <Total>{t('Notice_Mento')[2]} <TotalNum>{usersMenti.length}</TotalNum>{t('Notice_Mento')[7]}</Total>
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
        <TopTitle>{t('Notice_Mento')[0]}</TopTitle>
        <Frame>
            <MentoBox show={show} onClick={()=>{setShow("mento"); changeName(0)}}>{t('Notice_Mento')[1]}</MentoBox>
            <MentiBox show={show} onClick={()=>{setShow("menti"); changeName(1)}}>{t('Notice_Mento')[2]}</MentiBox>
        </Frame>
        <TabContent body={body} setBody={setBody} name={name} onRemoveMento={onRemoveMento} usersMento={usersMento} onRemoveMenti={onRemoveMenti} usersMenti={usersMenti} open={open} setOpen={setOpen}></TabContent>
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
