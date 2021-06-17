import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderSearchOption from './HeaderSearchOption';
import { Link } from 'react-router-dom';

function LinkIcon(props) {
    const [searchText, setSearchText] = useState('');
    const searchValue = (e) => {
        setSearchText(e.target.value);
    };  
    const press = (e) => {
        if (e.key === "Enter") {
            //210617 엔터 키 검색 기능 중지
        }
    }

    return (
        <LinkIconBox>
            <SearchDiv>
                <SearchIcon src={process.env.PUBLIC_URL + '/images/nicksearch.svg'} onClick={()=>{props.setOpenInput(true); }} />
                { props.openInput && 
                    <SLink 
                        onClick={()=> { props.setOpenInput(false); props.setText(searchText); setSearchText(''); }} 
                        to={'/search/'+ searchText} 
                        className="movePage"
                    >
                    </SLink> }
                <SearchBox open={props.openInput}>
                    <HeaderSearchOption openInput={props.openInput}></HeaderSearchOption>
                    <SearchInput 
                        type='search' 
                        placeholder="검색어를 입력해 주세요."
                        value={searchText}
                        onChange={searchValue}
                        onKeyDown={press}
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
const SLink = styled(Link)`
    display:block;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    right:0;
`;

export default LinkIcon;