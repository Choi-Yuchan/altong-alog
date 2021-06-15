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


    return(
        <Partition>
            <AlogList>
            </AlogList>
        </Partition>
    );
}

export default ListNav;