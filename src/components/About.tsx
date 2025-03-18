
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-helvetica text-center mb-12 tracking-tight">
            <span className="border-b-2 border-white pb-1">About Noto</span>
          </h2>
          
          <div className="font-helvetica leading-relaxed space-y-4">
            <p>
              Remember when software was just software? No subscriptions, no cloud sync forced upon you, 
              and no tracking your every keystroke? We do too.
            </p>
            <p>
              That's why we created Noto—a throwback to when note-taking apps were simple tools that 
              did one job really well. Noto is built with a focus on privacy, speed, and simplicity.
            </p>
            <p>
              Our inspiration comes from the classic notepad applications of the early 2000s, 
              but with modern features that make sense. No bloat, no unnecessary complexity.
            </p>
            <p>
              Download Noto today and experience note-taking the way it should be—simple, private, and effective.
            </p>
          </div>
          
          <div className="mt-10 font-courier text-center text-sm border border-white p-4">
            <code>
              "In simplicity, there is freedom."
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
