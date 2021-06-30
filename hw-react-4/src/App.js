import "./App.css";
import React, { useState, useEffect } from "react";
import { CardItem } from "./Components/CardsItem";
import getApi from "../../hw-react-4/src/api/api";
import { SelectCurrency } from "./Components/Currency";
import { CurrencyContext } from './Components/Context/CurrencyContext';


function App() {
	const [shoppingCardsItem, setShoppingCardsItem] = useState([]);
	const [currency, setCurrency] = useState(1);

	useEffect(() => {
		getApi().then((data) => setShoppingCardsItem(data));
	}, []);

	return (
		<CurrencyContext.Provider value={currency}>
			<SelectCurrency setCurrency={setCurrency}/>
			<CardItem shoppingCards={shoppingCardsItem}/>
		</CurrencyContext.Provider>

	);
}

export default App;
