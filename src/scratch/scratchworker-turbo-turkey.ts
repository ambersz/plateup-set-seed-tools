import { DishType } from "../kitchenEnums";
import { Unlock } from "../kitchenTypes";
import {
	InfoByCourse,
	averageCourses,
	averageDishes,
} from "../utils/averageCourses";
import {
	RestaurantSettings,
	StartingDishes,
	Unlocks,
} from "../workers/db/unlocks";
import { FindNewUnlocks } from "../workers/reverse-engineered/cards";
import { hash } from "../workers/reverse-engineered/prng";
import { Run } from "../workers/reverse-engineered/run";
import { RerollConfig, Shop } from "../workers/reverse-engineered/shop";
console.log("a");
const chars = "abcdefghijklmnopqrstuvwxyz123456789";
const collisionPairs: { [pair: string]: boolean } = {};
for (const c of [
	"1c",
	"1d",
	"1e",
	"1f",
	"1g",
	"1h",
	"1i",
	"1j",
	"1k",
	"1l",
	"1m",
	"1n",
	"1o",
	"1p",
	"1q",
	"1r",
	"1s",
	"1t",
	"1u",
	"1v",
	"1w",
	"1x",
	"1y",
	"1z",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"2c",
	"2d",
	"2e",
	"2f",
	"2g",
	"2h",
	"2i",
	"2j",
	"2k",
	"2l",
	"2m",
	"2n",
	"2o",
	"2p",
	"2q",
	"2r",
	"2s",
	"2t",
	"2u",
	"2v",
	"2w",
	"2x",
	"2y",
	"2z",
	"23",
	"24",
	"25",
	"26",
	"27",
	"28",
	"29",
	"3c",
	"3d",
	"3e",
	"3f",
	"3g",
	"3h",
	"3i",
	"3j",
	"3k",
	"3l",
	"3m",
	"3n",
	"3o",
	"3p",
	"3q",
	"3r",
	"3s",
	"3t",
	"3u",
	"3v",
	"3w",
	"3x",
	"3y",
	"3z",
	"33",
	"34",
	"35",
	"36",
	"37",
	"38",
	"39",
	"4c",
	"4d",
	"4e",
	"4f",
	"4g",
	"4h",
	"4i",
	"4j",
	"4k",
	"4l",
	"4m",
	"4n",
	"4o",
	"4p",
	"4q",
	"4r",
	"4s",
	"4t",
	"4u",
	"4v",
	"4w",
	"4x",
	"4y",
	"4z",
	"43",
	"44",
	"45",
	"46",
	"47",
	"48",
	"49",
	"5c",
	"5d",
	"5e",
	"5f",
	"5g",
	"5h",
	"5i",
	"5j",
	"5k",
	"5l",
	"5m",
	"5n",
	"5o",
	"5p",
	"5q",
	"5r",
	"5s",
	"5t",
	"5u",
	"5v",
	"5w",
	"5x",
	"5y",
	"5z",
	"53",
	"54",
	"55",
	"56",
	"57",
	"58",
	"59",
	"6c",
	"6d",
	"6e",
	"6f",
	"6g",
	"6h",
	"6i",
	"6j",
	"6k",
	"6l",
	"6m",
	"6n",
	"6o",
	"6p",
	"6q",
	"6r",
	"6s",
	"6t",
	"6u",
	"6v",
	"6w",
	"6x",
	"6y",
	"6z",
	"63",
	"64",
	"65",
	"66",
	"67",
	"68",
	"69",
	"7c",
	"7d",
	"7e",
	"7f",
	"7g",
	"7h",
	"7i",
	"7j",
	"7k",
	"7l",
	"7m",
	"7n",
	"7o",
	"7p",
	"7q",
	"7r",
	"7s",
	"7t",
	"7u",
	"7v",
	"7w",
	"7x",
	"7y",
	"7z",
	"73",
	"74",
	"75",
	"76",
	"77",
	"78",
	"79",
	"8c",
	"8d",
	"8e",
	"8f",
	"8g",
	"8h",
	"8i",
	"8j",
	"8k",
	"8l",
	"8m",
	"8n",
	"8o",
	"8p",
	"8q",
	"8r",
	"8s",
	"8t",
	"8u",
	"8v",
	"8w",
	"8x",
	"8y",
	"8z",
	"83",
	"84",
	"85",
	"86",
	"87",
	"88",
	"89",
]) {
	collisionPairs[c] = true;
}
// const chars = "abcdefghijklmnopqruvyz12569";
let seedHashes: (number | undefined)[] = [];
let size = 0;
// @ts-ignore
const worker = self as Worker;
let seedIndex: number[] = Array.from("azyjcvan")
	.map((ch) => chars.indexOf(ch))
	.slice(2);
seedIndex[5]++;
// let seedIndex: number[] = new Array(6)
// 	.fill(0)
// 	.map(() => Math.floor(Math.random() * chars.length));
let optimalCustsByDay = [
	0, 60.22505101357971, 92.42500000012511, 96.83750000000006, 72.32968875010829,
	74.35000007357377, 56.528639055566856, 47.00421231196999, 51.60417184810697,
	40.20327827038981, 36.89219458682033, 38.538524654734324, 40.20327827038981,
	47.088354740541696, 46.988993194921306,
];
// .map((a) => a - (11 - 1) / 14);
function checkAndSaveHash(h: number): boolean {
	// const uintHash = Number.parseInt(
	// 	Array.from((h >>> 0).toString(2).padStart(32, "0"))
	// 		.reverse()
	// 		.join(""),
	// 	2
	// ); // reverse the binary
	const uintHash = h >>> 0;
	const bucket = Math.floor(uintHash / 32);
	const shift = uintHash % 32;
	const a = seedHashes[bucket];
	let has = a && (a & (1 << shift)) !== 0;
	if (!has) size++;
	const save = (a ?? 0) | (1 << shift);
	seedHashes[bucket] = save;
	return !!has;
}
console.log("scratchworker2");
// let retestSeeds: string[] = ["az3mcw3m"];
const prevSoloLocalStorages: string[] = [];

