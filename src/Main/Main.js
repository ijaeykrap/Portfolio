import { useRef, useEffect } from "react";
import { ResumeInfo } from "../Assets/data";

import style from "./Main.module.css";

function Main() {
  useEffect(() => {
    if (!ref) return;

    function callback(es) {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add(style.animate);
        }
      });
    }
    const options = { root: null, rootmargin: "0px", threshold: 0.5 };

    const io = new IntersectionObserver(callback, options);

    ref.current.forEach((el) => {
      if (el) io.observe(el);
    });
    return () => {
      io.disconnect();
    };
  }, []);
  const ref = useRef([]);
  const info = ResumeInfo;
  return (
    <section className={style.home}>
      <div className={style.content}>
        <div className={style.left}>
          <h1 className={style.title} ref={(el) => (ref.current[0] = el)}>
            사용자를 생각하며 아이디어를 디자인하고,
            <br />그 디자인을 구현하는 디자이너입니다.
          </h1>
          <div className={style.contact} ref={(el) => (ref.current[1] = el)}>
            {info[0].content.map((i, index) => {
              return <span key={index}>{i}</span>;
            })}
          </div>
        </div>
        <div className={style.right}>
          {info.map((i, index) => {
            if (index > 0 && index < 3) {
              return (
                <div
                  key={index}
                  className={style.item}
                  ref={(el) => (ref.current[1 + index] = el)}
                >
                  <h3 className={style.title}>{i.title}</h3>
                  <div className={style.line}></div>
                  <ul>
                    {i.content.map((content, index) => {
                      return (
                        <li key={index}>
                          <span>{content.year}</span>
                          <span>{content.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            } else if (index === 3) {
              return (
                <div
                  key={index}
                  className={style.item}
                  ref={(el) => (ref.current[1 + index] = el)}
                >
                  <h3 className={style.title}>{info[index].title}</h3>
                  <div className={style.line}></div>
                  <ul className={style.skillWrapper}>
                    {info[index].content.map((skill) => {
                      return (
                        <li
                          key={skill.color}
                          className={style.skill}
                          style={{ backgroundColor: `${skill.color}` }}
                        >
                          {skill.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Main;
