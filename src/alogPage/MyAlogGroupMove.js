import React, { useState} from 'react';
import styled from 'styled-components';

function MyAlogGroupMove({existence, setMyAlogMove}) {

    const myGroupList = [
        {
            id:1, 
            name: '낚시하자', 
            select:false
        },
        {
            id:2, 
            name: '산책하자', 
            select:false
        },
        {
            id:3, 
            name: '맛집가자', 
            select:false
        },
        {
            id:4, 
            name: '등산하자', 
            select:false
        },
        {
            id:5, 
            name: '여행가자', 
            select:false
        }
    ];
    const [groupArray, setGroupArray] = useState(myGroupList);

    const groupId = (id) => {
        setGroupArray(
            groupArray.map(array => 
                array.id === id + 1 ? {...array, select: true} : {...array, select: false}
            )
        )
    }

    return (
        <>
            {existence
                ? <MyGroupMoveWrap onClick={()=>{setMyAlogMove(false);}}>
                    <MovePopup onClick={(e)=>{e.stopPropagation();}}>
                        <MovePopupTitle>이동하기</MovePopupTitle>
                        <MoveContentsBox>
                            <ContentsEl>'강아지를 키워보자' 글을 이동합니다.</ContentsEl>
                        </MoveContentsBox>
                        <MoveGroupBox>
                            {groupArray.map((list, index)=>
                                <MoveGroupLi key={list.id} onClick={()=>{groupId(index)}}>
                                    <GroupIcon src={process.env.PUBLIC_URL + '/images/folder.svg'} />
                                    <GroupName select={list.select}>{list.name}</GroupName>
                                </MoveGroupLi>
                            )}
                        </MoveGroupBox>
                        <MoveGroupSaveBtnBox>
                            <button>이동</button>
                            <button onClick={()=>{setMyAlogMove(false);}}>취소</button>
                        </MoveGroupSaveBtnBox>
                    </MovePopup>
                </MyGroupMoveWrap>
                : <NoMyGroupAlert onClick={()=>{setMyAlogMove(false);}}>이동할 수 있는 그룹이 없습니다.</NoMyGroupAlert>
            }
        </>
    );
}

export default MyAlogGroupMove;

const MyGroupMoveWrap = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:9999;
`;
const MovePopup = styled.div`
    padding:10px;
    border:1px solid #888;
    border-radius:10px;
    background:#fff;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    flex-direction:column;
    align-items:center;
    min-width:90%;

    @media (min-width:480px) {
        min-width:300px;
    }
`;
const MovePopupTitle = styled.p`
    font-size:1.25rem;
    font-weight:bold;
    color:#666;
`;
const MoveContentsBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:10px 0;
`;
const ContentsEl = styled.p`
    font-size:0.875rem;
`;
const MoveGroupBox = styled.ul`
    width:100%;
`;
const MoveGroupLi = styled.li`
    display:flex;
    align-items:center;
    margin-bottom:5px;
    border-bottom:1px solid #999;
    box-sizing:border-box;
    cursor:pointer;
`;
const GroupIcon = styled.img`
    width:20px;
    height:20px;
    object-fit: contain;
    margin-right:10px;
`;
const GroupName = styled.span`
    font-size: 0.875rem;
    font-weight:bold;
    color:${({select})=> select ? '#fd0031':'#666'};
`;
const MoveGroupSaveBtnBox = styled.div`
    margin-top:10px;

    button {
        border:1px solid #666;
        background:#fff;
        border-radius:20px;
        font-size:12px;
        cursor:pointer;
        box-sizing:border-box;
    }
    button:first-child {
        margin-right:10px;
    }
`;
const NoMyGroupAlert = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    z-index:9999;
    transform:translate(-50%,-50%);
    z-index:9999;
    background:rgba(85,85,85, 0.7);
    color:#fff;
    width:90%;
    height:150px;
    max-width:300px;
    display:flex;
    justify-content:center;
    align-items:center;
`;