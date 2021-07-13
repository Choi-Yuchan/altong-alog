import styled from 'styled-components';
import Alpage from '../alogPage/Alpage';
import AlogProfile from '../alogprofile/AlogProfile';
import PrevNextContents from '../alogPage/PrevNextContents';

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  max-width:800px;
  margin:0 auto;
`;

function AlogPage({body, setBody, setNewGroup, newGroup, sample, checkList, setMyAlogSlide, myMainAlogSlide, opened, setOpened, bgSetting, setBgSetting, siren, setSiren, showBgEdit, setShowBgEdit}) {

  return (
    <Container>
      <Alpage body={body} setBody={setBody} newGroup={newGroup} setNewGroup={setNewGroup}
      sample={sample} checkList={checkList} myMainAlogSlide={myMainAlogSlide} setMyAlogSlide={setMyAlogSlide}
      opened={opened} setOpened={setOpened} bgSetting={bgSetting} setBgSetting={setBgSetting} siren={siren} setSiren={setSiren}
      setShowBgEdit={setShowBgEdit} showBgEdit={showBgEdit}
      />
      <AlogProfile />
      <PrevNextContents sample={sample} />
    </Container>
  );
};
 
export default AlogPage;


