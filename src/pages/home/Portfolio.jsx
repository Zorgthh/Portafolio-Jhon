import './PortfolioStyles.css';
import { motion } from 'framer-motion';
import { FaJs, FaHtml5, FaCss3Alt, FaLinkedin, FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { SiRedux, SiReact } from 'react-icons/si';
import React, { useState } from 'react';

function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  // Alterna el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div
      className={`relative flex size-full min-h-screen flex-col justify-between group/design-root overflow-x-hidden design-root ${
        darkMode ? 'bg-[#111418] text-white' : 'bg-white text-[#111418]'
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-4 px-6 backdrop-blur-lg ${
          darkMode ? 'bg-[#111418]/70' : 'bg-white/70'
        } shadow-md flex justify-between items-center`}
      >
        <div className="text-xl font-bold">
          <a href="#Hero" className={`${darkMode ? 'text-white' : 'text-[#111418]'} hover:opacity-80`}>
            Jhon Díaz
          </a>
        </div>
        <ul className="flex space-x-6">
          {['Proyectos', 'Habilidades', 'Contáctame'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-lg font-medium ${
                  darkMode ? 'text-white' : 'text-[#111418]'
                } hover:opacity-80 transition duration-200`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg transition-all duration-300"
        >
          {darkMode ? <FaSun size={20} className="text-yellow-500" /> : <FaMoon size={20} className="text-gray-700" />}
        </button>
      </nav>

      {/* Hero Section */}
      <section
        id="Hero"
        className="flex flex-col items-center justify-center min-h-[480px] p-4 bg-cover bg-center hero-section  "
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center "
        >
          <h1 className="text-white text-5xl font-black drop-shadow-lg">Hola, Soy Jhon</h1>
          <p
            className={`${
              darkMode ? 'text-gray-300 bg-black' : 'text-gray-300 bg-black'
            } text-lg font-semibold mt-2`}
          >
            Desarrollador Front-End: creando interfaces que inspiran y conectan.
          </p>
        </motion.div>
      </section>

      {/* Proyectos */}
      <motion.section
        id="Proyectos"
        className="py-16 text-center pt-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2
          className={`${
            darkMode ? 'text-white' : 'text-[#111418] '
          } text-3xl font-bold mb-8`}
        >
          Proyectos destacados
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['UserCrud', 'Rick and Morty App', 'Weather App'].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`max-w-xs ${
                darkMode ? 'bg-[#1a1d22]' : 'bg-white'
              } rounded-lg shadow-lg overflow-hidden`}
            >
              <div className={`h-40 bg-gray-300 project-image-${index + 1}`} alt={`Proyecto ${project}`} />
              <div className="p-4">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#111418]'}`}>{project}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
                  Descripción breve del proyecto {project.toLowerCase()}.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Habilidades */}
      <motion.section
        id="Habilidades"
        className="py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2
          className={`${
            darkMode ? 'text-white' : 'text-[#111418]'
          } text-3xl font-bold mb-8`}
        >
          Habilidades
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[{ icon: <FaJs size={40} />, name: 'JavaScript' },
            { icon: <FaHtml5 size={40} />, name: 'HTML' },
            { icon: <FaCss3Alt size={40} />, name: 'CSS' },
            { icon: <SiReact size={40} />, name: 'React' },
            { icon: <SiRedux size={40} />, name: 'Redux' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col items-center p-4 ${
                darkMode ? 'bg-[#1a1d22]' : 'bg-[#f4f6f9]'
              } rounded-lg shadow-md`}
            >
              {skill.icon}
              <span className={`mt-2 text-lg font-semibold ${darkMode ? 'text-white' : 'text-[#111418]'}`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section
        id="Contáctame"
        className="py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h2
          className={`${
            darkMode ? 'text-white' : 'text-[#111418]'
          } text-3xl font-bold mb-4`}
        >
          Contáctame
        </h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
          Si tienes alguna pregunta o deseas contratarme, ¡no dudes en escribirme!
        </p>
        <form
          className={`max-w-md mx-auto ${
            darkMode ? 'bg-[#1a1d22]' : 'bg-white'
          } p-6 rounded-lg shadow-lg`}
        >
          {['Nombre', 'Correo Electrónico', 'Mensaje'].map((label, index) => (
            <div key={index} className="mb-4 text-left">
              <label
                className={`block ${
                  darkMode ? 'text-white' : 'text-[#111418]'
                } font-medium mb-2`}
              >
                {label}
              </label>
              {label === 'Mensaje' ? (
                <textarea
                  rows="4"
                  placeholder={`Escribe tu ${label.toLowerCase()}`}
                  className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                    darkMode ? 'focus:ring-gray-500' : 'focus:ring-gray-800'
                  }`}
                ></textarea>
              ) : (
                <input
                  type={label === 'Correo Electrónico' ? 'email' : 'text'}
                  placeholder={`Tu ${label.toLowerCase()}`}
                  className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                    darkMode ? 'focus:ring-gray-500' : 'focus:ring-gray-800'
                  }`}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-[#111418] text-white py-3 rounded-lg hover:bg-[#444444] transition-all duration-300"
          >
            Enviar
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#111418] text-white text-center py-6">
  <div className="flex justify-center items-center space-x-4">
    <a href="https://www.linkedin.com/in/jhon-jairo-diaz-juris-9288ba247/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} />
    </a>
    <a href="https://github.com/Zorgthh" target="_blank" rel="noopener noreferrer">
      <FaGithub size={24} />
    </a>
  </div>
  <p className="text-sm mt-4">&copy; 2024 Jhon Diaz. Todo se aprende.</p>
</footer>
    </div>
  );
}

export default Portfolio;
