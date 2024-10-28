const features_list = [
  {
    title: "Dedication",
    icon: "img/svg/design.svg",
    text: "Commitment is the fuel for progress. When you dedicate yourself fully, you bring consistency and passion to every step, working tirelessly to achieve meaningful goals.",
  },
  {
    title: "Smart Work",
    icon: "img/svg/development.svg",
    text: "Success isn't just about hard work; it's about working efficiently. Prioritize tasks, streamline processes, and focus on what truly matters to make the most of your time and effort.",
  },
  {
    title: "Intelligence",
    icon: "img/svg/landing.svg",
    text: "Intelligence is more than knowledge—it's about thinking critically, adapting, and innovating. Harnessing your intellect to solve problems creatively opens doors to endless possibilities.",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
