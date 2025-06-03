// Componente de gráfico

const Chart = () => {
  // Dados para o gráfico
  const data = {
    labels: ["Antes", "Depois"],
    costReduction: [100, 65], // 35% de redução
    productivity: [100, 140], // 40% de aumento
  };

  // Altura das barras
  const getBarHeight = (value: number): string => {
    // Ajustar a escala da altura para mobile se necessário, mas manter a proporção
    return `${value * 0.8}px`; // Reduzir um pouco a altura geral para caber melhor
  };

  return (
    <div className="chart-container w-full max-w-full overflow-x-auto px-2 py-4">
      {/* Título com margem inferior aumentada significativamente para mobile */}
      <h3 className="text-lg md:text-xl font-bold mb-16 md:mb-6 text-center">Impacto da Solução Integrada</h3>
      
      {/* Aumentar altura do container em mobile (h-56) e ajustar alinhamento */}
      <div className="flex justify-around items-end h-56 md:h-64 mb-4 md:mb-4 min-w-[280px]">
        {/* Grupo de barras "Antes" */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 md:space-x-4">
            {/* Barra de custo */}
            <div className="flex flex-col items-center">
              <div 
                className="w-8 md:w-16 bg-[#BF6240] relative"
                style={{ height: getBarHeight(data.costReduction[0]) }}
              >
                {/* Ajustar posição do texto da porcentagem */}
                <span className="absolute -top-7 md:-top-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-bold whitespace-nowrap">
                  100%
                </span>
              </div>
              <span className="mt-2 text-xs md:text-sm whitespace-nowrap">Custo</span>
            </div>
            
            {/* Barra de produtividade */}
            <div className="flex flex-col items-center">
              <div 
                className="w-8 md:w-16 bg-[#8AB262] relative"
                style={{ height: getBarHeight(data.productivity[0]) }}
              >
                 {/* Ajustar posição do texto da porcentagem */}
                <span className="absolute -top-7 md:-top-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-bold whitespace-nowrap">
                  100%
                </span>
              </div>
              <span className="mt-2 text-xs md:text-sm whitespace-nowrap">Produtividade</span>
            </div>
          </div>
          <span className="mt-2 md:mt-4 font-bold text-sm md:text-base">Antes</span>
        </div>
        
        {/* Grupo de barras "Depois" */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-2 md:space-x-4">
            {/* Barra de custo - A altura aumentada do container deve resolver */}
            <div className="flex flex-col items-center">
              <div 
                className="w-8 md:w-16 bg-[#BF6240] relative"
                style={{ height: getBarHeight(data.costReduction[1]) }}
              >
                 {/* Ajustar posição do texto da porcentagem */}
                <span className="absolute -top-7 md:-top-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-bold whitespace-nowrap">
                  -35%
                </span>
              </div>
              <span className="mt-2 text-xs md:text-sm whitespace-nowrap">Custo</span>
            </div>
            
            {/* Barra de produtividade */}
            <div className="flex flex-col items-center">
              <div 
                className="w-8 md:w-16 bg-[#8AB262] relative"
                style={{ height: getBarHeight(data.productivity[1]) }}
              >
                 {/* Ajustar posição do texto da porcentagem */}
                <span className="absolute -top-7 md:-top-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm font-bold whitespace-nowrap">
                  +40%
                </span>
              </div>
              <span className="mt-2 text-xs md:text-sm whitespace-nowrap">Produtividade</span>
            </div>
          </div>
          <span className="mt-2 md:mt-4 font-bold text-sm md:text-base">Depois</span>
        </div>
      </div>
      
      <div className="text-center text-xs md:text-sm text-[#8C7B69] mt-2 md:mt-4">
        <p>Resultados médios observados em nossos clientes após 6 meses de implementação</p>
      </div>
    </div>
  );
};

export default Chart;
