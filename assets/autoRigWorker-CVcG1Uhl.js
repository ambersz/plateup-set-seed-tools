var xs=Object.defineProperty;var Es=(Y,le,de)=>le in Y?xs(Y,le,{enumerable:!0,configurable:!0,writable:!0,value:de}):Y[le]=de;var D=(Y,le,de)=>Es(Y,typeof le!="symbol"?le+"":le,de);(function(){"use strict";class Y{constructor(e,a){D(this,"array");D(this,"objectiveFunctions");this.array=le(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:r}=de(e,this.array[a],this.objectiveFunctions);if(r)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function le(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const r=a.pop();let t=l.length;for(;t--;){let{better:F,worse:c}=de(r,l[t],e);if(c)continue e;F&&l.splice(t,1)}l.push(r)}return l}function de(s,e,a){let l=!0,r=!0,t=0;for(;(l||r)&&t<a.length;){const F=a[t](s,e);F<0?r=!1:F>0&&(l=!1),t++}return{better:l,worse:r}}var as=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
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
`;const ls=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],rs=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],oe=as.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let r;switch(rs[l]){case"number":r=Number(e[l]);break;case"boolean":r=e[l]==="True";break;case"number[]":e[l]===""?r=[]:r=e[l].split(":").map(t=>Number(t));break;default:r=e[l]}a[ls[l]]=r}return a});class Fs{constructor(e){D(this,"Staple");D(this,"Tags");D(this,"StapleWhenMissing");D(this,"Appliance");D(this,"IsRemoved");D(this,"Filter");D(this,"DecorationRequired");D(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var re=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(re||{}),fe=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(fe||{});const Ge={DefaultShoppingTag:892};var qe=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(qe||{}),ve=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(ve||{}),ts="38";const ns=Number(ts);function os(s,e){return Math.floor(Math.random()*(e-s))+s}function is(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?os(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}const us="12345678",cs="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of cs);for(const s of us);function Fe(s){return s.length?s.reduce((e,a)=>e+a,0)/s.length:0}class ge{constructor(e,a){D(this,"fixedSeed");D(this,"instance");D(this,"random");typeof e=="string"&&(e=hs(e)),this.fixedSeed=e,this.instance=a,this.random=new Ie(e+Math.imul(124192293,a))}useSubcontext(e){return new ge(this.fixedSeed,124192293*e+this.instance)}}class Ie{constructor(e){D(this,"seed");const a=c=>Math.imul(1812433253,c)+1>>0,l=e>>0,r=a(l),t=a(r),F=a(t);this.seed=[l,r,t,F]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function hs(s){const a=new TextEncoder().encode(s);let l=5381,r=a.length;for(;r--;)l=(l<<5)+l+a[r];return l>>0}function Ve(s,e,a){return new ge(a,s*1231231+e)}var be=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(be||{}),R=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(R||{});const ds=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater"],Le={};for(const s of ds)Le[s]=!0;const fs=oe.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class gs{constructor(e,a=0){D(this,"seed");D(this,"mapSize");D(this,"numTiles");D(this,"baseUpgradeChance");D(this,"OwnedAppliances");D(this,"Cards");D(this,"Theme");D(this,"cache",new Map);D(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=ve.Null,this.cacheDay=-1}getLayoutInfo(){const a=new ge(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.UnlockGroup===be.PrimaryTheme&&(this.Theme=ve[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>oe.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let r=0;r<e.length;r++){const t=e[r];let F=t.blueprintCount;a%5===0&&(F+=3,r===0&&(F+=2)),l+=F*(fs-1+1),t.spawnInside||(l+=ps(t.playerInside,this.numTiles)),l+=ns}return l}buildShopOptions(e,a,l){const r=l.some(c=>c.Name==="Couples");let t=[];for(const c of oe)if(!(!c.IsPurchasable&&!c.IsPurchasableAsUpgrade)){var F=new Fs(c);const f=F.Appliance.Name;(F.Staple==re.NonStaple||F.Staple==re.WhenMissing)&&((F.Tags&fe.Basic)>fe.None?F.Staple=re.FixedStaple:F.StapleWhenMissing?(f!="Research Desk"&&f!="Blueprint Cabinet"&&f!="Plates"&&console.log(`Unexpected ${f} StapleWhenMissing Appliance`),e.some(o=>o.ID===F.Appliance.ID)?F.Staple=re.NonStaple:F.Staple=re.WhenMissing):r&&f==="Flower Pot"&&(F.Staple=re.BonusStaple));const h=F.Appliance;if(h.SellOnlyAsDuplicate)e.some(o=>o.ID===h.ID)||(F.IsRemoved=!0);else if(h.RequiresForShop.length>0){let o=!1;for(const d of h.RequiresForShop)e.some(S=>S.ID===d)&&(o=!0);F.IsRemoved=!o}else h.SellOnlyAsUnique&&(h.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${h.Name}, ${h.ID}`),e.some(o=>o.ID===h.ID)&&(F.IsRemoved=!0));Le[f]&&l.every(o=>!o.isMain||o.Name==="Tacos")&&(F.IsRemoved=!0),F.Filter==qe.RefreshableProvider&&(e.some(o=>o.AllowRefreshes)||(F.IsRemoved=!0)),F.DecorationRequired!=ve.Null&&F.DecorationRequired!=a&&(F.IsRemoved=!0),h.RequiresProcessForShop.length>0&&(h.RequiresProcessForShop.some(o=>l.some(d=>d.RequiredProcesses.includes(o)))||(F.IsRemoved=!0)),t.push(F)}return t}initRandom(e){return Ve(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,r=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let t=e[e.length-1].blueprintCount,F;if(a%5==0){l?t=10:t+=3,F=[];for(let h=0;h<t;h++)F[h]=fe.Decoration;if(l)for(const h of[1,2])F[F.length-h]=fe.SpecialEvent}else if(e.length>1){F=[];for(let h=0;h<t;h++)F[h]=Ge.DefaultShoppingTag}else{const h=Ge.DefaultShoppingTag,o=Math.max(1,t),d=Math.max(0,Math.min(r.filter(u=>u.Staple!==re.NonStaple&&!u.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),o)),S=Math.max(0,o-d);t=o,F=[];for(let u=0;u<d;u++)F[u]=fe.Basic;for(let u=d;u<d+S;u++)F[u]=h}const c=this.initRandom(a).random;let i=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(i)&&this.cache.get(i).length>=t)return this.cache.get(i).slice(0,t);const f=i;for(;i--;)c.value;{const h=[...r],o=[],d=this.getUpgradeChance(a),S=[];for(let u=0;u<t;u++){const C=F[u],N=c.valueFloat<d;is(h,c);for(let L=0;L<h.length;L++){const A=h[L];if(A.IsRemoved||S.includes(A.Appliance)||!A.MatchesRequestTags(C)||!N&&A.Staple==re.NonStaple&&A.SellAsUpgrade)continue;C!=fe.Decoration&&S.push(A.Appliance),o[u]=A.Appliance;break}o[u]==null}return this.cache.set(f,o),o}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function ps(s,e){return s?e-2:e-1}var ms=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
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
`,Ts=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
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
`;const Ce=ms.trim().split(`\r
`).filter(s=>s).map(s=>{var z,pe;const[e,a,l,r,t,F,c,i,f,h,o,d]=s.split(","),S=Number(e),u=Number(l),C=r!=null&&r.length?r.split(":").map(J=>Number(J)):[],p=t.length?t.split(":").map(J=>Number(J)):[],N=F!=null&&F.length?(z=F==null?void 0:F.split(":"))==null?void 0:z.map(J=>Number(J)):[],L=c!=null&&c.length?(pe=c==null?void 0:c.split(":"))==null?void 0:pe.map(J=>Number(J)):[],A=i==="True",W=f==="True",k=Number(h),P=Number(o),w=Number(d);return{ID:S,Name:a,UnlockGroup:u,Requires:C,BlockedBy:p,RequiredProcesses:N,IngredientProviders:L,isMain:A,isStarterOrSide:W,DishType:k,CustomerMultiplier:P,DishValue:w}}),$e=[...[{ID:447437163,Name:"Country",UnlockGroup:be.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:R.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:be.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:R.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:be.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:R.Null,CustomerMultiplier:0,DishValue:0},Ce.filter(s=>s.Name==="Community")[0],Ce.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:be.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:R.Null,CustomerMultiplier:0,DishValue:0},Ce.filter(s=>s.Name==="Christmas Rush")[0]]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>Ce.filter(e=>e.Name===s)[0]);const bs=Ts.trim().split(`\r
`).filter(s=>s).map(s=>{var W,k;const[e,a,l,r,t,F,c,i,f,h]=s.split(","),o=Number(e),d=Number(l),S=r!=null&&r.length?(W=r==null?void 0:r.split(":"))==null?void 0:W.map(P=>Number(P)):[],u=t!=null&&t.length?(k=t==null?void 0:t.split(":"))==null?void 0:k.map(P=>Number(P)):[],C=F==="True",p=c==="True",N=Number(i),L=Number(f),A=Number(h);return{ID:o,Name:a,UnlockGroup:d,Requires:[],BlockedBy:[],RequiredProcesses:S,IngredientProviders:u,isMain:C,isStarterOrSide:p,DishType:N,CustomerMultiplier:L,DishValue:A}}).sort((s,e)=>s.Name<e.Name?-1:1),Ae={};for(const s of Ce)Ae[s.Name]=s;for(const s of bs)Ae[s.Name]=s;for(const s of $e)Ae[s.Name]=s;const Cs=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],Ss=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],Be={};function ie(s){if(Be[s]===void 0&&(Be[s]=oe.filter(e=>e.Name===s)[0]),Be[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return Be[s]}const ys=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function ye(s){let e=0;(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime);for(const a of Object.values(s.achieved))e+=s.cumulativeRerolls*2,e+=s.actionHistory.filter(l=>l==="spawn OI"||l==="spawn OO").length*3,e+=s.actionHistory.reduce((l,r)=>{var t;return r.includes("take ")?l+3+Number((t=r.match(/(\d+)/))==null?void 0:t[0]):l},0),e+=a.goalsPurchased+a.substitutesPurchased;return e}function xe(s,e){return(a,l)=>{const r=a.achieved[e],t=l.achieved[e],F=Math.min(r.goalsPurchased,s);let i=Math.min(t.goalsPurchased,s)-F;return i===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&t.goalsPurchased+t.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(t.goalsPurchased+t.substitutesPurchased):t.substitutesPurchased-r.substitutesPurchased:i}}const Ue={"Copying Desk":3,"Metal Table":4,"Power Sink":4,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":2,"Safety Hob":2,"Grabber - Rotating":2,"Smart Grabber":2};function ks(s,e,a,l,r=!0,t=Ss,F=Cs,c=()=>{}){var Qe,Ze,Xe,es;let i={},f=[];const h=[],o=new Array(l.length).fill(0).map(()=>({})),d={};let S=0,u=0;const C={},p=e.some(T=>T.Name==="Turbo"),N=[];let L=[],A=0;const W={};for(const T of l){for(const g of T){const{goal:M,number:O,substitutes:G,skipMissing:I=!1}=g;for(const B of G)d[B]||(d[B]=[]),d[B].push(M),B==="Flower Pot"&&console.log({substitutesToGoalMap:d});W[M]?I||(W[M].number+=O):(W[M]={...g},I&&(W[M].number=0));for(let B=0;B<=A;B++){if(o[B]===void 0)debugger;o[B][M]?o[B][M].number+=O:o[B][M]={...g}}for(let B=A+1;B<o.length;B++){if(o[B]===void 0)debugger;o[B][M]||(o[B][M]={...g,number:0})}I||(u+=ie(M).PurchaseCost*O*(p?.5:1))}try{h.push(JSON.parse(JSON.stringify(W)))}catch{console.log(o),console.log(o[0]);debugger}A++}const k=o[0],P=Object.values(k).sort((T,g)=>ie(T.goal).PurchaseCost-ie(g.goal).PurchaseCost).map(T=>T.goal);i=h.shift();for(const T of Object.values(k)){const{goal:g,number:M}=T;C[g]={...T,substitutesPurchased:0,goalsPurchased:0},T.goal!=="Starter Bin"&&(N.push(xe(M,g)),L.push(xe(M,g)))}const w=new Y([],[...N,(T,g)=>g.money-T.money,(T,g)=>ye(T)-ye(g),(T,g)=>T.actionHistory.length-g.actionHistory.length,(T,g)=>T.cumulativeRerolls-g.cumulativeRerolls,(T,g)=>(T.day+1)%5?T.upgradesInProgress-g.upgradesInProgress:0]),z=p?7:5,pe=[{spawnInside:!0,blueprintCount:z},{spawnInside:!1,playerInside:!1,blueprintCount:z}];r||pe.push({spawnInside:!1,playerInside:!0,blueprintCount:z});const J=[{spawnInside:!0,blueprintCount:z},{spawnInside:!1,playerInside:!0,blueprintCount:z},{spawnInside:!1,playerInside:!1,blueprintCount:z}];function Ne(T,g,M){const O={...T};for(const G of Object.values(g)){const I=G.goal;O[I]={...O[I]},I==="Copying Desk"&&(O[I].goalsPurchased+=O[I].substitutesPurchased,O[I].substitutesPurchased=0),O[I].goalsPurchased+=G.goalsPurchased,M&&(O[I].substitutesPurchased+=G.substitutesPurchased)}return O}let ke=[];function Ke(T,g,M,O=!1){var ee,K,y,H,q,m,n;const G=g.fodderUsed,I=Object.values(g.achieved).some(b=>b.substitutesPurchased)&&!((ee=g.achieved["Research Desk"])!=null&&ee.goalsPurchased),B=g.actionHistory.at(-1)==="buy Blueprint Cabinet"&&((K=g.actionHistory.at(-2))!=null&&K.includes("reroll"))?1:0;e:for(const b of T){if(I&&!Ye&&!((y=b.achieved["Research Desk"])!=null&&y.goalsPurchased))continue;let v=1+(b.achieved["Copying Desk"].goalsPurchased?1:0);const Q=Math.floor(Math.max(0,b.achieved["Blueprint Cabinet"].goalsPurchased-f.length));let U=Q;if(U-=b.upgradesInProgress,U*=v,U<0||U<G)continue;let V=b.cumulativeRerolls+g.cumulativeRerolls,se=V*(V+1)/2*10+b.applianceCosts;const Se=g.actionHistory.length?Ne(b.achieved,g.achieved,!1):b.achieved,x=g.actionHistory.length?Ne(b.achieved,g.achieved,!0):b.achieved,Z=Ps(i,Se);if(X<=0&&Z>0||g.cumulativeRerolls&&se>j)continue;let ue=0,te=0,ce=[],Te=0,De=1;const Me=x["Blueprint Cabinet"].goalsPurchased-f.length-B,ze=(((H=b.achieved["Discount Desk"])==null?void 0:H.goalsPurchased)??0)+(((q=b.achieved["Discount Desk"])==null?void 0:q.substitutesPurchased)??0)?.5:1;{let ne=j-se;for(const ae of P){const $=g.achieved[ae];ne-=$.goalsPurchased*ie($.goal).PurchaseCost*(p?.5:1)*ze;let ss=!1;(ne<0||$.substitutesPurchased)&&($.goal==="Copying Desk"&&te&&(te=0,Te--),ss=!0,ne<0&&(ue+=$.goalsPurchased),ue+=$.substitutesPurchased,$.substitutesPurchased&&(Te++,Ue[$.goal]&&(De*=Ue[$.goal]))),($.goal==="Metal Table"||$.goal==="Grabber - Rotating"||$.goal==="Portioner"||$.goal==="Grabber")&&$.goalsPurchased+$.substitutesPurchased&&x[ae].goalsPurchased+x[ae].substitutesPurchased<x[ae].number&&(b.achieved["Copying Desk"].goalsPurchased||x["Copying Desk"].goalsPurchased&&ne>60)&&(ss||te++,te++,ce.push($.goal),Te++)}if(ue>Me)continue e}se+=g.applianceCosts*ze;const As=b.deskTime+(De-1)*20+Math.max(0,G-Q)*5*((m=b.achieved["Clipboard Stand"])!=null&&m.goalsPurchased?.5:1)+(Te*De*5+(F[g.day]??F.at(-1)??0))*((n=x["Clipboard Stand"])!=null&&n.goalsPurchased?.5:1),he={...g,rerollConfigs:[...b.rerollConfigs,g.rerollConfigs],achieved:x,money:j-se,actionHistory:[...b.actionHistory,...g.actionHistory],upgradesInProgress:ue,cumulativeRerolls:b.cumulativeRerolls+g.cumulativeRerolls,applianceCosts:b.applianceCosts+g.applianceCosts*ze,deskTime:As};if(!(ue>Me)){if(te&&(te===1||ue+1<=Me))for(const ne of ce)he.upgradesInProgress+=te,x[ne].goalsPurchased++,he.actionHistory.push(`copy ${ne}`),he.applianceCosts+=30;if(he.money>=0&&(!he.upgradesInProgress||h.length)){if(Z<X&&(X=Z,console.log(`best so far missing ${Z} pieces `+Re(he,j))),Z<=0){if(w.add(he)){if(Je(),w.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(X<=0)continue}if(U>S&&(S=U),O){const ne=b.cumulativeRerolls;for(let ae=0;ae<=U;ae++)ke[ae]===void 0&&(ke[ae]=new Y([],ys)),ke[ae].add([ne,se]);continue}M.add(he)}}return X}const He={...C};He["Blueprint Cabinet"]={...He["Blueprint Cabinet"],goalsPurchased:1};const Pe=new Y([{achieved:He,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:0,day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...N,(T,g)=>T.applianceCosts-g.applianceCosts,(T,g)=>T.cumulativeRerolls-g.cumulativeRerolls]);let X=1/0,E=0,j=0;const _=new gs(s),we=["Research Desk"];let Ye=!1,me=[];{const T=["Booking Desk","Blueprint Cabinet"];oe.filter(g=>T.includes(g.Name)).forEach(g=>_.OwnedAppliances.push(g))}for(const T of e)_.addCard(T);function Is(T,g,M){var ee;let O=[{...T}],G=[],I=[];const B=JSON.parse(JSON.stringify(T.achieved));for(const K of g){let y=K.Name,H=B[y],q=!1,m=H&&E>3&&H.goal==="Research Desk";if(!H||H.goalsPurchased>=(((ee=o[0][y])==null?void 0:ee.number)??0)||m){const n=d[K.Name],b=n&&K.Name==="Research Desk"?E>6?"Copying Desk":"Discount Desk":n==null?void 0:n[Math.floor(Math.random()*n.length)];if(H=B[b],!H)continue;q=!0,y=b}if(q&&H.goalsPurchased+H.substitutesPurchased>=o[0][y].number&&(H=B["Starter Bin"],y="Starter Bin"),!H)debugger;if(H.goalsPurchased>=(o[0][y]?o[0][y].number:9)){H=B["Starter Bin"],y="Starter Bin",q=!0;continue}y==="Table - Fancy Cloth"&&(q=!1),K.ThemeRequired&&(q=!1),q?H.substitutesPurchased++:H.goalsPurchased++;{const n=b=>{const v={...b};if(v.achieved={...v.achieved},v.numFloor--,v.achieved[y])v.achieved[y]={...v.achieved[y],goalsPurchased:v.achieved[y].goalsPurchased+(q?0:1),substitutesPurchased:v.achieved[y].substitutesPurchased+(q?1:0)};else if(v.achieved[y]={...H,goalsPurchased:q?0:1,substitutesPurchased:q?1:0},Number.isNaN(v.achieved[y].goalsPurchased))debugger;const Q=y==="Starter Bin"||y==="Table - Fancy Cloth"?ie(K.Name).PurchaseCost:Math.max(ie(K.Name).PurchaseCost,ie(y).PurchaseCost);return v.applianceCosts+=Q*(p?.5:1),v.actionHistory=[...v.actionHistory,`buy ${K.Name}`+(q?` for ${y}`:"")],y==="Starter Bin"&&(v.fodderPurchases=[...v.fodderPurchases],v.fodderPurchases[1]++,v.achieved[y].substitutesPurchased--),v};if(y!=="Starter Bin"){const b=O.map(n),v=G.map(n),Q=I.map(n);O=b.concat(O),G=v.concat(G),I=Q.concat(I),b.forEach(M)}else G=G.concat(I),I=(I.length?I:O).map(n)}}return O.concat(G).concat(I)}for(;X;){let T=Pe.array;if(!T.length)return c("No Solutions"),0;Pe.clear();const g=new Y([],[...L,(m,n)=>m.cumulativeRerolls-n.cumulativeRerolls,(m,n)=>m.applianceCosts-n.applianceCosts]);if(j+=t[E]??t.at(-1)??0,E++,E>14&&(p||!a.length)){debugger;break}if(E>1&&T.length===0){debugger;break}T.sort((m,n)=>ye(m)-ye(n)),console.log(`fastest so far: ${Re(T[0],j)}`),T.every(m=>m.achieved["Copying Desk"].goalsPurchased)&&(f=f.map(m=>m-1),f=f.filter(m=>m>0));let M=4;switch(E){case 99:case 3:M=3;break;case 999:case 1:case 2:case 4:M=4;break;case 9999:M=5;break;case 99999:M=6;break;case 6:default:M=6;break}let O=.5*60*1e3;const G=Math.min(M-1,1/0);if(j>=u){const m=Math.sqrt((j-u)/10*2);console.log(`Have ${j} on day ${E}, need ${u} to buy everything. Allows for ~${m} rerolls across all days`)}E%5||(M=1);let I;(p||E===5||!(E%3))&&(I=a.shift());const B=Ce.filter(m=>m.Name===I)[0];_.handleNewCardSpawnEffects(B);const ee=_.getAppliances([{spawnInside:!0,blueprintCount:z}],E);_.handleNewCardRerollEffects(B);let K=[];if(we.length)for(let m=we.length-1;m>=0;m--){let n=ee.length;for(;n--;){const b=ee[n];if(b.Name===we[m]){if(console.log(`buying ${b.Name} on day ${E}`),j-T.reduce((Q,U)=>Math.min(Q,U.applianceCosts+10/2*(U.cumulativeRerolls+1)*U.cumulativeRerolls),1/0)<b.PurchaseCost*(p?.5:1)){console.log("not enough money-- skip for now");continue}me.push(b),we.splice(m,1),j-=b.PurchaseCost*(p?.5:1),ee.splice(n,1);break}}K=me.map(b=>`Buy ${b.Name}`)}let y=new Y([{day:E,rerollConfigs:[],achieved:{...C},numFloor:z,fodderAvailable:S,fodderUsed:0,money:j,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(m,n)=>_.getPrngAdvancements(m.rerollConfigs,E)-_.getPrngAdvancements(n.rerollConfigs,E),(m,n)=>-_.getPrngAdvancements(m.rerollConfigs,E)+_.getPrngAdvancements(n.rerollConfigs,E),...L,(m,n)=>m.cumulativeRerolls-n.cumulativeRerolls,(m,n)=>m.applianceCosts-n.applianceCosts,(m,n)=>n.numFloor+n.fodderAvailable-m.numFloor+m.fodderAvailable,(m,n)=>m.numFloor-n.numFloor]);Ke(T,y.array[0],Pe,!0);let H=1/0;const q=ke.map(m=>m.array.reduce((n,[b,v])=>Math.min(n,v+y.array[0].rerollConfigs.length*(b+1)*10),1/0));e:for(;M--&&(me.length&&((Ze=(Qe=y.array[0])==null?void 0:Qe.rerollConfigs)==null?void 0:Ze.length)===1&&(me.some(n=>n.Name==="Research Desk")&&(Ye=!0),_.OwnedAppliances.push(...me),me=[],K=[]),H=Date.now()+O,y.array[0]!==void 0);){console.log(`Seed ${s} Day ${E} Reroll ${y.array[0].rerollConfigs.length} expanding ${y.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:q});const m=y.array;if(!h.length&&X<=0){const n=m[0].rerollConfigs.length;if(n*((n+1)/2)*10+u>j){console.log("get me outta here!");break}}y.clear();for(const n of m){if(Date.now()>H){y.array.sort((se,Se)=>-1*(se.applianceCosts-Se.applianceCosts));continue e}if(n.numFloor+n.fodderAvailable===0||n.money<n.rerollConfigs.length*10)continue;let b=0;if(q[0]>n.money)continue;for(let V=1;V<q.length;V++)if(b++,q[V]>n.money){b=V-1;break}let v=G<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?n.numFloor+Math.min(n.fodderAvailable,b-n.fodderUsed):z;{let V=n.actionHistory.length;for(;V--&&!n.actionHistory[V].includes("reroll");)if(n.actionHistory[V].includes("Starter Bin")){v=n.numFloor;break}}const Q=G<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?Math.max(1,n.numFloor):z;let U;n.rerollConfigs.length===0?U=J:G<n.rerollConfigs.length?U=[n.rerollConfigs.at(-1)]:U=pe,_.getAppliances([...n.rerollConfigs,{spawnInside:!0,blueprintCount:v}],n.day);for(const V of U){const se=x=>{if(!y.add(x)||!g.add(x))return;x.fodderPurchases[0]+x.fodderPurchases[1]||Ke(T,x,Pe)},Se=[Q];for(let x=v;x>Q;x--)Se.push(x);for(const x of Se){const Z=[...n.rerollConfigs,{...V,blueprintCount:x}],te=[...Z.length===1?ee:_.getAppliances(Z,n.day)].sort((De,Me)=>De.PurchaseCost-Me.PurchaseCost),ce=x-n.numFloor;if(ce>n.fodderAvailable)debugger;const Te={...n,fodderPurchases:[n.fodderPurchases[1],0],money:n.money-n.rerollConfigs.length*10,rerollConfigs:Z,numFloor:Z.length===1?x-me.length:x,fodderAvailable:n.fodderAvailable-ce,fodderUsed:n.fodderUsed+ce,cumulativeRerolls:n.rerollConfigs.length?n.cumulativeRerolls+1:0,actionHistory:n.rerollConfigs.length?[...n.actionHistory,`${ce?`take ${ce} out, `:""}reroll ${V.spawnInside?"I":V.playerInside?"OI":"OO"}`]:[`day ${n.day} spawn`,`spawn ${V.spawnInside?"I":V.playerInside?"OI":"OO"}`,...K]};if(se(Te),Is(Te,te,se),Date.now()>H)break}}}}if(_.addCard(B),X<=0){if(!h.length){w.array.sort((m,n)=>m.deskTime-n.deskTime),c((X<=0?`full build on ${s} by day ${E}: 
`:"")+w.array.map(m=>Re(m,j)).join(`
`));break}{const m=(((Xe=h[0]["Blueprint Cabinet"])==null?void 0:Xe.number)??0)-(((es=i["Blueprint Cabinet"])==null?void 0:es.number)??0);if(m+f.length>2)debugger;for(let n=0;n<m;n++)f.push(15)}for(const m of Object.values(i))m.number&&_.OwnedAppliances.push(ie(m.goal));i=h.shift(),o.shift(),L=[];for(const{goal:m,number:n}of Object.values(o[0]))L.push(xe(n,m));X=1/0,ke=[],Je(!0),Pe.array=w.array,w.clear(),w.objectiveFunctions}}return E;function Je(T=!1){Math.random()<.001&&w.array.sort((g,M)=>g.deskTime-M.deskTime),c(`tier ${l.length-h.length-(T?1:0)} build on ${s} by day ${E}${T?"":" (Partial)"}: 
`+w.array.slice(0,100).map(g=>Re(g,j)).join(`
`))}}function Ps(s,e){let a=0;for(const l of Object.values(s)){let r=l.number;a+=Math.max(0,r-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased)}return a}function Re(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${ye(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")}const Ee={};function Oe(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:F}=s,c=[e,a,l,r,[...F].sort((u,C)=>u-C)].join("|");if(Ee[c])return Ee[c];let i=[0,0,0],f=[0,0,0,0],h=1-.75**t;if(e>0){i[0]=1;let u=1-.75**e;l===.5&&(u*=1.25,h*=1.25),f[0]=F.reduce((C,p)=>C+1+(p-1)*u,0)}const o=F.reduce((u,C)=>u+C);a&&(i[1]=1,f[1]=o),r>0&&(f[2]=o,a?(i[2]=1-.75**r,l===.5&&(i[2]*=1.25)):i[2]=1);let d=1;e>0&&(i[0]*=1+l,d*=1-l,f[0]*=i[0]),a&&(i[1]*=1+d*l,d*=1-l,f[1]*=i[1],f[3]=f[1]*h),r>0&&(i[2]*=1+d*l,d*=1-l,f[2]*=i[2]);const S=[i.map(u=>u*F.length),f];return Ee[c]=S,S}function Ds(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:F}=s;let c=[0,0,0],i=[0,0,0,0],f=1-.75**e,h=1-.75**r,o=1-.75**t;l===.5&&(f*=1.25,h*=1.25,o*=1.25);const d=p=>{c[0]++,i[0]++;for(let N=0;N<p-1;N++)Math.random()<f&&i[0]++},S=p=>{c[1]++,i[1]+=p;for(let N=0;N<p;N++)Math.random()<o&&i[3]++},u=p=>{c[2]++,i[2]+=p};for(const p of F){let N=!1;e>0&&(d(p),!N&&Math.random()<l&&(N=!0,d(p))),S(p),!N&&Math.random()<l&&(N=!0,S(p)),r>0&&Math.random()<h&&(u(p),!N&&Math.random()<l&&(N=!0,u(p)))}return[c,i]}const Ms={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},We={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>We[s]=!0);class vs{constructor(e,a=[],l=[]){D(this,"seed");D(this,"mapSize");D(this,"frontDoor");D(this,"startingCards");D(this,"cards");D(this,"playerCount");D(this,"turbo");D(this,"_actionInfoCacheByCards",{});D(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=Ms[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:a});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=0,c=[],i=[],f=0,h=[],o=0,d=[];for(const k of a)switch(k.Name==="All You Can Eat"&&(r=!0),k.Name==="Double Helpings"&&(t=!0),k.DishType){case R.Dessert:f++,k.DishValue&&h.push(k.DishValue);break;case R.Starter:k.DishValue&&c.push(k.DishValue),F++;break;case R.Side:k.DishValue&&d.push(k.DishValue),o++;break;case R.Main:case R.Base:k.Name==="Tacos"?(i.push(2),i.push(3)):k.DishValue&&i.push(k.DishValue)}let S=t?.5:r?.25:0,u=[0,0,0,0];if(u[0]=Fe(c),u[1]=Fe(i),u[2]=Fe(h),u[3]=Fe(d),t)for(let k=0;k<3;k++)u[k]&&(u[k]+=3);const[C,p]=Oe({starters:F,main:!!u[1],doubleOrderChance:S,desserts:f,sides:o,groupSizes:l});let N=0;for(let k=0;k<p.length;k++)N+=p[k]*u[k];const L=je(this.playerCount),A=this.getBookingDeskCount(e),W=this.getBookingDeskMoney(e);return L*(N+A*W)}courseInfo(e){if(e===0)return[[0,0,0],[0,0,0,0]];const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=0,c=[],i=[],f=0,h=[],o=0,d=[];for(const p of a)switch(p.Name==="All You Can Eat"&&(r=!0),p.Name==="Double Helpings"&&(t=!0),p.DishType){case R.Dessert:f++,p.DishValue&&h.push(p.DishValue);break;case R.Starter:p.DishValue&&c.push(p.DishValue),F++;break;case R.Side:p.DishValue&&d.push(p.DishValue),o++;break;case R.Main:case R.Base:p.Name==="Tacos"?(i.push(2),i.push(3)):p.DishValue&&i.push(p.DishValue)}let S=t?.5:r?.25:0,u=[0,0,0,0];if(u[0]=Fe(c),u[1]=Fe(i),u[2]=Fe(h),u[3]=Fe(d),t)for(let p=0;p<3;p++)u[p]&&(u[p]+=3);return Oe({starters:F,main:!!u[1],doubleOrderChance:S,desserts:f,sides:o,groupSizes:l})}actionInfo(e){if(e===0)return 0;const a=this.getCardsByDay(e),l=a.map(P=>P.Name).sort().join(","),r=this._actionInfoCacheByCards[l];if(r)return r;let t=[1,1,1],F=[[],[5],[]],c=0;const i=this.getGroupSizes(e);let f=!1,h=!1,o=0,d=[],S=[],u=0,C=[],p=0,N=[];for(const P of a){switch(P.Name==="All You Can Eat"&&(f=!0),P.Name==="Double Helpings"&&(h=!0),P.Name){case"Picky Eaters":F[1][0]++;break;case"Leisurely Eating":c+=2;break;case"Instant Service":for(let w=0;w<3;w++)t[w]--;break;case"Ice Cream":F[2].push(5);break;case"Cheese Board":F[2].push(10);break;case"Cherry Pie":F[2].push(11);break;case"Apple Pie":F[2].push(15);break;case"Pumpkin Pie":F[2].push(16);break}switch(P.DishType){case R.Dessert:u++,P.DishValue&&C.push(P.DishValue);break;case R.Starter:P.DishValue&&d.push(P.DishValue),o||(t[0]=4),F[0].push(15),o++;break;case R.Side:P.DishValue&&N.push(P.DishValue),p++;break;case R.Main:case R.Base:P.Name==="Tacos"?(S.push(2),S.push(3)):P.DishValue&&S.push(P.DishValue)}}let L=h?.5:f?.25:0,A=0;A+=i.length*c;const[W,k]=Oe({starters:o,main:!0,doubleOrderChance:L,desserts:u,sides:p,groupSizes:i});W.forEach((P,w)=>A+=P*t[w]);{let P=0;for(const w of F)for(let z=0;z<w.length;z++)w[z]+=P,P+=1,P*=2}return k.forEach((P,w)=>{var z;if((z=F[w])!=null&&z.length){if(!w){const pe=Math.ceil(P/F[w].length/3);A+=pe*F[w].reduce((J,Ne)=>J+Ne,0);return}A+=P*Fe(F[w])}}),this._actionInfoCacheByCards[l]=A,A}simulateMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=[[],[],[],[]];for(const C of a)switch(C.Name==="All You Can Eat"&&(r=!0),C.Name==="Double Helpings"&&(t=!0),C.DishType){case R.Dessert:C.DishValue&&F[2].push(C.DishValue);break;case R.Starter:C.DishValue&&F[0].push(C.DishValue);break;case R.Side:C.DishValue&&F[3].push(C.DishValue);break;case R.Main:case R.Base:C.Name==="Tacos"?(F[1].push(2),F[1].push(3)):C.DishValue&&F[1].push(C.DishValue)}let c=t?.5:r?.25:0,i=0;t&&(i+=3);const[f,h]=Ds({starters:F[0].length,main:!!F[1].length,doubleOrderChance:c,desserts:F[2].length,sides:F[3].length,groupSizes:l});let o=0;for(let C=0;C<h.length;C++){let p=h[C];for(;p--;)C<3&&(o+=i),o+=F[C][Math.floor(Math.random()*F[C].length)]}const d=je(this.playerCount),S=this.getBookingDeskCount(e),u=this.getBookingDeskMoney(e);return d*(o+S*u)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const l=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(f=>f.Name==="Herd Mentality"))return Math.min(l,3)+1;const r=[],t=this.getCardsByDay(e);let F=1;(this.turbo||t.some(f=>f.Name==="Morning Rush"))&&(r.push(.2),F++),(this.turbo||t.some(f=>f.Name==="Lunch Rush"))&&(r.push(.5),F++),(this.turbo||t.some(f=>f.Name==="Dinner Rush"))&&(r.push(.8),F++);const c=a/this.getDayLength(e),i=.1/l;for(let f=1;f<l;f++){const h=f/l,o=h-i-c,d=h+i+c;let S=!1;for(const u of r)if(o<=u&&d>=u){S=!0;break}S||F++}return F}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(F=>F.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),t=a*(1+l)/r;return Math.ceil(t)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=this.seed?Ve(1997821,e,this.seed).random:new Ie(Math.floor(Math.random()*4294967295)),l=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(d=>d.Name==="Herd Mentality");let t=l,F=[],[c,i]=this.getGroupSizeRange(e);this.seed||(i=c);{let d=t-1;for(;d--;)a.value}for(;t--;)F.push(a.range(c,i+1)),!r&&t!==l-1&&a.value;let f=this.turbo?3:this.getCardsByDay(e).filter(d=>We[d.Name]).length;const h=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let o=f*h;for(;o--;)F.push(a.range(c,i+1));if(!this.seed){let d=c;for(let S=0;S<F.length;S++)F[S]=d,d++,d>i&&(d=c);debugger}return F}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const t=Math.floor((e-1)/3);a+=t,l+=t;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),r=this.getPlayerModifier(),t=this.getCourseModifier(e),F=this.getDayRate(e),c=this.getCustomersPerHour(e),i=this.getAdvertisingModifier(e);return .85**a*(l/25*F*r)/t*c*i}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(r=>r.DishType===R.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(a+=.25),l.some(r=>r.DishType===R.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,r)=>l+r.CustomerMultiplier,0)}getMapSize(){const a=new ge(this.seed,5078598).useSubcontext(0).random.range(0,8);let l;switch(a){case 0:l="Small (2)";break;case 4:l="Medium (2)";break;case 1:case 5:l="Diner (1)";break;case 2:case 6:l="Large (3)";break;case 3:case 7:l="Huge (4)";break;default:throw new Error}return l}getLayoutInfo(){const a=new ge(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new Ie(new ge(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function je(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Bs(s,e,a,l){let r=[],t=[];const F=s.cards.slice(e);let c=new vs(s.seed,a,F);c.playerCount=l;for(let i=1;i<=15;i++)r.push(c.guessMoney(i)),t.push(c.getBookingDeskCount(i));return r[0]+=c.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:t}}var _e=self;function Rs(s){_e.postMessage(s)}const Ns=["Copying Desk","Blueprint Cabinet","Clipboard Stand","Research Desk"],ws=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:0,substitutes:[],skipMissing:!0},{goal:"Sharp Knife",number:1,substitutes:[],skipMissing:!0},{goal:"Workstation",number:1,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:oe.filter(s=>!s.ThemeRequired&&!Ns.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];_e.onmessage=s=>{let{config:e,tiers:a,playerCount:l}=s.data;for(const o of a)for(const d of o){const S=oe.filter(u=>u.Name===d.goal)[0];S.ThemeRequired&&(d.substitutes=oe.filter(u=>u.ThemeRequired===S.ThemeRequired).map(u=>u.Name))}for(;!a.at(-1).length;)a.pop();const r=[...ws],t=a.flatMap(o=>o.flatMap(d=>[d.goal,...d.substitutes])),F=r.length-1;r[F].substitutes=r[F].substitutes.filter(o=>!t.some(d=>o===d)),a[a.length-1].push(...r);const c=e.cards.filter(o=>$e.some(d=>d.Name===o.Name)).length+1,i=e.cards.slice(0,c);let{expectedMoneyByDay:f,expectedBookingDesksByDay:h}=Bs(e,c,i,l);ks(e.seed,i,e.cards.slice(c).map(o=>o.Name),a,e.solo,f,h,Rs)}})();
