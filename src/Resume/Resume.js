import style from "./Resume.module.css";
import { ResumeInfo } from "../Assets/data";

export default function Resume() {
  const info = ResumeInfo;
  return (
    <section className={style.resume}>
      <div className={style.container}>
        <div className={style.left}>
          <h3>박예지</h3>
          <span>dkswpffk6985@naver.com</span>
        </div>
        <div className={style.right}>
          {info.map((i, index) => {
            return (
              <div key={index} className={style.item}>
                <h3 className={style.title}>{i.title}</h3>
                <ul>
                  {i.content.map((content, index) => {
                    return (
                      <li key={index}>
                        <span>{content.year}</span>
                        <span>{content.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
