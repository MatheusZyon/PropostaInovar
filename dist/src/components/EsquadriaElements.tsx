// Componente para elementos decorativos de esquadrias

const EsquadriaElements = () => {
  return (
    <>
      {/* Elementos decorativos de esquadrias - com classes responsivas */}
      <div className="esquadria-element fade-in hidden md:block" style={{ top: '10%', right: '5%', width: '200px', height: '300px' }}></div>
      <div className="esquadria-corner esquadria-corner-tl fade-in hidden sm:block" style={{ top: '15%', left: '10%', width: '100px', height: '100px' }}></div>
      <div className="esquadria-corner esquadria-corner-br fade-in hidden sm:block" style={{ bottom: '15%', right: '10%', width: '150px', height: '150px' }}></div>
      <div className="esquadria-line esquadria-horizontal fade-in hidden md:block" style={{ top: '30%', left: '0', width: '100%' }}></div>
      
      {/* Grade de esquadrias - versão mobile menor */}
      <div className="esquadria-grid fade-in hidden sm:block" 
           style={{ 
             top: '60%', 
             right: '15%', 
             width: '120px', 
             height: '120px' 
           }}>
        {[...Array(9)].map((_, i) => (
          <div key={i} className="esquadria-grid-item"></div>
        ))}
      </div>
      
      {/* Versão mobile simplificada */}
      <div className="esquadria-grid fade-in sm:hidden" 
           style={{ 
             top: '70%', 
             right: '10%', 
             width: '80px', 
             height: '80px' 
           }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="esquadria-grid-item"></div>
        ))}
      </div>
      
      {/* Linhas verticais */}
      <div className="esquadria-line esquadria-vertical fade-in hidden md:block" style={{ top: '40%', left: '25%', height: '200px' }}></div>
      <div className="esquadria-line esquadria-vertical fade-in hidden md:block" style={{ top: '20%', right: '30%', height: '150px' }}></div>
    </>
  );
};

export default EsquadriaElements;
