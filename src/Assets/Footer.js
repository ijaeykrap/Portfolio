import style from "./Footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={style.inner}>
        <div className={style.ref}>
          <h3>Reference</h3>
          <ul>
            <li>loviq</li>
            <li>dealim museum</li>
            <li>pinterest</li>
          </ul>
        </div>
        <div className={style.font}>
          <h3>font</h3>
          <ul>
            <li>Pretendard</li>
            <li>Steps - Mono</li>
            <li>Lato</li>
          </ul>
        </div>
        <div>
          <h3>&copy;2025</h3>
        </div>
      </div>
    </footer>
  );
}
