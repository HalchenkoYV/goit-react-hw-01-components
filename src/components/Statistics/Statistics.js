import s from './Statistics.module.css'
function Statistics({ title = null, data }) {
  return (
      <section className={s.statistics}>
        <h2 className={s.title}>{title === null && "Upload stats"}</h2>

          <ul className={s.statList}>
              {data.map(d => (
                  <li key={d.id} className={s.item} style={{backgroundColor:getRandomHexColor()}}>
                    <span className="label">{d.label} </span>
                    <span className="percentage">{d.percentage}%</span>
                  </li>
              ))}
  </ul>
</section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default Statistics