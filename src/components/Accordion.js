import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    "title": "Work Strategy",
    "details": "I design with intention and build for impact—making every project sharp, effective, and ready to perform."
  },
  {
    "title": "The Process of My Work",
    "details": "From concept to completion, I focus on each step to ensure smooth, user-centered experiences."
  },
  {
    "title": "Core Values in Development",
    "details": "Quality, innovation, and integrity guide every line of code I write."
  },
  {
    "title": "Driven to Excel",
    "details": "I’m committed to pushing limits and turning ideas into reality, one project at a time."
  }
  ,
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
