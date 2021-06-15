import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    @media (min-width: 480px){
        max-height:300px;
    }
`;

const ShowContent = styled(Content)`
    display:block;
`;

const SearchBar = styled.form`
    position:relative;
`;
const Search = styled.input`
    width:90%;
    height:30px;
    background-color:transparent;
    border-style:none;
    border-bottom:1px solid #707070;

    :focus, :active{
        outline:none;
    }
`;

const Mglass = styled.div`
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    width:30px;
    height:30px;
    background:center / contain no-repeat url(${process.env.PUBLIC_URL+'/images/nicksearch.svg'});
`;

const List = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const MentoProfile = styled(Link)`
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 0.5em 0 0.375em 0.5em;
    text-decoration: none;
    color:#707070;
    width:45%;
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

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
       console.log(e.target.value);
    }
    return { value, onChange };
};

const Arrow = styled.img`
    position:absolute;
    right:30px;
    width:20px;
    transform:rotate(90deg);
`;
export const MentoList = ({title, id, img, home, arrow}) => {
    const [isActive,setIsActive] = useState(false);

    const OpenList = () => {
        setIsActive(!isActive);
    }

    const stop = e => {
        e.stopPropagation();
    }

    const name = useInput("");

    const onSubmit = (e) => {
        e.stopPropagation();
        console.log("submitted search result!");
    }

    function exit() {
        document.getElementById("Con").style.display="none";
    }


    return(  
        <ActiveList onClick={() => OpenList()
        }>
            <ListTitle>{title}<Arrow src={arrow}></Arrow></ListTitle>
            {isActive ? 
            (<ShowContent>
                <SearchBar onClick={stop}>
                    <Search placeholder="search" {...name}>
                    </Search>
                    <Mglass onClick={onSubmit}></Mglass>
                </SearchBar>
                <List>
                    <MentoProfile to={home} onClick={stop}>
                        <MentoImg src={img} alt="프로필" onClick={exit}></MentoImg>
                        <MentoID onClick={exit}>{id}</MentoID>
                    </MentoProfile>
                    <MentoProfile to={home} onClick={stop}>
                        <MentoImg src={img} alt="프로필" onClick={exit}></MentoImg>
                        <MentoID onClick={exit}>{id}</MentoID>
                    </MentoProfile>
                    <MentoProfile to={home} onClick={stop}>
                        <MentoImg src={img} alt="프로필" onClick={exit}></MentoImg>
                        <MentoID onClick={exit}>{id}</MentoID>
                    </MentoProfile>
                    <MentoProfile to={home} onClick={stop}>
                        <MentoImg src={img} alt="프로필" onClick={exit}></MentoImg>
                        <MentoID onClick={exit}>{id}</MentoID>
                    </MentoProfile>
                    <MentoProfile to={home} onClick={stop}>
                        <MentoImg src={img} alt="프로필" onClick={exit}></MentoImg>
                        <MentoID onClick={exit}>{id}</MentoID>
                    </MentoProfile>
                </List>
            </ShowContent>):(
                <Content></Content>
            )}       
        </ActiveList>   
    )
} 
