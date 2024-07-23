import React, { FC, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Drawer } from "antd";
import s from "./LandingDrawer.module.scss";
import classNames from "classnames";

interface drawerProps {
  children: React.ReactNode;
  footerTitle?: string;
  footerBtn?: React.ReactNode;
  placement?: "top" | "right" | "left" | "bottom";
  buttonTitle?: string;
  buttonIcon?: React.ReactNode;
  headerItems?: React.ReactNode;
  className?: string;
}

const LandingDrawer: FC<drawerProps> = ({
  children,
  footerTitle,
  footerBtn,
  placement,
  buttonTitle,
  buttonIcon,
  headerItems,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const drawerContainerRef = useRef<HTMLDivElement>(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={showDrawer}>
        {buttonTitle}
        {buttonIcon}
      </button>
      <div
        className={classNames(s.drawer_body, className)}
        ref={drawerContainerRef}
      >
        {drawerContainerRef.current &&
          ReactDOM.createPortal(
            <Drawer
              placement={placement}
              title={headerItems}
              onClose={onClose}
              open={open}
              getContainer={false}
              footer={
                <>
                  <p>{footerTitle}</p> <button>{footerBtn}</button>
                </>
              }
            >
              {children}
            </Drawer>,
            drawerContainerRef.current
          )}
      </div>
    </>
  );
};

export default LandingDrawer;
