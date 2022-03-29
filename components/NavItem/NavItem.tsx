import { useRouter } from "next/router";
import React from "react";

export default function NavItem({ content, href }) {

    const { pathname } = useRouter();

  return (
    <li className="text-sm font-semibold">
      <a href={href} className={`block px-6 md:px-4 py-2 text-white md:rounded rounded-none ${pathname === href ? "bg-l-green" : ""}`} aria-current="page">{content}</a>
    </li>
  );
}