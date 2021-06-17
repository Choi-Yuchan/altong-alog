/* eslint-disable */
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const notice = {
    Front : "새롭게 공지 된 사항이",
    Count: 1,
    Back : "건 있습니다.",
    href:"",
    contentImg:`${process.env.PUBLIC_URL + '/images/icon_notice.png'}`
}

const noticeArray = [
    {
        id:1,
        Front : "내 알록달록 중",
        Count: 1,
        Back : "회를 퍼갔습니다!",
        href:"",
        contentImg:`${process.env.PUBLIC_URL + '/images/icon_ans_choice.png'}`
    },
    {
        id:2,
        Front : "내 알록달록에",
        Count: 0,
        Back : "개의 댓글이 달렸습니다.",
        href:"",
        contentImg:`${process.env.PUBLIC_URL + '/images/icon_cmt_regist.png'}`
    },
    {
        id:3,
        Front : "훈훈알 수입이",
        Count: 4,
        Back : "건 발생했습니다.",
        href:"",
        contentImg:`${process.env.PUBLIC_URL + '/images/icon_love.png'}`
    },
    {
        id:4,
        Front : "새 쪽지가",
        Count: 0,
        Back : "건 있습니다.",
        href:"",
        contentImg:`${process.env.PUBLIC_URL + '/images/icon_message.png'}`
    },
    {
        id:5,
        Front : "새로운 멘토로",
        Count: 1,
        Back : "명이 선정하셨습니다!",
        href:"",
        contentImg:`${process.env.PUBLIC_URL + '/images/icon_add_mento.png'}`
    },
    {
        id:6,
        Front : "환불이",
        Count: 0,
        Back : "건 발생했습니다.",
        href:"",
        contentImg:`${process.env.PUBLIC_URL + '/images/icon_almoney_paying.png'}`
    },
    {
        id:7,
        Front : "수정된 달록이",
        Count: 1,
        Back : "건 있습니다.",
        href:"",
        contentImg:`${process.env.PUBLIC_URL + '/images/icon_edit.png'}`
    }
  ];

const Notice = () => {
   
    const [zero, setZero] = useState(notice);
    function Zero(){
        setZero({...zero, Count:0});
    }
    console.log(zero);
    
    const [count, setCount] = useState(noticeArray);
    function change(i) {
        const count = [...noticeArray];
        count[i].Count = 0;
        setCount( count );
    }

    return(
        <>
            <Title>알림</Title>
            <ConNotice count={zero.Count} onClick={()=>{ Zero(); }}>
                <ConImg src={zero.contentImg} /><ConText>{zero.Front} <ConTextSpan>{zero.Count}</ConTextSpan>{zero.Back}</ConText>
            </ConNotice>
            {
                count.map((notice, i)=>{
                    return(
                    <Contents to={notice.href} count={notice.Count} onClick={(e)=>{ change(i); e.preventDefault()}}>
                        <ConImg src={notice.contentImg} /><ConText>{notice.Front} <ConTextSpan>{notice.Count}</ConTextSpan>{notice.Back}</ConText>
                    </Contents>
                    )
                })
            }
        </>
    )
}
export default Notice;