var je=Object.defineProperty;var Ke=(x,z,K)=>z in x?je(x,z,{enumerable:!0,configurable:!0,writable:!0,value:K}):x[z]=K;var g=(x,z,K)=>(Ke(x,typeof z!="symbol"?z+"":z,K),K);(function(){"use strict";class x{constructor(e,a){g(this,"array");g(this,"objectiveFunctions");this.array=z(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:F}=K(e,this.array[a],this.objectiveFunctions);if(F)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function z(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const F=a.pop();let r=l.length;for(;r--;){let{better:t,worse:T}=K(F,l[r],e);if(T)continue e;t&&l.splice(r,1)}l.push(F)}return l}function K(s,e,a){let l=!0,F=!0,r=0;for(;(l||F)&&r<a.length;){const t=a[r](s,e);t<0?F=!1:t>0&&(l=!1),r++}return{better:l,worse:F}}var ke=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
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
-62256073,False,False,,False,False,,,0,0,0,False,False,20\r
1636658728,False,False,,False,False,,,0,0,0,False,False,20\r
-1518462324,False,False,,False,False,,,0,0,0,False,False,20\r
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
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60\r
`;const Pe=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],ve=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],re=ke.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let F;switch(ve[l]){case"number":F=Number(e[l]);break;case"boolean":F=e[l]==="True";break;case"number[]":e[l]===""?F=[]:F=e[l].split(":").map(r=>Number(r));break;default:F=e[l]}a[Pe[l]]=F}return a});class Re{constructor(e){g(this,"Staple");g(this,"Tags");g(this,"StapleWhenMissing");g(this,"Appliance");g(this,"IsRemoved");g(this,"Filter");g(this,"DecorationRequired");g(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var _=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(_||{}),Z=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(Z||{});const me={DefaultShoppingTag:892};var Te=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(Te||{}),oe=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(oe||{}),Be="38";const Me=Number(Be);function De(s,e){let a=s.length;for(;a-- >1;){let l=e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}class ae{constructor(e,a){g(this,"fixedSeed");g(this,"instance");g(this,"random");typeof e=="string"&&(e=Ne(e)),this.fixedSeed=e,this.instance=a,this.random=new be(e+Math.imul(124192293,a))}useSubcontext(e){return new ae(this.fixedSeed,124192293*e+this.instance)}}class be{constructor(e){g(this,"seed");const a=T=>Math.imul(1812433253,T)+1>>0,l=e>>0,F=a(l),r=a(F),t=a(r);this.seed=[l,F,r,t]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function Ne(s){const a=new TextEncoder().encode(s);let l=5381,F=a.length;for(;F>0;){let r=--F;l=(l<<5)+l+a[r]}return l>>0}function Ce(s,e,a){return new ae(a,s*1231231+e)}var X=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(X||{}),Y=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(Y||{});const we=re.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class Ie{constructor(e,a=0){g(this,"seed");g(this,"mapSize");g(this,"numTiles");g(this,"baseUpgradeChance");g(this,"OwnedAppliances");g(this,"Cards");g(this,"Theme");g(this,"cache",new Map);g(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=oe.Null,this.cacheDay=-1}getLayoutInfo(){const a=new ae(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,F;switch(a){case 0:F=70,l=2;break;case 4:F=84,l=2;break;case 1:case 5:F=60,l=1;break;case 2:case 6:F=9*13,l=3;break;case 3:case 7:F=12*16,l=4;break;default:throw new Error}return[l,F]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.UnlockGroup===X.PrimaryTheme&&(this.Theme=oe[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>re.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let F=0;F<e.length;F++){const r=e[F];let t=r.blueprintCount;a%5===0&&(t+=3,F===0&&(t+=2)),l+=t*(we-1+1),r.spawnInside||(l+=Ae(r.playerInside,this.numTiles)),l+=Me}return l}buildShopOptions(e,a,l){let F=[];for(const t of re)if(!(!t.IsPurchasable&&!t.IsPurchasableAsUpgrade)){var r=new Re(t);if(r.Staple==_.NonStaple||r.Staple==_.WhenMissing){if((r.Tags&Z.Basic)>Z.None)r.Staple=_.FixedStaple;else if(r.StapleWhenMissing){const c=r.Appliance.Name;c!="Research Desk"&&c!="Blueprint Cabinet"&&c!="Plates"&&console.log(`Unexpected ${r.Appliance.Name} StapleWhenMissing Appliance`),e.some(f=>f.ID===r.Appliance.ID)?r.Staple=_.NonStaple:r.Staple=_.WhenMissing}}const h=r.Appliance;if(h.SellOnlyAsDuplicate)e.some(c=>c.ID===h.ID)||(r.IsRemoved=!0);else if(h.RequiresForShop.length>0){let c=!1;for(const f of h.RequiresForShop)e.some(S=>S.ID===f)&&(c=!0);r.IsRemoved=!c}else h.SellOnlyAsUnique&&(h.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${h.Name}, ${h.ID}`),e.some(c=>c.ID===h.ID)&&(r.IsRemoved=!0));(r.Appliance.Name==="Sink"||r.Appliance.Name==="Plates")&&l.every(c=>!c.isMain)&&(r.IsRemoved=!0),r.Filter==Te.RefreshableProvider&&(e.some(c=>c.AllowRefreshes)||(r.IsRemoved=!0)),r.DecorationRequired!=oe.Null&&r.DecorationRequired!=a&&(r.IsRemoved=!0),h.RequiresProcessForShop.length>0&&(h.RequiresProcessForShop.some(c=>l.some(f=>f.RequiredProcesses.includes(c)))||(r.IsRemoved=!0)),F.push(r)}return F}initRandom(e){return Ce(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,F=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let r=e[e.length-1].blueprintCount,t;if(a%5==0){l?r=10:r+=3,t=[];for(let f=0;f<r;f++)t[f]=Z.Decoration;if(l)for(const f of[1,2])t[t.length-f]=Z.SpecialEvent}else if(e.length>1){t=[];for(let f=0;f<r;f++)t[f]=me.DefaultShoppingTag}else{const f=me.DefaultShoppingTag,S=Math.max(1,r),C=Math.max(0,Math.min(F.filter(m=>m.Staple!==_.NonStaple&&!m.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),S)),N=Math.max(0,S-C);r=S,t=[];for(let m=0;m<C;m++)t[m]=Z.Basic;for(let m=C;m<C+N;m++)t[m]=f}const T=this.initRandom(a).random;let h=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(h)&&this.cache.get(h).length>=r)return this.cache.get(h).slice(0,r);const c=h;for(;h--;)T.value;{const f=[...F],S=[],C=this.getUpgradeChance(a),N=[];for(let m=0;m<r;m++){const O=t[m],L=T.valueFloat<C;De(f,T);for(let U=0;U<f.length;U++){const k=f[U];if(!k.IsRemoved&&!N.includes(k.Appliance)&&!!k.MatchesRequestTags(O)&&!(!L&&k.Staple==_.NonStaple&&k.SellAsUpgrade)){O!=Z.Decoration&&N.push(k.Appliance),S[m]=k.Appliance;break}}S[m]==null&&console.log(`Wasn't able to find a valid roll for blueprint ${m}`)}return this.cache.set(c,S),S}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function Ae(s,e){return s?e-2:e-1}var xe=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
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
`,Ee=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
1356267749,Salad,1,2087693779,1193867305:-712909563:380220741,True,False,0,-1,5\r
550743424,Pizza,1,2087693779:-1706154991:-523839730,925796718:-1963699221:-117339838:-712909563:380220741,True,False,0,0,5\r
367917843,Dumplings,1,1972879238:-523839730:2087693779,925796718:-484165118:-452101383:380220741,True,False,0,2,8\r
-1778969928,Burgers,1,1972879238,759552160:380220741:385684499,True,False,0,-2,3\r
1551533879,Turkey,1,-1706154991,-1506824829:380220741,True,False,0,1,5\r
-133939790,Pies,1,-1706154991:-523839730,925796718:-484165118:-266993023:380220741,True,False,0,1,8\r
1743900205,Fish,1,1972879238,-609358791:380220741:-1735137431,True,False,0,1,5\r
1626323920,Hot Dogs,1,1972879238,-1132411297:380220741:1799769627:-965827229,True,False,0,-1,5\r
-2075899,Breakfast,1,-523839730:-1706154991,380220741:925796718,True,False,0,0,5\r
-1653221873,Stir Fry,1,2087693779:1972879238,-452101383:-1573812073:380220741:-1201769154:314862254,True,False,0,1,10\r
16318784,Black Coffee,1,-1316622579,-1609758240,False,False,0,-2,1\r
1113735761,Cakes,0,-1706154991:-523839730:1972879238,-1723125645:961148621:925796718:-217313684:-2133205155:783588616,False,False,0,0,3\r
1764920765,Spaghetti,1,1972879238:2087693779,-182748008:-266993023:-957949759:380220741:-712909563,True,False,0,1,5\r
`;const he=xe.trim().split(`\r
`).filter(s=>s).map(s=>{var W,te;const[e,a,l,F,r,t,T,h,c,f,S,C]=s.split(","),N=Number(e),m=Number(l),O=F!=null&&F.length?F.split(":").map(D=>Number(D)):[],H=r.length?r.split(":").map(D=>Number(D)):[],L=t!=null&&t.length?(W=t==null?void 0:t.split(":"))==null?void 0:W.map(D=>Number(D)):[],U=T!=null&&T.length?(te=T==null?void 0:T.split(":"))==null?void 0:te.map(D=>Number(D)):[],k=h==="True",R=c==="True",J=Number(f),Q=Number(S),ne=Number(C);return{ID:N,Name:a,UnlockGroup:m,Requires:O,BlockedBy:H,RequiredProcesses:L,IngredientProviders:U,isMain:k,isStarterOrSide:R,DishType:J,CustomerMultiplier:Q,DishValue:ne}}),Oe=[...[{ID:447437163,Name:"Country",UnlockGroup:X.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Y.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:X.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Y.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:X.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Y.Null,CustomerMultiplier:0,DishValue:0},he.filter(s=>s.Name==="Community")[0],{ID:1766067755,Name:"Romantic",UnlockGroup:X.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Y.Null,CustomerMultiplier:0,DishValue:0},{ID:1958825350,Name:"Turbo",UnlockGroup:X.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Y.Null,CustomerMultiplier:0,DishValue:0}]].sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>he.filter(e=>e.Name===s)[0]),Ee.trim().split(`\r
`).filter(s=>s).map(s=>{var R,J;const[e,a,l,F,r,t,T,h,c,f]=s.split(","),S=Number(e),C=Number(l),N=F!=null&&F.length?(R=F==null?void 0:F.split(":"))==null?void 0:R.map(Q=>Number(Q)):[],m=r!=null&&r.length?(J=r==null?void 0:r.split(":"))==null?void 0:J.map(Q=>Number(Q)):[],O=t==="True",H=T==="True",L=Number(h),U=Number(c),k=Number(f);return{ID:S,Name:a,UnlockGroup:C,Requires:[],BlockedBy:[],RequiredProcesses:N,IngredientProviders:m,isMain:O,isStarterOrSide:H,DishType:L,CustomerMultiplier:U,DishValue:k}}).sort((s,e)=>s.Name<e.Name?-1:1);const He=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Ge=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],ue={};function de(s){return ue[s]===void 0&&(ue[s]=re.filter(e=>e.Name===s)[0]),ue[s]===void 0&&console.error(`Could not find ${s} appliance`),ue[s]}const qe=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function ge(s){let e=0;(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime);for(const a of Object.values(s.achieved))e+=s.cumulativeRerolls*2,e+=a.goalsPurchased+a.substitutesPurchased;return e}function fe(s,e){return(a,l)=>{const F=a.achieved[e],r=l.achieved[e],t=Math.min(F.goalsPurchased,s);let h=Math.min(r.goalsPurchased,s)-t;return h===0?F.goalsPurchased>=s||F.goalsPurchased+F.substitutesPurchased>=s&&r.goalsPurchased+r.substitutesPurchased>=s?F.substitutesPurchased-r.substitutesPurchased:r.substitutesPurchased-F.substitutesPurchased:h}}function $e(s,e,a,l,F=!0,r=Ge,t=()=>{}){let T={};const h=[],c=new Array(l.length).fill(0).map(()=>({})),f={};let S=0,C=0;const N={},m=e.some(d=>d.Name==="Turbo"),O=[];let H=[],L=0;for(const d of l){for(const u of d){const{goal:b,number:y,substitutes:M}=u;for(const n of M)f[n]=b;for(let n=0;n<=L;n++){if(c[n]===void 0)debugger;c[n][b]?c[n][b].number+=y:c[n][b]={...u}}for(let n=L+1;n<c.length;n++){if(c[n]===void 0)debugger;c[n][b]||(c[n][b]={...u,number:0})}C+=de(b).PurchaseCost*y*(m?.5:1)}try{h.push(JSON.parse(JSON.stringify(c[0])))}catch{console.log(c),console.log(c[0]);debugger}L++}const U=c[0];T=h.shift();for(const d of Object.values(U)){const{goal:u,number:b}=d;N[u]={...d,substitutesPurchased:0,goalsPurchased:0},O.push(fe(b,u)),H.push(fe(b,u))}const k=new x([],[...O,(d,u)=>ge(d)-ge(u),(d,u)=>d.actionHistory.length-u.actionHistory.length,(d,u)=>d.cumulativeRerolls-u.cumulativeRerolls,(d,u)=>(d.day+1)%5?d.upgradesInProgress-u.upgradesInProgress:0]),R=m?7:5,J=[{spawnInside:!0,blueprintCount:R},{spawnInside:!1,playerInside:!1,blueprintCount:R}];F||J.push({spawnInside:!1,playerInside:!0,blueprintCount:R});const Q=[{spawnInside:!0,blueprintCount:R},{spawnInside:!1,playerInside:!0,blueprintCount:R},{spawnInside:!1,playerInside:!1,blueprintCount:R}];function ne(d,u,b){const y={...d};for(const M of Object.values(u)){const n=M.goal;y[n]={...y[n]},y[n].goalsPurchased+=M.goalsPurchased,b&&(y[n].substitutesPurchased+=M.substitutesPurchased)}return y}let W=[];function te(d,u,b,y=!1){const M=u.fodderUsed;for(const n of d){let V=1+n.achieved["Copying Desk"].goalsPurchased;const ee=1+n.achieved["Blueprint Cabinet"].goalsPurchased;let i=ee;if(i*=V,i-=n.upgradesInProgress,i<0||i<M)continue;let p=n.cumulativeRerolls+u.cumulativeRerolls,o=p*(p+1)/2*10+n.applianceCosts;const se=ne(n.achieved,u.achieved,!1),I=ne(n.achieved,u.achieved,!0),j=ze(T,se);if(G<=0&&j>0||o>q)continue;let $=0,B=0,le=0;{let Fe=q-o;for(const P of Object.values(u.achieved)){Fe-=P.goalsPurchased*de(P.goal).PurchaseCost*(m?.5:1);let ye=!1;(Fe<0||P.substitutesPurchased)&&(ye=!0,$++,le+=P.substitutesPurchased),P.goal==="Metal Table"&&P.goalsPurchased&&I["Copying Desk"].goalsPurchased&&(ye||B++,B++,le++)}if($>I["Blueprint Cabinet"].goalsPurchased+1)continue}o+=u.applianceCosts;const A=n.deskTime+Math.max(0,M-ee)*5*(n.achieved["Clipboard Stand"].goalsPurchased?.5:1)+(le*5+He[u.day])*(I["Clipboard Stand"].goalsPurchased?.5:1),E={...u,rerollConfigs:[...n.rerollConfigs,u.rerollConfigs],achieved:I,money:q-o,actionHistory:[...n.actionHistory,...u.actionHistory],upgradesInProgress:$,cumulativeRerolls:n.cumulativeRerolls+u.cumulativeRerolls,applianceCosts:n.applianceCosts+u.applianceCosts,deskTime:A};if(!($>I["Blueprint Cabinet"].goalsPurchased+1)){if(B&&(B===1||$+1<=I["Blueprint Cabinet"].goalsPurchased+1)&&(E.upgradesInProgress+=B,I["Metal Table"].goalsPurchased++,E.actionHistory.push("Copy Metal Table"),E.applianceCosts+=30),E.money>=0){if(j<G&&(G=j,console.log(`best so far missing ${j} pieces `+pe(E))),j<=0){k.add(E);continue}else if(G<=0)continue}if(i>S&&(S=i),y){const Fe=n.cumulativeRerolls;for(let P=0;P<=i;P++)W[P]===void 0&&(W[P]=new x([],qe)),W[P].add([Fe,o]);continue}b.add(E)}}return G}const D=new x([{achieved:{...N},actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:0,day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...O,(d,u)=>d.applianceCosts-u.applianceCosts,(d,u)=>d.cumulativeRerolls-u.cumulativeRerolls]);let G=1/0,v=0,q=m?30:0;const w=new Ie(s),ce=["Research Desk"];let ie=[];{const d=["Booking Desk","Blueprint Cabinet"];re.filter(u=>d.includes(u.Name)).forEach(u=>w.OwnedAppliances.push(u))}for(const d of e)w.addCard(d);function Ve(d,u){let b=[{...d}];for(const y of u){let M=y.Name,n=d.achieved[y.Name],V=!1;if(!n){if(n=d.achieved[f[y.Name]],!n)continue;V=!0,M=f[y.Name]}n.goalsPurchased>=c[0][M].number||V&&n.goalsPurchased+n.substitutesPurchased>=c[0][M].number||(b=b.concat(b.map(ee=>{const i={...ee};return i.achieved={...i.achieved},i.numFloor--,i.achieved[n.goal]={...n,goalsPurchased:n.goalsPurchased+(V?0:1),substitutesPurchased:n.substitutesPurchased+(V?1:0)},i.applianceCosts+=de(M).PurchaseCost*(m?.5:1),i.actionHistory=[...i.actionHistory,`buy ${y.Name}`+(V?` for ${n.goal}`:"")],i})))}return b}for(;G;){const d=D.array;D.clear();const u=new x([],[...H,(i,p)=>i.cumulativeRerolls-p.cumulativeRerolls,(i,p)=>i.applianceCosts-p.applianceCosts]);if(q+=r[v],v++,v>14)break;if(v>1&&d.length===0){debugger;break}let b=4;const y=Math.min(b-1,2);if(q>=C){const i=Math.sqrt((q-C)/10*2);console.log(`Have ${q} on day ${v}, need ${C} to buy everything. Allows for ~${i} rerolls across all days`)}v%5||(b=1);const M=w.getAppliances([{spawnInside:!0,blueprintCount:R}],v);if(ce.length){for(let i=ce.length-1;i>=0;i--)for(const p of M)if(p.Name===ce[i]){console.log(`buying ${p.Name} on day ${v}`),ie.push(p),ce.splice(i,1),q-=p.PurchaseCost*(m?.5:1);break}}let n=new x([{day:v,rerollConfigs:[],achieved:{...N},numFloor:R,fodderAvailable:S,fodderUsed:0,money:q,actionHistory:[],applianceCosts:0,cumulativeRerolls:0}],[(i,p)=>w.getPrngAdvancements(i.rerollConfigs,v)-w.getPrngAdvancements(p.rerollConfigs,v),(i,p)=>-w.getPrngAdvancements(i.rerollConfigs,v)+w.getPrngAdvancements(p.rerollConfigs,v),...H,(i,p)=>i.cumulativeRerolls-p.cumulativeRerolls,(i,p)=>i.applianceCosts-p.applianceCosts,(i,p)=>p.numFloor+p.fodderAvailable-i.numFloor+i.fodderAvailable,(i,p)=>i.numFloor-p.numFloor]);const V=a.shift(),ee=he.filter(i=>i.Name===V)[0];for(w.handleNewCardSpawnEffects(ee),te(d,n.array[0],D,!0);b--&&n.array[0]!==void 0;){const i=W.map(o=>o.array.reduce((se,[I,j])=>Math.min(se,j+n.array[0].rerollConfigs.length*(I+1)*10),1/0));console.log(`Seed ${s} Day ${v} Reroll ${n.array[0].rerollConfigs.length} expanding ${n.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:i});const p=n.array;if(!h.length&&G<=0){const o=p[0].rerollConfigs.length;if(o*((o+1)/2)*10+C>q){console.log("get me outta here!");break}}n.clear();for(const o of p){if(o.numFloor+o.fodderAvailable===0||o.money<o.rerollConfigs.length*10)continue;let se=0;if(i[0]>o.money)continue;for(let B=1;B<i.length;B++)if(se++,i[B]>o.money){se=B-1;break}let I=y<o.rerollConfigs.length?o.numFloor:o.rerollConfigs.length?o.numFloor+Math.min(o.fodderAvailable,se-o.fodderUsed):R;const j=y<o.rerollConfigs.length?o.numFloor:o.rerollConfigs.length?Math.max(1,o.numFloor):R;let $;o.rerollConfigs.length===0?$=Q:y<o.rerollConfigs.length?$=[o.rerollConfigs.at(-1)]:$=J,ie.length&&o.rerollConfigs.length===1&&(w.OwnedAppliances.push(...ie),ie=[]),w.getAppliances([...o.rerollConfigs,{spawnInside:!0,blueprintCount:I}],o.day),$.forEach(B=>{let le=[];for(let A=j;A<=I;A++){const E=[...o.rerollConfigs,{...B,blueprintCount:A}],Fe=w.getAppliances(E,o.day),P=A-o.numFloor;if(P>o.fodderAvailable)debugger;le.push(...Ve({...o,money:o.money-o.rerollConfigs.length*10,rerollConfigs:E,numFloor:E.length===1?A-ie.length:A,fodderAvailable:o.fodderAvailable-P,fodderUsed:o.fodderUsed+P,cumulativeRerolls:o.rerollConfigs.length?o.cumulativeRerolls+1:0,actionHistory:o.rerollConfigs.length?[...o.actionHistory,`${P?`take ${P} out, `:""}reroll ${B.spawnInside?"I":B.playerInside?"OI":"OO"}`]:[`day ${o.day} spawn`,`spawn ${B.spawnInside?"I":B.playerInside?"OI":"OO"}`]},Fe))}for(const A of le)n.add(A)&&u.add(A)&&te(d,A,D)})}}if(w.addCard(ee),G<=0){if(!h.length){t((G<=0?`full build on ${s} by day ${v}: 
`:"")+k.array.map(i=>pe(i)).join(`
`));break}T=h.shift(),c.shift(),H=[];for(const{goal:i,number:p}of Object.values(c[0]))H.push(fe(p,i));G=1/0,W=[],t(`tier ${l.length-h.length-1} build on ${s} by day ${v}: 
`+k.array.map(i=>pe(i)).join(`
`)),D.array=k.array,k.clear(),k.objectiveFunctions}else debugger}return v}function ze(s,e){let a=0;for(const l of Object.values(s)){if(l.goal==="Blueprint Cabinet"||l.goal==="Copying Desk")continue;let F=l.number;a+=Math.max(0,F-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased)}return a}function pe(s){return`${s.day}: ${ge(s)} ${s.money} (${s.rerollConfigs.length-1}) ${s.cumulativeRerolls}, `+s.actionHistory.join(", ")}class Le{constructor(e,a=[],l=[]){g(this,"seed");g(this,"mapSize");g(this,"frontDoor");g(this,"startingCards");g(this,"cards");g(this,"playerCount");g(this,"turbo");g(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=this.mapSize,this.turbo=this.startingCards.some(F=>F.Name==="Turbo")}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCustomerCount(e),l=this.startingCards.reduce((F,r)=>F+r.DishValue,0);if(Number.isNaN(a))debugger;if(Number.isNaN(l))debugger;return a*l+this.getBookingDeskCount(e)*this.getBookingDeskMoney(e)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:a=Math.max(0,Math.floor((e-1)/3)),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e){return Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e))}getGroupCount(e){return Math.ceil(this.getExpectedCustomers(e)*(1+this.getCardsByDay(e).filter(a=>a.Name==="Closing Time").length*.2)/this.getExpectedGroupSize(e))}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=Ce(1997821,e,this.seed).random,l=this.getGroupCount(e),F=this.getCardsByDay(e).some(C=>C.Name==="Herd Mentality");let r=l,t=[],[T,h]=this.getGroupSizeRange(e);{let C=r-1;for(;C--;)a.value}for(;r--;)t.push(a.range(T,h+1)),(F||r!==l)&&a.value;let c=this.turbo?3:this.getCardsByDay(e).filter(C=>C.Name.includes(" Rush")).length;const f=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let S=c*f;for(;S--;)t.push(a.range(T,h+1));return t}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const F of this.getCardsByDay(e))switch(F.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),F=this.getPlayerModifier(),r=this.getCourseModifier(e),t=this.getDayRate(e),T=this.turbo?1.5*(1+.1*e):1,h=this.getAdvertisingModifier(e);return .85**a*(l/25*this.getCustomersPerHour(e)*t*F)/r*T*h}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(F=>F.DishType===Y.Dessert)&&(a+=.25),l.some(F=>F.DishType===Y.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1.5;return this.turbo&&(a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,F)=>l+F.CustomerMultiplier,0)}getMapSize(){const a=new ae(this.seed,5078598).useSubcontext(0).random.range(0,4);let l;switch(a){case 0:l=2;break;case 1:l=1;break;case 2:l=3;break;case 3:l=4;break;default:throw new Error}return l}getDoorInfo(){if(this.mapSize!==1)return-1;let e=new be(new ae(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}var Se=self;function Ue(s){console.log(`reporting - ${s}`),Se.postMessage(s)}const We=[{goal:"Copying Desk",number:1,substitutes:[]},{goal:"Blueprint Cabinet",number:8,substitutes:[]},{goal:"Clipboard Stand",number:1,substitutes:[]}];Se.onmessage=function(s){const{config:e,tiers:a}=s.data;a.splice(-1,1,We);const l=[e.cards[0]];e.blueprintCount===7&&l.push(Oe.filter(t=>t.Name==="Turbo")[0]);let F=[],r=new Le(e.seed,l,e.cards.slice(1));for(let t=1;t<=15;t++)F.push(r.guessMoney(t));console.log({expectedMoneyByDay:F}),$e(e.seed,l,e.cards.slice(1).map(t=>t.Name),a,e.solo,F,Ue)}})();
