import React from 'react';
import styled from 'styled-components';

function MainSearchOption({setSelectSort}) {

    return (
        <OptionBox>
            <OptionTitle>옵션 선택</OptionTitle>
            <SelectBox>
                <div onClick={()=>{setSelectSort('recent')}}>
                    <input type="radio" name="rank" id="recent" defaultChecked></input>
                    <label htmlFor="recent">최신순</label>
                </div>
                <div onClick={()=>{setSelectSort('view')}}>
                    <input type="radio" name="rank" id="view"></input>
                    <label htmlFor="view">조회순</label>
                </div>
                <div onClick={()=>{setSelectSort('take')}}>
                    <input type="radio" name="rank" id="take"></input>
                    <label htmlFor="take">퍼가기순</label>
                </div>
                <div onClick={()=>{setSelectSort('good')}}>
                    <input type="radio" name="rank" id="good"></input>
                    <label htmlFor="good">좋아요순</label>
                </div>
                <div onClick={()=>{setSelectSort('hunhun')}}>
                    <input type="radio" name="rank" id="hunhun"></input>
                    <label htmlFor="hunhun">훈훈알 순</label>
                </div>
            </SelectBox>
        </OptionBox>
    );
}


const OptionBox = styled.div`
    padding:10px;
`;
const OptionTitle = styled.p`
    font-weight:bold;
    margin-bottom:10px;
`;
const SelectBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;

    div {
        display:flex;
        align-items:center;
        justify-content:center;
    }
    input + label {
        font-size:13px;
        white-space:nowrap;
        margin-right:3px;
        margin-bottom:5px;
        margin-top:5px;
        cursor:pointer;
        display:flex;
        align-items:center;
        position:relative;

        ::before {
            content:'';
            display:block;
            width:15px;
            height:15px;
            border:1px solid #999;
            border-radius:50%;
            margin-right:3px;
            background:#fff;
            transition:all 0.3s;
        }
        ::after {
            content:'';
            display:block;
            width:7px;
            height:7px;
            position:absolute;
            top:5px;
            left:5px;
            background:#fff;
            border-radius:50%;
        }
    }
    input:checked + label {
        ::before {
            background:skyblue;
        }
    }
    input {
        display:none;
    }
`;


export default React.memo(MainSearchOption);