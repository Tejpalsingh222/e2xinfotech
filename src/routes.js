
import Icon from "@mui/material/Icon";


import GitHubIcon from "@mui/icons-material/GitHub";


import Home from "frantend/landingpage/Home"
import AboutUs from "frantend/landingpage/AboutUs";
import ContactUs from "frantend/landingpage/ContactUs";
import Author from "pages/LandingPages/Author";
// import SignIn from "layouts/pages/authentication/sign-in";


// // Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
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
            name: "Home",
            route: "/pages/landing-pages/main-page",
            component: <Home title="home" />,
          },
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs title="about" />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Blog ",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      // {
      //   name: "account",
      //   collapse: [
      //     {
      //       name: "sign in",
      //       route: "/pages/authentication/sign-in",
      //       component: <SignIn />,
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   name: "sections",
  //   icon: <Icon>view_day</Icon>,
  //   collapse: [
  //     {
  //       name: "page sections",
  //       description: "See all sections",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "page headers",
  //           // route: "/sections/page-sections/page-headers",
  //           component: <PageHeaders />,
  //         },
  //         {
  //           name: "features",
  //           // route: "/sections/page-sections/features",
  //           component: <Features />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "navigation",
  //       description: "See all navigations",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "navbars",
  //           // route: "/sections/navigation/navbars",
  //           component: <Navbars />,
  //         },
  //         {
  //           name: "nav tabs",
  //           // route: "/sections/navigation/nav-tabs",
  //           component: <NavTabs />,
  //         },
  //         {
  //           name: "pagination",
  //           // route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "input areas",
  //       description: "See all input areas",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "inputs",
  //           // route: "/sections/input-areas/inputs",
  //           component: <Inputs />,
  //         },
  //         {
  //           name: "forms",
  //           // route: "/sections/input-areas/forms",
  //           component: <Forms />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "docs",
  //   icon: <Icon>article</Icon>,
  //   collapse: [
  //     {
  //       name: "getting started",
  //       description: "All about overview, quick start, license and contents",
  //       // href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
  //     },
  //     {
  //       name: "foundation",
  //       description: "See our colors, icons and typography",
  //       // href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
  //     },
  //     {
  //       name: "components",
  //       description: "Explore our collection of fully designed components",
  //       // href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
  //     },
  //     {
  //       name: "plugins",
  //       description: "Check how you can integrate our plugins",
  //       // href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
  //     },
  //   ],
  // },
  // {
  //   name: "Login",
  //   route: "http://localhost:3000/pages/authentication/sign-in",
  // },

];

export default routes;
