import React from 'react';
import styled from 'styled-components';

function PreviewMyGroup({sample}) {
    return (
        <PreviewGroupBox>
            <PreviewBgImg src={sample} />
            <PreviewGroupName>그룹명</PreviewGroupName>
        </PreviewGroupBox>
    );
}

const PreviewGroupBox = styled.div`
    border:1px solid #666;
    height:150px;
    width:35%;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media (min-width:480px) {
        width:20%;
    }
`;
const PreviewBgImg = styled.img`
    width:100%;
    height:50%;
    object-fit: cover;
`;
const PreviewGroupName = styled.div`
    height:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:12px;
`;

export default PreviewMyGroup;