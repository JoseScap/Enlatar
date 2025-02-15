import { PropsWithChildren, useMemo } from 'react';
import { Alert } from 'reactstrap';
import infoIcon from '@/assets/notifications/infoIcon.svg';
import warningIcon from '@/assets/notifications/warningIcon.svg';
import successIcon from '@/assets/notifications/successIcon.svg';
import dangerIcon from '@/assets/notifications/successIcon.svg';
import { AlertProps, AlertType } from '@/types';
import classnames from 'classnames';
import s from './CustomAlert.module.scss';

const alerts: Record<AlertType, AlertProps> = {
  info: {
    icon: infoIcon,
    color: "#00A5FF",
    transparentColor: "#00A5FF50",
  },
  warning: {
    icon: warningIcon,
    color: "#FFA100",
    transparentColor: "#FFA10050",
  },
  success: {
    icon: successIcon,
    color: "#43BC13",
    transparentColor: "#43BC1350",
  },
  error: {
    icon: dangerIcon,
    color: "#FF4B23",
    transparentColor: "#FF4B2350",
  },
}

interface Props extends PropsWithChildren {
  type: AlertType;
  transparent?: boolean;
  withIcon?: boolean;
}

export default function CustomAlert({ type, transparent = false, withIcon = false, children }: Props) {
  const alertStyle = useMemo(() => {
    return transparent
      ? { backgroundColor: alerts[type].transparentColor, color: alerts[type].color }
      : { backgroundColor: alerts[type].color }
  }, [type, transparent])

  return (
    <Alert
      className={classnames(s.alertContainer)}
      style={alertStyle}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            {withIcon && <img src={alerts[type].icon} alt="Alert icon" />}
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </Alert>
  )
};