interface SeedHaver {
	seed: string;
}
let prevLocalStorages: { seed: string }[] = [];
// prevLocalStorages = [];
let retestSeeds: string[] = prevLocalStorages
	.map((a) => a.seed)
	.concat([
		"azm88vrb",
		"azqa165j",
		"azv4hr2q",
		"azhtlbra",
		"az675efr",
		"azrymyf5",
		"azcppvty",
		"azgzyom8",
		"azp1bmqn",
		"azk7vvj4",
		"azj2c6po",
		"aztc9l9f",
		"azv8taeh",
		"az6ngvzv",
		"azl1bik1",
		"azj3qj3x",
		"azbhwbxl",
		"azpuj5d1",
		"azme2hec",
		"azlno5qh",
		"azcm9p9g",
		"azeger2n",
		"azaqadzz",
		"azg9noeu",
		"az9jh2ui",
		"azer95oz",
		"az5kfqvz",
		"az1vyyoc",
		"azaauc9l",
		"azvhhjzv",
		"az1zpq44",
		"azy27gvb",
		"azi6lqhb",
		"az6qk1nb",
		"azamkocx",
		"azrymio5",
		"azriczpo",
		"azpndjai",
		"azq5zyqd",
		"aze3b8aw",
		"azizvqq2",
		"azoi9dlr",
		"aznmrn4w",
		"azsn89vc",
		"azrylzyb",
		"azv5yzbo",
		"azryyr2h",
		"azobqzey",
		"az9mk6f1",
		"az3lkfut",
		"az6njg55",
		"azasffqr",
		"azchjkpv",
		"az6bnyfg",
		"az6i99cg",
		"azryuull",
		"az2lz9lm",
		"az7bbowl",
		"az6zlpbp",
		"azaaeyk1",
		"azouzbl5",
		"az21iidm",
		"azme9uh2",
		"az2bcoeb",
		"azh4k3si",
		"azcpiub2",
		"aze6nbnk",
		"azufjan8",
		"aznloqpy",
		"azh5muez",
		"az915guq",
		"az1nq1j6",
		"azrhegyl",
		"azqq5p2z",
		"az22jmz9",
		"azg9qje6",
		"azuzmhbe",
		"azgmka7p",
		"az9ierry",
		"az2eoinc",
		"azbxo7fh",
		"azzagvpf",
		"azwrm87s",
		"azabhrri",
		"azrdnzkr",
		"azoeqx77",
		"azfqffbl",
		"azuzguzy",
		"azasnfdq",
		"azrbm8j6",
		"azag2lf6",
		"azxzd8lr",
		"azaiewr3",
		"azahwsvl",
		"azhmj1cn",
		"az56vcif",
		"azoblcyk",
		"az75cksx",
		"azaabiau",
		"az915ghc",
		"azqk1q96",
		"azxr3d51",
		"az6b9ur6",
		"az6cfpb2",
		"azluphle",
		"azh1idvm",
		"az4wvd3p",
		"azro2eh8",
		"az1nj95y",
		"azjvncd5",
		"azqg9hai",
		"azrypjj5",
		"azaop8wk",
		"azb379sw",
		"az9kfngj",
		"azagtugs",
		"az7lobw4",
		"azozsbjh",
		"azkkmooo",
		"azj4p77v",
		"az1g5fo6",
		"azaadrmb",
		"az2aeo2z",
		"azpnvjo5",
		"azf2splo",
		"azjvdakf",
		"azqvvrfp",
		"az6dtrzb",
		"azg9qgb2",
		"azujhzi7",
		"azzphrom",
		"azi5zmrj",
		"azagb5p6",
		"az8w26h4",
		"az77q36q",
		"azbkwszy",
		"azryndgj",
		"azg6pf8l",
		"azabpqhc",
		"az99v92d",
		"azm8xbdb",
		"az2zcv2u",
		"azagitxy",
		"azacejyf",
		"azrkrkhy",
		"az2aepbz",
		"azixrkob",
		"az51y3yx",
		"azb11478",
		"az6ckdgb",
		"az6qviqv",
		"azbsqklv",
		"azsrigow",
		"az2a6vgn",
		"azpi5ymz",
		"az9my6fz",
		"azu9hptm",
		"azwxdfgj",
		"az2orveu",
		"azd8lfgl",
		"aznlkivy",
		"azioudob",
		"azksibn1",
		"az2adxae",
		"azuyqicg",
		"azabfmkz",
		"az69vncr",
		"azhkcnw9",
		"azg9jh6a",
		"azho2yzo",
		"az6brpbu",
		"az8neuel",
		"az4fagbs",
		"azffom7r",
		"azcfv9zq",
		"azaccfyn",
		"az6eqk9k",
		"azqc6axr",
		"az4al7df",
		"az5njlzm",
		"azboglmy",
		"azrgfrpi",
		"azactmge",
		"azbfkucx",
		"az5gzp6o",
		"az52oilq",
		"azn2qhfn",
		"azof2q1v",
		"az9jl9yj",
		"azfhraup",
		"azq6eibk",
		"az6cu2vb",
		"az29zof5",
		"aza2cehn",
		"azyubml9",
		"azjvchof",
		"azryeb55",
		"az5kcylu",
		"azi1gt1v",
		"azu4wpwx",
		"az2ol3n3",
		"azniz9fj",
		"azalfdlo",
		"azs5kma4",
		"az1glzg6",
		"azrhfoqv",
		"az6e2lie",
		"azxo7sai",
		"aziw1odh",
		"azaad9el",
		"azjgkzxu",
		"az6chfjj",
		"az67y2tr",
		"azcb9pmw",
		"azigbzrz",
		"aza3ayub",
		"azqcdk1h",
		"azmwe6zi",
		"az2ydkdj",
		"az7cricm",
		"azab95c1",
		"azjvegwg",
		"azn2sjfb",
		"azdgagl1",
		"azczjef6",
		"azir1jvn",
		"azabcomy",
		"az95lohu",
		"azfo8j5m",
		"azj94ku2",
		"aze9vqg1",
		"az1j5z56",
		"azaclwpf",
		"az5izhay",
		"aze2hfhm",
		"az5aajpv",
		"az2jf6u1",
		"azpzwhay",
		"azackuah",
		"azmwgany",
		"aza1lwdy",
		"azbewvtm",
		"az6fgdpl",
		"azv7iv92",
		"azr6p37c",
		"az1ao9jq",
		"az7zzdoe",
		"az9b57qc",
		"azacjgcq",
		"az3vac8j",
		"azinqc2g",
		"azryr6il",
		"azqoehc5",
		"aznhl1xm",
		"azabicxz",
		"azpjtdn2",
		"azabrcyi",
		"azb3yip7",
		"azeqn9sd",
		"az1uv91u",
		"azgebajc",
		"azdqqz5k",
		"az5nfuij",
		"azgj4qxj",
		"azrg515k",
		"azsxf47v",
		"azhfigdp",
		"az5glqb2",
		"azqk6rze",
		"az9r1vfh",
		"azn9yphp",
		"az55kqln",
		"az92f4vn",
		"azyfz1zh",
		"az31dh9k",
		"az5j22og",
		"az15lrfk",
		"az9r5in3",
		"azrgneyy",
		"azaakigd",
		"az96vkw9",
		"azj2lrg9",
		"azadcjxx",
		"aze9ukpm",
		"azaaqkap",
		"az2ivu95",
		"az6by1fi",
		"azif7asl",
		"azh1pqyc",
		"az5z5dco",
		"azgpbkc8",
		"azrz1fe1",
		"azm4lk33",
		"az34vjvo",
		"azof6jj6",
		"azkslnvl",
		"azajdhsu",
		"azse5l2f",
		"azp799vm",
		"azzfm4l7",
		"azrh2jef",
		"az6x8u8z",
		"azbcdrvf",
		"azinjl32",
		"az93pz88",
		"azvjmmh9",
		"az3d8wdk",
		"az6iivhs",
		"az6bufc1",
		"azpiyba1",
		"azjqqzyy",
		"azww72zq",
		"azvmgd9b",
		"az8u75ot",
		"azakm22e",
		"aze9pbku",
		"azyjcvan",
		"azmupf6h",
		"az96mzne",
		"azi9c16r",
		"azqpzl69",
		"azabcp6k",
		"azajzftn",
		"az1hmfuq",
		"azimmh7w",
		"azxc7ob1",
		"azgd8bj6",
		"az6ojk2f",
		"azavjy5r",
		"az53bg4z",
		"azdk794o",
		"aznl5nba",
		"az6b2655",
		"az2ul2hh",
		"azppx3eo",
		"azrymeze",
		"azgu984v",
		"azdxksux",
		"az6byq1n",
		"az1w12gy",
		"azl2f34t",
		"azlzrpaf",
		"azjhzobg",
		"azrhcmeq",
		"azagqm1o",
		"az2tw9ip",
		"azsdhcx8",
		"azommuzp",
		"azkccy54",
		"azi51egd",
		"azacrshq",
		"azpsxysc",
		"azvjs3xv",
		"az8pbwki",
		"azecdpi8",
		"az6221zi",
		"azlaoo21",
		"azafdoxn",
		"az6chqqa",
		"azm92th1",
		"az1qiecg",
		"azcvapia",
		"azhfodq1",
		"azelym7a",
		"azno5z72",
		"azg9jfmd",
		"azklb5ly",
		"az6mkuo5",
		"azeqoayf",
		"az1y9beg",
		"az3hianp",
		"az9hm5nu",
		"azbgyl9z",
		"az1je1kb",
		"azpndemi",
		"aztosiua",
		"azco2crr",
		"azaz2a93",
		"azj1idtl",
		"azfgckit",
		"azg5qpcj",
		"azrymfvh",
		"az88ru9v",
		"azacb2zk",
		"az9jqe9b",
		"az18gab2",
		"az69cahu",
		"azprhi2h",
		"azaaesyg",
		"azryvcp5",
		"az6cffcm",
		"az61q95j",
		"azaaouev",
		"azqu61f1",
		"az4xzj6z",
		"azmwt14t",
		"azawsa9s",
		"azryol5z",
		"az6o6ff2",
		"azopslk8",
		"azah69hg",
		"azuz5tsa",
		"azaabga6",
		"azw8g4vc",
		"az572mf2",
		"az5rmanu",
		"aze9q51h",
		"azk1gkqb",
		"az2xjecb",
		"azwtohbj",
		"azkesw9h",
		"azsls4hm",
		"azft9fl4",
		"azhtlehz",
		"azttypuk",
		"az1fn9zq",
		"azer4jrv",
		"azg9our1",
		"azrlhfdj",
		"azr57774",
		"azpjpj5m",
		"azaduujc",
		"az5it2lv",
		"azacggob",
		"azpklacp",
		"azagamy9",
		"azycvhe7",
		"aza26ca6",
		"azqcegng",
		"azryndbv",
		"azme1rqv",
		"azrnld4q",
		"az6ciavv",
		"azavzhpz",
		"azb5wwii",
		"azmeiob6",
		"azofbyoa",
		"azv1kwzz",
		"azuz6dgk",
		"az5zgq5c",
		"aza19vvj",
		"azaa9dun",
		"az3kvqdo",
		"azbarx9n",
		"az6cjnjn",
		"azk5n2ok",
		"azg5l64g",
		"azaalyh2",
		"az1brk55",
		"azgu7o25",
		"azzravrv",
		"azdjspot",
		"azn64z5a",
		"azab9byl",
		"aze28gs1",
		"azaofin5",
		"az1cfadh",
		"azao9nif",
		"azq3xu4b",
		"azamclhh",
		"azdvbyqz",
		"azgw3a23",
		"aznanvzq",
		"azvh5eat",
		"azgj2wyv",
		"azaesoxe",
		"azacvl6p",
		"azvjrogu",
		"azi4x6q6",
		"azzfq8mt",
		"azzadcjm",
		"az2fro9k",
		"azabhzhp",
		"azagbcod",
		"azutkroy",
		"az6bverb",
		"azh5vm5y",
		"azadtzwq",
		"azaambws",
		"azfco9fo",
		"azapn66z",
		"az39fbzr",
		"azukewxh",
		"azhdschp",
		"az89wp9y",
		"azxdmpog",
		"azzytkfa",
		"az2fnfec",
		"azmcdiz5",
		"azeqpjam",
		"az9cx7g6",
		"azt9ayjv",
		"az5udk5a",
		"azge1kap",
		"azom4uel",
		"azaapugj",
		"azbsbapf",
		"azuoywq2",
		"azrhjgzk",
		"azzj6s75",
		"azyph3a3",
		"az7deqdj",
		"azal9e9r",
		"azz59e4q",
		"azna61i2",
		"az2ypvni",
		"azole1l2",
		"azryqucd",
		"azj1jgr5",
		"azegqf9m",
		"azrym9za",
		"azokc9c8",
		"az56m1gb",
		"azahub9y",
		"azb9isnn",
		"aznjtjq6",
		"az69rlgz",
		"az15h3h3",
		"azaarzlq",
		"azvylfol",
		"azrg5gi6",
		"az67hsmt",
		"az9kgpcr",
		"azs92y6d",
		"azaaa2fi",
		"az9d5cz1",
		"azoyvvvg",
		"az5jkbpz",
		"azbbxmtx",
		"az1iqqd2",
		"az1bavqn",
		"az9nfo1j",
		"az1ua6re",
		"aznimz6v",
		"azuz2aeu",
		"azcaxqfh",
		"azaa5fzj",
		"azl8mk98",
		"azk5lib2",
		"azg9llmv",
		"az1jl9d6",
		"azryppy9",
		"az9n1hzu",
		"azpd1ujh",
		"azrzrdd5",
		"azekekwn",
		"az8fcudx",
		"azaukgw9",
		"azjikd9v",
		"azbshwos",
		"azognzxk",
		"azhiijt8",
		"azrtdb8f",
		"azac2qdl",
		"azpcmvo4",
		"azrz6rak",
		"az6syq9p",
		"azrhoian",
		"az6u9rcj",
		"azsrlvzo",
		"azg9rnm5",
		"azelkbp1",
		"az51m4ms",
		"azbvs4g3",
		"az3ld8i3",
		"az9d9irm",
		"aznkvm3s",
		"azo546ao",
		"az4nbxii",
		"azadpkmz",
		"azaoqqwh",
		"aze9qg6z",
		"azt8sg1l",
		"azaedfqj",
		"azl1x6jn",
		"azabezmw",
		"azaaxm32",
		"azzo5z5v",
		"az6claqm",
		"az8gifxb",
		"az2k5gym",
		"az27ia9g",
		"azrw9tj2",
		"azaah1mr",
		"az6bmyvz",
		"aznznczb",
		"azk5pac2",
		"azckobl4",
	]);
