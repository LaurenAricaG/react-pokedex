const pokemonColorType = {
  normal: "bg-[#BCBCAC]",
  fighting: "bg-[#BC5442]",
  flying: "bg-[#669AFF]",
  poison: "bg-[#AB549A]",
  ground: "bg-[#DEBC54]",
  rock: "bg-[#BCAC66]",
  bug: "bg-[#ABBC1C]",
  ghost: "bg-[#6666BC]",
  steel: "bg-[#ABACBC]",
  fire: "bg-[#FF421C]",
  water: "bg-[#2F9AFF]",
  grass: "bg-[#78CD54]",
  electric: "bg-[#FFCD30]",
  psychic: "bg-[#FF549A]",
  ice: "bg-[#78DEFF]",
  dragon: "bg-[#7866EF]",
  dark: "bg-[#785442]",
  fairy: "bg-[#FFACFF]",
  unknown: "",
  shadow: "",
};

const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-300",
  ATK: "[&>div]:bg-orange-500 bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-300",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-300",
  SpA: "[&>div]:bg-blue-300 bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-300",
  SpD: "[&>div]:bg-green-500 bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-300",
  SPD: "[&>div]:bg-pink-500 bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-300",
  TOT: "[&>div]:bg-blue-500 bg-blue-300 text-slate-800",
};

export { pokemonColorType, colorByStat };
