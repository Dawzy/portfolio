import { forwardRef } from "react";

const Checkbox = forwardRef((props, ref) => {
	const {text, isChecked, onChange} = props;

	return (
		<div className="container flex-col">
			<input
				className="w-8 h-8 m-1"
				ref={ref}
				type="checkbox"
				checked={isChecked}
				onChange={onChange}/>
			<span className="text text-base w-16"
			
			>{text}</span>
		</div>
	)
});
export default Checkbox;