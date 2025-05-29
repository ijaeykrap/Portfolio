import { Link } from "react-router-dom";
import { WebDesignInfo } from "../Assets/data";

import style from "../Assets/List.module.css";

export default function WebDesign() {
  return (
    <section className={style.container}>
      <div className={style.inner}>
        <ul className={style.list}>
          {WebDesignInfo.map((b, index) => {
            return (
              <li key={index}>
                <Link to={b.link}>
                  <div
                    className={style.img}
                    style={{ backgroundImage: `url(${b.src})` }}
                  >
                    {b.alt}
                  </div>
                  <div className={style.titleArea}>
                    <span className={style.title}>0{index + 1}</span>
                    <div className={style.descrip}>
                      <span>{b.title}</span>
                      <span className={style.duration}>{b.duration}</span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
