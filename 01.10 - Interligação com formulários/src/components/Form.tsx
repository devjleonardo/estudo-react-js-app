import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Daniel");

  return (
    <div>
      <input
        type="text"
        placeholder="nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>{name}</div>
    </div>
  );
}
