import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoYoutube,
} from "react-icons/bi";
import Link from "next/link";

const socials = [
  {
    icon: <BiLogoFacebook aria-hidden="true" />,
    path: "https://www.facebook.com/profile.php?id=100031941365349",
    label: "Facebook",
  },
  {
    icon: <BiLogoInstagram aria-hidden="true" />,
    path: "https://www.instagram.com/hritik_sharma_2004/",
    label: "Instagram",
  },
  {
    icon: <BiLogoLinkedin aria-hidden="true" />,
    path: "https://www.linkedin.com/in/hritik-sharma-oct04/",
    label: "LinkedIn",
  },
  {
    icon: <BiLogoGithub aria-hidden="true" />,
    path: "https://github.com/hritik2004-cse",
    label: "GitHub",
  },
  {
    icon: <BiLogoYoutube aria-hidden="true" />,
    path: "https://youtube.com/@hritik_is_coding",
    label: "YouTube",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles} role="list" aria-label="Social media links">
      {socials.map((items, index) => {
        return (
          <Link
            href={items.path}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={iconStyles}
            aria-label={`Visit Hritik on ${items.label}`}
            role="listitem"
          >
            {items.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
