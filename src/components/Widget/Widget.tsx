import React from 'react';
import s from './Widget.module.scss';
import classNames from 'classnames';

interface WidgetProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  className?: string;
  headerClass?: string;
  children?: React.ReactNode;
  options?: Record<string, any>;
}

const Widget: React.FC<WidgetProps> = ({
  title = null,
  className = '',
  headerClass = '',
  children = [],
  options = {},
  ...attributes
}) => {
  return (
    <React.Fragment>
      <section
        className={s.widget}
        {...attributes}
      >
        {title && (
          <div className={classNames(headerClass, s.title)}>
            {title}
          </div>
        )}
        <div className={className}>
          {children}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Widget; 