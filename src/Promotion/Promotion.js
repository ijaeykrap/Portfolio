import style from "../Assets/List.module.css";
import { Link } from "react-router-dom";
import { PromotionInfo } from "../Assets/data";

export default function Promotion() {
  return (
    <section className={style.container}>
      <div className={style.inner}>
        <ul className={style.list}>
          {PromotionInfo.map((b, index) => {
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
