import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.list}>
                {stats.map(stat => (
                    <li className={s.item} key={stat.id} style={{ backgroundColor: getRandomColor()}}>
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
}

export default Statistics;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
