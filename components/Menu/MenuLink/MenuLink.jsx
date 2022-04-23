import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { StyledA } from "./styles";

const MenuLink = ({
  className,
  href,
  name,
  variant,
  onMouseEnter,
  onMouseLeave,
}) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  if (href) {
    return (
      <li>
        <Link href={href} className={className} passHref>
          <StyledA
            variant={variant}
            isActive={isActive}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {name}
          </StyledA>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <StyledA
        variant={variant}
        isActive={isActive}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {name}
      </StyledA>
    </li>
  );
};

export default MenuLink;
