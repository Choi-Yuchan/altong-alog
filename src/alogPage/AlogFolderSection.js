import React from 'react';
import styled from 'styled-components';
import AlogDalogList from '../components/AlogDalogList';
import AlogDalogGroup from '../components/AlogDalogGroup';


function AlogFolderSection ({sample, groupSample, mySelect, setGroupFolderNumber}) {

    const groupCount = groupSample.length; //그룹  폴더의 개수

    return (
        <MyAlogSection>
            {mySelect === '게시글'
                ? sample.map((list)=>
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
                    />)
                : groupCount === 0
                    ? <NoGroupText>그룹이 없습니다.</NoGroupText>
                    : groupSample.map((list, index)=>
                        <AlogDalogGroup 
                            key={list.id}
                            backImg={list.backImg}
                            name={list.name}
                            contents={list.contents}
                            selectGroup={index}
                            setGroupFolderNumber={setGroupFolderNumber}
                        />)
            }            
        </MyAlogSection>
    )
};

const MyAlogSection = styled.section`
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
const NoGroupText = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:2rem 0;
    font-size:1rem;
    font-weight:bold;
    color:#666;
    font-style:italic;
`;


export default AlogFolderSection;