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
                    <span>0{index + 1}</span>
                    <span>{b.title}</span>
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
