import { useState } from "react";

export default function CostForm({ onAdd }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !description || !category || !value) return;

    const newCost = {
      id: Date.now(),
      date,
      description,
      category,
      value: parseFloat(value),
      note,
    };

    onAdd(newCost);

    // Reset
    setDate("");
    setDescription("");
    setCategory("");
    setValue("");
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Data:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>Descrição:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Categoria:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Selecione</option>
        <option value="insumo">Insumo</option>
        <option value="equipamento">Equipamento</option>
        <option value="serviço">Serviço</option>
        <option value="outros">Outros</option>
      </select>

      <label>Valor (R$):</label>
      <input type="number" step="0.01" value={value} onChange={(e) => setValue(e.target.value)} />

      <label>Observações:</label>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />

      <button type="submit">Adicionar Custo</button>
    </form>
  );
}
