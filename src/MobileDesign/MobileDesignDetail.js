import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MobileDesignInfo } from "../Assets/data";
import style from "./MobileDesignDetail.module.css";

export default function MobileDesignDetail() {
  const params = useParams();
  const id = params.mobileId;
  const index = MobileDesignInfo.findIndex((i) => i.link === id);
  const arr = MobileDesignInfo[index];
  return (
    <section className={style.detail}>
      <div className={style.container}>
        <div className={style.intro}>
          <div className={style.thumbArea}>
            <img src={arr.src} alt={arr.alt}></img>
          </div>

          <div className={style.textArea}>
            <h3>{arr.content[0].name}</h3>
            <div className={style.itemWrapper}>
              <div className={style.item}>
                <span>프로젝트</span>
                <span>{arr.content[0].project}</span>
              </div>
              <div className={style.line}></div>
              <div className={style.item}>
                <span>서비스 목표</span>
                <span>{arr.content[0].goal}</span>
              </div>
              <div className={style.line}></div>

              <div className={style.item}>
                <span>타겟 사용자</span>
                <span>{arr.content[0].user}</span>
              </div>
              <div className={style.line}></div>

              <div className={style.item}>
                <span>내 역할</span>
                <span>{arr.content[0].job}</span>
              </div>
              <div className={style.line}></div>
            </div>
            <div className={style.listBtn}>
              <Link to="/mobile-design" className={style.list}>
                목록으로
              </Link>
            </div>
          </div>
        </div>

        <div className={style.imgWrapper}>
          {arr.img.map((i, index) => {
            return (
              <img
                key={index}
                src={i.src}
                alt={i.alt}
                className={style.img}
              ></img>
            );
          })}
        </div>
      </div>
    </section>
  );
}
