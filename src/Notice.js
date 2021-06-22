/* eslint-disable */
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NoticeData from './NoticeData.json';

const Title = styled.div`
    font-size: 18px Cabin;
    text-align: center;
    padding: 15px 0;
    color:#333333;
    font-weight: bold;
`;

const ConNotice = styled.a`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:${ props => props.count !== 0 ? "flex" : "none"};
    align-items: flex-start;
    margin-bottom:10px;
    padding:13px 13px 13px 80px;

    @media screen and (max-width: 480px){
        padding:10px 10px 10px 20px;
    }
`;

const Contents = styled(Link)`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:${ props => props.count !== 0 ? "flex" : "none"};
    align-items: flex-start;
    margin-bottom:10px;
    padding:13px 13px 13px 80px;

    @media screen and (max-width: 480px){
        padding:10px 10px 10px 20px;
    }
`;

const ConImg = styled.img`
    width:25px; height:23px;
    
    @media screen and (min-width: 480px){
        transform: translateY(3px);
    }
`;

const ConText = styled.div`
    font-size: 14px;
    color:#666666;
    line-height: 2;
    margin-left: 10px;

    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`;
const ConTextSpan = styled.span`
    color:#fd0031;
    font-weight: bold;
    text-align:left;
`;

const Notice = () => {
    const alarm = NoticeData.ko.alarm;
    const notice = NoticeData.ko.notice;
    const [zero, setZero] = useState(notice);
    function Zero(){
        setZero({...zero, Count:0});
    }

    const alarmArray = NoticeData.ko.alarmArray;
    const [count, setCount] = useState(alarmArray);
    function change(i) {
        const count = [...alarmArray];
        count[i].Count = 0;
        setCount( count );
    }
    console.log(count);
    return(
        <>
            <Title>{alarm}</Title>
            <ConNotice count={zero.Count} onClick={()=>{ Zero(); }} href={zero.href}>
                <ConImg src={zero.contentImg} /><ConText>{zero.Front} <ConTextSpan>{zero.Count}</ConTextSpan>{zero.Back}</ConText>
            </ConNotice>
            {
                count.map((count, i)=>{
                    return(
                    <Contents to={count.href} count={count.Count} onClick={()=>{ change(i); }}>
                        <ConImg src={count.contentImg} /><ConText>{count.Front} <ConTextSpan>{count.Count}</ConTextSpan>{count.Back}</ConText>
                    </Contents>
                    )
                })
            }
        </>
    )
}
export default Notice;