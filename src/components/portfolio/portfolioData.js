import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";
import Image7 from "../../../public/assets/img/portfolio/project-7.jpg";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "mockup project",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Startup",
        language: "NextJS, TypeScript, I18next, Stripe, Redux toolkit, Redux thunk, Formik, Yup, Next auth, ChartJS, Admin, Instructor and User dashboards, Graphql, Hygraph, SSR, SEO, friendly, High Order Components, Layouts",
        preview: "edu-usm.vercel.app",
        link: "https://edu-usm.vercel.app",
      },
    ],
  },
];

export default PortfolioData;
