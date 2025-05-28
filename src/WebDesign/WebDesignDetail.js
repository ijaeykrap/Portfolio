import style from "./WebDesginDetail.module.css";
import { WebDesignInfo } from "../Assets/data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function WebDesignDetail() {
  const params = useParams();
  const id = params.webId;
  const index = WebDesignInfo.findIndex((i) => i.link === id);
  const arr = WebDesignInfo[index];

  return (
    <section className={style.detail}>
      <div className={style.container}>
        <div className={style.intro}>
          <div className={style.thumbArea}>
            <img src={arr.src} alt={arr.src}></img>
          </div>
          <div className={style.textArea}>
            <div className={style.titleArea}>
              <h4>{arr.title}</h4>
              {arr.move && (
                <Link to={arr.move} className={style.link} target="_blank">
                  move to site
                </Link>
              )}
            </div>
            <p>{arr.p}</p>
            <div className={style.tool}>
              {arr.tool.map((t) => {
                return (
                  <span style={{ backgroundColor: `${t.color}` }} key={t.name}>
                    {t.name}
                  </span>
                );
              })}
            </div>
            <div className={style.listBtn}>
              <Link to="/web-design" className={style.list}>
                목록으로
              </Link>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.imgWrapper}>
            {arr.img.map((a, index) => {
              return (
                <img
                  key={index}
                  src={a.src}
                  alt={a.alt}
                  className={style.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
