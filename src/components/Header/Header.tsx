import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
} from "reactstrap";
import {
  MenuIcon,
  SearchBarIcon,
  BellIcon,
  SearchIcon,
  ProfileIcon,
  MessagesIcon,
  TasksIcon,
} from "@/components";
import { useHeader } from "@/hooks/components/useHeader";

import logoutIcon from "@/assets/navbarMenus/profileIcons/logoutOutlined.svg";
import basketIcon from "@/assets/navbarMenus/basketIcon.svg";
import calendarIcon from "@/assets/navbarMenus/calendarIcon.svg";
import envelopeIcon from "@/assets/navbarMenus/envelopeIcon.svg";
import mariaImage from "@/assets/navbarMenus/mariaImage.jpg";
import notificationImage from "@/assets/navbarMenus/notificationImage.jpg";
import userImg from "@/assets/user.svg";

import s from "./Header.module.scss";
import "animate.css";

interface Props {
  onSidebarToggle?: () => void;
}

const Header: React.FC<Props> = ({ onSidebarToggle }) => {
  const {
    menuOpen,
    notificationsOpen,
    toggleMenu,
    toggleNotifications,
    handleLogout,
    toggleSidebar,
  } = useHeader({ onSidebarToggle });

  return (
    <Navbar className={`header-navbar d-print-none`}>
      <div>
        <NavLink
          onClick={toggleSidebar}
          className={`d-md-none mr-3`}
          href="#"
        >
          <MenuIcon className={s.menuIcon} />
        </NavLink>
      </div>
      <Form className="d-none d-sm-block" inline>
        <FormGroup>
          <InputGroup>
            <Input id="search-input" placeholder="Search Dashboard" className='focus no-border' />
            <span className="d-flex align-self-center px-3">
              <SearchBarIcon />
            </span>
          </InputGroup>
        </FormGroup>
      </Form>
      <Nav className="ml-auto">
        <NavItem className="d-sm-none mr-4">
          <NavLink
            className=""
            href="#"
          >
            <SearchIcon />
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={menuOpen} toggle={toggleMenu} className="tutorial-dropdown mr-2 mr-sm-3">
          <DropdownToggle nav>
            <div className={s.navbarBlock}>
              <BellIcon maskId={114}></BellIcon>
              <div className={s.count}></div>
            </div>
          </DropdownToggle>
          <DropdownMenu right className="navbar-dropdown notifications-dropdown" style={{ width: "340px" }}>
            <DropdownItem><img src={basketIcon} alt="Basket Icon" /><span>12 new orders have arrived today</span></DropdownItem>
            <DropdownItem>
              <div>
                <div className="d-flex flex-row mb-1">
                  <img src={mariaImage} alt="Maria" className={s.mariaImage} />
                  <div className="d-flex flex-column">
                    <p className="body-3">Maria</p>
                    <p className="label muted">15 min ago</p>
                  </div>
                </div>
                <img src={notificationImage} alt="Notification Icon" className={s.notificationImage} />
                <p className="body-2 muted">It is just a simple image that can define th..</p>
              </div>
            </DropdownItem>
            <DropdownItem><img src={calendarIcon} alt="Calendar Icon" /><span>1 event has been canceled and ...</span></DropdownItem>
            <DropdownItem><img src={envelopeIcon} alt="Envelope Icon" /><span>you have 2 new messages</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={notificationsOpen} toggle={toggleNotifications} nav id="basic-nav-dropdown" className="ml-3">
          <DropdownToggle nav caret className="navbar-dropdown-toggle">
            <div className={`${s.avatar} rounded-circle float-left mr-2`}>
              <img src={userImg} alt="User" />
            </div>
            <span className="small d-none d-sm-block ml-1 mr-2 body-1">Christina Carey</span>
          </DropdownToggle>
          <DropdownMenu className="navbar-dropdown profile-dropdown" style={{ width: "194px" }}>
            <DropdownItem className={s.dropdownProfileItem}>
              <Link to="/template/user/profile">
                <ProfileIcon /><span>Profile</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={s.dropdownProfileItem}><TasksIcon /><span>Tasks</span></DropdownItem>
            <DropdownItem className={s.dropdownProfileItem}><MessagesIcon /><span>Messages</span></DropdownItem>
            <NavItem>
              <NavLink onClick={handleLogout} href="#">
                <button className="btn btn-primary rounded-pill mx-auto logout-btn" type="submit">
                  <img src={logoutIcon} alt="Logout" /><span className="ml-1">Logout</span>
                </button>
              </NavLink>
            </NavItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header; 