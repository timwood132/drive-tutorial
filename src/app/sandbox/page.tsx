"use client";
import { useState } from "react";
import Drawer from "../components/drawer/Drawer";
import "../sandbox/sandbox.css";
import EllipsisHorizontal from "../components/icons/EllipsisHorizontal";
import Button from "../components/button/Button";
import HistoryItem from "../components/historyItem/HistoryItem";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex h-screen">
      <Drawer open={open}>
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
      </div>
    </main>
  );
}
