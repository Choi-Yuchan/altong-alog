import { useState } from 'react';
import styled from 'styled-components';
import { stop } from '../function/stop';
import { Link } from 'react-router-dom';
import NoticeData from '../../NoticeData.json';
import NoticeHunData from '../../NoticeHunData.json';
import NoticeMessageData from '../../NoticeMessageData.json';
import NoticeModifyData from '../../NoticeModifyData.json';
import NoticePasteData from '../../NoticePasteData.json';
import NoticeRefundData from '../../NoticeRefundData.json';
import NoticeReplyData from '../../NoticeReplyData.json';

const ActiveList = styled.li`
    padding: 0.625rem 0;
    font-size:1rem;
    border-top:1px solid #f0f0f0;
    width:100%;
    cursor:pointer;
    
    :last-child{
        border-bottom:1px solid #f0f0f0;
    }
`;

const ListTitle = styled.p`
    position: relative;
    :hover,:active,:focus{
    color:#FF4A4A;
    font-weight:bold;
    }
`;

const Content = styled.div`
    max-height:140px;
    background-color:#eee;
    padding:0.625em 0.5em;
    margin-top:0.625rem;
    overflow:scroll;
    display:none;
    height:140px;
    
    ::-webkit-scrollbar {
    display: none; 
}
    @media (min-width: 480px){
        max-height:300px;
    }
`;

const ShowContent = styled(Content)`
    display:block;
`;
const Alarm = styled(Link)`
    color:#333;
    background-color:#fefefe;
    border:1px solid #707070;
    border-radius: 15px;
    display:${ props => props.count !== 0 ? "flex" : "none"};
    flex-direction:column;
    padding:0.625em 0.5em;
    margin-bottom:10px;
`;

const NotiAlarm = styled.a`
    color:#333;
    background-color:#F8D3D3;
    border-radius: 15px;
    display:${ props => props.count !== 0 && props.state == true ? "flex" : "none"};
    flex-direction:column;
    padding:0.625em 0.5em;
    margin-bottom:10px;
`;

const AlarmNotice = styled.div`
    display:flex;
    position:relative;
    align-items:center;
    width:100%;
`;
const AlarmText = styled.div`
    width:100%;
    font-size:0.7rem;
    text-align:left;
    line-height: 3; 
    height: 2em;
    padding-left:5px;
    @media all and (min-width:800px){
        font-size:0.8rem;
        padding-left:10px;  
    }
`;

const AlarmTime = styled.p`
    font-size:0.625rem;
    text-align:right;
    margin-top:5px;
`;
const CloseButton = styled.div`
    color:#888;
    width:0.5rem;
    height:0.5rem;
    position:absolute;
    right:0; top:-5px;
`;

const Count = styled.span`
    color:#fd0031;
    font-weight:bold;
`;

const Arrow = styled.img`
    position:absolute;
    right:30px;
    width:20px;
    transform:rotate(90deg);
`;

const All = styled(Link)`
    border-radius:20px;
    background:#fefefe;
    font-size:10px;
    color:#333;
    text-decoration:none;
    display:block;
    width:30%;
    height:20px;
    line-height: 1.8;
    margin:15px auto 0;
`;

export const AlarmList = ({title, arrow, closeNav, usersRefund, usersHun, usersModify, usersReply, usersPaste, usersMento, usersMessage}) => {
    const [isActive, setIsActive] = useState(false);
    const [alarmClose, setAlarmClose] = useState(true);
    const OpenList = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    };

    const alarmArray = NoticeData.ko.alarmArray;
    const [alarm, setAlarm] = useState(alarmArray);
    function hide(i) {
        const state = [...alarmArray];
        state[i].state = false;
        setAlarm( state );
    }

    const notice = NoticeData.ko.notice;
    const [turn, setTurn] = useState(notice);
    function hideNotice(){
        setTurn({...turn, state:false});
    }

    alarmArray.sort(function(a,b){
        return a.time - b.time
      });
    
    // 각 배열 컨턴츠 갯수 
    const replyArray = NoticeReplyData.ko.ReplyArray;
    const hunArray = NoticeHunData.ko.hunArray;
    const pasteArray = NoticePasteData.ko.pasteArray;
    const messageArray = NoticeMessageData.ko.messageArray;

    const refundLength = usersRefund.length;
    const replyLength = usersReply.length;
    const hunLength = usersHun.length;
    const modifyLength = usersModify.length;
    const pasteLength = usersPaste.length;
    const messageLength = usersMessage.length;
    const mentoLength = usersMento.length;

    alarm[0].Count = refundLength;
    alarm[1].Count = pasteLength;
    alarm[2].Count = modifyLength;
    alarm[3].Count = messageLength;
    alarm[4].Count = hunLength;
    alarm[5].Count = replyLength;
    alarm[6].Count = mentoLength;

    return(  
        <ActiveList onClick={OpenList} >
            <ListTitle>{title}<Arrow src={arrow}></Arrow></ListTitle>
            {isActive ? 
            (<ShowContent>
                <>
                {
                alarmClose &&
                 <>
                <NotiAlarm onClick={(e)=>{stop(e); closeNav();}} count={turn.Count} href="http://www.altong.com/default/cs/notice/notice?Page=1" state={turn.state}>
                <AlarmNotice>
                    <AlarmText>
                        {turn.Front} <Count>{turn.Count}</Count>{turn.Back}
                    </AlarmText>
                    <CloseButton onClick={(e) => { hideNotice(); stop(e); e.preventDefault() }}>x</CloseButton>
                </AlarmNotice>            
                <AlarmTime>{turn.time}{turn.minutes}</AlarmTime>
                 </NotiAlarm>
                 {
                    alarm.map((alarm, i) => { return(
                        <>
                        { alarm.state && 
                            <Alarm onClick={(e)=>{stop(e); closeNav(); hide(i)}} key={alarm.id} count={alarm.Count} to={alarm.href} state={alarm.state} >
                                <AlarmNotice>
                                    <AlarmText>
                                        {alarm.Front} <Count>{alarm.Count}</Count>{alarm.Back}
                                    </AlarmText>
                                    <CloseButton onClick={(e) => {stop(e); e.preventDefault(); hide(i)}}>x</CloseButton>
                                </AlarmNotice>            
                                <AlarmTime>{alarm.time}{alarm.minutes}</AlarmTime>
                            </Alarm>
                        }
                        </>
                        )
                    })
                }
                </>
                }
                <All to="/notice"  onClick={()=>{ closeNav(); }}>전체보기</All>
                </>
            </ShowContent>):(
                <Content></Content>
            )}       
        </ActiveList>   
    )
} 