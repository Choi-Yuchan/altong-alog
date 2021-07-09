import React, { useState } from 'react';
import styled from 'styled-components';

function DefaultBgImgEl({img, alt}) {
    return (
        <BgImgElDiv>
            <img src={img} alt={`기본배경${alt}`} />
            <span><i></i></span>
        </BgImgElDiv>
    )
}

function BgImgPopup({defaultBgImage, setPopupOpen}) {

    const [currentPage, setCurrentPage] = useState(1);
    const per = 9;
    const total = Math.ceil(defaultBgImage.length/per);
    const countSize = 5;
    const indexOfLast = currentPage*per;
    const indexOfFirst = indexOfLast - per;

    const createArr = (n) => {
        const iArr = new Array(n);
        for (let i = 0; i < n; i++) iArr[i] = i+1;
        return iArr;
    }
    const iArr = createArr(total);
    let pArr = iArr.slice(0, countSize);

    return (
        <PopupWrap onClick={()=>{setPopupOpen(false)}}>
            <PopupBox onClick={(e)=>{e.stopPropagation();}}>
                <PopupTitle>배경 설정하기</PopupTitle>
                <SelectBox>
                    <SelectImgBox>
                        {defaultBgImage.slice(indexOfFirst, indexOfLast).map(img=>(
                            <DefaultBgImgEl img={img.img} key={img.id} alt={img.id} />
                        ))}
                    </SelectImgBox>
                    <PasingBox>
                        {pArr.map((num)=>(
                            <PageNumber key={num} onClick={()=>{setCurrentPage(num)}} className={num === currentPage ? 'focus':'blur'}>{num}</PageNumber>
                        ))}
                    </PasingBox>
                </SelectBox>
                <BtnBox>
                    <button>저장</button>
                    <button onClick={()=>{setPopupOpen(false)}}>취소</button>
                </BtnBox>
            </PopupBox>
        </PopupWrap>
    );
}

const PopupWrap = styled.div`
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    z-index:9999;
    display:block;
`;
const PopupBox = styled.div`
    max-width:780px;
    background:#fff;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid #eee;
    border-radius:10px;
    padding:10px;
    box-sizing:border-box;

    @media (min-width:480px) {
        padding:20px;
    }
`;
const PopupTitle = styled.p`
    font-size:1rem;
    font-weight:bold;
    color:#666;

    @media (min-width:480px) {
        font-size:1.25rem;
    }
`;
const SelectBox = styled.div`
    border:1px solid #aaa;
    padding:0 20px;
    border-radius:10px;
    margin:10px 0;
`;
const SelectImgBox = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;
    margin:20px 0;
`;
const PasingBox = styled.div`
    display:flex;
    justify-content:center;

    .focus {
        color:#fd0031;
    }
    .blur {
        color:#666;
    }
    span:last-child {
        margin:0;
    }
`;
const PageNumber = styled.span`
    cursor:pointer;
    margin-right:20px;
    font-size:14px;
    margin-bottom:10px;

    :hover {
        color:#fd0031;
    }
`;
const BtnBox = styled.div`
    button {
        border:1px solid #999;
        background:#fff;
        border-radius:30px;
        font-size:14px;
        color:#777;
        padding:2px 10px;
        font-weight:bold;
    }
    button:first-child {
        margin-right:10px;
    }
`;
const BgImgElDiv = styled.div`
    width:60px;
    height:60px;
    position:relative;
    cursor:pointer;

    @media (min-width:480px) {width:80px; height:80px;}
    @media (min-width:600px) {width:150px; height:150px;}

    img {
        width:100%;
        height:100%;
        object-fit: cover;
    }
    span {
        width:12px;
        height:12px;
        background:aqua;
        border-radius:50%;
        position:absolute;
        top:3px;
        right:3px;

        i {
            width:6px;
            height:6px;
            border-radius:50%;
            background:#fff;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
        }
    }
`;
export default BgImgPopup;