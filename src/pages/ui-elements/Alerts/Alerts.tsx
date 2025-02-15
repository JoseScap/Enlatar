import {
  Row,
  Col,
} from 'reactstrap';
import Widget from '../../../components/Widget/Widget.js';
import { CustomAlert } from "@/components";
import s from "./Alerts.module.scss";
import { AlertType } from "@/types";

const alertTypes: AlertType[] = ["info", "success", "warning", "error"];

export default function Alerts() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4 gutter">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Alert Messages
                </div>
                <p className="mb-3 body-3 muted">
                  Alerts are available for any length of text, as well as an optional dismiss button.
                </p>
                {alertTypes.map((notification, index) => (
                  <CustomAlert
                    key={index}
                    type={notification}
                    withIcon
                  >
                    <p>
                      This is an example of a custom alert.
                    </p>
                  </CustomAlert>
                ))}
              </Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Transparent Alerts
                </div>
                <p className="mb-3 body-3 muted">
                  Transparent alerts are available by adding <code>transparent</code> property.
                </p>
                {alertTypes.map((notification, index) => (
                  <CustomAlert
                    key={index}
                    type={notification}
                    transparent
                  >
                    <p>
                      This is an example of a transparent alert.
                    </p>
                  </CustomAlert>
                ))}
              </Widget>
            </Col>
          </Row>
          <Row className="mb-4 gutter">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Additional Content
                </div>
                <p className="mb-3 body-3 muted">
                  Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
                </p>
                <CustomAlert type="info">
                  <div className={s.customAlert}>
                    <p className="headline-2">Well Done!</p>
                    <p>
                      This is an example of a custom alert. You can nest other elements in it and style it however you want.
                    </p>
                    <hr/>
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                  </div>
                </CustomAlert>
                <CustomAlert type="success" transparent withIcon>
                  <div className={s.customAlert}>
                    <p className="headline-2">Hint!</p>
                    <p>
                      You can also make this element transparent, add an icon and round the edges.
                    </p>
                  </div>
                </CustomAlert>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
