import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        value={form.name}
        onChange={handleInputChange}
      />

      <input
        type="text"
        placeholder="Sobrenome"
        name="lastName"
        value={form.lastName}
        onChange={handleInputChange}
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        placeholder="Senha"
        name="password"
        value={form.password}
        onChange={handleInputChange}
      />

      <input
        type="password"
        placeholder="Confirme sua senha"
        name="passwordConfirm"
        value={form.passwordConfirm}
        onChange={handleInputChange}
      />

      <button type="submit">Enviar formulário</button>
    </form>
  );
}
