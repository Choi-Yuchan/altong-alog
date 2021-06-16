import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import HeaderSearchOption from './HeaderSearchOption';

function LinkIcon() {

    const [openInput, setOpenInput] = useState(false);

    // const open = () => {
    //     openInput === true ? setOpenInput(false) : setOpenInput(true)
    // }
    //검색 아이콘 내용 입력 후 검색 시 AlogSeach2로 연결
    return (
        <LinkIconBox>
            <SearchDiv>
                <SearchIcon src={process.env.PUBLIC_URL + '/images/nicksearch.svg'} onClick={()=>{setOpenInput(!openInput)}} ></SearchIcon>
                <SearchBox open={openInput}>
                    <HeaderSearchOption openInput={openInput}></HeaderSearchOption>
                    <SearchInput 
                        type='search' 
                        placeholder="검색어를 입력해 주세요."
                        // open={openInput}
                    ></SearchInput>
                </SearchBox>
            </SearchDiv>
            <a href="http://www.altong.com/question/questionWrite"><WrightIcon src={process.env.PUBLIC_URL + '/images/que_icon.svg'}></WrightIcon></a>
        </LinkIconBox>
    );
}

const LinkIconBox = styled.div`
    width:3.3rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:100%;
    margin-right:10px;

    @media (min-width:480px) {
        width:4.063rem;
    }
`;
const SearchDiv = styled.div`
    width: 1.563rem;
    position:relative;

    @media (min-width:480px) {
        width:1.75rem;
    }
`;
const SearchInput = styled.input`
    width:11.25rem;
    height:30px;
    font-size:12px;
    border:1px solid #ddd;
    padding:5px;
    outline:none;
`;

const SearchIcon = styled.img`
    width:100%;
    margin-bottom:-4px;
    cursor:pointer;
`;

const WrightIcon = styled.img`
    width:1.2rem;
    cursor:pointer;

    @media (min-width:480px) {
        width:1.4rem;
    }
`;

const SearchBox = styled.div`
    position:absolute;
    top:-2px;
    right:100%;
    display:flex;
    color:#666;
    font-weight:bold;
    font-size:13px;
    letter-spacing:0.5px;
    max-width:${props=>props.open ? '20rem':'0'};
    overflow:hidden;
    transition:all 0.3s;
`;

export default LinkIcon;