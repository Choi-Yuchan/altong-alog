import styled from 'styled-components';
import { AlarmList } from './list/AlarmList';
import { MentoList } from './list/MentoList';
import { VisitedList } from './list/VisitedList';
import { UpdateList} from './list/UpdateList';


const Partition = styled.div`
  width:100%;
  display:flex;
  padding-bottom:1rem;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  flex:0.5;
`;
const AlogList = styled.ul`
    display:flex;
    flex-flow:column wrap;
    align-items:center;
    width:100%;
    text-align:center;
    font-weight:bold;
`;

const ListNav = ({title, alarmArray, mentoID, mento, mentoImg, mentoHome, dataUrl, arrow, closeNav}) => {

    return(
        <Partition>
            <AlogList>
                <AlarmList title={title[0]} alarmArray={alarmArray} arrow={arrow} closeNav={closeNav}></AlarmList>
                <UpdateList title={title[1]} id={mentoID} img={mentoImg} mento={mento} dataUrl={dataUrl} arrow={arrow}></UpdateList>
                <MentoList title={title[2]} id={mentoID} img={mentoImg} home={mentoHome} arrow={arrow}></MentoList>
                <VisitedList title={title[3]} id={mentoID} img={mentoImg} mento={mento} dataUrl={dataUrl} arrow={arrow}></VisitedList>  
            </AlogList>
        </Partition>
    );
}

export default ListNav;