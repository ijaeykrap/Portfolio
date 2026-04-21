<<<<<<< HEAD
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './Main.module.css';
=======
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "./Main.module.css";
>>>>>>> 7b299ed2546236957dc955c0199b2132b78a48ab

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
<<<<<<< HEAD
    const options = { root: null, rootmargin: '0px', threshold: 0.5 };
=======
    const options = { root: null, rootmargin: "0px", threshold: 0.5 };
>>>>>>> 7b299ed2546236957dc955c0199b2132b78a48ab

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
<<<<<<< HEAD
        <h1
          className={style.title}
          ref={(el) => (ref.current[0] = el)}
        >
=======
        <h1 className={style.title} ref={(el) => (ref.current[0] = el)}>
>>>>>>> 7b299ed2546236957dc955c0199b2132b78a48ab
          사용자를 생각하며 아이디어를 디자인하고,
          <br />그 디자인을 구현하는 디자이너입니다.
        </h1>
        <div className={style.bottom}>
<<<<<<< HEAD
          <span ref={(el) => (ref.current[1] = el)}>&copy;2026</span>
          <span ref={(el) => (ref.current[2] = el)}>Park Yea Ji</span>
          <Link
            ref={(el) => (ref.current[3] = el)}
            to='https://github.com/ijaeykrap/Portfolio'
            target='_blank'
=======
          <span ref={(el) => (ref.current[1] = el)}>&copy;2025</span>
          <span ref={(el) => (ref.current[2] = el)}>Park Yea Ji</span>
          <Link
            ref={(el) => (ref.current[3] = el)}
            to="https://github.com/ijaeykrap/Portfolio"
            target="_blank"
>>>>>>> 7b299ed2546236957dc955c0199b2132b78a48ab
          >
            Move to Git
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Main;
