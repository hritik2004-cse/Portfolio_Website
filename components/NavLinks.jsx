"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name:"home",
    path: "/"
  },
  {
    name:"about",
    path: "/about"
  },
  {
    name:"portfolio",
    path: "/portfolio"
  },
  {
    name:"experience",
    path: "/experience"
  },
  {
    name:"contact",
    path: "/contact"
  }
];

const NavLinks = ({containerStyles}) => {

  const pathname = usePathname();
  return(
    <ul className={containerStyles} role="list">
      {links.map((link,index)=>{
        const isActive = pathname === link.path;
        const charLength = link.name.length;
        const lineWidth = charLength > 5 ? "after:w-[120%]":"after:w-[90%]";
        return (
          <li key={index} role="listitem">
            <Link
              href={link.path}
              className={`relative text-lg uppercase text-white ${isActive && `${lineWidth} bg-accent rounded-xl px-[12px] py-[8px]`}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span>
                {link.name}
              </span> 
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks
