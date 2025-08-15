import React from "react";
import { extensions, guides, tools, otherLinks } from "./data/links";
import bgImage from "./assets/background.jpg";

type Link = {
  label: string;
  url: string;
};

const LinkButton: React.FC<Link> = ({ label, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full max-w-sm text-center bg-gradient-to-r from-purple-700 via-blue-800 to-indigo-900 text-white py-2.5 rounded-md text-lg font-semibold shadow-md hover:from-purple-500 hover:via-blue-600 hover:to-indigo-700 transition-all duration-300 filter brightness-105 hover:brightness-125 focus:outline-none focus:ring-3 focus:ring-purple-500/60"
  >
    {label}
  </a>
);

const Section: React.FC<{ title: string; links: Link[] }> = ({
  title,
  links,
}) => (
  <section className="w-full max-w-md flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-2 drop-shadow-md">{title}</h2>
    <div className="flex flex-col items-center gap-2 w-full">
      {links.map((link, i) => (
        <LinkButton key={i} {...link} />
      ))}
    </div>
  </section>
);

const App: React.FC = () => (
  <div
    className="min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-2 text-gray-300">
      <h1 className="text-4xl font-extrabold mb-2 tracking-wide drop-shadow-md text-center">
        MilkLinks
      </h1>
      <p className="text-lg text-gray-300 mb-5 text-center">
        Only the best and fully working solutions
      </p>

      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-12">
        <div className="flex-1 flex flex-col items-center gap-8">
          <Section title="Extensions" links={extensions} />
        </div>
        <div className="flex-1 flex flex-col items-center gap-8 md:gap-4">
          <Section title="Guides" links={guides} />
          <Section title="Tools" links={tools} />
          <Section title="Others Links" links={otherLinks} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
