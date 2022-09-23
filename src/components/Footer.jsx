import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer_content">
          <div className="left_footer">
            <img src="Brand.svg" alt="Brand Logo" />
            <p>
              We are a web hosting company with a mission to help everyone who
              goes online succeed. We accomplish this by continuously developing
              server technology, giving expert assistance, and ensuring a
              flawless online website hosting experience.
            </p>
            <ul>
              <li>
                <img
                  src="https://assets.hostinger.com/images/payments/homepage-2020-payments/visa-5d68dadf24.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://assets.hostinger.com/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://assets.hostinger.com/images/payments/homepage-2020-payments/discover-1e5edf3f39.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://assets.hostinger.com/images/payments/homepage-2020-payments/dinersclub-3f02e2deec.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://assets.hostinger.com/images/payments/homepage-2020-payments/rupay-2bad18f6df.png"
                  alt=""
                />
              </li>
              <li>
                <a href="https://www.hostinger.in/payment-methods">And More</a>
              </li>
            </ul>
          </div>
          <div className="right_footer">
            <div>
              <h4>HOSTING</h4>
              <ul>
                <li>Web Hosting</li>
                <li>VPS Hosting</li>
                <li>Minecraft Server Hosting</li>
                <li>CyberPanel Hosting</li>
                <li>Cloud Hosting</li>
                <li>WordPress Hosting</li>
                <li>Email Hosting</li>
                <li>CMS Hosting</li>
                <li>Ecommerce Hosting</li>
                <li>Free Web Hosting</li>
                <li>Online Store</li>
                <li>Website Builder</li>
                <li>Buy Hosting</li>
              </ul>
            </div>
            <div>
              <h4>DOMAIN</h4>
              <ul>
                <li>Domain Name Search</li>
                <li>Domain Transfer</li>
                <li>Free Domain Name</li>
                <li>XYZ Domain</li>
                <li>Cheap Domains</li>
                <li>Domain Extensions</li>
                <li>WHOIS Lookup</li>
                <li>Free SSL Certificate</li>
              </ul>
            </div>
            <div>
              <h4>INFORMATION</h4>
              <ul>
                <li>Migrate to Hostinger</li>
                <li>System Status</li>
                <li>Affiliate Program</li>
                <li>Payment Methods</li>
                <li>Rewards</li>
                <li>Reviews</li>
                <li>Pricing</li>
                <li>Sitemap</li>
              </ul>
              <h4>LEGAL</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4>COMPANY</h4>
              <ul>
                <li>About Hostinger</li>
                <li>Our Technology</li>
                <li>Roadmap</li>
                <li>Customer Care</li>
                <li>Blog</li>
              </ul>
              <h4>HELP</h4>
              <ul>
                <li>Tutorials</li>
                <li>Knowledge Base</li>
                <li>Report Online Abuse</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
         <div className="copyright_content">
         <h4>
            © 2004-2022 hostinger.in - India’s #1 Web Hosting & Domains
            provider.
          </h4>
          <p>Prices are listed without VAT</p>
         </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
