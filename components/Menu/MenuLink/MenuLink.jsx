import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { StyledA } from "./styles";

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
