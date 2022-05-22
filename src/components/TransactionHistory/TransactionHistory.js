import s from './TransactionHistory.module.css';
function TransactionHistory({ history }) {
  return (
      <section className={s.transaction_section}>
        <table className={s.transaction_history}>
            <thead>
                <tr>
                    <th className={s.tabel_haderCell}>Type</th>
                    <th className={s.tabel_haderCell}>Amount</th>
                    <th className={s.tabel_haderCell}>Currency</th>
                </tr>
          </thead>
          <tbody>
                {history.map(transact => (
                    <tr  className={s.tabel_dataRow} key={transact.id}>
                        <td className={s.tabel_dataCell}>{transact.type}</td>
                        <td className={s.tabel_dataCell}>{transact.amount}</td>
                        <td className={s.tabel_dataCell}>{transact.currency}</td>
                    </tr>
                ))}
          </tbody>
        </table>
    </section>
  );
}

export default TransactionHistory