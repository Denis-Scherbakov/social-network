import { NavigationMenu } from "./navigationMenu";
import { ProfilePage } from "./profilePage";
import { MainPageWrapper } from "../styles";

export const MainPage = () => {
  return (
    <MainPageWrapper>
      <NavigationMenu />
      <ProfilePage />
    </MainPageWrapper>
  );
};
