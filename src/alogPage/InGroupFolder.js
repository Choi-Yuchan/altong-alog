import React from 'react';
import styled from 'styled-components';
import AlogDalogList from '../components/AlogDalogList';

function InGroupFolder({sample, sampleGroupContent}) {


    return (
        <GroupPageWrap>
            <GroupHeader>
                <GroupBackImg src={sampleGroupContent.backImg} />
                <GroupTitle>{sampleGroupContent.name} ( {sampleGroupContent.contents} )</GroupTitle>
            </GroupHeader>
            <MyGroupAlogListBox>
                {sample.map((list)=>
                    <AlogDalogList
                        key={list.id} 
                        backImg={list.backImg} 
                        title={list.title} 
                        profile={list.profile} 
                        nickname={list.nickname} 
                        time={list.time} 
                        view={list.view} 
                        reply={list.reply}
                        common={list.id}
                    />
                )}
            </MyGroupAlogListBox>
        </GroupPageWrap>
    );
}

export default InGroupFolder;

const GroupPageWrap = styled.div``;
const GroupHeader = styled.div`
    position:relative;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;

    @media (min-width:480px) {
        height:150px;
    }

    ::after {
        content:'';
        display:block;
        width:100%;
        height:100%;
        background:rgba(85,85,85,0.5);
        position:absolute;
        top:0;
        left:0;
    }
`;
const GroupBackImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
`;
const GroupTitle = styled.p`
    color:#fff;
    font-size:1rem;
    position:relative;
    z-index:1;
    display:inline-flex;
    align-items:center;

    @media (min-width:480px) {
        font-size:1.375rem;
    }
`;
const MyGroupAlogListBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:space-around;
    margin:0 auto;

    @media (min-width:480px) {
        width:80%;
        justify-content:space-between;
    }
`;