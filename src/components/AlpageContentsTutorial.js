import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SpaceTxt = styled.div`
    width:100%;
    padding:30px 20px 20px 30px;
    box-sizing:border-box;
    font-size: 0.875rem;
    line-height:1.5;
    font-weight:100;
    max-width:800px;

`;
const ButtonBox = styled.div`
    text-align:right;
`;      

const StyledBtn = styled.button`
    font-size:0.625rem;
    width:60px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 15px;
    padding: 5px 10px;
    background-color:#fefefe;
    position:relative;
    margin-right:5px;
    cursor: pointer;
    :last-child{
        margin-right: 0;
    }
`;

const Count =styled.div`
    width:30px;
    font-size:0.7rem;
    background-color:#FC0326;
    position:absolute;
    top:-0.5rem;
    right:0;
    color:#fff;
    border-radius:15px;
`;
const CommentBox =styled.div`
    width:95%;
    margin:0 auto 100px;
    box-sizing:border-box;
    display:flex;
    flex-direction: column;
    justify-content: center;
    
    @media all and (max-width:500px){
        margin-bottom:50px;  
    }
`;

const Commentdiv =styled.div`
    width:100%;
    margin-bottom:1rem;
`;

const Commentdiv2 =styled.div`
    width:100%;

`;

const CommentInner =styled.div`
    width:100%;
    display:flex;
`;


const CommentSave =styled.button`
    flex-grow: 0;
    height: 40px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    margin-left: 3px;
    color: #737373;
    font-size: 12px;
    padding: 5px 10px;
    box-sizing:border-box;
`;

const CommentTxt =styled.textarea`
    width:100%;
    height: 40px;
    resize: none;
    font-size: 14px;
    border: 1px solid #ccc;
    color: #666;
    border-radius: 5px;
    outline: none;
    padding: 9px 20px;
    margin: 0;
    box-sizing:border-box;
`;


const CommentInner2=styled.div`
    display:flex;
    align-items:center;
    color: #707070;
    margin-bottom:1rem;
`;

const Left=styled.div`
    width: 2.4rem;
    position:relative;
    margin-right:0.5rem;
`;

const ProImg=styled.img`
    width:100%;
    cursor:pointer;
`;

const Flag =styled.img`
    width:50%;
    position:absolute;
    right:0%;
    bottom:20%;
`;


const Country =styled.p`
    text-align:center;
    font-size:0.75rem;
    font-weight:bold;
    color:#707070;
`;


const Right=styled.div`
    width:85%;
    box-sizing:border-box;
`;

const Reply=styled.div`
    width:100%;
    font-size: 14px;
    color: #666;
    background-color:#eeeeee;
    border-radius: 25px;
    outline: none;
    padding: 9px 20px;
    margin: 0;
    box-sizing:border-box;
    display:flex;
    align-items:center;

`;

const CommentInner3=styled.div`
    display:flex;
    align-items:center;
    font-size:0.75rem;
    font-weight: bold;
    margin-left:1rem;
    margin-top:0.3rem;
`;

const Nick=styled.div`
    margin-right:0.5rem;
`;


const Hour=styled.div`
    margin-right:0.5rem;
`;

const Emgc=styled.img`
    width:0.875rem;
    margin-right:0.5rem;
    cursor:pointer;
`;

const Goood = styled.div`
    width:0.875rem;
    cursor:pointer;
    margin-right:0.5rem;
`;
const Good=styled.img`
    width:0.875rem;
    margin-right:0.5rem;
`;

const Saad = styled.div`
    width:0.875rem;
    cursor:pointer;
`;

const Sad=styled.img`
    width:0.875rem;
    cursor:pointer;
`;
const Wrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:30px 5px;
`;
const LanguageCon = styled.div`
    display:flex;
    font-size:14px;
`;
const Origin = styled.div`
    width:40px; height:40px;
    border-radius: 50%;
    border:${props => props.color === false ? '1.5px solid #777' :  '1.5px solid #fd0031'};
    line-height:40px;
    color:${props => props.color === false ? '#777' :  '#fd0031'};
    text-align:center;
    cursor:pointer;
`;
const Ai = styled.div`
    width:40px; height:40px;
    border-radius: 50%;
    border:${props => props.color === true ? '1.5px solid #777' :  '1.5px solid #fd0031'};
    line-height:40px;
    color:${props => props.color === true ? '#777' :  '#fd0031'};
    text-align:center;
    cursor:pointer;
