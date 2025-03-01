"use client";
import { useState } from "react";
import "../sandbox/sandbox.css";
import Logo2 from "../components/logo/Logo2";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <main className="grid h-screen grid-cols-4 gap-1">
      {/* <Drawer open={open}>
        <Button
          radius="rounded"
          size="sm"
          className="historyItem"
          iconRight={<EllipsisHorizontal />}
          onClick={() => setOpen(!open)}
        />
        <div className="flex w-full flex-col gap-4">
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
        </div>
      </Drawer>
      <div className="flex flex-1 flex-col items-center justify-center">
        <Button
          radius="rounded"
          size="sm"
          className="historyItem"
          iconRight={<EllipsisHorizontal />}
          onClick={() => setOpen(!open)}
        />
      </div> */}
      <div className="bg-surface-primary col-span-3 flex items-center justify-center">
        <Logo2 />
      </div>
      <div className="bg-surface-primary"></div>
      <div className="bg-surface-primary"></div>
      <div className="bg-surface-primary col-span-2"></div>
      <div className="bg-surface-primary"></div>
    </main>
  );
}
