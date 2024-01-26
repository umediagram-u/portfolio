import React from "react";

const experienceContent = [
  {
    year: "11.25.2023 - 05.19.2024",
    position: " MERN STACK Developer",
    compnayName: "STARTUP",
    details: `  This project is a real startup. You can see admin, instructor and user professional dashboards in the project. In order for the project to be at the international level, we have made it in 4 languages English, Uzbek, Turkish and Russian. To add payment methods, we used Stripe, one of the international companies. Students will be able to buy courses and also buy monthly VIP rates. Of course, instructors automatically send themselves to their cards within 24 hours of receiving their income. Of the profits, 70% for the instructor and 30% for the platform. Admin users, on the other hand, will be able to manage instructors. On the platform admin users can place paid books and users have to buy them PDF files to email addresses.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
