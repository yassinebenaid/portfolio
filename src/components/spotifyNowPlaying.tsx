import { CurrentlyPlayingSong } from "@/utils/spotify";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<CurrentlyPlayingSong>();
  const getData = async () => {
    const res = await fetch(`/api/spotify`);
    setData(await res.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="relative">
      <AnimatePresence>
        {data?.isPlaying || data?.title ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Listening to{" "}
            <Link
              href={data.songUrl}
              target="_blank"
              className="text-green-500 hover:text-green-500/75 transition-colors"
            >
              {data.title}
            </Link>{" "}
            by <span className="text-zinc-100">{data.artist}</span>.
          </motion.span>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
