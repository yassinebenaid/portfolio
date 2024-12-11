import {
  LayoutGroup,
  motion,
  AnimationSequence,
  useAnimate,
  stagger,
} from "framer-motion";
import {
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { twMerge } from "tailwind-merge";

const gameboy = twMerge(
  "relative bg-zinc-700 w-[350px] h-[570px] p-[20px] rounded-[20px]",
  "after:content-[''] after:block after:absolute after:top-[calc(100%-34px)] after:left-[5px] after:w-[calc(100%-10px)] after:h-[50px] after:rounded-[50%] after:bg-zinc-700"
);

const screenArea = twMerge(
  "bg-zinc-900 relative pt-[35px] px-[50px] pb-[15px] rounded-[15px]",
  "after:bg-zinc-900 after:content-[''] after:block after:absolute after:top-[calc(100%-20px)] after:left-[calc(100%-10px)] after:left-[5px] after:w-[calc(100%-10px)] after:h-[30px] after:rounded-[50%]"
);

const display = twMerge(
  "bg-zinc-300 w-[210px] h-[190px] rounded-[3px] mb-[15px] block relative overflow-hidden"
);

const label = twMerge("h-[20px] block");

const nintendo = twMerge(
  "px-2 w-fit text-zinc-800 font-bold text-center text-sm mt-8 mb-0 mx-auto rounded-xl border-[2px] border-solid border-zinc-800"
);

const controls = twMerge("flex justify-between");

const dpad = twMerge(
  "relative inline-block w-[90px] h-[90px] z-[5]",
  "[&>*]:w-[33%] [&>*]:h-[33%]"
);

const dpadUp = twMerge(
  "absolute top-[calc(0%+4px)] left-[33%] rounded-t-lg bg-gradient-to-t from-zinc-900 to-zinc-900 active:to-zinc-950 cursor-pointer z-1 flex items-center justify-center text-zinc-700"
);

const dpadRight = twMerge(
  "absolute top-[33%] left-[calc(66%-4px)] rounded-r-lg bg-gradient-to-r from-zinc-900 to-zinc-900 active:to-zinc-950 cursor-pointer z-1 flex items-center justify-center text-zinc-700"
);

const dpadDown = twMerge(
  "absolute top-[calc(66%-4px)] left-[33%] rounded-b-lg bg-gradient-to-b from-zinc-900 to-zinc-900 active:to-zinc-950 cursor-pointer z-1 flex items-center justify-center text-zinc-700"
);

const dpadLeft = twMerge(
  "absolute top-[33%] left-[calc(0%+4px)] rounded-l-lg bg-gradient-to-r from-zinc-900 to-zinc-900 active:to-zinc-950 cursor-pointer z-1 flex items-center justify-center text-zinc-700"
);

const dpadMiddle = twMerge("absolute top-[33%] left-[33%] bg-zinc-900 z-0");

const ab = twMerge("relative block w-[120px] h-[90px]");

const abButton = twMerge(
  "absolute inline-flex items-center justify-center font-lg font-bold w-10 h-10 rounded-full bg-zinc-900 active:bg-zinc-950 text-center text-zinc-700 selection:bg-transparent"
);

const aButton = twMerge(abButton, "top-[15px] right-[10px]");

const bButton = twMerge(abButton, "top-[35px] left-0");

const startSelect = twMerge("flex w-full h-16 justify-center items-center");

const startSelectShared = twMerge(
  "inline-block text-zinc-800 font-bold uppercase text-xs w-16 text-center mt-16",
  "before:content-[''] before:block before:mt-0 before:mb-0.5 before:mx-auto before:w-8 before:h-2 before:rounded-[40%] before:bg-zinc-900 before:active:bg-zinc-950"
);

const startButton = twMerge(startSelectShared);

const selectButton = twMerge(startSelectShared);

interface GameboyProps {
  children?: React.ReactNode;
  onAction?: (action: GameboyAction) => void;
}

export type GameboyAction = "up" | "right" | "down" | "left" | "a" | "b";

export default function Gameboy({ children, onAction }: GameboyProps) {
  const handleAction = useCallback(
    (action: GameboyAction) => {
      if (typeof onAction === "function") onAction(action);
    },
    [onAction]
  );

  const translateKeyEventToAction = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          handleAction("up");
          break;
        case "ArrowRight":
          handleAction("right");
          break;
        case "ArrowDown":
          handleAction("down");
          break;
        case "ArrowLeft":
          handleAction("left");
          break;
        case "a":
          handleAction("a");
          break;
        case "b":
          handleAction("b");
          break;
      }
    },
    [handleAction]
  );

  useEffect(() => {
    window.addEventListener("keydown", translateKeyEventToAction);
    return () =>
      window.removeEventListener("keydown", translateKeyEventToAction);
  }, [translateKeyEventToAction]);

  return (
    <div className={gameboy}>
      <div className={screenArea}>
        <div className={display}>{children}</div>
        <div className={label} />
      </div>

      <div className={nintendo}>zachbharris</div>

      <div className={controls}>
        <div className={dpad}>
          <div className={dpadMiddle} />
          <button className={dpadUp} onClick={() => handleAction("up")}>
            <ChevronUp />
          </button>
          <button className={dpadRight} onClick={() => handleAction("right")}>
            <ChevronRight />
          </button>
          <button className={dpadDown} onClick={() => handleAction("down")}>
            <ChevronDown />
          </button>
          <button className={dpadLeft} onClick={() => handleAction("left")}>
            <ChevronLeft />
          </button>
        </div>

        <div className={ab}>
          <button className={aButton} onClick={() => handleAction("a")}>
            A
          </button>
          <button className={bButton} onClick={() => handleAction("b")}>
            B
          </button>
        </div>
      </div>

      <div className={startSelect}>
        <button className={startButton}>Start</button>
        <button className={selectButton}>Select</button>
      </div>
    </div>
  );
}

export function GameboyIntro({ text = "zachbharris" }) {
  const [scope, animate] = useAnimate();

  const sequence: AnimationSequence = useMemo(
    () => [
      [scope.current, { opacity: 1, y: 0 }],
      ["span", { y: 120, x: -24 }],
      [
        "span",
        { x: 0, y: 0 },
        { delay: stagger(0.05), velocity: 1000, type: "spring" },
      ],
      [scope.current, { opacity: 0 }, { type: "spring", delay: 1 }],
    ],
    [scope]
  );

  useEffect(() => {
    animate(sequence);
  }, [animate, sequence, scope]);

  return (
    <LayoutGroup>
      <motion.div
        ref={scope}
        className="font-bold italic uppercase block absolute inset-0 m-auto w-fit h-fit text-xl tracking-tighter text-blue-700"
        initial={{ opacity: 1, y: 0 }}
      >
        {text.split("").map((letter, index) => (
          <motion.span
            className="inline-block"
            key={index}
            initial={{ y: 120, x: -24 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </LayoutGroup>
  );
}

function GameboyIntroLetter({
  letter,
  delay,
  index,
}: {
  letter: string;
  delay?: number;
  index: number;
}) {
  const [scope, animate] = useAnimate();

  const initial = useMemo(
    () => ({
      y: 120,
      x: -24 - index * 8,
    }),
    [index]
  );

  useEffect(() => {
    const sequence: AnimationSequence = [
      [scope.current, initial, { delay }],
      [scope.current, { y: 0, x: 0 }, { velocity: 1000, type: "spring" }],
    ];

    animate(sequence);
  }, [animate, delay, scope, index, initial]);

  return (
    <motion.span
      ref={scope}
      className="inline-block text-blue-700"
      initial={initial}
    >
      {letter}
    </motion.span>
  );
}
