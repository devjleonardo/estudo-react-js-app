import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState(["Daniel", "Arthur"]);

  setTimeout(() => {
    setPerson((state) => {
      console.log(state);
      return [...state, "Cleberson"];
    });
  }, 2000);

  return (
    <div>
      <h1>Perfil</h1>
      <p>Este é o perfil de {person}</p>
    </div>
  );
}
