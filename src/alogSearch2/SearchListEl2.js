import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SearchListEl2(props) {

    const [show, setShow] = useState(true);

    return (
        <ListBox imgurl={process.env.PUBLIC_URL + '/images/' + props.result.backImg}>
            <Link to="/contents">
            <ListContain>
                <WhiteBack></WhiteBack>
                <ListText>{props.result.text}</ListText>
                <ListProfile imgurl={process.env.PUBLIC_URL + '/images/' + props.result.profile}></ListProfile>
                <ListBy>by {props.result.nickname}</ListBy>
            </ListContain>
            <ListActive>
                <ListTime>{props.result.time}</ListTime>
                <ListCheck><ListCheckIcon src={process.env.PUBLIC_URL + '/images/icon_view.svg'}></ListCheckIcon> {props.result.check}</ListCheck>
                <ListReply><ListReplyIcon src={process.env.PUBLIC_URL + '/images/icon_reply.svg'}></ListReplyIcon> {props.result.reply}</ListReply>
            </ListActive>
            <Language show={ show } src={ show ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'} 
                    onClick={ 
                        (e) => {
                            e.preventDefault();
                            setShow(!show);
                        }
                    }>
            </Language>
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
    position:relative;
    margin:2%;

    &::after {
    content:"";
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    background:rgba(0,0,0,.3);
    z-index:1;
  } 
    @media (min-width:480px) {
        width:30%;
    }
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
    z-index:2;
`;
const ListText = styled.p`
    position:relative;
    z-index:2;
    font-weight:bold;
    font-size:1rem;
    color:#505050;
    width:80%;
    margin:2rem 0;
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
    margin:2rem 0;
`;
const ListActive = styled.div`
    width:100%;
    border-top:1px solid #707070;
    background-color:#ffffff;
    display:flex;
    flex-direction: row;
    align-items: center;
    position:relative;
    z-index:3;
    padding: 0.3125rem 0;
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
    z-index:4;
`;

export default SearchListEl2;