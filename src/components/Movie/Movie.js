import React, { Fragment, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// em: 자신의 부모요소의 fontSize를 따라감
// rem: html의 fontSize부터 시작
const MoviesMovie = styled(Link)`
	width: 48%;
	background-color: white;
	text-decoration: none;
	margin-bottom: 7rem;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	font-weight: 300;
	padding: 2em;
	color: #adaeb9;
	box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3),
		0 5px 12px rgba(133, 133, 133, 0.22);
	border-radius: 5px;

	@media screen and (max-width: 1000px) {
		width: 100%;
		flex-direction: column;
	}

	& h3,
	& h5 {
		font-weight: 300;
		margin: 0;
	}
`;
// 영화 타이틀
const MovieTitle = styled.h3`
	margin-bottom: 5px;
	font-size: 2.4em;
	color: #2c2c2c;
`;
// 줄거리
const MovieSummary = styled.p`
	font-size: 1.4em;
`;
// 포스터
const MoviePoster = styled.img`
	position: relative;
	top: -50px;
	max-width: 150px;
	width: 100%;
	margin-right: 3em;
	box-shadow: -10px 19px 38px rgba(83, 83, 83, 0.3),
		10px 15px 12px rgba(80, 80, 80, 0.22);
`;
const MovieGenres = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 5px 0;
`;
const MovieGenresGenre = styled.li`
	font-size: 1.4em;
`;
const MoreText = styled.button`
	font-size: 1rem;
	border: 0;
	border-radius: 5px;
	margin-left: 2px;
	color: #adaeb9;
	&:focus {
		border: none;
		outline: none;
	}
`;

const Movie = ({ id, year, title, summary, poster, genres }) => {
	const [moreTrue, setMoreTrue] = useState(false);
	const [btnText, setBtnText] = useState('more');

	const onMoreText = useCallback(() => {
		if (moreTrue) {
			setMoreTrue(false);
			setBtnText('more');
		} else {
			setMoreTrue(true);
			setBtnText('close');
		}
	}, [moreTrue]);

	return (
		<Fragment>
			<MoviesMovie
				to={{
					pathname: `/movie/${id}`,
					state: {
						year,
						title,
						summary,
						poster,
						genres,
					},
				}}
			>
				<MoviePoster src={poster} alt={title} alt={title} />
				<div>
					<MovieTitle>{title}</MovieTitle>
					<h5>{year}</h5>
					<MovieGenres>
						{genres.map((genre, index) => (
							<MovieGenresGenre key={index}>
								{genres.length !== index + 1
									? genre + ','
									: genre}
								&nbsp;
							</MovieGenresGenre>
						))}
					</MovieGenres>
					<MovieSummary>
						{moreTrue ? summary : summary.slice(0, 200) + '...'}
						{summary.length >= 200 && (
							<MoreText onClick={onMoreText}>{btnText}</MoreText>
						)}
					</MovieSummary>
				</div>
			</MoviesMovie>
		</Fragment>
	);
};

Movie.propTypes = {
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
