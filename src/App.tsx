import React from "react";

type Link = {
  label: string;
  url: string;
};

const extensions: Link[] = [
  {
    label: "MWI Tools",
    url: "https://greasyfork.org/en/scripts/494467-mwitools",
  },
  {
    label: "MWI Tools for Steam",
    url: "https://raw.githubusercontent.com/YangLeda/Userscripts-For-MilkyWayIdle/refs/heads/main/MWITools%20addon%20for%20Steam%20version.js",
  },
  {
    label: "Better UI (Custom Styles)",
    url: "https://github.com/AJman14/MWI-Extensions/blob/Extensions/Custom%20Styles/Custom%20Styles%20-%201.1.0.css- Better UI",
  },
  {
    label: "Skill Requirements",
    url: "https://greasyfork.org/en/scripts/530719-mwi-qol-skill-requirement?locale_override=1",
  },
  {
    label: "Profile on Avatar",
    url: "https://greasyfork.org/en/scripts/531374-mwi-qol-profile-on-avatar?locale_override=1",
  },
  {
    label: "Hit Tracker",
    url: "https://greasyfork.org/en/scripts/535181-mwi-hit-tracker",
  },
  {
    label: "Hide Full Party",
    url: "extension://iikmkjmpaadaobahmlepeloendndfphd/ask.html?aid=240048fa-5e6a-4402-94a6-70005fdb4b32",
  },
  {
    label: "Task Manager",
    url: "https://greasyfork.org/zh-CN/scripts/509720-mwi-taskmanager",
  },
  {
    label: "Tasklist",
    url: "https://greasyfork.org/en/scripts/531418-milky-way-idle-tasklist",
  },
];

const guides: Link[] = [
  {
    label: "Beginner Guide",
    url: "https://milkywayidle.wiki.gg/wiki/Milkyway_Idle_Beginner%E2%80%99s_Guide",
  },
  {
    label: "Iron Cow Walkthrough",
    url: "https://docs.google.com/document/d/1daTEF-OTRMkYwv_7qQj-ebU1hzvk8aKCXI6ZpslnBoE/edit?tab=t.0",
  },
];

const tools: Link[] = [
  {
    label: "Combat Simulator",
    url: "https://shykai.github.io/MWICombatSimulatorTest/dist/",
  },
  {
    label: "Profit Calculator",
    url: "https://milkonomy.pages.dev/#/dashboard",
  },
];

const otherLinks: Link[] = [
  { label: "The Game", url: "https://www.milkywayidle.com/?ref=302632" },
  { label: "The Wiki", url: "https://milkywayidle.wiki.gg/" },
];

const LinkButton: React.FC<Link> = ({ label, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-full max-w-sm text-center
      bg-gradient-to-r from-purple-700 via-blue-800 to-indigo-900
      text-white
      py-2.5
      rounded-md
      text-lg
      font-semibold
      shadow-md
      hover:from-purple-500 hover:via-blue-600 hover:to-indigo-700
      transition-all
      duration-300
      filter
      brightness-105
      hover:brightness-125
      focus:outline-none focus:ring-3 focus:ring-purple-500/60
    "
  >
    {label}
  </a>
);

const Section: React.FC<{ title: string; links: Link[] }> = ({
  title,
  links,
}) => (
  <section className="w-full max-w-md flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4 drop-shadow-md">{title}</h2>
    <div className="flex flex-col items-center gap-2 w-full">
      {links.map((link, i) => (
        <LinkButton key={i} {...link} />
      ))}
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div
      className="
        min-h-screen
        flex flex-col items-center justify-center px-6 py-8
        bg-gradient-to-b from-black via-gray-900 to-purple-900
        text-white
        font-sans
      "
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, #2e1052, #000000 60%), radial-gradient(circle at bottom right, #0f4a8a, #000000 70%)",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1 className="text-4xl font-extrabold mb-2 tracking-wide drop-shadow-md text-center">
        MWLinks
      </h1>
      <p className="text-lg text-gray-300 mb-5 text-center">
        Only the best and fully working solutions
      </p>

      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-12">
        <div className="flex-1 flex flex-col items-center gap-8">
          <Section title="Extensions" links={extensions} />
        </div>

        <div className="flex-1 flex flex-col items-center gap-8">
          <Section title="Guides" links={guides} />
          <Section title="Tools" links={tools} />
          <Section title="Other Links" links={otherLinks} />
        </div>
      </div>
    </div>
  );
};

export default App;
