import Image from "next/image";

type AvatarProps = {
  className?: string;
  src: string;
  priority: boolean;
};

export default function Avatar({
  className = "",
  src,
  priority = false,
}: AvatarProps) {
  return (
    <Image
      src={src}
      height={160}
      width={160}
      alt="Yassine Benaid Profile"
      className={`h-40 w-40 rounded-full ${className}`}
    />
  );
}
