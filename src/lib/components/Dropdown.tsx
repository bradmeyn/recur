import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { RiMore2Fill } from "@remixicon/react";

export default function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="hover:text-tremor-brand hover:bg-slate-100 p-2 rounded"
          aria-label="Options"
        >
          <RiMore2Fill size={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white" sideOffset={5}>
          <DropdownMenu.Item>{children}</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
