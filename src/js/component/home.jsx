import React from "react";
import  Navbar  from "./navbar";
import Jumbotron from "./jumbotron"
import Card from "./cards";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
<div><Navbar/>
<div className="container">
	<Jumbotron/>
	<div className="d-flex">
		<Card/>
		<Card/>
		<Card/>
		<Card/>

	</div>
</div>
<Footer></Footer>
</div>
	);
};

export default Home;

