import {
  StyledProfileInfoSection,
  StyledProfilePhoto,
  ProfilePhotoWrapper,
  ProfileStatusWrapper,
  StyledProfileName,
  StyledProfileStatus,
} from "../styles";

export const ProfileInfo = () => {
  return (
    <StyledProfileInfoSection>
      <ProfilePhotoWrapper>
        <StyledProfilePhoto
          src="https://i.pinimg.com/originals/e8/83/7b/e8837b00067930f307a825c2ff74f3fa.jpg"
          alt="profile-photo"
        ></StyledProfilePhoto>
      </ProfilePhotoWrapper>
      <ProfileStatusWrapper>
        <StyledProfileName>Светлана Иванова</StyledProfileName>
        <StyledProfileStatus>Тут будет статус</StyledProfileStatus>
      </ProfileStatusWrapper>
    </StyledProfileInfoSection>
  );
};
