import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormatDateAsText from './function/FormatDateAsText';

function AlogDalogList({backImg, title, profile, nickname, time, view, reply, common, checkList}) {

    const [show, setShow] = useState(true);
    const [clickContent, setClickContent] = useState(false);

    return (
        <ListBox to='/contents' imgurl={process.env.PUBLIC_URL + '/images/' + backImg} onClick={()=>{setClickContent(!clickContent);}}>
            <ListContain>
                <WhiteBack></WhiteBack>
                <ListText>{title}</ListText>
                <ListProfile imgurl={process.env.PUBLIC_URL + '/images/' + profile}></ListProfile>
                <ListBy>by {nickname}</ListBy>
            </ListContain>
            <ListActive>
            {common !== 0 &&
                <>
                <ListTime>{FormatDateAsText(time)}</ListTime>
                <ListCheck><ListCheckIcon src={process.env.PUBLIC_URL + '/images/icon_view.svg'}></ListCheckIcon> {view}</ListCheck>
                <ListReply><ListReplyIcon src={process.env.PUBLIC_URL + '/images/icon_reply.svg'}></ListReplyIcon> {reply}</ListReply>
                </>
            }
            </ListActive>     
            <Language show={ show } src={ show ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'} 
                    onClick={ 
                        (e) => {
                            e.preventDefault();
                            setShow(!show);
                        }
                    }>
            </Language>
            {checkList && <CheckRec check={clickContent}></CheckRec>}
        </ListBox>
    );
}

const ListBox = styled(Link)`
    display:block;
    width:40%;
    border:1px solid #bfbbbb;
    background-image:url(${props => props.imgurl});
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    position:relative;
    margin:2%;
    border-radius:3px;

    &::after {
    content:"";
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    background:rgba(0,0,0,.3);
    z-index:1;
  } 
`;
const CheckRec = styled.i`
    display:block;
    width:10px;
    height:10px;
    border:1px solid #666;
    position:absolute;
    top:0;
    left:-20px;
    z-index:9;
    background-color:${({check})=>check ? '#666': '#fff'};
`;
const ListContain = styled.div`
    height:160px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
    overflow:hidden;

    @media (min-width:480px) {
        height:200px;
    }
`;
const WhiteBack = styled.div`
    width:100%;
    height:50%;
    background-color:#ffffff;
    position:absolute;
    top:0;
    left:0;
    z-index:2;
`;
const ListText = styled.p`
    position:relative;
    z-index:2;
    font-weight:bold;
    font-size:0.875rem;
    color:#505050;
    width:85%;
    margin-bottom: 10px;
    text-align:center;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;

    @media (min-width:480px) {
        font-size:1rem;
    }
`;
const ListProfile = styled.div`
    width:4.5rem;
    height:4.5rem;
    background-image:url(${props => props.imgurl});
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    border-radius:50%;
    position:relative;
    z-index:2;
    

    @media (min-width:480px) {
        width:5.5rem;
        height:5.5rem;
    }
`;
const ListBy = styled.p`
    color:#ffffff;
    position:relative;
    z-index:2;
    font-size:0.75rem;
    margin-top:10px;

    @media (min-width:480px) {
        font-size:0.875rem;
    }
`;
const ListActive = styled.div`
    width:100%;
    min-height:21px;
    border-top:1px solid #707070;
    background-color:#ffffff;
    display:flex;
    flex-direction: row;
    align-items: center;
    position:relative;
    z-index:3;
    padding: 0.3125rem 0;
    box-sizing:border-box;

    span {
        white-space:nowrap;
    }
`;
const ListTime = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left:1%;

`;
const ListCheck = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left: 2%;
`;
const ListCheckIcon = styled.img`
    width:0.5625rem;
`;
const ListReply = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left: 2%;
`;
const ListReplyIcon = styled.img`
    width:0.625rem;
    margin-bottom:-2px;
    margin-right:0.1875rem;
`;

const Language = styled.img`
    width:20px; height:20px;
    position:absolute;
    right:5px; top:5px;
    cursor:pointer;
    z-index:4;
`;

export default AlogDalogList;