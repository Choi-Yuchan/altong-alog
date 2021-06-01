/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

function SearchListEl(props) {

    const [shows, setShows] = useState(true);

    return (
        <ListBox imgurl={process.env.PUBLIC_URL + '/images/' + props.result.backImg}>
            { props.show === true && <Trash src={process.env.PUBLIC_URL + '/images/trash2.png'}  onClick={ function(){window.confirm('정말로 삭제하시겠습니까?')} }></Trash> }
            <Link to="/contents">
            <ListContain>
                <WhiteBack></WhiteBack>
                { props.result.down === true && <ListMask></ListMask> }
                <ListText>{props.result.text}</ListText>
                <ListProfile imgurl={process.env.PUBLIC_URL + '/images/' + props.result.profile}></ListProfile>
                <ListBy>by {props.result.nickname}</ListBy>
            </ListContain>
            <ListActive>
                <ListTime>{props.result.time}</ListTime>
                <ListCheck><ListCheckIcon src={process.env.PUBLIC_URL + '/images/icon_view.svg'}></ListCheckIcon> {props.result.check}</ListCheck>
                <ListReply><ListReplyIcon src={process.env.PUBLIC_URL + '/images/icon_reply.svg'}></ListReplyIcon> {props.result.reply}</ListReply>
                <Language show={ shows } src={ shows ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'} 
                    onClick={ 
                        (e) => {
                            e.preventDefault();
                            setShows(!shows);
                            
                        }
                    }>
                </Language>
            </ListActive>
            </Link>
        </ListBox>
    );
}

const ListBox = styled.div`
    width:45%;
    border:1px solid #bfbbbb;
    background-image:url(${props => props.imgurl});
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    margin:2%;
    position:relative;

    @media (min-width:480px) {
        width:35%;
        margin:5%;
    }
`;

const Trash = styled.img`
    width:20px; height:30px; 
    position:absolute;
    left:5px; top:5px;
    z-index:99;
    cursor:pointer;
`;

const ListContain = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
`;
const WhiteBack = styled.div`
    width:100%;
    height:50%;
    background-color:#ffffff;
    position:absolute;
    top:0;
    left:0;
`;
const ListMask = styled.div`
    width:100%;
    height:100%;
    background-color:rgba(133,133,133,0.65);
    position:absolute;
    top:0;
    left:0;
    z-index:1;
`;
const ListText = styled.p`
    width:80%;
    position:relative;
    z-index:1;
    font-weight:bold;
    font-size:1rem;
    margin-top:2rem;
    margin-bottom:2rem;
    color:#505050;
    text-align:center;
`;
const ListProfile = styled.div`
    width:5rem;
    height:5rem;
    background-image:url(${props => props.imgurl});
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    border-radius:50%;
    position:relative;
    z-index:1;

    @media (min-width:480px) {
        width:5.5rem;
        height:5.5rem;
    }
`;
const ListBy = styled.p`
    color:#ffffff;
    position:relative;
    z-index:2;
    margin-top:2rem;
    margin-bottom:2rem;
`;
const ListActive = styled.div`
    width:100%;
    border-top:1px solid #707070;
    background-color:#ffffff;
    display:flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 0;
`;
const ListTime = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left:5px;
`;
const ListCheck = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left: 0.625rem;
`;
const ListCheckIcon = styled.img`
    width:0.5625rem;
`;
const ListReply = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left: 0.625rem;
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
    z-index:1000;
`;
export default SearchListEl;