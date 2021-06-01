import React, { useState } from 'react';
import styled from 'styled-components';
import HunPopup from '../../HunPopup';

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
    margin-bottom:3.5rem;

    @media all and (min-width:500px){
        margin-bottom:5.5rem;
    }
    @media all and (min-width:600px){
        margin-bottom:7rem;
    } 
`;      

const StyledBtn = styled.button`
    margin-top:30px;
    font-size:0.625rem;
    width:60px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 15px;
    padding: 5px 10px;
    background-color:#fefefe;
    box-sizing:border-box;
    :not(:last-child){
    margin-right:10px;
    position: relative;
    cursor:pointer;
    outline:none;
    }
`;

const Hun = styled(StyledBtn)`
    width:80px;
    outline:none;
    cursor: pointer;
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

const HunHun=styled.img`
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



const langSpace = {
    ko:{
        //고정
        allText : ["퍼가기","좋아요","댓글","훈훈알주기"],

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





function Space() {

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


    return (
        <>
        
        <SpaceTxt>
            Lorem Ipsum is simply dummy text of the print in
            g and typesetting industry.  Lorem Ipsum has bee
            n the industry's standard dummy text ever since t
            he 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but 
            also the leap into electronic typesetting, remaini
            ng essentially unchanged. It was popularise in th
            e 1960s with the release of Letraset sheets contai
            ning Lorem Ipsum passages, and more recently w 
            th desktop publishing software like Aldus PageMa
            ker including versions of Lorem IpsumLorem I
            psum is simply dummy text of the printing and ty
            pesetting industry. Lorem Ipsum has been the ind
            ustry's standard dummy text ever since the 1500s,
            when an unknown printer ook a galley of type an
            d scrambled it to make a type specimen book. 
            It has survived sheets containing Lorem Ipsum pa
            ssages, and more recently with desktop publishin
            g software l ike Aldus PageMaker including versio
            ns of Lorem Ipsum 
        </SpaceTxt>
        
        <ButtonBox>
            <StyledBtn onClick={plus}>{allText[0]}<Count>{count}</Count></StyledBtn>
            <StyledBtn onClick={plus2} >{allText[1]}<Count> {count2}</Count></StyledBtn>
            <StyledBtn onClick={free}>{allText[2]}</StyledBtn>
            <Hun onClick={ Opener }>{allText[3]}</Hun>
            <HunPopup hunAl = {Open} setHunAl = {SetOpen}></HunPopup>
        </ButtonBox>

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
                            <HunHun onClick={ () => { SetOpen(!Open) } } src={process.env.PUBLIC_URL + '/images/answer_almoney.svg'}></HunHun>
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



export default Space;

