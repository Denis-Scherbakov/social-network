import { useState } from "react";
import { addComment } from "./redux/slices";
import { useDispatch, useSelector } from "react-redux";
import {
  ProfileCommentsInputWrapper,
  StyledProfileInput,
  ProfileCommentWrapper,
  StyledProfileComment,
  StyledProfileInputButton,
} from "../styles";

export const ProfileComments = () => {
  const [commentsInput, setCommentsInput] = useState([""]);

  const dispatch = useDispatch();
  const userComments = useSelector((state) => state.commentsReducer);

  return (
    <section>
      <ProfileCommentsInputWrapper>
        <StyledProfileInput
          value={commentsInput}
          placeholder="Whats new?"
          onChange={(event) => setCommentsInput(event.target.value)}
        ></StyledProfileInput>
        <StyledProfileInputButton
          onClick={() =>
            dispatch(addComment(commentsInput), setCommentsInput(""))
          }
        >
          Отправить
        </StyledProfileInputButton>
      </ProfileCommentsInputWrapper>
      {userComments.map((item) => (
        <ProfileCommentWrapper>
          <StyledProfileComment>{item}</StyledProfileComment>
        </ProfileCommentWrapper>
      ))}
    </section>
  );
};
