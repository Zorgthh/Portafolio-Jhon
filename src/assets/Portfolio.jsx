import React from 'react';
import './PortfolioStyles.css';
import { motion } from 'framer-motion';
import { FaJs, FaHtml5, FaCss3Alt, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { SiRedux, SiReact } from 'react-icons/si';

function Portfolio() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden design-root">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div className="flex size-12 shrink-0 items-center">
            <motion.div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 background-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            <a href="#Portafolio" id='Portafolio'>Portafolio</a>
          </h2>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            <a href="#Proyectos">Proyectos</a>
          </h2>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            <a href="#Habilidades">Habilidades</a>
          </h2>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            <a href="#Contáctame">Contáctame</a>
          </h2>
        </div>
      </motion.div>

      <div className="@container">
        <motion.div 
          className="@[480px]:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 hero-section">
            <motion.div 
              className="flex flex-col gap-2 text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Hola, Soy Jhon
              </h1>
              <h2 className="text-[#140b5a] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                <strong>Desarrollador Front-End: creando interfaces que inspiran y conectan.</strong>
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.h2 
        className=" text-[#111418] text-[22px] text-center font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-40"
        id='Proyectos'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Proyectos destacados
      </motion.h2>

      <motion.div
        className="projects-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        {['UserCrud', 'Rick and Morty App', 'Weather App'].map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`project-image project-image-${index + 1}`}
            ></div>
            <div className="project-details">
              <p className="project-title">
                <a href="https://project-link.com" target="_blank" rel="noopener noreferrer">{project}</a>
              </p>
              <p className="project-description">
                Descripción breve del proyecto {project.toLowerCase()}.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2 
        className="text-[#111418] text-[22px] text-center font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-40"
        id='Habilidades'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Habilidades
      </motion.h2>

      <motion.div 
        className="flex flex-wrap justify-center gap-6 px-4 pb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {[ 
          { icon: <FaJs size={40} />, name: 'JavaScript' },
          { icon: <FaHtml5 size={40} />, name: 'HTML' },
          { icon: <FaCss3Alt size={40} />, name: 'CSS' },
          { icon: <SiReact size={40} />, name: 'React' },
          { icon: <SiRedux size={40} />, name: 'Redux' }
        ].map((skill, index) => (
          <motion.div 
            key={index}
            className="flex items-center justify-center bg-[#f4f6f9] rounded-full py-4 px-6 shadow-lg flex-col"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center">
              {skill.icon}
            </div>
            <span className="text-[#111418] text-lg font-semibold mt-2">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Sección Contáctame */}
      <motion.div
        className="contact-section bg-white] py-10 pt-40"
        id='Contáctame'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="text-center mb-8">
          <motion.h2
            className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            Contáctame
          </motion.h2>
          <p className="text-[#637588] text-sm font-normal mt-2">
            Si tienes alguna pregunta o deseas contratarme, ¡no dudes en escribirme!
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
          <form>
            <motion.div
              className="flex flex-col mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              <label htmlFor="name" className="text-[#111418] font-medium mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111418] text-[#111418]"
              />
            </motion.div>

            <motion.div
              className="flex flex-col mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
            >
              <label htmlFor="email" className="text-[#111418] font-medium mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu correo electrónico"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111418] text-[#111418]"
              />
            </motion.div>

            <motion.div
              className="flex flex-col mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <label htmlFor="message" className="text-[#111418] font-medium mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Escribe tu mensaje"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#111418] text-[#111418]"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-[#111418] text-white py-3 rounded-lg hover:bg-[#444444] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Enviar
            </motion.button>
          </form>
        </div>
      </motion.div>

      <footer className="bg-[#111418] text-white py-6">
        <div className="text-center">
          <motion.a href="https://www.linkedin.com/in/jhon-jairo-diaz-juris-9288ba247/" target="_blank" rel="noopener noreferrer" className="text-xl mx-4">
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://github.com/Zorgthh" target="_blank" rel="noopener noreferrer" className="text-xl mx-4">
            <FaGithub />
          </motion.a>
        </div>
        <p className="text-sm mt-4">&copy; 2024 Jhon Diaz. Todo se aprende.</p>
      </footer>
    </div>
  );
}

export default Portfolio;



