import React, { useState } from 'react';
import styled from 'styled-components';
import TimeToggle from '../components/function/TimeToggle';

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
const Accounts = styled.div`
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
const Closes = styled.div`
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
    color:#666666;
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
    font-size: 12px; font-weight: bold;
`;
const Words = styled.div`
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
const NoticeMessagePop  = ({onRemoveMessage, pop, setPop, usersMessage, setMessage, number, message}) => {
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

    function confirmDeleteModal() {
        if (window.confirm(`${usersMessage.account}` + "님의 정말 삭제하시겠습니까?")) {
            onRemoveMessage(usersMessage.id);
            setPop(!pop);
        } 
    }
    function confirmBanModal() {
        if (window.confirm(`${usersMessage.account}` + "님을 정말 차단하시겠습니까?")) {
            // 해당 계정 차단
        } 
    }
    
    return(
        <>
        {   
            pop === true &&
            <>
            <Wrap onClick={ 
                (e) => {
                    e.preventDefault();
                    setPop(!pop);
                }
            }></Wrap>
                <Popup>
                    <Head>
                        <Profile>
                            <ProfileImgWrap>
                                <ProfileImg src={usersMessage.profileImg}></ProfileImg>
                            </ProfileImgWrap>
                            <Right>
                                <Accounts><AccountBold>{usersMessage.account} </AccountBold>{sent}</Accounts>
                                <Date>{TimeToggle(usersMessage.date)}</Date>
                            </Right>
                        </Profile>
                        <Closes onClick={ 
                            (e) => {
                                e.preventDefault();
                                setPop(!pop);
                            }
                        }>X</Closes>
                    </Head>
                    <AreaWrap>
                        <Area>{usersMessage.word}</Area>
                    </AreaWrap>
                    <Icons>
                        <Icon onClick={()=>{confirmDeleteModal();}}>
                            <IconImg1 src={process.env.PUBLIC_URL + '/images/trash.png'}></IconImg1>
                            <Words>{deleteIcon}</Words>{/* 클릭 시 해당 쪽지 삭제 */}
                        </Icon>
                        <Icon onClick={()=>{confirmBanModal();}}>
                            <IconImg2 src={process.env.PUBLIC_URL + '/images/van.png'}></IconImg2>
                            <Word>{vanIcon}</Word> {/* 클릭 시 해당아이디 차단 */}
                        </Icon>
                        <Language src={ change ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'}  
                        onClick={ 
                            (e) => {
                                e.preventDefault();
                                setChange(!change);
                            }
                        }></Language>{/* 클릭 시 번역 */}
                    </Icons>
                    <SendWrap>
                        <SendArea placeholder={usersMessage.account +" 님께 보내실 내용을 입력해 주세요."}></SendArea>
                        <SendBtn onClick={ 
                            (e) => {
                                e.preventDefault();
                                setPop(!pop);
                            }
                        }>
                            <IconImg2 src={process.env.PUBLIC_URL + '/images/message.png'}></IconImg2>
                            <Words>{send}</Words>{/* 클릭 시 작성 내용 해당 아이디로 전송 */}
                        </SendBtn>
                    </SendWrap>
                    <RightArrow src={process.env.PUBLIC_URL + '/images/right_Arrow.png'} onClick={()=>{
                        if (message >= number) {
                            setMessage(number);
                        } else {
                            setMessage(count => count + 1);
                        }
                    }}></RightArrow> {/* 클릭 시  하나 더 최신 쪽지 표시*/ }
                    <LeftArrow src={process.env.PUBLIC_URL + '/images/left_Arrow.png'} onClick={()=>{
                        if (message === 0) {
                            setMessage(0);
                        } else {
                            setMessage(count => count - 1);
                        }
                    }}></LeftArrow>{/* 클릭 시  하나 이전 쪽지 표시*/ }
                </Popup>   
            </>
        }
        
        </>
    )
};

export default NoticeMessagePop;