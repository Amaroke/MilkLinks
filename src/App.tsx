import { useState } from "react";
import { extensions, guides, tools, otherLinks } from "./data/links";
import type { Link } from "./data/links";
import backgroundSvg from "./assets/background.svg";

const androidLinks: Link[] = [
  {
    label: "Unofficial Android App",
    url: "https://github.com/McPeyen/Unofficial-Milky-Way-Idle-for-Android",
  },
];

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SplitLinkButton = ({ label, url }: Link) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="w-full max-w-sm flex rounded-md overflow-hidden shadow-lg">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-linear-to-r from-indigo-800 via-blue-700 to-blue-500 text-white py-2.5 text-lg font-semibold hover:from-indigo-700 hover:via-blue-600 hover:to-blue-400 transition-all duration-300 brightness-105 hover:brightness-125 hover:scale-x-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-400/70"
      >
        {label}
      </a>
      <div className="w-px bg-white/20 shrink-0" />
      <button
        onClick={handleCopy}
        title="Copier le lien"
        className="shrink-0 px-3 flex items-center justify-center bg-linear-to-r from-blue-500 to-blue-400 text-white hover:from-blue-400 hover:to-blue-300 transition-all duration-300 brightness-105 hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-blue-400/70"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
};

const SimpleLinkButton = ({ label, url }: Link) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full max-w-sm text-center bg-linear-to-r from-indigo-800 via-blue-700 to-blue-500 text-white py-2.5 rounded-md text-lg font-semibold shadow-lg hover:from-indigo-700 hover:via-blue-600 hover:to-blue-400 transition-all duration-300 brightness-105 hover:brightness-125 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400/70"
  >
    {label}
  </a>
);

const Section = ({
  title,
  links,
  split = false,
}: {
  title: string;
  links: Link[];
  split?: boolean;
}) => (
  <section className="w-full max-w-md flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-2 drop-shadow-md">{title}</h2>
    <div className="flex flex-col items-center gap-2 w-full">
      {links.map((link) =>
        split ? (
          <SplitLinkButton key={link.url} {...link} />
        ) : (
          <SimpleLinkButton key={link.url} {...link} />
        ),
      )}
    </div>
  </section>
);

const App = () => (
  <div
    className="min-h-screen bg-[#131c37] bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundSvg})` }}
  >
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-2 text-white">
      <h1 className="text-4xl font-extrabold mb-2 tracking-wide drop-shadow-md text-center">
        MilkLinks
      </h1>
      <p className="text-lg text-white mb-5 text-center">
        Only the best and fully working solutions
      </p>
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-12">
        <div className="flex-1 flex flex-col items-center gap-8">
          <Section title="Extensions" links={extensions} split />
          <Section title="Android App" links={androidLinks} />
        </div>
        <div className="flex-1 flex flex-col items-center gap-8 md:gap-4">
          <Section title="Guides" links={guides} />
          <Section title="Tools" links={tools} />
          <Section title="Other Links" links={otherLinks} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
