export type Link = {
  label: string;
  url: string;
  description?: string;
};

export const extensions: Link[] = [
  {
    label: "MWI Tools",
    url: "https://greasyfork.org/en/scripts/494467-mwitools",
    description:
      "All-in-one enhancement script (extra info, QoL tweaks and UI upgrades).",
  },
  {
    label: "Dungeon Win Rate Calculator",
    url: "https://greasyfork.org/en/scripts/566829-%E8%BF%B7%E5%AE%AB%E8%83%9C%E7%8E%87%E8%AE%A1%E7%AE%97%E5%99%A8",
    description:
      "Estimates your win rate for dungeon runs based on your loadout. Calculates the automation level needed to reach a target win rate.",
  },
];

export const guides: Link[] = [
  {
    label: "Beginner Guide",
    url: "https://milkywayidle.wiki.gg/wiki/Milkyway_Idle_Beginner%E2%80%99s_Guide",
  },
  {
    label: "Best Party Composition",
    url: "https://milkywayidle.wiki.gg/wiki/Best_Party_composition",
  },
  {
    label: "Iron Cow Walkthrough",
    url: "https://docs.google.com/document/d/1daTEF-OTRMkYwv_7qQj-ebU1hzvk8aKCXI6ZpslnBoE/edit?tab=t.0",
  },
];

export const tools: Link[] = [
  {
    label: "Combat Simulator",
    url: "https://shykai.github.io/MWICombatSimulatorTest/dist/",
    description: "Simulate fights to test a build before committing gear.",
  },
  {
    label: "Combat Simulator (Alt)",
    url: "https://combat.43.167.210.211.sslip.io/combat/setup",
    description:
      "Finds your best gear upgrade, optimal ability setup and trigger ranges.",
  },
  {
    label: "Profit Calculator",
    url: "https://milkonomy.pages.dev/#/dashboard",
    description: "Crafting and gathering profitability calculator.",
  },
  {
    label: "Arsenal Trials",
    url: "https://arsenal-trials-mwi.fly.dev/",
    description: "Plan and optimize your Guild Trials runs.",
  },
];

export const otherLinks: Link[] = [
  {
    label: "Game",
    url: "https://www.milkywayidle.com/?ref=302632",
  },
  {
    label: "Wiki",
    url: "https://milkywayidle.wiki.gg/",
  },
  {
    label: "Discord",
    url: "https://discord.com/invite/AmQP4JTNhN",
  },
];

export const androidLinks: Link[] = [
  {
    label: "Unofficial Android App",
    url: "https://github.com/McPeyen/Unofficial-Milky-Way-Idle-for-Android",
  },
];
