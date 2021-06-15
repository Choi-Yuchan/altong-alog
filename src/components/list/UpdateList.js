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
    max-height:240px;
    background-color:#eee;
    padding:0.625em 0.5em;
    margin-top:0.625rem;
    overflow:scroll;
    display:none;
    height:100px;

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
    flex-direction:column;
    padding:0.625em 0.5em;
`;

const MentoTop = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`;

const MentoBot = styled.div`
    display:flex;
    justify-content:space-between;
    padding:0 0.5rem;

    @media(min-width:600px){
        padding:0 1.25rem;
    }
`;
const MentoImg = styled.img`
    width:40px;
    height:40px;
    padding-right:5px;
`;

const MentoID = styled.h5`
    font-size:0.75rem;
    font-weight:bold;
`;
const MentoText = styled.div`
    padding-right:0.5rem;
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
`;

const MentoTime = styled.p`
    font-size:0.625rem;
    text-align:right;
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
`;

const Arrow = styled.img`
    position:absolute;
    right:30px;
    width:20px;
    transform:rotate(90deg);
`;

export const UpdateList = ({title, mento, id, img, dataUrl, arrow}) => {
    const [isActive,setIsActive] = useState(false);
    const [isClose, setClose] = useState(true);

    const OpenList = () => {
        setIsActive(!isActive);
    }

    const close = (e) => {
        setClose(!isClose);
        e.nativeEvent.stopImmediatePropagation();
    }
    function exit() {
        document.getElementById("Con").style.display="none";
    }

    return(  
        <ActiveList onClick={OpenList}>
            <ListTitle>{title}<Arrow src={arrow}></Arrow></ListTitle>
            {isActive ? 
            (<ShowContent>
                {isClose ?
                (<Mento to={dataUrl} onClick={stop}>
                    <MentoTop onClick={exit}>
                        <MentoImg src={img} alt="프로필"></MentoImg>
                        <MentoText>
                            {mento}
                        </MentoText>
                        <CloseButton onClick={(e) => close(e)}/>
                    </MentoTop>
                    <MentoBot onClick={exit}>
                        <MentoID>{id}</MentoID>            
                        <MentoTime>10분 전</MentoTime>
                    </MentoBot>
                </Mento>) : (null)}
            </ShowContent>):(
                <Content></Content>
            )}       
        </ActiveList>   
    )
} 
