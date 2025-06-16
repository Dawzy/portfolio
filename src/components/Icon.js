const Icon = ({icon, text}) => {
	return (
		<div className="container text-5xl flex-col m-0 w-20 h-20 text-center">
			{icon}
			<span className="text text-base m-0 p-0 w-max">{text}</span>
		</div>
	)
}
export default Icon;