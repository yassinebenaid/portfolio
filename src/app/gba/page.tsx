"use client";

import Gameboy, { GameboyAction, GameboyIntro } from "@/components/gameboy";
import { useState } from "react";

export default function GbaPage() {
  const [state, setState] = useState({
    status: "intro",
  });

  const handleAction = (action: GameboyAction) => {
    console.log(action);
  };

  return (
    <div className="max-w-lg mx-auto">
      <Gameboy onAction={handleAction}>
        <GameboyIntro />
      </Gameboy>
    </div>
  );
}
