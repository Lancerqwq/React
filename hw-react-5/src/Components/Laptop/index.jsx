import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getLaptopData from "../../api/api";
// import { useParams } from "react-router";
function Laptops() {
	const [laptops, setLaptops] = useState([]);

	useEffect(() => {
		getLaptopData().then((data) => setLaptops(data));
	}, [laptops]);

	return (
		<div>
			{laptops.map((item) => (
				<div key={item.id}>
					<Link to={`/electronics/laptop/${item.mark}`}>{item.mark}</Link>
				</div>
			))}
		</div>
	);
}

export default Laptops;
