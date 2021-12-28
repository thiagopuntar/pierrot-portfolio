import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 15%;
    bottom: -3px;
    background-color: ${(props) =>
      props.isActive && props.theme.colors.secondary.dark};
    height: 3px;
    width: 70%;
  }

  &:hover {
    transform: scale(105%);
  }

  &:hover::after {
    content: "";
    position: absolute;
    left: 15%;
    bottom: -3px;
    background-color: ${(props) => props.theme.colors.secondary.dark};
    height: 3px;
    width: 70%;
  }

  ${(props) =>
    props.isActive &&
    `
    font-weight: 700;
  `}
`;

const MenuLink = ({ className, href, name }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href} className={className} passHref>
      <StyledA isActive={isActive}>{name}</StyledA>
    </Link>
  );
};

export default MenuLink;
