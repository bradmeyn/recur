"use client";

import Modal from "@/lib/components/Modal";
import useModal from "@/lib/hooks/useModal";
import { Button } from "@tremor/react";
import useSupabase from "@/lib/hooks/useSupabase";
import { RiDeleteBinLine } from "@remixicon/react";
import { deleteSubscriptionAction } from "@/lib/actions/subscriptions";
import { capitalise } from "@/lib/utils";

export default function SubscriptionDelete({ id }: { id: string }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { user, loading } = useSupabase();

  const handleClose = () => {
    closeModal();
  };

  return (
    <>
      <button
        className="hover:text-red-500 hover:bg-slate-100 p-2 rounded gap-2 text-slate-500"
        onClick={openModal}
      >
        <RiDeleteBinLine size={15} />
      </button>

      <Modal isOpen={isOpen} close={handleClose} title={`Delete Subscription`}>
        <form action={deleteSubscriptionAction}>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="userId" value={user?.id} />

          <p>Are you sure you want to delete this item?</p>
          <div className="flex gap-4 mt-10">
            <Button
              className="bg-red-500 hover:bg-red-700 border-transparent hover:border-transparent"
              type="submit"
            >
              Delete
            </Button>

            <Button
              onClick={handleClose}
              className="bg-slate-500 hover:bg-slate-600 border-transparent hover:border-transparent"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
