import React from "react";
import "./App.css";
import { GameProvider } from "./app/GameContext";
import MUIResponsiveAppBar from "./components/common/MUIResponsiveAppBar";
import { Box, Container } from "@mui/material";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
	return (
		<GameProvider>
			<MUIResponsiveAppBar />
			<Container>
				<Box maxWidth="xl">
					<BrowserRouter>
						<Routes>
							{/* Default Route */}

							<Route path="/" element={<Home />} />
						</Routes>
					</BrowserRouter>
					<Outlet />
				</Box>
			</Container>
		</GameProvider>
	);
}

export default App;
