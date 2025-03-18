
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-helvetica tracking-tight mb-6">
            Simple. <br/> Effective. <br/> <span className="font-courier">Noto</span><span className="animate-blink">_</span>
          </h1>
          <p className="text-lg mb-8 font-helvetica text-gray-700 max-w-lg">
            A minimalist desktop application for your notes. Just like the good old days, but better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#download">
              <Button className="bg-black hover:bg-gray-800 text-white rounded-none border border-black hover:shadow-md px-6 py-5 font-helvetica text-base tracking-wider transition-all">
                <ArrowDownToLine className="mr-2 h-4 w-4" /> Download Now
              </Button>
            </a>
            <a href="#features">
              <Button variant="outline" className="rounded-none border border-black hover:bg-retro-lightgray px-6 py-5 font-helvetica text-base tracking-wider transition-all">
                Learn More
              </Button>
            </a>
          </div>
        </div>
        <div className="border border-black p-3 bg-retro-lightgray shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-white border border-black p-4">
            <div className="flex justify-between items-center mb-4 border-b border-black pb-2">
              <div className="font-courier text-sm">noto.txt</div>
              <div className="flex gap-2">
                <div className="h-3 w-3 border border-black"></div>
                <div className="h-3 w-3 border border-black"></div>
                <div className="h-3 w-3 border border-black"></div>
              </div>
            </div>
            <div className="font-courier text-sm">
              <p>Welcome to Noto!</p>
              <p className="mt-2">- Clean interface</p>
              <p>- Fast & reliable</p>
              <p>- Markdown support</p>
              <p>- Keyboard shortcuts</p>
              <p className="mt-4">Download today<span className="animate-blink">_</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
