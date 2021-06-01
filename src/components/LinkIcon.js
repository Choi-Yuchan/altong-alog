import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function LinkIcon() {

    const [openInput, setOpenInput] = useState(false);

    const open = () => {
        openInput === true ? setOpenInput(false) : setOpenInput(true)
    }
    //검색 아이콘 내용 입력 후 검색 시 AlogSeach2로 연결
    return (
        <LinkIconBox>
            <SearchDiv>
                <SearchIcon src={process.env.PUBLIC_URL + '/images/nicksearch.svg'} onClick={open}></SearchIcon>
                {
                    openInput === true 
                    && <SearchInput 
                        type='search' 
                        placeholder="검색어를 입력해 주세요."
                        open={openInput}
                    ></SearchInput>
                }
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
const slideShow = keyframes`
    from {
        width:0;
        transform:translateY(-50%) scaleX(0);
    }
    to {
        width:11.25rem;
        transform:translateY(-50%) scaleX(1);
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
    width:0;
    position:absolute;
    top:50%;
    right:100%;
    font-size:14px;
    border:1px solid #ddd;
    padding:5px;
    outline:none;
    transform:translateY(-50%) scaleX(0);
    transform-origin:right center;
    transition:all 0.3s;

    animation-duration:0.2s;
    animation-timing-function: ease-out;
    animation-name: ${slideShow};
    animation-fill-mode: forwards;
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

export default LinkIcon;