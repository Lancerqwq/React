import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EuroIcon from "@material-ui/icons/Euro";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { CurrencyContext } from "../Context/CurrencyContext";
import PropTypes from "prop-types";
import shape from "@material-ui/core/styles/shape";

const useStyles = makeStyles({
	root: {
		maxWidth: 340,
	},
	price: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: 4,
		fontWeight: 800,
		marginTop: 10,
	},
	media: {
		height: 400,
	},
	wrap: {
		padding: 30,
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: 25,
	},
	currency: {
		display: "flex",
	},
});

export function CardItem(props) {
	const { shoppingCards } = props;
	const classes = useStyles();
	const currency = useContext(CurrencyContext);

	return (
		<div className={classes.wrap}>
			{shoppingCards.map((item, i) => (
				<Card key={i} className={classes.root}>
					<CardMedia className={classes.media} image={item.image} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{item.title}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							{item.description.length > 130
								? `${item.description.slice(0, 130)}...`
								: item.description}
						</Typography>
						<Typography
							className={classes.price}
							variant='body2'
							color='textSecondary'
							component='p'
						>
							{(item.price * currency).toFixed(2)}
							{currency === 1 ? <AttachMoneyIcon /> : <EuroIcon />}
						</Typography>
					</CardContent>
				</Card>
			))}
		</div>
	);
}

CardItem.protoTypes = {
	shoppingCards: PropTypes.arrayOf(
		PropTypes.shape({
			category: PropTypes.string,
			description: PropTypes.string,
			id: PropTypes.number,
			image: PropTypes.string,
			price: PropTypes.number,
			title: PropTypes.string,
		})
	),
};
