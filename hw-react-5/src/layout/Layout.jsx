import React from "react";
import PropTypes from "prop-types";
import MyAppBar from "./AppBar";

function Layout({ children }) {
	return (
		<div>
			<MyAppBar />
			{children}
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Layout;
