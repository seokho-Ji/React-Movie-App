import axios from 'axios';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Movie from '../components/Movie/index';
import styled from 'styled-components';

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [onMovies, setMovies] = useState([]);

	const getMovies = useCallback(async () => {
		try {
			const {
				data: {
					data: { movies },
				},
			} = await axios.get(
				'https://yts.mx/api/v2/list_movies.json/sort_by=rating',
			);
			setMovies(movies);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
		}
	}, []);

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<Fragment>
			<Container>
				{isLoading ? (
					<Loader>
						<LoaderText>Loading...</LoaderText>
					</Loader>
				) : (
					<Movies>
						{onMovies &&
							onMovies.map((movie) => {
								const {
									id,
									year,
									title,
									summary,
									medium_cover_image: poster,
									genres,
								} = movie;
								return (
									<Movie
										key={id}
										id={id}
										year={year}
										title={title}
										summary={summary}
										poster={poster}
										genres={genres}
									/>
								);
							})}
					</Movies>
				)}
			</Container>
		</Fragment>
	);
};

const Container = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;
const Loader = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 300;
	font-size: 1.6rem;
`;
const LoaderText = styled.span``;

const Movies = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: flex-start;
	padding: 5em;
	padding-top: 7em;
	width: 90%;

	@media screen and (max-width: 400px) {
		padding: 70px 0 70px 0;
	}
`;

export default Home;
