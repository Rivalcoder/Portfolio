import { FaInstagram, FaGithub, FaLinkedin, FaTelegram, FaJava ,FaTelegramPlane} from "react-icons/fa";
import image from "../assets/photo.jpg";
import image2 from "../assets/analyser.png";
import image3 from "../assets/messenger.png";
import Skills from "../components/skillcard";
import { useState } from "react";
import Procard from "../components/procard";
import { BiLogoFirebase } from "react-icons/bi";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { SiC, SiExpress, SiPython, SiJavascript, SiMongodb, SiFigma, SiReact, SiNextdotjs, SiSocketdotio, SiFlask } from "react-icons/si";

export default function Home() {
    const [click, setclick] = useState(true);

    const checker = () => {
        setclick(!click);
    }

    return (
        <div className="bg-[#03002e] text-white w-full h-auto font-[Poppins] max-h-max text-2xl">
            <header className="fixed z-20 w-full bg-[#03002e]">
                <nav className="w-full flex flex-row m-5 p-2 font-medium text-3xl justify-between items-center max-sm:flex-col">
                <div className="flex flex-row self-start">
                    <button className="hidden max-sm:block" onClick={checker}><MdOutlineMenuOpen fontSize={35} /></button>
                    <a href="/" className="hover-text-3xl ml-3 hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 hover:text-red-600 transition-all duration-200 ">Rival Coder</a>
                </div>
                    <ul className={`flex flex-row gap-10 text-xl mr-4 max-sm:flex-col ${click?"max-sm:hidden":"max-sm:flex"} max-sm:p-5 max-sm:self-start max-sm:bg-[#060335] max-sm:w-full `}>
                        <li className="hover:scale-110 transition-all duration-200 "><a href="#"  onClick={checker} className="hover:border-b-[3px] p-2 transition-all rounded-sm max-sm:p-5 duration-200">Home</a></li>
                        <li className="hover:scale-110 transition-all duration-200 "><a href="#Skills" onClick={checker} className="hover:border-b-[3px] p-2 transition-all rounded-sm max-sm:p-5 duration-200">Skills</a></li>
                        <li className="hover:scale-110 transition-all duration-200 "><a href="#Projects" onClick={checker} className="hover:border-b-[3px] p-2 transition-all rounded-sm max-sm:p-5 duration-200">Projects</a></li>
                        <li className="hover:scale-110 transition-all duration-200 "><a href="#Contact" onClick={checker} className="hover:border-b-[3px] p-2 transition-all rounded-sm max-sm:p-5 duration-200 ">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section className="w-full flex justify-center items-center">
                <section className="mt-48 mb-16 flex items-center justify-center w-4/5">
                    <div className="flex-1">
                        <p className="text-5xl leading-[1.2]">Hello <br /> I am <span className="text-yellow-800 font-semibold">Divyaprakash R</span> <br /> Web Developer</p>
                        <p className="w-[82%] text-xl mt-5">Hello! I'am Divyaprakash, a passionate web developer with a solid foundation in HTML, CSS, and JavaScript. I specialize in creating dynamic and responsive front-end applications using technologies like Java, Python, and CSS.</p>
                        <div className="mt-7 ml-24">
                            <ul className="flex flex-row gap-5 ">
                                <li className="hover:scale-110 transition-all duration-200"><a href="https://www.instagram.com/rival_coder?utm_source=qr&igshid=YnQ3dWxwdXFvMWNi"><FaInstagram /></a></li>
                                <li className="hover:scale-110 transition-all duration-200"><a href="https://github.com/Rivalcoder"><FaGithub /></a></li>
                                <li className="hover:scale-110 transition-all duration-200"><a href="https://www.linkedin.com/in/divyaprakash-r-349746292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a></li>
                                <li className="hover:scale-110 transition-all duration-200"><a href="http://t.me/divyaprakash_1"><FaTelegram /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 max-sm:hidden">
                        <div className="h-1/2 w-full">
                            <img src={image} alt="No Image" className="rounded-3xl"></img>
                        </div>
                    </div>
                </section>
            </section>
            <label id="Skills"></label>
            <section className=" flex flex-col justify-center items-center min-h-[80vh]">
                <h1 className="pt-24  font-semibold text-5xl flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-orange-400 to-red-500">My Skills</h1>
                <div className="grid grid-cols-5 mt-16 max-sm:grid-cols-2 max-lg:grid-cols-3">
                    <Skills img={<SiExpress className="text-yellow-700 text-6xl hover:text-yellow-600 transition-all duration-200" />} head="Express" message="" />
                    <Skills img={<SiMongodb className="text-green-500 text-6xl hover:text-green-600 transition-all duration-200" />} head="MongoDb" message="" />
                    <Skills img={<SiJavascript className="text-yellow-500 text-6xl hover:text-yellow-600 transition-all duration-200" />} head="JavaScript" message="" />
                    <Skills img={<SiFigma className="text-pink-500 text-6xl hover:text-pink-600 transition-all duration-200" />} head="Figma" message="" />
                    <Skills img={<FaJava className="text-red-600 text-6xl hover:text-red-700 transition-all duration-200" />} head="Java" message="" />
                    <Skills img={<SiReact className="text-blue-500 text-6xl hover:text-blue-600 transition-all duration-200" />} head="React" message="" />
                    <Skills img={<SiNextdotjs className="text-black text-6xl hover:text-gray-600 transition-all duration-200" />} head="Next.js" message="" />
                    <Skills img={<BiLogoFirebase className="text-orange-500 text-6xl hover:text-orange-600 transition-all duration-200" />} head="Firebase" message="" />
                    <Skills img={<SiSocketdotio className="text-blue-700 text-6xl hover:text-blue-800 transition-all duration-200" />} head="Web Sockets" message="" />
                    <Skills img={<SiFlask className="text-green-600 text-6xl hover:text-green-700 transition-all duration-200" />} head="Flask" message="" />
                </div>
            </section>
            <label id="Projects"></label>
            <section className="pt-24 flex flex-col justify-center items-center">
                <h1 className="pb-10 mb-10 font-semibold text-5xl flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-orange-400 to-red-500">My Projects</h1>
                <div className="grid grid-cols-2 gap-9 w-[70%] max-lg:grid-cols-1 max-lg:w-[80%]">
                    <Procard name="Resume Analyser(ATS)" img={image2} data="Analyse resumes instantly with AI-powered insights, optimizing job applications for success." />
                    <Procard name="Mini-Messenger" img={image3} data="Chat securely with Mini-Messenger, a real-time app using username and room ID for private conversations" />
                    </div>
            </section>
            <label id="Contact"></label>
            <section className="pt-24 flex flex-col justify-center items-center pb-10 lg:mt-5">
                <footer className="flex flex-col gap-10 justify-center items-center">
                    <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 transition-all duration-200">Rivalcoder</h1>
                    <div className="flex space-x-4">
                            <a
                                className="hover:scale-110 text-white hover:text-gray-400 transition-all duration-200"
                                href="https://github.com/Rivalcoder"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                className="hover:scale-110 text-white hover:text-red-600 transition-all duration-200"
                                href="https://www.instagram.com/rival_coder?utm_source=qr&igshid=YnQ3dWxwdXFvMWNi"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                className="hover:scale-110 text-white hover:text-blue-600 transition-all duration-200"
                                href="https://www.linkedin.com/in/divyaprakash-r-349746292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                className="hover:scale-110 text-white hover:text-gray-600 transition-all duration-200"
                                href="http://t.me/divyaprakash_1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTelegramPlane size={24} />
                            </a>
                            <a
                                className="hover:scale-110 text-white hover:text-red-600 transition-all duration-200"
                                href="mailto:rivalcoder01@gmail.com"
                            >
                                <MdEmail size={24} />
                            </a>
                            </div>
                    <div className="flex flex-col gap-3 justify-center items-center text-base">
                        <p>Rivalcoder owned by Divyaprakash</p>
                        <p>Copyright &copy; 2024 by @rivalcoder.vercel.app </p>
                        <p> All Rights Reserved.</p>
                    </div>
                </footer>
            </section>
        </div>
    )
}
