import React from "react";
import "./index.css";
import Email from "../../Components/Email/index";
import { motion as m } from "framer-motion";

function ContactPage() {
  interface ContactSectionProps {
    title: string;
    logo: { name: string; path: string };
    link: string;
  }

  const contactData: ContactSectionProps[] = [
    {
      title: "linkedin<span class='title-span'>_</span>",
      logo: { name: "/in/manuel-segarra", path: `${process.env.PUBLIC_URL}/images/logos/linkedin.png` },
      link: "https://www.linkedin.com/in/manuel-segarra",
    },
    {
      title: "github<span class='title-span'>_</span>",
      logo: { name: "/segarra99", path: `${process.env.PUBLIC_URL}/images/logos/github.png` },
      link: "https://www.github.com/segarra99",
    },
  ];

  return (
    <m.div
      id="contact-div"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ x: "-100%" }}
    >
      <div id="links">
        {contactData.map(({ title, logo, link }, index) => (
          <div key={index} className="link-wrapper">
            <a href={link} target="_blank" rel="noreferrer">
              <div className="link" key={index}>
                <img src={logo.path} alt={logo.name} title={logo.path} />
              </div>
            </a>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
          </div>
        ))}
      </div>
      <div id="email">
        <Email />
      </div>
    </m.div>
  );
}

export default ContactPage;
