import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import AlogDalogList from '../components/AlogDalogList';

function MyAlogPageSearch({match}) {

    const {my_alog_search} = match.params;
    const location = useLocation();
    const searchArr = location.state.searchArr;

    if (searchArr.length === 0) {
        return (
            <NoneSearchResult>{my_alog_search} 검색 결과가 없습니다.</NoneSearchResult>
        )
    }
    return (
        <MyAlogSearchBox>
            {
                searchArr.map(list =>
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
                )
            }
        </MyAlogSearchBox>
    );
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
const MyAlogSearchBox = styled.div`
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