import Header from "@/components/Header/Header"
import s from "./Layout.module.scss"
import { Sidebar } from "@/components";
import { useState } from "react";

const Layout = () => {
  const [sidebarOpened, setSidebarOpened] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header onSidebarToggle={toggleSidebar} />
        <Sidebar sidebarOpened={sidebarOpened} />
      </div>
    </div>
  );
};

export default Layout;
