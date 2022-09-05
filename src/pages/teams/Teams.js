import React from "react";
import Team from "../../components/Team";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconLinkedIn from "../../assets/images/icon-linkedin.svg";
import { team } from "../../data";

export default function Teams() {
  return (
    <>
      <div className="teams">
        {team.map(({ id, image, name, job, socials }) => {
          return (
            <Team
              key={id}
              image={image}
              name={name}
              job={job}
              socials={[
                {
                  icon: <img src={iconFacebook} alt="facebook" />,
                  link: socials[0],
                },
                {
                  icon: <img src={iconTwitter} alt="twitter" />,
                  link: socials[1],
                },
                {
                  icon: <img src={iconInstagram} alt="instagram" />,
                  link: socials[2],
                },
                {
                  icon: <img src={iconLinkedIn} alt="linkedin" />,
                  link: socials[3],
                },
              ]}
            />
          );
        })}
      </div>
    </>
  );
}
