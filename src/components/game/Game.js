import {
	Box,
	Button,
	Chip,
	Container,
	Divider as MUIDivider,
	Grid,
	LinearProgress,
	Stack,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

// consts

const initDishesCabinet = ["Item 1", "Item 2", "Item 3"];

const meals = {
	breakfast: [{ name: "Egg Breakfast", dishes: [] }],
};

const Game = () => {
	const [cabinet, setCabinet] = useState(initDishesCabinet);
	const [dirtyCounter, setDirtyCounter] = useState(initDishesCabinet);
	const [dirtySink, setDirtySink] = useState(initDishesCabinet);
	const [rinsedSink, setRinsedSink] = useState(initDishesCabinet);
	const [rinsedCounter, setRinsedCounter] = useState(initDishesCabinet);
	const [washing, setWashing] = useState(initDishesCabinet);
	const [drying, setDrying] = useState(initDishesCabinet);
	const [dryRack, setDryRack] = useState(initDishesCabinet);

	const LinearProgressWithLabel = ({ progress }) => (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Box sx={{ width: "100%", mr: 1, ml: 2 }}>
					<LinearProgress variant="determinate" value={progress} />
				</Box>
				{/* <Box sx={{ minWidth: 35 }}>
					<Typography
						variant="body2"
						color="text.secondary"
					>{`${Math.round(progress)}%`}</Typography>
				</Box> */}
			</Box>
		</Box>
	);

	// components

	const Divider = () => <MUIDivider sx={{ mt: 1, mb: 1 }} />;

	const RiskDisplay = ({ riskProgress, spaceProgress, timeProgress }) => (
		<Grid container>
			<Grid item xs={4}>
				<LinearProgressWithLabel progress={riskProgress} />
				<Typography align="center" color="text.secondary">
					Risk
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<LinearProgressWithLabel progress={spaceProgress} />
				<Typography align="center" color="text.secondary">
					Space
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<LinearProgressWithLabel progress={timeProgress} />
				<Typography align="center" color="text.secondary">
					Time
				</Typography>
			</Grid>
		</Grid>
	);

	// render

	return (
		<>
			<h1>Game</h1>
			<Grid container>
				<Grid item xs={3}>
					<h4>Cabinets</h4>
					<h5>For Use</h5>
					<Stack direction="row" spacing={1}>
						{cabinet.map((c) => (
							<Chip key={c} label={c} />
						))}
					</Stack>
				</Grid>

				<Grid item xs={3}>
					<h4>Counter</h4>
					<h5>Dirty</h5>
					<Stack direction="row" spacing={1}>
						{dirtyCounter.map((c) => (
							<Chip key={c} label={c} />
						))}
					</Stack>
					<Divider />
					<Button>Rinse</Button>
					<Divider />
					<h5>Rinsed</h5>
					<Stack direction="row" spacing={1}>
						{rinsedCounter.map((c) => (
							<Chip key={c} label={c} />
						))}
					</Stack>
					<Divider />
					<Button>Wash</Button>
					<Divider />
					<RiskDisplay
						riskProgress={50}
						spaceProgress={50}
						timeProgress={50}
					/>
				</Grid>

				<Grid item xs={3}>
					<h4>Sink</h4>
					<h5>Dirty</h5>
					<Stack direction="row" spacing={1}>
						{dirtySink.map((c) => (
							<Chip key={c} label={c} />
						))}
					</Stack>
					<Divider />
					<Button>Rinse</Button>

					<Divider />
					<h5>Rinsed</h5>
					<Stack direction="row" spacing={1}>
						{rinsedSink.map((c) => (
							<Chip key={c} label={c} />
						))}
					</Stack>
					<Divider />
					<Button>Wash</Button>
					<Button>Store</Button>

					<Divider />
					<h5>Washing</h5>
					<Stack direction="row" spacing={1}>
						{washing.map((c) => (
							<Chip key={c} label={c} />
						))}
					</Stack>
					<Divider />
					<RiskDisplay
						riskProgress={50}
						spaceProgress={50}
						timeProgress={50}
					/>
				</Grid>

				<Grid item xs={3}>
					<h4>Dry Rack</h4>
					<h5>Drying</h5>
					<Stack direction="row" spacing={1}>
						{drying.map((c) => (
							<Chip key={c} label={c} />
						))}
					</Stack>
					<Divider />
					<Button>Dry</Button>

					<Divider />
					<h5>Dry</h5>
					<Stack direction="row" spacing={1}>
						{dryRack.map((c) => (
							<Chip key={c} label={c} />
						))}
					</Stack>
					<Divider />
					<Button>Put Away</Button>
					<Divider />
					<RiskDisplay
						riskProgress={50}
						spaceProgress={50}
						timeProgress={50}
					/>
				</Grid>
			</Grid>
			<h2>Meals</h2>
			<Grid container>
				<Grid item xs={4}>
					<h4>Breakfast</h4>
				</Grid>
				<Grid item xs={4}>
					<h4>Lunch</h4>
				</Grid>
				<Grid item xs={4}>
					<h4>Dinner</h4>
				</Grid>
			</Grid>
		</>
	);
};

export default Game;