retestSeeds = []; // TEMP
const dedupeRetestSeeds = (prevLocalStorages: { seed: string }[]) => {
	retestSeeds = retestSeeds
		// @ts-ignore
		.concat(prevLocalStorages.flatMap((a) => JSON.parse(a).map((a) => a.seed)))
		.sort(() => Math.random() - 0.5);

	{
		const dupeSeeds: { [a: string]: boolean } = {};
		retestSeeds = retestSeeds
			.filter((seed) => {
				let a = hash(seed);
				if (dupeSeeds[a]) return false;
				dupeSeeds[a] = true;
				return true;
			})
			.sort(() => Math.random() - 0.5);
		console.log(JSON.stringify(retestSeeds));
	}
};
dedupeRetestSeeds([]);

worker.onmessage = (messageEvent: MessageEvent) => {
	console.log("received message");
	const prevLocalStorages: { seed: string }[] = messageEvent.data;
	console.log({ prevLocalStorages });
	// @ts-ignore
	dedupeRetestSeeds(prevLocalStorages);
};
let biggerPiece = [0, 0];
function randomOrRetestSeed(): string {
	if (retestSeeds.length) return retestSeeds.shift() as string;
	return randomAZSeed();
}
let sent = 1;
type QueueType = {
	excessGroups: number;
	mainVariants: number;
	starters: number;
	desserts: number;
	sides: number;
	cards: Unlock[];
	reduction: number;
	req: number;
	averageGroupSize: number;
	optimal: number[];
	notes: any[];
}[];
const spawnConfigs: RerollConfig[][] = [
	[{ spawnInside: true, blueprintCount: 7 }],
	[{ spawnInside: false, playerInside: true, blueprintCount: 7 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 7 }],
];
const soloRerollConfigs: RerollConfig[][] = [
	[{ spawnInside: true, blueprintCount: 3 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 3 }],
	[{ spawnInside: true, blueprintCount: 4 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 4 }],
	[{ spawnInside: true, blueprintCount: 5 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 5 }],
	[{ spawnInside: true, blueprintCount: 6 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 6 }],
	[{ spawnInside: true, blueprintCount: 7 }],
	[{ spawnInside: false, playerInside: false, blueprintCount: 7 }],
];
const finalRerollConfig: RerollConfig = {
	spawnInside: true,
	blueprintCount: 6,
};
{
	// const CUSTOMER_INCREASING_CARDS = [
	// 	"Burgers",
	// 	// "Hot Dogs",
	// 	// "Breakfast",
	// 	"Steak",
	// 	"Salad",
	// 	"Pizza",
	// 	"Black Coffee",
	// ];
	const CUSTOMER_INCREASING_CARDS = {
		Burgers: -2,
		"Hot Dogs": -1,
		Breakfast: 0,
		Steak: 0,
		Salad: -1,
		Pizza: 0,
		"Black Coffee": -2,
		Advertising: -1, // not really, but let's pretend
		"Closing Time?": -1,
		"Sponge Cake": -1,
		Cupcake: -1,
		Doughnut: -1,
		Brownies: -1,
	};
	const DOUBLE_REDUCTION_CARDS = [
		"Dumplings",
		"Turkey - Stuffing",
		"Apple Salad",
		"Potato Salad",
		"Lasagne",
	];
	const REQUIRED_CARDS: string[] = [
		// "Bamboo",
		// "Broccoli",
		// "Chips",
		// "Corn on the Cob",
		// "Mashed Potato",
		// "Onion Rings",
		// "Roast Potato",
		// "Ice Cream",
		// "Apple Pies",
		// "Pumpkin Pies",
		// "Cherry Pie",
		// "Cheese Board",
		// "Medium Groups",
		// -----------------
		// "Leisurely Eating",
		// "Individual Dining",
		// "All You Can Eat",
		// "Fish",
		// "Pies",
		// "Stir Fry",
		// "Breakfast",
		// "Hot Dogs",
		// "Dumplings",
		// "Turkey - Stuffing",
		// "Turkey",
		// "Large Groups",
		// SIDES --->
		// "Bamboo",
		// "Broccoli",
		// "Chips",
		// "Corn on the Cob",
		// "Mashed Potato",
		// "Onion Rings",
		// "Roast Potato",
		// <--- SIDES
		// "Instant Service",
		// "All You Can Eat",
		// "Double Helpings",
		// "Affordable",
		// "Ice Cream",
		// "Apple Pies",
		// "Pumpkin Pies",
		// "Cherry Pie",
		// "Cheese Board",
		// "Cake Flavour - Coffee",
		// "Cake Flavour - Lemon",
	];
	const turbo = RestaurantSettings.filter((a) => a.Name === "Turbo")[0];
	// const cardDays = [3, 5, 6, 9, 12, 15, 18, 21, 24, 27, 30]; // autumn
	const cardDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	const expectedCustsByDay = [
		6.6, 8.64, 11.7, 13.86, 16.2, 22.464, 25.704, 29.16, 38.304, 42.84, 47.628,
		60.192, 66.24, 72.576, 89.1,
	];
	// "best" case scenario, if we ignore how long it takes to cook everything in the early days
	const minGroupsByDay = [
		7, 6, 7, 7, 7, 11, 8, 8, 11, 11, 8, 11, 8, 7, 11,
		// 7, 7, 7, 7, 7, 12, 12, 11, 12, 12, 12, 12, 12, 12, 13,
		// 7, 7, 8, 11, 7, 11, 12, 12, 13, 12, 11, 11, 12, 12, 13,
	]; // ice cream, ayce, all sides
	// let optimalCustsByDay = [
	// 	0, 96.5, 92.5, 118.625, 105.125, 103.8125, 85.8125, 94.8125, 102.03125,
	// 	115.53125, 122.234375, 125.2109375, 102.734375, 109.765625,
	// ];
	const averageExcessGroupsByCardDay: number[] = [];
	const dataPointsPerCardDay: number[] = cardDays.map(() => 0);
	let maxRuns = Infinity;
	const cards = new FindNewUnlocks("");
	const shop = new Shop("");
	shop.addCard(turbo);
	cards.addCard(turbo);
	const lastDay = Math.min(30, cardDays.at(-1)!);
	let defaultStartingCards: QueueType =
		/*[
		// { name: "Steak", r: 0 },
		// { name: "Salad", r: -1 },
		// { name: "Pizza", r: 0 },
		// { name: "Dumplings", r: 2 },
		// { name: "Burgers", r: -2 },
		// { name: "Turkey", r: 1 },
		// { name: "Spaghetti", r: 1 },
		{ name: "Hot Dogs", r: 1 },
	]//**/
		// StartingDishes.filter((a) => a.isMain)
		// ["Steak", "Turkey", "Burgers"]
		// ["Turkey"]
		// ["Cakes"]
		[
			// "Steak",
			// "Salad",
			// "Pizza",
			// "Dumplings",
			// "Burgers",
			// "Turkey",
			// "Spaghetti",
			// "Hot Dogs",
			"Breakfast",
			// "Fish",
			// "Pies",
			// "Stir Fry",
		]
			// .map((a) => ({ name: a.Name, r: 1 }))
			.map((a) => ({
				name: a,
				r: StartingDishes.filter((d) => d.Name === a)[0].CustomerMultiplier,
			}))
			.map((b): QueueType[0] => ({
				req: REQUIRED_CARDS.includes(b.name) ? 1 : 0,
				starters: 0,
				desserts: 0,
				sides: 0,
				reduction: b.r,
				excessGroups: 0,
				// expectedCustsByDay
				// 	.slice(0, 3)
				// 	.map(
				// 		(estGroups, i) =>
				// 			Math.ceil(estGroups * 0.85 ** b.r) - minGroupsByDay[i]
				// 	)
				// 	.reduce((a, b) => a + b, 0) * 0,
				cards: [turbo, StartingDishes.filter((a) => a.Name === b.name)[0]],
				averageGroupSize: 1.5,
				optimal: [0],
				notes: [],
				mainVariants: ["Salad", "Stir Fry", "Steak", "Fish"].includes(b.name)
					? 2
					: 1,
			}));
	// let bestMetric = REQUIRED_CARDS.length - 2;
	let bestMetric = Infinity;
	let topNMetrics = [
		845.6203298944807, 868.1003846382044, 868.7474818898006, 871.0097741475146,
		871.0208758606391, 871.2038389535993, 871.7131960394938, 877.5944229026211,
	];

	let bestN = Math.min(13, REQUIRED_CARDS.length);
	// let bestN = 0;
	let runCount = 0;
	let logThresh = 1;
	out: while (maxRuns-- && defaultStartingCards.length) {
		runCount++;
		const seed = randomOrRetestSeed();
		if (runCount > logThresh) {
			logThresh *= 2;
			console.log(
				`Tested ${runCount} seeds so far at ${new Date()}, ${
					defaultStartingCards.length
				} dishes left. ${seed}`
			);
		}
		let run = new Run(seed, defaultStartingCards[0].cards);
		run.turbo = true;
		if (run.mapSize !== "Diner (1)") continue; // solo maps only

		cards.seed = seed;
		shop.seed = seed;

		let queue: QueueType = [...defaultStartingCards];
		// goal is to get all the mains that are unlocked later, plus maximum reductions
		// fish, pie, stir fry ; breakfast, hot dogs
		// try all card paths on a seed, really helpful if you find a good card early, you should try both decor instead of randomly doing one and giving up on the seed once you don't find what you want
		// will the queue balloon too much if I allow anything...?
		let prevDesks = 0;
		if (false) {
			const spawns = shop.getAppliances(spawnConfigs[0], 1);
			if (spawns.filter((a) => a.Name === "Portioner").length) {
				// found one!
			} else {
				let found = false;
				for (const spawnConfig of spawnConfigs) {
					const reroll = shop.getAppliances(
						[spawnConfig[0], spawnConfigs[0][0]],
						1
					);
					if (reroll.some((a) => a.Name === "Portioner")) {
						found = true;
						break;
					}
				}
				if (!found) continue out;
			}
			// for (const day of [6, 7]) {
			// 	const goalDesks = 2;
			// 	// I want 2 desks in the rerolls, ideally 1 discount to buy immediately, and 1 discount/copy to research and discount for tomorrow
			// 	let foundDesks = 0;
			// 	let spawnDesks = shop
			// 		.getAppliances(spawnConfigs[0], day)
			// 		.filter((a) => a.Name !== "Research Desk")
			// 		.filter((a) => a.Name.includes("Desk")).length;
			// 	rerolls: for (const conf of spawnConfigs) {
			// 		let rerollOneDesks = shop
			// 			.getAppliances([...conf, finalRerollConfig], day)
			// 			.filter((a) => a.Name !== "Research Desk")
			// 			.filter((a) => a.Name.includes("Desk")).length;
			// 		foundDesks = Math.max(
			// 			spawnDesks + rerollOneDesks + prevDesks,
			// 			foundDesks
			// 		);
			// 		if (foundDesks >= goalDesks) {
			// 			break rerolls;
			// 		}
			// 		for (const r of soloRerollConfigs) {
			// 			let rerollTwoDesks = shop
			// 				.getAppliances([...conf, ...r, finalRerollConfig], day)
			// 				.filter((a) => a.Name.includes("Desk")).length;
			// 			// foundDesks = Math.max(
			// 			// 	spawnDesks + rerollOneDesks + rerollTwoDesks,
			// 			// 	foundDesks + prevDesks
			// 			// );
			// 			if (spawnDesks + rerollOneDesks + rerollTwoDesks >= goalDesks) {
			// 				foundDesks = goalDesks;
			// 				break rerolls;
			// 			}
			// 		}
			// 	}
			// 	prevDesks = foundDesks;
			// 	if (foundDesks < goalDesks) continue out;
			// }
		}
		for (let i = 0; i < cardDays.length; i++) {
			const day = cardDays[i];
			const newQueue: QueueType = [];
			const checked: { [key: string]: number[] } = {};
			while (queue.length) {
				const conf = queue.pop()!;
				// if (day === 5) {
				// 	// 	// if (!conf.cards.some((a) => a.Name === "Double Helpings")) continue;
				// 	if (!conf.cards.some((a) => a.Name === "Instant Service")) continue;
				// }
				// if (day === 4) {
				// 	if (!conf.cards.some((a) => a.Name === "All You Can Eat")) continue;
				// }
				cards.cards = conf?.cards ?? [];
				const options = cards.getUnlockOptions(day);
				for (const o of options) {
					// if (day === 1 && o.Name !== "Ice Cream") continue;
					// if (day === 2 && o.Name !== "Instant Service") continue;
					// if (day === 3 && o.Name !== "All You Can Eat") continue;
					// if (day === 4 && o.Name !== "Double Helpings") continue;
					let r = day === 5 || day === 15 ? 0 : 1; // no reduction from theme and franchise cards
					const newConf = {
						...conf,
						cards: [...cards.cards, o],
					};
					if (newConf.req + cardDays.length - i < bestN) {
						// if (newConf.req + cardDays.length - i < REQUIRED_CARDS.length)
						// console.log("can't get all the cards I want by now");
						continue; // can't get all the cards I want anyway
					}
					switch (o.DishType) {
						case DishType.Starter:
							continue;
							if (conf.starters && day < 5) {
								// need time for display stand setup
								continue;
							}
							// if (o.Name !== "Christmas Crackers") continue;
							// if (
							// 	!conf.cards.some((a) => a.Name === "Ice Cream") ||
							// 	!conf.cards.some((a) => a.Name === "Instant Service")
							// )
							// 	continue;
							newConf.starters += 1;
							if ((conf.mainVariants > 1 || conf.desserts > 1) && conf.starters)
								continue;
							// if (!newConf.desserts) continue; // dessert before starter
							break;
						case DishType.Dessert:
							if (o.Name !== "Ice Cream") {
								// only take additional desserts after taking ice cream.
								// if (!conf.dessert) r++;
								if (
									!conf.cards.some((a) => a.Name === "Ice Cream") ||
									day < 5
								) {
									r--;
									r--;
									continue;
									// only take additional recipes after you have enough time to set up displays
								}
							}
							newConf.desserts += 1;
							if ((conf.mainVariants > 1 || conf.starters > 1) && conf.desserts)
								continue;
							break;
						case DishType.Null:
							switch (o.Name) {
								case "Picky Eaters":
									continue;
								case "All You Can Eat":
									r++;
									break;
								case "Medium Groups":
									// continue;
									newConf.averageGroupSize += 1.5;
									r--;
									break;
								case "Large Groups":
									// continue;
									newConf.averageGroupSize += 2;
									r--;
									break;
								case "Individual Dining":
									newConf.averageGroupSize -= 0.5;
									r--;
									break;
								case "Leisurely Eating":
									// continue;
									// if (!newConf.cards.some((a) => a.Name === "Affordable")) {
									// 	r--;
									// 	r--;
									// 	r--;
									// 	// continue; // don't take leisurely before getting affordable tier 1 and/or 2
									// }
									break;
								case "Instant Service":
									// r += 0.5;
									r--;
									// r -= 0.5; // not reaaaaally a reduction, but I want the searcher to prioritize getting it earlier, so let's count it as half a reduction
									break;
								case "Sedate Atmosphere":
									// harder to fill display stands in diner
									// if (!newConf.cards.some((a) => a.Name === "Herd Mentality"))
									// 	r--;
									// continue;
									r--;
									// r -= 1.5 // walking slower in outside service
									break;
								default:
									r--; // all other customer cards have no reduction
									break;
							}
							break;
						case DishType.Side:
							newConf.sides++;
							// if (
							// 	day < 5 &&
							// 	(o.Name === "Onion Rings" || o.Name === "Corn on the Cob")
							// )
							// 	r--;
							// ok because metal tables
							break;
						case DishType.Main:
						case DishType.Base:
						case DishType.Extra:
							if (o.Name.includes("Soy Sauce") || o.Name.includes("Mustard")) {
								// no displays needed
								break;
							}
							if (day < 7) continue; // need more time to set up display stands
							if (conf.desserts > 1 || conf.starters > 1) continue;
							newConf.mainVariants++;
							break;
						default:
							// console.log(`quitting on ${o.Name}`);
							// if (o.Name !== "Dumplings - Soy Sauce") continue;
							break;
					}
					if (DOUBLE_REDUCTION_CARDS.includes(o.Name)) r++;
					if (REQUIRED_CARDS.includes(o.Name)) {
						newConf.req++;
					}
					// @ts-ignore
					const m = CUSTOMER_INCREASING_CARDS[o.Name];
					if (m !== undefined) {
						r = m;
						if (conf.req === newConf.req) continue; // not breakfast or hot dogs, just abandon now
					}
					newConf.reduction += r;
					let courseReduction =
						1 + (newConf.starters ? 0.25 : 0) + (newConf.desserts ? 0.25 : 0);
					const D = Math.min(30, cardDays[i + 1] ?? 15);
					if (true) {
						// if (day > 18 - 1) {
						// if (day >= 9) {
						// don't care as much about early reductions, since I'll be cooking and it depends a lot on difficult of the dishes-- after day 9-ish I should be using flower pots much more and the number of groups is directly related to how long I spend rerolling

						for (let d = day; d < D; d++) {
							if (newConf.req === REQUIRED_CARDS.length && d === 29) continue; // don't need to do OT15 if completed all achievements already

							const goalCustomer =
								(expectedCustsByDay[d] * 0.85 ** newConf.reduction) /
								courseReduction;
							const normalGroups = Math.ceil(
								goalCustomer / newConf.averageGroupSize
							);
							const rushGroups = Math.ceil(goalCustomer * 0.15) * 3;
							run.cards = newConf.cards.slice(2);
							// @ts-ignore
							run._cardsByDay = [];
							const groupSizes = run.getGroupSizes(d + 1);
							const groups = groupSizes.length;
							if (d === 15) {
								debugger;
							}
							const courseInfoParams = {
								starters: newConf.starters,
								main: true,
								desserts: newConf.desserts,
								doubleOrderChance: newConf.cards.reduce(
									(n, c) =>
										n +
										(c.Name === "All You Can Eat" ||
										c.Name === "Double Helpings"
											? 0.25
											: 0),
									0
								),
								groupSizes,
							};
							const [thinking, eating] = newConf.cards.reduce(
								([t, e], c) => {
									if (c.Name === "Affordable") {
										return [t / 2, e / 2];
									}
									if (c.Name === "Leisurely Eating") return [t, e * 4];
									return [t, e];
								},
								[2.5, 3]
							);
							// bar tables if no need for metals
							const eatingTime =
								(newConf.sides === 0 && newConf.averageGroupSize === 1
									? eating
									: [thinking, eating].reduce((a, b) => a + b)) *
								averageCourses(courseInfoParams);
							const [courseInfo, dishInfo] = InfoByCourse(courseInfoParams);
							const cookingTime =
								(newConf.starters &&
								!conf.starters &&
								!(
									conf.cards.some((a) => a.Name === "Mashed Potato") &&
									conf.cards.some((a) => a.Name === "Onion Rings")
								)
									? 20
									: 0) +
								dishInfo[0] * 0.6 +
								dishInfo[1] *
									(Math.min(1, d / 8) * -6.5 +
										7.7 +
										5 * (d < 5 ? 1 - 0.75 ** newConf.sides : 0)) +
								dishInfo[2] * (newConf.desserts > 1 ? 0.9 : 1.5) +
								(courseInfo[0] + courseInfo[1] + courseInfo[2]) *
									(newConf.cards.some((a) => a.Name === "Instant Service")
										? 0.3
										: 0.9);
							if (newConf.starters) {
								if (!dishInfo[0]) {
									debugger;
								}
							}
							const EXP = 2;
							const cookingPiece = EXP ** (1 + cookingTime);
							let tableTops = 2;
							{
								// assign tables
								switch (newConf.averageGroupSize) {
									case 1:
										// individual dining
										// only need one metal table per group
										if (!newConf.sides) {
											tableTops = Math.min(d, 5);
											break;
										}
										if (
											d > 8 &&
											newConf.cards.some((a) => a.Name === "Instant Service")
										) {
											tableTops = 4;
										} else if (d > 4) {
											tableTops = 3;
										}
										break;
									case 1.5:
										// no cards
										if (d > 9) {
											tableTops = 3;
										}
										break;
									case 3:
										// medium groups +/- flexible
										if (
											d > 10 ||
											(newConf.cards.some((a) => a.Name === "Charming") &&
												d > 6)
										) {
											tableTops = 2;
										} else {
											tableTops = 1;
										}
										break;
									case 5:
										tableTops = 1;
										// medium, large groups, +/- flexible
										break;
									default:
									// ???
								}
							}
							const eatingPiece =
								EXP **
								(10 +
									(((newConf.cards.some((a) => a.Name === "Charming") ? 0 : 2) +
										(newConf.cards.some((a) => a.Name === "Instant Service")
											? 0
											: 1) *
											(courseInfo[0] + courseInfo[1] + courseInfo[2]) +
										eatingTime) /
										tableTops) *
										groups);
							if (cookingPiece > eatingPiece) {
								biggerPiece[0]++;
							} else if (eatingPiece > cookingPiece) {
								biggerPiece[1]++;
							}
							// const gotMet = Math.max(groups * eatingTime, cookingTime);
							const gotMet =
								Math.log(cookingPiece + eatingPiece) / Math.log(EXP) +
								(newConf.starters > 1 ||
								newConf.mainVariants > 1 ||
								newConf.desserts > 1
									? 16
									: 0) /
									(newConf.cards.some((a) => a.Name === "Personalised Waiting")
										? 4
										: 1); // display stand setup time
							// Math.log(cookingPiece + eatingPiece) / Math.log(EXP);
							newConf.optimal = [...newConf.optimal];
							newConf.notes = [...newConf.notes];
							newConf.notes.push({
								card: newConf.cards.at(-1)?.Name,
								d,
								cookingTime,
								eatingTime,
								eatingPiece:
									10 +
									((newConf.cards.some((a) => a.Name === "Charming")
										? 1
										: 2 - (1 - 0.75 ** newConf.desserts)) +
										eatingTime) *
										groups,
								groups,
								groupSizes,
								groupCards: run
									.getCardsByDay(d + 1)
									.map((a) => a.Name)
									.join(", "),
								courseInfo,
								dishInfo,
								gotMet,
							});
							newConf.optimal[d] = gotMet;
							const todayExcessCusts = gotMet - optimalCustsByDay[d];
							if (Number.isNaN(todayExcessCusts)) {
								debugger;
							}
							if (!Number.isFinite(todayExcessCusts)) {
								// debugger;
							}
							newConf.excessGroups += todayExcessCusts;
							// newConf.excessGroups += groups - minGroupsByDay[d];
							// Math.max(0, groups - minGroupsByDay[d]) ** 3;
						}
					}
					if (bestN === REQUIRED_CARDS.length) {
						if (
							// seed !== "azxo7sai" &&
							newConf.excessGroups >
							topNMetrics.at(-1)! - optimalCustsByDay.reduce((a, b) => a + b)
						)
							continue; // even if I get double reductions for the rest of the run I wouldn't be able to catch up
						if (false) {
							if (averageExcessGroupsByCardDay[i] === undefined) {
								averageExcessGroupsByCardDay[i] = 0;
							}
							averageExcessGroupsByCardDay[i] += newConf.excessGroups;
							dataPointsPerCardDay[i]++;
							const average =
								averageExcessGroupsByCardDay[i] / dataPointsPerCardDay[i];
							if (
								dataPointsPerCardDay[i] > 100 &&
								day !== 5 &&
								day !== 15 &&
								newConf.excessGroups > average + 10
							) {
								// debugger;
								continue;
							}
						}
					}

					if (true) {
						// need to do this a little more.... smartly? if I want to not throw away a bunch of seeds because the first time I saw a particular card path I got the smaller reductions first, and then threw away the path with better reductions for being redundant, and then threw away the path with worse reductions because it couldn't match up with my goals lol
						const key = [...cards.cards, o]
							.map((a) => a.Name)
							.sort()
							.join(",");
						if (!checked[key]) checked[key] = [];
						checked[key].push(newQueue.length);
					}
					newQueue.push(newConf);
				}
			}
			// newQueue.sort((a, b) => a.metric - b.metric);
			// newQueue.sort((a, b) => a.req - b.req);
			{
				// remove suboptimal path duplicates
				const newNewQueue = [];
				const classes = Object.values(checked);
				for (const indices of classes) {
					if (indices.length === 1) {
						// no dupes
						newNewQueue.push(newQueue[indices[0]]);
						continue;
					}
					let leastExcessGroups = Infinity;
					let chosenIndex = -1;
					for (const i of indices) {
						if (newQueue[i].excessGroups < leastExcessGroups) {
							chosenIndex = i;
							leastExcessGroups = newQueue[i].excessGroups;
						}
					}
					if (chosenIndex === -1) {
						// debugger;
						chosenIndex = 0;
						// throw new Error();
					}
					if (chosenIndex > newQueue.length - 1) throw new Error();
					newNewQueue.push(newQueue[chosenIndex]);
				}
				queue = newNewQueue;
			}
			// queue = newQueue;
			// queue = newQueue.slice(Math.floor(newQueue.length / 3));
		}
		queue = queue.filter((p) => p.req >= bestN);
		let candBestN = Math.max(...queue.map((a) => a.req));
		queue = queue.filter((a) => a.req === candBestN);
		queue.sort((a, b) => a.excessGroups - b.excessGroups);
		if (queue.length) {
			const candMetric =
				queue[0].excessGroups! + optimalCustsByDay.reduce((a, b) => a + b);
			// if (candMetric === 0) debugger;
			// debugger;
			{
				if (candBestN > bestN || candMetric <= bestMetric) {
					bestMetric = candMetric;
					bestN = candBestN;
					console.log({ biggerPiece });
				}

				if (false && candBestN === REQUIRED_CARDS.length) {
					// find one 7-side seed for each starting dish
					defaultStartingCards = defaultStartingCards.filter(
						(a) => !queue.some((b) => b.cards[1].Name === a.cards[1].Name)
					);
				}
				const res = {
					seed,
					b: queue[0].cards.map((a) => a.Name).join(","),
					n: queue.length,
					bestN,
					candMetric,
					bestMetric,
					// notes: queue[0].notes,
				};
				if (false && queue.length > 1 && queue.length < 5)
					// @ts-ignore
					res.paths = queue.map((a) => a.cards.map((a) => a.Name).join(","));
				if (seed === "azxo7sai") {
					console.log({ seed, candMetric });
					// debugger;
				}
				if (candMetric < topNMetrics.at(-1)!) {
					let i = topNMetrics.length;
					while (i--) {
						if (topNMetrics[i] < candMetric) {
							topNMetrics.splice(i + 1, 0, candMetric);
							break;
						} else if (i === 0) {
							topNMetrics.splice(0, 0, candMetric);
						}
					}
					topNMetrics.pop();
					console.log({ topNMetrics });
				}

				postMessage(res);
				if (queue[0].optimal.length < optimalCustsByDay.length) {
					debugger;
				}
				{
					let candPartialSum = queue[0].optimal.reduce((a, b) => a + b);
					let currentPartialSum = optimalCustsByDay.reduce((a, b) => a + b);
					let changed = false;
					for (let i = 0; i < optimalCustsByDay.length; i++) {
						if (candPartialSum < currentPartialSum) {
							optimalCustsByDay.splice(
								i,
								optimalCustsByDay.length - i,
								...queue[0].optimal.slice(i)
							);
							changed = true;
							break;
						}
						candPartialSum -= queue[0].optimal[i];
						currentPartialSum -= optimalCustsByDay[i];
					}
					if (changed) {
						console.log(JSON.stringify(optimalCustsByDay));
					}
				}
			}
		}
	}
	console.log("done!");
}

