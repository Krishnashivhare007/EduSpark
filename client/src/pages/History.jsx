import axios from "axios";
import { useEffect, useState } from "react";
import { serverUrl } from "../App";
import { AnimatePresence, motion, spring } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

function History() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const credits = userData.credits;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const myNotes = async () => {
      try {
        const res = await axios.get(serverUrl + "/api/notes/getnotes", {
          withCredentials: true,
        });
        console.log(res.data);
        setTopics(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.log(error);
      }
    };
    myNotes();
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 px-6 py-8">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 flex flex-wrap items-center md:items-start justify-center md:justify-between gap-4 shadow-[0_10px_15px_rgba(0,0,0,0.5)] text-center md:text-left"
      >
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            EduSpark
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            AI-Powered Exam-Oriented Notes & Revision
          </p>
        </div>

        <div className="flex items-center gap-4 ">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-white text-2xl"
            >
              <GiHamburgerMenu />
            </button>
          )}
          <button
            onClick={() => navigate("/pricing")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm"
          >
            <span className="text-md">💎</span>
            <span>{credits}</span>

            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.97 }}
              className="h-4 w-4 text-xl flex items-center justify-center bg-white text-black rounded-full font-bold"
            >
              ⊕
            </motion.span>
          </button>
        </div>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed lg:static top-0 left-0 z-50 lg:z-auto w-72 lg:w-auto h-full lg:h-[75vh] rounded-3xl lg:col-span-1 bg-black/90 lg:bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_15px_rgba(0,0,0,0.5)] p-5 overflow-y-auto"
            >
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden text-white mb-4"
              >
                ⬅️ back
              </button>

              <div className="mb-4 space-y-1">
                <button
                  onClick={() => navigate("/notes")}
                  className="w-full px-3 py-2 rounded-lg text-sm text-gray-200 text-start bg-white/10 hover:bg-white/20"
                >
                  + New Notes
                </button>
                <hr className="border-white/10 mb-4" />

                <h2 className="mb-4 text-lg font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  📚 Your Notes
                </h2>

                {topics.length === 0 && (
                  <p className="text-sm text-gray-400">No notes created yet</p>
                )}

                <ul className="space-y-3">
                  {topics.map((t, i) => (
                    <li
                      key={i}
                      className="cursor-pointer rounded-xl p-3 bg-white/5 border border-white/10 hover:bg-white/10"
                    >
                      <p className="text-sm font-semibold text-white">
                        {t.topic}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2 text-xs">
                        
                        {t.classLevel && <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">ClassLevel : {t.classLevel}</span>}

                        {t.examType && <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">{t.examType}</span>}

                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default History;
