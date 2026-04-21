import style from './Footer.module.css';
export default function Footer() {
  return (
    <footer>
      <div className={style.inner}>
        <div className={style.ref}>
          <h3>Reference</h3>
          <ul>
            <li>loviq</li>
            <li>daelim museum</li>
          </ul>
        </div>
        <div className={style.font}>
          <h3>font</h3>
          <ul>
            <li>Pretendard</li>
            <li>Velvelyne</li>
            <li>Lato</li>
          </ul>
        </div>
        <div>
          <h3>&copy;2026</h3>
        </div>
      </div>
    </footer>
  );
}
