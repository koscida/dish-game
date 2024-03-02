import React from "react";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import BentoIcon from "@mui/icons-material/Bento";
import BlenderIcon from "@mui/icons-material/Blender";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import BungalowIcon from "@mui/icons-material/Bungalow";

import CakeIcon from "@mui/icons-material/Cake";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import CountertopsIcon from "@mui/icons-material/Countertops";
import CabinIcon from "@mui/icons-material/Cabin";
import ChaletIcon from "@mui/icons-material/Chalet";
import CottageIcon from "@mui/icons-material/Cottage";

import DeckIcon from "@mui/icons-material/Deck";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiningIcon from "@mui/icons-material/Dining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

import EggAltIcon from "@mui/icons-material/EggAlt";
import EggIcon from "@mui/icons-material/Egg";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlatwareIcon from "@mui/icons-material/Flatware";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import FlightIcon from "@mui/icons-material/Flight";

import GiteIcon from "@mui/icons-material/Gite";

import HomeIcon from "@mui/icons-material/Home";
import HouseIcon from "@mui/icons-material/House";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";

import IcecreamIcon from "@mui/icons-material/Icecream";

import KebabDiningIcon from "@mui/icons-material/KebabDining";
import KitchenIcon from "@mui/icons-material/Kitchen";

import LiquorIcon from "@mui/icons-material/Liquor";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import NoMealsIcon from "@mui/icons-material/NoMeals";
import NoFoodIcon from "@mui/icons-material/NoFood";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import MicrowaveIcon from "@mui/icons-material/Microwave";

import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";

import PropaneIcon from "@mui/icons-material/Propane";
import PropaneTankIcon from "@mui/icons-material/PropaneTank";
import PedalBikeIcon from "@mui/icons-material/PedalBike";

import RamenDiningIcon from "@mui/icons-material/RamenDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";

import SetMealIcon from "@mui/icons-material/SetMeal";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShowerIcon from "@mui/icons-material/Shower";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import StoreIcon from "@mui/icons-material/Store";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import SnowmobileIcon from "@mui/icons-material/Snowmobile";

import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import TapasIcon from "@mui/icons-material/Tapas";
import TramIcon from "@mui/icons-material/Tram";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

import YardIcon from "@mui/icons-material/Yard";

import VillaIcon from "@mui/icons-material/Villa";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WineBarIcon from "@mui/icons-material/WineBar";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import { Box, Container, Grid } from "@mui/material";

const Icons = () => {
	return (
		<>
			<h1>Icons</h1>
			<Container>
				<Grid container>
					<Grid xs={3} item>
						<p>Food</p>
						<Grid>
							<BakeryDiningIcon />
							<CakeIcon />
							<EggAltIcon />
							<EggIcon />
							<IcecreamIcon />
							<KebabDiningIcon />
							<LocalPizzaIcon />
							<LunchDiningIcon />
							<RamenDiningIcon />
							<RiceBowlIcon />
							<DinnerDiningIcon />
							<SetMealIcon />
							<SoupKitchenIcon />
							<YardIcon />
						</Grid>
					</Grid>
					<Grid xs={3} item>
						<p>Drinks</p>
						<Grid>
							<CoffeeIcon />
							<EmojiFoodBeverageIcon />
							<FreeBreakfastIcon />
							<LocalBarIcon />
							<LocalCafeIcon />
							<LocalDrinkIcon />
							<SportsBarIcon />
							<WineBarIcon />
							<NoDrinksIcon />
						</Grid>
					</Grid>
					<Grid xs={3} item>
						<p>Food and Drink</p>
						<Grid>
							<FastfoodIcon />
							<BrunchDiningIcon />
							<TapasIcon />
							<LiquorIcon />
							<NoFoodIcon />
						</Grid>
					</Grid>
					<Grid xs={3} item></Grid>
				</Grid>
				<Grid container>
					<Grid xs={3} item>
						<p>Appliance</p>
						<Grid>
							<CoffeeMakerIcon />
							<CountertopsIcon />
							<KitchenIcon />
							<OutdoorGrillIcon />
							<MicrowaveIcon />
							<TableRestaurantIcon />
							<TakeoutDiningIcon />
							<BentoIcon />
							<BlenderIcon />
							<DoorSlidingIcon />
							<PropaneIcon />
							<PropaneTankIcon />
							<MenuBookIcon />
						</Grid>
					</Grid>
					<Grid xs={3} item>
						<p>Utensil</p>
						<Grid>
							<FlatwareIcon />
							<DiningIcon />
							<RestaurantIcon />
							<RestaurantMenuIcon />
							<LocalDiningIcon />
							<NoMealsIcon />
						</Grid>
					</Grid>
					<Grid xs={3} item></Grid>
					<Grid xs={3} item>
						<p>Other</p>
						<Grid>
							<ShowerIcon />
							<WaterDropIcon />
							<FireplaceIcon />
							<AcUnitIcon />
							<LocalFireDepartmentIcon />

							<SevereColdIcon />
							<WhatshotIcon />
						</Grid>
					</Grid>
				</Grid>

				<Grid container>
					<Grid xs={3} item>
						<p>Place</p>
						<Grid>
							<BreakfastDiningIcon />
							<FoodBankIcon />
							<StorefrontIcon />
							<DeckIcon />
							<HomeIcon />
							<HouseIcon />
							<StoreIcon />
							<LocalConvenienceStoreIcon />
							<HouseSidingIcon />
							<HouseboatIcon />
							<BungalowIcon />
							<CabinIcon />
							<ChaletIcon />
							<CottageIcon />
							<GiteIcon />
							<HolidayVillageIcon />
							<VillaIcon />
						</Grid>
					</Grid>
					<Grid xs={3} item>
						<p>Transportation</p>
						<Grid>
							<DeliveryDiningIcon />
							<AgricultureIcon />
							<AirportShuttleIcon />
							<DirectionsCarIcon />
							<DirectionsBusIcon />
							<DirectionsRailwayIcon />
							<DirectionsTransitIcon />
							<DirectionsBoatIcon />
							<ElectricBikeIcon />
							<ElectricScooterIcon />
							<ElectricCarIcon />
							<ElectricRickshawIcon />
							<FlightIcon />
							<LocalShippingIcon />
							<PedalBikeIcon />
							<SnowmobileIcon />
							<TramIcon />
							<TwoWheelerIcon />
						</Grid>
					</Grid>
					<Grid xs={3} item></Grid>
					<Grid xs={3} item></Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Icons;
