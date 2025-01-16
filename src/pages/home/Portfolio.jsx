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
    const html = document.documentElement; // Seleccionamos el <html>
    html.classList.toggle('dark', !darkMode);
  };
  

  return (
    <div
      className={`relative flex size-full min-h-screen flex-col justify-between overflow-x-hidden ${
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
          {['Inicio', 'Acerca', 'Proyectos', 'Habilidades', 'Contáctame'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-lg font-medium ${
                  darkMode ? 'text-white' : 'text-[#111418]'
                } hover:opacity-80 transition duration-200`}
              >
                {section === 'Inicio' ? 'Inicio' : section.replace(/([A-Z])/g, ' $1').trim()}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <a
            href="/Jhon-Diaz-CV.pdf" // Asegúrate de colocar el archivo en la carpeta 'public' con este nombre
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Descargar CV
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg transition-all duration-300"
          >
            {darkMode ? <FaSun size={20} className="text-yellow-500" /> : <FaMoon size={20} className="text-gray-700" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="Inicio"
        className="flex flex-col items-center justify-center h-screen p-4 bg-cover bg-center hero-section"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center"
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

      <motion.section
        id="Acerca"
        className={`h-screen flex flex-col items-center justify-center text-center ${darkMode ? 'bg-[#111418]' : 'bg-gray-100'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className={`${darkMode ? 'text-white' : 'text-[#111418]'} text-3xl font-bold mb-8`}>Acerca de mí</h2>
        <div className="max-w-3xl flex flex-col items-center space-y-6">
          <img
            src="./img/jhon.jpg"
            alt="Foto de Jhon"
            className="w-40 h-40 rounded-full shadow-lg"
          />
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-700'} text-lg leading-relaxed px-4`}>
            ¡Hola! Soy Jhon, un apasionado desarrollador Front-End con experiencia en la creación de interfaces web modernas y funcionales. Me encanta combinar diseño y tecnología para construir aplicaciones que inspiren, conecten y proporcionen una excelente experiencia al usuario.
          </p>
        </div>
      </motion.section>


    <motion.section
      id="Proyectos"
      className={`h-screen flex flex-col items-center justify-center text-center ${darkMode ? 'bg-[#111418]' : 'bg-gray-50'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <h2 className={`${darkMode ? 'text-white' : 'text-[#111418]'} text-3xl font-bold mb-8`}>Proyectos Destacados</h2>
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[{
                  title: "User CRUD",
                  description: "Sistema CRUD para gestionar usuarios con autenticación.",
                  githubUrl: "https://github.com/Zorgthh/useCrud",
                  liveUrl: "https://fluffy-halva-a91ce2.netlify.app/",
                  imageUrl: "./img/user-crud.jpg", // Ruta de la imagen
                },
                {
                  title: "Rick and Morty App",
                  description: "Aplicación para explorar personajes del universo de Rick and Morty.",
                  githubUrl: "https://github.com/Zorgthh/Rick-y-Morty",
                  liveUrl: "https://animated-florentine-be9884.netlify.app/",
                  imageUrl: "./img/rick-and-morty.jpg", // Ruta de la imagen
                },
                {
                  title: "Weather App",
                  description: "Consulta del clima en tiempo real usando APIs abiertas.",
                  githubUrl: "https://github.com/Zorgthh/Weather-App",
                  liveUrl: "https://weather-app-by-zorgth.netlify.app/",
                  imageUrl: "./img/weather-app.jpg", // Ruta de la imagen
                },].map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-[#1a1d22] text-white' : 'bg-white text-[#111418]'} hover:shadow-lg transition-shadow duration-300`}
          >
            <img
              src={project.imageUrl}
              alt={`Imagen del proyecto ${project.title}`}
              className="object-cover w-full h-40 rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
            <div className="flex justify-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <FaGithub size={20} className="mr-1" /> Código
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline flex items-center"
                >
                  Despliegue
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>


      <motion.section
        id="Habilidades"
        className={`h-screen flex flex-col items-center justify-center text-center ${darkMode ? 'bg-[#111418]' : 'bg-gray-100'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className={`${darkMode ? 'text-white' : 'text-[#111418]'} text-3xl font-bold mb-8`}>Habilidades</h2>
        <div className="max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[{ icon: <FaJs size={50} className="text-yellow-500" />, name: 'JavaScript' },
                      { icon: <FaHtml5 size={50} className="text-orange-500" />, name: 'HTML5' },
                      { icon: <FaCss3Alt size={50} className="text-blue-500" />, name: 'CSS3' },
                      { icon: <SiReact size={50} className="text-cyan-500" />, name: 'React' },
                      { icon: <SiRedux size={50} className="text-purple-500" />, name: 'Redux' },
                      { icon: <FaGithub size={50} className="text-gray-700" />, name: 'GitHub' },
                      { icon: <FaLinkedin size={50} className="text-blue-600" />, name: 'LinkedIn' },
                      { icon: <FaMoon size={50} className="text-gray-400" />, name: 'PostgreSQL' },].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col items-center p-6 rounded-lg shadow-lg ${darkMode ? 'bg-[#1a1d22] text-white' : 'bg-white text-[#111418]'} hover:shadow-xl transition-shadow duration-300`}
            >
              {skill.icon}
              <h3 className="text-lg font-semibold mt-4">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* Contacto */}
            <motion.section
              id="Contáctame"
              className="h-screen flex flex-col items-center justify-center text-center"
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
