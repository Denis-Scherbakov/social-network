import { NavigationMenu } from "./navigationMenu";
import { ProfilePage } from "./profilePage";
import { MainPageWrapper } from "../styles";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const MainPage = () => {
  return (
    <Provider store={store}>
      <MainPageWrapper>
        <NavigationMenu />
        <ProfilePage />
      </MainPageWrapper>
    </Provider>
  );
};
