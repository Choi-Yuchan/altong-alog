import styled from 'styled-components';

const SideProfile = styled.div`
    width:100%;
    display:flex;
    padding-bottom:1rem;
    flex-direction:column;
    align-items:center;
`;
const ImageBox = styled.div`
  width:30vw;
  height:30vw;

  @media (min-width:480px){
      width:10vw;
      height:10vw;
  }
`;

const ProfileImage = styled.img`
  width:100%;
  height:100%;
  border-radius:50%;
`;
const UserGrade = styled.p`
    color:#FF4A4A;
    border:1px solid #FF4A4A;
    border-radius: 1rem;
    font-size: 0.5rem;
    padding: 0.325em 0.75em;
    margin: 0.1875rem 0;
`;
const IDBox = styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:0.625rem;
`;
const UserID = styled.h5`
    font-size:1rem;
    font-weight:bold;
`;

const UserCountry = styled.img`
padding-right:0.375em;
`;
const CountryCode = styled.p`
    font-size:1rem;
    font-weight:bold;
`;

const Profile = ({grade, id, code, profileImg, countryImg, profileAlt, countryAlt}) => {
    return(
        <SideProfile>
            <ImageBox>
                <ProfileImage src={profileImg} alt={profileAlt}></ProfileImage>
            </ImageBox>
            <UserGrade>{grade}</UserGrade>
            <IDBox>
                <UserCountry src={countryImg} alt={countryAlt}></UserCountry>
                <UserID>{id}</UserID>
            </IDBox>
            <CountryCode>{code}</CountryCode>
        </SideProfile>
    );   
}

export default Profile;