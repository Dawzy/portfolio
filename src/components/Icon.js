const Icon = ({icon, text}) => {
	return (
		<div className="container text-5xl flex-col p-1 m-0 w-20 h-20">
			{icon}
			<span className="text text-base m-0 p-0">{text}</span>
		</div>
	)
}
export default Icon;