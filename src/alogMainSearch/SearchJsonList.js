import React, { useEffect } from "react";
import styled from "styled-components";
import MainSearchListEl from "./MainSearchListEl";

function SearchJsonList({list, text, option, select, indexOfLast, indexOfFirst, setPosts}) {

    const searchTitle = list.filter((data)=> data.title.toLowerCase().includes(text.toLowerCase()) ); //제목
    const searchText = list.filter((data)=> data.text.toLowerCase().includes(text.toLowerCase()) ); //내용
    const searchNick = list.filter((data)=> data.nickname.toLowerCase().includes(text.toLowerCase()) ); //작성자
    const serarchTitleText = [...searchTitle, ...searchText]; //제목 + 내용
    const TitleCount = searchTitle.length;
    const TextCount = searchText.length;
    const NickCount = searchNick.length;
    const TitleTextCount = serarchTitleText.length;

    const searchTitleOption = () => {
        if (select === 'recent') {
            return searchTitle.sort(function (a, b) {
                return b.time - a.time
            })
        } else if (select === 'view') {
            return searchTitle.sort(function (a, b) {
                return b.view - a.view
            })
        } else if (select === 'take') {
            return searchTitle.sort(function (a, b) {
                return b.take - a.take
            })
        } else if (select === 'good') {
            return searchTitle.sort(function (a, b) {
                return b.good - a.good
            })
        } else if (select === 'hunhun') {
            return searchTitle.sort(function (a, b) {
                return b.hunAl - a.hunAl
            })
        }
    };

    const serachTextOption = () => {
        if (select === 'recent') {
            return searchText.sort(function (a, b) {
                return b.time - a.time
            })
        } else if (select === 'view') {
            return searchText.sort(function (a, b) {
                return b.view - a.view
            })
        } else if (select === 'take') {
            return searchText.sort(function (a, b) {
                return b.take - a.take
            })
        } else if (select === 'good') {
            return searchText.sort(function (a, b) {
                return b.good - a.good
            })
        } else if (select === 'hunhun') {
            return searchText.sort(function (a, b) {
                return b.hunAl - a.hunAl
            })
        }
    };
    const serachNickOption = () => {
        if (select === 'recent') {
            return searchNick.sort(function (a, b) {
                return b.time - a.time
            })
        } else if (select === 'view') {
            return searchNick.sort(function (a, b) {
                return b.view - a.view
            })
        } else if (select === 'take') {
            return searchNick.sort(function (a, b) {
                return b.take - a.take
            })
        } else if (select === 'good') {
            return searchNick.sort(function (a, b) {
                return b.good - a.good
            })
        } else if (select === 'hunhun') {
            return searchNick.sort(function (a, b) {
                return b.hunAl - a.hunAl
            })
        }
    };
    const serarchTitleTextOption = () => {
        if (select === 'recent') {
            return serarchTitleText.sort(function (a, b) {
                return b.time - a.time
            })
        } else if (select === 'view') {
            return serarchTitleText.sort(function (a, b) {
                return b.view - a.view
            })
        } else if (select === 'take') {
            return serarchTitleText.sort(function (a, b) {
                return b.take - a.take
            })
        } else if (select === 'good') {
            return serarchTitleText.sort(function (a, b) {
                return b.good - a.good
            })
        } else if (select === 'hunhun') {
            return serarchTitleText.sort(function (a, b) {
                return b.hunAl - b.hunAl
            })
        }
    };

    useEffect(()=>{
        if (option === 1) {
            if (TitleCount === 0 || text === '') {
                return setPosts([]);
            } else {
                return setPosts(searchTitleOption());
            }
        } else if (option === 2) {
            if (TextCount === 0 || text === '') {
                return setPosts([]);
            } else {
                return setPosts(serachTextOption());
            }
        } else if (option === 3) {
            if (NickCount === 0 || text === '') {
                return setPosts([]);
            } else {
                return setPosts(serachNickOption());
            }
        } else if (option === 4) {
            if (TitleTextCount === 0 || text === '') {
                return setPosts([]);
            } else {
                return setPosts(serarchTitleTextOption());
            }
        }
    }, [text]);

    if (option === 1) {
        if (TitleCount === 0 || text === '') {
            return <NoneSearch>검색 결과가 없습니다.</NoneSearch>
        } else {
            return searchTitleOption().slice(indexOfFirst, indexOfLast).map(data => <MainSearchListEl result={data} key={data.id} />)
        }
    } else if (option === 2) {
        if (TextCount === 0 || text === '') {
            return <NoneSearch>검색 결과가 없습니다.</NoneSearch>
        } else {
            return serachTextOption().slice(indexOfFirst, indexOfLast).map(data => <MainSearchListEl result={data} key={data.id} />)
        }
    } else if (option === 3) {
        if (NickCount === 0 || text === '') {
            return <NoneSearch>검색 결과가 없습니다.</NoneSearch>
        } else {
            return serachNickOption().slice(indexOfFirst, indexOfLast).map(data => <MainSearchListEl result={data} key={data.id} />)
        }
    } else if (option === 4) {
        if (TitleTextCount === 0 || text === '') {
            return <NoneSearch>검색 결과가 없습니다.</NoneSearch>
        } else {
            return serarchTitleTextOption().slice(indexOfFirst, indexOfLast).map(data => <MainSearchListEl result={data} key={data.id} />)
        }
    }
}

const NoneSearch = styled.div`
    font-weight:bold;
    font-style:italic;
    margin-top:40%;
`;

export default React.memo(SearchJsonList);
