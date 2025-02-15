import { forwardRef } from "react";
import classnames from "classnames";
import { Size } from "@/types";
interface AvatarProps {
  className?: string;
  imgClassName?: string;
  id?: string;
  size?: Size;
  img: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    className,
    imgClassName,
    id,
    size,
    img,
  } = props;

  return (
    <div
      className={classnames('avatar', {
        [className as string]: className,
        [`avatar-${size}`]: size
      })}
      ref={ref}
      id={id}
    >
      <img
        className={classnames({
          [imgClassName as string]: imgClassName
        })}
        src={img}
        alt='avatar pic'
      />
    </div>
  )
})

export default Avatar; 