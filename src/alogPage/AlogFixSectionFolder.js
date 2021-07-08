/* eslint-disable */ 
import React, { useState } from 'react';
import styled from 'styled-components';

function AlogFixSectionFolder ({setNewGroup, setCheckList, setMyAlogSlide, mySelect, setMySelect}) {

    const [myAlogSelectSlide, setMyAlogSelectSlide] = useState(false);

    return (
        <MyAlogSettingBox>
            <NewGroupPlusBtn src={process.env.PUBLIC_URL + '/images/add.png'} alt="새 그룹 이미지 추가" onClick={()=>{setNewGroup(true); setCheckList(true);  setMyAlogSlide(false);}}></NewGroupPlusBtn>
            <MyAlogSettingBtn src={process.env.PUBLIC_URL + '/images/setting.png'} alt="내 알록달록 설정"  onClick={()=>{setNewGroup(true); setCheckList(true); setMyAlogSlide(true);}} ></MyAlogSettingBtn>
            <MyAlogSelectDiv>
                <SelectDefault onClick={()=>{setMyAlogSelectSlide(!myAlogSelectSlide)}}>{mySelect}<i></i></SelectDefault>
                <SelectList open={myAlogSelectSlide}>
                    <SelectListEl onClick={()=>{setMySelect('게시글'); setMyAlogSelectSlide(false);}}>게시글</SelectListEl>
                    <SelectListEl onClick={()=>{setMySelect('그룹'); setMyAlogSelectSlide(false);}}>그룹</SelectListEl>
                </SelectList>
            </MyAlogSelectDiv>
            <MyAlogSearchDiv>
                <MyAlogSearchInput type="text" placeholder="알록달록 게시글 내 검색"></MyAlogSearchInput>
                <MyAlogSearchBtn>검색</MyAlogSearchBtn>
            </MyAlogSearchDiv>
            <AlogWriteBtn src={process.env.PUBLIC_URL + '/images/que_icon.svg'} alt="내 알로그 쓰기"></AlogWriteBtn>
        </MyAlogSettingBox>
    )
};

const MyAlogSettingBox = styled.form`
    display:grid;
    grid-template-columns: 25px 25px 2fr 4fr 25px;
    column-gap: 5px;
    align-items: center;
    justify-items: center;
    margin:15px 0;

    @media (min-width:480px) {
        grid-template-columns: 40px 40px 2fr 3fr 40px;
        column-gap: 10px;
    }
`;
const NewGroupPlusBtn = styled.img`
    width:24px;
    height:24px;
    object-fit:contain;
    justify-self: end;
    cursor:pointer;

    @media (min-width:480px) {
        width:30px;
        height:30px;
    }
`;
const MyAlogSettingBtn = styled.img`
    width:20px;
    height:20px;
    object-fit:contain;
    justify-self: start;
    cursor:pointer;

    @media (min-width:480px) {
        width:27px;
        height:27px;
    }
`;
const MyAlogSelectDiv = styled.div`
    position:relative;
    justify-self: start;
    font-size:12px;
    color:#666;
`;
const SelectDefault = styled.span`
    display:flex;
    min-width:65px;
    align-items:center;
    justify-content:space-between;
    border:1px solid #999;
    padding:0 8px;
    height:25px;
    cursor:pointer;
    white-space:nowrap;
    box-sizing:border-box;

    i {
        display:block;
        width:5px;
        height:5px;
        border-left:2px solid #999;
        border-bottom:2px solid #999;
        transform:rotate(-45deg);
        margin-top:-3px;
        margin-left:5px;
    }
`;
const SelectList = styled.ul`
    position:absolute;
    top:100%;
    left:0;
    z-index:9;
    width:100%;
    height:${({open}) => open ? '51px':'0px'};
    overflow:hidden;
    background-color:#fff;
    border:${({open}) => open ? '1px solid #999':'0' };
    border-top:0;
    box-sizing:border-box;
    transition:all 0.3s;

    li:first-child {
        border-bottom:1px solid #999;
    }
`;
const SelectListEl = styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    height:25px;
    cursor:pointer;
    box-sizing:border-box;
    overflow:hidden;
`;
const MyAlogSearchDiv = styled.div`
    grid-column: 4/5;
    width:100%;
    align-self:stretch;
    justify-self: stretch;
    position:relative;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;
const MyAlogSearchInput = styled.input`
    width:100%;
    max-width:200px;
    height:25px;
    padding-right:50px;
    border:1px solid #666;
    border-radius:3px;
    box-sizing:border-box;
`;
const MyAlogSearchBtn = styled.button`
    position:absolute;
    top:50%;
    right:5px;
    transform:translateY(-50%);
    border:1px solid #999;
    color:#707070;
    background:#fff;
    border-radius:30px;
    cursor:pointer;
    font-size:12px;
`;
const AlogWriteBtn = styled.img`
    width:18px;
    height:18px;
    object-fit:contain;
    justify-self: start;
    cursor:pointer;

    @media (min-width:480px) {
        width:22px;
        height:22px;
    }
`;


export default AlogFixSectionFolder;