import { useRef, useEffect } from "react";

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
  return (
    <section className={style.home}>
      <div className={style.content}>
        <h1 className={style.title} ref={(el) => (ref.current[0] = el)}>
          사용자를 생각하며 아이디어를 디자인하고,
          <br />그 디자인을 구현하는 디자이너입니다.
        </h1>
        <div className={style.bottom}>
          <span ref={(el) => (ref.current[1] = el)}>&copy;2025</span>
          <span ref={(el) => (ref.current[2] = el)}>Park Yea Ji</span>
          <span ref={(el) => (ref.current[3] = el)}>Design & Publishing</span>
        </div>
      </div>
    </section>
  );
}

export default Main;
