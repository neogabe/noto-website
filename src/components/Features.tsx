
import React from 'react';
import { FileText, Clock, Keyboard, Lock } from 'lucide-react';

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="border border-black p-6 bg-white hover:bg-retro-lightgray transition-colors">
    <div className="mb-4 inline-block border border-black p-2 bg-black text-white">
      {icon}
    </div>
    <h3 className="text-xl font-bold font-helvetica mb-2">{title}</h3>
    <p className="font-helvetica text-gray-700">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-16 bg-retro-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-helvetica text-center mb-12 tracking-tight">
          <span className="border-b-2 border-black pb-1">Recursos</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureItem 
            icon={<FileText size={24} />}
            title="Texto Simples"
            description="Mantenha a simplicidade com notas em texto simples que carregam instantaneamente."
          />
          <FeatureItem 
            icon={<Clock size={24} />}
            title="Salvamento Automático"
            description="Nunca perca seus pensamentos com salvamento automático em tempo real."
          />
          <FeatureItem 
            icon={<Keyboard size={24} />}
            title="Atalhos"
            description="Navegue e edite eficientemente com atalhos de teclado."
          />
          <FeatureItem 
            icon={<Lock size={24} />}
            title="Privacidade"
            description="Suas notas ficam no seu dispositivo. Sem nuvem, sem rastreamento."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
