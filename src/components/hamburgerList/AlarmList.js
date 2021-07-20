import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FormatDateAsText from '../function/FormatDateAsText';

function AlarmList({dummyData, setDummyData}) {

    const {t} = useTranslation();   
    // 각 배열 컨턴츠 갯수 
    const [slideDown, setSlideDown] = useState(false);
    const noticeLength = dummyData.notice.count;
    const refundLength = dummyData.refund.length;
    const replyLength = dummyData.reply.length;
    const hunLength = dummyData.hunAl.length;
    const modifyLength = dummyData.modify.length;
    const takeLength = dummyData.take.length;
    const messageLength = dummyData.message.length;
    const mentoLength = dummyData.mento.length;


    return(  
        <ActiveList>
            <NavTitle onClick={()=>{setSlideDown(!slideDown)}}>{t('Notification')[0]}<ArrowImg src={process.env.PUBLIC_URL + '/images/arrow.png'} trans={slideDown} /></NavTitle>
            <AlarmScrollBox slide={slideDown}>
                <AlarmBox>
                    {noticeLength > 0 &&
                        <NoticeAlarm href="http://www.altong.com/default/cs/notice/notice?Page=1">
                            <NoticeText>{t('New_Notice')[0]} <span>{noticeLength}</span>{t('New_Notice')[1]}</NoticeText>
                            <NoticeDate>{FormatDateAsText(dummyData.notice.date)}</NoticeDate>
                        </NoticeAlarm>
                    }
                    {refundLength > 0 &&
                        <AlarmContentsMenu to="/notice/refund" >
                            <NoticeText>{t('New_Refund')[0]} <span>{refundLength}</span>{t('New_Refund')[1]}</NoticeText>
                            <NoticeDate>{FormatDateAsText(dummyData.refund[0].date)}</NoticeDate>
                        </AlarmContentsMenu>
                    }
                    {takeLength > 0 &&
                        <AlarmContentsMenu to="/notice/paste" >
                            <NoticeText>{t('New_Take')[0]} <span>{takeLength}</span>{t('New_Take')[1]}</NoticeText>
                            <NoticeDate>{FormatDateAsText(dummyData.take[0].date)}</NoticeDate>
                        </AlarmContentsMenu>                 
                    }
                    {modifyLength > 0 &&
                        <AlarmContentsMenu to="/notice/modify" >
                            <NoticeText>{t('New_Revise')[0]} <span>{modifyLength}</span>{t('New_Revise')[1]}</NoticeText>
                            <NoticeDate>{FormatDateAsText(dummyData.modify[0].date)}</NoticeDate>
                        </AlarmContentsMenu>                   
                    }
                    {messageLength > 0 &&
                        <AlarmContentsMenu to="/notice/message" >
                            <NoticeText>{t('New_Message')[0]} <span>{messageLength}</span>{t('New_Message')[1]}</NoticeText>
                            <NoticeDate>{FormatDateAsText(dummyData.message[0].date)}</NoticeDate>
                        </AlarmContentsMenu>                  
                    }
                    {hunLength > 0 &&
                        <AlarmContentsMenu to="/notice/hun" >
                            <NoticeText>{t('New_HunAl')[0]} <span>{hunLength}</span>{t('New_HunAl')[1]}</NoticeText>
                            <NoticeDate>{FormatDateAsText(dummyData.hunAl[0].date)}</NoticeDate>
                        </AlarmContentsMenu>                 
                    }
                    {replyLength > 0 &&
                        <AlarmContentsMenu to="/notice/reply" >
                            <NoticeText><span>{replyLength}</span>{t('New_Reply')}</NoticeText>
                            <NoticeDate>{FormatDateAsText(dummyData.reply[0].date)}</NoticeDate>
                        </AlarmContentsMenu>                    
                    }
                    {mentoLength > 0 &&
                        <AlarmContentsMenu to="/notice/mento" >
                            <NoticeText>{t('New_Mentees')[0]} <span>{mentoLength}</span>{t('New_Mentees')[1]}</NoticeText>
                            <NoticeDate>{FormatDateAsText(dummyData.mento[0].date)}</NoticeDate>
                        </AlarmContentsMenu>                   
                    }
                    <AllPageMoveBtn to="/notice">{t('View_All')}</AllPageMoveBtn>
                </AlarmBox>
            </AlarmScrollBox>
        </ActiveList>   
    )
} 

export default AlarmList;

const ActiveList = styled.li`
    border-top:1px solid #f0f0f0;
    width:100%;
`;
const NavTitle = styled.span`
    height:40px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    cursor:pointer;
`;
const ArrowImg = styled.img`
    position:absolute;
    right:30px;
    width:20px;
    transform:rotate(${({trans})=>trans ? '270deg':'90deg'});
    transition:all 0.3s;
`;
const AlarmBox = styled.div`
    background:#eee;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom: 10px;
`;
const NoticeAlarm = styled.a`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:13px;
    font-weight:normal;
    width:85%;
    height:60px;
    box-sizing:border-box;
    border-radius:10px;
    position:relative;
    background:#f8d3d3;
    color:#555;
    margin-top:10px;
    cursor:pointer;
`;
const NoticeAlarmClose = styled.i`
    position:absolute;
    top:3px;
    right:7px;
    font-size:11px;
    cursor:pointer;

    ::after {
        content:"";
        width:13px;
        height:13px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
`;
const NoticeText = styled.span`
    span {
        color:#fd0031;
        font-weight:bold;
    }
`;
const NoticeDate = styled.span`
    position:absolute;
    bottom:3px;
    right:7px;
    font-size:11px;
`;
const AlarmContentsMenu = styled(Link)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:13px;
    font-weight:normal;
    width:85%;
    height:60px;
    box-sizing:border-box;
    border-radius:10px;
    position:relative;
    background:#f8d3d3;
    color:#555;
    margin-top:10px;
    cursor:pointer;
    background:#fff;
    border:1px solid #999;
`;
const AlarmScrollBox = styled.div`
    height:${({slide})=> slide ? '150px': '0px'};
    overflow-y:scroll;
    transition:all 0.3s;
    -ms-overflow-style:none;
    scrollbar-width:none;

    ::-webkit-scrollbar {
        display:none;
    }
`;
const AllPageMoveBtn = styled(Link)`
    margin-top:10px;
    background:#fff;
    border:1px solid #999;
    border-radius:30px;
    font-size:12px;
    cursor:pointer;
    padding:5px 20px;
    color:#999;
`;
