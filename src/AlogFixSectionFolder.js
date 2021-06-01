/* eslint-disable */ 
import React, { useState } from 'react';
import styled from 'styled-components';
import AlogFolderMaking from './AlogFolderMaking';
import { Route, Link } from 'react-router-dom';
import AlogWrite from './alogWrite/AlogWrite';

function AlogFixSectionFolder (props) {

    const [Open, OpenChange] = useState(false);

    const OpenBtn = () => {
        OpenChange(true)
    }

    const [Opend, SetOpen] = useState(false);
    const Opener = () => {
        SetOpen(!Opend);
    }

    const selfLogin = true;
    const langFolder = {
        ko:{
            write:"글쓰기"
        }
    }


    const write = langFolder.ko.write;
    return ( 
       <Frame>
           <Writing>
               <Color to="/writing">
               <Pencil src={process.env.PUBLIC_URL + '/images/writing.png'}/>{write}
               </Color>
               </Writing>
               
               { selfLogin === true && 
               <Two>
                   <Add src={process.env.PUBLIC_URL + '/images/add.png'} onClick={()=>{ Opener() }}></Add>
                   { Opend ? <AlogFolderMaking />: null }
                   <Fix src={process.env.PUBLIC_URL + '/images/setting.png'} onClick={ ()=>{props.click()} } ></Fix>
               </Two>
               }
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
    text-align:center;
    
    cursor:pointer;

    @media all and (min-width:800px){
        width:95px; height:30px;
        font-size:0.8em;
        line-height:30px;
    }
`;

const Color =styled(Link)`
    color:#707070;
`;

const Pencil = styled.img `
    width:17px; height:17px;
    vertical-align:middle;
    margin-right:5px;
    
    cursor:pointer;
`;

const Add = styled.img`
    width:24px; height:100%;
    cursor:pointer;
`;
const Fix = styled.img`
    width:24px; height:100%;
    cursor:pointer;
    margin-left:11px;
`;

const Two = styled.div`
    width:60px; height:24px;
`;


export default AlogFixSectionFolder;