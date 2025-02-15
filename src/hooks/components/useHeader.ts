import { useState } from 'react';

interface UseHeaderProps {
  onSidebarToggle?: () => void;
}

interface UseHeaderReturn {
  menuOpen: boolean;
  notificationsOpen: boolean;
  toggleMenu: () => void;
  toggleNotifications: () => void;
  handleLogout: () => void;
  toggleSidebar: () => void;
}

export const useHeader = ({ onSidebarToggle }: UseHeaderProps): UseHeaderReturn => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotifications = (): void => {
    setNotificationsOpen(!notificationsOpen);
  };

  const handleLogout = (): void => {
    console.log('Logout clicked');
  };

  const toggleSidebar = (): void => {
    if (onSidebarToggle) {
      onSidebarToggle();
    }
  };

  return {
    menuOpen,
    notificationsOpen,
    toggleMenu,
    toggleNotifications,
    handleLogout,
    toggleSidebar,
  };
}; 