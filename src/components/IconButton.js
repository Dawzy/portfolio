const IconButton = ({icon, enlarged}) => {
	return (
		<div className={(`${enlarged ? "text-5xl" : "text-3xl"} bg-transparent mx-1 hover:scale-110`)}>
			{icon}
		</div>
	)
}
export default IconButton;