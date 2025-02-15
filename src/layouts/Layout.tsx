import Header from "@/components/Header/Header"
import s from "./Layout.module.scss"

const Layout = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header />
      </div>
    </div>
  );
};

export default Layout;
