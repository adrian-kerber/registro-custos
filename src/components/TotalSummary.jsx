export default function TotalSummary({ costs }) {
  const total = costs.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="summary">
      <h3>Total Acumulado: R$ {total.toFixed(2)}</h3>
    </div>
  );
}
