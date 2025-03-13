"use client";
import { useState } from "react";
import Button from "../components/button/Button";
import Drawer from "../components/drawer/Drawer";
import HistoryItem from "../components/historyItem/HistoryItem";
import EllipsisHorizontal from "../components/icons/EllipsisHorizontal";
import Logo2 from "../components/logo/Logo2";
import Paragraph from "../components/typography/paragraph/Paragraph";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <main className="column flex h-screen">
      {/* <DrawerControls open={open} setOpen={setOpen} /> */}
      <Drawer>
        {/* <Button
          radius="rounded"
          size="sm"
          className="historyItem"
          iconRight={<EllipsisHorizontal />}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex items-center gap-2 p-1">
          <Logo2 className="h-6" />
          <Paragraph size="md" weight="bold">
            Lumi
          </Paragraph>
        </div>
        <div className="mt-10 flex w-full flex-col gap-4">
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
          <HistoryItem onClick={() => console.log("clicked")} />
        </div>
      </Drawer>
      <div className="chatArea flex flex-1 flex-col items-center justify-center">
        <Button
          radius="rounded"
          size="sm"
          className="historyItem"
          iconRight={<EllipsisHorizontal />}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* <div className="bg-surface-primary col-span-3 flex items-center justify-center">
        <Logo2 />
      </div>
      <div className="bg-surface-primary"></div>
      <div className="bg-surface-primary"></div>
      <div className="bg-surface-primary col-span-2"></div>
      <div className="bg-surface-primary"></div> */}
    </main>
  );
}
