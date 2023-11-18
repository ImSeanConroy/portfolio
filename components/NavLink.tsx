import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  exact: boolean;
  children: ReactNode;
  [key: string]: any;
}

const NavLink = ({ href, exact, children, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const active = " nav-link";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += active;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
