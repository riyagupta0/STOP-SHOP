import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          We are a team of four dedicated individuals—Riya, Kalpana, Srijan, and Abhay—working together to build an innovative and responsive e-commerce shopping website. Our shared passion for technology and teamwork enables us to divide the work equally, ensuring that we complete the project within our two-month timeline. With a focus on quality and functionality, we aim to deliver a seamless shopping experience through our app.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;