import React from 'react';
import styled from 'styled-components';

const langHunPopup = {
    ko:{
        hunhunal:"30,000",
        //고정
        title:"훈훈알 증정하기",
        text:"금일 증정 가능하신 훈훈알은 총",
        textEnd: "알 입니다.",
        al:"알",
        cancel:"취소",
        confirm:"확인",
    }
}
function HunPopup({hunAl, setHunAl}) {
    const title = langHunPopup.ko.title;
    const text = langHunPopup.ko.text;
    const huntext = text.slice(0,14);
    const total = text.slice(15);
    const hunhunal = langHunPopup.ko.hunhunal;
    const textEnd = langHunPopup.ko.textEnd;
    const al = langHunPopup.ko.al;
    const cancel = langHunPopup.ko.cancel;
    const confirm = langHunPopup.ko.confirm;

    return (
        <HunPopupWrap >
            { hunAl ? 
            <Wrap onClick={()=>{setHunAl(false)}}>
            <HunPopupBox onClick={(e) => e.stopPropagation()}>
                <HunTitle>{title}</HunTitle>
                <HunText>{huntext}<br/>{total} <HunSpan>{hunhunal}</HunSpan>{textEnd}</HunText>
                <HunInputBox>
                    <HunInput type="number" placeholder="300~10,000" step="100"></HunInput>
                    <HunInputSpan>{al}</HunInputSpan>
                </HunInputBox>
                <HunBtnBox>
                    <HunBtn onClick={()=>{setHunAl(!hunAl)}}>{cancel}</HunBtn>
                    <HunBtnR onClick={()=>{setHunAl(!hunAl)}}>{confirm}</HunBtnR>
                </HunBtnBox>
            </HunPopupBox>
            </Wrap>
            : null}
        </HunPopupWrap>
    );
}

const HunPopupWrap = styled.div`
`;

const Wrap = styled.div`
    width:100vw; height:100vh;
    position:fixed;
    background:transparent;
    left:0; top:0;
    z-index:999;
`;

const HunPopupBox = styled.div`
    z-index:3;
    background:#fefefe;
    border:0.5px solid #bebebe;
    width:90%;
    max-width:320px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border-radius:20px;
    padding:10px;
    box-sizing:border-box;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    z-index:10;
`;
const HunTitle = styled.p`
    font-size:1rem;
    line-height:50px;
    border-bottom:1px solid #eee;
    text-align:center;
    font-weight:bold;
    color:#707070;
`;
const HunText = styled.p`
    font-size:14px;
    font-weight:500;
    text-align:center;
    color:#707070;
    margin-top:1rem;
    margin-bottom:1rem;
`;
const HunSpan = styled.span`
    font-weight:bold;
    color:#fd0031;
`;
const HunInputBox = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom:20px;
`;
const HunInput = styled.input`
    outline:none;
    border:0;
    border-bottom:1px solid #333;
    margin-right:10px;
    padding:6px 0;
    width:100px;
    font-weight:bold;
    text-align:center;
    font-size:14px;
​
    &::placeholder {
        color:#bbb;
        text-align:center;
    }
`;
const HunInputSpan = styled.span`
    font-size:14px;
    font-weight:bold;
    color:#707070;
`;
const HunBtnBox = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom:10px;
`;
const HunBtn = styled.button`
    outline:none;
    border:1px solid #666;
    border-radius:20px;
    background:#fff;
    color:#707070;
    font-size:14px;
    font-weight:bold;
    margin-right:20px;
    width:30%;
    cursor:pointer;
    padding:3px 0;
`;
const HunBtnR = styled.button`
    outline:none;
    border:1px solid #fd0031;
    border-radius:20px;
    background:#fff;
    color:#fd0031;
    font-size:14px;
    font-weight:bold;
    width:30%;
    cursor:pointer;
    padding:3px 0;
`;

export default HunPopup;








