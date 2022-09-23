import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card container">
        <div className="left">
          <h4>{props.title}</h4>
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
          <a href="">Learn more</a>
        </div>
        <div className="right">
          <video src={props.video} autoPlay muted />
        </div>
      </div>
    </>
  );
};

const WhyUs = () => {
  return (
    <>
      <div className="card_container">
        <Card
          title="EASY TO USE AND SIMPLE"
          heading="Easy to set up"
          text="Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way."
          video="https://assets.hostinger.com/videos/homepage2020/easy-to-set-up-6e4616539f.mp4"
        />
        <Card
          title="PERFORMANCE AND SPEED"
          heading="Lightning-fast websites"
          text="Website speed can slow or grow your business. Delight your visitors with a fast-loading and optimized website."
          video="https://assets.hostinger.com/videos/homepage2020/simply-fast-websites-ad53591419.mp4"
        />
        <Card
          title="GREAT WORDPRESS EXPERIENCE"
          heading="WordPress made easy"
          text="Start your website with an automatic 1-click WordPress installation. The backend is powered by LiteSpeed caching and advanced optimization to ensure your websites are fast, reliable and secure."
          video="https://assets.hostinger.com/videos/homepage2020/wordpress-made-easy-f182af6a28.mp4"
        />
        <Card
          title="PROFESSIONAL AND HANDS-ON"
          heading="24/7 Support"
          text="Our team of experts will solve technical issues to get your websites up and running. Anytime."
          video="https://assets.hostinger.com/videos/homepage2020/chat-support-24-7-f281e75a32.mp4"
        />
        <Card
          title="FLEXIBLE AND SCALABLE"
          heading="From micro to large-scale"
          text="Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows."
          video="https://assets.hostinger.com/videos/homepage2020/scale-from-micro-to-large-scale-54c553ecb0.mp4"
        />
      </div>
    </>
  );
};

export default WhyUs;
