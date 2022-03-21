import React from "react";
import Card from "../../components/Card";

const PROJECTS = [
  {
    title: "NICNET",
    description: "Communication Network",
    image: "https://www.nic.in/wp-content/uploads/2017/10/NIcnet-1-300x232.jpg",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Data Center",
    description: "Core of e-Governance Infrastructure in India",
    image: "https://www.nic.in/wp-content/uploads/2017/03/data-centre-01-300x214.png",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "National Cloud",
    description: "Accelerating delivery of e-services by optimising utilization of infrastructure",
    image: "https://www.nic.in/wp-content/uploads/2017/10/meghraj-01-300x214.png",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Messaging",
    description: "Backbone of Government communication in India",
    image: "https://www.nic.in/wp-content/uploads/2017/08/messaging-1-300x222.png",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Remote sensing & GIS",
    description: "Location based Electronic Delivery of Services for Planning & Governance",
    image: "https://www.nic.in/wp-content/uploads/2017/08/gis-1.png",
    tags: ["#frontend", "#react", "#css"],
  },
  {
    title: "Webcast",
    description: "On-demand web cast services for important National, International and regional events",
    image: "https://www.nic.in/wp-content/uploads/2017/10/web-cast-02-300x227.png",
    tags: ["#frontend", "#react", "#css"],
  },
];

export default function Project() {
  return (
    <div className="flex flex-wrap">
      {PROJECTS.map((project, index) => (
        <div key={index} className="w-1/2 mb-8">
          <Card {...project} />
        </div>
      ))}
    </div>
  );
}
