import React from 'react';
import styled from 'styled-components';

function MyAlogPageSearch({match}) {

    const {my_alog_search} = match.params;
    console.log(my_alog_search);

    return (
        <NoneSearchResult>{my_alog_search} 검색 결과가 없습니다.</NoneSearchResult>
    )
}

export default MyAlogPageSearch;

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