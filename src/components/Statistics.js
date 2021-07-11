import PropTypes from 'prop-types';

export default function Statistic({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="">
        {stats.map(({ id, label, percentage }) => (
          <li className="" key={id}>
            <span className={label}>{label}</span>
            <span className={percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
