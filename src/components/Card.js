import Header from "./Header"
import Text from "./Text"
import Tag from "./Tag"
import Buttons from "./Buttons"

function Card() {
  return (
    <div className="absolute inset-0 flex justify-center items-center flex-col ">
		<div className="w-2/12 h-4/6 rounded-xl bg-white">
			<Header/>
			<Text/> 
			<Tag/>
			<Buttons/>
		</div>
    </div>
  );
}

export default Card;
