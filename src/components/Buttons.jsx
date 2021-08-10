

function Buttons () {
	return(
		<div className="flex flex-col justify-center">
			<button className="rounded-xl bg-blue-700 pt-4 pb-4 pr-12 pl-12 m-8 text-white font-bold shadow-md hover:shadow-2xl">
				Proceed to Payment
			</button>

			<button className="text-gray-500">
				Cancel Order
			</button>
		</div>
	);
}

export default Buttons;
