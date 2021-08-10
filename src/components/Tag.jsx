import icon from "../assets/icon-music.svg";

function Tag () {
	return(
		<div className="flex flex-row mt-4 mr-8 ml-8 p-4 bg-gray-100 rounded-md">
			{/*IMAGE*/}
			<div className="mr-4"> 
				<img src={icon} alt=""/>
			</div>

			{/*Text*/}
			<div className="mr-20"> 

				<h1 className="mb-2 font-bold"> Annual Plan </h1>

				<h2 className="text-gray-400">  $59.99/year </h2>

			</div>

			{/*Link*/}
			<div className="flex items-center"> 
				<a href="#" className="underline text-blue-800">Change</a>
			</div>
		</div>
	);
}

export default Tag;
