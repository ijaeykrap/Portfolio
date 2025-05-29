import { useParams } from "react-router-dom";
import { PromotionInfo } from "../Assets/data";
import { Link } from "react-router-dom";

import style from "./BrandingDetail.module.css";
export default function BrandingDetail() {
  const params = useParams();
  let id = params.promotionId;
  const index = PromotionInfo.findIndex((i) => i.link === id);
  const arr = PromotionInfo[index];
  return (
    <section className={style.detail}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.imgWrapper}>
            {arr.img.map((a, index) => {
              return <img key={index} src={a.src} alt={a.alt}></img>;
            })}
          </div>
        </div>

        <div className={style.right}>
          <div className={style.text}>
            <h4>{arr.title}</h4>
            <p>{arr.p}</p>
            <div className={style.did}>
              {arr.did.map((a, index) => {
                return <span key={index}>{a}</span>;
              })}
            </div>
            <div className={style.tool}>
              {arr.tool.map((a, index) => {
                return (
                  <span key={index} style={{ backgroundColor: `${a.color}` }}>
                    {a.name}
                  </span>
                );
              })}
            </div>
            <div className={style.listBtn}>
              <Link to="/promotion" className={style.list}>
                목록으로
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
