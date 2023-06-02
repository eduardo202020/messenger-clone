"use client";

import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return <button onClick={() => signOut()}>page</button>;
};

export default page;
