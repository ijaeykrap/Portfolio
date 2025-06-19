import style from "../Assets/DesignDetail.module.css";
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
              <h3>{arr.content[0].name}</h3>
              <div className={style.linkWrapper}>
                <Link className={style.github} to={arr.github} target="_blank">
                  <img src="/img/github.svg" alt="github_logo"></img>
                </Link>
                <div className={style.linkBtn}>
                  <Link to={arr.move} target="_blank" className={style.link}>
                    move to site
                  </Link>
                </div>
              </div>
            </div>

            <div className={style.itemWrapper}>
              <div className={style.item}>
                <span>프로젝트 유형</span>
                <span>{arr.content[0].type}</span>
              </div>
              <div className={style.line}></div>
              <div className={style.item}>
                <span>리디자인 이유</span>
                <span>{arr.content[0].project}</span>
              </div>
              <div className={style.line}></div>
              <div className={style.item}>
                <span>리디자인 목표</span>
                <span>{arr.content[0].goal}</span>
              </div>
              <div className={style.line}></div>

              <div className={style.item}>
                <span>디자인 방향성</span>
                <span>{arr.content[0].direction}</span>
              </div>
              <div className={style.line}></div>

              <div className={style.item}>
                <span>내 역할</span>
                <span>{arr.content[0].job}</span>
              </div>
              <div className={style.line}></div>
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
