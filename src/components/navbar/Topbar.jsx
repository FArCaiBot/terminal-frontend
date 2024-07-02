import { Button } from "primereact/button";
import { DarkModeButton } from "./ChangeMode/DarkModeButton";
import { AvatarButton } from "./Avatar/AvatarButton";
import { navConfig } from "../../data/navConfig";
import { useState } from "react";
import { LeftBar } from "../Leftbar/LeftBar";

export const Topbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-2 flex align-items-center justify-content-between">
      <div className="sm:hidden">
        <Button icon="pi pi-bars" rounded text onClick={() => setOpen(true)} />
        <LeftBar
          navConfig={navConfig}
          onClose={() => setOpen(false)}
          open={open}
        />
      </div>
      <div className="hidden sm:inline w-6">
        <ul className="flex list-none gap-4">
          {navConfig.map((navItem) => (
            <li key={navItem.id} className="">
              {navItem.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex align-items-center gap-2 mr-3">
        <DarkModeButton />
        <AvatarButton />
      </div>
    </div>
  );
};
