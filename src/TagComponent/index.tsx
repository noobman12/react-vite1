import React from "react";
import { ImCross } from "react-icons/im";
type Props = { name?: string; icon?: boolean; backgroundColor?: string };

export default function index({ name, icon = false, backgroundColor }: Props) {
  return (
    <>
      <div
        className='flex items-center rounded w-[100px] justify-around'
        style={{ backgroundColor }}
      >
        {name}
        {icon && <ImCross></ImCross>}
      </div>
    </>
  );
}
