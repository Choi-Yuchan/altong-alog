/* eslint-disable */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function AlogMento ({setMentoPopupOpen, mentoOpen}) {

    const MentoInfo = [
        {
            id:1,
            Nickname: "디디바오",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
        {
            id:2,
            Nickname: "강아지",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
        {
            id:3,
            Nickname: "고양이",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
        {
            id:4,
            Nickname: "호랑이",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
        {
            id:5,
            Nickname: "사자",
            profit: '800',
            gun: '120',
            answer: '50',
            percent: '70',
            state:true
        },
    ];
    const userID = "사용자";
    const grade = "알천사";
    const direct = "프로필보기>";
    const [user, setUser] = useState(MentoInfo);
    const [searchValue, setSearchValue] = useState('');
    const [checkValue, setCheckValue] = useState([]);
    const inputBlur = useRef();
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    const handleSubmit = (e) => { //내 멘토 멘티 검색 결과 
        e.preventDefault();
        setUser(user.filter(((data)=> data.Nickname.toLowerCase().includes(searchValue.toLowerCase()) )));
        setSearchValue('');
        inputBlur.current.blur(); //검색 시도시 블러처리
    }
    const star = (id) => {
        setUser(
            user.map( user => user.id === id ? {...user, state: false} : user )
        );
    };
    const handleCheckBox = (checked, id) => { //체크박스 input: value가 true인 아이디만 배열 추가
        if (checked) {
            setCheckValue([...checkValue, id]);
        } else {
            setCheckValue(checkValue.filter((el)=> el !== id));
        }
    }
    const mentoDelete = () => { //선택한 멘토 멘티 삭제
        for (let i = 0; i < checkValue.length; i++) {
            setUser(user => user.filter(user=> user.id !== checkValue[i]));
        }
    }    

    return (
        <WrapLabel onClick={()=>{setMentoPopupOpen(false);}}>
            <MentoBox onClick={(e) => e.stopPropagation()}>
                <Exit src={process.env.PUBLIC_URL + '/images/close-button.svg'} onClick = { () => { setMentoPopupOpen(false); } }></Exit>
                <Nick>'<span>{ userID }</span>'{mentoOpen ? '님의 멘토' : '님의 멘티'}(<span>{MentoInfo.length}</span>명)</Nick>
                <SearchForm onSubmit={handleSubmit}>
                    <NickImg src={process.env.PUBLIC_URL + '/images/nicksearch.svg'} />
                    <Typing type="text" value={searchValue} onChange={handleChange} ref={inputBlur} onClick={()=>{setUser(MentoInfo);}} />
                    <Found type="submit">찾기</Found>
                </SearchForm>
                <Delete onClick={mentoDelete}>삭제</Delete>
                <Contents>
                    {user.length !== 0
                        ? user.map( (info) => (
                            <Label key={info.id}>
                                <Check type="checkbox" name="checkDelete" onChange={(e)=>{handleCheckBox(e.target.checked, info.id)}} checked={checkValue.includes(info.id) ? true:false} />
                                <UserInfo to="/personalMain">
                                    <PicImg src={process.env.PUBLIC_URL + '/images/back.png'} alt="해당 계정 알로그 가기"/>
                                    <WordBox>
                                        <First>
                                            <Grade>{grade}</Grade><NickName>{info.Nickname}</NickName>
                                        </First>
                                        <Profile>{direct}</Profile>
                                        <Question>보유 알록 수 <span>{ info.profit }</span>개 | 멘토 수 <span>{ info.gun }</span>명 </Question>
                                        <Answer>보유 달록 수 <span>{ info.answer }</span>개 | 찾기 <span>{ info.percent }</span>명 </Answer>
                                    </WordBox>
                                    <Star src={info.state === true ? process.env.PUBLIC_URL + '/images/star.png':process.env.PUBLIC_URL + '/images/star_on.png'}
                                    onClick={(e)=>{e.preventDefault(); star(info.id)}}></Star>
                                </UserInfo>
                            </Label>
                        ))
                        : <NoneMento>검색 결과가 없습니다.</NoneMento>
                    }
                </Contents>
            </MentoBox>
        </WrapLabel>
    )
};
const WrapLabel = styled.div`
    width:100%; height:100%;
    position:fixed;
    background:transparent;
    left:0; top:0;
    z-index:9999;
`;
const MentoBox = styled.div`
    width:85%;
    max-width:350px;
    height:450px;
    background:#fefefe;
    border:1px solid rgba(0,0,0,.3);
    border-radius:10px;
    padding:10px;
    position:absolute;
    left:50%; top:50%;
    transform: translate(-50%,-50%);
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Exit = styled.img `
    width:20px;
    object-fit:contain;
    position:absolute;
    right:10px; top:10px;
    cursor:pointer;
`;
const Label = styled.label`
    width:100%;
    display:flex;
    align-items: center;
    justify-content:center;
`;
const Nick = styled.div`
    color:#676767;
    margin-top:20px;
    margin-bottom:15px;
    font-size:1rem;
`;

const Contents = styled.div`
    height:1000px;
    overflow-y:scroll;
    margin:5px 0;
    display:flex;
    flex-direction:column;
    align-items:center;

    ::-webkit-scrollbar {
        display: none;
    }
    
    @media all and (min-width:480px) {
        width:320px;
    }
`;

const UserInfo = styled(Link)`
    width:100%;
    border:1px solid rgba(0,0,0,.2);
    border-radius:20px;
    display:flex;
    padding:5px;
    position:relative;
    margin-bottom:10px;
    align-items:center;
    justify-content:center;
`;

const PicImg = styled.img`
    width:45px;
    height:45px;
    border-radius:50%;
    object-fit:cover;
    cursor:pointer;
`;

const WordBox = styled.div`
    margin:0 10px;

    @media (min-width:480px) {
        margin:0 20px;
    }
`;

const Grade = styled.div`
    width:40px; height:15px;
    border:1px solid #FF4A4A;
    color:#FF4A4A;
    text-align:center;
    font-size:0.625em;
    border-radius:20px;
    line-height:15px;
`;
const NickName = styled.span`
    font-size:0.625em;
    color:#707070;
    line-height:15px;
    margin-left:10px;
    font-weight:bold;
`;
const First = styled.div`
    font-size:0.625em;
    display:flex;
    margin-bottom:5px;
    
`;
const Profile = styled.div`
    font-size:0.438em;
    cursor:pointer;
    margin-bottom:5px;
    color:#707070;
`;
const Question = styled.div`
    font-size:0.438em;
    margin-bottom:5px;
    color:#707070;
`;
const Answer = styled.div`
    font-size:0.438em;
    color:#707070;
`;

const Star = styled.img`
    width:20px; height:20px;
    object-fit: contain;
`;

const SearchForm = styled.form`
    display:flex;
    align-items: center;
    justify-content: center;
`;
const NickImg = styled.img`
    width:20px;
`;
const Typing = styled.input`
    width:100px;
    border:none;
    border-bottom:1px solid #777; 
    :focus {outline:none;}
    margin:0 5px;
`;
const Found = styled.button`
    background: #fefefe;
    border:1px solid #777;
    border-radius:10px;
    font-size: 12px;
    cursor:pointer;
`;
const Delete = styled.button`
    background: #fefefe;
    border:1px solid #777;
    border-radius:10px;
    font-size: 12px;
    cursor:pointer;
    align-self: flex-end;
    margin-right:5px;
`;

const Check = styled.input`
    margin-right:5px;
    padding:0;
`;
const NoneMento = styled.div`
    font-size:1rem;
    font-weight:bold;
    color:#666;
    font-style: italic;
    margin-top:3rem;
`;
export default AlogMento;