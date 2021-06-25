import React, { useMemo, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import SearchPageCount from './SearchPageCount';
import MainSearchOption from './MainSearchOption';
import SampleJson from './SampleJson';
import SearchJsonList from './SearchJsonList';

function AlogMainSearch(props) {

    const [selectSort, setSelectSort] = useState('recent'); //최신순, 조회순, 퍼가기순, 좋아요순, 훈훈알 순
    const [posts, setPosts] = useState([]); //검색 결과 배열
    const [currentPage, setCurrentPage] = useState(1); //보여지는 페이지 번호, 현재 내 위치
    const per = 6; //보여지는 글의 수
    const total = Math.ceil(posts.length/per); // 필요한 페이지의 수
    const countSize = 5; // 페이지 숫자 수


    const indexOfLast = currentPage * per; //검색 리스트에서 보여지는 마지막 인덱스 번호
    const indexOfFirst = indexOfLast - per; // 검색 리스트에서 보여지는 첫번째 인덱스 번호
    const [remains, setRemains] = useState(currentPage%countSize);
    useEffect(()=>{
        if (currentPage%countSize === 0) {
            return setRemains(5);
        } else {
            return setRemains(currentPage%countSize);
        }
    }, [currentPage]);
    const firstCountSize = currentPage - remains + 1; //페이징 최초 숫자
    const lastCountSize = currentPage - currentPage%countSize + countSize; //페이징 마지막 숫자
    const [lastNumber, setLastNumber] = useState(lastCountSize);
    console.log(posts.length);
    console.log(total);

    useEffect(()=>{
        if (lastCountSize > total) {
            setLastNumber(total);
        } else {
            setLastNumber(lastCountSize)
        }
    }, [lastCountSize, lastNumber]);

    
    const pageNumber = []; //페이지 번호 배열
    
    for (let i = firstCountSize; i <= lastNumber; i++) {
        pageNumber.push(i);
    }
    console.log(firstCountSize);




    return (
        <SearchBox>
            <MainSearchOption setSelectSort={setSelectSort}></MainSearchOption>
            <SearchWrap>
                <SearchListDiv>
                    <SearchJsonList 
                        list={SampleJson} 
                        text={props.text} 
                        option={props.searchOption} 
                        select={selectSort}
                        indexOfLast={indexOfLast}
                        indexOfFirst={indexOfFirst}
                        setPosts={setPosts}
                    />
                </SearchListDiv>
            </SearchWrap>
            <SearchPageCount pageNumber={pageNumber} currentPage={currentPage} setCurrentPage={setCurrentPage} count={posts.length}/>
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

export default React.memo(AlogMainSearch);