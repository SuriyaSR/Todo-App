import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <p>
        <b>{count}</b> / 0 todos completed
      </p>
  )
}
