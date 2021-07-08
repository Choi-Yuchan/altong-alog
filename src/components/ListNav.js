import styled from 'styled-components';
import { AlarmList } from './hamburgerList/AlarmList';
import { MentoList } from './hamburgerList/MentoList';
import { VisitedList } from './hamburgerList/VisitedList';
import { UpdateList} from './hamburgerList/UpdateList';


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

const ListNav = ({title, arrow, closeNav, usersRefund, usersModify, usersReply, usersPaste, usersHun, usersMessage, usersMento}) => {

    return(
        <Partition>
            <AlogList>
                <AlarmList title={title[0]} arrow={arrow} closeNav={closeNav} usersHun={usersHun} usersRefund={usersRefund} usersModify={usersModify} usersMento={usersMento} usersReply={usersReply} usersPaste={usersPaste} usersMessage={usersMessage}></AlarmList>
                <UpdateList title={title[1]} arrow={arrow} closeNav={closeNav}></UpdateList>
                <MentoList title={title[2]} arrow={arrow} closeNav={closeNav}></MentoList>
                <VisitedList title={title[3]} arrow={arrow} closeNav={closeNav}></VisitedList>  
            </AlogList>
        </Partition>
    );
}

export default ListNav;