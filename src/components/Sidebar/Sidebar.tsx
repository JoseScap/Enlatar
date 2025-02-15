import React, { useEffect, useState } from 'react';
import cn from "classnames";
import s from "./Sidebar.module.scss";
import Links from "./Links/Links";
import SofiaLogo from "../Icons/SofiaLogo.js";
import "eva-icons/style/eva-icons.css";

interface SidebarProps {
  sidebarOpened?: boolean;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const {
    sidebarOpened = false,
  } = props;

  const [burgerBtnToggled, setBurgerBtnToggled] = useState<boolean>(false);

  useEffect(() => {
    if (sidebarOpened) {
      setBurgerBtnToggled(true)
    } else {
      setTimeout(() => {
        setBurgerBtnToggled(false)
      }, 0)
    }
  }, [sidebarOpened])

  return (
    <nav className={cn(s.root, { [s.sidebarOpen]: burgerBtnToggled })}>
      <header className={s.logo}>
        <SofiaLogo />
        <span className={s.title}>Enlatar</span>
      </header>
      <ul className={s.nav}>
        <Links
          header='Panel'
          isHeader
          link="/auth/dashboard"
          Icon={<i className="eva eva-home-outline" />}
          exact
        />
        <h5 className={[s.navTitle, s.groupTitle].join(" ")}>TEMPLATE</h5>
        <Links
          header='Perfil'
          isHeader
          link="/auth/profile"
          Icon={<i className="eva eva-person-outline" />}
          exact
        />
        <Links
          header='Alerts'
          isHeader
          link="/auth/ui-elements/alerts"
          Icon={<i className="eva eva-bell-outline" />}
          exact
        />
      </ul>
    </nav>
  );
}

export default Sidebar; 