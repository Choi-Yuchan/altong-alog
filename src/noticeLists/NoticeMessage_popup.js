import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import NoticeMessageData from '../NoticeMessageData.json';
import TimeToggle from '../TimeToggle';

const Wrap = styled.div`
    width:100%; height:100vh;
    background: rgba(0, 0, 0, 0.3);    
    position:absolute;
    left:0; top:0;
    z-index:1000;
`;
const Popup = styled.div`
    position:fixed;
    left:50%; top:50%;
    width: 90%; 
    max-width: 600px;
    transform: translate(-50%, -50%);
    padding: 0;
    background:#fefefe;
    border-radius: 10px 10px 0 0;
    z-index:1001;
`;

const Head = styled.div`
    display:flex;
    vertical-align: middle;
    padding: 10px 15px 10px 10px;
    position: relative;
    justify-content: space-between;

`;
const ProfileImg = styled.img`
    width:50px; height:50px;
    margin-right: 5px;
    border-radius: 50%;
    @media screen and (max-width: 480px){
        width:40px; height:40px;
     }
`;
const ProfileImgWrap =styled.div``;
const Profile = styled.div`
    display:flex;
    align-items: center;
`;
const Right = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    color:#666;
`;
const Account = styled.div`
    font-size: 16px;
    font-weight: bold;
     margin-bottom: 7px;
    @media screen and (max-width: 480px){
        font-size: 14px;
     }
`;
const AccountBold = styled.span`
    font-weight: bold;
    font-size: 18px;
    color:#000;

    @media screen and (max-width: 480px){
        font-size: 16px;
     }
`;
const Date = styled.div`
    font-size: 12px;
`;
const Close = styled.div`
    font-weight: bold;
    font-size: 12px;
    cursor:pointer;
`;

const AreaWrap = styled.div`
    width:80%;
    margin:10px auto 10px;
`;

const Area = styled.textarea`
    width: 100%;
    height: 200px;
    resize: none;
    background: #ececec;
    border-radius: 20px;
    border: 0;
    font-size: 14px;
    font-weight: 500;
    font-family: "Noto Sans KR", sans-serif;
    outline: none;
    padding:20px;
    box-sizing: border-box;
`;

const Icons = styled.div`
    display:flex;
    width:80%; margin:0 auto;
`;
const IconImg1 = styled.img`
    width:20px; height:25px;
    cursor:pointer;
`;
const IconImg2 = styled.img`
    width:25px; height:25px;
    cursor:pointer;
`;
const Icon = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 10px;
`;
const Word = styled.div`
    margin-top:5px;
    font-size: 12px; font-weight: bold;
`;

const Language = styled.img`
    width:30px;
    transform: translateY(-5px);
    cursor:pointer;
`;

const SendWrap = styled.div`
    display:flex;
`;
const SendArea = styled.textarea`
    flex-basis: 85%;
    height: 60px;
    background: #ececec;
    resize: none;
    border: 0;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    box-sizing: border-box;

    ::placeholder {
        font-size: 12px;
        font-weight: 700;
        color: #707070;
    }
`;
const SendBtn = styled.span`
    flex-basis: 15%;
    text-align: center;
    background: #ff7777;
    height: 60px;
    position: relative;
    cursor: pointer;
    color:#fefefe;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:8px;
    box-sizing: border-box;

`;
const RightArrow = styled.img`
    position:absolute;
    top:50%; right:-100px;
    transform: translateY(-50%);
    width:100px;
    cursor: pointer;
    display:none;
    
    @media screen and (min-width: 768px){
        display:block;
     }
`;
const LeftArrow = styled.img`
    position:absolute;
    top:50%; left:-100px;
    transform: translateY(-50%);
    width:100px;
    cursor: pointer;
    display:none;

    @media screen and (min-width: 768px){
        display:block;
     }
`;

const NoticeMessage_popup  = ({message}) => {
    const IconsName = {
        ko : {
            sent:"님이 보냄",
            delete:"삭제",
            van:"차단",
            send:"보내기",
            translate:"번역"
        }
    }

    const deleteIcon = IconsName.ko.delete;
    const vanIcon = IconsName.ko.van;
    const sent = IconsName.ko.sent;
    const send = IconsName.ko.send;

    const [change, setChange] = useState(true);
    const [show, setShow] = useState(true);
    
    return(
        <>
        { show && 
        <>
        <Wrap onClick={ 
            (e) => {
                e.preventDefault();
                setShow(!show);
            }
        }></Wrap>
            <Popup>
                <Head>
                    <Profile>
                        <ProfileImgWrap>
                            <ProfileImg src={message.profileImg}></ProfileImg>
                        </ProfileImgWrap>
                        <Right>
                            <Account><AccountBold>{message.account} </AccountBold>{sent}</Account>
                            <Date>{TimeToggle(message.date)}</Date>
                        </Right>
                    </Profile>
                    <Close onClick={ 
                        (e) => {
                            e.preventDefault();
                            setShow(!show);
                        }
                    }>X</Close>
                </Head>
                <AreaWrap>
                    <Area>{message.word}</Area>
                </AreaWrap>
                <Icons>
                    <Icon>
                        <IconImg1 src={process.env.PUBLIC_URL + '/images/trash.png'}></IconImg1>
                        <Word>{deleteIcon}</Word>
                    </Icon>
                    <Icon>
                        <IconImg2 src={process.env.PUBLIC_URL + '/images/van.png'}></IconImg2>
                        <Word>{vanIcon}</Word>
                    </Icon>
                    <Language src={ change ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'}  
                    onClick={ 
                        (e) => {
                            e.preventDefault();
                            setChange(!change);
                        }
                    }></Language>
                </Icons>
                <SendWrap>
                    <SendArea placeholder={message.account +" 님께 보내실 내용을 입력해 주세요."}></SendArea>
                    <SendBtn onClick={ 
                        (e) => {
                            e.preventDefault();
                            setShow(!show);
                        }
                    }>
                        <IconImg2 src={process.env.PUBLIC_URL + '/images/message.png'}></IconImg2>
                        <Word>{send}</Word>
                    </SendBtn>
                </SendWrap>
                <RightArrow src={process.env.PUBLIC_URL + '/images/right_Arrow.png'}></RightArrow>
                <LeftArrow src={process.env.PUBLIC_URL + '/images/left_Arrow.png'}></LeftArrow>
            </Popup>   
        </>
        }
        </>
    )
};

export default NoticeMessage_popup;