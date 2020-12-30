import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<HashRouter>
				<Navigation />
				<Route path="/" exact={true} component={Home} />
				<Route path="/about" component={About} />
				<Route path="/movie/:id" component={Detail} />
			</HashRouter>
		</Fragment>
	);
};

export const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
	}
	html {
		font-size: 10px;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', 
				Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background-color: #eff3f7;
		font-size: 1rem;
	}
	html, body {
		width: 100%;
		height: 100%;
		display:flex;
		justify-content: center;	
	}
`;

export default App;
