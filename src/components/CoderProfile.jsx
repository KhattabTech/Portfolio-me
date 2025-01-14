import React from "react";

const YourComponent = () => {
  return (
    <div className="order-1 lg:order-2 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-4 sm:p-6 lg:p-8 max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto">
      <div className="flex flex-row bg-[#00b2ec]">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-2 sm:px-4 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-[#00b2ec]"></div>
          <div className="h-3 w-3 rounded-full bg-[#00ff8f]"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-2 sm:px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs sm:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-accent">const</span>
            <span className="mr-2 text-white">coder</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-2 sm:ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">'</span>
            <span className="text-amber-300">Mohamed Khattab</span>
            <span className="text-gray-400">',</span>
          </div>
          <div className="ml-2 sm:ml-4 lg:ml-8 mr-2">
            <span className="text-white">skills:</span>
            <span className="text-gray-400">['</span>
            <span className="text-amber-300">React</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">NextJS</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Redux</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Bootstrap</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">Tailwind</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">TypeScript</span>
            <span className="text-gray-400">', '</span>
            <span className="text-amber-300">JavaScript</span>
            <span className="text-gray-400">']</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-2 sm:ml-4 lg:ml-8 mr-2 text-white">
              hardWorker:
            </span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-2 sm:ml-4 lg:ml-8 mr-2 text-white">
              quickLearner:
            </span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-2 sm:ml-4 lg:ml-8 mr-2 text-white">
              problemSolver:
            </span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-2 sm:ml-4 lg:ml-8 mr-2 text-green-400">
              hireable:
            </span>
            <span className="text-orange-400">function</span>
            <span className="text-gray-400">()</span> {"{"}
          </div>
          <div>
            <span className="ml-4 sm:ml-8 lg:ml-16 mr-2 text-orange-400">
              return
            </span>
            <span className="text-gray-400">(</span>
          </div>
          <div>
            <span className="ml-6 sm:ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">hardWorker</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span className="ml-6 sm:ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">problemSolver</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span className="ml-6 sm:ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">skills.length</span>
            <span className="mr-2 text-amber-300">&gt;=</span>
            <span className="text-orange-400">5</span>
          </div>
          <div>
            <span className="ml-4 sm:ml-8 lg:ml-16 mr-2 text-gray-400">);</span>
          </div>
          <div>
            <span className="ml-2 sm:ml-4 lg:ml-8 text-gray-400">{"};"}</span>
          </div>
          <div>
            <span className="text-gray-400">{"};"}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

export default YourComponent;
