import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player/lazy';
import '../scss/detail.scss';

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	}
	console.log(movie);
	useEffect(() => {
		getMovie();
		console.log(movie);
	}, []);
	return (
		<div>
			{
				loading ?
					<h1 className="loading">Loading...</h1> :
					<div>
						<div className="detail-bg" style={{
							backgroundImage: `url(${movie.background_image_original})`
						}}></div>
						<div className="movie-info">
							<div className="movie-info__basic">
								<img src={movie.large_cover_image} alt={movie.title} className="movie-info__cover" />
								<div className="movie-info__details">
									<h1 className="movie-info__title">{movie.title_long}</h1>
									<div className="row-center-between">
										<ul className="movie-info__genres">
											{movie.genres && movie.genres.map(g => (<li key={g}>{g}</li>))}
										</ul>
										<div className="movie-info__rating">⭐️<span>{movie.rating}</span></div>
									</div>
								</div>
							</div>
							{/* <ReactPlayer
								url={`http://youtu.be/${movie.yt_trailer_code}`}
								width="1240px"
								height="800px"
								controls={true}
							/> */}
						</div>
					</div>
			}
		</div>
	);
}

export default Detail;