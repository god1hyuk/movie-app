import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title }) {
	return (
		<div className="movie-card">
			<Link to={`/movie/${id}`} className="movie-card__link">
				<h2 className="movie-card__title">{title}</h2>
				<img src={coverImg} alt={title} className="movie-card__cover" />
				<div className="movie-card__bg"></div>
			</Link>
			{/* <p>{summary}</p>
				<ul>
					{genres.map(g => (
						<li key={g}>{g}</li>
					))}
				</ul> */}
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;