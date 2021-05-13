import { StyledNavigation, StyledNavigationItem } from "../styles";

export const NavigationMenu = () => {
  return (
    <StyledNavigation>
      <StyledNavigationItem>Моя страница</StyledNavigationItem>
      <StyledNavigationItem>Новости</StyledNavigationItem>
      <StyledNavigationItem>Мессенджер</StyledNavigationItem>
      <StyledNavigationItem>Друзья</StyledNavigationItem>
    </StyledNavigation>
  );
};
