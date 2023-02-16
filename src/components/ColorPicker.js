import { forwardRef } from "react";
const ColorPicker = forwardRef((props, ref) => {
	const {text, value, onChange} = props;

	return (
		<>
			<span className="text">{text}</span>
			<input

			className="w-10/12 mx-2 mb-2 p-0"
			type="color"
			value={value}
			ref={ref} onChange={onChange}

			/>
		</>
	)
});

export default ColorPicker;