import styled from 'styled-components';
import { useTranslation } from 'react-i18next';


export const Statistic = ({total, yesterday, today}) =>{

    const {t} = useTranslation();
    const listText = t('Visitors');
    const totals = total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const yesterdays = yesterday.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const todays = today.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    return(
        <StatsBox>
            <VisitorList>
                <List>{listText[0]} : {totals}{listText[3]}</List>
                <List>{listText[1]} : {yesterdays}{listText[3]}</List>
                <List>{listText[2]} : {todays}{listText[3]}</List>
            </VisitorList>
        </StatsBox>
    );
};

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
