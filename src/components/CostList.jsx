export default function CostList({ costs }) {
  return (
    <div className="list">
      <h2>Registros</h2>
      {costs.length === 0 ? (
        <p>Nenhum custo registrado.</p>
      ) : (
        <ul>
          {costs.map((item) => (
            <li key={item.id}>
              <strong>{item.date}</strong> — {item.description} ({item.category}) - R${" "}
              {item.value.toFixed(2)}
              {item.note && <em> - {item.note}</em>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
    