import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

const scheduleData = {
  "15 Out": [
    { time: "09:00", title: "Abertura: O Futuro do Dev", speaker: "Carolina Silva", room: "Auditório Principal" },
    { time: "11:00", title: "IA Generativa no Workflow", speaker: "Marcos Almeida", room: "Sala Tech A" },
    { time: "14:00", title: "Arquitetura de Micro-frontends", speaker: "Juliana Costa", room: "Auditório Principal" }
  ],
  "16 Out": [
    { time: "10:00", title: "O Novo Motor do Cloud", speaker: "Roberto Souza", room: "Auditório Principal" },
    { time: "13:00", title: "Segurança em APIs Modernas", speaker: "Lucas Tiago (Dev)", room: "Sala Tech B" },
    { time: "16:00", title: "Painel: Carreira Internacional", speaker: "Convidados", room: "Auditório Principal" }
  ]
};

export default function Schedule() {
  // Estado para controlar qual dia está selecionado
  const [activeDay, setActiveDay] = useState("15 Out");

  return (
    <section id="schedule" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3 text-center">Programação</h2>
          <h3 className="text-4xl font-black text-center">Confira o que <span className="text-slate-500">está por vir.</span></h3>
        </div>

        {/* Botões de Troca de Dia (Tabs) */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeDay === day 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Lista de Palestras */}
        <div className="space-y-4">
          {scheduleData[activeDay].map((item, index) => (
            <div 
              key={index}
              className="group bg-slate-900 border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="text-blue-500 font-mono font-bold text-lg flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {item.time}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{item.speaker}</p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-2 text-slate-500 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-lg">
                <MapPin className="w-4 h-4" />
                {item.room}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}