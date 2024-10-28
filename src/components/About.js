const aboutData = {
  designation: "Developer",
  title: "Good design is where tech meets human connection.",
  text: [
    "I'm a frontend developer on a mission to craft interfaces that don’t just work—they wow. I design and build applications with a focus on sleek, intuitive user experiences that simplify and enhance everyday life. My code isn’t just functional; it’s crafted for impact, blending creativity with efficiency to bring ideas to life. Every pixel, every line—driven by a passion for helping people connect seamlessly with technology.",
    
  ],
  skillIcons: [
    { name: "joomla", icon: "img/svg/shopify.svg" },
    { name: "wp", icon: "img/svg/react.svg" },
    { name: "drupal", icon: "img/svg/js2.svg" },
    { name: "laravel", icon: "img/svg/bs.svg" },
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url="img/hero/2.png" />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main_extra"
                      data-img-url="img/about/2.jpg"
                    />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              {/* <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Portfolio
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
