import React, { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './Burger.module.css';
import changeAnchor from '../../../lib/change-anchor';

interface IBurgerProps {
  open: boolean;
  anchor: string;
  onClose: any;
  children: ReactNode;
}

const Burger: FC<PropsWithChildren<IBurgerProps>> = (props: IBurgerProps) => {
  const { open, anchor, onClose, children } = props;
  const {
    drawer,
    animate,
    hidden,
    overlay,
    overlayOpen,
    overlayHidden,
    header,
  } = classes;

  return (
    <>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor(anchor, classes)}`}
      >
        <div className={header}>
          <button className="burger" onClick={onClose}>
            <div className="line close-line1" />
            <div className="line close-line2" />
            <div className="line close-line3" />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Burger;
