// Dados 100% fictícios para demonstração ética em portfólio
const speakers = [
  {
    name: 'Carolina Silva',
    role: 'Principal Developer',
    company: 'TechNova Solutions',
    // Foto de uso livre do RandomUser.me
    image: 'https://randomuser.me/api/portraits/women/44.jpg' 
  },
  {
    name: 'Marcos Almeida',
    role: 'Head of AI',
    company: 'Quantum Dynamics',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Juliana Costa',
    role: 'Diretora de UX/UI',
    company: 'PixelPerfect Inc.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Roberto Souza',
    role: 'Cloud Architect',
    company: 'CloudSky',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  }
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3">
            Especialistas Confirmados
          </h2>
          <h3 className="text-4xl md:text-5xl font-black">
            Palestrantes de <span className="text-slate-500">classe mundial.</span>
          </h3>
          <p className="text-slate-400 mt-4 text-sm max-w-lg mx-auto">
            (Dados fictícios usados para demonstração do projeto)
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div 
              key={speaker.name} 
              className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 p-4 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-600/10"
            >
              {/* Image Wrapper (Efeito de Zoom e Cor no Hover) */}
              <div className="aspect-square overflow-hidden rounded-2xl mb-6">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div>
                <h4 className="text-xl font-bold text-white mb-1">{speaker.name}</h4>
                <p className="text-sm text-slate-400 font-medium">
                  {speaker.role} <span className="text-blue-500">@ {speaker.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}