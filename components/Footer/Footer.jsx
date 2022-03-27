import React from "react";
import { BsMedium, BsLinkedin, BsDribbble } from "react-icons/bs";
import { linkedinLink, mediumLink, resume } from "../../constants/links";
import {
  Name,
  ProfileWrapper,
  SocialWrapper,
  StyledButton,
  SocialAnchor,
  StyledMenu,
  Title,
  Wrapper,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Title>
        <Name>Thiago Castro</Name>
        <StyledButton
          variant="outlined"
          onClick={() => window.open(resume, "_blank")}
        >
          Baixe o currículo
        </StyledButton>
      </Title>
      <ProfileWrapper>
        <StyledMenu />
        <SocialWrapper>
          <li>
            <SocialAnchor href={linkedinLink} target="_blank" rel="noreferrer">
              <span>Linkedin</span>
              <BsLinkedin />
            </SocialAnchor>
          </li>
          <li>
            <SocialAnchor href={mediumLink} target="_blank" rel="noreferrer">
              <span>Medium</span>
              <BsMedium />
            </SocialAnchor>
          </li>
          <li>
            <SocialAnchor href={mediumLink} target="_blank" rel="noreferrer">
              <span>Dribble</span>
              <BsDribbble />
            </SocialAnchor>
          </li>
        </SocialWrapper>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Footer;
