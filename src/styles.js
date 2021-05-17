import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #EDEEF0;
  }
`;

export const MainPageWrapper = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  max-width: 800px;
`;

export const StyledNavigation = styled.nav`
  font-size: 20px;
  margin-left: 10px;
`;

export const StyledNavigationItem = styled.li`
  list-style: none;
  margin-top: 10px;
`;

export const ProfilePageWrapper = styled.div`
  margin-left: 10px;
`;

export const StyledProfileInfoSection = styled.section`
  display: flex;
`;

export const ProfilePhotoWrapper = styled.div`
  max-width: 300px;
  min-width: 200px;
  background-color: white;
  border-radius: 2%;
`;

export const StyledProfilePhoto = styled.img`
  margin: 10px;
  width: 200px;
  background-size: cover;
`;

export const ProfileDataWrapper = styled.div`
  margin-left: 10px;
  width: 400px;
  background-color: white;
  border-radius: 2%;
`;

export const StyledProfileData = styled.div``;

export const StyledProfileDataName = styled.h2`
  margin: 10px;
`;

export const StyledProfileDataStatus = styled.p`
  ::after {
    content: " 🦄";
  }
  margin: 10px;
`;
