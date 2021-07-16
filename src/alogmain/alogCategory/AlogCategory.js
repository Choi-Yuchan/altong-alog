import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AlogCategoryEl from './AlogCategoryEl';
import AlogCategoryList from './AlogCategoryList';
import { useTranslation } from 'react-i18next';


function AlogCategory(props) {

    const {t} = useTranslation();
    const categorySample = props.categorySample;
    const langTitle = t('Category_Option');
    const [isShow, setShow] = useState(false);
    const showMenu = (e) => {
        e.preventDefault();
        setShow(!isShow);
    }

    const [name, changeName] = useState(0);
    const [highlight, setHighlight] = useState(0);

    function sortHour(){ 
        props.alogCategoryList0.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList1.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList2.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList3.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList4.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList5.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList6.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList7.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList8.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList9.sort(function(a, b){
        return a.hour - b.hour;
        });
        props.alogCategoryList10.sort(function(a, b){
        return a.hour - b.hour;
        });
    }
    function sortInquire(){ 
        props.alogCategoryList0.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList1.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList2.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList3.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList4.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList5.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList6.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList7.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList8.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList9.sort(function(a, b){
        return b.inquire - a.inquire;
        });
        props.alogCategoryList10.sort(function(a, b){
        return b.inquire - a.inquire;
        });
    }
    function sortGood(){ 
        props.alogCategoryList0.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList1.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList2.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList3.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList4.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList5.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList6.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList7.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList8.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList9.sort(function(a, b){
        return b.good - a.good;
        });
        props.alogCategoryList10.sort(function(a, b){
        return b.good - a.good;
        });
    }
    function sortTake(){ 
        props.alogCategoryList0.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList1.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList2.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList3.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList4.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList5.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList6.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList7.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList8.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList9.sort(function(a, b){
        return b.take - a.take;
        });
        props.alogCategoryList10.sort(function(a, b){
        return b.take - a.take;
        });
    }
    function sortHun(){ 
        props.alogCategoryList0.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList1.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList2.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList3.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList4.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList5.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList6.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList7.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList8.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList9.sort(function(a, b){
        return b.hun - a.hun;
        });
        props.alogCategoryList10.sort(function(a, b){
        return b.hun - a.hun;
        });
    }

  
        useEffect(()=>{
            sortHour();
        },[]);

    return (
        <CategoryWrap>
            <CategoryTitle>{props.title}</CategoryTitle>
            <Sort onClick={showMenu}>
            {isShow ? 
                    <DropdownBox>
                        <DropList onClick={ ()=>{ changeName(0); sortHour() } }>{langTitle[0]}</DropList>
                        <DropList onClick={ ()=>{ changeName(1); sortInquire() } }>{langTitle[1]}</DropList>
                        <DropList onClick={ ()=>{ changeName(2); sortGood() } }>{langTitle[2]}</DropList>
                        <DropList onClick={ ()=>{ changeName(3); sortTake() } }>{langTitle[3]}</DropList>
                        <DropList onClick={ ()=>{ changeName(4); sortHun() } }>{langTitle[4]}</DropList>
                    </DropdownBox> 
                    : 
                    <ShowBox>
                        <TabContent name={name} langTitle={langTitle}/>
                    </ShowBox>
                    }
            </Sort>
            <CategoryBox >
                {categorySample.map( (category, index) => {
                    return (
                    <AlogCategoryEl  imgList={category} key={category.id} highlight={highlight} setHighlight={setHighlight}
                      selected={index} />
                    )
                })}
            </CategoryBox>
            <CategoryListBox>
                <ContentsBox highlight={highlight} setHighlight={setHighlight} alogCategoryList0={props.alogCategoryList0} alogCategoryList1={props.alogCategoryList1} alogCategoryList2={props.alogCategoryList2} alogCategoryList3={props.alogCategoryList3} alogCategoryList4={props.alogCategoryList4} alogCategoryList5={props.alogCategoryList5} alogCategoryList6={props.alogCategoryList6} alogCategoryList7={props.alogCategoryList7} alogCategoryList8={props.alogCategoryList8} alogCategoryList9={props.alogCategoryList9} alogCategoryList10={props.alogCategoryList10} />
            </CategoryListBox>
        </CategoryWrap>
    );
}

function TabContent(props){
    if (props.name === 0){
      return <DropList>{props.langTitle[0]}<Triangle/></DropList>
    } else if (props.name === 1){
      return <DropList>{props.langTitle[1]}<Triangle/></DropList>
    } else if (props.name === 2){
      return <DropList>{props.langTitle[2]}<Triangle/></DropList>
    } else if (props.name === 3){ 
       return <DropList>{props.langTitle[3]}<Triangle/></DropList>
    } else if (props.name === 4){ 
       return <DropList>{props.langTitle[4]}<Triangle/></DropList>
    } else { 
        return <DropList>{props.langTitle[0]}<Triangle/></DropList>
    }
}

function ContentsBox(props){
    if(props.highlight === 0){
        return(
        <>
        {
            props.alogCategoryList0.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 1){
        return(
        <>
        {
            props.alogCategoryList1.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 2){
        return(
        <>
        {
            props.alogCategoryList2.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 3){
        return(
        <>
        {
            props.alogCategoryList3.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 4){
        return(
        <>
        {
            props.alogCategoryList4.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 5){
        return(
        <>
        {
            props.alogCategoryList5.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 6){
        return(
        <>
        {
            props.alogCategoryList6.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 7){
        return(
        <>
        {
            props.alogCategoryList7.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 8){
        return(
        <>
        {
            props.alogCategoryList8.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 9){
        return(
        <>
        {
            props.alogCategoryList9.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }else if(props.highlight === 10){
        return(
        <>
        {
            props.alogCategoryList10.map(list => (
            <AlogCategoryList cateList={list} key={list.id}></AlogCategoryList>
            ))
        }
        </>
        )
    }
}

const Sort = styled.nav`
    display:flex;
    width: 100px;
    height:30px;
    position: absolute;
    right:0; top:-7px;
    align-items:center;
    justify-content:space-around;
    border-radius:5px;
    background-color:#fefefe;

    @media all and (max-width:400px){
        position: relative;
        margin:0 auto;
    }
`;

const DropdownBox = styled.ul`
    width: 100px; height:30px;
    background-color:#fefefe;
    font-size:0.75rem;
    font-weight:bold;
    z-index:2;
`;

const ShowBox = styled(DropdownBox)`
    height: auto;
`;

const DropList = styled.li`
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #888;
    background-color:#fefefe;
    padding: 0.625rem 1rem;

    :hover{
        background-color:#bebebe;
    }
`;

const Triangle = styled.div`
    margin-left:4px;
    border: 7px solid transparent;
    border-bottom-width:0;
    border-top-color:#FE607E;
`;

const CategoryWrap = styled.div`
    width:95%;
    max-width:800px;
    margin:0 auto;
    position:relative;
`;
const CategoryTitle = styled.p`
    text-align:center;
    margin:35px 0 23px;
    font-weight:bold;
    font-size:15px;
    color:#707070;

    @media (min-width:480px) {
        font-size:18px;
    }
`;
const CategoryBox = styled.ul`
    width:100%;
    padding:0;
    margin:0;
    list-style: none;
    display:flex;
    justify-content: space-between;
    height:6vh;
    margin-bottom:40px;
`;
const CategoryListBox = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

export default AlogCategory;