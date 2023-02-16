import { forwardRef } from "react";

const Slider = forwardRef((props, ref) => {
	const {text, value, min, max, onChange} = props;
	return (
		<div className="container flex-col">
			<span className="text">{text}</span>
			<input type="range"
				value={value}
				min={min}
				max={max}
				ref={ref}
				onChange={onChange}/>
		</div>
	)
});
export default Slider;