import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkBox = styled.div`
	width: 100px;
	display: flex;
	flex-direction: column;
	position: fixed;
	align-items: center;
	top: 50px;
	left: 0;
	margin: 0.6rem;
	z-index: 1;
	border-radius: 5px;
	background-color: white;
	box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3),
		0 5px 12px rgba(133, 133, 133, 0.22);

	& a {
		width: 100%;
		color: #0066ff;
		font-size: 1.4rem;
		font-weight: bold;
		text-align: center;
		text-decoration: none;
		margin: 0;
		padding: 1rem 2rem 1rem 2rem;
	}
`;

const Navigation = () => {
	return (
		<LinkBox>
			<Link to="/">HOME</Link>
			<Link to="/about">ABOUT</Link>
		</LinkBox>
	);
};
export default Navigation;
