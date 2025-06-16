import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { IconButton} from "../components";

const NAV_SECTIONS = [
  {
    "name": "Skills",
    "path": "/skills"
  },
  {
    "name": "Projects",
    "path": "/projects"
  },
  {
    "name": "Contact",
    "path": "/contact"
  }
]

const Navbar = () => {
  const { pathname } = useLocation();

	return (
	<div className="sticky w-10/12 bg-primary border-style h-16 z-10 mx-auto">
		<div className="h-full w-full px-4 bg-transparent flex justify-between items-center">
			<Link to="/" className="border-0 m-1 text-2xl cursor-pointer hover:underline title whitespace-nowrap">
        David Fawzy
			</Link>
					
			<div className="flex w-full justify-center items-center gap-36">
        {NAV_SECTIONS.map(navSection => (
          <Link to={navSection.path} className={`border-0 m-1 text-2xl cursor-pointer hover:underline ${navSection.path === pathname ? "underline" : "no-underline"}`}>
            {navSection.name}
          </Link>
        ))}
			</div>

			<div className="container bg-transparent p-0 m-0 w-auto">
				<Link to="https://github.com/Dawzy" target="_blank" rel="noreferrer">
					<IconButton icon={<AiFillGithub/>}/>
				</Link>
				<Link to="https://www.linkedin.com/in/davidfawzy-/" target="_blank" >
					<IconButton icon={<AiFillLinkedin/>}/>
				</Link>
				<Link to="https://leetcode.com/Dawzy/" target="_blank" rel="noreferrer">
					<IconButton icon={<SiLeetcode/>}/>
				</Link>
			</div>
		</div>
	</div>
	)
}
export default Navbar;