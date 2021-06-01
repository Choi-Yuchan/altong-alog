/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';

function AlogMainPopup () {
    const [close, setClose] = useState(true);
    return (
        <>
        { close &&
            <Wrap onClick = { () => { setClose(!close)}} >
                <Frame >
                    <Exit src={process.env.PUBLIC_URL + '/images/close-button.svg'} />
                    <Title>알록달록<br/> 쉽게 알기</Title>
                    <Word>1.	관심사로 글을 써요.</Word>
                    <Word>-	알록달록은 알통과 마찬가지로 개인적인 활동이 오롯이 개인적인 수익이 되는 공간이에요. 내가 쓰고 싶은 글, 알리고 싶은 정보, 관심사, 경험 등을 쓰면 되요!
                        단! 공공질서, 미풍양속을 저해하거나 현행법에 위배되는 내용, 타인에 대한 비방 및 사칭 목적, 불법적인 영리 추구 목적 등의 글은 안 되겠죠?
                        알록달록의 운영원칙에 위반된다고 판단될 경우 관리자에 의해 삭제되거나 신고 당할 수 있으니 주의해주세요!</Word>
                    <Word>2.	내 글에 가치를 매겨요.</Word>
                    <Word>-	모든 글에는 지식 재산권이 있어요. 내가 열심히 써서 올린 글이니까, 내 글에 가치를 매길 수 있답니다! 나는 그냥 공유하고 싶은 글이야! 알은 괜찮아! 하는 건 0알부터 매겨서 올릴 수 있고, 최대 100,000알까지 내가 쓴 글에 가치를 매겨서 글을 업로드 할 수 있어요.</Word>
                    <Word>3.	내 글을 보고 다른 알통 유저가 퍼갈 수 있어요.</Word>
                    <Word>-	내가 열심히 쓴 글을 다른 사람이 마음에 들고 간직하고 싶데요! 그러면 퍼가기 버튼으로 내 글을 누군가가 퍼갈 수 있어요. 대신에, 내 글에 미리 매긴 가치만큼 타 유저가 나에게 알을 주고 퍼갈 수 있답니다.</Word>
                    <Word>4.	나도 마음에 드는 글을 퍼갈 수 있어요.</Word>
                    <Word>-	두고두고 간직하고 내 알록달록에 올리고 싶은 글이 있으면 타유저가 메긴 알만큼 지불하고 퍼올 수가 있답니다. 단! 마음에 드는 글이 많다고 내 알록달록에 다 퍼가기만 할 순 없어요! 내 알록달록에 글이 하나도 없을 경우, 2번의 퍼가기 기본 기회가 주어져요. 그리고 알록달록에 글을 1개씩 쓸 때마다 퍼가기 기회가 2번씩 생겨요! 2개씩 글을 쓰면 4개의 퍼가기 기회가 생기겠죠?! 알록달록 공간에 내 글도 많이 쓰고, 마음에 드는 글도 많이 퍼 와봐요!</Word>
                    <Word>5.	내 글을 많이 보면 볼수록 수익이 생겨요.</Word>
                    <Word>-	내 글을 다른 유저가 퍼갔고, 다른 유저 알로그에서 누군가 내 글을 열람할 경우, 열람할 때마다 10알씩 광고수익이 생긴답니다. 그중 3알은 ㈜알통 본사로, 무료로 가져온 글의 경우, 나머지 7알에서 글의 원작자에게 5알, 내 글을 퍼간 유저에게 2알 이렇게 분배가 된답니다. 가치를 지불하고 퍼온 글의 경우에는, 글의 원작자에게 2알, 가치를 지불하고 글을 퍼간 유저에게 5알 이렇게 분배가 됩니다.</Word>
                </Frame>
            </Wrap>
        }
        </>
    )
};

const Wrap = styled.div`
    width:100%; height:125%;
    background-color:rgba(0,0,0,.3);
    position:absolute;
    left:0; top:0;
    z-index:1000;
`;

const Frame = styled.div`
    width:300px; height:600px;
    padding:0 2rem;
    margin:0 auto 20px;
    background:#fefefe;
    border:1px solid #707070;
    overflow:scroll;
    position:fixed;
    left:50%; top:10%;
    transform:translateX(-50%);
    z-index:99;
    box-sizing:border-box;
    

    @media all and (min-width:800px){
        width:600px;
        height:700px;
        
    }
`;

const Exit=styled.img`
    position:absolute;
    right:0.5rem; top:0.5rem;
    width:30px;
`;
const Title = styled.div`
    font-size:1.2rem;
    font-weight:bold;
    text-align:center;
    margin:50px;
`;
const Sub = styled.div`
    font-size:1rem;
    font-weight:bold;
    margin-bottom:20px;
    margin-left:10px;
`;

const Word =styled.div`
    width:80%; height:auto;
    font-size:0.8rem;
    line-height:2;
    margin:0 auto 10px;
    
`;
export default AlogMainPopup;