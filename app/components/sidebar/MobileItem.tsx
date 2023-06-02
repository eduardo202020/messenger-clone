"use client";

import React from "react";
import { IconType } from "react-icons";

import Link from "next/link";
import clsx from "clsx";

type Props = {
  href: string;
  icon: IconType;
  onClick?: () => void;
  active?: boolean;
};

const MobileItem = ({ href, icon: Icon, active, onClick }: Props) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `
        group flex gap-x-3 leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100
        `,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-6 w-6 " />
    </Link>
  );
};

export default MobileItem;