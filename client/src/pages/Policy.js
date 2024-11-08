import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <p>1. We collect basic personal details like your name, email, and payment information when you make a purchase.</p>
          <p>2. Your information is used to process orders, improve services, and communicate updates.</p>
          <p>3. We ensure your data is protected with secure encryption methods.</p>
          <p>4. We use cookies to enhance your experience. You can choose to accept or decline them.</p>
          <p>5. We do not share your information with third parties unless required for order processing.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;