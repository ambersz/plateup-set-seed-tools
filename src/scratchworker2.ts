import { DishType } from "./kitchenEnums";
import { Unlock } from "./kitchenTypes";
import { RestaurantSettings, Unlocks } from "./workers/db/unlocks";
import { FindNewUnlocks } from "./workers/reverse-engineered/cards";
import { Run } from "./workers/reverse-engineered/run";
console.log("a");
const chars = "abcdefghijklmnopqrstuvwxyz123456789";
let seedHashes: (number | undefined)[] = [];
let size = 0;
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

// duo
let prevLocalStorages: string[] = [].concat(prevSoloLocalStorages);
// prevLocalStorages = [];
let retestSeeds: string[] = [
	"azqi1oje",
	"azsv2iw4",
	"azibr2la",
	"azku211q",
	"azx1gy8y",
	"azf3fcbi",
	"azecftju",
	"azk6s5xj",
	"azrb9e15",
	"azql5xja",
	"az61tuyx",
	"azf2193c",
	"azbl6dqy",
	"azxtaikm",
	"azefci2g",
	"azrtdf1q",
	"azblxbqy",
	"azyjtvt1",
	"az43phwd",
	"azodr959",
	"azjxcmde",
	"azshawji",
	"azeqynt6",
	"azd7jk5a",
	"azlbnqy1",
	"az9djq39",
	"az3s65im",
	"azh4rh8s",
	"az8eogum",
	"az8qmu9n",
	"azvvzk2f",
	"azuohr9z",
	"azbdocou",
	"azlayko1",
	"azyxylzv",
	"az9y3fhl",
	"azhdprh2",
	"azp9aljg",
	"azvb5ybk",
	"azph71ar",
	"az45gsvl",
	"az2gcju6",
	"azrk2l7c",
	"azqq7spq",
	"azjjvmkv",
	"azs4p4a8",
	"azuu129d",
	"az1858kk",
	"az1htw9j",
	"az7b68ml",
	"azgbbczn",
	"azsba77d",
	"azr2ffso",
	"az4xpghk",
	"azzf34ym",
	"azqyjvlh",
	"aziau242",
	"azf3o1cg",
	"azqzanw8",
	"azfzyau7",
	"az28c1tv",
	"az3qfrb6",
	"azvbmzgc",
	"azvli4ur",
	"azgoidod",
	"azi8axfy",
	"azy9uctv",
	"azjne4un",
	"azsa26m3",
	"azt6hrde",
	"azhgpuwe",
	"aztwt1pl",
	"azsm4il4",
	"azil28b9",
	"az5x7pap",
	"az16ofir",
	"azs3zwcf",
	"azcqdnm5",
	"azwyp3m5",
	"azwy9593",
	"azz84txt",
	"az65okq2",
	"azzoxm7y",
	"azj6c1up",
	"azsf5jgd",
	"azhpswbc",
	"azzhmgs1",
	"azcp7ngq",
	"azwqebw6",
	"az7xksef",
	"az8ne2i6",
	"azyie7zi",
	"azkblbfj",
	"azq93zs2",
	"az3blx9h",
	"azg8l1w9",
	"azfqveit",
	"az3yz9lf",
	"azma3fjg",
	"az7twr1g",
	"azsftw9j",
	"az7gyx6v",
	"az7qm58f",
	"azwvq8mx",
	"azf2sysa",
	"azlteru7",
	"azhh9ye2",
	"azqkseeb",
	"azhrvqu9",
	"azdo7g8w",
	"azbs5env",
	"azapluul",
	"az49kuyq",
	"az413k7e",
	"azrpxwck",
	"az5mulsk",
	"azqnnu82",
	"az5b9q2i",
	"aze6pczh",
	"azsotqq2",
	"azv6y1y4",
	"azmaffvs",
	"azhmi9sl",
	"azw6fqe6",
	"az7pjtld",
	"az1zzrj2",
	"azhh9j24",
	"azzbt97e",
	"az93sylb",
	"azyspigx",
	"az4uujvn",
	"azycd8zs",
	"az4libd4",
	"azogpyx4",
	"azzs4byw",
	"azjw7wv3",
	"azigtpyj",
	"azu54j88",
	"azx6z4jd",
	"azl4qfqn",
	"az95i86g",
	"az1v9ts8",
	"az56hd69",
	"az5afvbb",
	"az3lr1mn",
	"az5ozl59",
	"azh9d93o",
	"aza1w7lk",
	"az6kokup",
	"az5xyp2w",
	"az5jfsbm",
	"aztqmsvs",
	"azdst5dz",
	"azkbx1iw",
	"azdnqpcb",
	"azpl915z",
	"azwvqe31",
	"azqw5pps",
	"azwktbg6",
	"azvd8xtm",
	"azjylhld",
	"azzhrpee",
	"azb66gp1",
	"azz5y69e",
	"azhnb6pq",
	"azyxc5bk",
	"azjoq8r9",
	"azxrxo3g",
	"az5z43cs",
	"azpnpos9",
	"az5xj98k",
	"az6m6hqn",
	"aztgpi2x",
	"az4of8q6",
	"azyh7712",
	"azbsmtxq",
	"azdta14i",
	"azhilgvm",
	"azj63nsf",
	"azl96a3t",
	"azboktvr",
	"azk7ijpj",
	"azr6kf22",
	"az6qvruu",
	"az7py69i",
	"azfc6nxs",
	"azlqeqph",
	"azv5im9e",
	"azfz6qwq",
	"azt3axkn",
	"azyisojw",
	"azplcz57",
	"azasoghu",
	"azsnainp",
	"azfhagdl",
	"azoqk4mt",
	"az3srhya",
	"azhknrci",
	"azzlng17",
	"az6kjz7j",
	"azrqeodu",
	"az9yyz6a",
	"azslaqrw",
	"azsf6lyq",
	"azls73bu",
	"azv3dzom",
	"azrzvkgm",
	"azu8bph7",
	"azssmh96",
	"azhou87a",
	"az9xbl7n",
	"azxdvf5i",
	"azx5tlho",
	"azwg9q5t",
	"azrigadq",
	"azqq88z5",
	"azti4a4t",
	"azp883ci",
	"azmcef74",
	"azv4787m",
	"azshbjrb",
	"azma62yy",
	"aznspxqc",
	"azqk5x4t",
	"azj78q57",
	"az8prknv",
	"azz36zsd",
	"azlrprcp",
	"azaibiz3",
	"azsb63k5",
	"az2aklu3",
	"azpnh3wg",
	"azmmj7yc",
	"azqmrvcl",
	"azapolu3",
	"az65s5z5",
	"azjziups",
	"azj8veij",
	"azqyj4nh",
	"azwfl8n6",
	"azq8h9ce",
	"aznng8e1",
	"az2jvtek",
	"azb9i51q",
	"azsmw4ms",
	"azfiu1mu",
	"azpb1sbv",
	"azmvptaq",
	"az6mceeu",
	"az52jnoy",
	"azl7yd6c",
	"aza2tynz",
	"azqg7wwn",
	"azf5kby7",
	"az94f2ds",
	"azdli29g",
	"aznvdjrt",
	"azcctxr6",
	"azyspmvd",
	"azm3dcjh",
	"azoa4pvx",
	"az3say68",
	"az4xgudb",
	"azyuik3v",
	"az9wpfka",
	"azsmp323",
	"azde4lwc",
	"azmyimy4",
	"az7e2wtd",
	"az5gtbxa",
	"az585szl",
	"azakqi39",
	"az8f9djm",
	"azqidy44",
	"az4s5q9d",
	"azpww854",
	"azjsxm5v",
	"azt8qkhg",
	"az1vj5a1",
	"azak13x9",
	"az1bf8jx",
	"azs7fl83",
	"azl7tvg1",
]
	.concat(
		"azvbmzgc,azyjtvt1,azcctxr6,azzf34ym,aznvdjrt,azm3dcjh,azsa26m3,az4xgudb,azoa4pvx,aztwt1pl,az9djq39,azvb5ybk,az585szl,azvli4ur,azph71ar,aziau242,azpww854,azjsxm5v,azl7tvg1,azfqveit,az1zzrj2,azd7jk5a,azj6c1up,az65okq2,az4libd4,azbsmtxq,azyh7712,azls73bu,azsf5jgd,az4of8q6,aztqmsvs,azbs5env,azu54j88,azv4787m,az8ne2i6,azwktbg6,azqq88z5,azkbx1iw,azfc6nxs,azj78q57,azzhrpee,azqw5pps,azycd8zs,azasoghu,aznspxqc,azyxc5bk,azboktvr,azf5kby7,azvd8xtm,azpl915z,azyakmzt,azes1o75,azx8qlvg,azs2hxqa,az8n1vpr,az58uiaj,azur1yt2,azva73y8,az9ft3vh,az2clzih,azyawh6l,az76ghmf,az27m2sh,azb1zlds,azww9lcf,azihy5ga,azjmb1mv,az132naj,azh6ines,azhi8uvx,azhmhlq5,azbizgpp,az2ufcme,azqfejeq,azikbyxu,azegzqgm,azrdzbf4,az4gk3yw,azhzlp6k,azxijv1f,azzovydr,azp9prhm,azf6sl8a,azfwcrpt,azj18dl6,azmtaje8,azlp5wqv,azyw6ewt,az23ycge,az5qimva,azsx48y4,az9ymiwg,az84zvpe,azauircs,azuz58oe,azdjo5pn,azyppcvo,azdmzkwb,az1boaie,az9463ha,az4k42tm,az5ni442,azuoc7k5,azb7kcdn,azggdsgw,azfigivs,az7bfbcc,azv8vd8k,azdtqf6w,az4mk7hy,azp5kkkt,azh8mh67,azosjucy,azz3my45,azbvo2og,az5i97il,azk81k6w,azpl62bm,aznd8kip,azfjb9au,azmnnq6u,azx4ib4o,azyyq3ot,azq8nw78,az71kpnh,az5no6wz,azagaox1,az1uww1i,aztnhvzy,azo57lej,az4glui7,az4oqylz,azz7wrla,azy79osl,azih7gle,az4vtnap,azlxk29h,aze5bsl3,azgewxwj,az6ugwt5,az8hm7hr,azeioefm,azmgv9vx,aztpinbq,azagzl8c,az9n5eow,azb9s1fe,az7bxkrh,aznp28r1,azp2lujt,azi97zzt,az4lq42w,azynfawr,az46byiu,aztkiww5,az2yrgri,az2auj8n,azayql9c,azqkr7hm,azrsq69u,azhm4t2b,azw65frx,azax4o8s,az71zw4b,azw15s13,azdytwql,az422u7n,azlo5stf,azedtvjl,azxsd6fs,azt515uv,az4jwa6n,azbpdnyu,azih63x8,azp5ckm1,azv4hlcu,aziah8ax,az2rqzee,azn9n9ct,azs5py5x,azkg7zsi,azn4cvsg,azu5j282,azt6tqny,azrulfae,azx6mkmj,az29lyla,azuopf6q,azf1v6vo,azuo1le6,azjl78uw,azs1oys4,azxx7zav,azjldxoy,aznrunba,az999xlm,az9pmov6,az5zjxus,azjkjyb6,az31njn7,az8m85if,az4al59b,azrv7x6q,azpwkjto,azq2f6wd,azwl6nps,azdluxnw,azhonfd9,az7dmyha,azictdkf,azt96m9m,azstghbd,az8vm6xo,azdnu7ha,azhv2x15,azvk3bgj,azmecah2,azvkmzd3,azpjnat7,aznsrlbo,azfffc2t,azlje7yr,azc4ofbv,azza944d,azdn31hb,azati6eo,azvz6k8l,azse5c2q,aze612bt,azr5tlm5,azsnnc6o,azwwprar,az11wib6,azovwf7d,azd7vtop,azc1d5fp,azivp8yo,azuehgx1,az7t5v97,azf1venj,azctszz7,azyi6zkv,azwg1yst,azkzqrur,azgvz1ki,azkkhynf,azrsq6uw,azeg97dw,azphgh38,azsp13q9,azwq6oxl,azfdo36m,az7zo89z,az6gxntz,azkicdox,az1peuu7,az1axyqr,az63bgct,azitwh8o,aznv6qef,aznko28p,az8zo67o,azcmirlk,az2uhrtg,azu54uop,azwoj8da,azgwng9s,az7o41c2,azq5kng1,azbrdh3p,az45wqa5,azeolejp,azmmis24,aziezk5z,azigl17u,azft8l7c,az89sioo,azk8fw59,azr9e4jd,azjaw8n8,az6pwr73,azpm6mmj,azpjxw6a,azmg2n3u,azj6mjbq,azyee4zt,az52gjcv,azjxht7j,azqbm6h1,azxh46co,azet6p4v,azqmw7y6,aztaiocs,az2i6fuo,azlwsfh2,az1nb6w6,az8zl7mx,azqxg56w,azlep6r9,azcjvpe2,azqg3b11,az9zduyv,azf6lh6a,aztxds7k,azyks6dg,azmnbp3w,aza3oj7t,az9msjno,azz1qs8p,azmwcumf,azr3f7li,azhgwg6o,azp3kd2f,aztisdug,az26vn25,az8jebyl,azawqd6c,azhvylwa,azialap7,azcq8lpj,az8kks1u,azbfas4e,aznscnk1,az2dssvh,azilc49m,az1y4wrg,azcv3m6l,azbsn6jw,az43zh7u,azto5mll,azr9xhti,az5t5q69,az2hqfn9,azsr8l43,azyxs3d6,azhwqs8m,azf1ahnq,azof6sn7,aznaxjrd,az1z956d,azhi6qyu,azqz4ell,az46ghax,azg2ruix,azw1pfvk,az5uj5fm,aztisui6,azk14x9m,azf3f846,azbqts92,az421yko,az98cfmj,azyirnw1,azziq9wt,azi4v3gg,azu3oo35,azwxjwfd,aztn979p,azedzydk,azoedoca,azrjc8wr,az2pu93a,azxik5ra,azli29qq,az9w9yaf,az3jdny4,az7tcczz,azfm1ymz,aznuycws,az3buxnp,az9zudhx,azjeerus,azavtfdw,azmh9tfh,azywoa2z,azujuoyb,azivrfga,azjhz5os,azb86yqw,azo591ni,azrfdicu,azoy3yx1,azcybmhw,azmzo5tc,azbqgum3,az52qpen,az8gbyjs,azwrp2gi,azebj11l,azyimvs9,azocygys,azdprhwx,azj56xt8,az59756z,azbe91k2,az471oi9,azuoz1mn,azrfvby9,az3ultyx,azi3f54w,azrp6wab,azgeb7er,az268g41,azbo7idd,az68zqco,azau3lmp,azopc8ra,azo5zrwm,azt5hcg8,azblamby,azghenlf,az43mcgf,azltjohf,azc2u5lw,azqwbsdf,azbsti2y,azj12re3,azdirgxy,azbfe5g4,azcen4v9,azood3ly,azte6ayl,az14dwwq,azbpr7c5,azs3tean,azpmi4ry,azyzvoq1,az8bog5p,azgczeoo,azggsux6,azs64ksd,az3dolxa,azc4wc4u,az2lperj,azjzhhk2,azi35mtx,azjttog3,azb28wc8,az1r2v3r,azjpk5q1,az1e149n,azr5zpkm,az9nth8b,aznc8ce8,azotcw2s,aznkzua9,az1kkh9b,azxmteqb,azaeacbb,azvcpp25,azxpdcyu,azprek9h,az6rwcnx,aziogmqs,azgpugyk,azuxmlxh,aze7a6nl,az1ttvzn,azwrixfq,az7iq591,azkkzah6,azhex7qk,azip3z6f,azzg6sex,az7zzn5x,az5ewp2s,azhoigpz,aza9b9by,azo4tubb,azj5i1w2,azytpq52,azfjhff4,azibintf,az3q1sge,azdtqnfo,azfeo45u,azox2dq3,azjrccl5,azxnapwn,azrxpd3m,az45wqa5,azwxyacg,azano1zy,az8ziu36,azzngymz,azh8o1tc,az8qyal1,azkm13hi,azvhdtco,azvf22d7,aziqvllb,az7eaikg,azj8mis2,az9prp8g,az42h4fx,azfhlcyl,aze4iy2l,azn1rtx9,azic8m5j,az9rb7k8,azgld2a7,azq8enhh,az6bku25,azk6nhhr,az2ek979,az2u4wju,az587jw6,azldfdvb,azhqozq7,az8rfl1h,azr9nl8g,az6tr9rv,azi7fduz,azchd92a,az6mo7pi,azg8r89r,azjufv8x,az32qu7e,azcko5dn,az6o5285,azsatrzj,azxqia84,azmk2ok7,azrd9y9e,aztf6jen,azzz8gaw,azz8lghm,az5pmvg3,azct5kzk,azzomj4t,az2okwvf,az655l5e,azxrlk9o,azmogmfo,az74rcj1,azt8d7i8,az1drc9c,az319n7k,azdc2fn6,azvux976,az6nnp7t,azi3mzb1,azbihf1o,azz637oy,azckxzbe,aztmh1oc,az5fgkvl,azxsr7y2,azzip9pu,az5krbzh,azgko1r1,azmf8bze,az8fzr54,azyva1pm,azof9uc7,aztf6jh5,az53a7r2,azwtv8vl,azpgtl4g,azu7sjz9,azljuvke,az5t32i7,az5j1w2e,az48uglw,azor69i1,az62e7v1,az2ssylr,azvb4nmm,azmikwr7,aziucs3k,azqowau5,azhgip2c,azhy2izx,az9cjiqw,az6wcr8c,azgeroof,az1cnwe7,azn4lkxy,azrs94lb,azaiioqn,azq2hsn2,azzqrw71,azx6ktm8,az8zu6ne,azalmero,azec4qnd,azigg6oq,azsi7rjv,az6nffux,az231am4,azxxgex1,azbrvlms,az1q9jmn,az6wbngk,az7iudxz,azzio9x7,azt92zqi,azj8b62j,azpiuk96,azmv8wd1,azb15due,azxqq8vg,az2pbais,azwptq5w,az4dtay2,azy5r3pl,aza5layw,azbdxs21,azyqn21i,azd353zj,azf96xnc,azyupleb,azl1tnuf,az8ap6e5,az4kzc8b,azseiqmj,azwoy84v,az93yt3x,azclxtad,azjxiwt8,azxkbr7d,aznlp2rj,azlvjerh,azcj6ty1,az4n4e4s,azc9eavm,azsckjte,azc4msti,azsvjieq,azy4r1fr,az3bcg9u,azirlht8,azxyai93,az597o8u,az3aqorw,azgnx3vj,az7vpe9y,aza25ewo,azdboyjr,azw3it34,az3sou55,azhguy4k,az6cnwl4,azwu7dv2,azashiew,azuxqtr7,azmb3m6x,azmg4za7,azw9nlj9,azrhou39,az724hdt,azle5ybe,azltxh5k,azftil6e,az5o8ca8,azztyrgs,azzbm9dn,azyrxzi2,azhahtja,azkdulgm,azr7c8km,azewtx92,aze1wk2f,azlsq7be,azp4unep,az6uwsy5,azsqxkjw,aze75igi,aziczcmt,azfcfyin,az7nnkr2,azhtu6ck,azey6xyr,aztgqdu7,azm4fjth,aznnzqir,azap7ns7,az4wkhbl,azqie31z,azzk7fx1,az29vq15,azg41e6o,azuy86ur,azh19jlb,aznc9f8l,azxc8gax,azw2y14e,az1vdqbl,azkkq9fk,az9doi1v,azqnlp9j,azqee2s3,azajna7e,azrf9kfy,aznalj8d,azphsg6z,aziprzwf,azanvlv7,azzocfo8,az9hhzbh,aznkuhai,azfrpkgu,azfsqr3d,azn28vno,az1fr4z4,az2ftou2,az1aiakv,az93ouvi,azrvq43g,azamcjte,azuyprc6,azt2w629,aznlpv3l,az2zlaer,azxyd7ju,az6idp2s,azemj15j,azvacnxk,azrj2wfw,azt1mx2g,az3yetyg,azqh6asb,az8ebef9,aziegc4t,azj26p6o,azymzx9b,azs3mty4,azd3p4vk,azksvzff,az72dl63,azg8t8yt,azuog9cl,aznqbzq7,azxds1px,az1bo6xr,azuqn58x,azprrflv,azlpvoqv,azpsju9v,azs3bhj4,aztstky5,azx5sm5h,azpth3hg,azbtfwh9,azbc3evl,azhx6pxm,az6kq3bz,azcx6cr6,az1xegfe,azjgm6ad,azs87kig,azqm6wcj,azqwua4w,azhscf16,azlepp6i,azlkq3w3,azmc9924,azemt9so,az147jjz,azpn2946,az2larl6,azee9x9t,azzn2zqg,azdt9qra,azdnxt4u,az5eqi9k,az3bwkdj,azor6gbk,azk75gpz,az3d4n1u,azw9nnv9,az7szwxs,aznv2trc,aztb1d9w,azbmdkyd,azxcfcz4,azakefz6,azugb1uk,az3olg94,az3j3c6e,az3d2678,az9l3gp7,azmkgdje,az5zret9,az7doyzu,azm6k8pj,azmwjeuo,azvnuh4g,azrkrdtn,azo7ryd2,azooa8yw,az1j328j,azrhlg8c,azwqm7qf,azn8xrlg,azi4am5k,azhqxc4u,azqzgta5,azg5woz2,az21jn6l,az4ztsme,azfqe788,azsvgfvy,azo4uk1u,aztzekxr,az7xstq8,azqfrowd,azej88vh,azkfwv2f,azabldol,az4azuk9,azkrbblz,az1rbw8e,azeg2k31,azl5qiq4,aza6li8a,azba65do,azq9xrfr,azw5387p,az977fa8,azjauejq,azdewwxk,azdq82hd,azk1t8uv,az6u7n4b,azdhwr2b,azuqdcse".split(
			","
		)
	)
	.concat(prevLocalStorages.flatMap((a) => JSON.parse(a).map((a) => a.seed)))
	.sort(() => Math.random() - 0.5);

