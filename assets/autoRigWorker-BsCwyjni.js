var As=Object.defineProperty;var xs=(K,se,he)=>se in K?As(K,se,{enumerable:!0,configurable:!0,writable:!0,value:he}):K[se]=he;var y=(K,se,he)=>xs(K,typeof se!="symbol"?se+"":se,he);(function(){"use strict";class K{constructor(e,a){y(this,"array");y(this,"objectiveFunctions");this.array=se(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:r}=he(e,this.array[a],this.objectiveFunctions);if(r)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function se(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const r=a.pop();let t=l.length;for(;t--;){let{better:F,worse:c}=he(r,l[t],e);if(c)continue e;F&&l.splice(t,1)}l.push(r)}return l}function he(s,e,a){let l=!0,r=!0,t=0;for(;(l||r)&&t<a.length;){const F=a[t](s,e);F<0?r=!1:F>0&&(l=!1),t++}return{better:l,worse:r}}var ss=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
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
-1380985631,True,False,Banner,False,False,,,8192,0,0,False,False,0\r
1797739089,True,False,Christmas Tree,False,False,,,8192,0,0,False,False,0\r
-4737636,True,False,Fairy Lights,False,False,,,8192,0,0,False,False,0\r
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
`;const as=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],ls=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],ne=ss.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let r;switch(ls[l]){case"number":r=Number(e[l]);break;case"boolean":r=e[l]==="True";break;case"number[]":e[l]===""?r=[]:r=e[l].split(":").map(t=>Number(t));break;default:r=e[l]}a[as[l]]=r}return a});class rs{constructor(e){y(this,"Staple");y(this,"Tags");y(this,"StapleWhenMissing");y(this,"Appliance");y(this,"IsRemoved");y(this,"Filter");y(this,"DecorationRequired");y(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var ae=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(ae||{}),de=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(de||{});const Oe={DefaultShoppingTag:892};var He=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(He||{}),ve=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(ve||{}),Fs="38";const ns=Number(Fs);function ts(s,e){return Math.floor(Math.random()*(e-s))+s}function os(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?ts(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}const is="1c,1d,1e,1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,13,14,15,16,17,18,19,2c,2d,2e,2f,2g,2h,2i,2j,2k,2l,2m,2n,2o,2p,2q,2r,2s,2t,2u,2v,2w,2x,2y,2z,23,24,25,26,27,28,29,3c,3d,3e,3f,3g,3h,3i,3j,3k,3l,3m,3n,3o,3p,3q,3r,3s,3t,3u,3v,3w,3x,3y,3z,33,34,35,36,37,38,39,4c,4d,4e,4f,4g,4h,4i,4j,4k,4l,4m,4n,4o,4p,4q,4r,4s,4t,4u,4v,4w,4x,4y,4z,43,44,45,46,47,48,49,5c,5d,5e,5f,5g,5h,5i,5j,5k,5l,5m,5n,5o,5p,5q,5r,5s,5t,5u,5v,5w,5x,5y,5z,53,54,55,56,57,58,59,6c,6d,6e,6f,6g,6h,6i,6j,6k,6l,6m,6n,6o,6p,6q,6r,6s,6t,6u,6v,6w,6x,6y,6z,63,64,65,66,67,68,69,7c,7d,7e,7f,7g,7h,7i,7j,7k,7l,7m,7n,7o,7p,7q,7r,7s,7t,7u,7v,7w,7x,7y,7z,73,74,75,76,77,78,79,8c,8d,8e,8f,8g,8h,8i,8j,8k,8l,8m,8n,8o,8p,8q,8r,8s,8t,8u,8v,8w,8x,8y,8z,83,84,85,86,87,88,89".split(",");for(const s of is);function Me(s){return s.length?s.reduce((e,a)=>e+a,0)/s.length:0}class fe{constructor(e,a){y(this,"fixedSeed");y(this,"instance");y(this,"random");typeof e=="string"&&(e=us(e)),this.fixedSeed=e,this.instance=a,this.random=new qe(e+Math.imul(124192293,a))}useSubcontext(e){return new fe(this.fixedSeed,124192293*e+this.instance)}}class qe{constructor(e){y(this,"seed");const a=c=>Math.imul(1812433253,c)+1>>0,l=e>>0,r=a(l),t=a(r),F=a(t);this.seed=[l,r,t,F]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function us(s){const a=new TextEncoder().encode(s);let l=5381,r=a.length;for(;r--;)l=(l<<5)+l+a[r];return l>>0}function Ge(s,e,a){return new fe(a,s*1231231+e)}var pe=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(pe||{}),H=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(H||{});const cs=["Sink","Plates","Dish Rack","Dish Washer","Power Sink","Soaking Sink","Auto Plater"],ze={};for(const s of cs)ze[s]=!0;const hs=ne.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class ds{constructor(e,a=0){y(this,"seed");y(this,"mapSize");y(this,"numTiles");y(this,"baseUpgradeChance");y(this,"OwnedAppliances");y(this,"Cards");y(this,"Theme");y(this,"cache",new Map);y(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=ve.Null,this.cacheDay=-1}getLayoutInfo(){const a=new fe(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.UnlockGroup===pe.PrimaryTheme&&(this.Theme=ve[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>ne.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let r=0;r<e.length;r++){const t=e[r];let F=t.blueprintCount;a%5===0&&(F+=3,r===0&&(F+=2)),l+=F*(hs-1+1),t.spawnInside||(l+=fs(t.playerInside,this.numTiles)),l+=ns}return l}buildShopOptions(e,a,l){const r=l.some(c=>c.Name==="Couples");let t=[];for(const c of ne)if(!(!c.IsPurchasable&&!c.IsPurchasableAsUpgrade)){var F=new rs(c);const d=F.Appliance.Name;(F.Staple==ae.NonStaple||F.Staple==ae.WhenMissing)&&((F.Tags&de.Basic)>de.None?F.Staple=ae.FixedStaple:F.StapleWhenMissing?(d!="Research Desk"&&d!="Blueprint Cabinet"&&d!="Plates"&&console.log(`Unexpected ${d} StapleWhenMissing Appliance`),e.some(o=>o.ID===F.Appliance.ID)?F.Staple=ae.NonStaple:F.Staple=ae.WhenMissing):r&&d==="Flower Pot"&&(F.Staple=ae.BonusStaple));const u=F.Appliance;if(u.SellOnlyAsDuplicate)e.some(o=>o.ID===u.ID)||(F.IsRemoved=!0);else if(u.RequiresForShop.length>0){let o=!1;for(const m of u.RequiresForShop)e.some(D=>D.ID===m)&&(o=!0);F.IsRemoved=!o}else u.SellOnlyAsUnique&&(u.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${u.Name}, ${u.ID}`),e.some(o=>o.ID===u.ID)&&(F.IsRemoved=!0));ze[d]&&l.every(o=>!o.isMain||o.Name==="Tacos")&&(F.IsRemoved=!0),F.Filter==He.RefreshableProvider&&(e.some(o=>o.AllowRefreshes)||(F.IsRemoved=!0)),F.DecorationRequired!=ve.Null&&F.DecorationRequired!=a&&(F.IsRemoved=!0),u.RequiresProcessForShop.length>0&&(u.RequiresProcessForShop.some(o=>l.some(m=>m.RequiredProcesses.includes(o)))||(F.IsRemoved=!0)),t.push(F)}return t}initRandom(e){return Ge(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,r=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let t=e[e.length-1].blueprintCount,F;if(a%5==0){l?t=10:t+=3,F=[];for(let u=0;u<t;u++)F[u]=de.Decoration;if(l)for(const u of[1,2])F[F.length-u]=de.SpecialEvent}else if(e.length>1){F=[];for(let u=0;u<t;u++)F[u]=Oe.DefaultShoppingTag}else{const u=Oe.DefaultShoppingTag,o=Math.max(1,t),m=Math.max(0,Math.min(r.filter(g=>g.Staple!==ae.NonStaple&&!g.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),o)),D=Math.max(0,o-m);t=o,F=[];for(let g=0;g<m;g++)F[g]=de.Basic;for(let g=m;g<m+D;g++)F[g]=u}const c=this.initRandom(a).random;let i=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(i)&&this.cache.get(i).length>=t)return this.cache.get(i).slice(0,t);const d=i;for(;i--;)c.value;{const u=[...r],o=[],m=this.getUpgradeChance(a),D=[];for(let g=0;g<t;g++){const C=F[g],B=c.valueFloat<m;os(u,c);for(let L=0;L<u.length;L++){const q=u[L];if(q.IsRemoved||D.includes(q.Appliance)||!q.MatchesRequestTags(C)||!B&&q.Staple==ae.NonStaple&&q.SellAsUpgrade)continue;C!=de.Decoration&&D.push(q.Appliance),o[g]=q.Appliance;break}o[g]==null}return this.cache.set(d,o),o}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function fs(s,e){return s?e-2:e-1}var gs=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
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
`,ms=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
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
`;const Te=gs.trim().split(`\r
`).filter(s=>s).map(s=>{var U,Se;const[e,a,l,r,t,F,c,i,d,u,o,m]=s.split(","),D=Number(e),g=Number(l),C=r!=null&&r.length?r.split(":").map(le=>Number(le)):[],S=t.length?t.split(":").map(le=>Number(le)):[],B=F!=null&&F.length?(U=F==null?void 0:F.split(":"))==null?void 0:U.map(le=>Number(le)):[],L=c!=null&&c.length?(Se=c==null?void 0:c.split(":"))==null?void 0:Se.map(le=>Number(le)):[],q=i==="True",j=d==="True",k=Number(u),oe=Number(o),_=Number(m);return{ID:D,Name:a,UnlockGroup:g,Requires:C,BlockedBy:S,RequiredProcesses:B,IngredientProviders:L,isMain:q,isStarterOrSide:j,DishType:k,CustomerMultiplier:oe,DishValue:_}}),Le=[...[{ID:447437163,Name:"Country",UnlockGroup:pe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:pe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:pe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0},Te.filter(s=>s.Name==="Community")[0],Te.filter(s=>s.Name==="Couples")[0],{ID:1958825350,Name:"Turbo",UnlockGroup:pe.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:H.Null,CustomerMultiplier:0,DishValue:0},Te.filter(s=>s.Name==="Christmas Rush")[0]]].slice(3).sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>Te.filter(e=>e.Name===s)[0]);const ps=ms.trim().split(`\r
`).filter(s=>s).map(s=>{var j,k;const[e,a,l,r,t,F,c,i,d,u]=s.split(","),o=Number(e),m=Number(l),D=r!=null&&r.length?(j=r==null?void 0:r.split(":"))==null?void 0:j.map(oe=>Number(oe)):[],g=t!=null&&t.length?(k=t==null?void 0:t.split(":"))==null?void 0:k.map(oe=>Number(oe)):[],C=F==="True",S=c==="True",B=Number(i),L=Number(d),q=Number(u);return{ID:o,Name:a,UnlockGroup:m,Requires:[],BlockedBy:[],RequiredProcesses:D,IngredientProviders:g,isMain:C,isStarterOrSide:S,DishType:B,CustomerMultiplier:L,DishValue:q}}).sort((s,e)=>s.Name<e.Name?-1:1),we={};for(const s of Te)we[s.Name]=s;for(const s of ps)we[s.Name]=s;for(const s of Le)we[s.Name]=s;const Ts=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],bs=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],Re={};function te(s){if(Re[s]===void 0&&(Re[s]=ne.filter(e=>e.Name===s)[0]),Re[s]===void 0){console.error(`Could not find ${s} appliance`);debugger}return Re[s]}const Cs=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function Ce(s){let e=0;(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime);for(const a of Object.values(s.achieved))e+=s.cumulativeRerolls*2,e+=s.actionHistory.filter(l=>l==="spawn OI"||l==="spawn OO").length*3,e+=s.actionHistory.reduce((l,r)=>{var t;return r.includes("take ")?l+3+Number((t=r.match(/(\d+)/))==null?void 0:t[0]):l},0),e+=a.goalsPurchased+a.substitutesPurchased;return e}function Ie(s,e){return(a,l)=>{const r=a.achieved[e],t=l.achieved[e],F=Math.min(r.goalsPurchased,s);let i=Math.min(t.goalsPurchased,s)-F;return i===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&t.goalsPurchased+t.substitutesPurchased>=s?r.goalsPurchased+r.substitutesPurchased-(t.goalsPurchased+t.substitutesPurchased):t.substitutesPurchased-r.substitutesPurchased:i}}const $e={"Copying Desk":3,"Metal Table":4,"Power Sink":4,"Dish Washer":4,"Wash Basin":4,"Soaking Sink":4,"Heated Mixer":3,"Conveyor Mixer":3,"Rapid Mixer":3,"Danger Hob":2,"Safety Hob":2,"Grabber - Rotating":2,"Smart Grabber":2};function Ss(s,e,a,l,r=!0,t=bs,F=Ts,c=()=>{}){var Je,Qe,Ze,Xe;let i={},d=[];const u=[],o=new Array(l.length).fill(0).map(()=>({})),m={};let D=0,g=0;const C={},S=e.some(p=>p.Name==="Turbo"),B=[];let L=[],q=0;const j={};for(const p of l){for(const h of p){const{goal:P,number:I,substitutes:x,skipMissing:R=!1}=h;for(const M of x)m[M]||(m[M]=[]),m[M].push(P),M==="Flower Pot"&&console.log({substitutesToGoalMap:m});j[P]?R||(j[P].number+=I):(j[P]={...h},R&&(j[P].number=0));for(let M=0;M<=q;M++){if(o[M]===void 0)debugger;o[M][P]?o[M][P].number+=I:o[M][P]={...h}}for(let M=q+1;M<o.length;M++){if(o[M]===void 0)debugger;o[M][P]||(o[M][P]={...h,number:0})}R||(g+=te(P).PurchaseCost*I*(S?.5:1))}try{u.push(JSON.parse(JSON.stringify(j)))}catch{console.log(o),console.log(o[0]);debugger}q++}const k=o[0],oe=Object.values(k).sort((p,h)=>te(p.goal).PurchaseCost-te(h.goal).PurchaseCost).map(p=>p.goal);i=u.shift();for(const p of Object.values(k)){const{goal:h,number:P}=p;C[h]={...p,substitutesPurchased:0,goalsPurchased:0},p.goal!=="Starter Bin"&&(B.push(Ie(P,h)),L.push(Ie(P,h)))}const _=new K([],[...B,(p,h)=>h.money-p.money,(p,h)=>Ce(p)-Ce(h),(p,h)=>p.actionHistory.length-h.actionHistory.length,(p,h)=>p.cumulativeRerolls-h.cumulativeRerolls,(p,h)=>(p.day+1)%5?p.upgradesInProgress-h.upgradesInProgress:0]),U=S?7:5,Se=[{spawnInside:!0,blueprintCount:U},{spawnInside:!1,playerInside:!1,blueprintCount:U}];r||Se.push({spawnInside:!1,playerInside:!0,blueprintCount:U});const le=[{spawnInside:!0,blueprintCount:U},{spawnInside:!1,playerInside:!0,blueprintCount:U},{spawnInside:!1,playerInside:!1,blueprintCount:U}];function je(p,h,P){const I={...p};for(const x of Object.values(h)){const R=x.goal;I[R]={...I[R]},R==="Copying Desk"&&(I[R].goalsPurchased+=I[R].substitutesPurchased,I[R].substitutesPurchased=0),I[R].goalsPurchased+=x.goalsPurchased,P&&(I[R].substitutesPurchased+=x.substitutesPurchased)}return I}let ye=[];function _e(p,h,P,I=!1){var Z,W,b,A,E,f,n;const x=h.fodderUsed,R=Object.values(h.achieved).some(T=>T.substitutesPurchased)&&!((Z=h.achieved["Research Desk"])!=null&&Z.goalsPurchased),M=h.actionHistory.at(-1)==="buy Blueprint Cabinet"&&((W=h.actionHistory.at(-2))!=null&&W.includes("reroll"))?1:0;e:for(const T of p){if(R&&!Ke&&!((b=T.achieved["Research Desk"])!=null&&b.goalsPurchased))continue;let v=1+(T.achieved["Copying Desk"].goalsPurchased?1:0);const Y=Math.floor(Math.max(0,T.achieved["Blueprint Cabinet"].goalsPurchased-d.length));let z=Y;if(z-=T.upgradesInProgress,z*=v,z<0||z<x)continue;let O=T.cumulativeRerolls+h.cumulativeRerolls,X=O*(O+1)/2*10+T.applianceCosts;const be=h.actionHistory.length?je(T.achieved,h.achieved,!1):T.achieved,N=h.actionHistory.length?je(T.achieved,h.achieved,!0):T.achieved,J=ys(i,be);if(Q<=0&&J>0||h.cumulativeRerolls&&X>$)continue;let ie=0,re=0,ue=[],me=0,Pe=1;const De=N["Blueprint Cabinet"].goalsPurchased-d.length-M,Ee=(((A=T.achieved["Discount Desk"])==null?void 0:A.goalsPurchased)??0)+(((E=T.achieved["Discount Desk"])==null?void 0:E.substitutesPurchased)??0)?.5:1;{let Fe=$-X;for(const ee of oe){const G=h.achieved[ee];Fe-=G.goalsPurchased*te(G.goal).PurchaseCost*(S?.5:1)*Ee;let es=!1;(Fe<0||G.substitutesPurchased)&&(G.goal==="Copying Desk"&&re&&(re=0,me--),es=!0,Fe<0&&(ie+=G.goalsPurchased),ie+=G.substitutesPurchased,G.substitutesPurchased&&(me++,$e[G.goal]&&(Pe*=$e[G.goal]))),(G.goal==="Metal Table"||G.goal==="Grabber - Rotating"||G.goal==="Portioner"||G.goal==="Grabber")&&G.goalsPurchased+G.substitutesPurchased&&N[ee].goalsPurchased+N[ee].substitutesPurchased<N[ee].number&&(T.achieved["Copying Desk"].goalsPurchased||N["Copying Desk"].goalsPurchased&&Fe>60)&&(es||re++,re++,ue.push(G.goal),me++)}if(ie>De)continue e}X+=h.applianceCosts*Ee;const Is=T.deskTime+(Pe-1)*20+Math.max(0,x-Y)*5*((f=T.achieved["Clipboard Stand"])!=null&&f.goalsPurchased?.5:1)+(me*Pe*5+(F[h.day]??F.at(-1)??0))*((n=N["Clipboard Stand"])!=null&&n.goalsPurchased?.5:1),ce={...h,rerollConfigs:[...T.rerollConfigs,h.rerollConfigs],achieved:N,money:$-X,actionHistory:[...T.actionHistory,...h.actionHistory],upgradesInProgress:ie,cumulativeRerolls:T.cumulativeRerolls+h.cumulativeRerolls,applianceCosts:T.applianceCosts+h.applianceCosts*Ee,deskTime:Is};if(!(ie>De)){if(re&&(re===1||ie+1<=De))for(const Fe of ue)ce.upgradesInProgress+=re,N[Fe].goalsPurchased++,ce.actionHistory.push(`copy ${Fe}`),ce.applianceCosts+=30;if(ce.money>=0&&(!ce.upgradesInProgress||u.length)){if(J<Q&&(Q=J,console.log(`best so far missing ${J} pieces `+Be(ce,$))),J<=0){if(_.add(ce)){if(Ye(),_.array[0].deskTime<-1e4*60){console.log("uh, can I quit from this function?");break}continue}}else if(Q<=0)continue}if(z>D&&(D=z),I){const Fe=T.cumulativeRerolls;for(let ee=0;ee<=z;ee++)ye[ee]===void 0&&(ye[ee]=new K([],Cs)),ye[ee].add([Fe,X]);continue}P.add(ce)}}return Q}const xe={...C};xe["Blueprint Cabinet"]={...xe["Blueprint Cabinet"],goalsPurchased:1};const ke=new K([{achieved:xe,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:0,day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[...B,(p,h)=>p.applianceCosts-h.applianceCosts,(p,h)=>p.cumulativeRerolls-h.cumulativeRerolls]);let Q=1/0,w=0,$=0;const V=new ds(s),Ne=["Research Desk"];let Ke=!1,ge=[];{const p=["Booking Desk","Blueprint Cabinet"];ne.filter(h=>p.includes(h.Name)).forEach(h=>V.OwnedAppliances.push(h))}for(const p of e)V.addCard(p);function ws(p,h,P){var Z;let I=[{...p}],x=[],R=[];const M=JSON.parse(JSON.stringify(p.achieved));for(const W of h){let b=W.Name,A=M[b],E=!1,f=A&&w>3&&A.goal==="Research Desk";if(!A||A.goalsPurchased>=(((Z=o[0][b])==null?void 0:Z.number)??0)||f){const n=m[W.Name],T=n&&W.Name==="Research Desk"?w>6?"Copying Desk":"Discount Desk":n==null?void 0:n[Math.floor(Math.random()*n.length)];if(A=M[T],!A)continue;E=!0,b=T}if(E&&A.goalsPurchased+A.substitutesPurchased>=o[0][b].number&&(A=M["Starter Bin"],b="Starter Bin"),!A)debugger;if(A.goalsPurchased>=(o[0][b]?o[0][b].number:9)){A=M["Starter Bin"],b="Starter Bin",E=!0;continue}b==="Table - Fancy Cloth"&&(E=!1),W.ThemeRequired&&(E=!1),E?A.substitutesPurchased++:A.goalsPurchased++;{const n=T=>{const v={...T};if(v.achieved={...v.achieved},v.numFloor--,v.achieved[b])v.achieved[b]={...v.achieved[b],goalsPurchased:v.achieved[b].goalsPurchased+(E?0:1),substitutesPurchased:v.achieved[b].substitutesPurchased+(E?1:0)};else if(v.achieved[b]={...A,goalsPurchased:E?0:1,substitutesPurchased:E?1:0},Number.isNaN(v.achieved[b].goalsPurchased))debugger;const Y=b==="Starter Bin"||b==="Table - Fancy Cloth"?te(W.Name).PurchaseCost:Math.max(te(W.Name).PurchaseCost,te(b).PurchaseCost);return v.applianceCosts+=Y*(S?.5:1),v.actionHistory=[...v.actionHistory,`buy ${W.Name}`+(E?` for ${b}`:"")],b==="Starter Bin"&&(v.fodderPurchases=[...v.fodderPurchases],v.fodderPurchases[1]++,v.achieved[b].substitutesPurchased--),v};if(b!=="Starter Bin"){const T=I.map(n),v=x.map(n),Y=R.map(n);I=T.concat(I),x=v.concat(x),R=Y.concat(R),T.forEach(P)}else x=x.concat(R),R=(R.length?R:I).map(n)}}return I.concat(x).concat(R)}for(;Q;){let p=ke.array;if(!p.length)return c("No Solutions"),0;ke.clear();const h=new K([],[...L,(f,n)=>f.cumulativeRerolls-n.cumulativeRerolls,(f,n)=>f.applianceCosts-n.applianceCosts]);if($+=t[w]??t.at(-1)??0,w++,w>14&&(S||!a.length)){debugger;break}if(w>1&&p.length===0){debugger;break}p.sort((f,n)=>Ce(f)-Ce(n)),console.log(`fastest so far: ${Be(p[0],$)}`),p.every(f=>f.achieved["Copying Desk"].goalsPurchased)&&(d=d.map(f=>f-1),d=d.filter(f=>f>0));let P=4;switch(w){case 99:case 3:P=3;break;case 999:case 1:case 2:case 4:P=4;break;case 9999:P=5;break;case 99999:P=6;break;case 6:default:P=6;break}let I=.5*60*1e3;const x=Math.min(P-1,1/0);if($>=g){const f=Math.sqrt(($-g)/10*2);console.log(`Have ${$} on day ${w}, need ${g} to buy everything. Allows for ~${f} rerolls across all days`)}w%5||(P=1);let R;(S||w===5||!(w%3))&&(R=a.shift());const M=Te.filter(f=>f.Name===R)[0];V.handleNewCardSpawnEffects(M);const Z=V.getAppliances([{spawnInside:!0,blueprintCount:U}],w);V.handleNewCardRerollEffects(M);let W=[];if(Ne.length)for(let f=Ne.length-1;f>=0;f--){let n=Z.length;for(;n--;){const T=Z[n];if(T.Name===Ne[f]){if(console.log(`buying ${T.Name} on day ${w}`),$-p.reduce((Y,z)=>Math.min(Y,z.applianceCosts+10/2*(z.cumulativeRerolls+1)*z.cumulativeRerolls),1/0)<T.PurchaseCost*(S?.5:1)){console.log("not enough money-- skip for now");continue}ge.push(T),Ne.splice(f,1),$-=T.PurchaseCost*(S?.5:1),Z.splice(n,1);break}}W=ge.map(T=>`Buy ${T.Name}`)}let b=new K([{day:w,rerollConfigs:[],achieved:{...C},numFloor:U,fodderAvailable:D,fodderUsed:0,money:$,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(f,n)=>V.getPrngAdvancements(f.rerollConfigs,w)-V.getPrngAdvancements(n.rerollConfigs,w),(f,n)=>-V.getPrngAdvancements(f.rerollConfigs,w)+V.getPrngAdvancements(n.rerollConfigs,w),...L,(f,n)=>f.cumulativeRerolls-n.cumulativeRerolls,(f,n)=>f.applianceCosts-n.applianceCosts,(f,n)=>n.numFloor+n.fodderAvailable-f.numFloor+f.fodderAvailable,(f,n)=>f.numFloor-n.numFloor]);_e(p,b.array[0],ke,!0);let A=1/0;const E=ye.map(f=>f.array.reduce((n,[T,v])=>Math.min(n,v+b.array[0].rerollConfigs.length*(T+1)*10),1/0));e:for(;P--&&(ge.length&&((Qe=(Je=b.array[0])==null?void 0:Je.rerollConfigs)==null?void 0:Qe.length)===1&&(ge.some(n=>n.Name==="Research Desk")&&(Ke=!0),V.OwnedAppliances.push(...ge),ge=[],W=[]),A=Date.now()+I,b.array[0]!==void 0);){console.log(`Seed ${s} Day ${w} Reroll ${b.array[0].rerollConfigs.length} expanding ${b.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:E});const f=b.array;if(!u.length&&Q<=0){const n=f[0].rerollConfigs.length;if(n*((n+1)/2)*10+g>$){console.log("get me outta here!");break}}b.clear();for(const n of f){if(Date.now()>A){b.array.sort((X,be)=>-1*(X.applianceCosts-be.applianceCosts));continue e}if(n.numFloor+n.fodderAvailable===0||n.money<n.rerollConfigs.length*10)continue;let T=0;if(E[0]>n.money)continue;for(let O=1;O<E.length;O++)if(T++,E[O]>n.money){T=O-1;break}let v=x<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?n.numFloor+Math.min(n.fodderAvailable,T-n.fodderUsed):U;{let O=n.actionHistory.length;for(;O--&&!n.actionHistory[O].includes("reroll");)if(n.actionHistory[O].includes("Starter Bin")){v=n.numFloor;break}}const Y=x<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?Math.max(1,n.numFloor):U;let z;n.rerollConfigs.length===0?z=le:x<n.rerollConfigs.length?z=[n.rerollConfigs.at(-1)]:z=Se,V.getAppliances([...n.rerollConfigs,{spawnInside:!0,blueprintCount:v}],n.day);for(const O of z){const X=N=>{if(!b.add(N)||!h.add(N))return;N.fodderPurchases[0]+N.fodderPurchases[1]||_e(p,N,ke)},be=[Y];for(let N=v;N>Y;N--)be.push(N);for(const N of be){const J=[...n.rerollConfigs,{...O,blueprintCount:N}],re=[...J.length===1?Z:V.getAppliances(J,n.day)].sort((Pe,De)=>Pe.PurchaseCost-De.PurchaseCost),ue=N-n.numFloor;if(ue>n.fodderAvailable)debugger;const me={...n,fodderPurchases:[n.fodderPurchases[1],0],money:n.money-n.rerollConfigs.length*10,rerollConfigs:J,numFloor:J.length===1?N-ge.length:N,fodderAvailable:n.fodderAvailable-ue,fodderUsed:n.fodderUsed+ue,cumulativeRerolls:n.rerollConfigs.length?n.cumulativeRerolls+1:0,actionHistory:n.rerollConfigs.length?[...n.actionHistory,`${ue?`take ${ue} out, `:""}reroll ${O.spawnInside?"I":O.playerInside?"OI":"OO"}`]:[`day ${n.day} spawn`,`spawn ${O.spawnInside?"I":O.playerInside?"OI":"OO"}`,...W]};if(X(me),ws(me,re,X),Date.now()>A)break}}}}if(V.addCard(M),Q<=0){if(!u.length){_.array.sort((f,n)=>f.deskTime-n.deskTime),c((Q<=0?`full build on ${s} by day ${w}: 
`:"")+_.array.map(f=>Be(f,$)).join(`
`));break}{const f=(((Ze=u[0]["Blueprint Cabinet"])==null?void 0:Ze.number)??0)-(((Xe=i["Blueprint Cabinet"])==null?void 0:Xe.number)??0);if(f+d.length>2)debugger;for(let n=0;n<f;n++)d.push(15)}for(const f of Object.values(i))f.number&&V.OwnedAppliances.push(te(f.goal));i=u.shift(),o.shift(),L=[];for(const{goal:f,number:n}of Object.values(o[0]))L.push(Ie(n,f));Q=1/0,ye=[],Ye(!0),ke.array=_.array,_.clear(),_.objectiveFunctions}}return w;function Ye(p=!1){Math.random()<.001&&_.array.sort((h,P)=>h.deskTime-P.deskTime),c(`tier ${l.length-u.length-(p?1:0)} build on ${s} by day ${w}${p?"":" (Partial)"}: 
`+_.array.slice(0,100).map(h=>Be(h,$)).join(`
`))}}function ys(s,e){let a=0;for(const l of Object.values(s)){let r=l.number;a+=Math.max(0,r-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased)}return a}function Be(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${Ce(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")}const Ae={};function ks(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:F}=s,c=[e,a,l,r,F].join("|");if(Ae[c])return Ae[c];let i=[0,0,0],d=[0,0,0,0],u=1-.75**t;if(e>0){i[0]=1;let g=1-.75**e;l===.5&&(g*=1.25,u*=1.25),d[0]=F.reduce((C,S)=>C+1+(S-1)*g,0)}const o=F.reduce((g,C)=>g+C);a&&(i[1]=1,d[1]=o),r>0&&(d[2]=o,a?(i[2]=1-.75**r,l===.5&&(i[2]*=1.25)):i[2]=1);let m=1;e>0&&(i[0]*=1+l,m*=1-l,d[0]*=i[0]),a&&(i[1]*=1+m*l,m*=1-l,d[1]*=i[1],d[3]=d[1]*u),r>0&&(i[2]*=1+m*l,m*=1-l,d[2]*=i[2]);const D=[i,d];return Ae[c]=D,D}function Ps(s){const{starters:e,main:a,doubleOrderChance:l,desserts:r,sides:t,groupSizes:F}=s;let c=[0,0,0],i=[0,0,0,0],d=1-.75**e,u=1-.75**r,o=1-.75**t;l===.5&&(d*=1.25,u*=1.25,o*=1.25);const m=S=>{c[0]++,i[0]++;for(let B=0;B<S-1;B++)Math.random()<d&&i[0]++},D=S=>{c[1]++,i[1]+=S;for(let B=0;B<S;B++)Math.random()<o&&i[3]++},g=S=>{c[2]++,i[2]+=S};for(const S of F){let B=!1;e>0&&(m(S),!B&&Math.random()<l&&(B=!0,m(S))),D(S),!B&&Math.random()<l&&(B=!0,D(S)),r>0&&Math.random()<u&&(g(S),!B&&Math.random()<l&&(B=!0,g(S)))}return[c,i]}const Ds={"Diner (1)":1,"Small (2)":2,"Medium (2)":2,"Large (3)":3,"Huge (4)":4},Ue={};["Morning Rush","Lunch Rush","Dinner Rush"].forEach(s=>Ue[s]=!0);class vs{constructor(e,a=[],l=[]){y(this,"seed");y(this,"mapSize");y(this,"frontDoor");y(this,"startingCards");y(this,"cards");y(this,"playerCount");y(this,"turbo");y(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=Ds[this.mapSize],this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:a});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=0,c=[],i=[],d=0,u=[],o=0,m=[];for(const k of a)switch(k.Name==="All You Can Eat"&&(r=!0),k.Name==="Double Helpings"&&(t=!0),k.DishType){case H.Dessert:d++,k.DishValue&&u.push(k.DishValue);break;case H.Starter:k.DishValue&&c.push(k.DishValue),F++;break;case H.Side:k.DishValue&&m.push(k.DishValue),o++;break;case H.Main:case H.Base:k.Name==="Tacos"?(i.push(2),i.push(3)):k.DishValue&&i.push(k.DishValue)}let D=t?.5:r?.25:0,g=[0,0,0,0];if(g[0]=Me(c),g[1]=Me(i),g[2]=Me(u),g[3]=Me(m),t)for(let k=0;k<3;k++)g[k]&&(g[k]+=3);const[C,S]=ks({starters:F,main:!!g[1],doubleOrderChance:D,desserts:d,sides:o,groupSizes:l});let B=0;for(let k=0;k<S.length;k++)B+=S[k]*g[k];const L=Ve(this.playerCount),q=this.getBookingDeskCount(e),j=this.getBookingDeskMoney(e);return L*(B+q*j)}simulateMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=this.getGroupSizes(e);let r=!1,t=!1,F=[[],[],[],[]];for(const C of a)switch(C.Name==="All You Can Eat"&&(r=!0),C.Name==="Double Helpings"&&(t=!0),C.DishType){case H.Dessert:C.DishValue&&F[2].push(C.DishValue);break;case H.Starter:C.DishValue&&F[0].push(C.DishValue);break;case H.Side:C.DishValue&&F[3].push(C.DishValue);break;case H.Main:case H.Base:C.Name==="Tacos"?(F[1].push(2),F[1].push(3)):C.DishValue&&F[1].push(C.DishValue)}let c=t?.5:r?.25:0,i=0;t&&(i+=3);const[d,u]=Ps({starters:F[0].length,main:!!F[1].length,doubleOrderChance:c,desserts:F[2].length,sides:F[3].length,groupSizes:l});let o=0;for(let C=0;C<u.length;C++){let S=u[C];for(;S--;)C<3&&(o+=i),o+=F[C][Math.floor(Math.random()*F[C].length)]}const m=Ve(this.playerCount),D=this.getBookingDeskCount(e),g=this.getBookingDeskMoney(e);return m*(o+D*g)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e,a=1){const l=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));if(this.getCardsByDay(e).some(d=>d.Name==="Herd Mentality"))return Math.min(l,3)+1;const r=[],t=this.getCardsByDay(e);let F=1;(this.turbo||t.some(d=>d.Name==="Morning Rush"))&&(r.push(.2),F++),(this.turbo||t.some(d=>d.Name==="Lunch Rush"))&&(r.push(.5),F++),(this.turbo||t.some(d=>d.Name==="Dinner Rush"))&&(r.push(.8),F++);const c=a/this.getDayLength(e),i=.1/l;for(let d=1;d<l;d++){const u=d/l,o=u-i-c,m=u+i+c;let D=!1;for(const g of r)if(o<=g&&m>=g){D=!0;break}D||F++}return F}getNonRushGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(F=>F.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),t=a*(1+l)/r;return Math.ceil(t)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=Ge(1997821,e,this.seed).random,l=this.getNonRushGroupCount(e),r=this.getCardsByDay(e).some(m=>m.Name==="Herd Mentality");let t=l,F=[],[c,i]=this.getGroupSizeRange(e);{let m=t-1;for(;m--;)a.value}for(;t--;)F.push(a.range(c,i+1)),!r&&t!==l-1&&a.value;let d=this.turbo?3:this.getCardsByDay(e).filter(m=>Ue[m.Name]).length;const u=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let o=d*u;for(;o--;)F.push(a.range(c,i+1));return F}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const t=Math.floor((e-1)/3);a+=t,l+=t;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),r=this.getPlayerModifier(),t=this.getCourseModifier(e),F=this.getDayRate(e),c=this.getCustomersPerHour(e),i=this.getAdvertisingModifier(e);return .85**a*(l/25*F*r)/t*c*i}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(r=>r.DishType===H.Dessert||r.Name==="Black Coffee"||r.Name==="Cakes")&&(a+=.25),l.some(r=>r.DishType===H.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,r)=>l+r.CustomerMultiplier,0)}getMapSize(){const a=new fe(this.seed,5078598).useSubcontext(0).random.range(0,8);let l;switch(a){case 0:l="Small (2)";break;case 4:l="Medium (2)";break;case 1:case 5:l="Diner (1)";break;case 2:case 6:l="Large (3)";break;case 3:case 7:l="Huge (4)";break;default:throw new Error}return l}getLayoutInfo(){const a=new fe(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}getDoorInfo(){if(this.mapSize!=="Diner (1)")return-1;let e=new qe(new fe(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function Ve(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function Ms(s,e,a,l){let r=[],t=[];const F=s.cards.slice(e);let c=new vs(s.seed,a,F);c.playerCount=l;for(let i=1;i<=15;i++)r.push(c.guessMoney(i)),t.push(c.getBookingDeskCount(i));return r[0]+=c.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:t}}var We=self;function Rs(s){We.postMessage(s)}const Bs=["Copying Desk","Blueprint Cabinet","Clipboard Stand","Research Desk"],Ns=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:0,substitutes:[],skipMissing:!0},{goal:"Sharp Knife",number:1,substitutes:[],skipMissing:!0},{goal:"Workstation",number:1,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:ne.filter(s=>!s.ThemeRequired&&!Bs.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];We.onmessage=s=>{let{config:e,tiers:a,playerCount:l}=s.data;for(const o of a)for(const m of o){const D=ne.filter(g=>g.Name===m.goal)[0];D.ThemeRequired&&(m.substitutes=ne.filter(g=>g.ThemeRequired===D.ThemeRequired).map(g=>g.Name))}for(;!a.at(-1).length;)a.pop();const r=[...Ns],t=a.flatMap(o=>o.flatMap(m=>[m.goal,...m.substitutes])),F=r.length-1;r[F].substitutes=r[F].substitutes.filter(o=>!t.some(m=>o===m)),a[a.length-1].push(...r);const c=e.cards.filter(o=>Le.some(m=>m.Name===o.Name)).length+1,i=e.cards.slice(0,c);let{expectedMoneyByDay:d,expectedBookingDesksByDay:u}=Ms(e,c,i,l);Ss(e.seed,i,e.cards.slice(c).map(o=>o.Name),a,e.solo,d,u,Rs)}})();
