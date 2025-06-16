import { Link } from "react-router-dom";
import { Line, Icon } from "../components";
import icons from "../icons.js";

const Skills = () => {
	return (
    <>
      <div className="panel flex-col">
        <h1 className="title">Certifications</h1>
        <Line/>
        <Link to="https://www.credly.com/badges/47c9bee5-3db0-49a4-adc3-4e446f797fbc/public_url" target="_blank" rel="noreferrer">
          <div className="bg-gray-800 rounded-lg p-6 border-2 border-gray-600 hover:border-gray-500 transition-colors group">
            <h3 className="font-semibold text-lg mb-2">AWS Cloud Practitioner</h3>
            <p className="text-gray-300 text-sm mb-3">Amazon Web Services</p>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>May 2025</span>
              <span>May 2028</span>
            </div>
          </div>
      </Link>
      </div>
      <div className="panel flex-col">
        <h1 className="title">Cloud</h1>
        <Line/>
        <div className="container gap-2">
          <Icon icon={icons["aws"]} text=""/>
          <Icon icon={icons["aws-dynamodb"]} text="DynamoDB"/>
          <Icon icon={icons["aws-lambda"]} text="Lambda"/>
          <Icon icon={icons["aws-api-gateway"]} text="API Gateway"/>
        </div>
      </div>
      <div className="panel flex-col">
        <h1 className="title">Tools & Frameworks</h1>
        <Line/>
        <div className="container gap-2">
          <Icon icon={icons["nextjs"]} text="Nextjs"/>
          <Icon icon={icons["react"]} text="React.js"/>
          <Icon icon={icons["typescript"]} text="Typescript"/>
          <Icon icon={icons["git"]} text="Git"/>
          <Icon icon={icons["tailwind"]} text="Tailwind"/>
          <Icon icon={icons["node"]} text="Node.js"/>
          <Icon icon={icons["postgres"]} text="Postgres"/>
        </div>
      </div>
      <div className="panel flex-col">
        <h1 className="title">Languages & Other</h1>
        <Line/>
        <div className="container gap-2">
          <Icon icon={icons["html"]} text="HTML"/>
          <Icon icon={icons["css"]} text="CSS"/>
          <Icon icon={icons["javascript"]} text="Javascript"/>
          <Icon icon={icons["sql"]} text=""/>
          <Icon icon={icons["java"]} text="Java"/>
          <Icon icon={icons["c++"]} text=""/>
          <Icon icon={icons["py"]} text="Python"/>
        </div>
      </div>
    </>
	)
}
export default Skills;