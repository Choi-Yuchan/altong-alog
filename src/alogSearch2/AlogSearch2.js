import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import SearchListEl2 from './SearchListEl2';
import PageCount2 from './PageCount2';
import SearchOption2 from './SearchOption2';
import SampleJson from './SampleJson';

const Json = (props, text) => {
    if ( text === '') {
        return <div>검색 결과가 없습니다.</div>
    } else {
        return props.filter((data)=> data.text.toLowerCase().includes(text.toLowerCase()) )
        .map(data=> <SearchListEl2 result={data} key={data.id} />);
    }

}


function AlogSearch2(props) {

    // const searchCount = SampleJson.length;

    return (
        <SearchBox>
            <SearchOption2></SearchOption2>
            <SearchWrap>
                <SearchListDiv>
                    { Json(SampleJson, props.text) }
                </SearchListDiv>
            </SearchWrap>
            {/* { searchCount > 6 && <PageCount2 /> } */}
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
    margin:0 auto;
    justify-content:space-between;

@media (min-width:800px) {
    width:70%;
}
`;

export default React.memo(AlogSearch2);