import {AnimatePresence, motion} from "motion/react"
import Navbar from "../components/Navbar";
import img from "../assets/img1.png"
import { Feature } from "./Auth";
import Footer from "../components/Footer";


function Home() {
    return ( 
        <div className="min-h-screen overflow-hidden bg-white text-black">
            <Navbar/>
            {/* top */}
            <section className="max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <motion.div
                    initial={{opacity:0, x:-60}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.7}}
                    whileHover={{rotateX:6, rotateY: -6}}
                    className="transform-gpu"
                    style={{transformStyle:"preserve-3d"}}
                    >
                        <motion.h1 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-linear-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent"
                        whileHover={{y:-4}}
                        style={{transform:"translateZ(40px)",
                            textShadow:"0 18px 40px rgba(0,0,0,0.25)",
                        }}
                        >
                            Create Smart <br /> AI Notes in Seconds
                        </motion.h1>

                        <motion.p whileHover={{y:-2}} className="mt-6 max-w-xl text-lg bg-linear-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent"
                        style={{transform:"translateZ(40px)",
                            textShadow:"0 18px 40px rgba(0,0,0,0.25)",
                        }}
                        >
                            Generate exam-focused notes, project documentation, flow diagrams and revision-ready content using AI - faster, cleaner and smarter.

                        </motion.p>
                        <motion.button
                                    
                                    whileHover={{y:-5,scale:1.03}}
                                    whileTap={{scale:0.97}}
                                    transition={{type:"spring",stiffness:200,damping:18}}
                                    className="mt-10 px-10 py-3 rounded-xl flex items-center gap-3 bg-linear-to-br from-black/90 via-black/80 to-black/90 border border-white/10 text-white font-semibold text-lg shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                                        Get Started
                                    </motion.button>

                    </motion.div>
                </div>

                <motion.div
                initial={{opacity:0,x:60}}
                animate={{opacity:1, x:0}}
                transition={{duration:0.7}}
                whileHover={{
                    y:-12,
                    rotateX:8,
                    rotateY:-8,
                    scale:1.07,
                }}
                className="transform-gpu"
                style={{transformStyle:"preserve-3d"}}
                >
                    <div className="overflow-hidden">
                    <img src={img} alt="img" style={{transform:"translateZ(35px)"}}/>
                    </div>
                </motion.div>

            </section>

            {/* bottom */}
            <section className="max-w-6xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-4 gap-10">
                <Feature icon="📖" title="Exam Notes" des="High-yield exam-oriented notes with revision points."/>
                <Feature icon="📂" title="Project Notes" des="Well-Structured content for assignments and projects."/>
                <Feature icon="📊" title="Diagrams" des="Auto-generated visual diagrams for clarity."/>
                <Feature icon="⬇️" title="PDF Download" des="Download clean, printable PDFs instantly."/>

            </section>
            <Footer/>
        </div>
     );
}

export default Home;