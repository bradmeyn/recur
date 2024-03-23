import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import { RiCloseFill } from "@remixicon/react";

type Props = {
  isOpen: boolean;
  close: (val: boolean) => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, close, title, children }: Props) => {
  return (
    <Dialog open={isOpen} static={true} onClose={(val) => close(val)}>
      <DialogPanel className="overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2>{title}</h2>
          <button onClick={() => close(false)}>
            <RiCloseFill
              size={40}
              className="text-slate-400 hover:bg-slate-100 p-1 rounded"
            />
          </button>
        </div>
        {children}
      </DialogPanel>
    </Dialog>
  );
};

export default Modal;
