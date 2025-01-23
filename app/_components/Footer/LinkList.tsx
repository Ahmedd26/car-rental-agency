import Link from "next/link";
import React from "react";

export type TLinks = {
  href: string;
  label: string;
};

export interface LinkListProps {
  title: string;
  links: TLinks[];
}

export default function LinkList({ title, links }: LinkListProps) {
  return (
    <div>
      <h4 className="mb-4 text-xl font-semibold text-secondary-500">{title}</h4>
      <ul className="space-y-2 md:space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-base font-medium text-secondary-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
