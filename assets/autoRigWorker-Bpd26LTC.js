var xs=Object.defineProperty;var Es=(Q,Fe,ge)=>Fe in Q?xs(Q,Fe,{enumerable:!0,configurable:!0,writable:!0,value:ge}):Q[Fe]=ge;var D=(Q,Fe,ge)=>Es(Q,typeof Fe!="symbol"?Fe+"":Fe,ge);(function(){"use strict";class Q{constructor(e,a){D(this,"array");D(this,"objectiveFunctions");this.array=Fe(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:r}=ge(e,this.array[a],this.objectiveFunctions);if(r)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function Fe(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const r=a.pop();let t=l.length;for(;t--;){let{better:F,worse:h}=ge(r,l[t],e);if(h)continue e;F&&l.splice(t,1)}l.push(r)}return l}function ge(s,e,a){let l=!0,r=!0,t=0;for(;(l||r)&&t<a.length;){const F=a[t](s,e);F<0?r=!1:F>0&&(l=!1),t++}return{better:l,worse:r}}var as=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
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
1436010410,False,False,,False,False,,,0,0,0,False,False,20\r
-400359294,False,False,,False,False,,,0,0,0,False,False,20\r
-1082709460,False,False,,False,False,,,0,0,0,False,False,20\r
-307800946,False,False,,False,False,,,0,0,0,False,False,20\r
2095304286,False,False,,False,False,,,0,0,0,False,False,20\r
585649337,False,False,,False,False,,,0,0,0,False,False,20\r
-364231730,False,False,,False,False,,,0,0,0,False,False,60\r
-121110359,False,False,,False,False,,,0,0,0,False,False,60\r
-940358190,True,False,Leftover Bags,False,False,,,8,0,0,False,True,60\r
-2070005162,True,False,Clipboard Stand,False,False,,,256,0,0,False,False,60\r
745886540,True,False,Taco Trays,True,False,,,32,0,0,False,False,60\r
-5840756,True,False,Tortillas,True,False,,,32,0,0,False,False,60\r
-872135723,False,False,,False,False,,,0,0,0,False,False,60\r
-1879606524,False,False,,False,False,,,0,0,0,False,False,60\r
-26827118,False,False,Upgrade Kit,False,False,,,0,0,0,False,False,60\r
`;const ls=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],rs=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],ue=as.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let r;switch(rs[l]){case"number":r=Number(e[l]);break;case"boolean":r=e[l]==="True";break;case"number[]":e[l]===""?r=[]:r=e[l].split(":").map(t=>Number(t));break;default:r=e[l]}a[ls[l]]=r}return a});class Fs{constructor(e){D(this,"Staple");D(this,"Tags");D(this,"StapleWhenMissing");D(this,"Appliance");D(this,"IsRemoved");D(this,"Filter");D(this,"DecorationRequired");D(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var te=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(te||{}),pe=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(pe||{});const qe={DefaultShoppingTag:892};var Ve=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(Ve||{}),Ne=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(Ne||{}),ts="38";const ns=Number(ts);function os(s,e){return Math.floor(Math.random()*(e-s))+s}function is(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?os(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}const us="12345678",cs="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of cs);for(const s of us);function ne(s){return s.length?s.reduce((e,a)=>e+a,0)/s.length:0}class me{constructor(e,a){D(this,"fixedSeed");D(this,"instance");D(this,"random");typeof e=="string"&&(e=hs(e)),this.fixedSeed=e,this.instance=a,this.random=new xe(e+Math.imul(124192293,a))}useSubcontext(e){return new me(this.fixedSeed,124192293*e+this.instance)}}class xe{constructor(e){D(this,"seed");const a=h=>Math.imul(1812433253,h)+1>>0,l=e>>0,r=a(l),t=a(r),F=a(t);this.seed=[l,r,t,F]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function hs(s){const a=new TextEncoder().encode(s);let l=5381,r=a.length;for(;r--;)l=(l<<5)+l+a[r];return l>>0}function Le(s,e,a){return new me(a,s*1231231+e)}var ke=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(ke||{}),v=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(v||{});const fs=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater"],$e={};for(const s of fs)$e[s]=!0;const ds=ue.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class gs{constructor(e,a=0){D(this,"seed");D(this,"mapSize");D(this,"numTiles");D(this,"baseUpgradeChance");D(this,"OwnedAppliances");D(this,"Cards");D(this,"Theme");D(this,"cache",new Map);D(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=Ne.Null,this.cacheDay=-1}getLayoutInfo(){const a=new me(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.UnlockGroup===ke.PrimaryTheme&&(this.Theme=Ne[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>ue.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let r=0;r<e.length;r++){const t=e[r];let F=t.blueprintCount;a%5===0&&(F+=3,r===0&&(F+=2)),l+=F*(ds-1+1),t.spawnInside||(l+=ps(t.playerInside,this.numTiles)),l+=ns}return l}buildShopOptions(e,a,l){const r=l.some(h=>h.Name==="Couples");let t=[];for(const h of ue)if(!(!h.IsPurchasable&&!h.IsPurchasableAsUpgrade)){var F=new Fs(h);const f=F.Appliance.Name;(F.Staple==te.NonStaple||F.Staple==te.WhenMissing)&&((F.Tags&pe.Basic)>pe.None?F.Staple=te.FixedStaple:F.StapleWhenMissing?(f!="Research Desk"&&f!="Blueprint Cabinet"&&f!="Plates"&&console.log(`Unexpected ${f} StapleWhenMissing Appliance`),e.some(u=>u.ID===F.Appliance.ID)?F.Staple=te.NonStaple:F.Staple=te.WhenMissing):r&&f==="Flower Pot"&&(F.Staple=te.BonusStaple));const n=F.Appliance;if(n.SellOnlyAsDuplicate)e.some(u=>u.ID===n.ID)||(F.IsRemoved=!0);else if(n.RequiresForShop.length>0){let u=!1;for(const d of n.RequiresForShop)e.some(S=>S.ID===d)&&(u=!0);F.IsRemoved=!u}else n.SellOnlyAsUnique&&(n.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${n.Name}, ${n.ID}`),e.some(u=>u.ID===n.ID)&&(F.IsRemoved=!0));$e[f]&&l.every(u=>!u.isMain||u.Name==="Tacos")&&(F.IsRemoved=!0),F.Filter==Ve.RefreshableProvider&&(e.some(u=>u.AllowRefreshes)||(F.IsRemoved=!0)),F.DecorationRequired!=Ne.Null&&F.DecorationRequired!=a&&(F.IsRemoved=!0),n.RequiresProcessForShop.length>0&&(n.RequiresProcessForShop.some(u=>l.some(d=>d.RequiredProcesses.includes(u)))||(F.IsRemoved=!0)),t.push(F)}return t}initRandom(e){return Le(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,r=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let t=e[e.length-1].blueprintCount,F;if(a%5==0){l?t=10:t+=3,F=[];for(let n=0;n<t;n++)F[n]=pe.Decoration;if(l)for(const n of[1,2])F[F.length-n]=pe.SpecialEvent}else if(e.length>1){F=[];for(let n=0;n<t;n++)F[n]=qe.DefaultShoppingTag}else{const n=qe.DefaultShoppingTag,u=Math.max(1,t),d=Math.max(0,Math.min(r.filter(c=>c.Staple!==te.NonStaple&&!c.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),u)),S=Math.max(0,u-d);t=u,F=[];for(let c=0;c<d;c++)F[c]=pe.Basic;for(let c=d;c<d+S;c++)F[c]=n}const h=this.initRandom(a).random;let i=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(i)&&this.cache.get(i).length>=t)return this.cache.get(i).slice(0,t);const f=i;for(;i--;)h.value;{const n=[...r],u=[],d=this.getUpgradeChance(a),S=[];for(let c=0;c<t;c++){const C=F[c],B=h.valueFloat<d;is(n,h);for(let q=0;q<n.length;q++){const H=n[q];if(H.IsRemoved||S.includes(H.Appliance)||!H.MatchesRequestTags(C)||!B&&H.Staple==te.NonStaple&&H.SellAsUpgrade)continue;C!=pe.Decoration&&S.push(H.Appliance),u[c]=H.Appliance;break}u[c]==null}return this.cache.set(f,u),u}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function ps(s,e){return s?e-2:e-1}var ms=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
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
`,bs=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
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
`;const ye=ms.trim().split(`\r
`).filter(s=>s).map(s=>{var U,be;const[e,a,l,r,t,F,h,i,f,n,u,d]=s.split(","),S=Number(e),c=Number(l),C=r!=null&&r.length?r.split(":").map(X=>Number(X)):[],m=t.length?t.split(":").map(X=>Number(X)):[],B=F!=null&&F.length?(U=F==null?void 0:F.split(":"))==null?void 0:U.map(X=>Number(X)):[],q=h!=null&&h.length?(be=h==null?void 0:h.split(":"))==null?void 0:be.map(X=>Number(X)):[],H=i==="True",$=f==="True",P=Number(n),Z=Number(u),j=Number(d);return{ID:S,Name:a,UnlockGroup:c,Requires:C,BlockedBy:m,RequiredProcesses:B,IngredientProviders:q,isMain:H,isStarterOrSide:$,DishType:P,CustomerMultiplier:Z,DishValue:j}}),Ue=[...[{ID:447437163,Name:"Country",UnlockGroup:ke.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:ke.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:ke.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},ye.filter(s=>s.Name==="Community")[0],ye.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:ke.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:v.Null,CustomerMultiplier:0,DishValue:0},ye.filter(s=>s.Name==="Christmas Rush")[0]]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>ye.filter(e=>e.Name===s)[0]);const Ts=bs.trim().split(`\r
`).filter(s=>s).map(s=>{var $,P;const[e,a,l,r,t,F,h,i,f,n]=s.split(","),u=Number(e),d=Number(l),S=r!=null&&r.length?($=r==null?void 0:r.split(":"))==null?void 0:$.map(Z=>Number(Z)):[],c=t!=null&&t.length?(P=t==null?void 0:t.split(":"))==null?void 0:P.map(Z=>Number(Z)):[],C=F==="True",m=h==="True",B=Number(i),q=Number(f),H=Number(n);return{ID:u,Name:a,UnlockGroup:d,Requires:[],BlockedBy:[],RequiredProcesses:S,IngredientProviders:c,isMain:C,isStarterOrSide:m,DishType:B,CustomerMultiplier:q,DishValue:H}}).sort((s,e)=>s.Name<e.Name?-1:1),Ee={};for(const s of ye)Ee[s.Name]=s;for(const s of Ts)Ee[s.Name]=s;for(const s of Ue)Ee[s.Name]=s;const Cs=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Ss=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],we={};function ce(s){if(we[s]===void 0&&(we[s]=ue.filter(e=>e.Name===s)[0]),we[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return we[s]}const ks=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function De(s){let e=0;(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime);for(const a of Object.values(s.achieved))e+=s.cumulativeRerolls*2,e+=s.actionHistory.filter(l=>l==="spawn OI"||l==="spawn OO").length*3,e+=s.actionHistory.reduce((l,r)=>{var t;return r.includes("take ")?l+3+Number((t=r.match(/(\d+)/))==null?void 0:t[0]):l},0),e+=a.goalsPurchased+a.substitutesPurchased;return e}function Oe(s,e){return(a,l)=>{const r=a.achieved[e],t=l.achieved[e],F=Math.min(r.goalsPurchased,s);let i=Math.min(t.goalsPurchased,s)-F;return i===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&t.goalsPurchased+t.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(t.goalsPurchased+t.substitutesPurchased):t.substitutesPurchased-r.substitutesPurchased:i}}const We={"Copying Desk":3,"Metal Table":4,"Power Sink":4,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":2,"Safety Hob":2,"Grabber - Rotating":2,"Smart Grabber":2};function ys(s,e,a,l,r=!0,t=Ss,F=Cs,h=()=>{}){var Qe,Ze,Xe,es;let i={},f=[];const n=[],u=new Array(l.length).fill(0).map(()=>({})),d={};let S=0,c=0;const C={},m=e.some(b=>b.Name==="Turbo"),B=[];let q=[],H=0;const $={};for(const b of l){for(const g of b){const{goal:M,number:E,substitutes:z,skipMissing:w=!1}=g;for(const N of z)d[N]||(d[N]=[]),d[N].push(M),N==="Flower Pot"&&console.log({substitutesToGoalMap:d});$[M]?w||($[M].number+=E):($[M]={...g},w&&($[M].number=0));for(let N=0;N<=H;N++){if(u[N]===void 0)debugger;u[N][M]?u[N][M].number+=E:u[N][M]={...g}}for(let N=H+1;N<u.length;N++){if(u[N]===void 0)debugger;u[N][M]||(u[N][M]={...g,number:0})}w||(c+=ce(M).PurchaseCost*E*(m?.5:1))}try{n.push(JSON.parse(JSON.stringify($)))}catch{console.log(u),console.log(u[0]);debugger}H++}const P=u[0],Z=Object.values(P).sort((b,g)=>ce(b.goal).PurchaseCost-ce(g.goal).PurchaseCost).map(b=>b.goal);i=n.shift();for(const b of Object.values(P)){const{goal:g,number:M}=b;C[g]={...b,substitutesPurchased:0,goalsPurchased:0},b.goal!=="Starter Bin"&&(B.push(Oe(M,g)),q.push(Oe(M,g)))}const j=new Q([],[...B,(b,g)=>g.money-b.money,(b,g)=>De(b)-De(g),(b,g)=>b.actionHistory.length-g.actionHistory.length,(b,g)=>b.cumulativeRerolls-g.cumulativeRerolls,(b,g)=>(b.day+1)%5?b.upgradesInProgress-g.upgradesInProgress:0]),U=m?7:5,be=[{spawnInside:!0,blueprintCount:U},{spawnInside:!1,playerInside:!1,blueprintCount:U}];r||be.push({spawnInside:!1,playerInside:!0,blueprintCount:U});const X=[{spawnInside:!0,blueprintCount:U},{spawnInside:!1,playerInside:!0,blueprintCount:U},{spawnInside:!1,playerInside:!1,blueprintCount:U}];function y(b,g,M){const E={...b};for(const z of Object.values(g)){const w=z.goal;E[w]={...E[w]},w==="Copying Desk"&&(E[w].goalsPurchased+=E[w].substitutesPurchased,E[w].substitutesPurchased=0),E[w].goalsPurchased+=z.goalsPurchased,M&&(E[w].substitutesPurchased+=z.substitutesPurchased)}return E}let I=[];function Me(b,g,M,E=!1){var ae,Y,k,O,G,p,o;const z=g.fodderUsed,w=Object.values(g.achieved).some(T=>T.substitutesPurchased)&&!((ae=g.achieved["Research Desk"])!=null&&ae.goalsPurchased),N=g.actionHistory.at(-1)==="buy Blueprint Cabinet"&&((Y=g.actionHistory.at(-2))!=null&&Y.includes("reroll"))?1:0;e:for(const T of b){if(w&&!Ye&&!((k=T.achieved["Research Desk"])!=null&&k.goalsPurchased))continue;let R=1+(T.achieved["Copying Desk"].goalsPurchased?1:0);const ee=Math.floor(Math.max(0,T.achieved["Blueprint Cabinet"].goalsPurchased-f.length));let W=ee;if(W-=T.upgradesInProgress,W*=R,W<0||W<z)continue;let V=T.cumulativeRerolls+g.cumulativeRerolls,le=V*(V+1)/2*10+T.applianceCosts;const Pe=g.actionHistory.length?y(T.achieved,g.achieved,!1):T.achieved,A=g.actionHistory.length?y(T.achieved,g.achieved,!0):T.achieved,se=Ps(i,Pe);if(J<=0&&se>0||g.cumulativeRerolls&&le>_)continue;let he=0,oe=0,fe=[],Se=0,Be=1;const Re=A["Blueprint Cabinet"].goalsPurchased-f.length-N,Ge=(((O=T.achieved["Discount Desk"])==null?void 0:O.goalsPurchased)??0)+(((G=T.achieved["Discount Desk"])==null?void 0:G.substitutesPurchased)??0)?.5:1;{let ie=_-le;for(const re of Z){const L=g.achieved[re];ie-=L.goalsPurchased*ce(L.goal).PurchaseCost*(m?.5:1)*Ge;let ss=!1;(ie<0||L.substitutesPurchased)&&(L.goal==="Copying Desk"&&oe&&(oe=0,Se--),ss=!0,ie<0&&(he+=L.goalsPurchased),he+=L.substitutesPurchased,L.substitutesPurchased&&(Se++,We[L.goal]&&(Be*=We[L.goal]))),(L.goal==="Metal Table"||L.goal==="Grabber - Rotating"||L.goal==="Portioner"||L.goal==="Grabber")&&L.goalsPurchased+L.substitutesPurchased&&A[re].goalsPurchased+A[re].substitutesPurchased<A[re].number&&(T.achieved["Copying Desk"].goalsPurchased||A["Copying Desk"].goalsPurchased&&ie>60)&&(ss||oe++,oe++,fe.push(L.goal),Se++)}if(he>Re)continue e}le+=g.applianceCosts*Ge;const As=T.deskTime+(Be-1)*20+Math.max(0,z-ee)*5*((p=T.achieved["Clipboard Stand"])!=null&&p.goalsPurchased?.5:1)+(Se*Be*5+(F[g.day]??F.at(-1)??0))*((o=A["Clipboard Stand"])!=null&&o.goalsPurchased?.5:1),de={...g,rerollConfigs:[...T.rerollConfigs,g.rerollConfigs],achieved:A,money:_-le,actionHistory:[...T.actionHistory,...g.actionHistory],upgradesInProgress:he,cumulativeRerolls:T.cumulativeRerolls+g.cumulativeRerolls,applianceCosts:T.applianceCosts+g.applianceCosts*Ge,deskTime:As};if(!(he>Re)){if(oe&&(oe===1||he+1<=Re))for(const ie of fe)de.upgradesInProgress+=oe,A[ie].goalsPurchased++,de.actionHistory.push(`copy ${ie}`),de.applianceCosts+=30;if(de.money>=0&&(!de.upgradesInProgress||n.length)){if(se<J&&(J=se,console.log(`best so far missing ${se} pieces `+Ie(de,_))),se<=0){if(j.add(de)){if(Je(),j.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(J<=0)continue}if(W>S&&(S=W),E){const ie=T.cumulativeRerolls;for(let re=0;re<=W;re++)I[re]===void 0&&(I[re]=new Q([],ks)),I[re].add([ie,le]);continue}M.add(de)}}return J}const ve={...C};ve["Blueprint Cabinet"]={...ve["Blueprint Cabinet"],goalsPurchased:1};const Te=new Q([{achieved:ve,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:0,day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...B,(b,g)=>b.applianceCosts-g.applianceCosts,(b,g)=>b.cumulativeRerolls-g.cumulativeRerolls]);let J=1/0,x=0,_=0;const K=new gs(s),Ae=["Research Desk"];let Ye=!1,Ce=[];{const b=["Booking Desk","Blueprint Cabinet"];ue.filter(g=>b.includes(g.Name)).forEach(g=>K.OwnedAppliances.push(g))}for(const b of e)K.addCard(b);function Is(b,g,M){var ae;let E=[{...b}],z=[],w=[];const N=JSON.parse(JSON.stringify(b.achieved));for(const Y of g){let k=Y.Name,O=N[k],G=!1,p=O&&x>3&&O.goal==="Research Desk";if(!O||O.goalsPurchased>=(((ae=u[0][k])==null?void 0:ae.number)??0)||p){const o=d[Y.Name],T=o&&Y.Name==="Research Desk"?x>6?"Copying Desk":"Discount Desk":o==null?void 0:o[Math.floor(Math.random()*o.length)];if(O=N[T],!O)continue;G=!0,k=T}if(G&&O.goalsPurchased+O.substitutesPurchased>=u[0][k].number&&(O=N["Starter Bin"],k="Starter Bin"),!O)debugger;if(O.goalsPurchased>=(u[0][k]?u[0][k].number:9)){O=N["Starter Bin"],k="Starter Bin",G=!0;continue}k==="Table - Fancy Cloth"&&(G=!1),Y.ThemeRequired&&(G=!1),G?O.substitutesPurchased++:O.goalsPurchased++;{const o=T=>{const R={...T};if(R.achieved={...R.achieved},R.numFloor--,R.achieved[k])R.achieved[k]={...R.achieved[k],goalsPurchased:R.achieved[k].goalsPurchased+(G?0:1),substitutesPurchased:R.achieved[k].substitutesPurchased+(G?1:0)};else if(R.achieved[k]={...O,goalsPurchased:G?0:1,substitutesPurchased:G?1:0},Number.isNaN(R.achieved[k].goalsPurchased))debugger;const ee=k==="Starter Bin"||k==="Table - Fancy Cloth"?ce(Y.Name).PurchaseCost:Math.max(ce(Y.Name).PurchaseCost,ce(k).PurchaseCost);return R.applianceCosts+=ee*(m?.5:1),R.actionHistory=[...R.actionHistory,`buy ${Y.Name}`+(G?` for ${k}`:"")],k==="Starter Bin"&&(R.fodderPurchases=[...R.fodderPurchases],R.fodderPurchases[1]++,R.achieved[k].substitutesPurchased--),R};if(k!=="Starter Bin"){const T=E.map(o),R=z.map(o),ee=w.map(o);E=T.concat(E),z=R.concat(z),w=ee.concat(w),T.forEach(M)}else z=z.concat(w),w=(w.length?w:E).map(o)}}return E.concat(z).concat(w)}for(;J;){let b=Te.array;if(!b.length)return h("No Solutions"),0;Te.clear();const g=new Q([],[...q,(p,o)=>p.cumulativeRerolls-o.cumulativeRerolls,(p,o)=>p.applianceCosts-o.applianceCosts]);if(_+=t[x]??t.at(-1)??0,x++,x>14&&(m||!a.length)){debugger;break}if(x>1&&b.length===0){debugger;break}b.sort((p,o)=>De(p)-De(o)),console.log(`fastest so far: ${Ie(b[0],_)}`),b.every(p=>p.achieved["Copying Desk"].goalsPurchased)&&(f=f.map(p=>p-1),f=f.filter(p=>p>0));let M=4;switch(x){case 99:case 3:M=3;break;case 999:case 1:case 2:case 4:M=4;break;case 9999:M=5;break;case 99999:M=6;break;case 6:default:M=6;break}let E=.5*60*1e3;const z=Math.min(M-1,1/0);if(_>=c){const p=Math.sqrt((_-c)/10*2);console.log(`Have ${_} on day ${x}, need ${c} to buy everything. Allows for ~${p} rerolls across all days`)}x%5||(M=1);let w;(m||x===5||!(x%3))&&(w=a.shift());const N=ye.filter(p=>p.Name===w)[0];K.handleNewCardSpawnEffects(N);const ae=K.getAppliances([{spawnInside:!0,blueprintCount:U}],x);K.handleNewCardRerollEffects(N);let Y=[];if(Ae.length)for(let p=Ae.length-1;p>=0;p--){let o=ae.length;for(;o--;){const T=ae[o];if(T.Name===Ae[p]){if(console.log(`buying ${T.Name} on day ${x}`),_-b.reduce((ee,W)=>Math.min(ee,W.applianceCosts+10/2*(W.cumulativeRerolls+1)*W.cumulativeRerolls),1/0)<T.PurchaseCost*(m?.5:1)){console.log("not enough money-- skip for now");continue}Ce.push(T),Ae.splice(p,1),_-=T.PurchaseCost*(m?.5:1),ae.splice(o,1);break}}Y=Ce.map(T=>`Buy ${T.Name}`)}let k=new Q([{day:x,rerollConfigs:[],achieved:{...C},numFloor:U,fodderAvailable:S,fodderUsed:0,money:_,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(p,o)=>K.getPrngAdvancements(p.rerollConfigs,x)-K.getPrngAdvancements(o.rerollConfigs,x),(p,o)=>-K.getPrngAdvancements(p.rerollConfigs,x)+K.getPrngAdvancements(o.rerollConfigs,x),...q,(p,o)=>p.cumulativeRerolls-o.cumulativeRerolls,(p,o)=>p.applianceCosts-o.applianceCosts,(p,o)=>o.numFloor+o.fodderAvailable-p.numFloor+p.fodderAvailable,(p,o)=>p.numFloor-o.numFloor]);Me(b,k.array[0],Te,!0);let O=1/0;const G=I.map(p=>p.array.reduce((o,[T,R])=>Math.min(o,R+k.array[0].rerollConfigs.length*(T+1)*10),1/0));e:for(;M--&&(Ce.length&&((Ze=(Qe=k.array[0])==null?void 0:Qe.rerollConfigs)==null?void 0:Ze.length)===1&&(Ce.some(o=>o.Name==="Research Desk")&&(Ye=!0),K.OwnedAppliances.push(...Ce),Ce=[],Y=[]),O=Date.now()+E,k.array[0]!==void 0);){console.log(`Seed ${s} Day ${x} Reroll ${k.array[0].rerollConfigs.length} expanding ${k.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:G});const p=k.array;if(!n.length&&J<=0){const o=p[0].rerollConfigs.length;if(o*((o+1)/2)*10+c>_){console.log("get me outta here!");break}}k.clear();for(const o of p){if(Date.now()>O){k.array.sort((le,Pe)=>-1*(le.applianceCosts-Pe.applianceCosts));continue e}if(o.numFloor+o.fodderAvailable===0||o.money<o.rerollConfigs.length*10)continue;let T=0;if(G[0]>o.money)continue;for(let V=1;V<G.length;V++)if(T++,G[V]>o.money){T=V-1;break}let R=z<o.rerollConfigs.length?o.numFloor:o.rerollConfigs.length?o.numFloor+Math.min(o.fodderAvailable,T-o.fodderUsed):U;{let V=o.actionHistory.length;for(;V--&&!o.actionHistory[V].includes("reroll");)if(o.actionHistory[V].includes("Starter Bin")){R=o.numFloor;break}}const ee=z<o.rerollConfigs.length?o.numFloor:o.rerollConfigs.length?Math.max(1,o.numFloor):U;let W;o.rerollConfigs.length===0?W=X:z<o.rerollConfigs.length?W=[o.rerollConfigs.at(-1)]:W=be,K.getAppliances([...o.rerollConfigs,{spawnInside:!0,blueprintCount:R}],o.day);for(const V of W){const le=A=>{if(!k.add(A)||!g.add(A))return;A.fodderPurchases[0]+A.fodderPurchases[1]||Me(b,A,Te)},Pe=[ee];for(let A=R;A>ee;A--)Pe.push(A);for(const A of Pe){const se=[...o.rerollConfigs,{...V,blueprintCount:A}],oe=[...se.length===1?ae:K.getAppliances(se,o.day)].sort((Be,Re)=>Be.PurchaseCost-Re.PurchaseCost),fe=A-o.numFloor;if(fe>o.fodderAvailable)debugger;const Se={...o,fodderPurchases:[o.fodderPurchases[1],0],money:o.money-o.rerollConfigs.length*10,rerollConfigs:se,numFloor:se.length===1?A-Ce.length:A,fodderAvailable:o.fodderAvailable-fe,fodderUsed:o.fodderUsed+fe,cumulativeRerolls:o.rerollConfigs.length?o.cumulativeRerolls+1:0,actionHistory:o.rerollConfigs.length?[...o.actionHistory,`${fe?`take ${fe} out, `:""}reroll ${V.spawnInside?"I":V.playerInside?"OI":"OO"}`]:[`day ${o.day} spawn`,`spawn ${V.spawnInside?"I":V.playerInside?"OI":"OO"}`,...Y]};if(le(Se),Is(Se,oe,le),Date.now()>O)break}}}}if(K.addCard(N),J<=0){if(!n.length){j.array.sort((p,o)=>p.deskTime-o.deskTime),h((J<=0?`full build on ${s} by day ${x}: 
`:"")+j.array.map(p=>Ie(p,_)).join(`
`));break}{const p=(((Xe=n[0]["Blueprint Cabinet"])==null?void 0:Xe.number)??0)-(((es=i["Blueprint Cabinet"])==null?void 0:es.number)??0);if(p+f.length>2)debugger;for(let o=0;o<p;o++)f.push(15)}for(const p of Object.values(i))p.number&&K.OwnedAppliances.push(ce(p.goal));i=n.shift(),u.shift(),q=[];for(const{goal:p,number:o}of Object.values(u[0]))q.push(Oe(o,p));J=1/0,I=[],Je(!0),Te.array=j.array,j.clear(),j.objectiveFunctions}}return x;function Je(b=!1){Math.random()<.001&&j.array.sort((g,M)=>g.deskTime-M.deskTime),h(`tier ${l.length-n.length-(b?1:0)} build on ${s} by day ${x}${b?"":" (Partial)"}: 
`+j.array.slice(0,100).map(g=>Ie(g,_)).join(`
`))}}function Ps(s,e){let a=0;for(const l of Object.values(s)){let r=l.number;a+=Math.max(0,r-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased)}return a}function Ie(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${De(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")}const He={};function ze(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:F}=s,h=[e,a,l,r,[...F].sort((c,C)=>c-C)].join("|");if(He[h])return He[h];let i=[0,0,0],f=[0,0,0,0],n=1-.75**t;if(e>0){i[0]=1;let c=1-.75**e;l===.5&&(c*=1.25,n*=1.25),f[0]=F.reduce((C,m)=>C+1+(m-1)*c,0)}const u=F.reduce((c,C)=>c+C);a&&(i[1]=1,f[1]=u),r>0&&(f[2]=u,a?(i[2]=1-.75**r,l===.5&&(i[2]*=1.25)):i[2]=1);let d=1;e>0&&(i[0]*=1+l,d*=1-l,f[0]*=i[0]),a&&(i[1]*=1+d*l,d*=1-l,f[1]*=i[1],f[3]=f[1]*n),r>0&&(i[2]*=1+d*l,d*=1-l,f[2]*=i[2]);const S=[i.map(c=>c*F.length),f];return He[h]=S,S}function Ds(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:F}=s;let h=[0,0,0],i=[0,0,0,0],f=1-.75**e,n=1-.75**r,u=1-.75**t;l===.5&&(f*=1.25,n*=1.25,u*=1.25);const d=m=>{h[0]++,i[0]++;for(let B=0;B<m-1;B++)Math.random()<f&&i[0]++},S=m=>{h[1]++,i[1]+=m;for(let B=0;B<m;B++)Math.random()<u&&i[3]++},c=m=>{h[2]++,i[2]+=m};for(const m of F){let B=!1;e>0&&(d(m),!B&&Math.random()<l&&(B=!0,d(m))),S(m),!B&&Math.random()<l&&(B=!0,S(m)),r>0&&Math.random()<n&&(c(m),!B&&Math.random()<l&&(B=!0,c(m)))}return[h,i]}const Ms={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},je={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>je[s]=!0);class vs{constructor(e,a=[],l=[]){D(this,"seed");D(this,"mapSize");D(this,"frontDoor");D(this,"startingCards");D(this,"cards");D(this,"playerCount");D(this,"turbo");D(this,"_actionInfoCacheByCards",{});D(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=Ms[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:a});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=0,h=[],i=[],f=0,n=[],u=0,d=[];for(const P of a)switch(P.Name==="All You Can Eat"&&(r=!0),P.Name==="Double Helpings"&&(t=!0),P.DishType){case v.Dessert:f++,P.DishValue&&n.push(P.DishValue);break;case v.Starter:P.DishValue&&h.push(P.DishValue),F++;break;case v.Side:P.DishValue&&d.push(P.DishValue),u++;break;case v.Main:case v.Base:P.Name==="Tacos"?(i.push(2),i.push(3)):P.DishValue&&i.push(P.DishValue)}let S=t?.5:r?.25:0,c=[0,0,0,0];if(c[0]=ne(h),c[1]=ne(i),c[2]=ne(n),c[3]=ne(d),t)for(let P=0;P<3;P++)c[P]&&(c[P]+=3);const[C,m]=ze({starters:F,main:!!c[1],doubleOrderChance:S,desserts:f,sides:u,groupSizes:l});let B=0;for(let P=0;P<m.length;P++)B+=m[P]*c[P];const q=_e(this.playerCount),H=this.getBookingDeskCount(e),$=this.getBookingDeskMoney(e);return q*(B+H*$)}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=0,h=[],i=[],f=0,n=[],u=0,d=[];for(const m of a)switch(m.Name==="All You Can Eat"&&(r=!0),m.Name==="Double Helpings"&&(t=!0),m.DishType){case v.Dessert:f++,m.DishValue&&n.push(m.DishValue);break;case v.Starter:m.DishValue&&h.push(m.DishValue),F++;break;case v.Side:m.DishValue&&d.push(m.DishValue),u++;break;case v.Main:case v.Base:m.Name==="Tacos"?(i.push(2),i.push(3)):m.DishValue&&i.push(m.DishValue)}let S=t?.5:r?.25:0,c=[0,0,0,0];if(c[0]=ne(h),c[1]=ne(i),c[2]=ne(n),c[3]=ne(d),t)for(let m=0;m<3;m++)c[m]&&(c[m]+=3);return ze({starters:F,main:!!c[1],doubleOrderChance:S,desserts:f,sides:u,groupSizes:l})}actionInfo(e){if(e===0)return 0;const a=this.getCardsByDay(e),l=e.toString()+":"+a.map(y=>y.Name).sort().join(","),r=this._actionInfoCacheByCards[l];if(r)return r;let t=0;const F={Breakfast:6,Dumplings:11.25,"Stir Fry":26/2,Steak:7};let h=0;for(let y=0;y<a.length;y++)if(a[y].DishType!==v.Null){const I=a[y].Name;h=F[I]??20;break}let i=-1,f=[1,1,1],n=[[],[h],[],[]],u=0;const d=this.getGroupSizes(e);let S=!1,c=!1,C=0,m=[],B=[],q=0,H=[],$=0,P=[],Z=!1,j=!1;for(const y of a){switch(y.Name==="All You Can Eat"&&(S=!0),y.Name==="Double Helpings"&&(c=!0),y.Name){case"Picky Eaters":Z=!0;break;case"Leisurely Eating":j=!0,u+=2;break;case"Instant Service":for(let I=0;I<3;I++)f[I]--;break;case"Ice Cream":n[2].push(5.125);break;case"Cheese Board":n[2].push(10);break;case"Cherry Pie":n[2].push(11);break;case"Apple Pies":n[2].push(15);break;case"Pumpkin Pies":n[2].push(16);break;case"Carrot Soup":case"Meat Soup":n[0].push(7);break;case"Tomato Soup":case"Pumpkin Soup":f[0]=4,n[0].push(8);break;case"Broccoli Cheese Soup":n[0].push(5),f[0]=4;break;case"Pumpkin Seed":n[0].push(3*8);break;case"Bread":n[0].push(5*3);break;case"Mandarin Starter":n[0].push(7*3);break;case"Mashed Potato":case"Broccoli":case"Bamboo":n[3].push(2);break;case"Onion Rings":n[3].push(8);break;case"Corn on the Cob":n[3].push(6);break;case"Chips":n[3].push(7);break;case"Roast Potato":n[3].push(4);break}switch(y.DishType){case v.Dessert:q++,y.DishValue&&H.push(y.DishValue);break;case v.Starter:y.DishValue&&m.push(y.DishValue),C++;break;case v.Side:y.DishValue&&P.push(y.DishValue),$++;break;case v.Main:case v.Base:y.Name==="Tacos"?(B.push(2),B.push(3)):y.DishValue&&B.push(y.DishValue);break;case v.Extra:y.Name==="Seaweed"?(n[1][0]+=1.75,i+=2):y.Name==="Dumpling - Soy Sauce"?n[1][0]+=.4:y.Name==="Breakfast Beans"?n[1][0]+=1+3/4:y.Name==="Breakfast Eggs"?n[1][0]+=6:y.Name==="Breakfast Extras"&&(i++,n[1][0]+=1.5*2),i++;break}}e>6&&(n[3]=[]),Z&&(j&&!S||(n[1][0]+=2,i++));let U=c?.5:S?.25:0;t+=d.length*u;const[be,X]=ze({starters:C,main:!0,doubleOrderChance:U,desserts:q,sides:$,groupSizes:d});be.forEach((y,I)=>t+=y*f[I]);for(const y of n)for(let I=0;I<y.length;I++)i>0&&(y[I]+=i),i+=1;return X.forEach((y,I)=>{var Me;if((Me=n[I])!=null&&Me.length){if(!I){const ve=Math.ceil(y/n[I].length/3);t+=ve*n[I].reduce((Te,J)=>Te+J,0);return}t+=y*ne(n[I])}}),this._actionInfoCacheByCards[l]=t,t}simulateMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=[[],[],[],[]];for(const C of a)switch(C.Name==="All You Can Eat"&&(r=!0),C.Name==="Double Helpings"&&(t=!0),C.DishType){case v.Dessert:C.DishValue&&F[2].push(C.DishValue);break;case v.Starter:C.DishValue&&F[0].push(C.DishValue);break;case v.Side:C.DishValue&&F[3].push(C.DishValue);break;case v.Main:case v.Base:C.Name==="Tacos"?(F[1].push(2),F[1].push(3)):C.DishValue&&F[1].push(C.DishValue)}let h=t?.5:r?.25:0,i=0;t&&(i+=3);const[f,n]=Ds({starters:F[0].length,main:!!F[1].length,doubleOrderChance:h,desserts:F[2].length,sides:F[3].length,groupSizes:l});let u=0;for(let C=0;C<n.length;C++){let m=n[C];for(;m--;)C<3&&(u+=i),u+=F[C][Math.floor(Math.random()*F[C].length)]}const d=_e(this.playerCount),S=this.getBookingDeskCount(e),c=this.getBookingDeskMoney(e);return d*(u+S*c)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const l=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(f=>f.Name==="Herd Mentality"))return Math.min(l,3)+1;const r=[],t=this.getCardsByDay(e);let F=1;(this.turbo||t.some(f=>f.Name==="Morning Rush"))&&(r.push(.2),F++),(this.turbo||t.some(f=>f.Name==="Lunch Rush"))&&(r.push(.5),F++),(this.turbo||t.some(f=>f.Name==="Dinner Rush"))&&(r.push(.8),F++);const h=a/this.getDayLength(e),i=.1/l;for(let f=1;f<l;f++){const n=f/l,u=n-i-h,d=n+i+h;let S=!1;for(const c of r)if(u<=c&&d>=c){S=!0;break}S||F++}return F}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(F=>F.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),t=a*(1+l)/r;return Math.ceil(t)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=this.seed?Le(1997821,e,this.seed).random:new xe(Math.floor(Math.random()*4294967295)),l=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(d=>d.Name==="Herd Mentality");let t=l,F=[],[h,i]=this.getGroupSizeRange(e);!this.seed||this.seed==="_min"?i=h:this.seed==="_max"&&(h=i);{let d=t-1;for(;d--;)a.value}for(;t--;)F.push(a.range(h,i+1)),!r&&t!==l-1&&a.value;let f=this.turbo?3:this.getCardsByDay(e).filter(d=>je[d.Name]).length;const n=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let u=f*n;for(;u--;)F.push(a.range(h,i+1));if(!this.seed||this.seed[0]==="_"){let d=h;for(let S=0;S<F.length;S++)F[S]=d,d++,d>i&&(d=h)}return F}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const t=Math.floor((e-1)/3);a+=t,l+=t;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),r=this.getPlayerModifier(),t=this.getCourseModifier(e),F=this.getDayRate(e),h=this.getCustomersPerHour(e),i=this.getAdvertisingModifier(e);return .85**a*(l/25*F*r)/t*h*i}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(r=>r.DishType===v.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(a+=.25),l.some(r=>r.DishType===v.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,r)=>l+r.CustomerMultiplier,0)}getMapSize(){const a=new me(this.seed,5078598).useSubcontext(0).random.range(0,8);let l;switch(a){case 0:l="Small (2)";break;case 4:l="Medium (2)";break;case 1:case 5:l="Diner (1)";break;case 2:case 6:l="Large (3)";break;case 3:case 7:l="Huge (4)";break;default:throw new Error}return l}getLayoutInfo(){const a=new me(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new xe(new me(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function _e(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Bs(s,e,a,l){let r=[],t=[];const F=s.cards.slice(e);let h=new vs(s.seed,a,F);h.playerCount=l;for(let i=1;i<=15;i++)r.push(h.guessMoney(i)),t.push(h.getBookingDeskCount(i));return r[0]+=h.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:t}}var Ke=self;function Rs(s){Ke.postMessage(s)}const Ns=["Copying Desk","Blueprint Cabinet","Clipboard Stand","Research Desk"],ws=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:0,substitutes:[],skipMissing:!0},{goal:"Sharp Knife",number:1,substitutes:[],skipMissing:!0},{goal:"Workstation",number:1,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:ue.filter(s=>!s.ThemeRequired&&!Ns.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];Ke.onmessage=s=>{let{config:e,tiers:a,playerCount:l}=s.data;for(const u of a)for(const d of u){const S=ue.filter(c=>c.Name===d.goal)[0];S.ThemeRequired&&(d.substitutes=ue.filter(c=>c.ThemeRequired===S.ThemeRequired).map(c=>c.Name))}for(;!a.at(-1).length;)a.pop();const r=[...ws],t=a.flatMap(u=>u.flatMap(d=>[d.goal,...d.substitutes])),F=r.length-1;r[F].substitutes=r[F].substitutes.filter(u=>!t.some(d=>u===d)),a[a.length-1].push(...r);const h=e.cards.filter(u=>Ue.some(d=>d.Name===u.Name)).length+1,i=e.cards.slice(0,h);let{expectedMoneyByDay:f,expectedBookingDesksByDay:n}=Bs(e,h,i,l);ys(e.seed,i,e.cards.slice(h).map(u=>u.Name),a,e.solo,f,n,Rs)}})();
