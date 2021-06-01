import React from 'react';
import styled from 'styled-components';

function ContentsActive(props) {
    return (
        <ActiveBox>
            <ContentsTime>{props.recommend.time}</ContentsTime>
            <ContentsCheck>
                <CheckIcon src={process.env.PUBLIC_URL + '/images/icon_view.svg'}></CheckIcon>
                <CheckCount>{props.recommend.check}</CheckCount>
            </ContentsCheck>
            <ContentsReply>
                <ReplyIcon src={process.env.PUBLIC_URL + '/images/icon_reply.svg'}></ReplyIcon>
                <ReplyCount>{props.recommend.reply}</ReplyCount>
            </ContentsReply>
        </ActiveBox>
    );
}

const ActiveBox = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;
const ContentsTime = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-right:0.625rem;
`;
const ContentsCheck = styled.span`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-right:0.625rem;
`;
const CheckIcon = styled.img`
    width:0.5625rem;
    margin-bottom:-1px;
    margin-right:0.1875rem;
`;
const CheckCount = styled.span`
    font-size:0.625rem;
    color:#707070;
`;
const ContentsReply = styled.span`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-right:0.625rem;
`;
const ReplyIcon = styled.img`
    width:0.625rem;
    margin-bottom:-1px;
    margin-right:0.3125rem;
`;
const ReplyCount = styled.span`
    font-size:0.625rem;
    color:#707070;
`;

export default ContentsActive;