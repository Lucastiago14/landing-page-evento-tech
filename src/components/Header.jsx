import { Ticket } from 'lucide-react';

export default function Header() {
  // Mantemos as chaves em inglês, mas o valor (name) em português
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Programação', href: '#schedule' },
    { name: 'Palestrantes', href: '#speakers' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-blue-600 p-1.5 rounded-md group-hover:bg-blue-500 transition-colors">
            <Ticket className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Code<span className="text-blue-500">Horizon</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-500 hover:text-white transition-all active:scale-95">
          Garantir Ingresso
        </button>
        
      </div>
    </header>
  );
}