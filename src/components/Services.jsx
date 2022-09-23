import React from "react";

const Service = (props) => {
  return (
    <>
      <li>
        <h4>
          <img src={props.imgSrc} alt="" /> {props.title}
        </h4>
      </li>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div className="container">
        <h1>Our services include:</h1>
        <div className="services">
          <div className="col">
            <ul>
              <Service title=" Free SSL" imgSrc="services1.svg" />
              <Service title=" Free Migration " imgSrc="services2.svg" />
              <Service title=" PHP Speed Boost" imgSrc="services3.svg" />
              <Service title=" 24/7/365 Tech Support " imgSrc="services4.svg" />
            </ul>
          </div>
          <div className="col">
            <ul>
              <Service title=" Access Management" imgSrc="services5.svg" />
              <Service title=" Automated backups" imgSrc="services6.svg" />
              <Service title=" LiteSpeed Cache Plugin" imgSrc="services7.svg" />
              <Service title=" Auto Script Installer" imgSrc="services8.svg" />
            </ul>
          </div>
          <div className="col">
            <ul>
              <Service title=" eCommerce Optimization" imgSrc="services9.svg" />
              <Service title=" DDoS Protection" imgSrc="services10.svg" />
              <Service
                title=" One-Click WordPress Installation "
                imgSrc="services11.svg"
              />
              <Service
                title=" 99.9% Uptime Guarantee"
                imgSrc="services12.svg"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
