import { Fragment } from "react";
import classnames from "classnames";
import { UncontrolledTooltip } from "reactstrap";
import Avatar from "../Avatar/Avatar";
import { Size } from "@/types";

interface AvatarData {
  title: string;
  className?: string;
  img: string;
  [key: string]: any;
}

interface AvatarGroupProps {
  data: AvatarData[];
  size?: Size;
  placement?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const AvatarGroup = (props: AvatarGroupProps) => {
  const { data, size, placement = "top", className } = props;

  const renderData = () => {
    return data.map((item, index) => {
      return (
        <Fragment key={index}>
          {item.title ? (
            <UncontrolledTooltip placement={placement} target={item.title.split(" ").join("_")}>
              {item.title}
            </UncontrolledTooltip>
          ) : null}
          <Avatar
            className={classnames('zoom-in', {
              [(item.className || '') as string]: item.className
            })}
            size={size}
            id={item.title.split(" ").join("_")}
            {...item}
          />
        </Fragment>
      );
    });
  };

  return (
    <div
      className={classnames('avatar-group', {
        [className as string]: className
      })}
    >
      {renderData()}
    </div>
  );
};

export default AvatarGroup; 