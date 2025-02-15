import Header from "@/components/Header/Header"
import s from "./Layout.module.scss"
import { Sidebar } from "@/components";
import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Dashboard, Alerts } from "@/pages";

const Layout = () => {
  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header onSidebarToggle={toggleSidebar} />
        <Sidebar sidebarOpened={sidebarOpened} />
        <main className={s.content}>
          <Breadcrumbs url={location.pathname} />
          <Routes>
            <Route path="/" element={<Navigate to="/auth/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<>Hola desde el perfil</>} />
            <Route path="/ui-elements" element={<Navigate to="/auth/ui-elements/alerts" replace />} />
            <Route path="/ui-elements/alerts" element={<Alerts />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;
