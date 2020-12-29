import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';

const Detail = ({ location, history }) => {
	useEffect(() => {
		console.log(location);
		console.log('실행@@@@@@@@@@@@@');
		if (location.state == undefined) {
			console.log('state undefined error');
			history.push('/');
		}
	}, []);

	const { state } = location;
	console.log(state);

	return (
		<Fragment>
			{state && (
				<Container>
					<MoviesMovie>
						<MoviePoster
							src={state.poster}
							alt={state.title}
							alt={state.title}
						/>
						<div>
							<MovieTitle>{state.title}</MovieTitle>
							<h5>{state.year}</h5>
							<MovieGenres>
								{state.genres.map((genre, index) => (
									<MovieGenresGenre key={index}>
										{state.genres.length !== index + 1
											? genre + ','
											: genre}
										&nbsp;
									</MovieGenresGenre>
								))}
							</MovieGenres>
							<MovieSummary>{state.summary}</MovieSummary>
						</div>
					</MoviesMovie>
				</Container>
			)}
		</Fragment>
	);
};

const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MoviesMovie = styled.div`
	width: 50%;
	background-color: white;
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

export default Detail;
