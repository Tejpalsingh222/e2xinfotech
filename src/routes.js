
import Icon from "@mui/material/Icon";
import Home from "frantend/landingpage/Home"
import AboutUs from "frantend/landingpage/AboutUs";


import ContactUs from "frantend/landingpage/ContactUs";
import Author from "frantend/landingpage/Author/index";

import Career from "frantend/landingpage/Career/index";


const routes =
   [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
           {
            name: "HOME",
            route: "/pages/landing-pages/main-page",
            component: <Home title="home" />,
          },
          {
            name: "ABOUT US",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs title="about" />,
          },
          {
            name: "CONTACT US",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "BLOG ",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "Career",
            route: "/pages/landing-pages/Career",
            component: <Career />,
          },
        ],
      },
    ],
  },
];

export default routes;
