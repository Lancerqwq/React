import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Laptops from "../Laptop";
import LaptopCards from "../Laptop/LaptopCards";
import Products from "../Products";

function Routes(props) {
	return (
		<Switch>
			<Route exact path='/' render={() => <div>Home</div>} />
			<Route exact path='/contacts' render={() => <div>contacts</div>} />
			<Route exact path='/electronics/' component={Products} />
			<Route exact path='/electronics/laptop/' component={Laptops} />
			<Route exact path='/electronics/laptop/:name' component={LaptopCards} />
			<Route exact path='/login' render={() => <div>Login</div>} />
			<Route exact path='' render={() => <div>Not Found</div>} />
			<Redirect to='' />
		</Switch>
	);
}

export default Routes;
