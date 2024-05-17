import React from "react";
import "../../../Assets/Styles/style.css"; // Import your styles

function Activities() {
  return (
    <section className="activities">
      <div className="container">
        <div className="activities_inner">
          <h2 className="actovities_header">Activities</h2>
          <div className="activities__content">
            <p className="activities__content_p">
              We offer energy consulting services “Here, in the Hi-Tech group of
              companies, we sincerely believe that new technologies and solutions,
              new green projects will help preserve and enhance the world in which
              we live. We fully understand that it is only in our power to leave our
              descendants a clean green planet. <br/>
            </p>
            <p className="activities__content_p">
            <br/>
              We have the necessary knowledge and experience that will allow us to
              offer our customers comprehensive solutions for the development,
              implementation and project management in the renewable energy
              industry.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
