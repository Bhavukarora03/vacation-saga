import React, { useState, Fragment, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import NavMobile from "shared/Navigation/NavMobile";

export interface MenuBarProps {}
const MenuBar: React.FC<MenuBarProps> = () => {
  const [isVisable, setIsVisable] = useState(false);

  useEffect(() => {
    setIsVisable(false);
  }, [window.location.pathname]);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="fixed left-0 top-0 bottom-0 w-full md:w-auto z-max outline-none focus:outline-none">
            <React.Fragment>
              <Transition.Child
                as={Fragment}
                enter="transition duration-100 transform"
                enterFrom="opacity-0 -translate-x-14"
                enterTo="opacity-100 translate-x-0"
                leave="transition duration-150 transform"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-14"
              >
                <div className="z-10 relative">
                  <NavMobile onClickClose={handleCloseMenu} />
                </div>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter=" duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave=" duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-neutral-900 bg-opacity-50" />
              </Transition.Child>
            </React.Fragment>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <>
      

      {renderContent()}
    </>
  );
};

export default MenuBar;
