import React, { ReactNode } from 'react';
import style from './style.module.scss';

interface ITransverseLayout {
  leftContent?: ReactNode;
  rightContent: ReactNode;
  content: ReactNode;
}
const TransverseLayout:React.FC<ITransverseLayout> = (props) => {
  const { leftContent, rightContent, content } = props;
  return (
    <div className={style['transverse-layout']}>
      <div className={style['all-content-wrapper']}>
        {
          leftContent && (
          <div className={style['left-content-wrapper']}>
            {leftContent}
          </div>
          )
        }

        <div className={style['content-wrapper']}>
          {content}
        </div>
        <div className={style['right-content-wrapper']}>
          <div className={style['right-fixed']}>
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
};

TransverseLayout.defaultProps = {
  leftContent: null,
};

export default TransverseLayout;
