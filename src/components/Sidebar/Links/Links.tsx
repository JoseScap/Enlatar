import { NavLink, To } from "react-router-dom";
import s from "./Links.module.scss";

interface Props {
  className?: string;
  exact?: boolean;
  header: string;
  label?: string;
  labelColor?: string;
  link: To;
  Icon?: React.ReactNode;
  isHeader: boolean;
  target?: React.HTMLAttributeAnchorTarget;
}

const Links = ({ className, exact, header, label, labelColor, link, Icon, isHeader = false, target }: Props) => {
  if (isHeader) {
    return (
      <li className={[s.headerLink, className].join(" ")}>
        <NavLink
          to={link}
          className={({ isActive }) => isActive ? s.headerLinkActive : ""}
          end={exact}
          target={target}
        >
          {Icon && <span className={s.icon}>{Icon}</span>}
          {header}
          {label && <sup className={`text-${labelColor ?? 'warning'}`}>{label}</sup>}
          {/**{badge && <Badge className={s.badge} color="secondary-red" pill>{badge}</Badge>}*/}
        </NavLink>
      </li>
    );
  }
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) => isActive ? s.headerLinkActive : ""}
        end={exact}
      >
        {<i className="fa fa-circle text-primary mr-2" />} {header}
      </NavLink>
    </li>
  );
}

export default Links;
