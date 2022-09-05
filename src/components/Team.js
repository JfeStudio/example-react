import React from "react";
import Card from "./article/Card";

export default function Team({ image, name, job, socials }) {
  return (
    <Card props="team">
      <div className="team-image">
        <img src={image} alt={name} />
      </div>
      <h4 className="title-team">{name}</h4>
      <p className="job-team">{job}</p>
      <div className="team-social-media">
        {socials.map(({ icon, link }, index) => {
          return (
            <a
              className="media"
              key={index}
              href={link}
              target="_blank"
              rel="norefeer noopener"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
}
