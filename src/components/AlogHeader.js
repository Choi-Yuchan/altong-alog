import React from 'react';
import styled from 'styled-components';
import LinkIcon from './LinkIcon';
import { Route, Link } from 'react-router-dom';
import AlogMain from '../domain/AlogMain'; 

function AlogHeader(props) {
    const isActive = props.isActive;
    const setIsActive = props.setIsActive;

    const openNav = () =>{
        setIsActive(!isActive);
        document.getElementById("Con").style.display="block";
    }
    
    return (
        <HeaderDiv>
            <HeaderBox>
                <div>
                <Hambur onClick={() => openNav()} src={process.env.PUBLIC_URL + '/images/hambur.png'}></Hambur>
                <a href="http://www.altong.com/"><img src={process.env.PUBLIC_URL + '/images/logo.png'}/></a>
                </div>
                <Link to="/"><AlogLogo>알록달록</AlogLogo></Link>
                <LinkIcon 
                    text={props.text} setText={props.setText} 
                    openInput={props.openInput} setOpenInput={props.setOpenInput}
                    setSearchOption={props.setSearchOption}
                />
            </HeaderBox>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
    width:100%;
    max-width:800px;
    height:45px;
    transition:all 0.3s;
    position:fixed;
    top:0;
    z-index:999;
    background:white;
    @media (min-width:480px) {
        height:60px;
    }
`;

const HeaderBox = styled.div`
    width:100%;
    max-width:800px;
    height:100%;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position:relative;
`;

const Hambur = styled.img`
    width:1.563rem; 
    cursor:pointer;
    margin-left:10px;
    margin-right:15px;

    @media (min-width:480px) {
        width:1.875rem;
    }
`;

const AlogLogo = styled.a`
    font-size:1.25rem;
    font-weight:bold;
    color:#707070;
    display:block;
    cursor:pointer;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    @media (min-width:480px) {
        font-size: 1.563rem;
    }
`;

export default AlogHeader;