{
	const dupeSeeds: { [a: string]: boolean } = {};
	retestSeeds = retestSeeds
		.filter((a) => {
			if (dupeSeeds[a]) return false;
			dupeSeeds[a] = true;
			return true;
		})
		.sort(() => Math.random() - 0.5);
	console.log(JSON.stringify(retestSeeds));
}

function randomOrRetestSeed(): string {
	if (retestSeeds.length) return retestSeeds.shift() as string;
	return randomAZSeed();
}
let sent = 1;
type QueueType = {
	excessGroups: number;
	starter: boolean;
	dessert: boolean;
	cards: Unlock[];
	reduction: number;
	req: number;
}[];
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
	};
	const DOUBLE_REDUCTION_CARDS = [
		"Dumplings",
		"Turkey - Stuffing",
		"Apple Salad",
		"Potato Salad",
	];
	const REQUIRED_CARDS = [
		"Fish",
		"Pies",
		"Stir Fry",
		"Breakfast",
		"Hot Dogs",
		// "Dumplings",
		// "Turkey - Stuffing",
		// "Turkey",
	];
	const autumn = RestaurantSettings.filter((a) => a.Name === "Community")[0];
	const cardDays = [3, 5, 6, 9, 12, 15, 18, 21, 24, 27, 30];
	const estGroupsByDay = [
		2.266666667, 2.72, 3.4, 2.244, 2.448, 3.1824, 2.448, 2.622857143, 3.264,
		2.697333333, 2.856, 3.445333333, 2.967272727, 3.115636364, 3.672,
		3.389538462, 3.7889994, 4.738473149, 5.335384615, 5.991376413, 7.370148454,
		8.202727815, 9.084301826, 10.92184615, 11.98065824, 11.33960482,
		13.36063799, 14.47499905, 15.62615036, 18.10604044,
	];
	const minGroupsByDay = [
		2, 2, 3, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2,
		2, 2, 2, 3, 3,
	]; // Dumplings, dessert, starter, turkey, stuffing, everything else & breakfast for OT12
	const averageExcessGroupsByCardDay: number[] = [];
	const dataPointsPerCardDay: number[] = cardDays.map(() => 0);
	let maxRuns = Infinity;
	const cards = new FindNewUnlocks("");
	cards.addCard(autumn);
	const lastDay = Math.min(30, cardDays.at(-1)!);
	const defaultStartingCards: QueueType = [
		// { name: "Steak", r: 0 },
		// { name: "Salad", r: -1 },
		// { name: "Pizza", r: 0 },
		{ name: "Dumplings", r: 2 },
		// { name: "Burgers", r: -2 },
		{ name: "Turkey", r: 1 },
	].map((b): QueueType[0] => ({
		req: REQUIRED_CARDS.includes(b.name) ? 1 : 0,
		starter: false,
		dessert: false,
		reduction: b.r,
		excessGroups:
			estGroupsByDay
				.slice(0, 3)
				.map(
					(estGroups, i) =>
						Math.ceil(estGroups * 0.85 ** b.r) - minGroupsByDay[i]
				)
				.reduce((a, b) => a + b, 0) * 0,
		cards: [autumn, Unlocks.filter((a) => a.Name === b.name)[0]],
	}));
	// let bestMetric = REQUIRED_CARDS.length - 2;
	let bestMetric = Infinity;
	let bestN = 5;
	let runCount = 0;
	let logThresh = 1;
	while (maxRuns--) {
		runCount++;
		if (runCount > logThresh) {
			logThresh *= 2;
			console.log(`Tested ${runCount} seeds so far at ${new Date()}`);
		}
		const seed = randomOrRetestSeed();
		let r = new Run(seed);
		if (r.mapSize < 3) continue; // diners are too small for this many recipes...
		cards.seed = seed;

		let queue: QueueType = [...defaultStartingCards];
		// goal is to get all the mains that are unlocked later, plus maximum reductions
		// fish, pie, stir fry ; breakfast, hot dogs
		// try all card paths on a seed, really helpful if you find a good card early, you should try both decor instead of randomly doing one and giving up on the seed once you don't find what you want
		// will the queue balloon too much if I allow anything...?
		for (let i = 0; i < cardDays.length; i++) {
			const day = cardDays[i];
			const newQueue: QueueType = [];
			const checked: { [key: string]: number[] } = {};
			const removeAfterComplete: number[] = [];
			// console.log(queue.length);
			while (queue.length) {
				const conf = queue.pop()!;
				cards.cards = conf?.cards ?? [];

				const options = cards.getUnlockOptions(day);
				for (const o of options) {
					let r = day === 5 || day === 15 ? 0 : 1; // no reduction from theme and franchise cards
					const newConf = {
						...conf,
						cards: [...cards.cards, o],
					};
					if (newConf.req + cardDays.length - i < bestN)
						// if (newConf.req + cardDays.length - i < REQUIRED_CARDS.length)
						continue; // can't get all the cards I want anyway
					switch (o.DishType) {
						case DishType.Starter:
							// if (!conf.starter) r++;
							newConf.starter = true;
							break;
						case DishType.Dessert:
							// if (!conf.dessert) r++;
							newConf.dessert = true;
							break;
						default:
							break;
					}
					if (DOUBLE_REDUCTION_CARDS.includes(o.Name)) r++;
					if (REQUIRED_CARDS.includes(o.Name)) {
						newConf.req++;
					}
					const m = CUSTOMER_INCREASING_CARDS[o.Name];
					if (m !== undefined) {
						r = m;
						if (conf.req === newConf.req) continue; // not breakfast or hot dogs, just abandon now
					}
					newConf.reduction += r;
					let courseReduction =
						1 + (newConf.starter ? 0.25 : 0) + (newConf.dessert ? 0.25 : 0);
					const D = Math.min(30, cardDays[i + 1] ?? 0);
					// if (day > 18 - 1) {
					if (true) {
						for (let d = day; d < D; d++) {
							if (newConf.req === REQUIRED_CARDS.length && d === 29) continue; // don't need to do OT15 if completed all achievements already
							const groups = Math.ceil(
								(estGroupsByDay[d] * 0.85 ** newConf.reduction) /
									courseReduction
							);
							newConf.excessGroups +=
								Math.max(0, groups - minGroupsByDay[d]) ** 2;
						}
					}
					if (day < 12) {
						if (o.Name.includes("Soup")) continue;
						if (o.Name.includes(" Pie")) continue;
						if (o.Name.includes("Stuffing")) continue;
					}
					if (bestN === REQUIRED_CARDS.length) {
						if (
							// } &&
							newConf.excessGroups > Math.max(0, bestMetric + 1) // 8 is the best you can get without Stuffing and Turkey is really hard to get on Autumn so..... let's include those even though it's not technically optimal-- let it go to 10 for a possible soy sauce on day 3
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
					if (chosenIndex === -1) throw new Error();
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
			const candMetric = queue[0].excessGroups!;
			// debugger;
			{
				if (candBestN > bestN || candMetric <= bestMetric) {
					bestMetric = candMetric;
					bestN = candBestN;
				}
				const res = {
					seed,
					b: queue[0].cards.map((a) => a.Name).join(","),
					n: queue.length,
					bestN,
					candMetric,
					bestMetric,
				};
				if (false && queue.length > 1 && queue.length < 5)
					res.paths = queue.map((a) => a.cards.map((a) => a.Name).join(","));
				postMessage(res);
			}
		}
	}
	console.log("done!");
}

function randomAZSeed() {
	let seed = "";
	while (seed.length < 6) {
		seed += chars[Math.floor(Math.random() * chars.length)];
	}
	return "az" + seed;
	if (Math.random() < 0.5) return "az" + seed;
	return seed + "az";
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
