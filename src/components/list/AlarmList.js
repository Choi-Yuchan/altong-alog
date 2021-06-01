import { useState } from 'react';
import styled from 'styled-components';
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
const Alarm = styled.div`
    background-color:#fefefe;
    border:1px solid #707070;
    border-radius: 15px;
    display:flex;
    flex-direction:column;
    padding:0.625em 0.5em;
`;

const AlarmTop = styled.div`
    display:flex;
    align-items:center;
`;
const AlarmText = styled.div`
    padding-right:0.5rem;
    font-size:0.875rem;
    text-align:left;
    white-space:normal;
    overflow:hidden;
    text-overflow:ellipsis;
    line-height: 1.2; 
    height: 2.4em;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
`;

const AlarmTime = styled.p`
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

export const AlarmList = ({title, alarm}) => {
    const [isActive, setIsActive] = useState(false);
    const [isClose, setClose] = useState(true);

    const OpenList = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    };

    const close = (e) => {
        setClose(!isClose);
        e.nativeEvent.stopImmediatePropagation();
    }

    return(  
        <ActiveList onClick={OpenList} >
            <ListTitle>{title}</ListTitle>
            {isActive ? 
            (<ShowContent>
                {isClose ? 
                (<Alarm onClick={stop}>
                    <AlarmTop>
                        <AlarmText>
                            {alarm}
                            </AlarmText>
                        <CloseButton onClick={(e) => close(e)}></CloseButton>
                    </AlarmTop>            
                    <AlarmTime>10분 전</AlarmTime>
                </Alarm>):(null)}
            </ShowContent>):(
                <Content></Content>
            )}       
        </ActiveList>   
    )
} 
