import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stop } from '../function/stop';

const ActiveList = styled.li`
    padding: 0.625rem 0;
    font-size:1rem;
    border-top:1px solid #f0f0f0;
    width:100%;
    cursor:pointer;
    :last-child{
        border-bottom:1px solid #f0f0f0;
    }
`;
const ListTitle = styled.p`
    :hover,:active,:focus{
    color:#FF4A4A;
    font-weight:bold;
    }
`;
const Content = styled.div`
    max-height:140px;
    background-color:#eee;
    padding:0.625em 0.5em;
    margin-top:0.625rem;
    overflow:scroll;
    display:none;
    height:140px;
    
    ::-webkit-scrollbar {
    display: none; 
}
    @media (min-width: 480px){
        max-height:300px;
    }
`;

const ShowContent = styled(Content)`
    display:block;
`;

const Mento = styled(Link)`
    color:#707070;
    text-decoration:none;
    background-color:#fefefe;
    border:1px solid #707070;
    border-radius: 15px;
    display:flex;
    padding:0.625em 0.5em;
    margin-bottom:10px;
`;
const MentoImgDiv = styled.div`
    flex-basis:20%;
`;
const MentoImg = styled.img`
    width:40px;
    height:40px;
    padding-right:5px;
    border-radius:50%;
`;

const MentoID = styled.h5`
    font-size:0.75rem;
    font-weight:bold;
    flex-basis: 25%;
    line-height:3.5;
    white-space:normal;
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
`;
const MentoText = styled.div`
    font-size:0.75rem;
    font-weight:bold;
    text-align:left;
    white-space:normal;
    overflow:hidden;
    text-overflow:ellipsis;
    line-height: 1.2; 
    height: 1.2em;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    margin-top:5px;
`;

const MentoTime = styled.p`
    font-size:0.625rem;
    text-align:right;
    margin-top:5px;
`;

const CloseButton = styled.button`
    display:block;
    color:#bebebe;
    border-radius:50%;
    border-style:none;
    background:url(${process.env.PUBLIC_URL + `/images/close-button.svg`}) center;
    background-repeat:no-repeat;
    width:1rem;
    height:1rem;
    margin-top:-5px;
    cursor:pointer;
`;

const Arrow = styled.img`
    position:absolute;
    right:30px;
    width:20px;
    transform:rotate(90deg);
`;

const RightPart = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    flex-basis: 55%;
`;

export const VisitedList = ({title, visited, arrow, closeNav}) => {
    const [isActive,setIsActive] = useState(false);
    const [isClose, setClose] = useState(true);

    const OpenList = () => {
        setIsActive(!isActive);
    }

    const close = (e) => {
        setClose(!isClose);
        e.nativeEvent.stopImmediatePropagation();
    }
    const [visit, setVisit] = useState(visited);
    const onRemove = (id) => {
        setVisit(visit.filter(visit => visit.id !== id));
    }

    return(  
        <ActiveList onClick={OpenList}>
            <ListTitle>{title}<Arrow src={arrow}></Arrow></ListTitle>
            {isActive ? 

            (<ShowContent>
                {isClose &&
                visit.map((visited)=>{
                    return(
                        <Mento to={visited.dataUrl} onClick={(e)=>{e.stopPropagation(); closeNav()}}>
                            <MentoImgDiv><MentoImg src={visited.profile} alt="프로필"></MentoImg></MentoImgDiv>
                            <MentoID>{visited.nickname}</MentoID>
                            <RightPart>
                                <CloseButton onClick={(e) => {stop(e); e.preventDefault(); onRemove(visited.id)}}/>  
                                <MentoText>"{visited.data}"</MentoText>
                                <MentoTime>{visited.time}{visited.minutes}</MentoTime>
                            </RightPart>
                        </Mento>
                    )})
                }
            </ShowContent>):(
                <Content></Content>
            )}       
        </ActiveList>   
    )
} 
