import Image from "next/image";

type AvatarProps = {
  className?: string;
  src: string;
};

export default function Avatar({ className = "", src }: AvatarProps) {
  return (
    <Image
      src={src}
      height={48}
      width={48}
      alt="Zach Harris Profile"
      className={`h-12 w-12 rounded-full ${className}`}
    />
  );
}
