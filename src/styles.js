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

export const ProfileStatusWrapper = styled.div`
  margin-left: 10px;
  width: 400px;
  background-color: white;
  border-radius: 2%;
`;

export const StyledProfileName = styled.h2`
  margin: 10px;
`;

export const StyledProfileStatus = styled.p`
  ::after {
    content: " 🦄";
  }
  margin: 10px;
`;

export const ProfileCommentsInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  min-height: 50px;
  max-width: 650px;
  background-color: white;
`;

export const StyledProfileInput = styled.input`
  margin: 10px;
  min-width: 500px;
  min-height: 25px;
  border: none;
`;

export const StyledProfileInputButton = styled.button`
  max-height: 50px;
  max-width: 80px;
`;

export const ProfileCommentWrapper = styled.div`
  margin-top: 10px;
  max-width: 650 px;
  min-height: 50px;
  background-color: white;
`;

export const StyledProfileComment = styled.span`
  display: inline-block;
  margin: 10px;
`;
