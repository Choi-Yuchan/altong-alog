import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderSearchOption from './HeaderSearchOption';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LinkIcon(props) {
    const [searchText, setSearchText] = useState('');
    const searchValue = (e) => {
        setSearchText(e.target.value);
    };  
    const onSubmit = () => {
        props.setOpenInput(false);
        props.setText(searchText);
        setSearchText('');
    }
    const {t} = useTranslation();

    return (
        <LinkIconBox>
            <SearchDiv onSubmit={onSubmit}>
                <SearchIcon src={process.env.PUBLIC_URL + '/images/nicksearch.svg'} onClick={()=>{props.setOpenInput(true); }} />
                { props.openInput && 
                    <SLink 
                        onClick={()=> { props.setOpenInput(false); props.setText(searchText); setSearchText(''); }} 
                        to={'/search/'+ searchText}
                    >
                        <SLinkButton type="submit"></SLinkButton>
                    </SLink>
                }
                <SearchBox open={props.openInput}>
                    <HeaderSearchOption openInput={props.openInput} setSearchOption={props.setSearchOption}></HeaderSearchOption>
                    <SearchInput 
                        type='search' 
                        placeholder={t('Search_Input')}
                        value={searchText}
                        onChange={searchValue}
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
const SearchDiv = styled.form`
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
const SLinkButton = styled.button`
    display:block;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    right:0;
    border:0;
    background:transparent;
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