import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AlogMessage from '../components/AlogMessage';
import { useTranslation } from 'react-i18next';

function NoticeMentoContents({mentoList, onRemove, body, setBody}) {

    const {t} = useTranslation();
    const confirmModal = ({mentoList, onRemove}) => {
        if (window.confirm(`${mentoList.nickname}` + t('Messages_Alert')[0])) {
            onRemove(mentoList.id);
        } 
     }
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
                        <Photo src={process.env.PUBLIC_URL + mentoList.profileImg} alt="profile" />  
                        <div>
                            <Grade>{t('Grade')[mentoList.grade]}</Grade>
                            <Nickname>{mentoList.nickname}</Nickname>
                        </div>
                    </Wrap>
                        <Direct to="/personalMain">{t('Notice_Mento')[9]}</Direct>
                </LeftSide>
                <RightSide>
                    <Wrap2>
                        <Upper>{t('Notice_Mento')[3]} <Space><span>{mentoList.haveAlog.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>{t('Notice_Mento')[8]}</Space></Upper>
                        <Below>{t('Notice_Mento')[4]} <Space><span>{mentoList.haveDalog.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>{t('Notice_Mento')[8]}</Space></Below>
                    </Wrap2>
                    <Line></Line>
                    <Wrap2>
                        <Upper>{t('Notice_Mento')[1]} <Space><span>{mentoList.mento.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>{t('Notice_Mento')[7]}</Space></Upper>
                        <Below>{t('Notice_Mento')[2]} <Space><span>{mentoList.menti.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>{t('Notice_Mento')[7]}</Space></Below>
                    </Wrap2>
                </RightSide>
                <Dot src={process.env.PUBLIC_URL + '/images/dot.png'} onClick={(e)=>{setShow(true); setBody(false); e.stopPropagation();}}></Dot>
                </Contents>
                {show === true && 
                    <Pop onClick={(e)=>{e.stopPropagation();}}>
                        <Word onClick={()=>{confirmModal({mentoList, onRemove});}}>
                            <Icon src={process.env.PUBLIC_URL + '/images/delete.png'}></Icon><Delete>{t('Notice_Mento')[6]}</Delete>
                        </Word>
                        <Word onClick={()=>{setClose(true); setShow(false)}}>
                            <Icon src={process.env.PUBLIC_URL + '/images/icon_message.png'}></Icon>{t('Notice_Mento')[5]}
                        </Word>
                    </Pop>
                }
                <AlogMessage close={close} setClose={setClose} List={mentoList}></AlogMessage>
    </MentoContents>
    )
};

export default NoticeMentoContents;

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
