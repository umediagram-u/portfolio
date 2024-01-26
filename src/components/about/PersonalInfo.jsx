import React from "react";

const date = new Date();

const personalInfoContent = [
  { meta: "first name", metaInfo: "Usmonjon", hasColor: "" },
  { meta: "last name", metaInfo: "Hasanov", hasColor: "" },
  { meta: "Age", metaInfo: date.getFullYear() - 2007 + " Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Uzbek", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Uzbekistan", hasColor: "" },
  { meta: "phone", metaInfo: "+998-(90)-193-1320", hasColor: "" },
  { meta: "Email", metaInfo: "usmonjonhasanov777@mail.com", hasColor: "" },
  { meta: "Telegram", metaInfo: " @DevMERN", hasColor: "" },
  { meta: "langages", metaInfo: "Uzbek, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
