var as=Object.defineProperty;var ls=(O,V,Y)=>V in O?as(O,V,{enumerable:!0,configurable:!0,writable:!0,value:Y}):O[V]=Y;var g=(O,V,Y)=>(ls(O,typeof V!="symbol"?V+"":V,Y),Y);(function(){"use strict";class O{constructor(e,a){g(this,"array");g(this,"objectiveFunctions");this.array=V(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:F}=Y(e,this.array[a],this.objectiveFunctions);if(F)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function V(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const F=a.pop();let r=l.length;for(;r--;){let{better:t,worse:d}=Y(F,l[r],e);if(d)continue e;t&&l.splice(r,1)}l.push(F)}return l}function Y(s,e,a){let l=!0,F=!0,r=0;for(;(l||F)&&r<a.length;){const t=a[r](s,e);t<0?F=!1:t>0&&(l=!1),r++}return{better:l,worse:F}}var Be=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
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
`;const De=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],Ne=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],te=Be.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let F;switch(Ne[l]){case"number":F=Number(e[l]);break;case"boolean":F=e[l]==="True";break;case"number[]":e[l]===""?F=[]:F=e[l].split(":").map(r=>Number(r));break;default:F=e[l]}a[De[l]]=F}return a});class we{constructor(e){g(this,"Staple");g(this,"Tags");g(this,"StapleWhenMissing");g(this,"Appliance");g(this,"IsRemoved");g(this,"Filter");g(this,"DecorationRequired");g(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var J=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(J||{}),se=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(se||{});const Ce={DefaultShoppingTag:892};var Se=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(Se||{}),ce=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(ce||{}),Ie="38";const Ae=Number(Ie);function xe(s,e){return Math.floor(Math.random()*(e-s))+s}function Ee(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?xe(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}class Fe{constructor(e,a){g(this,"fixedSeed");g(this,"instance");g(this,"random");typeof e=="string"&&(e=Oe(e)),this.fixedSeed=e,this.instance=a,this.random=new ye(e+Math.imul(124192293,a))}useSubcontext(e){return new Fe(this.fixedSeed,124192293*e+this.instance)}}class ye{constructor(e){g(this,"seed");const a=d=>Math.imul(1812433253,d)+1>>0,l=e>>0,F=a(l),r=a(F),t=a(r);this.seed=[l,F,r,t]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function Oe(s){const a=new TextEncoder().encode(s);let l=5381,F=a.length;for(;F>0;){let r=--F;l=(l<<5)+l+a[r]}return l>>0}function Pe(s,e,a){return new Fe(a,s*1231231+e)}var ae=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(ae||{}),Q=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(Q||{});const He=te.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class Ge{constructor(e,a=0){g(this,"seed");g(this,"mapSize");g(this,"numTiles");g(this,"baseUpgradeChance");g(this,"OwnedAppliances");g(this,"Cards");g(this,"Theme");g(this,"cache",new Map);g(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=ce.Null,this.cacheDay=-1}getLayoutInfo(){const a=new Fe(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,F;switch(a){case 0:F=70,l=2;break;case 4:F=84,l=2;break;case 1:case 5:F=60,l=1;break;case 2:case 6:F=9*13,l=3;break;case 3:case 7:F=12*16,l=4;break;default:throw new Error}return[l,F]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.UnlockGroup===ae.PrimaryTheme&&(this.Theme=ce[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>te.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let F=0;F<e.length;F++){const r=e[F];let t=r.blueprintCount;a%5===0&&(t+=3,F===0&&(t+=2)),l+=t*(He-1+1),r.spawnInside||(l+=qe(r.playerInside,this.numTiles)),l+=Ae}return l}buildShopOptions(e,a,l){let F=[];for(const t of te)if(!(!t.IsPurchasable&&!t.IsPurchasableAsUpgrade)){var r=new we(t);if(r.Staple==J.NonStaple||r.Staple==J.WhenMissing){if((r.Tags&se.Basic)>se.None)r.Staple=J.FixedStaple;else if(r.StapleWhenMissing){const o=r.Appliance.Name;o!="Research Desk"&&o!="Blueprint Cabinet"&&o!="Plates"&&console.log(`Unexpected ${r.Appliance.Name} StapleWhenMissing Appliance`),e.some(p=>p.ID===r.Appliance.ID)?r.Staple=J.NonStaple:r.Staple=J.WhenMissing}}const f=r.Appliance;if(f.SellOnlyAsDuplicate)e.some(o=>o.ID===f.ID)||(r.IsRemoved=!0);else if(f.RequiresForShop.length>0){let o=!1;for(const p of f.RequiresForShop)e.some(k=>k.ID===p)&&(o=!0);r.IsRemoved=!o}else f.SellOnlyAsUnique&&(f.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${f.Name}, ${f.ID}`),e.some(o=>o.ID===f.ID)&&(r.IsRemoved=!0));(r.Appliance.Name==="Sink"||r.Appliance.Name==="Plates")&&l.every(o=>!o.isMain)&&(r.IsRemoved=!0),r.Filter==Se.RefreshableProvider&&(e.some(o=>o.AllowRefreshes)||(r.IsRemoved=!0)),r.DecorationRequired!=ce.Null&&r.DecorationRequired!=a&&(r.IsRemoved=!0),f.RequiresProcessForShop.length>0&&(f.RequiresProcessForShop.some(o=>l.some(p=>p.RequiredProcesses.includes(o)))||(r.IsRemoved=!0)),F.push(r)}return F}initRandom(e){return Pe(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,F=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let r=e[e.length-1].blueprintCount,t;if(a%5==0){l?r=10:r+=3,t=[];for(let p=0;p<r;p++)t[p]=se.Decoration;if(l)for(const p of[1,2])t[t.length-p]=se.SpecialEvent}else if(e.length>1){t=[];for(let p=0;p<r;p++)t[p]=Ce.DefaultShoppingTag}else{const p=Ce.DefaultShoppingTag,k=Math.max(1,r),P=Math.max(0,Math.min(F.filter(b=>b.Staple!==J.NonStaple&&!b.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),k)),A=Math.max(0,k-P);r=k,t=[];for(let b=0;b<P;b++)t[b]=se.Basic;for(let b=P;b<P+A;b++)t[b]=p}const d=this.initRandom(a).random;let f=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(f)&&this.cache.get(f).length>=r)return this.cache.get(f).slice(0,r);const o=f;for(;f--;)d.value;{const p=[...F],k=[],P=this.getUpgradeChance(a),A=[];for(let b=0;b<r;b++){const G=t[b],j=d.valueFloat<P;Ee(p,d);for(let N=0;N<p.length;N++){const w=p[N];if(!w.IsRemoved&&!A.includes(w.Appliance)&&!!w.MatchesRequestTags(G)&&!(!j&&w.Staple==J.NonStaple&&w.SellAsUpgrade)){G!=se.Decoration&&A.push(w.Appliance),k[b]=w.Appliance;break}}k[b]==null&&console.log(`Wasn't able to find a valid roll for blueprint ${b}`)}return this.cache.set(o,k),k}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function qe(s,e){return s?e-2:e-1}var $e=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
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
`,ze=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
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
`;const ge=$e.trim().split(`\r
`).filter(s=>s).map(s=>{var re,Z;const[e,a,l,F,r,t,d,f,o,p,k,P]=s.split(","),A=Number(e),b=Number(l),G=F!=null&&F.length?F.split(":").map($=>Number($)):[],q=r.length?r.split(":").map($=>Number($)):[],j=t!=null&&t.length?(re=t==null?void 0:t.split(":"))==null?void 0:re.map($=>Number($)):[],N=d!=null&&d.length?(Z=d==null?void 0:d.split(":"))==null?void 0:Z.map($=>Number($)):[],w=f==="True",x=o==="True",B=Number(p),K=Number(k),de=Number(P);return{ID:A,Name:a,UnlockGroup:b,Requires:G,BlockedBy:q,RequiredProcesses:j,IngredientProviders:N,isMain:w,isStarterOrSide:x,DishType:B,CustomerMultiplier:K,DishValue:de}}),Le=[...[{ID:447437163,Name:"Country",UnlockGroup:ae.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Q.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:ae.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Q.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:ae.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Q.Null,CustomerMultiplier:0,DishValue:0},ge.filter(s=>s.Name==="Community")[0],{ID:1766067755,Name:"Romantic",UnlockGroup:ae.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Q.Null,CustomerMultiplier:0,DishValue:0},{ID:1958825350,Name:"Turbo",UnlockGroup:ae.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:Q.Null,CustomerMultiplier:0,DishValue:0}]].sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>ge.filter(e=>e.Name===s)[0]),ze.trim().split(`\r
`).filter(s=>s).map(s=>{var x,B;const[e,a,l,F,r,t,d,f,o,p]=s.split(","),k=Number(e),P=Number(l),A=F!=null&&F.length?(x=F==null?void 0:F.split(":"))==null?void 0:x.map(K=>Number(K)):[],b=r!=null&&r.length?(B=r==null?void 0:r.split(":"))==null?void 0:B.map(K=>Number(K)):[],G=t==="True",q=d==="True",j=Number(f),N=Number(o),w=Number(p);return{ID:k,Name:a,UnlockGroup:P,Requires:[],BlockedBy:[],RequiredProcesses:A,IngredientProviders:b,isMain:G,isStarterOrSide:q,DishType:j,CustomerMultiplier:N,DishValue:w}}).sort((s,e)=>s.Name<e.Name?-1:1);const Ue=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],We=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],he={};function pe(s){return he[s]===void 0&&(he[s]=te.filter(e=>e.Name===s)[0]),he[s]===void 0&&console.error(`Could not find ${s} appliance`),he[s]}const Ve=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function me(s){let e=0;(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime);for(const a of Object.values(s.achieved))e+=s.cumulativeRerolls*2,e+=a.goalsPurchased+a.substitutesPurchased;return e}function Te(s,e){return(a,l)=>{const F=a.achieved[e],r=l.achieved[e],t=Math.min(F.goalsPurchased,s);let f=Math.min(r.goalsPurchased,s)-t;return f===0?F.goalsPurchased>=s||F.goalsPurchased+F.substitutesPurchased>=s&&r.goalsPurchased+r.substitutesPurchased>=s?F.substitutesPurchased-r.substitutesPurchased:r.substitutesPurchased-F.substitutesPurchased:f}}const je={"Copying Desk":4,"Metal Table":4};function Ke(s,e,a,l,F=!0,r=We,t=()=>{}){var Re,Me;let d={};const f=[],o=new Array(l.length).fill(0).map(()=>({})),p={};let k=0,P=0;const A={},b=e.some(c=>c.Name==="Turbo"),G=[];let q=[],j=0;const N={};for(const c of l){for(const i of c){const{goal:C,number:v,substitutes:M,skipMissing:h=!1}=i;for(const y of M)p[y]=C;N[C]?h||(N[C].number+=v):(N[C]={...i},h&&(N[C].number=0));for(let y=0;y<=j;y++){if(o[y]===void 0)debugger;o[y][C]?o[y][C].number+=v:o[y][C]={...i}}for(let y=j+1;y<o.length;y++){if(o[y]===void 0)debugger;o[y][C]||(o[y][C]={...i,number:0})}h||(P+=pe(C).PurchaseCost*v*(b?.5:1))}try{f.push(JSON.parse(JSON.stringify(N)))}catch{console.log(o),console.log(o[0]);debugger}j++}const w=o[0];d=f.shift();for(const c of Object.values(w)){const{goal:i,number:C}=c;A[i]={...c,substitutesPurchased:0,goalsPurchased:0},c.goal!=="Starter Bin"&&(G.push(Te(C,i)),q.push(Te(C,i)))}const x=new O([],[...G,(c,i)=>me(c)-me(i),(c,i)=>c.actionHistory.length-i.actionHistory.length,(c,i)=>c.cumulativeRerolls-i.cumulativeRerolls,(c,i)=>(c.day+1)%5?c.upgradesInProgress-i.upgradesInProgress:0]),B=b?7:5,K=[{spawnInside:!0,blueprintCount:B},{spawnInside:!1,playerInside:!1,blueprintCount:B}];F||K.push({spawnInside:!1,playerInside:!0,blueprintCount:B});const de=[{spawnInside:!0,blueprintCount:B},{spawnInside:!1,playerInside:!0,blueprintCount:B},{spawnInside:!1,playerInside:!1,blueprintCount:B}];function re(c,i,C){const v={...c};for(const M of Object.values(i)){const h=M.goal;v[h]={...v[h]},v[h].goalsPurchased+=M.goalsPurchased,C&&(v[h].substitutesPurchased+=M.substitutesPurchased)}return v}let Z=[];function $(c,i,C,v=!1){const M=i.fodderUsed;for(const h of c){let y=1+h.achieved["Copying Desk"].goalsPurchased;const _=1+h.achieved["Blueprint Cabinet"].goalsPurchased;let m=_;if(m*=y,m-=h.upgradesInProgress,m<0||m<M)continue;let ne=h.cumulativeRerolls+i.cumulativeRerolls,u=ne*(ne+1)/2*10+h.applianceCosts;const S=re(h.achieved,i.achieved,!1),n=re(h.achieved,i.achieved,!0),H=_e(d,S);if(z<=0&&H>0||u>L)continue;let U=0,W=0,X=0;{let le=L-u;for(const T of Object.values(i.achieved)){le-=T.goalsPurchased*pe(T.goal).PurchaseCost*(b?.5:1);let ee=!1;(le<0||T.substitutesPurchased)&&(ee=!0,U++,X+=T.substitutesPurchased*(je[T.goal]??1)),T.goal==="Metal Table"&&T.goalsPurchased+T.substitutesPurchased&&(n["Copying Desk"].goalsPurchased||h.achieved["Copying Desk"].substitutesPurchased)&&(ee||W++,W++,X++)}if(U>n["Blueprint Cabinet"].goalsPurchased+1)continue}u+=i.applianceCosts;const D=h.deskTime+Math.max(0,M-_)*5*(h.achieved["Clipboard Stand"].goalsPurchased?.5:1)+(X*5+Ue[i.day])*(n["Clipboard Stand"].goalsPurchased?.5:1),I={...i,rerollConfigs:[...h.rerollConfigs,i.rerollConfigs],achieved:n,money:L-u,actionHistory:[...h.actionHistory,...i.actionHistory],upgradesInProgress:U,cumulativeRerolls:h.cumulativeRerolls+i.cumulativeRerolls,applianceCosts:h.applianceCosts+i.applianceCosts,deskTime:D};if(!(U>n["Blueprint Cabinet"].goalsPurchased+1)){if(W&&(W===1||U+1<=n["Blueprint Cabinet"].goalsPurchased+1)&&(I.upgradesInProgress+=W,n["Metal Table"].goalsPurchased++,I.actionHistory.push("Copy Metal Table"),I.applianceCosts+=30),I.money>=0){if(H<z&&(z=H,console.log(`best so far missing ${H} pieces `+be(I))),H<=0){x.add(I)&&ve();continue}else if(z<=0)continue}if(m>k&&(k=m),v){const le=h.cumulativeRerolls;for(let T=0;T<=m;T++)Z[T]===void 0&&(Z[T]=new O([],Ve)),Z[T].add([le,u]);continue}C.add(I)}}return z}const ie=new O([{achieved:{...A},actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:0,day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...G,(c,i)=>c.applianceCosts-i.applianceCosts,(c,i)=>c.cumulativeRerolls-i.cumulativeRerolls]);let z=1/0,R=0,L=b?30:0;const E=new Ge(s),fe=["Plates","Research Desk"];let oe=[];{const c=["Booking Desk","Blueprint Cabinet"];te.filter(i=>c.includes(i.Name)).forEach(i=>E.OwnedAppliances.push(i))}for(const c of e)E.addCard(c);function Ze(c,i){let C=[{...c}];for(const v of i){let M=v.Name,h=c.achieved[v.Name],y=!1;if(!h){if(h=c.achieved[p[v.Name]],!h)continue;y=!0,M=p[v.Name]}h.goalsPurchased>=o[0][M].number||y&&h.goalsPurchased+h.substitutesPurchased>=o[0][M].number||(C=C.concat(C.map(_=>{const m={..._};return m.achieved={...m.achieved},m.numFloor--,m.achieved[h.goal]={...h,goalsPurchased:h.goalsPurchased+(y?0:1),substitutesPurchased:h.substitutesPurchased+(y?1:0)},m.applianceCosts+=pe(M).PurchaseCost*(b?.5:1),m.actionHistory=[...m.actionHistory,`buy ${v.Name}`+(y?` for ${h.goal}`:"")],h.goal==="Starter Bin"&&(m.fodderPurchases=[...m.fodderPurchases],m.fodderPurchases[1]++),m})))}return C}for(;z;){const c=ie.array;ie.clear();const i=new O([],[...q,(u,S)=>u.cumulativeRerolls-S.cumulativeRerolls,(u,S)=>u.applianceCosts-S.applianceCosts]);if(L+=r[R],R++,R>14)break;if(R>1&&c.length===0){debugger;break}let C=1/0,v=10*1e3;const M=Math.min(C-1,1/0);if(L>=P){const u=Math.sqrt((L-P)/10*2);console.log(`Have ${L} on day ${R}, need ${P} to buy everything. Allows for ~${u} rerolls across all days`)}R%5||(C=1);const h=a.shift(),y=ge.filter(u=>u.Name===h)[0];E.handleNewCardSpawnEffects(y);const _=E.getAppliances([{spawnInside:!0,blueprintCount:B}],R);if(fe.length)for(let u=fe.length-1;u>=0;u--){let S=_.length;for(;S--;){const n=_[S];if(n.Name===fe[u]){console.log(`buying ${n.Name} on day ${R}`),oe.push(n),fe.splice(u,1),L-=n.PurchaseCost*(b?.5:1),_.splice(S,1);break}}}let m=new O([{day:R,rerollConfigs:[],achieved:{...A},numFloor:B,fodderAvailable:k,fodderUsed:0,money:L,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(u,S)=>E.getPrngAdvancements(u.rerollConfigs,R)-E.getPrngAdvancements(S.rerollConfigs,R),(u,S)=>-E.getPrngAdvancements(u.rerollConfigs,R)+E.getPrngAdvancements(S.rerollConfigs,R),...q,(u,S)=>u.cumulativeRerolls-S.cumulativeRerolls,(u,S)=>u.applianceCosts-S.applianceCosts,(u,S)=>S.numFloor+S.fodderAvailable-u.numFloor+u.fodderAvailable,(u,S)=>u.numFloor-S.numFloor]);$(c,m.array[0],ie,!0);let ne=1/0;e:for(;C--&&(ne=Date.now()+v*.9**(((Me=(Re=m.array[0])==null?void 0:Re.rerollConfigs)==null?void 0:Me.length)??0),m.array[0]!==void 0);){const u=Z.map(n=>n.array.reduce((H,[U,W])=>Math.min(H,W+m.array[0].rerollConfigs.length*(U+1)*10),1/0));console.log(`Seed ${s} Day ${R} Reroll ${m.array[0].rerollConfigs.length} expanding ${m.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:u});const S=m.array;if(!f.length&&z<=0){const n=S[0].rerollConfigs.length;if(n*((n+1)/2)*10+P>L){console.log("get me outta here!");break}}m.clear();for(const n of S){if(Date.now()>ne){m.array.sort((D,I)=>D.numFloor-I.numFloor||D.fodderAvailable-I.fodderAvailable||I.applianceCosts-D.applianceCosts||Math.random()-.5);continue e}if(n.numFloor+n.fodderAvailable===0||n.money<n.rerollConfigs.length*10)continue;let H=0;if(u[0]>n.money)continue;for(let D=1;D<u.length;D++)if(H++,u[D]>n.money){H=D-1;break}let U=M<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?n.numFloor+Math.min(n.fodderAvailable,H-n.fodderUsed):B;const W=M<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?Math.max(1,n.numFloor):B;let X;n.rerollConfigs.length===0?X=de:M<n.rerollConfigs.length?X=[n.rerollConfigs.at(-1)]:X=K,oe.length&&n.rerollConfigs.length===1&&(E.OwnedAppliances.push(...oe),oe=[]),E.getAppliances([...n.rerollConfigs,{spawnInside:!0,blueprintCount:U}],n.day);for(const D of X){const I=T=>{if(!m.add(T)||!i.add(T))return;T.fodderPurchases[0]+T.fodderPurchases[1]||$(c,T,ie)},le=[W];for(let T=U;T>W;T--)le.push(T);for(const T of le){const ee=[...n.rerollConfigs,{...D,blueprintCount:T}],Xe=ee.length===1?_:E.getAppliances(ee,n.day),ue=T-n.numFloor;if(ue>n.fodderAvailable)debugger;const es=Ze({...n,fodderPurchases:[n.fodderPurchases[1],0],money:n.money-n.rerollConfigs.length*10,rerollConfigs:ee,numFloor:ee.length===1?T-oe.length:T,fodderAvailable:n.fodderAvailable-ue,fodderUsed:n.fodderUsed+ue,cumulativeRerolls:n.rerollConfigs.length?n.cumulativeRerolls+1:0,actionHistory:n.rerollConfigs.length?[...n.actionHistory,`${ue?`take ${ue} out, `:""}reroll ${D.spawnInside?"I":D.playerInside?"OI":"OO"}`]:[`day ${n.day} spawn`,`spawn ${D.spawnInside?"I":D.playerInside?"OI":"OO"}`]},Xe);for(const ss of es)I(ss);if(Date.now()>ne)break}}}}if(E.addCard(y),z<=0){if(!f.length){t((z<=0?`full build on ${s} by day ${R}: 
`:"")+x.array.map(u=>be(u)).join(`
`));break}d=f.shift(),o.shift(),q=[];for(const{goal:u,number:S}of Object.values(o[0]))q.push(Te(S,u));z=1/0,Z=[],ve(!0),ie.array=x.array,x.clear(),x.objectiveFunctions}}return R;function ve(c=!1){t(`tier ${l.length-f.length-(c?1:0)} build on ${s} by day ${R}${c?"":" (Partial)"}: 
`+x.array.map(i=>be(i)).join(`
`))}}function _e(s,e){let a=0;for(const l of Object.values(s)){let F=l.number;a+=Math.max(0,F-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased)}return a}function be(s){const e=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${me(s)} ${s.cumulativeRerolls} ${s.applianceCosts} (${e}) ${s.cumulativeRerolls}, `+s.actionHistory.join(", ")}class Ye{constructor(e,a=[],l=[]){g(this,"seed");g(this,"mapSize");g(this,"frontDoor");g(this,"startingCards");g(this,"cards");g(this,"playerCount");g(this,"turbo");g(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=this.mapSize,this.turbo=this.startingCards.some(F=>{if(F===void 0){console.log({startingCards:a});debugger}return F.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCustomerCount(e),l=this.startingCards.reduce((F,r)=>F+r.DishValue,0);if(Number.isNaN(a))debugger;if(Number.isNaN(l))debugger;return a*l+this.getBookingDeskCount(e)*this.getBookingDeskMoney(e)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:a=Math.max(0,Math.floor((e-1)/3)),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e){return Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e))+(this.turbo?3:this.getCardsByDay(e).filter(a=>a.Name.includes(" Rush")).length)}getGroupCount(e){const a=this.getExpectedCustomers(e)*(1+this.getCardsByDay(e).filter(l=>l.Name==="Closing Time").length*.2)/this.getExpectedGroupSize(e);return Math.ceil(a)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=Pe(1997821,e,this.seed).random,l=this.getGroupCount(e),F=this.getCardsByDay(e).some(P=>P.Name==="Herd Mentality");let r=l,t=[],[d,f]=this.getGroupSizeRange(e);{let P=r-1;for(;P--;)a.value}for(;r--;)t.push(a.range(d,f+1)),!F&&r!==l-1&&a.value;let o=this.turbo?3:this.getCardsByDay(e).filter(P=>P.Name.includes(" Rush")).length;const p=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let k=o*p;for(;k--;)t.push(a.range(d,f+1));return console.log({groups:t}),t}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const F of this.getCardsByDay(e))switch(F.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),F=this.getPlayerModifier(),r=this.getCourseModifier(e),t=this.getDayRate(e),d=this.getCustomersPerHour(e),f=this.getAdvertisingModifier(e);return .85**a*(l/25*t*F)/r*d*f}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(F=>F.DishType===Q.Dessert)&&(a+=.25),l.some(F=>F.DishType===Q.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1.5;return this.turbo&&(a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,F)=>l+F.CustomerMultiplier,0)}getMapSize(){const a=new Fe(this.seed,5078598).useSubcontext(0).random.range(0,4);let l;switch(a){case 0:l=2;break;case 1:l=1;break;case 2:l=3;break;case 3:l=4;break;default:throw new Error}return l}getDoorInfo(){if(this.mapSize!==1)return-1;let e=new ye(new Fe(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}var ke=self;function Je(s){console.log(`reporting - ${s.split(`
`)[0]}`),ke.postMessage(s)}const Qe=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:["Auto Plater","Sink","Hob","Counter","Bin","Compactor Bin","Composter Bin","Conveyor","Dish Rack","Expanded Bin","Fire Extinguisher","Freezer","Kitchen Floor Protector","Mop","Plates","Pot Stack","Rolling Pin","Sharp Knife","Soaking Sink"],skipMissing:!0}];ke.onmessage=function(s){let{config:e,tiers:a}=s.data;a=a.filter(d=>d.length),a[a.length-1].push(...Qe);const l=[e.cards[0]];e.blueprintCount===7&&l.push(Le.filter(d=>d.Name==="Turbo")[0]);let F=[],r=new Ye(e.seed,l,e.cards.slice(1)),t=r.guessMoney(0);console.log({cumulative:t});for(let d=1;d<=15;d++)t+=r.guessMoney(d),F.push(t);console.log({expectedMoneyByDay:F}),Ke(e.seed,l,e.cards.slice(1).map(d=>d.Name),a,e.solo,F,Je)}})();
