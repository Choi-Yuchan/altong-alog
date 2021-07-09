import styled from 'styled-components';
import Alpage from '../alogPage/Alpage';
import AlogMainSearch from './AlogMainSearch';
import AlogProfile from '../alogprofile/AlogProfile';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  max-width:800px;
  margin:0 auto;
`;

function AlogPage({body, setBody, setNewGroup, newGroup, sample, checkList, setMyAlogSlide, myMainAlogSlide, opened, setOpened, bgSetting, setBgSetting, siren, setSiren}) {

  const Contents = [
  {
    id : 0,
    title: "튜토리얼",
    hunhun: "0",
    date: "2021.07.18",
    value: "0",
    state:"alog",
    paste:0,
    good:3
  },
  {
    id : 1,
    title: "대한 독립 만세",
    hunhun: "100,000",
    date: "2021.07.18",
    value: "100",
    text: "대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세대한 독립 만세",
    state:"alog",
    paste:8,
    good:81
  }];

  return (
    <Container>
      <Alpage body={body} setBody={setBody} newGroup={newGroup} setNewGroup={setNewGroup}
      sample={sample} checkList={checkList} myMainAlogSlide={myMainAlogSlide} setMyAlogSlide={setMyAlogSlide}
      opened={opened} setOpened={setOpened} bgSetting={bgSetting} setBgSetting={setBgSetting} siren={siren} setSiren={setSiren}
      />
      <AlogProfile />
      <AlogMainSearch/>
    </Container>
  );
};
 
export default AlogPage;


