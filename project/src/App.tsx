import React from 'react';
import { Github, Instagram, MessageCircle, Brain, Code, Network, ChevronDown, Rocket, Star } from 'lucide-react';

function App() {
  const scrollToNextSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-8 overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Tech Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>
        </div>
        
        <div className="text-center relative z-10 animate-fadeIn w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 gap-3">
            <Rocket className="w-14 h-14 text-purple-400 animate-bounce" />
            <Star className="w-10 h-10 text-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)] px-6">
            jaoabyo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideUp font-light tracking-wide">
            Junior Full Stack Developer | AI Enthusiast | NOC Expert
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/Jaoabyo"
               target="_blank" 
               rel="noopener noreferrer" 
               className="p-4 bg-gray-800/50 rounded-full hover:bg-gray-700 transition-all transform hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-gray-500/20">
              <Github size={28} />
            </a>
            <a href="https://www.instagram.com/jaoabyo/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="p-4 bg-gray-800/50 rounded-full hover:bg-purple-500 transition-all transform hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-purple-500/20">
              <Instagram size={28} />
            </a>
            <a href="https://t.me/JaoaDev" 
               target="_blank" 
               rel="noopener noreferrer"
               className="p-4 bg-gray-800/50 rounded-full hover:bg-blue-500 transition-all transform hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-blue-500/20">
              <MessageCircle size={28} />
            </a>
          </div>
        </div>
        <button 
          onClick={() => scrollToNextSection('skills')}
          className="absolute bottom-8 animate-bounce text-purple-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to Skills section"
        >
          <ChevronDown size={36} />
        </button>
      </header>

      {/* Skills Section */}
      <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center" id="skills">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80"
            alt="Tech Pattern"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.35)]">
            Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl hover:bg-purple-900/40 transition-all duration-500 transform hover:-translate-y-2 border border-purple-500/10 hover:border-purple-500/30">
              <Code className="w-14 h-14 mb-6 text-blue-400 group-hover:animate-spin" />
              <h3 className="text-2xl font-bold mb-3 text-white/90">Full Stack Development</h3>
              <p className="text-gray-300/90 leading-relaxed">Criando aplicações web modernas e responsivas com as últimas tecnologias.</p>
            </div>
            <div className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl hover:bg-purple-900/40 transition-all duration-500 transform hover:-translate-y-2 border border-purple-500/10 hover:border-purple-500/30">
              <Brain className="w-14 h-14 mb-6 text-purple-400 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold mb-3 text-white/90">Inteligência Artificial</h3>
              <p className="text-gray-300/90 leading-relaxed">Explorando e implementando soluções inovadoras com IA.</p>
            </div>
            <div className="group bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl hover:bg-purple-900/40 transition-all duration-500 transform hover:-translate-y-2 border border-purple-500/10 hover:border-purple-500/30">
              <Network className="w-14 h-14 mb-6 text-green-400 group-hover:animate-pulse" />
              <h3 className="text-2xl font-bold mb-3 text-white/90">NOC</h3>
              <p className="text-gray-300/90 leading-relaxed">Garantindo a estabilidade e performance de infraestruturas de rede.</p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => scrollToNextSection('contact')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-purple-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to Contact section"
        >
          <ChevronDown size={36} />
        </button>
      </section>

      {/* Contact Section */}
      <footer className="min-h-screen flex items-center relative overflow-hidden py-20 px-4" id="contact">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.35)]">
            Vamos Criar Algo Incrível Juntos?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            <a href="https://github.com/Jaoabyo"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/30 rounded-full hover:bg-gray-700 transition-all transform hover:scale-105 backdrop-blur-sm border border-gray-500/20">
              <Github size={24} /> @Jaoabyo
            </a>
            <a href="https://www.instagram.com/jaoabyo/" 
               className="flex items-center justify-center gap-3 px-8 py-4 bg-purple-600/30 rounded-full hover:bg-purple-500 transition-all transform hover:scale-105 backdrop-blur-sm border border-purple-500/20">
              <Instagram size={24} /> @jaoabyo
            </a>
            <a href="https://t.me/JaoaDev"
               className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600/30 rounded-full hover:bg-blue-500 transition-all transform hover:scale-105 backdrop-blur-sm border border-blue-500/20">
              <MessageCircle size={24} /> @JaoaDev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;