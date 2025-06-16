import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaAws, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiTailwindcss } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoPostgresql, BiLogoPython, BiLogoUnity } from "react-icons/bi";

const icons = {
  "php": (<FaPhp />),
	"java": (<FaJava/>),
	"c++": (<span className="text-4xl">C++</span>),
	"html": (<FaHtml5/>),
	"css": (<FaCss3Alt/>),
	"javascript": (<SiJavascript/>),
	"tailwind": (<SiTailwindcss/>),
	"express": (<SiExpress/>),
	"react": (<FaReact/>),
	"node": (<FaNodeJs/>),
	"git": (<FaGitAlt/>),
  "typescript": (<SiTypescript/>),
  "nextjs": (<SiNextdotjs/>),
  "sql": (<BsFiletypeSql/>),
  "postgres": (<BiLogoPostgresql />),
  "unity": (<BiLogoUnity />),
  "py": (<BiLogoPython />),
  "aws": (<FaAws />),
  "aws-api-gateway": (<img src="/images/Arch_Amazon-API-Gateway_64.svg" className="w-12 h-12 rounded-lg" alt="API Gateway"/>),
  "aws-dynamodb": (<img src="/images/Arch_Amazon-DynamoDB_64.svg" className="w-12 h-12 rounded-lg" alt="DynamoDB"/>),
  "aws-lambda": (<img src="/images/Arch_AWS-Lambda_64.svg" className="w-12 h-12 rounded-lg" alt="AWS Lambda"/>),
}

export default icons;