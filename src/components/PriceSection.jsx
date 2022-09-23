import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";

const Common_Text = (props) => {
  return (
    <li>
      <p>
        <FcCheckmark className="icon" /> <b>{props.bold_title}</b> {props.title}
      </p>
    </li>
  );
};

const PriceSection = () => {
  const [isClicked, setIsClicked] = useState(false);

  const showMore = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="container ">
        <div className="pricing_container">
          <h1>Web Hosting</h1>
          <div className="pricing_content">
            <div className="first_sec col">
              <ul>
                <Common_Text
                  bold_title="Unmetered"
                  title=" traffic (Unlimited GB) ?"
                />
                <Common_Text bold_title="100" title=" Websites" />
                <Common_Text bold_title="100 GB" title=" SSD Storage ?" />
                <Common_Text bold_title="Free" title="  Weekly Backups ?" />
              </ul>
            </div>
            <div className="divider"></div>

            <div className="second_sec col">
              <h2>
                <sup>₹</sup>149.00<span>/mo</span>
              </h2>
              <p>₹249.00/mo when you renew</p>
              <button className="select_btn btn">Select</button>
            </div>
            <div className="divider"></div>

            <div className="third_sec col">
              <ul>
                <Common_Text bold_title="Unlimited" title="  Free SSL ?" />
                <Common_Text bold_title="Free Domain ? " title="" />
                <Common_Text bold_title="Free Email ? " title="" />
                <Common_Text bold_title="Optimized for WordPress ? " title="" />
              </ul>
            </div>
          </div>

          <div className={isClicked ? "show" : "hidden"}>
            <h4>Plan Feautures</h4>
            <div className="hidden_info">
              <div className="first_sec col">
                <ul>
                  <Common_Text bold_title="100 " title="Parked domains" />
                  <Common_Text
                    bold_title="100 "
                    title="Subdomains per account"
                  />
                  <Common_Text bold_title="Full " title="DNS editor" />
                  <Common_Text bold_title="Managed " title="WordPress" />
                  <Common_Text bold_title="WordPress " title="acceleration" />
                  <Common_Text bold_title="WordPress " title="multisite" />
                  <Common_Text bold_title="WP-CLI " title="" />
                  <Common_Text bold_title="1-click " title="Auto Installer" />
                  <Common_Text bold_title="1 GB " title="email storage" />
                  <Common_Text bold_title="100 " title="email mailboxes" />
                  <Common_Text bold_title="50 " title="email aliases" />
                  <Common_Text bold_title="5 " title="Forwarders" />
                  <Common_Text bold_title="Enterprise " title="Virus scanner" />
                  <Common_Text bold_title="WebMail " title="Access" />
                  <Common_Text
                    bold_title="Custom "
                    title="Email Filters
"
                  />
                  <Common_Text bold_title="IMAP/SMTP " title="" />
                  <Common_Text
                    bold_title="Special offers "
                    title="for Fiverr services"
                  />
                  <Common_Text bold_title="FAQ Database " title="" />
                </ul>
              </div>
              <div className="divider"></div>

              <div className="second_sec col">
                <ul>
                  <Common_Text bold_title="40 " title="Active Processes" />
                  <Common_Text bold_title="20 " title="Entry Processes" />
                  <Common_Text bold_title="400 000" title="Inodes" />
                  <Common_Text bold_title="Unlimited " title="Cronjobs" />
                  <Common_Text bold_title="Auto Script Installer" title="" />
                  <Common_Text
                    bold_title="Usage Monitoring and Statistics"
                    title=""
                  />
                  <Common_Text
                    bold_title="Automated Scaling"
                    title="suggestions"
                  />
                  <Common_Text bold_title="GIT " title="Support" />
                  <Common_Text bold_title="SSH Access" title="" />
                  <Common_Text bold_title="Access Management" title="" />
                  <Common_Text bold_title="99.9% " title="Uptime Guarantee" />
                  <Common_Text bold_title="Unlimited " title="FTP accounts" />
                  <Common_Text
                    bold_title="20 minutes average issue "
                    title="resolution time"
                  />
                  <Common_Text
                    bold_title="24/7/365 "
                    title="chat and email service"
                  />
                  <Common_Text bold_title="Knowledge Base" title="" />
                  <Common_Text bold_title="Tutorials" title="" />
                  <Common_Text bold_title="Webinars" title="" />
                </ul>
              </div>

              <div className="divider"></div>
              <div className="third_sec col">
                <ul>
                  <Common_Text bold_title="Unlimited " title="databases" />
                  <Common_Text bold_title="3 GB " title="database size" />
                  <Common_Text
                    bold_title="Unlimited "
                    title="MySQL backup size"
                  />
                  <Common_Text bold_title="500 MySQL " title="connections" />
                  <Common_Text bold_title="200 MB MySQL " title="import size" />
                  <Common_Text bold_title="16 MB MySQL " title="packet size" />
                  <Common_Text
                    bold_title="300 seconds MySQL "
                    title="statement time"
                  />
                  <Common_Text
                    bold_title="15 MySQL "
                    title="user connections"
                  />
                  <Common_Text
                    bold_title="60 seconds MySQL "
                    title="query time"
                  />
                  <Common_Text bold_title="HTTP/3" title="" />
                  <Common_Text bold_title="IPv6" title="" />
                  <Common_Text bold_title="10 " title="MB/s I/O" />
                  <Common_Text bold_title="128 " title="IOPS" />
                  <Common_Text bold_title="1 " title="CPU Core" />
                  <Common_Text bold_title="1 GB" title="RAM" />
                  <Common_Text bold_title="6 " title="datacenter locations" />
                  <Common_Text bold_title="Dynamic " title="PHP limits" />
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="toggler">
            <p
              className={isClicked ? "show_less" : "show_more"}
              onClick={showMore}
            >
              See More
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
