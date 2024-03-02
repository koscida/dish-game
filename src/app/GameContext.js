import React, { createContext, useContext } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
	return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };
