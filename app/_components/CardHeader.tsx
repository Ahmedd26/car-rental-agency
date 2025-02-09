import { ReactNode } from "react";
import LikeButton from "./LikeButton";
interface Props {
  title: string;
  subtitle: ReactNode;
}

function CardHeader({ title, subtitle }: Props) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-secondary-500">{title}</h3>
        <h4 className="text-sm font-bold text-secondary-300">{subtitle}</h4>
      </div>
      <LikeButton />
    </div>
  );
}

export default CardHeader;
