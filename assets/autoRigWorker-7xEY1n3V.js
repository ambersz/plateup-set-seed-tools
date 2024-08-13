var $s=Object.defineProperty;var Us=(W,Q,ae)=>Q in W?$s(W,Q,{enumerable:!0,configurable:!0,writable:!0,value:ae}):W[Q]=ae;var m=(W,Q,ae)=>(Us(W,typeof Q!="symbol"?Q+"":Q,ae),ae);(function(){"use strict";class W{constructor(e,a){m(this,"array");m(this,"objectiveFunctions");this.array=Q(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:r}=ae(e,this.array[a],this.objectiveFunctions);if(r)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function Q(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const r=a.pop();let F=l.length;for(;F--;){let{better:o,worse:f}=ae(r,l[F],e);if(f)continue e;o&&l.splice(F,1)}l.push(r)}return l}function ae(s,e,a){let l=!0,r=!0,F=0;for(;(l||r)&&F<a.length;){const o=a[F](s,e);o<0?r=!1:o>0&&(l=!1),F++}return{better:l,worse:r}}var cs=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
-1357906425,False,True,Conveyor Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,120\r
-1440053805,False,True,Rapid Mixer,False,False,,2087693779:-523839730,64,0,0,False,False,60\r
1329097317,True,False,Mixer,False,False,,,64,0,0,False,False,60\r
-1013770159,True,False,Supplies,False,False,,,256,0,1,False,False,60\r
2127051779,False,True,Compactor Bin,False,False,,,256,0,0,False,False,20\r
-1632826946,False,True,Composter Bin,False,False,,,256,0,0,False,False,20\r
-1855909480,False,True,Expanded Bin,False,False,,,256,0,0,False,False,20\r
481495292,False,False,Starter Bin,False,False,,,256,0,0,False,False,20\r
1551609169,True,False,Bin,False,False,,,256,0,0,False,False,20\r
1286554202,True,False,Fire Extinguisher,False,False,,1972879238:-1706154991,256,0,0,False,False,20\r
1351951642,True,False,Floor Buffer,False,False,,,256,0,0,False,False,120\r
1765889988,True,False,Kitchen Floor Protector,False,False,,,264,0,0,False,False,20\r
-1495393751,False,True,Fast Mop,False,False,,,256,0,0,False,False,60\r
1776760557,False,True,Lasting Mop,False,False,,,256,0,0,False,False,60\r
-1993346570,True,False,Mop,False,False,,,256,0,0,False,False,20\r
-751458770,False,False,Robot Buffer,False,False,,,256,0,0,False,False,250\r
-1723340146,False,True,Robot Buffer,False,False,,,256,0,0,False,False,250\r
-2091039911,False,False,Robot Mop,False,False,,,256,0,0,False,False,250\r
-2147057861,False,True,Robot Mop,False,False,,,256,0,0,False,False,250\r
-1609758240,True,False,Coffee Machine,True,False,,,32,0,0,False,False,20\r
-17368064,False,False,,False,False,,,0,0,0,False,False,20\r
1973114260,True,False,Conveyor,False,False,,,64,0,0,False,False,20\r
-1906799936,True,False,Combiner,False,False,,,64,0,0,False,False,60\r
-331651461,False,True,Grabber - Rotating,False,False,,,64,0,0,False,False,60\r
-1238047163,False,True,Smart Grabber,False,False,,,64,0,0,False,False,60\r
-1029710921,False,True,Grabber,False,False,,,64,0,0,False,False,60\r
-1462602185,True,False,Portioner,False,False,,,64,0,0,False,False,60\r
459840623,False,False,Teleporter,False,False,,,64,0,0,False,False,1250\r
-1248669347,True,False,Counter,False,False,,,1,0,0,False,False,20\r
1365340297,False,False,Kneading Counter,False,False,,,0,0,0,False,False,20\r
-1573577293,False,True,Workstation,False,False,,,32,0,0,False,False,40\r
620400448,True,False,Affordable Bin,False,False,,,2,2,0,False,False,30\r
1830133512,True,False,Gumball Machine,False,False,,,2,2,0,False,False,30\r
1724963734,True,False,Neon Sign,False,False,,,2,2,0,False,False,40\r
371247235,True,False,Neon Sign,False,False,,,2,2,0,False,False,40\r
230540973,True,False,Ceiling Light,False,False,,,2,2,0,False,False,40\r
-1472471467,True,False,Stock Picture,False,False,,,2,2,0,False,False,30\r
-2108088224,True,False,Dirty Floor Sign,False,False,,,2,2,0,False,False,30\r
1569358344,True,False,Barrel,False,False,,,2,4,0,False,False,40\r
-60168847,True,False,Bookcase,False,False,,,2,4,0,False,False,40\r
-1941237931,True,False,Dartboard,False,False,,,2,4,0,False,False,30\r
-441525746,True,False,Fireplace,False,False,,,2,4,0,False,False,100\r
591400026,True,False,Rug,False,False,,,2,4,0,False,False,40\r
-1628995120,True,False,Wall Light,False,False,,,2,4,0,False,False,30\r
-1380985631,False,False,Banner,False,False,,,8192,0,0,False,False,0\r
1797739089,False,False,Christmas Tree,False,False,,,8192,0,0,False,False,0\r
-4737636,False,False,Fairy Lights,False,False,,,8192,0,0,False,False,0\r
-13481890,True,False,Candelabra,False,False,,,2,1,0,False,False,40\r
1233091186,True,False,Chandelier,False,False,,,2,1,0,False,False,40\r
-1180623135,True,False,Precious Flower,False,False,,,2,1,0,False,False,60\r
642318074,True,False,Classical Globe,False,False,,,2,1,0,False,False,60\r
-1486785449,True,False,Painting,False,False,,,2,1,0,False,False,40\r
2076966627,True,False,Rug,False,False,,,2,1,0,False,False,40\r
-972644436,True,False,Statue,False,False,,,2,1,0,False,False,100\r
1551024733,True,False,Brand Mascot,False,False,,,2,8,0,False,False,40\r
-1339970600,True,False,Tidy Plant,False,False,,,2,8,0,False,False,30\r
908498444,True,False,Ceiling Light,False,False,,,2,8,0,False,False,40\r
744277037,True,False,Abstract Lamp,False,False,,,2,8,0,False,False,30\r
531866927,True,False,Vase,False,False,,,2,8,0,False,False,30\r
1220439284,True,False,Indoor fountain,False,False,,,2,8,0,False,False,60\r
668664567,True,False,Calm Painting,False,False,,,2,0,0,False,False,60\r
756364626,True,False,Plant,False,False,,,2,0,0,False,False,60\r
-648349801,False,False,Rug,False,False,,,2,0,0,False,False,60\r
-1506601664,False,False,Drink Tap,False,False,,,0,0,0,False,False,20\r
-2100580689,False,False,,False,False,,,0,0,0,False,False,20\r
532998682,True,False,Dumbwaiter,False,False,,,64,0,0,False,False,60\r
892856538,False,False,,False,False,,,0,0,0,False,False,20\r
-544237849,False,False,Beehive,False,False,,,0,0,0,False,False,20\r
188952245,False,False,,False,False,,,0,0,0,False,False,20\r
1921027834,True,False,Gas Limiter,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-770041014,True,False,Gas Override,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-1448690107,False,True,Danger Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1266458729,False,True,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1154757341,False,False,Starter Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,5\r
862493270,True,False,Hob,False,False,,1972879238:-1706154991,33,0,0,False,False,20\r
-441141351,False,False,,False,False,,1972879238,32,0,0,False,False,20\r
805530854,False,False,,False,False,,1972879238,0,0,0,False,False,60\r
-60938940,False,False,Bookings Stand,False,False,,,0,0,0,False,False,60\r
-63118559,True,False,Hosting Stand,False,False,,,8,0,0,False,False,60\r
-1813414500,True,False,Display Stand,False,False,,,8,0,0,False,False,120\r
1630557157,False,False,,False,False,,,0,0,0,False,False,20\r
-1324288299,False,False,,False,False,,,0,0,0,False,False,20\r
-374077567,False,False,,False,False,,,0,0,0,False,False,20\r
147181555,False,False,,False,False,,,0,0,0,False,False,20\r
31731938,False,False,,False,False,,,0,0,0,False,False,20\r
1419995156,False,False,,False,False,,,0,0,0,False,False,20\r
34773971,False,False,,False,False,,,0,0,0,False,False,20\r
-1424385600,False,False,,False,False,,,0,0,0,False,False,20\r
377065033,False,False,,False,False,,,0,0,0,False,False,20\r
-483535085,False,False,,False,False,,,0,0,0,False,False,0\r
1553046198,False,False,,False,False,,,0,0,0,False,False,20\r
1063254979,False,False,,False,False,,,0,0,0,False,False,20\r
1732122842,False,False,,False,False,,,0,0,0,False,False,20\r
-1936421857,False,False,,False,False,,,0,0,0,False,False,20\r
2041631136,False,False,,False,False,,,0,0,0,False,False,20\r
949631021,False,False,,False,False,,,0,0,0,False,False,60\r
-571205127,True,False,Blueprint Cabinet,False,False,,,2560,0,0,True,False,20\r
-729493805,False,True,Copying Desk,False,False,,,512,0,0,False,False,120\r
-272437832,False,False,Discount Desk,False,False,,,512,0,0,False,False,120\r
1586911545,False,True,Discount Desk,False,False,,,512,0,0,False,False,120\r
1446975727,False,True,Blueprint Desk,False,False,,,512,0,0,False,False,60\r
1139247360,True,False,Research Desk,False,False,,,1536,0,0,True,False,40\r
238041352,True,False,Booking Desk,False,True,,,8,0,0,False,False,0\r
-1817838704,False,False,Extra Life,False,False,,,0,0,0,False,False,120\r
136867583,False,False,Fast Food Terminal,False,False,,,8,0,0,False,False,60\r
-246383526,False,True,Specials Terminal,False,False,,,8,0,0,False,False,60\r
-1610332021,True,False,Ordering Terminal,False,False,,,8,0,0,False,False,60\r
944301512,False,False,,False,False,,,0,0,0,False,False,20\r
-1311702572,False,True,Microwave,False,False,,1972879238:-1706154991,32,0,0,False,False,120\r
-1068749602,True,False,Oven,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1147639502,False,False,Balloons,False,False,,,8192,0,0,False,False,0\r
-71664252,False,False,Birthday Banner,False,False,,,8192,0,0,False,False,0\r
-326328571,False,False,Piano,False,False,,,0,0,0,False,False,20\r
-905438738,True,False,Apples,True,False,,,288,0,0,False,False,60\r
1807525572,True,False,Beans,True,False,,,288,0,0,False,False,60\r
269523389,True,False,Meat,True,False,,,288,0,0,False,False,60\r
-1573812073,True,False,Broccoli,True,False,,,288,0,0,False,False,60\r
759552160,True,False,Burger Buns,True,False,,,288,0,0,False,False,60\r
385684499,False,False,Patties,False,False,,,288,0,0,False,False,60\r
-452101383,True,False,Carrots,True,False,,,288,0,0,False,False,60\r
-117339838,True,False,Cheese,True,False,,,288,0,0,False,False,60\r
961148621,True,False,Eggs,True,False,,,288,0,0,False,False,60\r
-1735137431,False,False,Fish,False,False,,,288,0,0,False,False,60\r
-609358791,False,False,Fish,False,False,,,288,0,0,False,False,60\r
925796718,True,False,Flour,True,False,,,288,0,0,False,False,60\r
-1132411297,True,False,Hot dog bun,True,False,,,288,0,0,False,False,60\r
1799769627,True,False,Hot Dogs,True,False,,,288,0,0,False,False,60\r
-1533430406,True,False,Ice Cream,True,False,,,288,0,0,False,False,60\r
-965827229,True,False,Extra Ketchup,True,False,-965827229,,8,0,0,False,True,60\r
1193867305,True,False,Lettuce,True,False,,,288,0,0,False,False,60\r
-484165118,True,False,Meat,True,False,,,288,0,0,False,False,60\r
-1097889139,True,False,Mushrooms,True,False,,,288,0,0,False,False,60\r
-117356585,True,False,Extra Mustard,True,False,-117356585,,8,0,0,False,True,60\r
1834063794,True,False,Nuts,True,False,,,288,0,0,False,False,60\r
-1963699221,True,False,Oil,True,False,,,288,0,0,False,False,60\r
-1434800013,True,False,Olives,True,False,,,288,0,0,False,False,60\r
-2042103798,True,False,Onion,True,False,,,288,0,0,False,False,60\r
44541785,True,False,Potato,True,False,,,288,0,0,False,False,60\r
-1201769154,True,False,Rice,True,False,,,288,0,0,False,False,60\r
-1507801323,True,False,Thick cut meat,True,False,,,288,0,0,False,False,60\r
1800865634,True,False,Thin cut meat,True,False,,,288,0,0,False,False,60\r
-712909563,True,False,Tomato,True,False,,,288,0,0,False,False,60\r
-1506824829,True,False,Turkey,True,False,,,288,0,0,False,False,60\r
-1353971407,True,False,Wine,True,False,,,288,0,0,False,False,60\r
-101564005,False,False,,False,False,,,0,0,0,False,False,20\r
-897970831,False,False,,False,False,,,0,0,0,False,False,20\r
-996680732,False,False,Counter,False,False,,,0,0,0,False,False,5\r
946079892,False,False,,False,False,,,0,0,0,False,False,60\r
1171429989,False,False,,False,False,,,0,0,0,False,False,60\r
161402590,False,False,,False,False,,,0,0,0,False,False,60\r
739504637,False,True,Auto Plater,False,False,,,256,0,0,False,False,20\r
1653145961,False,False,Dish Rack,False,False,,,0,0,0,False,False,20\r
434150763,True,False,Dish Rack,False,False,,,16,0,0,False,False,20\r
1270423542,False,False,,False,False,,,0,0,0,False,False,20\r
-1474018107,False,False,,False,False,,,0,0,0,False,False,20\r
380220741,False,False,Starter Plates,False,False,,,256,0,0,False,False,20\r
1313469794,True,False,Plates,False,False,,,256,0,0,True,False,20\r
-957949759,True,False,Pot Stack,False,False,-957949759,,32,0,0,False,False,20\r
235423916,True,False,Serving Boards,False,False,235423916,,256,0,0,False,False,20\r
314862254,True,False,Woks,False,False,314862254,,0,0,0,False,False,60\r
-1291027873,False,False,,False,False,,,0,0,0,False,False,20\r
-214921468,False,False,,False,False,,,0,0,0,False,False,20\r
-2135829561,False,False,,False,False,,,0,0,0,False,False,20\r
-372462424,False,False,,False,False,,,0,0,0,False,False,20\r
933445633,False,False,,False,False,,,0,0,0,False,False,20\r
-1555334152,False,False,,False,False,,,0,0,0,False,False,20\r
1980900762,False,False,,False,False,,,0,0,0,False,False,20\r
1855052205,False,False,,False,False,,,0,0,0,False,False,20\r
-68388422,False,False,,False,False,,,0,0,0,False,False,20\r
-1200192498,False,False,,False,False,,,0,0,0,False,False,20\r
-194750543,False,False,,False,False,,,0,0,0,False,False,20\r
1911132834,False,False,,False,False,,,0,0,0,False,False,20\r
1365126444,False,False,,False,False,,,0,0,0,False,False,20\r
-1265562836,False,False,,False,False,,,0,0,0,False,False,20\r
-2046940874,False,False,,False,False,,,0,0,0,False,False,20\r
-923570273,False,False,,False,False,,,0,0,0,False,False,20\r
-488268556,False,False,,False,False,,,0,0,0,False,False,20\r
-548432204,False,False,,False,False,,,0,0,0,False,False,20\r
-758567246,False,False,,False,False,,,0,0,0,False,False,20\r
532701855,False,False,,False,False,,,0,0,0,False,False,20\r
-1857890774,False,True,Freezer,False,False,,,4,0,0,False,False,20\r
-759808000,False,True,Frozen Prep Station,False,False,,,256,0,0,False,False,60\r
1656358740,True,False,Prep Station,False,False,,,256,0,0,False,False,20\r
-262439022,False,False,,False,False,,,0,0,0,False,False,20\r
1890408483,False,False,,False,False,,,0,0,0,False,False,20\r
639111696,True,False,Breadsticks,False,False,,,8,0,0,False,True,20\r
1358522063,True,False,Candle Box,False,False,,,8,0,0,False,True,60\r
221442949,True,False,Flower Pot,False,False,,,8,0,0,False,False,60\r
1528688658,True,False,Napkins,False,False,,,8,0,0,False,True,60\r
2080633647,True,False,Sharp Cutlery,False,False,,,8,0,0,False,True,60\r
446555792,True,False,"Specials" Menu,False,False,,,8,0,0,False,True,60\r
938247786,False,False,Chair,False,False,,,0,0,0,False,False,0\r
1648733244,True,False,Coffee Table,False,False,,,8,0,0,False,False,40\r
-1979922052,False,False,Chair,False,False,,,0,0,0,False,False,0\r
-3721951,False,True,Bar Table,False,False,,,8,0,0,False,False,5\r
-34659638,False,True,Table - Simple Cloth,False,False,,,8,0,0,False,False,60\r
-203679687,False,True,Metal Table,False,False,,,8,0,0,False,False,60\r
-2019409936,False,True,Table - Fancy Cloth,False,False,,,8,0,0,False,False,60\r
209074140,True,False,Dining Table,False,False,,,1,0,0,False,False,20\r
1738351766,True,False,Rolling Pin,False,False,,-523839730,256,0,0,False,False,20\r
624465484,True,False,Scrubbing Brush,False,False,,,256,0,0,False,False,20\r
2023704259,True,False,Sharp Knife,False,False,,2087693779,256,0,0,False,False,20\r
723626409,True,False,Trainers,False,False,,,256,0,0,False,False,60\r
1796077718,True,False,Wellies,False,False,,,256,0,0,False,False,60\r
230848637,True,False,Work Boots,False,False,,,256,0,0,False,False,60\r
1129858275,True,False,Tray Stand,False,False,,,256,0,0,False,False,60\r
-823922901,False,True,Dish Washer,False,False,,,16,0,0,False,False,60\r
-214126192,False,True,Wash Basin,False,False,,,16,0,0,False,False,60\r
1083874952,True,False,Sink,False,False,,,17,0,0,False,False,20\r
1467371088,False,True,Power Sink,False,False,,,16,0,0,False,False,60\r
1860904347,False,True,Soaking Sink,False,False,,,16,0,0,False,False,20\r
-266993023,False,False,Starter Sink,False,False,,,17,0,0,False,False,20\r
2073091578,False,False,,False,False,,,0,0,0,False,False,20\r
-469149429,False,False,,False,False,,,0,0,0,False,False,20\r
834743908,False,False,,False,False,,,0,0,0,False,False,20\r
951367272,False,False,,False,False,,,0,0,0,False,False,20\r
1771016910,False,False,,False,False,,,0,0,0,False,False,60\r
-2122624266,False,False,,False,False,,,0,0,0,False,False,20\r
-404095277,False,False,,False,False,,,0,0,0,False,False,20\r
-1949016360,False,False,,False,False,,,0,0,0,False,False,20\r
-581219245,False,False,,False,False,,,0,0,0,False,False,60\r
-148578487,False,False,,False,False,,,0,0,0,False,False,20\r
-1125517450,False,False,,False,False,,,0,0,0,False,False,20\r
-233558851,False,False,,False,False,,,0,0,0,False,False,20\r
-342718019,False,False,,False,False,,,0,0,0,False,False,20\r
174737401,False,False,,False,False,,,0,0,0,False,False,20\r
310022384,False,False,,False,False,,,0,0,0,False,False,20\r
-1425710426,False,False,,False,False,,,0,0,0,False,False,60\r
-1807971648,False,False,,False,False,,,0,0,0,False,False,60\r
268640447,False,False,,False,False,,,0,0,0,False,False,60\r
1199575543,False,False,,False,False,,,0,0,0,False,False,60\r
-1451048989,False,False,,False,False,,,0,0,0,False,False,60\r
-1820794030,False,False,,False,False,,,0,0,0,False,False,60\r
871235082,False,False,,False,False,,,0,0,0,False,False,20\r
387240739,False,False,,False,False,,,0,0,0,False,False,20\r
1159228054,False,False,Bin,False,False,,,0,0,0,False,False,20\r
-626547002,False,False,,False,False,,,0,0,0,False,False,60\r
359655899,False,False,,False,False,,,0,0,0,False,False,20\r
-232172209,False,False,,False,False,,,0,0,0,False,False,20\r
-1528441435,False,False,,False,False,,,0,0,0,False,False,20\r
564388954,False,False,,False,False,,,0,0,0,False,False,20\r
1363960331,False,False,,False,False,,,0,0,0,False,False,20\r
-760874610,False,False,,False,False,,,0,0,0,False,False,20\r
1823459359,False,False,,False,False,,,0,0,0,False,False,20\r
1659152562,False,False,,False,False,,,0,0,0,False,False,20\r
477050702,False,False,,False,False,,,0,0,0,False,False,20\r
1485375733,False,False,,False,False,,,0,0,0,False,False,20\r
-1114059052,False,False,,False,False,,,0,0,0,False,False,20\r
-1518462324,False,False,,False,False,,,0,0,0,False,False,20\r
-62256073,False,False,,False,False,,,0,0,0,False,False,20\r
1636658728,False,False,,False,False,,,0,0,0,False,False,20\r
-1260306608,False,False,,False,False,,,0,0,0,False,False,20\r
1425494045,False,False,,False,False,,,0,0,0,False,False,20\r
-1614041568,False,False,,False,False,,,0,0,0,False,False,20\r
-1051912790,False,False,,False,False,,,0,0,0,False,False,20\r
1010867759,False,False,,False,False,,,0,0,0,False,False,20\r
-720353319,False,False,,False,False,,,0,0,0,False,False,60\r
-1997868587,False,False,,False,False,,,0,0,0,False,False,60\r
-1920103064,False,False,,False,False,,,0,0,0,False,False,60\r
-1235624607,False,False,,False,False,,,0,0,0,False,False,60\r
-636342486,False,False,Cobwebs,False,False,,,8192,0,0,False,False,0\r
-1318523640,False,False,Ghost Statue,False,False,,,8192,0,0,False,False,0\r
-621580281,False,False,Pumpkin,False,False,,,8192,0,0,False,False,0\r
115181910,False,False,Skeleton,False,False,,,8192,0,0,False,False,0\r
976574457,True,False,Corn,True,False,,,288,0,0,False,False,60\r
235355384,False,False,Bananas,False,False,,,0,0,0,False,False,60\r
-699333907,False,False,Strawberries,False,False,,,0,0,0,False,False,60\r
-1055654549,True,False,Pumpkin,True,False,,,288,0,0,False,False,60\r
148543530,True,False,Cherries,True,False,,,288,0,0,False,False,60\r
-1382019219,False,False,,False,False,,,0,0,0,False,False,20\r
-1403625488,False,False,,False,False,,,0,0,0,False,False,20\r
-1673904972,False,False,,False,False,,,0,0,0,False,False,20\r
1752654754,False,False,,False,False,,,0,0,0,False,False,20\r
-1748395084,False,False,,False,False,,,0,0,0,False,False,20\r
303858729,True,False,Christmas Crackers,True,False,,,288,0,0,False,False,60\r
735786885,True,False,Cranberry,True,False,,,288,0,0,False,False,60\r
-2133205155,True,False,Sugar,True,False,,,288,0,0,False,False,60\r
-667884240,False,False,Conveyor,False,False,,,64,0,0,False,False,20\r
-697441390,False,False,,False,False,,,64,0,0,False,False,20\r
-349733673,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
1836107598,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
369884364,False,False,Safety Hob,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-699013948,False,False,,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
555321421,False,False,Rabbit Poster,False,False,,,8192,0,0,False,False,0\r
-2084684446,False,False,Lantern,False,False,,,8192,0,0,False,False,0\r
-2092567672,True,False,Bamboo,True,False,,,288,0,0,False,False,60\r
595306349,True,False,Seaweed,True,False,,,288,0,0,False,False,60\r
-1210117767,True,False,Mandarins,True,False,,,288,0,0,False,False,60\r
-471813067,True,False,Extra Soy Sauce,True,False,-471813067,,8,0,0,False,True,60\r
-184765154,False,False,,False,False,,,0,0,0,False,False,20\r
-707206359,False,False,,False,False,,,0,0,0,False,False,20\r
1134699240,False,False,,False,False,,,0,0,0,False,False,20\r
-471643137,False,False,Flower Arch,False,False,,,8192,0,0,False,False,0\r
142298503,False,False,Friends Poster,False,False,,,2,0,0,False,False,0\r
-2001861712,False,False,Heart Balloons,False,False,,,8192,0,0,False,False,0\r
-1314508999,False,False,Heart Bunting,False,False,,,8192,0,0,False,False,0\r
785615801,False,False,Neon Sign,False,False,,,8192,0,0,False,False,0\r
645876063,False,False,,False,False,,,0,0,0,False,False,60\r
-916942203,False,False,,False,False,,,0,0,0,False,False,20\r
345407921,False,False,,False,False,,,0,0,0,False,False,20\r
-509190559,False,False,,False,False,,,0,0,0,False,False,20\r
1274763392,False,False,,False,False,,,0,0,0,False,False,20\r
965503721,False,False,,False,False,,,0,0,0,False,False,20\r
260380903,False,False,,False,False,,,0,0,0,False,False,20\r
-89571330,False,False,,False,False,,,0,0,0,False,False,20\r
2114150010,False,False,,False,False,,,0,0,0,False,False,20\r
143484231,True,False,Cupcake Stand,True,False,143484231,,8,0,0,False,False,60\r
801015432,True,False,Ice Dispenser,True,False,,,32,0,0,False,False,20\r
-557736569,True,False,Milk Steamer,True,False,,,32,0,0,False,False,20\r
120342736,True,False,Milk,True,False,,,288,0,0,False,False,60\r
-1598460622,True,False,Tea bags,True,False,,,288,0,0,False,False,60\r
1377093570,True,False,Tea cups,True,False,,,288,0,0,False,False,60\r
-762638188,True,False,Tea pots,True,False,,,288,0,0,False,False,60\r
-660310536,True,False,Cake Tin,True,False,,,256,0,0,False,False,60\r
-2135982034,True,False,Brownie Tray,True,False,,,256,0,0,False,False,120\r
-1723125645,True,False,Cookie Tray,True,False,,,256,0,0,False,False,120\r
-315287689,True,False,Cupcake Tray,True,False,,,256,0,0,False,False,120\r
2136474391,True,False,Doughnut Tray,True,False,,,256,0,0,False,False,120\r
783588616,False,False,Chocolate,False,False,,,0,0,0,False,False,60\r
1470180731,False,False,Lemon Tree,False,False,,,0,0,0,False,False,60\r
-217313684,True,False,Mixing Bowls,False,False,-217313684,,32,0,0,False,False,20\r
782648278,False,False,Cauldron,False,False,,1972879238:-1706154991,32,0,0,False,False,60\r
-1552572658,False,False,Candles,False,False,,,8192,0,0,False,False,0\r
-119593913,False,False,Pumpkin Stack,False,False,,,8192,0,0,False,False,0\r
-379172217,False,False,Witch Shelf,False,False,,,8192,0,0,False,False,0\r
-292467039,False,False,Enchanting Desk,False,False,,,1536,0,0,False,False,40\r
-1946127856,False,False,Ghostly Clipboard,False,False,,,0,0,0,False,False,60\r
1313278365,False,False,Ghostly Knife,False,False,,,0,0,0,False,False,60\r
689268680,False,False,Ghostly Rolling Pin,False,False,,,0,0,0,False,False,60\r
-560953757,False,False,Ghost Scrubber,False,False,,,0,0,0,False,False,60\r
-1780646993,False,False,Illusion Wall,False,False,,,64,0,0,False,False,60\r
1150470926,False,False,Instant Wand,False,False,,,256,0,0,False,False,60\r
2044081363,False,False,Levitation Line,False,False,,,64,0,0,False,False,20\r
-1298525547,False,False,Levitation Spot,False,False,,,64,0,0,False,False,20\r
119166501,False,False,Levitation Station,False,False,,,0,0,0,False,False,60\r
-1992638820,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120\r
-877630314,False,False,Enchanted Broom,False,False,,,256,0,0,False,False,120\r
744482650,False,False,Magic Mirror,False,False,,,64,0,0,False,False,60\r
-1696198539,False,False,Magic Spring,False,False,,,0,0,0,False,False,20\r
-1835366879,False,False,,False,False,,,0,0,0,False,False,20\r
2031496644,False,False,,False,False,,,0,0,0,False,False,20\r
1391464545,False,False,,False,False,,,0,0,0,False,False,20\r
477535207,False,False,,False,False,,,0,0,0,False,False,20\r
923307040,False,False,,False,False,,,0,0,0,False,False,20\r
-1090855913,False,False,,False,False,,,0,0,0,False,False,20\r
50273892,False,False,,False,False,,,0,0,0,False,False,20\r
-70663877,False,False,,False,False,,,0,0,0,False,False,20\r
-2123542635,False,False,,False,False,,,0,0,0,False,False,20\r
423254987,False,False,Preserving Station,False,False,,,256,0,0,False,False,60\r
267288096,False,False,Magic Apple Tree,False,False,,,8,0,0,False,False,60\r
29164230,False,False,Pouch of Holding,False,False,,,256,0,0,False,False,120\r
540526865,False,False,Enchanted Plates,False,False,,,0,0,0,False,False,60\r
2000892639,False,False,Table - Stone,False,False,,,8,0,0,False,False,60\r
-1688921160,False,False,Table - Sharing Cauldron,False,False,,,8,0,0,False,False,60\r
1492264331,False,False,Vanishing Circle,False,False,,,0,0,0,False,False,20\r
-1541798751,True,False,Mince,True,False,-1541798751,,32,0,0,False,False,20\r
-2077197906,True,False,Pasta Sheet,True,False,-2077197906,,32,0,0,False,False,20\r
-1339944542,True,False,Lasagne Tray,True,False,-1339944542,,32,0,0,False,False,20\r
-215543585,True,False,Butter,True,False,-215543585,,32,0,0,False,False,20\r
-182748008,True,False,Spaghetti,True,False,-182748008,,32,0,0,False,False,20\r
509800268,False,False,Dish Source Cabinet,False,False,,,0,0,0,False,False,60\r
-364231730,False,False,Appliance,False,False,,,0,0,0,False,False,60\r
-121110359,False,False,Appliance,False,False,,,0,0,0,False,False,60\r
-940358190,True,False,Leftover Bags,False,False,,,8,0,0,False,True,60\r
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60\r
745886540,True,False,Taco Trays,True,False,,,32,0,0,False,False,60\r
-5840756,True,False,Tortillas,True,False,,,32,0,0,False,False,60\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60\r
`;const hs=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],ds=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],Ce=cs.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let r;switch(ds[l]){case"number":r=Number(e[l]);break;case"boolean":r=e[l]==="True";break;case"number[]":e[l]===""?r=[]:r=e[l].split(":").map(F=>Number(F));break;default:r=e[l]}a[hs[l]]=r}return a});class gs{constructor(e){m(this,"Staple");m(this,"Tags");m(this,"StapleWhenMissing");m(this,"Appliance");m(this,"IsRemoved");m(this,"Filter");m(this,"DecorationRequired");m(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var le=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(le||{}),ce=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(ce||{});const Ve={DefaultShoppingTag:892};var Ke=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(Ke||{}),Be=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(Be||{}),fs="38";const ps=Number(fs);function ms(s,e){return Math.floor(Math.random()*(e-s))+s}function Ts(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?ms(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}const bs="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of bs);class he{constructor(e,a){m(this,"fixedSeed");m(this,"instance");m(this,"random");typeof e=="string"&&(e=Cs(e)),this.fixedSeed=e,this.instance=a,this.random=new _e(e+Math.imul(124192293,a))}useSubcontext(e){return new he(this.fixedSeed,124192293*e+this.instance)}}class _e{constructor(e){m(this,"seed");const a=f=>Math.imul(1812433253,f)+1>>0,l=e>>0,r=a(l),F=a(r),o=a(F);this.seed=[l,r,F,o]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function Cs(s){const a=new TextEncoder().encode(s);let l=5381,r=a.length;for(;r--;)l=(l<<5)+l+a[r];return l>>0}function Je(s,e,a){return new he(a,s*1231231+e)}var de=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(de||{}),Z=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(Z||{});const Ss=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater"],Ye={};for(const s of Ss)Ye[s]=!0;const ys=Ce.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class ks{constructor(e,a=0){m(this,"seed");m(this,"mapSize");m(this,"numTiles");m(this,"baseUpgradeChance");m(this,"OwnedAppliances");m(this,"Cards");m(this,"Theme");m(this,"cache",new Map);m(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=Be.Null,this.cacheDay=-1}getLayoutInfo(){const a=new he(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.UnlockGroup===de.PrimaryTheme&&(this.Theme=Be[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>Ce.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let r=0;r<e.length;r++){const F=e[r];let o=F.blueprintCount;a%5===0&&(o+=3,r===0&&(o+=2)),l+=o*(ys-1+1),F.spawnInside||(l+=Ps(F.playerInside,this.numTiles)),l+=ps}return l}buildShopOptions(e,a,l){let r=[];for(const o of Ce)if(!(!o.IsPurchasable&&!o.IsPurchasableAsUpgrade)){var F=new gs(o);if(F.Staple==le.NonStaple||F.Staple==le.WhenMissing){if((F.Tags&ce.Basic)>ce.None)F.Staple=le.FixedStaple;else if(F.StapleWhenMissing){const i=F.Appliance.Name;i!="Research Desk"&&i!="Blueprint Cabinet"&&i!="Plates"&&console.log(`Unexpected ${F.Appliance.Name} StapleWhenMissing Appliance`),e.some(d=>d.ID===F.Appliance.ID)?F.Staple=le.NonStaple:F.Staple=le.WhenMissing}}const c=F.Appliance;if(c.SellOnlyAsDuplicate)e.some(i=>i.ID===c.ID)||(F.IsRemoved=!0);else if(c.RequiresForShop.length>0){let i=!1;for(const d of c.RequiresForShop)e.some(g=>g.ID===d)&&(i=!0);F.IsRemoved=!i}else c.SellOnlyAsUnique&&(c.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${c.Name}, ${c.ID}`),e.some(i=>i.ID===c.ID)&&(F.IsRemoved=!0));Ye[F.Appliance.Name]&&l.every(i=>!i.isMain||i.Name==="Tacos")&&(F.IsRemoved=!0),F.Filter==Ke.RefreshableProvider&&(e.some(i=>i.AllowRefreshes)||(F.IsRemoved=!0)),F.DecorationRequired!=Be.Null&&F.DecorationRequired!=a&&(F.IsRemoved=!0),c.RequiresProcessForShop.length>0&&(c.RequiresProcessForShop.some(i=>l.some(d=>d.RequiredProcesses.includes(i)))||(F.IsRemoved=!0)),r.push(F)}return r}initRandom(e){return Je(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,r=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let F=e[e.length-1].blueprintCount,o;if(a%5==0){l?F=10:F+=3,o=[];for(let d=0;d<F;d++)o[d]=ce.Decoration;if(l)for(const d of[1,2])o[o.length-d]=ce.SpecialEvent}else if(e.length>1){o=[];for(let d=0;d<F;d++)o[d]=Ve.DefaultShoppingTag}else{const d=Ve.DefaultShoppingTag,g=Math.max(1,F),T=Math.max(0,Math.min(r.filter(b=>b.Staple!==le.NonStaple&&!b.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),g)),A=Math.max(0,g-T);F=g,o=[];for(let b=0;b<T;b++)o[b]=ce.Basic;for(let b=T;b<T+A;b++)o[b]=d}const f=this.initRandom(a).random;let c=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(c)&&this.cache.get(c).length>=F)return this.cache.get(c).slice(0,F);const i=c;for(;c--;)f.value;{const d=[...r],g=[],T=this.getUpgradeChance(a),A=[];for(let b=0;b<F;b++){const K=o[b],X=f.valueFloat<T;Ts(d,f);for(let $=0;$<d.length;$++){const x=d[$];if(x.IsRemoved||A.includes(x.Appliance)||!x.MatchesRequestTags(K)||!X&&x.Staple==le.NonStaple&&x.SellAsUpgrade)continue;K!=ce.Decoration&&A.push(x.Appliance),g[b]=x.Appliance;break}g[b]==null}return this.cache.set(i,g),g}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function Ps(s,e){return s?e-2:e-1}var vs=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
-2075899,Breakfast,1,,,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1199743580,Breakfast Beans,1,-2075899,,,1807525572:-957949759,False,False,2,1,0\r
1436814208,Breakfast Eggs,1,-2075899,,,961148621,False,False,2,1,0\r
-1998930853,Breakfast Extras,1,-2075899,,,-712909563:-1097889139,False,False,2,1,0\r
-1778969928,Burgers,1,,,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
965292477,Cheeseburgers,1,-1778969928,,,759552160:380220741:385684499:-117339838,False,False,2,1,0\r
-1091625127,Fresh Patties,1,-1778969928,,,759552160:380220741:961148621:-484165118,False,False,2,1,0\r
1298035216,Burger Toppings,1,-1778969928,,,759552160:380220741:-712909563:385684499:-2042103798,False,False,2,1,0\r
1626323920,Hot Dogs,1,,,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-278713285,Hot Dog - Mustard,1,1626323920,,,-117356585,False,False,2,1,0\r
1743900205,Fish,1,,,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
-297968808,Crab Cake,1,1743900205,,2087693779:1972879238,380220741:925796718:961148621,True,False,1,1,8\r
243846255,Fish Selection,1,1442262270,,,-609358791,False,False,2,0,0\r
-243820179,Fish Selection,1,274986412,,,-609358791,False,False,2,0,0\r
1442262270,Fish Fillet,1,1743900205,,1972879238:2087693779,380220741,True,False,1,1,5\r
274986412,Oysters,1,1743900205,,2087693779,380220741,True,False,1,1,5\r
-643878280,Spiny Fish,1,1743900205,,2087693779,380220741,True,False,1,1,5\r
-211821608,Apple Pies,1,,,2087693779:1972879238:-523839730,925796718:-266993023:-905438738,False,False,5,1,3\r
-133939790,Pies,1,,,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,8\r
-1992316049,Mushroom Pie,1,-133939790,,,-1097889139:925796718:-266993023,False,False,1,1,0\r
-1802123036,Vegetable Pies,1,-133939790,,,925796718:-266993023:-452101383:-1573812073,False,False,1,1,0\r
1570910782,Apple Salad,1,1356267749,,2087693779,1193867305:-712909563:380220741:-905438738:1834063794:-1963699221:961148621,True,False,1,2,8\r
1356267749,Salad,1,,,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
-862637543,Potato Salad,1,1356267749,,2087693779:1972879238,-1963699221:961148621:44541785:-957949759:-2042103798:-266993023,True,False,1,2,8\r
372460604,Salad Toppings,1,1356267749,,,-1434800013:-2042103798,False,False,2,1,0\r
1384317454,Bone-in Steaks,1,-959076098,,1972879238,269523389,True,False,1,1,5\r
-959076098,Steak,1,,,1972879238,-484165118:380220741,True,False,0,0,5\r
-953651922,Steak Sauce - Mushroom,1,-959076098,,,-1097889139:-266993023:-2042103798:-957949759,False,False,2,1,0\r
2074054556,Steak Sauce - Red Wine Jus,1,-959076098,,,-957949759:-2042103798:-266993023:-1353971407,False,False,2,1,0\r
-1192928429,Steak Topping - Mushroom,1,-959076098,,,-1097889139,False,False,2,1,0\r
-851525606,Steak Topping - Tomato,1,-959076098,,,-712909563,False,False,2,1,0\r
1916300984,Thick Cut Steaks,1,-959076098,,1972879238,-1507801323,True,False,1,1,5\r
-1716993344,Thin Cut Steaks,1,-959076098,,1972879238,1800865634,True,False,1,1,5\r
-1653221873,Stir Fry,1,,,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
-204178430,Steak Stir Fry,1,-1653221873,,,-1201769154:314862254:-484165118:-452101383:380220741:-1573812073,False,False,1,1,0\r
1380953991,Broccoli,1,,,1972879238,-1573812073:-957949759:-266993023,False,True,3,1,1\r
-520693398,Chips,1,,,1972879238:2087693779,44541785,False,True,3,1,2\r
364243605,Mashed Potato,1,,,1972879238:2087693779,-957949759:44541785:-266993023,False,True,3,1,1\r
2012685115,Carrot Soup,1,,,1972879238,-266993023:-2042103798:-452101383:-957949759,False,True,4,1,3\r
-997241706,Meat Soup,1,,,1972879238,-484165118:-2042103798:-957949759:-266993023,False,True,4,1,3\r
-233806503,Tomato Soup,1,,,1972879238:2087693779,-712909563:-2042103798:-957949759:-266993023,False,True,4,1,3\r
312770813,Cheese Board,1,,,2087693779,-905438738:235423916:-117339838:1834063794,False,False,5,1,3\r
550743424,Pizza,1,,,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
1434421325,Mushroom Pizza,1,550743424,,,925796718:-1963699221:-117339838:-712909563:380220741:-1097889139,False,False,2,1,0\r
-2071275506,Onion Pizza,1,550743424,,,-117339838:925796718:-2042103798:-1963699221:380220741:-712909563,False,False,2,1,0\r
-1745179096,Onion Rings,1,,,1972879238:2087693779,-2042103798:925796718,False,True,3,1,2\r
1642577536,Herd Mentality,0,,,,,False,False,6,0,0\r
-1737101581,Health and Safety,0,,,,,False,False,6,0,0\r
-2040314977,Picky Eaters,0,,,,,False,False,6,0,0\r
73422455,Tipping Culture,0,,,,,False,False,6,0,0\r
1168007081,Corn on the Cob,1,,,1972879238,976574457,False,True,3,1,3\r
400765800,Pumpkin Pies,1,,,2087693779:1972879238:-523839730,-1055654549:925796718,False,False,5,1,3\r
1393945424,Pumpkin Seed,1,,,1972879238,-1055654549,False,True,4,1,3\r
1984233383,Pumpkin Soup,1,,,1972879238,-266993023:-2042103798:-1055654549:-957949759,False,True,4,1,2\r
1838568431,Trick - Nasty Nightmares,6,,,,,False,False,6,1,0\r
61056284,Trick - Risky Reservations,6,,,,,False,False,6,1,0\r
2112990883,Trick - Freak Fires,6,,,,,False,False,6,2,0\r
-1477157706,Trick - Mysterious Messes,6,,,,,False,False,6,1,0\r
-209485820,Trick - Dark Deliberations,6,,,,,False,False,6,1,0\r
83673522,Trick - Spooky Solos,6,,,,,False,False,6,1,0\r
1139286658,Trick - Pyro Patrons,6,,,,,False,False,6,2,0\r
79859072,Trick - Cowardly Customers,6,,,,,False,False,6,1,0\r
-2123879305,Trick - Full of Friends,6,,,,,False,False,6,1,0\r
-1895806374,Trick - Grand Gesture,6,,,,,False,False,6,1,0\r
-1839415999,Trick - Spatial Scares,6,,,,,False,False,6,1,0\r
-269971294,Trick - Frightful Fluff,6,,,,,False,False,6,1,0\r
1892828942,Trick - Immortal Impatience,6,,,,,False,False,6,2,0\r
524188336,Trick - Foggy Food,6,,,,,False,False,6,1,0\r
797208634,Trick - Vanishing Valuables,6,,,,,False,False,6,1,0\r
561747534,Trick - Careful Conveyance,6,,,,,False,False,6,1,0\r
-1921275517,Trick - Tiring Times,6,,,,,False,False,6,1,0\r
319209671,Community,6,,,,,False,False,6,1,0\r
536093200,Nut Roast,1,1551533879,,2087693779:-1706154991,1834063794:380220741:-2042103798,True,False,1,1,5\r
-1405391769,Affogato,1,16318784:373996608,,,-1609758240:-1533430406,False,False,5,1,1\r
1847735819,Bread,1,,,1972879238,925796718:235423916,False,True,4,1,2\r
-1015158173,Broccoli Cheese Soup,1,,,1972879238,-1573812073:-957949759:-117339838:-266993023:-2042103798,False,True,4,1,2\r
12170609,Cherry Pie,1,,,1972879238,148543530:925796718:-266993023,False,False,5,1,3\r
-1289628495,Roast Potato,1,,,1972879238,44541785,False,True,3,1,1\r
1551533879,Turkey,1,,,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-361249036,Christmas Rush,6,,,,,False,False,6,0,0\r
878396172,Christmas Crackers,1,1551533879,,,303858729,False,True,4,1,3\r
1398180456,Turkey - Cranberry Sauce,1,1551533879,,,735786885:-2133205155,False,False,2,1,0\r
-1460640973,Turkey - Gravy,1,1551533879,,,-2042103798:-957949759:-266993023,False,False,2,1,0\r
-1243742384,Turkey - Stuffing,1,1551533879,,,-2042103798:925796718:-266993023,False,False,2,2,0\r
-1273613313,Lucky Gift,6,,,,,False,False,6,1,0\r
-1742801708,Bamboo,1,,,1972879238,-2092567672:-266993023:-957949759,False,True,3,1,2\r
-437161441,Bamboo Stir Fry,1,-1653221873,,,-1201769154:314862254:-2092567672:-452101383:380220741:-1573812073:-957949759:-266993023,False,False,1,1,0\r
-1759612454,Dumpling - Soy Sauce,1,367917843,,,-471813067,False,False,2,1,0\r
367917843,Dumplings,1,,,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
137627410,Seaweed,1,367917843,,,595306349,False,False,2,1,0\r
1696424557,Mandarin Starter,1,,,,-1210117767,False,True,4,1,2\r
1642878331,Mushroom Stir Fry,1,-1653221873,,,-1097889139:-1573812073:-452101383:380220741:-1201769154:314862254,False,False,1,1,0\r
1064343768,Stir Fry - Soy Sauce,1,-1653221873,,,-471813067,False,False,2,1,0\r
-2106646073,Couples,6,,,,,False,False,6,0,0\r
2028238661,Double Dates,0,-2106646073,,,,False,False,6,0,0\r
587399881,First Dates,0,-2106646073,,,,False,False,6,0,0\r
251686519,Double Brew,0,746549422,,,,False,False,6,0,0\r
2079359756,Slow Brew Coffee,1,746549422:16318784,,,,False,False,6,0,0\r
1103885337,Cake Stand,1,16318784:16318784,,,143484231,False,False,2,1,0\r
16318784,Black Coffee,1,,,-1316622579,-1609758240,False,False,0,-2,1\r
-740215310,Extra Milk,1,16318784,,,120342736,False,False,2,1,0\r
-696561631,Extra Sugar,1,16318784,,,-2133205155,False,False,2,1,0\r
2133632711,Iced Coffee,1,16318784,,-1316622579,-1609758240:801015432,False,False,2,1,2\r
-141282934,Latte,1,16318784,,-1316622579:510796221,-1609758240:120342736,False,False,2,1,2\r
1398671754,Tea,1,16318784,,,-1598460622:1377093570:-762638188:-266993023,False,False,2,1,3\r
1316998108,Sponge Cake,1,1113735761,,,-660310536:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
1609120418,Brownies,1,1113735761,,,783588616:-2135982034:961148621:925796718:-217313684:-2133205155,False,False,5,-1,0\r
-810134986,Cake Flavour - Coffee,1,1113735761,,-1316622579,-1609758240,False,False,5,1,3\r
-1693098895,Cake Flavour - Lemon,1,1113735761,,2087693779,1470180731,False,False,5,1,3\r
627241196,Cupcake,1,1113735761,,,-315287689:961148621:925796718:120342736:-217313684:-2133205155,False,False,5,-1,0\r
-1166412657,Doughnut,1,1113735761,,,2136474391:961148621:925796718:120342736:-217313684:-2133205155:-1963699221:-957949759,False,False,5,-1,0\r
1113735761,Cakes,0,,,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
-1501485763,Spaghetti Bolognese,1,1764920765,,1972879238:2087693779,-1541798751:-182748008:-266993023:-957949759:380220741:-712909563,True,False,1,1,5\r
803049136,Lasagne,1,-1501485763:1651927267,,-1706154991:1972879238:-523839730,-2077197906:-1541798751:-215543585:120342736:925796718:-957949759:380220741:-712909563:-1339944542,True,False,1,2,8\r
1651927267,Cheesy Spaghetti,1,1764920765,,1972879238:2087693779,925796718:-182748008:-266993023:-957949759:380220741:120342736:-215543585:-117339838,True,False,1,1,5\r
675343178,Tacos - Cheese,1,506626805,,,-117339838,False,False,2,1,0\r
-2122069505,Tacos - Lettuce,1,506626805,,,1193867305,False,False,2,1,0\r
706991842,Tacos - Onion,1,506626805,,,-2042103798,False,False,2,1,0\r
-1656665053,Tacos - Tomato,1,506626805,,,-712909563,False,False,2,1,0\r
2055765569,Double Helpings,0,-347199069,,,,False,False,6,1,0\r
-347199069,All You Can Eat,0,,,,,False,False,6,2,0\r
233335391,Personalised Waiting,0,,,,,False,False,6,0,0\r
-1815978981,Closing Time?,0,,,,,False,False,6,0,0\r
-287956430,Leisurely Eating,0,,,,,False,False,6,1,0\r
220354841,Sedate Atmosphere,0,,,,,False,False,6,0,0\r
-37551439,Dinner Rush,0,,1958825350,,,False,False,6,0,0\r
-2112255403,Flexible Dining,0,-1183014556,,,,False,False,6,0,0\r
-1747821833,Individual Dining,0,,-1183014556,,,False,False,6,0,0\r
-523195599,Large Groups,0,-1183014556,,,,False,False,6,0,0\r
-1183014556,Medium Groups,0,,-1747821833,,,False,False,6,0,0\r
165138001,Photographic Memory,0,,,,,False,False,6,0,0\r
-28708234,Empathy,0,,,,,False,False,6,0,0\r
-1617744928,Blindfolded Chefs,0,,,,,False,False,6,0,0\r
1530184692,Instant Service,0,,746549422,,,False,False,6,0,0\r
113582858,Discounts,0,,,,,False,False,6,0,0\r
-913531466,Victorian Standards,0,,,,,False,False,6,0,0\r
-53330922,Lunch Rush,0,,1958825350,,,False,False,6,0,0\r
-491994319,Splash Zone,0,,,,,False,False,6,0,0\r
1151685289,Relaxed Atmosphere,0,,,,,False,False,6,0,0\r
73387665,Advertising,0,1765310572,,,,False,False,6,0,0\r
1765310572,Advertising,0,,,,,False,False,6,0,0\r
2079763934,Morning Rush,0,,1958825350,,,False,False,6,0,0\r
1914014233,Simplicity,0,,,,,False,False,6,0,0\r
-534291083,High Expectations,0,,,,,False,False,6,0,0\r
-957080051,High Standards,0,,1356267749,,,False,False,6,0,0\r
1103452725,High Quality,0,,,,,False,False,6,0,0\r
-1857686620,Affordable,3,,,,,False,False,6,0,0\r
1293847744,Charming,3,,,,,False,False,6,0,0\r
-1323758054,Exclusive,3,,,,,False,False,6,0,0\r
-1641333859,Formal,3,,,,,False,False,6,0,0\r
409052852,Variety,5,,319209671:16318784,,,False,False,6,0,0\r
-1205203705,Careful Accounting,5,,,,,False,False,6,-2,0\r
-947047181,Mandatory Tips,5,,,,,False,False,6,-2,0\r
1298492736,Grabber,5,,,,,False,False,6,-2,0\r
1173444265,Wash Basin,5,,,,,False,False,6,-2,0\r
-1096314451,Savings,5,,,,,False,False,6,-2,0\r
2022427578,Reincarnation,5,,,,,False,False,6,-2,0\r
-401283600,Preparation Time,5,,,,,False,False,6,-2,0\r
-357483693,Double Homework,5,,,,,False,False,6,-2,0\r
868780472,Catalogue,5,,,,,False,False,6,-2,0\r
-1418317596,Coupons,5,,,,,False,False,6,-2,0\r
-98765415,Supplier Error,5,,,,,False,False,6,-2,0\r
1618418478,Bootstrapping,5,,,,,False,False,6,-2,0\r
1543829883,Second Helpings,5,,,,,False,False,6,-2,0\r
-1010143518,Loyal Customer,5,,,,,False,False,6,-2,0\r
-1269806478,High Tech Suppliers,5,,,,,False,False,6,-2,0\r
1818403570,Conveyors,5,,,,,False,False,6,-2,0\r
-1121427945,Coffee Tables,5,,,,,False,False,6,-2,0\r
1101419251,Floor Protectors,5,,,,,False,False,6,-2,0\r
-220105135,Flower Pots,5,,,,,False,False,6,-2,0\r
-178381693,Metal Table,5,,,,,False,False,6,0,0\r
-373772933,Simple Cloth Table,5,,,,,False,False,6,0,0\r
`,Rs=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
1356267749,Salad,1,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
550743424,Pizza,1,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
367917843,Dumplings,1,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
16318784,Black Coffee,1,-1316622579,-1609758240,False,False,0,-2,1\r
-1778969928,Burgers,1,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
1551533879,Turkey,1,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-133939790,Pies,1,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,8\r
1113735761,Cakes,0,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
1764920765,Spaghetti,1,1972879238:2087693779,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
1743900205,Fish,1,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
506626805,Tacos,1,2087693779:1972879238,-5840756:-1541798751:745886540,True,False,0,-1,1\r
1626323920,Hot Dogs,1,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
`;const Oe=vs.trim().split(`\r
`).filter(s=>s).map(s=>{var O,ke;const[e,a,l,r,F,o,f,c,i,d,g,T]=s.split(","),A=Number(e),b=Number(l),K=r!=null&&r.length?r.split(":").map(ee=>Number(ee)):[],z=F.length?F.split(":").map(ee=>Number(ee)):[],X=o!=null&&o.length?(O=o==null?void 0:o.split(":"))==null?void 0:O.map(ee=>Number(ee)):[],$=f!=null&&f.length?(ke=f==null?void 0:f.split(":"))==null?void 0:ke.map(ee=>Number(ee)):[],x=c==="True",j=i==="True",Fe=Number(d),ne=Number(g),_=Number(T);return{ID:A,Name:a,UnlockGroup:b,Requires:K,BlockedBy:z,RequiredProcesses:X,IngredientProviders:$,isMain:x,isStarterOrSide:j,DishType:Fe,CustomerMultiplier:ne,DishValue:_}}),Ds=[...[{ID:447437163,Name:"Country",UnlockGroup:de.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Z.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:de.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Z.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:de.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Z.Null,CustomerMultiplier:0,DishValue:0},Oe.filter(s=>s.Name==="Community")[0],{ID:1766067755,Name:"Romantic",UnlockGroup:de.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Z.Null,CustomerMultiplier:0,DishValue:0},{ID:1958825350,Name:"Turbo",UnlockGroup:de.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Z.Null,CustomerMultiplier:0,DishValue:0}]].sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>Oe.filter(e=>e.Name===s)[0]),Rs.trim().split(`\r
`).filter(s=>s).map(s=>{var j,Fe;const[e,a,l,r,F,o,f,c,i,d]=s.split(","),g=Number(e),T=Number(l),A=r!=null&&r.length?(j=r==null?void 0:r.split(":"))==null?void 0:j.map(ne=>Number(ne)):[],b=F!=null&&F.length?(Fe=F==null?void 0:F.split(":"))==null?void 0:Fe.map(ne=>Number(ne)):[],K=o==="True",z=f==="True",X=Number(c),$=Number(i),x=Number(d);return{ID:g,Name:a,UnlockGroup:T,Requires:[],BlockedBy:[],RequiredProcesses:A,IngredientProviders:b,isMain:K,isStarterOrSide:z,DishType:X,CustomerMultiplier:$,DishValue:x}}).sort((s,e)=>s.Name<e.Name?-1:1);const Ms=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Bs=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],we={};function re(s){return we[s]===void 0&&(we[s]=Ce.filter(e=>e.Name===s)[0]),we[s]===void 0&&console.error(`Could not find ${s} appliance`),we[s]}const ws=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function ye(s){let e=0;(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime);for(const a of Object.values(s.achieved))e+=s.cumulativeRerolls*2,e+=s.actionHistory.filter(l=>l==="spawn OI"||l==="spawn OO").length*3,e+=s.actionHistory.reduce((l,r)=>{var F;return r.includes("take ")?l+3+Number((F=r.match(/(\d+)/))==null?void 0:F[0]):l},0),e+=a.goalsPurchased+a.substitutesPurchased;return e}function Ge(s,e){return(a,l)=>{const r=a.achieved[e],F=l.achieved[e],o=Math.min(r.goalsPurchased,s);let c=Math.min(F.goalsPurchased,s)-o;return c===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&F.goalsPurchased+F.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(F.goalsPurchased+F.substitutesPurchased):F.substitutesPurchased-r.substitutesPurchased:c}}const Qe={"Copying Desk":3,"Metal Table":4,"Power Sink":4,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":2,"Safety Hob":2,"Grabber - Rotating":2,"Smart Grabber":2};function Ns(s,e,a,l,r=!0,F=Bs,o=Ms,f=()=>{}){var ls,rs,Fs,ns;let c={},i=[];const d=[],g=new Array(l.length).fill(0).map(()=>({})),T={};let A=0,b=0;const K={},z=e.some(h=>h.Name==="Turbo"),X=[];let $=[],x=0;const j={};for(const h of l){for(const u of h){const{goal:R,number:D,substitutes:M,skipMissing:k=!1}=u;for(const S of M)T[S]||(T[S]=[]),T[S].push(R);j[R]?k||(j[R].number+=D):(j[R]={...u},k&&(j[R].number=0));for(let S=0;S<=x;S++){if(g[S]===void 0)debugger;g[S][R]?g[S][R].number+=D:g[S][R]={...u}}for(let S=x+1;S<g.length;S++){if(g[S]===void 0)debugger;g[S][R]||(g[S][R]={...u,number:0})}k||(b+=re(R).PurchaseCost*D*(z?.5:1))}try{d.push(JSON.parse(JSON.stringify(j)))}catch{console.log(g),console.log(g[0]);debugger}x++}const Fe=g[0],ne=Object.values(Fe).sort((h,u)=>re(h.goal).PurchaseCost-re(u.goal).PurchaseCost).map(h=>h.goal);c=d.shift();for(const h of Object.values(Fe)){const{goal:u,number:R}=h;K[u]={...h,substitutesPurchased:0,goalsPurchased:0},h.goal!=="Starter Bin"&&(X.push(Ge(R,u)),$.push(Ge(R,u)))}const _=new W([],[...X,(h,u)=>u.money-h.money,(h,u)=>ye(h)-ye(u),(h,u)=>h.actionHistory.length-u.actionHistory.length,(h,u)=>h.cumulativeRerolls-u.cumulativeRerolls,(h,u)=>(h.day+1)%5?h.upgradesInProgress-u.upgradesInProgress:0]),O=z?7:5,ke=[{spawnInside:!0,blueprintCount:O},{spawnInside:!1,playerInside:!1,blueprintCount:O}];r||ke.push({spawnInside:!1,playerInside:!0,blueprintCount:O});const ee=[{spawnInside:!0,blueprintCount:O},{spawnInside:!1,playerInside:!0,blueprintCount:O},{spawnInside:!1,playerInside:!1,blueprintCount:O}];function Xe(h,u,R){const D={...h};for(const M of Object.values(u)){const k=M.goal;D[k]={...D[k]},k==="Copying Desk"&&(D[k].goalsPurchased+=D[k].substitutesPurchased,D[k].substitutesPurchased=0),D[k].goalsPurchased+=M.goalsPurchased,R&&(D[k].substitutesPurchased+=M.substitutesPurchased)}return D}let Pe=[];function es(h,u,R,D=!1){var q,P,y,H,se,t,n,p,U,fe,V,B,pe,me,w,te,Le,Ae,ie,Re;const M=u.fodderUsed,k=Object.values(u.achieved).some(C=>C.substitutesPurchased)&&!((q=u.achieved["Research Desk"])!=null&&q.goalsPurchased),S=u.actionHistory.at(-1)==="buy Blueprint Cabinet"&&((P=u.actionHistory.at(-2))!=null&&P.includes("reroll"))?1:0;e:for(const C of h){if(k&&!ss&&!((y=C.achieved["Research Desk"])!=null&&y.goalsPurchased))continue;let ze=1+(C.achieved["Copying Desk"].goalsPurchased?1:0);const ts=C.achieved["Blueprint Cabinet"].goalsPurchased;let oe=ts;if(oe-=i.length,oe-=C.upgradesInProgress,oe*=ze,oe<0||oe<M)continue;let is=C.cumulativeRerolls+u.cumulativeRerolls,De=is*(is+1)/2*10+C.applianceCosts;const $e=u.actionHistory.length?Xe(C.achieved,u.achieved,!1):C.achieved,I=u.actionHistory.length?Xe(C.achieved,u.achieved,!0):C.achieved,Me=Is(c,$e);if(J<=0&&Me>0||u.cumulativeRerolls&&De>E)continue;let Te=0,be=0,os=[],xe=0,Ue=1;const We=I["Blueprint Cabinet"].goalsPurchased-i.length-S,je=(((H=C.achieved["Discount Desk"])==null?void 0:H.goalsPurchased)??0)+(((se=C.achieved["Discount Desk"])==null?void 0:se.substitutesPurchased)??0)?.5:1;{let L=E-De;for(const Y of ne){const N=u.achieved[Y];L-=N.goalsPurchased*re(N.goal).PurchaseCost*(z?.5:1)*je;let us=!1;(L<0||N.substitutesPurchased)&&(N.goal==="Copying Desk"&&be&&(be=0,xe--),us=!0,L<0&&(Te+=N.goalsPurchased),Te+=N.substitutesPurchased,N.substitutesPurchased&&(xe++,Qe[N.goal]&&(Ue*=Qe[N.goal]))),(N.goal==="Metal Table"||N.goal==="Grabber - Rotating"||N.goal==="Portioner"||N.goal==="Grabber")&&N.goalsPurchased+N.substitutesPurchased&&I[Y].goalsPurchased+I[Y].substitutesPurchased<I[Y].number&&(C.achieved["Copying Desk"].goalsPurchased||I["Copying Desk"].goalsPurchased&&L>60)&&(us||be++,be++,os.push(N.goal),xe++)}if(Te>We)continue e}De+=u.applianceCosts*je;let Se=100,Ee=v>1?160:100,He=50;switch(((t=I==null?void 0:I.Portioner)==null?void 0:t.goalsPurchased)??0){case 0:break;case 1:Se*=.75;break;case 2:default:switch(Se/=4,(((n=I["Grabber - Rotating"])==null?void 0:n.goalsPurchased)+((p=I.Grabber)==null?void 0:p.goalsPurchased)+((U=C.achieved["Grabber - Rotating"])==null?void 0:U.substitutesPurchased)+((fe=C.achieved.Grabber)==null?void 0:fe.substitutesPurchased))*((V=C.achieved["Copying Desk"])==null?void 0:V.goalsPurchased)){case 0:break;default:Se/=2}break}switch(((B=$e["Danger Hob"])==null?void 0:B.goalsPurchased)+((pe=$e["Danger Hob"])==null?void 0:pe.substitutesPurchased)&&(Se*=.75),((me=I["Scrubbing Brush"])==null?void 0:me.goalsPurchased)??0){case 0:break;case 1:default:He/=3}switch(Math.max((((w=C.achieved["Power Sink"])==null?void 0:w.goalsPurchased)??0)+(((te=C.achieved["Power Sink"])==null?void 0:te.substitutesPurchased)??0),((Le=I["Power Sink"])==null?void 0:Le.goalsPurchased)??0)){case 0:break;case 1:default:He/=2/.75}{let L=v<6?(((Ae=I["Table - Fancy Cloth"])==null?void 0:Ae.goalsPurchased)??0)+1:0;switch(v){case 1:case 2:case 3:break;case 4:L++;break;case 5:L+=2;break;case 6:default:L+=4;break}Ee/=L}v>=5&&(Ee/=2);const zs=C.deskTime+(Ue-1)*20+Math.max(0,M-ts)*5*((ie=C.achieved["Clipboard Stand"])!=null&&ie.goalsPurchased?.5:1)+(xe*Ue*5+(o[u.day]??o.at(-1)??0))*((Re=I["Clipboard Stand"])!=null&&Re.goalsPurchased?.5:1)+Math.max(Se+He,Ee)+Se+He+Ee,ue={...u,rerollConfigs:[...C.rerollConfigs,u.rerollConfigs],achieved:I,money:E-De,actionHistory:[...C.actionHistory,...u.actionHistory],upgradesInProgress:Te,cumulativeRerolls:C.cumulativeRerolls+u.cumulativeRerolls,applianceCosts:C.applianceCosts+u.applianceCosts*je,deskTime:zs};if(!(Te>We)){if(be&&(be===1||Te+1<=We))for(const L of os)ue.upgradesInProgress+=be,I[L].goalsPurchased++,ue.actionHistory.push(`copy ${L}`),ue.applianceCosts+=30;if(ue.money>=0&&(!ue.upgradesInProgress||d.length)){if(Me<J&&(J=Me,console.log(`best so far missing ${Me} pieces `+Ne(ue,E))),Me<=0){if(_.add(ue)){as();continue}}else if(J<=0)continue}if(oe>A&&(A=oe),D){const L=C.cumulativeRerolls;for(let Y=0;Y<=oe;Y++)Pe[Y]===void 0&&(Pe[Y]=new W([],ws)),Pe[Y].add([L,De]);continue}R.add(ue)}}return J}const qe={...K};qe["Blueprint Cabinet"]={...qe["Blueprint Cabinet"],goalsPurchased:1};const ve=new W([{achieved:qe,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:0,day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...X,(h,u)=>h.applianceCosts-u.applianceCosts,(h,u)=>h.cumulativeRerolls-u.cumulativeRerolls]);let J=1/0,v=0,E=0;const G=new ks(s),Ie=["Plates"];let ss=!1,ge=[];{const h=["Booking Desk","Blueprint Cabinet"];Ce.filter(u=>h.includes(u.Name)).forEach(u=>G.OwnedAppliances.push(u))}for(const h of e)G.addCard(h);function Ls(h,u,R){let D=[{...h}],M=[],k=[];const S=JSON.parse(JSON.stringify(h.achieved));for(const q of u){let P=q.Name,y=S[P],H=!1,se=y&&v>3&&y.goal==="Research Desk";if(!y||y.goalsPurchased>=g[0][P].number||se){const t=T[q.Name],n=t&&q.Name==="Research Desk"?v>6?"Copying Desk":"Discount Desk":t==null?void 0:t[Math.floor(Math.random()*t.length)];if(y=S[n],!y)continue;H=!0,P=n}if(H&&y.goalsPurchased+y.substitutesPurchased>=g[0][P].number&&(y=S["Starter Bin"],P="Starter Bin"),y.goalsPurchased>=g[0][P].number){y=S["Starter Bin"],P="Starter Bin",H=!0;continue}P==="Table - Fancy Cloth"&&(H=!1),H?y.substitutesPurchased++:y.goalsPurchased++;{const t=n=>{const p={...n};p.achieved={...p.achieved},p.numFloor--,p.achieved[P]={...p.achieved[P],goalsPurchased:p.achieved[P].goalsPurchased+(H?0:1),substitutesPurchased:p.achieved[P].substitutesPurchased+(H?1:0)};const U=P==="Starter Bin"||P==="Table - Fancy Cloth"?re(q.Name).PurchaseCost:Math.max(re(q.Name).PurchaseCost,re(P).PurchaseCost);return p.applianceCosts+=U*(z?.5:1),p.actionHistory=[...p.actionHistory,`buy ${q.Name}`+(H?` for ${P}`:"")],P==="Starter Bin"&&(p.fodderPurchases=[...p.fodderPurchases],p.fodderPurchases[1]++,p.achieved[P].substitutesPurchased--),p};if(P!=="Starter Bin"){const n=D.map(t),p=M.map(t),U=k.map(t);D=n.concat(D),M=p.concat(M),k=U.concat(k),n.forEach(R)}else M=M.concat(k),k=(k.length?k:D).map(t)}}return D.concat(M).concat(k)}for(;J;){let h=ve.array;ve.clear();const u=new W([],[...$,(t,n)=>t.cumulativeRerolls-n.cumulativeRerolls,(t,n)=>t.applianceCosts-n.applianceCosts]);if(E+=F[v]??F.at(-1)??0,v++,v>14&&(z||!a.length)){debugger;break}if(v>1&&h.length===0){debugger;break}h.sort((t,n)=>ye(t)-ye(n)),console.log(`fastest so far: ${Ne(h[0],E)}`),h.every(t=>t.achieved["Copying Desk"].goalsPurchased)&&(i=i.map(t=>t-1),i=i.filter(t=>t>0));let R=6,D=.5*60*1e3;const M=Math.min(R-1,3);if(E>=b){const t=Math.sqrt((E-b)/10*2);console.log(`Have ${E} on day ${v}, need ${b} to buy everything. Allows for ~${t} rerolls across all days`)}v%5||(R=1);let k;(z||v===5||!(v%3))&&(k=a.shift());const S=Oe.filter(t=>t.Name===k)[0];G.handleNewCardSpawnEffects(S);const q=G.getAppliances([{spawnInside:!0,blueprintCount:O}],v);G.handleNewCardRerollEffects(S);let P=[];if(Ie.length)for(let t=Ie.length-1;t>=0;t--){let n=q.length;for(;n--;){const p=q[n];if(p.Name===Ie[t]){if(console.log(`buying ${p.Name} on day ${v}`),E-h.reduce((fe,V)=>Math.min(fe,V.applianceCosts+10/2*(V.cumulativeRerolls+1)*V.cumulativeRerolls),1/0)<p.PurchaseCost*(z?.5:1)){console.log("not enough money-- skip for now");continue}ge.push(p),Ie.splice(t,1),E-=p.PurchaseCost*(z?.5:1),q.splice(n,1);break}}P=ge.map(p=>`Buy ${p.Name}`)}let y=new W([{day:v,rerollConfigs:[],achieved:{...K},numFloor:O,fodderAvailable:A,fodderUsed:0,money:E,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(t,n)=>G.getPrngAdvancements(t.rerollConfigs,v)-G.getPrngAdvancements(n.rerollConfigs,v),(t,n)=>-G.getPrngAdvancements(t.rerollConfigs,v)+G.getPrngAdvancements(n.rerollConfigs,v),...$,(t,n)=>t.cumulativeRerolls-n.cumulativeRerolls,(t,n)=>t.applianceCosts-n.applianceCosts,(t,n)=>n.numFloor+n.fodderAvailable-t.numFloor+t.fodderAvailable,(t,n)=>t.numFloor-n.numFloor]);es(h,y.array[0],ve,!0);let H=1/0;const se=Pe.map(t=>t.array.reduce((n,[p,U])=>Math.min(n,U+y.array[0].rerollConfigs.length*(p+1)*10),1/0));e:for(;R--&&(ge.length&&((rs=(ls=y.array[0])==null?void 0:ls.rerollConfigs)==null?void 0:rs.length)===1&&(ge.some(n=>n.Name==="Research Desk")&&(ss=!0),G.OwnedAppliances.push(...ge),ge=[],P=[]),H=Date.now()+D,y.array[0]!==void 0);){console.log(`Seed ${s} Day ${v} Reroll ${y.array[0].rerollConfigs.length} expanding ${y.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:se});const t=y.array;if(!d.length&&J<=0){const n=t[0].rerollConfigs.length;if(n*((n+1)/2)*10+b>E){console.log("get me outta here!");break}}y.clear();for(const n of t){if(Date.now()>H){y.array.sort((pe,me)=>-1*(pe.applianceCosts-me.applianceCosts));continue e}if(n.numFloor+n.fodderAvailable===0||n.money<n.rerollConfigs.length*10)continue;let p=0;if(se[0]>n.money)continue;for(let B=1;B<se.length;B++)if(p++,se[B]>n.money){p=B-1;break}let U=M<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?n.numFloor+Math.min(n.fodderAvailable,p-n.fodderUsed):O;{let B=n.actionHistory.length;for(;B--&&!n.actionHistory[B].includes("reroll");)if(n.actionHistory[B].includes("Starter Bin")){U=n.numFloor;break}}const fe=M<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?Math.max(1,n.numFloor):O;let V;n.rerollConfigs.length===0?V=ee:M<n.rerollConfigs.length?V=[n.rerollConfigs.at(-1)]:V=ke,G.getAppliances([...n.rerollConfigs,{spawnInside:!0,blueprintCount:U}],n.day);for(const B of V){const pe=w=>{if(!y.add(w)||!u.add(w))return;w.fodderPurchases[0]+w.fodderPurchases[1]||es(h,w,ve)},me=[fe];for(let w=U;w>fe;w--)me.push(w);for(const w of me){const te=[...n.rerollConfigs,{...B,blueprintCount:w}],Ae=[...te.length===1?q:G.getAppliances(te,n.day)].sort((C,ze)=>C.PurchaseCost-ze.PurchaseCost),ie=w-n.numFloor;if(ie>n.fodderAvailable)debugger;const Re={...n,fodderPurchases:[n.fodderPurchases[1],0],money:n.money-n.rerollConfigs.length*10,rerollConfigs:te,numFloor:te.length===1?w-ge.length:w,fodderAvailable:n.fodderAvailable-ie,fodderUsed:n.fodderUsed+ie,cumulativeRerolls:n.rerollConfigs.length?n.cumulativeRerolls+1:0,actionHistory:n.rerollConfigs.length?[...n.actionHistory,`${ie?`take ${ie} out, `:""}reroll ${B.spawnInside?"I":B.playerInside?"OI":"OO"}`]:[`day ${n.day} spawn`,`spawn ${B.spawnInside?"I":B.playerInside?"OI":"OO"}`,...P]};if(pe(Re),Ls(Re,Ae,pe),Date.now()>H)break}}}}if(G.addCard(S),J<=0){if(!d.length){_.array.sort((t,n)=>t.deskTime-n.deskTime),f((J<=0?`full build on ${s} by day ${v}: 
`:"")+_.array.map(t=>Ne(t,E)).join(`
`));break}{const t=(((Fs=d[0]["Blueprint Cabinet"])==null?void 0:Fs.number)??0)-(((ns=c["Blueprint Cabinet"])==null?void 0:ns.number)??0);if(t+i.length>2)debugger;for(let n=0;n<t;n++)i.push(1)}for(const t of Object.values(c))t.number&&G.OwnedAppliances.push(re(t.goal));c=d.shift(),g.shift(),$=[];for(const{goal:t,number:n}of Object.values(g[0]))$.push(Ge(n,t));J=1/0,Pe=[],as(!0),ve.array=_.array,_.clear(),_.objectiveFunctions}}return v;function as(h=!1){f(`tier ${l.length-d.length-(h?1:0)} build on ${s} by day ${v}${h?"":" (Partial)"}: 
`+_.array.slice(0,100).map(u=>Ne(u,E)).join(`
`))}}function Is(s,e){let a=0;for(const l of Object.values(s)){let r=l.number;a+=Math.max(0,r-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased)}return a}function Ne(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${ye(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")}const As={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4};class xs{constructor(e,a=[],l=[]){m(this,"seed");m(this,"mapSize");m(this,"frontDoor");m(this,"startingCards");m(this,"cards");m(this,"playerCount");m(this,"turbo");m(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=As[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:a});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=1+a.filter(i=>i.Name==="All You Can Eat"||i.Name==="Double Helpings").length*.25,r=this.getCustomerCount(e)*l;let F=this.startingCards.reduce((i,d)=>i+d.DishValue,0);if(a.some(i=>i.Name==="Ice Cream")&&(this.startingCards.some(i=>i.DishType=Z.Dessert)||(F=(F+2)/2)),a.some(i=>i.Name==="Doughnut")&&(F=5),a.some(i=>i.Name==="Double Helpings")&&F&&(F+=3),Number.isNaN(r))debugger;if(Number.isNaN(F))debugger;const o=Es(this.playerCount),f=this.getBookingDeskCount(e),c=this.getBookingDeskMoney(e);return o*(r*F+f*c)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const l=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(i=>i.Name==="Herd Mentality"))return Math.min(l,3)+1;const r=[],F=this.getCardsByDay(e);let o=1;(this.turbo||F.some(i=>i.Name==="Morning Rush"))&&(r.push(.2),o++),(this.turbo||F.some(i=>i.Name==="Lunch Rush"))&&(r.push(.5),o++),(this.turbo||F.some(i=>i.Name==="Dinner Rush"))&&(r.push(.8),o++);const f=a/this.getDayLength(e),c=.1/l;for(let i=1;i<l;i++){const d=i/l,g=d-c-f,T=d+c+f;let A=!1;for(const b of r)if(g<=b&&T>=b){A=!0;break}A||o++}return o}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(o=>o.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),F=a*(1+l)/r;return Math.ceil(F)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=Je(1997821,e,this.seed).random,l=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(T=>T.Name==="Herd Mentality");let F=l,o=[],[f,c]=this.getGroupSizeRange(e);{let T=F-1;for(;T--;)a.value}for(;F--;)o.push(a.range(f,c+1)),!r&&F!==l-1&&a.value;let i=this.turbo?3:this.getCardsByDay(e).filter(T=>T.Name.includes(" Rush")).length;const d=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let g=i*d;for(;g--;)o.push(a.range(f,c+1));return o}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const F=Math.floor((e-1)/3);a+=F,l+=F;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),r=this.getPlayerModifier(),F=this.getCourseModifier(e),o=this.getDayRate(e),f=this.getCustomersPerHour(e),c=this.getAdvertisingModifier(e);return .85**a*(l/25*o*r)/F*f*c}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(r=>r.DishType===Z.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(a+=.25),l.some(r=>r.DishType===Z.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,r)=>l+r.CustomerMultiplier,0)}getMapSize(){const a=new he(this.seed,5078598).useSubcontext(0).random.range(0,8);let l;switch(a){case 0:l="Small (2)";break;case 4:l="Medium (2)";break;case 1:case 5:l="Diner (1)";break;case 2:case 6:l="Large (3)";break;case 3:case 7:l="Huge (4)";break;default:throw new Error}return l}getLayoutInfo(){const a=new he(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new _e(new he(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function Es(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Hs(s,e,a,l){let r=[],F=[];const o=s.cards.slice(e);let f=new xs(s.seed,a,o);f.playerCount=l;for(let c=1;c<=15;c++)r.push(f.guessMoney(c)),F.push(f.getBookingDeskCount(c));return r[0]+=f.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:F}}var Ze=self;function Os(s){Ze.postMessage(s)}const Gs=["Copying Desk","Blueprint Cabinet","Clipboard Stand","Research Desk"],qs=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:Ce.filter(s=>!Gs.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];Ze.onmessage=s=>{let{config:e,tiers:a,playerCount:l}=s.data;for(;!a.at(-1).length;)a.pop();const r=[...qs],F=a.flatMap(g=>g.flatMap(T=>[T.goal,...T.substitutes])),o=r.length-1;r[o].substitutes=r[o].substitutes.filter(g=>!F.some(T=>g===T)),a[a.length-1].push(...r);const f=e.cards.filter(g=>Ds.some(T=>T.Name===g.Name)).length+1,c=e.cards.slice(0,f);let{expectedMoneyByDay:i,expectedBookingDesksByDay:d}=Hs(e,f,c,l);Ns(e.seed,c,e.cards.slice(f).map(g=>g.Name),a,e.solo,i,d,Os)}})();
