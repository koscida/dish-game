import React from "react";

import { Box, Container, Grid } from "@mui/material";

import Icons from "./Icons";
import Game from "./game/Game";

const Home = () => {
	return (
		<>
			<h1>Home</h1>
			<Game />
			{/* <Icons /> */}
		</>
	);
};

export default Home;
