import Image from "next/image";
import defaultAvatar from "@/public/default-avatar.jpg";
export default function UserAvatar({ src }: { src?: string }) {
    return (
        <div>
            <Image
                src={src || defaultAvatar}
                alt="user avatar"
                width={28}
                height={28}
                className="rounded-full
                object-cover"
            />
        </div>
    );
}
