import Header from './components/Header';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 font-sans">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          
          {/* Luz de fundo decorativa (A que estava amarela no VS Code, pode ignorar o aviso!) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] -z-10" />

          <div className="max-w-4xl mx-auto text-center">
            {/* Tag de Data */}
            <p className="text-blue-500 font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-6 bg-blue-500/5 w-fit mx-auto px-4 py-1 rounded-full border border-blue-500/20">
              15 a 18 de Outubro • 2026 • São Paulo
            </p>
            
            {/* Título Principal */}
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              O futuro do dev <br /> 
              <span className="text-slate-600">no horizonte.</span>
            </h1>

            {/* Descrição */}
            <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              A CodeHorizon é o ponto de encontro dos desenvolvedores que estão moldando o amanhã. 
              Quatro dias de imersão total em tecnologia.
            </p>

            {/* O CONTADOR: Posicionado aqui para prender a atenção */}
            <div className="mb-14">
              <Countdown />
            </div>

            {/* Botões de Ação (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
                Garantir minha vaga
              </button>
              <button className="w-full sm:w-auto border border-slate-800 bg-slate-900/50 backdrop-blur-sm px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-95">
                Ver palestrantes
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;