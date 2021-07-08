import React, { useState } from 'react';
import styled from 'styled-components';
import SearchPageCount from '../alogMainSearch/SearchPageCount';
import MainSearchOption from '../alogMainSearch/MainSearchOption';
import SampleJson from '../alogMainSearch/SampleJson';
import SearchJsonList from '../alogMainSearch/SearchJsonList';

function AlogMainSearch(props) {

    const [selectSort, setSelectSort] = useState('recent'); //최신순, 조회순, 퍼가기순, 좋아요순, 훈훈알 순
    const [posts, setPosts] = useState([]); //검색 결과 배열
    const [currentPage, setCurrentPage] = useState(1); //보여지는 페이지 번호, 현재 내 위치
    const per = 6; //보여지는 글의 수
    const total = Math.ceil(posts.length/per); // 필요한 페이지의 수
    const countSize = 5; // 페이지 숫자 수

    const indexOfLast = currentPage * per; //검색 리스트에서 보여지는 마지막 인덱스 번호
    const indexOfFirst = indexOfLast - per; // 검색 리스트에서 보여지는 첫번째 인덱스 번호

    const createArr = (n) => {
        const iArr = new Array(n);
        for (let i = 0; i < n; i++) iArr[i] = i+1;
        return iArr;
    }
    const [blockNum, setBlockNum] = useState(0);

    const v = blockNum*countSize;
    const iArr = createArr(total);
    let pArr = iArr.slice(v, countSize+v);

    const nextPage = () => {
        if (currentPage >= total)
            return
        if(countSize*(blockNum+1) < (currentPage+1)) {
            setBlockNum(n=>n+1);
        }
        setCurrentPage(n=>n+1);
    }
    const prevPage = () => {
        if (currentPage <= 1) 
            return;
        if((currentPage - 1) <= total*blockNum) {
            setBlockNum(n=>n-1);
        }
        setCurrentPage(n=>n-1);
    }
    const firstPage = () => {
        setBlockNum(0);
        setCurrentPage(1);
    }
    const lastPage = () => {
        setBlockNum(Math.ceil(total/countSize) - 1);
        setCurrentPage(total);
    }

    return (
        <SearchBox>
            <SearchWrap>
                <MainSearchOption setSelectSort={setSelectSort}></MainSearchOption>
                <SearchListDiv text={props.text}>
                    {/* <SearchJsonList 
                        list={SampleJson} 
                        text={props.text} 
                        option={props.searchOption} 
                        select={selectSort}
                        indexOfLast={indexOfLast}
                        indexOfFirst={indexOfFirst}
                        setPosts={setPosts}
                    /> */}
                </SearchListDiv>
            </SearchWrap>
            <SearchPageCount 
                pageNumber={pArr} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                count={posts.length} 
                nextPage={nextPage} 
                prevPage={prevPage} 
                firstPage={firstPage} 
                lastPage={lastPage} 
            />
        </SearchBox>
    );
}

const SearchBox = styled.div`
    width:100%;
    max-width:800px;
    margin:0 auto;
    display:flex;
    min-height: calc(100vh - 60px);
    flex-direction:column;
`;
const SearchWrap = styled.div`
    width:100%;
    max-width:800px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    flex:1;
`;
const SearchListDiv = styled.div`
    width:90%;
    display:flex;
    flex-wrap: wrap;
    margin:0 auto;
    justify-content:${props => props.text === '' ? 'center' : 'space-between'};
    align-items: ${props => props.text === '' ? 'center' : 'stretch'};

@media (min-width:800px) {
    width:70%;
}
`;

export default React.memo(AlogMainSearch);