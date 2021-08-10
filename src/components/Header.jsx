import image from "../assets/illustration-hero.svg";

function Header () {
	return(
		<div className="rounded-tr-xl rounded-tl-xl overflow-hidden">
			<img src={image} alt=""/>
		</div>
	);
}

export default Header;
