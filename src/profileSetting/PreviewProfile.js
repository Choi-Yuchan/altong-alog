import React from 'react';
import styled from 'styled-components';

function PreviewProfile() {
    return (
        <PreviewBox>
            <PreviewBackImg src={process.env.PUBLIC_URL + '/images/background.jpg'} />
            <PreviewInfo>
                <ProfileImg src={process.env.PUBLIC_URL + '/images/face.png'} />
                <MyNickname>Vivien<MyLv>알천사</MyLv></MyNickname>
                <ProfileBottom>
                    <MyInfoBox>
                        <MyIntro>Vivien님의 알록달록에 오신걸 환영합니다.</MyIntro>
                        <MyHashTag># 음주 # 여행 # 축구</MyHashTag>
                    </MyInfoBox>
                    <MyIconBox>
                        <MyMentoBox>
                            <MyMento>멘토 0명</MyMento>
                            <MyMentee>멘티 100명</MyMentee>
                        </MyMentoBox>
                        <IconBox>
                            <img src={process.env.PUBLIC_URL + '/images/add-mento.png'} alt="멘토" />
                            <img src={process.env.PUBLIC_URL + '/images/hun.svg'} alt="훈훈알" />
                            <img src={process.env.PUBLIC_URL + '/images/message.svg'} alt="쪽지보내기" />
                        </IconBox>
                    </MyIconBox>
                </ProfileBottom>
            </PreviewInfo>
        </PreviewBox>
    );
}

const PreviewBox = styled.div`
    box-sizing:border-box;
    border:1px solid #eee;
    width:90%;

    @media (min-width:480px) {width:60%;}
`;
const PreviewBackImg = styled.img`
    width:100%;
    height:80px;
    object-fit: cover;
    object-position: center;
`;
const PreviewInfo = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:6px;
    letter-spacing:-1px;
`;
const ProfileImg = styled.img`
    width:60px;
    height:60px;
    object-fit: cover;
    object-position: center;
    border-radius:50%;
    position:absolute;
    top:-35px;
    right:15px;
`;
const MyInfoBox = styled.div``;
const MyNickname = styled.p`
    font-weight:bold;
    color:#707070;
    font-size:14px;
    margin-bottom:8px;
`;
const MyLv = styled.span`
    font-weight:normal;
    color:#fd0031;
    border:1px solid #fd0031;
    font-size:8px;
    border-radius:10px;
    padding:0 2px;
    margin-left:5px;
`;
const ProfileBottom = styled.div`
    display:flex;
    justify-content:space-between;
`;
const MyIntro = styled.p`
    font-size:11px;
    color:#707070;
    margin-bottom:5px;
    line-height:1.1em;
`;
const MyHashTag = styled.p`
    font-size:11px;
`;
const MyIconBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;
const MyMentoBox = styled.div`
    display:flex;
    letter-spacing:-1px;
    font-size:11px;
    font-weight:bold;
    margin-bottom:10px;
    color:#444;
`;
const MyMento = styled.div`
    margin-right:3px;
    white-space:nowrap;
`;
const MyMentee = styled.div`
    white-space:nowrap;
`;
const IconBox = styled.div`

    img {
        width:15px;
        height:15px;
        object-fit: contain;
        margin-right:3px;
    }
`;

export default PreviewProfile;