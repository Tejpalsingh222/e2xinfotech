// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "E2X Infotech Pvt Ltd",
    image: logoCT,
    // route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://m.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "/pages/landing-pages/about-us", },
        { name: "blog",route:"/pages/landing-pages/author", },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us",route:"/pages/landing-pages/contact-us"},
      ],
    } ,
    {
      name: "company",
      items: [
        { name: "Home", route: "/pages/landing-pages/main-page", },
      ],
    },
  ],
  copyright: (
    <MKTypography variant='button' fontWeight='regular'>
      All rights reserved. Copyright &copy; {date} E2X INFOTECH{" "}
      <MKTypography
        component='a'
        // href='https://www.creative-tim.com'
        target='_blank'
        rel='noreferrer'
        variant='button'
        fontWeight='regular'
      >
        {/* Creative Tim */}
      </MKTypography>
    </MKTypography>
  ),
};