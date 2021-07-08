import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AlogDalogGroup({backImg, name, contents, setGroupFolderNumber, selectGroup}) {
    return (
        <AlogGroupBox to={`/personalMain/${name}`} onClick={()=>{setGroupFolderNumber(selectGroup);}} >
            <GroupBackImg src={backImg} />
            <GroupInfoBox>
                <GroupName>{name}</GroupName>
                <GroupContentCount>( {contents} )</GroupContentCount>
            </GroupInfoBox>
        </AlogGroupBox>
    );
}

export default AlogDalogGroup;

const AlogGroupBox = styled(Link)`
    width:40%;
    margin:2%;
    height:180px;
    border:1px solid #999;
    box-sizing:border-box;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    border-radius:3px;

    @media (min-width:480px) {
        height:250px;
    }
`;
const GroupBackImg = styled.img`
    width:100%;
    height:70%;
    object-fit:cover;

    @media (min-width:480px) {
        height:60%;
    }
`;
const GroupInfoBox = styled.div`
    height:30%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;

    @media (min-width:480px) {
        height:40%;
    }
`;
const GroupName = styled.p`
    margin-bottom:10px;
    font-size:0.875rem;
    font-weight:bold;
    color:#666;
`;
const GroupContentCount = styled.span`
    font-size: 0.75rem;
    color:#666;
`;