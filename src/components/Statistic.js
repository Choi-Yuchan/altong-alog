import styled from 'styled-components';

const StatsBox = styled.div`
  display:flex;
  flex-flow:column wrap;
  align-items:center;
  justify-content:center;
  flex:0.5;
  padding:0 0.5rem 1rem;
`;

const VisitorList = styled.ul`
    display:flex;
    flex-flow: column wrap;
    align-items:center;
    background-color:#efefef;
    border-radius:24px;
    width:86.66%;
    padding:1em 0.625rem;
`;

const List = styled.li`
    font-size: 0.875rem;
    padding-bottom:0.25rem;
    :last-child{
        padding-bottom:0;
    }

    @media (min-width:480px){
        padding-bottom:0.5rem;
    }
`;

const langStatistic = {
    ko:{
        listText:["총 방문자","어제 방문자","오늘 방문자"],
        persons:"명",
    }
}

export const Statistic = ({total, yesterday, today}) =>{
    const listText = langStatistic.ko.listText;
    const persons = langStatistic.ko.persons;

    return(
        <StatsBox>
            <VisitorList>
                <List>{listText[0]} : {total}{persons}</List>
                <List>{listText[1]} : {yesterday}{persons}</List>
                <List>{listText[2]} : {today}{persons}</List>
            </VisitorList>
        </StatsBox>
    );
};