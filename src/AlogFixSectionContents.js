/* eslint-disable */ 
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import AlogWrite from './alogWrite/AlogWrite';

function AlogFixSectionContents (props) {

    const [Open, OpenChange] = useState(false);

    const OpenBtn = () => {
        OpenChange(true)
    }

    const [Opend, SetOpen] = useState(false);
    const Opener = () => {
        SetOpen(!Opend);
    }

    const langFolder = {
        ko:{
            write:"글쓰기"
        }
    }
    const write = langFolder.ko.write;


    // 내가 로그인 했을 때만 노출됨.
    const selfLogin = true;

    return ( 
       <Frame>
           <Writing>
           <WriteLink to="/Writing"><Pencil src={process.env.PUBLIC_URL + '/images/writing.png'}/>{write}</WriteLink>
            </Writing>
                { selfLogin === true && <Fix src={process.env.PUBLIC_URL + '/images/setting.png'} onClick ={ props.click } ></Fix> }
       </Frame>
    )
};

const Frame = styled.div`
    width:100%; height:70px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;    
    align-items:center;
    padding-left:1vw;
    padding-right:1vw;
`;

const Writing = styled.div`
    width:77px; height:24px;
    border:1px solid rgba(0,0,0,.2);
    font-size:0.688em;
    line-height:24px;
    color:#707070;
    text-align:center;
    cursor:pointer;

    @media all and (min-width:800px){
        width:95px; height:30px;
        font-size:0.8em;
        line-height:30px;
    }
`;

const WriteLink = styled(Link)`
    color:#707070;
`;

const Pencil = styled.img `
    width:17px; height:17px;
    vertical-align:middle;
    margin-right:5px;
    color:#707070;
    cursor:pointer;
`;


const Fix = styled.img`
    width:24px; height:24px;
    cursor:pointer;
    margin-left:11px;
`;



export default AlogFixSectionContents;