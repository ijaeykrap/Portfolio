import style from "../Assets/List.module.css";
import { Link } from "react-router-dom";
import { BrandingInfo } from "../Assets/data";

export default function Branding() {
  return (
    <section className={style.container}>
      <div className={style.inner}>
        <ul className={style.list}>
          {BrandingInfo.map((b, index) => {
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
