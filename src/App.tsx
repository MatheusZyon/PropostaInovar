import { useEffect, useState } from 'react';
import './App.css';
import './esquadrias.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Chart from './components/Chart';
import EsquadriaElements from './components/EsquadriaElements';

// Import logos
// Logos removidos conforme solicitado
import capaImage from './assets/images/capa.png';

import criaRapidoLogo from './assets/images/logo-cria-rapido.png';import novaImagemBanner from './assets/images/nova-imagem-banner.jpg';
import techImage2 from './assets/images/tech-image2.jpg';
import techImage3 from './assets/images/tech-image3.jpg';
import logonovo2 from './assets/images/logo-novo2.png';
function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200 && scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  // Estilo de quadrado inspirado no logo da Inovar
  const SquareElement = ({ className = "", size = "100px", color = "#8AB262" }) => (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: 'transparent',
        border: `2px solid ${color}`,
        borderRadius: '4px'
      }}
    >
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3" style={{ backgroundColor: color }}></div>
    </div>
  );

  return (
    <div className="app bg-[#F4F1E8] text-[#272733]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logos removidos conforme solicitado */}
          
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'text-[#8AB262] font-medium' : ''}`}>Início</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'text-[#8AB262] font-medium' : ''}`}>Sobre</a>
            <a href="#challenge" className={`nav-link ${activeSection === 'challenge' ? 'text-[#8AB262] font-medium' : ''}`}>Desafio</a>
            <a href="#solution" className={`nav-link ${activeSection === 'solution' ? 'text-[#8AB262] font-medium' : ''}`}>Solução</a>
            <a href="#contact" className="bg-[#8AB262] text-white px-6 py-2 rounded-sm hover:bg-[#7a9e55] transition-colors">
              Contato
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'text-[#8AB262] font-medium' : ''}`} onClick={() => setMenuOpen(false)}>Início</a>
                <a href="#about" className={`nav-link ${activeSection === 'about' ? 'text-[#8AB262] font-medium' : ''}`} onClick={() => setMenuOpen(false)}>Sobre</a>
                <a href="#challenge" className={`nav-link ${activeSection === 'challenge' ? 'text-[#8AB262] font-medium' : ''}`} onClick={() => setMenuOpen(false)}>Desafio</a>
                <a href="#solution" className={`nav-link ${activeSection === 'solution' ? 'text-[#8AB262] font-medium' : ''}`} onClick={() => setMenuOpen(false)}>Solução</a>
                <a href="#contact" className="bg-[#8AB262] text-white px-6 py-2 rounded-sm hover:bg-[#7a9e55] transition-colors text-center" onClick={() => setMenuOpen(false)}>
                  Contato
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#8AB262]/10 transform z-0" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
        
        {/* Elementos decorativos de esquadrias */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <EsquadriaElements />
        </div>
        
        {/* Elementos quadrados decorativos */}
        <div className="absolute top-20 right-20 opacity-20">
          <SquareElement size="120px" color="#8AB262" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <SquareElement size="80px" color="#272733" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Proposta Comercial
                <span className="block text-[#8AB262]">Parceria Estratégica</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[#8C7B69] font-light">
                Marketing, tecnologia e performance no mesmo ecossistema
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="#solution" className="btn-primary rounded-sm">
                  Ver Proposta
                </a>
                <a href="#about" className="btn-secondary rounded-sm">
                  Conheça a CRIA RÁPIDO
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-square rounded-sm overflow-hidden shadow-2xl relative">
                <img src={capaImage} alt="Parceria" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h2 className="text-2xl font-bold mb-4">Mais do que marketing.</h2>
                    <p className="text-xl">Uma parceria de crescimento.</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Elementos quadrados decorativos */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#BF6240] rounded-sm"></div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#8C7B69] rounded-sm"></div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center text-[#8C7B69]">
              <span className="text-sm mb-2">Saiba mais</span>
              <ChevronDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

                  {/* About Section com fundo em faixa */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Faixa de fundo sutil */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[#272733] z-0"></div>

        {/* Container Principal da Seção Sobre - Garante que o conteúdo fique acima do fundo */}
        <div className="container mx-auto px-4 relative z-10">
          {/* Conteúdo Centralizado (Logo e Texto) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16" // Espaçamento antes do grid de serviços
          >
              {/* Logo CRIA RÁPIDO */}
              <img
                src={criaRapidoLogo}
                alt="Logo CRIA RÁPIDO"
                className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] mx-auto mb-4"
              />
              <p className="text-xl max-w-3xl mx-auto text-[#f0f3fa]">
                A CRIA RÁPIDO entrega mais que serviços. Oferecemos um ecossistema completo para acelerar negócios com tecnologia, conteúdo estratégico e performance.
              </p>
          </motion.div>

          {/* Grid de Serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Tráfego Pago",
                description: "Otimização contínua em Google Ads e Meta Ads para máxima performance.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
                color: "#272733"
              },
              {
                title: "Social Media",
                description: "Criação de conteúdo relevante com design profissional e copywriting que converte.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
                color: "#272733"
              },
              {
                title: "Produção Audiovisual",
                description: "Filmagem e edição de vídeos para engajar e fortalecer a marca.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>,
                color: "#272733"
              },
              {
                title: "Desenvolvimento Web",
                description: "Criação de Landing Pages otimizadas para conversão.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="2" x2="22" y1="7" y2="7"/><line x1="12" x2="12" y1="17" y2="17"/></svg>,
                color: "#272733"
              }
            ].map((service, index ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div
                  className="w-16 h-16 rounded-sm flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}10` }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-[#8C7B69]">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bloco Nossa Abordagem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#F4F1E8] rounded-sm p-8 border-l-4 border-[#8AB262]"
          >
            <h3 className="text-2xl font-bold mb-4">Nossa abordagem</h3>
            <p className="text-lg mb-6">
              Combinamos <strong>consultoria estratégica</strong> com <strong>execução prática</strong>, trabalhando lado a lado com a equipe da Inovar para garantir a implementação eficaz das ações. O atendimento é personalizado, com <strong>Matheus</strong> como seu especialista dedicado, garantindo um acompanhamento próximo e focado nos objetivos da Inovar.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Challenge Section */}
      <section id="challenge" className="py-20 bg-[#272733] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="flex items-center gap-4 mb-6">
  <h2 className="text-2xl md:text-1xl font-bold">Desafio</h2>
    <img src={logonovo2} alt="Logo Inovar" className="w-[224px] md:w-[256px] lg:w-[288px] h-auto" />
  
  </div>
  
  <div className="w-24 h-1 bg-[#8AB262] mb-8"></div>
  <p className="text-xl mb-8">
    A Inovar Esquadrias de Alumínio está em um momento estratégico de evolução, com uma nova identidade visual e um posicionamento renovado.
  </p>
  <p className="text-lg mb-6">
    O desafio atual é traduzir essa evolução para o ambiente digital, fortalecendo a presença online, construindo autoridade no setor de esquadrias de alto padrão e ampliando o alcance de forma consistente e inteligente.
  </p>
  <p className="text-lg font-light italic">
    É fundamental que a comunicação digital reflita a qualidade, sofisticação e inovação que a marca representa.
  </p>
</motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video rounded-sm overflow-hidden shadow-2xl relative">
                <img src={novaImagemBanner} alt="Esquadrias de alumínio" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#272733]/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold mb-4">Nova identidade,<br />mesma essência</h3>
                    <p className="text-xl">É o que a gente faz!</p>
                  </div>
                </div>
              </div>
              
              {/* Elementos quadrados decorativos */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8C7B69] rounded-sm opacity-30"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#BF6240] rounded-sm opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solução Proposta</h2>
            <div className="w-24 h-1 bg-[#8AB262] mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto text-[#8C7B69]">
              Entendemos a necessidade de uma presença digital robusta e consistente. Propomos uma parceria estratégica com um investimento mensal fixo.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Gestão de Tráfego Pago",
                description: "Google Ads + Meta Ads otimizados para geração de leads qualificados e reconhecimento de marca.",
                price: "R$ 1.500",
                icon: "🎯",
                color: "#8AB262"
              },
              {
                title: "Social Media Estratégico",
                description: "Cinco posts por semana com design alinhado à identidade Inovar e textos estratégicos focados em autoridade.",
                price: "R$ 1.000",
                icon: "📱",
                color: "#BF6240"
              },
              {
                title: "Film Maker + Edição",
                description: "Captação quinzenal com edição estratégica voltada à performance nas redes sociais e campanhas.",
                price: "R$ 1.100",
                icon: "🎬",
                color: "#8C7B69"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div 
                  className="p-6"
                  style={{ backgroundColor: `${service.color}10` }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-[#8C7B69] mb-6">{service.description}</p>
                  <div className="text-2xl font-bold text-[#272733]">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#272733] text-white rounded-sm p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Total Mensal Fixo</h3>
            <p className="text-4xl font-bold text-[#8AB262] mb-6">R$ 3.600</p>
            <a href="#contact" className="inline-block bg-[#8AB262] text-white px-8 py-3 rounded-sm hover:bg-[#7a9e55] transition-colors text-lg font-medium">
              Quero esta solução
            </a>
          </motion.div>
          
          {/* Gráfico de Impacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-white p-8 rounded-sm shadow-lg"
          >
            <Chart />
          </motion.div>
          
          <div className="mt-20">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold mb-8 text-center"
            >
              Serviços Avulsos
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="overflow-hidden rounded-sm shadow-lg"
            >
              <table className="w-full">
                <thead className="bg-[#8C7B69] text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Produto</th>
                    <th className="py-4 px-6 text-right">Valor Unitário</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6">Treinamento de CRM + Atendimento Omni</td>
                    <td className="py-4 px-6 text-right font-medium">R$ 1.500 / dia</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Criação de Landing Page Personalizada</td>
                    <td className="py-4 px-6 text-right font-medium">R$ 1.500 / un</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-20 bg-[#F4F1E8]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Diferenciais</h2>
            <div className="w-24 h-1 bg-[#8AB262] mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-sm overflow-hidden"
            >
              <img src={techImage2} alt="Tecnologia digital" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#272733]/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tecnologia Avançada</h3>
                  <p>Utilizamos as mais recentes tecnologias para impulsionar seus resultados</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-sm overflow-hidden"
            >
              <img src={techImage3} alt="Dados e análise" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#272733]/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Análise de Dados</h3>
                  <p>Decisões estratégicas baseadas em dados e métricas precisas</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ecossistema Completo",
                description: "Solução 360º integrando todas as frentes do marketing digital para uma estratégia coesa e eficiente.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"/><path d="M12 12h.01"/></svg>,
                delay: 0
              },
              {
                title: "Integração com Tecnologia",
                description: "CRM e ferramentas de Inteligência Artificial para otimizar processos, personalizar a comunicação e maximizar resultados.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-4v10h4V12Z"/><path d="M12 12h-4v10h4V12Z"/><path d="M22 2h-6v6h6V2Z"/><path d="M16 8h-4v4h4V8Z"/></svg>,
                delay: 0.1
              },
              {
                title: "Implementação Colaborativa",
                description: "Trabalho em conjunto com a equipe da Inovar, garantindo que as estratégias sejam implementadas de forma prática e alinhada à cultura da empresa.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 5c0 2.8-2.2 5-5 5S7 7.8 7 5 9.2 0 12 0s5 2.2 5 5"/><path d="M5 22v-2a7 7 0 0 1 14 0v2"/></svg>,
                delay: 0.2
              },
              {
                title: "Atendimento Consultivo",
                description: "Matheus, nosso especialista dedicado, oferece um acompanhamento próximo e estratégico, focado nas metas específicas da Inovar.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                delay: 0.3
              },
              {
                title: "Redução de Custos",
                description: "Nosso modelo integrado visa otimizar o investimento e aumentar a eficiência operacional da equipe de marketing e vendas.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>,
                delay: 0.4
              },
              {
                title: "Ganho de Produtividade",
                description: "Ferramentas e processos que aumentam a produtividade da sua equipe, permitindo foco no que realmente importa.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5.25 5 2.625-5H8c0-4.4 3.6-8 8-8 .55 0 1.09.06 1.6.17"/><path d="M22 12c0 4.4-3.6 8-8 8-.55 0-1.09-.06-1.6-.17"/><path d="m22 2-5.25 5L14.13 2H16"/></svg>,
                delay: 0.5
              }
            ].map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: differential.delay }}
                className="bg-white rounded-sm p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-start"
              >
                <div className="text-3xl mr-4">{differential.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{differential.title}</h3>
                  <p className="text-[#8C7B69]">{differential.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#272733] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Conversar?</h2>
              <div className="w-24 h-1 bg-[#8AB262] mb-8"></div>
              <p className="text-xl mb-8">
                Estamos prontos para transformar a presença digital da Inovar em um reflexo da sua excelência.
              </p>
              <div className="mb-8">
                <p className="text-lg mb-2"><strong>Matheus</strong> — Especialista responsável</p>
                <p className="text-[#8AB262]">CRIA RÁPIDO | Consultoria em Marketing e Performance</p>
              </div>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white text-[#272733] rounded-sm p-8 shadow-2xl flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl font-bold mb-6">Fale diretamente com Matheus</h3>
              <p className="text-center mb-8">Clique no botão abaixo para iniciar uma conversa no WhatsApp e discutir sua proposta personalizada.</p>
              <a 
                href="https://wa.me/5511985307758" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#8AB262] text-white px-8 py-4 rounded-sm hover:bg-[#128C7E] transition-colors flex items-center justify-center text-lg font-medium w-full md:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Conversar no WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F4F1E8] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="mb-4">
                <span className="font-bold text-xl">Proposta Comercial</span>
              </div>
              <p className="text-[#8C7B69]">Consultoria em Marketing e Performance</p>
            </div>
            {/* Atalhos removidos conforme solicitado */}
          </div>
          <div className="border-t border-[#DCE4E6] mt-8 pt-8 text-center text-[#8C7B69]">
            <p>&copy; {new Date().getFullYear()} CRIA RÁPIDO. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;