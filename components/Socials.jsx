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
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/profile.php?id=100031941365349",
  },
  {
    icon: <BiLogoInstagram />,
    path: "https://www.instagram.com/hritik_sharma_2004/",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/hritik-sharma-oct04/",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/hritik2004-cse",
  },
  {
    icon: <BiLogoYoutube />,
    path: "https://youtube.com/@hritik_is_coding",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        return (
          <Link
            href={items.path}
            target="_blank"
            key={index}
            className={iconStyles}
          >
            {items.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