`;
const Line =styled.div`
    width:1.5px; height:30px;
    margin:5px 10px 0;
    background: #777;
`;
const Caution = styled.div`
    display:flex;
    font-size:10px;
    width:90%;
    margin:0 auto;
    flex-direction: row;
    justify-content: space-between;

    @media all and (min-width:768px){
        font-size:12px;
    }
`;
const Back = styled.div`
    font-weight:bold;
    white-space:nowrap;
    text-align:left;
`;
const Id = styled.div`
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    text-align:center;
`;
const Title = styled.div`
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    flex-grow:0.5;
    text-align:center;
`;
const BackTo = styled(Link)`
    color:blue;
    white-space:nowrap;
    font-weight:bold;
`;
const Tutorial = styled.div``;
const Sub = styled.div`
    font-size:1.2rem;
    font-weight:bold;
    margin:0 auto 20px;
    text-align: center;
    color:#777;
`;

const Word =styled.div`
    width:90%; height:auto;
    font-size:0.8rem;
    line-height:2;
    margin:0 auto 10px;
`;
const WordB =styled(Word)`
    font-weight:bold;
`;
function AlpageContentsTutorial({Contents}) {

    const langSpace = {
        ko:{
            //고정
            allText : ["퍼가기","좋아요","댓글"],
    
            userData : {
                profileImg:`${process.env.PUBLIC_URL + '/images/Untitled-1.png'}`,
                flag:`${process.env.PUBLIC_URL + '/images/flag.png'}`,
                country:"KOR",
            },
            //고정
            CommentSave : ["등록"],
    
            Reply : ["미래의 휴대전화라 기대하면서 댓글 봤습니다."],
            Nick : ["닉네임"],
            Hour : ["24일전"]
        }
    };
    const [open, setOpen] = useState(false);

    const free = () => {
      if (open === true) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }  

    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(prev => prev + 1)
    }

    const [count2, setCount2] = useState(0);

    const plus2 = () => {
        setCount2(prev => prev + 1)
    }
    
    const allText = langSpace.ko.allText;
    const userData = langSpace.ko.userData;
    const savesave = langSpace.ko.CommentSave;
    const rereply = langSpace.ko.Reply;
    const nick = langSpace.ko.Nick;
    const realtime =langSpace.ko.Hour;
    const [good,goodSet] = useState(true);
    const [sad,sadSet] = useState(true);
    function goodShow(){
        goodSet(!good);
    }
    function sadShow(){
        sadSet(!sad);
    }

    const [Open, SetOpen] = useState(false);
    const Opener = () => {
        SetOpen(!Open);
    }

    const [color, setColor] = useState(true);
    const origin = "원본";
    const ai = "AI";
    return (
        <>
        <SpaceTxt>
                <Tutorial>
                    <Sub>알록달록 튜토리얼</Sub>
                    <WordB>1. 관심사로 글을 써요.</WordB>
                    <Word>-	알록달록은 알통과 마찬가지로 개인적인 활동이 오롯이 개인적인 수익이 되는 공간이에요. 내가 쓰고 싶은 글, 알리고 싶은 정보, 관심사, 경험 등을 쓰면 되요!
                        단! 공공질서, 미풍양속을 저해하거나 현행법에 위배되는 내용, 타인에 대한 비방 및 사칭 목적, 불법적인 영리 추구 목적 등의 글은 안 되겠죠?
                        알록달록의 운영원칙에 위반된다고 판단될 경우 관리자에 의해 삭제되거나 신고 당할 수 있으니 주의해주세요!</Word>
                    <WordB>2. 내 글에 가치를 매겨요.</WordB>
                    <Word>-	모든 글에는 지식 재산권이 있어요. 내가 열심히 써서 올린 글이니까, 내 글에 가치를 매길 수 있답니다! 나는 그냥 공유하고 싶은 글이야! 알은 괜찮아! 하는 건 0알부터 매겨서 올릴 수 있고, 최대 100,000알까지 내가 쓴 글에 가치를 매겨서 글을 업로드 할 수 있어요.</Word>
                    <WordB>3. 내 글을 보고 다른 알통 유저가 퍼갈 수 있어요.</WordB>
                    <Word>-	내가 열심히 쓴 글을 다른 사람이 마음에 들고 간직하고 싶데요! 그러면 퍼가기 버튼으로 내 글을 누군가가 퍼갈 수 있어요. 대신에, 내 글에 미리 매긴 가치만큼 타 유저가 나에게 알을 주고 퍼갈 수 있답니다.</Word>
                    <WordB>4. 나도 마음에 드는 글을 퍼갈 수 있어요.</WordB>
                    <Word>-	두고두고 간직하고 내 알록달록에 올리고 싶은 글이 있으면 타유저가 메긴 알만큼 지불하고 퍼올 수가 있답니다. 단! 마음에 드는 글이 많다고 내 알록달록에 다 퍼가기만 할 순 없어요! 내 알록달록에 글이 하나도 없을 경우, 2번의 퍼가기 기본 기회가 주어져요. 그리고 알록달록에 글을 1개씩 쓸 때마다 퍼가기 기회가 2번씩 생겨요! 2개씩 글을 쓰면 4개의 퍼가기 기회가 생기겠죠?! 알록달록 공간에 내 글도 많이 쓰고, 마음에 드는 글도 많이 퍼 와봐요!</Word>
                    <WordB>5. 내 글을 많이 보면 볼수록 수익이 생겨요.</WordB>
                    <Word>-	내 글을 다른 유저가 퍼갔고, 다른 유저 알로그에서 누군가 내 글을 열람할 경우, 열람할 때마다 10알씩 광고수익이 생긴답니다. 그중 3알은 ㈜알통 본사로, 무료로 가져온 글의 경우, 나머지 7알에서 글의 원작자에게 5알, 내 글을 퍼간 유저에게 2알 이렇게 분배가 된답니다. 가치를 지불하고 퍼온 글의 경우에는, 글의 원작자에게 2알, 가치를 지불하고 글을 퍼간 유저에게 5알 이렇게 분배가 됩니다.</Word>
                </Tutorial>
        </SpaceTxt>  
        <Wrap>
            <LanguageCon>
                <Origin color={color} setColor={setColor} onClick={()=>{setColor(true)}}>{origin}</Origin><Line></Line><Ai color={color} setColor={setColor} onClick={()=>{setColor(false)}}>{ai}</Ai>
            </LanguageCon>
        <ButtonBox>
            <StyledBtn onClick={plus}>{allText[0]}<Count>{Contents[0].paste}</Count></StyledBtn>
            <StyledBtn onClick={plus2} >{allText[1]}<Count>{Contents[0].good}</Count></StyledBtn>
            <StyledBtn onClick={free}>{allText[2]}</StyledBtn>
        </ButtonBox>
        </Wrap>

        { open === true &&
        <CommentBox>
            <Commentdiv>
                <CommentInner>
                    <CommentTxt></CommentTxt>
                    <CommentSave>{savesave}</CommentSave>
                </CommentInner>
            </Commentdiv>
            <Commentdiv2>
                <CommentInner2>
                    <Left>
                        <ProImg src={userData.profileImg}></ProImg>
                        <Flag src={userData.flag}></Flag>
                        <Country>{userData.country}</Country>
                    </Left>
                    <Right>
                        <Reply>{rereply}</Reply>
                        <CommentInner3>
                            <Nick>{nick}</Nick>
                            <Hour>{realtime}</Hour>
                            <Emgc src={process.env.PUBLIC_URL + '/images/atm_more_3.svg'}></Emgc>
                            <Goood onClick={()=>{ goodShow(); }}>
                            { good === true 
                                ? <Good src={process.env.PUBLIC_URL + '/images/smile.svg'}></Good>
                                : <Good src={process.env.PUBLIC_URL + '/images/smile_red.svg'}></Good>
                            }
                            </Goood>
                            <Saad onClick={()=>{ sadShow(); }}>
                            { sad === true 
                                ? <Sad src={process.env.PUBLIC_URL + '/images/sad.svg'}></Sad>
                                : <Sad src={process.env.PUBLIC_URL + '/images/sad_red.svg'}></Sad>
                            }
                            </Saad>
                        </CommentInner3>
                    </Right>
                </CommentInner2>
                
            </Commentdiv2>
        </CommentBox>
        
        }

        </>
    );
};



export default AlpageContentsTutorial;