function randomAZSeed() {
	seedLoop: while (true) {
		let seed = "";
		// while (seed.length < 6) {
		// 	seed += chars[Math.floor(Math.random() * chars.length)];
		// }
		seed = seedIndex.map((i) => chars[i]).join("");

		{
			// advance seed index
			let i = seedIndex.length;
			seedIndex[i - 1]++;
			while (i--) {
				if (seedIndex[i] >= chars.length) {
					if (i === 0) {
						console.log("done with every seed");
						throw new Error("DONE");
					}
					seedIndex[i] = 0;
					seedIndex[i - 1]++;
				} else {
					break;
				}
			}
		}
		for (let i = 0; i < seed.length; i++) {
			if (collisionPairs[seed.slice(i, i + 2)]) {
				// there's a collision, so I probably checked this has already.
				continue seedLoop;
			}
		}
		return "az" + seed;
		if (Math.random() < 0.5) return "az" + seed;
		return seed + "az";
	}
}

function randomSeed(min: number, max: number) {
	let p = [];
	for (let i = 0; i <= max - min; i++) {
		p.push(chars.length ** i);
	}
	let r = Math.floor(Math.random() * p.reduce((a, b) => a + b));
	let d = 0;
	// let g = p.shift() ?? Infinity;
	while (r > 0) {
		r -= p.shift() ?? Infinity;
		// g = p.shift() ?? Infinity;
		d++;
	}
	const length = d + min;
	let seed = "";
	while (seed.length < length) {
		seed += chars[Math.floor(Math.random() * chars.length)];
	}
	return seed;
}
