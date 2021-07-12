import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';
import AlogDalogList from '../components/AlogDalogList';
import MyAlogPageSearch from './MyAlogPageSearch';

const sample = [
    {
        id:1,
        title: "알통끝판왕인 가평 닭갈비 맛집 소개",
        text: "알통 며칠 전 가평에 들렀다가 이 근처에서 장작구이로 엄청 유명하다는 가평 닭갈비 맛집을 찾았는데요. 쫄깃한 닭갈비에 막국수까지 먹어주니 같이 방문한 지인들 모두에게 만족을 안겨준 식당이에요. 1. 아침고요 장작구이 숯불닭갈비 13,000원, ...",
        profile: 'profile01.jpg',
        nickname: 'Vivien',
        backImg: 'bg06.jpg',
        time: 1612292323330,
        view: 16,
        reply: 12,
        hunAl: 1000,
        take: 40,
        good: 230
    },
    {
        id:2,
        title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
        text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
        profile: 'profile02.jpg',
        nickname: '고양이',
        backImg: 'bg01.jpg',
        time: 1608255682130,
        view: 6,
        reply: 12,
        hunAl: 2000,
        take: 39,
        good: 20
    },
];

const groupData = {
    "바다 탐험": {
        backImg: process.env.PUBLIC_URL + '/images/default_img06.jpg',
        contents: 7
    },
    "알통 이야기": {
        backImg: process.env.PUBLIC_URL + '/images/default_img10.jpg',
        contents: 4
    }
}

function InGroupFolder({match}) {

    const {group} = match.params;
    const groupInfo = groupData[group];

    if (group === 'MyMainSearch') {
        return (
            <>
                <Route path="/personalMain/MyMainSearch/:my_alog_search" component={MyAlogPageSearch} />
            </>
        );
    } else if (!groupInfo) {
        return <NoneGroup>존재하지 않는 그룹입니다.</NoneGroup>
    }
    return (
        <GroupPageWrap>
            <GroupHeader>
                <GroupBackImg src={groupInfo.backImg} />
                <GroupTitle>{group} ( {groupInfo.contents} )</GroupTitle>
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
const NoneGroup = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#666;
    font-size:1rem;
    font-weight:bold;
    font-style: italic;
    margin-top:5rem;
`;
const NoneSearchResult = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#666;
    font-size:1rem;
    font-weight:bold;
    font-style: italic;
    margin-top:5rem;
`;