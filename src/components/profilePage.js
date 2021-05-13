import { ProfilePageWrapper } from "../styles";
import { ProfileInfo } from "./profileInfo";
import { ProfileComments } from "./profileComments";

export const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
      <ProfileInfo />
      <ProfileComments />
    </ProfilePageWrapper>
  );
};
