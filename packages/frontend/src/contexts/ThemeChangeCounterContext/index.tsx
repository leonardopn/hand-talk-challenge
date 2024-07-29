"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface ThemeChangeCounterContextProps {
	themeChangeCounter: number;
	setThemeChangeCounter: Dispatch<SetStateAction<number>>;
}

interface ThemeChangeCounterContextProviderProps {
	children: ReactNode;
}

const ThemeChangeCounterContext = createContext<ThemeChangeCounterContextProps>(
	{} as ThemeChangeCounterContextProps
);

export function ThemeChangeCounterContextProvider({
	children,
}: ThemeChangeCounterContextProviderProps) {
	const [themeChangeCounter, setThemeChangeCounter] = useState(0);

	return (
		<ThemeChangeCounterContext.Provider value={{ themeChangeCounter, setThemeChangeCounter }}>
			{children}
		</ThemeChangeCounterContext.Provider>
	);
}

export function useThemeChangeCounterContext() {
	const contextState = useContext(ThemeChangeCounterContext);

	if (!contextState) {
		throw new Error(
			"O hook não tem acesso ao contexto. Envolva os componentes necessários em um ThemeChangeCounterContextProvider"
		);
	}

	return contextState;
}
