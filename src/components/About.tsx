
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-helvetica text-center mb-12 tracking-tight">
            <span className="border-b-2 border-white pb-1">Sobre o Noto</span>
          </h2>
          
          <div className="font-helvetica leading-relaxed space-y-4">
            <p>
              Lembra quando software era apenas software? Sem assinaturas, sem sincronização na nuvem forçada,
              e sem rastrear cada tecla que você digita? Nós também lembramos.
            </p>
            <p>
              É por isso que criamos o Noto—uma volta aos tempos em que aplicativos de anotações eram ferramentas simples que
              faziam um trabalho muito bem. O Noto é construído com foco em privacidade, velocidade e simplicidade.
            </p>
            <p>
              Nossa inspiração vem dos aplicativos clássicos de bloco de notas do início dos anos 2000,
              mas com recursos modernos que fazem sentido. Sem excessos, sem complexidade desnecessária.
            </p>
            <p>
              Baixe o Noto hoje e experimente anotações da maneira que deveria ser—simples, seguras e eficaz.
            </p>
          </div>
          
          <div className="mt-10 font-courier text-center text-sm border border-white p-4">
            <code>
              "Na simplicidade, há liberdade."
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
