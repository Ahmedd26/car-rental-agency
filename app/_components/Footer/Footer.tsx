import Logo from "@/app/_components/Logo";
import LinkList, { type TLinks } from "./LinkList";
import Link from "next/link";

const aboutList: TLinks[] = [
  { href: "/", label: "How it works" },
  { href: "/", label: "Featured" },
  { href: "/", label: "Partnership" },
  { href: "/", label: "Business Relation" },
];
const socialsList: TLinks[] = [
  { href: "/", label: "Discord" },
  { href: "/", label: "Instagram" },
  { href: "/", label: "Twitter" },
  { href: "/", label: "Facebook" },
];
const communityList: TLinks[] = [
  { href: "/", label: "Events" },
  { href: "/", label: "Blog" },
  { href: "/", label: "Podcast" },
  { href: "/", label: "Invite a friend" },
];
export default function Footer() {
  return (
    <footer className="px-6 md:bg-white md:px-16 md:py-20">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="mb-12 flex flex-col md:flex-1">
          <Logo />
          <p className="mt-4 text-xs font-medium text-secondary-300 sm:text-sm md:text-base">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 md:flex-[3] md:justify-end">
          <LinkList links={aboutList} title="About" />
          <LinkList links={socialsList} title="Socials" />
          <LinkList links={communityList} title="Community" />
        </div>
      </div>
      <div className="flex flex-col pt-12 md:mt-9 md:flex-row-reverse md:items-center md:justify-between md:border-t md:border-secondary-200 md:pt-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-8">
          <Link
            href="/"
            className="text-xs font-semibold text-secondary-500 md:text-base"
          >
            Privacy & Policy
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-secondary-500 md:text-base"
          >
            Terms & Condition
          </Link>
        </div>
        <Link
          href="/"
          className="text-xs font-semibold text-secondary-500 md:text-base"
        >
          &copy; {new Date().getFullYear()} MORENT/ All rights reserved
        </Link>
      </div>
    </footer>
  );
}
