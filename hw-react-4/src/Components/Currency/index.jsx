import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EuroIcon from "@material-ui/icons/Euro";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { CurrencyContext } from "../Context/CurrencyContext";
import PropTypes from "prop-types";

const useStyles = makeStyles({
	root: {
		display: "flex",
	},
});

export function SelectCurrency(props) {
	const { setCurrency } = props;
	const currency = useContext(CurrencyContext);
	const classes = useStyles();

	const handleChange = (event, newValue) => {
		setCurrency(newValue);
	};

	return (
		<BottomNavigation
			value={currency}
			onChange={handleChange}
			className={classes.root}
		>
			<BottomNavigationAction
				label='USD'
				value={1}
				icon={<AttachMoneyIcon />}
			/>
			<BottomNavigationAction label='EUR' value={0.84} icon={<EuroIcon />} />
		</BottomNavigation>
	);
}

SelectCurrency.propTypes = {
	setCurrency: PropTypes.func,
};
