import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Span, StyledA } from "./styles";

const MenuLink = ({ className, href, name, variant }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href} className={className} passHref>
      <StyledA variant={variant}>
        <Span isActive={isActive}>{name}</Span>
      </StyledA>
    </Link>
  );
};

export default MenuLink;
