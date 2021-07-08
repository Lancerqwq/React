import React, { useState, useEffect } from "react";
import getLaptopData from "../../../api/api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router";

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
		maxHeight: 400,
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
	image: {
		maxWidth: 300,
	},
});

function LaptopCards(props) {
	const classes = useStyles();
	const [laptops, setLaptops] = useState([]);
	const { name } = useParams();

	useEffect(() => {
		getLaptopData().then((data) => setLaptops(data));
	}, [laptops]);

	return (
		<div className={classes.wrap}>
			{laptops.map((item, i) =>
				item.mark === name ? (
					<Card key={i} className={classes.root}>
						<CardMedia className={classes.media}>
							<img className={classes.image} src={item.image} alt='img' />
						</CardMedia>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{item.productName}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								{item.description}
							</Typography>
							<Typography
								className={classes.price}
								variant='body2'
								color='textSecondary'
								component='p'
							>
								{item.price}
							</Typography>
						</CardContent>
					</Card>
				) : null
			)}
		</div>
	);
}

export default LaptopCards;
