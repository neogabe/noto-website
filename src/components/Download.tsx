
import React from 'react';
import { Button } from "@/components/ui/button";
import { Monitor, Apple, FileCode } from 'lucide-react';

const DownloadButton = ({ icon, platform, version }: { icon: React.ReactNode, platform: string, version: string }) => (
  <div className="border border-black bg-white p-6 text-center hover:bg-retro-lightgray transition-colors">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold font-helvetica mb-1">{platform}</h3>
    <p className="text-sm font-courier text-gray-500 mb-4">v{version}</p>
    <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-none border border-black transition-all font-helvetica text-sm">
      Baixar
    </Button>
  </div>
);

const Download = () => {
  return (
    <section id="download" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-helvetica text-center mb-6 tracking-tight">
          <span className="border-b-2 border-black pb-1">Baixar Noto</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 font-helvetica text-gray-700">
          Disponível para todas as principais plataformas. Gratuito para baixar e usar.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <DownloadButton 
            icon={<Monitor size={40} />}
            platform="Windows"
            version="1.0.2"
          />
          <DownloadButton 
            icon={<Apple size={40} />}
            platform="macOS"
            version="1.0.2"
          />
          <DownloadButton 
            icon={<FileCode size={40} />}
            platform="Linux"
            version="1.0.2"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-courier text-sm text-gray-500">
            Requisitos do Sistema: Windows 7+, macOS 10.12+, ou Linux (64-bit)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;
