import React, { ReactNode, useState } from "react";

type CounteProps = {
  children: ReactNode;
  click: React.Dispatch<React.SetStateAction<number>>;
};

function Counter({ click, children }: CounteProps) {
  return (
    <div>
      <div>{children}</div>
      <button onClick={() => click((prev) => prev + 1)}>+</button>
      <button onClick={() => click((prev) => prev - 1)}>-</button>
    </div>
  );
}

export default Counter;
