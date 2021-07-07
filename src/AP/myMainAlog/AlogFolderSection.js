import React, { useState } from 'react';
import styled from 'styled-components';
import AlogDalogList from '../../AlogDalogList';


function AlogFolderSection (props) {

    return (
        <MyAlogSection>
            {props.sample.map((list)=>
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
        </MyAlogSection>
    )
};

const MyAlogSection = styled.section`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:space-between;
    margin:0 auto;

    @media (min-width:480px) {
        width:80%;
    }
`;


export default AlogFolderSection;