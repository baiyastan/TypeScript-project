import React from "react";

type HeadingProps = { title: string; isActive: boolean };

function Heading({ title, isActive }: HeadingProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{isActive && "Active"}</div>
    </div>
  );
}

export default Heading;
