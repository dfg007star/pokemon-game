import l from "./layout.module.css";
import cn from "classnames";

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  return (
    <section
      className={l.root}
      id={id}
      style={{ background: `url(${urlBg})`, backgroundColor: colorBg }}
    >
      <div className={l.wrapper}>
        <article>
          <div className={l.title}>
            <h3>{title}</h3>
            <span className={l.separator}></span>
          </div>
          <div className={cn(l.desc, l.full)}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
