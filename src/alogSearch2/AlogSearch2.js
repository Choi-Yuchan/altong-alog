import React from 'react';
import styled from 'styled-components';
import SearchListEl2 from './SearchListEl2';
import PageCount2 from './PageCount2';
import SearchOption2 from './SearchOption2';

const langAlogSearch2 = {
    ko:{
        searchResult : [
            {
                id:1,
                text: "강아지를 키워보자",
                profile: 'profile01.jpg',
                nickname: 'Vivien',
                backImg: 'bg06.jpg',
                time: '14분 전',
                check: '6',
                reply: '12',
            },
            {
                id:1,
                text: "강아지를 키워보자",
                profile: 'profile01.jpg',
                nickname: 'Vivien',
                backImg: 'bg06.jpg',
                time: '14분 전',
                check: '6',
                reply: '12',
            },
            {
                id:1,
                text: "강아지를 키워보자",
                profile: 'profile01.jpg',
                nickname: 'Vivien',
                backImg: 'bg06.jpg',
                time: '14분 전',
                check: '6',
                reply: '12',
            },
            {
                id:1,
                text: "강아지를 키워보자",
                profile: 'profile01.jpg',
                nickname: 'Vivien',
                backImg: 'bg06.jpg',
                time: '14분 전',
                check: '6',
                reply: '12',
            }
        ],
    }
}
function AlogSearch2() {

    const searchResult = langAlogSearch2.ko.searchResult;

    const searchCount = searchResult.length;


    return (
        <SearchBox>
            <SearchOption2></SearchOption2>
            <SearchWrap>
                <SearchListDiv>
                    {searchResult.map(result => (
                        <SearchListEl2 result={result} key={result.id} />
                    ))}
                </SearchListDiv>
            </SearchWrap>
            { searchCount > 6 && <PageCount2 /> }
        </SearchBox>
    );
}

const SearchBox = styled.div`
    width:100%;
    max-width:800px;
    margin:0 auto;
`;
const SearchWrap = styled.div`
    width:100%;
    max-width:800px;
    margin:0 auto;
    display:flex;
    justify-content: center;
`;
const SearchListDiv = styled.div`
    width:90%;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;

@media (min-width:800px) {
    width:80%;
}
`;

export default AlogSearch2;