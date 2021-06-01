
/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import SearchListEl from './SearchListEl';


function AlogSearch(props) {

    const searchResult = [
        {
            id:1,
            text: "알록달록 튜토리얼",
            profile: 'default2.jpg',
            nickname: '알록달록',
            backImg: 'default1.jpg',
            time: '',
            check: '',
            reply: '',
            down: false
        }
    ];


    return (
        <SearchBox>
            <SearchListDiv>
                {
                searchResult.map(
                    result => (
                    <SearchListEl result={result} key={result.id} show={ props.show } />
                    )
                  )
                }
            </SearchListDiv>
        </SearchBox>
    );
}

const SearchBox = styled.div`
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
    justify-content:space-between;

    @media (min-width:800px) {
        width:70%;
    }
`;

export default AlogSearch;