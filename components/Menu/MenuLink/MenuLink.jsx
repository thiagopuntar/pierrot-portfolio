import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { StyledA } from "./styles";

const MenuLink = ({ className, href, name, variant }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href} className={className} passHref>
      <StyledA variant={variant} isActive={isActive}>
        <span>{name}</span>
      </StyledA>
    </Link>
  );
};

export default MenuLink;
