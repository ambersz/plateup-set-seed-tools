var gs=Object.defineProperty;var fs=(G,V,X)=>V in G?gs(G,V,{enumerable:!0,configurable:!0,writable:!0,value:X}):G[V]=X;var T=(G,V,X)=>(fs(G,typeof V!="symbol"?V+"":V,X),X);(function(){"use strict";class G{constructor(e,a){T(this,"array");T(this,"objectiveFunctions");this.array=V(e,a),this.objectiveFunctions=a}clear(){this.array=[]}add(e){let a=this.array.length;for(;a--;){let{better:l,worse:r}=X(e,this.array[a],this.objectiveFunctions);if(r)return!1;l&&this.array.splice(a,1)}return this.array.push(e),!0}}function V(s,e){if(!s.length)return s;const a=[...s];let l=[];l.push(a.pop());e:for(;a.length;){const r=a.pop();let F=l.length;for(;F--;){let{better:i,worse:m}=X(r,l[F],e);if(m)continue e;i&&l.splice(F,1)}l.push(r)}return l}function X(s,e,a){let l=!0,r=!0,F=0;for(;(l||r)&&F<a.length;){const i=a[F](s,e);i<0?r=!1:i>0&&(l=!1),F++}return{better:l,worse:r}}var ze=`505496455,False,True,Heated Mixer,False,False,,2087693779:-523839730:1972879238,64,0,0,False,False,60\r
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
`;const Le=["ID","IsPurchasable","IsPurchasableAsUpgrade","Name","SellOnlyAsDuplicate","SellOnlyAsUnique","RequiresForShop","RequiresProcessForShop","ShoppingTags","ThemeRequired","ShopRequirementFilter","StapleWhenMissing","AllowRefreshes","PurchaseCost"],Ue=["number","boolean","boolean","string","boolean","boolean","number[]","number[]","number","number","number","boolean","boolean","number"],he=ze.trim().split(`\r
`).map(s=>{const e=s.split(",");let a={};for(let l=0;l<e.length;l++){let r;switch(Ue[l]){case"number":r=Number(e[l]);break;case"boolean":r=e[l]==="True";break;case"number[]":e[l]===""?r=[]:r=e[l].split(":").map(F=>Number(F));break;default:r=e[l]}a[Le[l]]=r}return a});class We{constructor(e){T(this,"Staple");T(this,"Tags");T(this,"StapleWhenMissing");T(this,"Appliance");T(this,"IsRemoved");T(this,"Filter");T(this,"DecorationRequired");T(this,"SellAsUpgrade");this.Appliance=e,this.Tags=e.ShoppingTags,this.DecorationRequired=e.ThemeRequired,this.SellAsUpgrade=e.IsPurchasableAsUpgrade,this.Filter=e.ShopRequirementFilter,this.StapleWhenMissing=e.StapleWhenMissing,this.Staple=0,this.IsRemoved=!1}MatchesRequestTags(e){return e&1?this.Staple!==0:e&this.Tags?this.Staple===0:!1}}var ee=(s=>(s[s.NonStaple=0]="NonStaple",s[s.FixedStaple=1]="FixedStaple",s[s.BonusStaple=2]="BonusStaple",s[s.WhenMissing=3]="WhenMissing",s))(ee||{}),ne=(s=>(s[s.None=0]="None",s[s.Basic=1]="Basic",s[s.Decoration=2]="Decoration",s[s.Technology=4]="Technology",s[s.FrontOfHouse=8]="FrontOfHouse",s[s.Plumbing=16]="Plumbing",s[s.Cooking=32]="Cooking",s[s.Automation=64]="Automation",s[s.Christmas=128]="Christmas",s[s.Misc=256]="Misc",s[s.Office=512]="Office",s[s.BlueprintUpgrader=1024]="BlueprintUpgrader",s[s.BlueprintStore=2048]="BlueprintStore",s[s.Halloween=4096]="Halloween",s[s.SpecialEvent=8192]="SpecialEvent",s))(ne||{});const De={DefaultShoppingTag:892};var Be=(s=>(s[s.None=0]="None",s[s.RefreshableProvider=1]="RefreshableProvider",s))(Be||{}),Te=(s=>(s[s.Null=0]="Null",s[s.Exclusive=1]="Exclusive",s[s.Affordable=2]="Affordable",s[s.Charming=4]="Charming",s[s.Formal=8]="Formal",s[s.Kitchen=16]="Kitchen",s))(Te||{}),je="38";const Ve=Number(je);function Ke(s,e){return Math.floor(Math.random()*(e-s))+s}function Se(s,e){let a=s.length;for(;a-- >1;){let l=e===void 0?Ke(0,a+1):e.range(0,a+1);[s[a],s[l]]=[s[l],s[a]]}return s}class te{constructor(e,a){T(this,"fixedSeed");T(this,"instance");T(this,"random");typeof e=="string"&&(e=_e(e)),this.fixedSeed=e,this.instance=a,this.random=new Me(e+Math.imul(124192293,a))}useSubcontext(e){return new te(this.fixedSeed,124192293*e+this.instance)}}class Me{constructor(e){T(this,"seed");const a=m=>Math.imul(1812433253,m)+1>>0,l=e>>0,r=a(l),F=a(r),i=a(F);this.seed=[l,r,F,i]}get value(){let e=this.seed.shift(),a=this.seed[2];return e^=e<<11,e^=e>>>8,a^=a>>>19,a=(a^e)>>0,this.seed.push(a),a}range(e,a){return(this.value>>>0)%(a-e)+e}get valueFloat(){return(this.value<<9>>>0)/4294967295}select(e){return e[this.range(0,e.length)]}}function _e(s){const a=new TextEncoder().encode(s);let l=5381,r=a.length;for(;r--;)l=(l<<5)+l+a[r];return l>>0}function Ne(s,e,a){return new te(a,s*1231231+e)}var ie=(s=>(s[s.Generic=0]="Generic",s[s.Dish=1]="Dish",s[s.PrimaryTheme=3]="PrimaryTheme",s[s.SecondaryTheme=4]="SecondaryTheme",s[s.Franchise=5]="Franchise",s[s.Special=6]="Special",s))(ie||{}),K=(s=>(s[s.Base=0]="Base",s[s.Main=1]="Main",s[s.Extra=2]="Extra",s[s.Side=3]="Side",s[s.Starter=4]="Starter",s[s.Dessert=5]="Dessert",s[s.Null=6]="Null",s))(K||{});const Je=he.filter(s=>s.IsPurchasable||s.IsPurchasableAsUpgrade).length;class Ye{constructor(e,a=0){T(this,"seed");T(this,"mapSize");T(this,"numTiles");T(this,"baseUpgradeChance");T(this,"OwnedAppliances");T(this,"Cards");T(this,"Theme");T(this,"cache",new Map);T(this,"cacheDay");this.seed=e,[this.mapSize,this.numTiles]=this.getLayoutInfo(),this.baseUpgradeChance=a,this.OwnedAppliances=[],this.Cards=[],this.Theme=Te.Null,this.cacheDay=-1}getLayoutInfo(){const a=new te(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}handleNewCardSpawnEffects(e){e!==void 0&&(e.Name==="Turbo"&&(this.baseUpgradeChance=.25),e.UnlockGroup===ie.PrimaryTheme&&(this.Theme=Te[e.Name]))}handleNewCardRerollEffects(e){e!==void 0&&(this.OwnedAppliances=this.OwnedAppliances.concat(e.IngredientProviders.flatMap(a=>he.filter(l=>l.ID===a))))}addCard(e){e!==void 0&&(this.handleNewCardSpawnEffects(e),this.handleNewCardRerollEffects(e),this.Cards.push(e))}getPrngAdvancements(e,a){let l=0;for(let r=0;r<e.length;r++){const F=e[r];let i=F.blueprintCount;a%5===0&&(i+=3,r===0&&(i+=2)),l+=i*(Je-1+1),F.spawnInside||(l+=Qe(F.playerInside,this.numTiles)),l+=Ve}return l}buildShopOptions(e,a,l){let r=[];for(const i of he)if(!(!i.IsPurchasable&&!i.IsPurchasableAsUpgrade)){var F=new We(i);if(F.Staple==ee.NonStaple||F.Staple==ee.WhenMissing){if((F.Tags&ne.Basic)>ne.None)F.Staple=ee.FixedStaple;else if(F.StapleWhenMissing){const u=F.Appliance.Name;u!="Research Desk"&&u!="Blueprint Cabinet"&&u!="Plates"&&console.log(`Unexpected ${F.Appliance.Name} StapleWhenMissing Appliance`),e.some(f=>f.ID===F.Appliance.ID)?F.Staple=ee.NonStaple:F.Staple=ee.WhenMissing}}const o=F.Appliance;if(o.SellOnlyAsDuplicate)e.some(u=>u.ID===o.ID)||(F.IsRemoved=!0);else if(o.RequiresForShop.length>0){let u=!1;for(const f of o.RequiresForShop)e.some(h=>h.ID===f)&&(u=!0);F.IsRemoved=!u}else o.SellOnlyAsUnique&&(o.Name!="Booking Desk"&&console.log(`SellOnlyAsUnique: ${o.Name}, ${o.ID}`),e.some(u=>u.ID===o.ID)&&(F.IsRemoved=!0));(F.Appliance.Name==="Sink"||F.Appliance.Name==="Plates")&&l.every(u=>!u.isMain)&&(F.IsRemoved=!0),F.Filter==Be.RefreshableProvider&&(e.some(u=>u.AllowRefreshes)||(F.IsRemoved=!0)),F.DecorationRequired!=Te.Null&&F.DecorationRequired!=a&&(F.IsRemoved=!0),o.RequiresProcessForShop.length>0&&(o.RequiresProcessForShop.some(u=>l.some(f=>f.RequiredProcesses.includes(u)))||(F.IsRemoved=!0)),r.push(F)}return r}initRandom(e){return Ne(823828,e,this.seed)}getAppliances(e,a){a!==this.cacheDay&&(this.cacheDay=a,this.cache.clear());const l=e.length===1,r=this.buildShopOptions(this.OwnedAppliances,this.Theme,this.Cards);let F=e[e.length-1].blueprintCount,i;if(a%5==0){l?F=10:F+=3,i=[];for(let f=0;f<F;f++)i[f]=ne.Decoration;if(l)for(const f of[1,2])i[i.length-f]=ne.SpecialEvent}else if(e.length>1){i=[];for(let f=0;f<F;f++)i[f]=De.DefaultShoppingTag}else{const f=De.DefaultShoppingTag,h=Math.max(1,F),S=Math.max(0,Math.min(r.filter(k=>k.Staple!==ee.NonStaple&&!k.IsRemoved).length,Math.max(2,4-Math.floor(a/5)),h)),E=Math.max(0,h-S);F=h,i=[];for(let k=0;k<S;k++)i[k]=ne.Basic;for(let k=S;k<S+E;k++)i[k]=f}const m=this.initRandom(a).random;let o=this.getPrngAdvancements(e.slice(0,e.length-1),a);if(this.cache.has(o)&&this.cache.get(o).length>=F)return this.cache.get(o).slice(0,F);const u=o;for(;o--;)m.value;{const f=[...r],h=[],S=this.getUpgradeChance(a),E=[];for(let k=0;k<F;k++){const U=i[k],_=m.valueFloat<S;Se(f,m);for(let x=0;x<f.length;x++){const N=f[x];if(N.IsRemoved||E.includes(N.Appliance)||!N.MatchesRequestTags(U)||!_&&N.Staple==ee.NonStaple&&N.SellAsUpgrade)continue;U!=ne.Decoration&&E.push(N.Appliance),h[k]=N.Appliance;break}h[k]==null}return this.cache.set(u,h),h}}getUpgradeChance(e){return 1-(1-Math.floor(e/5)*.1)*(1-this.baseUpgradeChance)}}function Qe(s,e){return s?e-2:e-1}var Ze=`373996608,Ice Cream,1,,,,-1533430406,False,False,5,1,2\r
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
`,Xe=`-959076098,Steak,1,1972879238,-484165118:380220741,True,False,0,0,5\r
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
`;const ye=Ze.trim().split(`\r
`).filter(s=>s).map(s=>{var $,fe;const[e,a,l,r,F,i,m,o,u,f,h,S]=s.split(","),E=Number(e),k=Number(l),U=r!=null&&r.length?r.split(":").map(Y=>Number(Y)):[],O=F.length?F.split(":").map(Y=>Number(Y)):[],_=i!=null&&i.length?($=i==null?void 0:i.split(":"))==null?void 0:$.map(Y=>Number(Y)):[],x=m!=null&&m.length?(fe=m==null?void 0:m.split(":"))==null?void 0:fe.map(Y=>Number(Y)):[],N=o==="True",q=u==="True",se=Number(f),ae=Number(h),J=Number(S);return{ID:E,Name:a,UnlockGroup:k,Requires:U,BlockedBy:O,RequiredProcesses:_,IngredientProviders:x,isMain:N,isStarterOrSide:q,DishType:se,CustomerMultiplier:ae,DishValue:J}}),es=[...[{ID:447437163,Name:"Country",UnlockGroup:ie.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:K.Null,CustomerMultiplier:0,DishValue:0},{ID:2002876295,Name:"City",UnlockGroup:ie.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:K.Null,CustomerMultiplier:0,DishValue:0},{ID:-1864906012,Name:"Alpine",UnlockGroup:ie.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:K.Null,CustomerMultiplier:0,DishValue:0},ye.filter(s=>s.Name==="Community")[0],{ID:1766067755,Name:"Romantic",UnlockGroup:ie.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:K.Null,CustomerMultiplier:0,DishValue:0},{ID:1958825350,Name:"Turbo",UnlockGroup:ie.Special,Requires:[],BlockedBy:[],RequiredProcesses:[],IngredientProviders:[],isMain:!1,isStarterOrSide:!1,DishType:K.Null,CustomerMultiplier:0,DishValue:0}]].sort((s,e)=>s.Name<e.Name?-1:1);["Breakfast","Burgers","Hot Dogs","Fish","Pies","Salad","Stir Fry","Pizza","Turkey"].map(s=>ye.filter(e=>e.Name===s)[0]),Xe.trim().split(`\r
`).filter(s=>s).map(s=>{var q,se;const[e,a,l,r,F,i,m,o,u,f]=s.split(","),h=Number(e),S=Number(l),E=r!=null&&r.length?(q=r==null?void 0:r.split(":"))==null?void 0:q.map(ae=>Number(ae)):[],k=F!=null&&F.length?(se=F==null?void 0:F.split(":"))==null?void 0:se.map(ae=>Number(ae)):[],U=i==="True",O=m==="True",_=Number(o),x=Number(u),N=Number(f);return{ID:h,Name:a,UnlockGroup:S,Requires:[],BlockedBy:[],RequiredProcesses:E,IngredientProviders:k,isMain:U,isStarterOrSide:O,DishType:_,CustomerMultiplier:x,DishValue:N}}).sort((s,e)=>s.Name<e.Name?-1:1);const ss=[7,8,8,8,8,10,10,8,9,9,9,10,9,10,10],as=[122,143,159,169,169,215,215,218,240,252,252,288,263,300,300],be={};function oe(s){return be[s]===void 0&&(be[s]=he.filter(e=>e.Name===s)[0]),be[s]===void 0&&console.error(`Could not find ${s} appliance`),be[s]}const ls=[(s,e)=>s[0]-e[0],(s,e)=>s[1]-e[1]];function ke(s){let e=0;(s==null?void 0:s.deskTime)!==void 0&&(e+=s.deskTime);for(const a of Object.values(s.achieved))e+=s.cumulativeRerolls*2,e+=a.goalsPurchased+a.substitutesPurchased;return e}function Pe(s,e){return(a,l)=>{const r=a.achieved[e],F=l.achieved[e],i=Math.min(r.goalsPurchased,s);let o=Math.min(F.goalsPurchased,s)-i;return o===0?r.goalsPurchased>=s||r.goalsPurchased+r.substitutesPurchased>=s&&F.goalsPurchased+F.substitutesPurchased>=s?r.substitutesPurchased-F.substitutesPurchased:F.substitutesPurchased-r.substitutesPurchased:o}}const rs={"Copying Desk":4,"Metal Table":4};function Fs(s,e,a,l,r=!0,F=as,i=ss,m=()=>{}){var Oe,He,Ge,qe,$e;let o={},u=0;const f=[],h=new Array(l.length).fill(0).map(()=>({})),S={};let E=0,k=0;const U={},O=e.some(c=>c.Name==="Turbo"),_=[];let x=[],N=0;const q={};for(const c of l){for(const t of c){const{goal:y,number:v,substitutes:R,skipMissing:p=!1}=t;for(const b of R)S[b]=y;q[y]?p||(q[y].number+=v):(q[y]={...t},p&&(q[y].number=0));for(let b=0;b<=N;b++){if(h[b]===void 0)debugger;h[b][y]?h[b][y].number+=v:h[b][y]={...t}}for(let b=N+1;b<h.length;b++){if(h[b]===void 0)debugger;h[b][y]||(h[b][y]={...t,number:0})}p||(k+=oe(y).PurchaseCost*v*(O?.5:1))}try{f.push(JSON.parse(JSON.stringify(q)))}catch{console.log(h),console.log(h[0]);debugger}N++}const se=h[0],ae=Object.values(se).sort((c,t)=>oe(c.goal).PurchaseCost-oe(t.goal).PurchaseCost).map(c=>c.goal);o=f.shift();for(const c of Object.values(se)){const{goal:t,number:y}=c;U[t]={...c,substitutesPurchased:0,goalsPurchased:0},c.goal!=="Starter Bin"&&(_.push(Pe(y,t)),x.push(Pe(y,t)))}const J=new G([],[..._,(c,t)=>t.money-c.money,(c,t)=>ke(c)-ke(t),(c,t)=>c.actionHistory.length-t.actionHistory.length,(c,t)=>c.cumulativeRerolls-t.cumulativeRerolls,(c,t)=>(c.day+1)%5?c.upgradesInProgress-t.upgradesInProgress:0]),$=O?7:5,fe=[{spawnInside:!0,blueprintCount:$}];r||fe.push({spawnInside:!1,playerInside:!0,blueprintCount:$});const Y=[{spawnInside:!0,blueprintCount:$}];function Ie(c,t,y){const v={...c};for(const R of Object.values(t)){const p=R.goal;v[p]={...v[p]},p==="Copying Desk"&&(v[p].goalsPurchased+=v[p].substitutesPurchased,v[p].substitutesPurchased=0),v[p].goalsPurchased+=R.goalsPurchased,y&&(v[p].substitutesPurchased+=R.substitutesPurchased)}return v}let me=[];function Ae(c,t,y,v=!1){var b,w,le,B;const R=t.fodderUsed,p=Object.values(t.achieved).some(d=>d.substitutesPurchased)&&!((b=t.achieved["Research Desk"])!=null&&b.goalsPurchased);for(const d of c){if(p&&!xe&&!((w=d.achieved["Research Desk"])!=null&&w.goalsPurchased))continue;let g=1+(d.achieved["Copying Desk"].goalsPurchased?1:0);const C=1+d.achieved["Blueprint Cabinet"].goalsPurchased;let n=C;if(n-=u,n-=d.upgradesInProgress,n*=g,n<0||n<R)continue;let re=d.cumulativeRerolls+t.cumulativeRerolls,z=re*(re+1)/2*10+d.applianceCosts;const de=t.actionHistory.length?Ie(d.achieved,t.achieved,!1):d.achieved,Q=t.actionHistory.length?Ie(d.achieved,t.achieved,!0):d.achieved,P=ns(o,de);if(W<=0&&P>0||t.cumulativeRerolls&&z>I)continue;let j=0,ge=0;const M=Q["Blueprint Cabinet"].goalsPurchased+1-u,Fe=((le=d.achieved["Discount Desk"])==null?void 0:le.goalsPurchased)??0+((B=d.achieved["Discount Desk"])==null?void 0:B.substitutesPurchased)??0?.5:1;{let ce=I-z;for(const Z of ae){const L=t.achieved[Z];ce-=L.goalsPurchased*oe(L.goal).PurchaseCost*(O?.5:1)*Fe,(ce<0||L.substitutesPurchased)&&(ce<0&&(j+=L.goalsPurchased),j+=L.substitutesPurchased,ge+=L.substitutesPurchased*(rs[L.goal]??1)),L.goal==="Metal Table"&&L.goalsPurchased+L.substitutesPurchased&&(Q["Copying Desk"].goalsPurchased||d.achieved["Copying Desk"].substitutesPurchased)&&ge++}if(j>M)continue}z+=t.applianceCosts*Fe;const Re=d.deskTime+Math.max(0,R-C)*5*(d.achieved["Clipboard Stand"].goalsPurchased?.5:1)+(ge*5+i[t.day])*(Q["Clipboard Stand"].goalsPurchased?.5:1),H={...t,rerollConfigs:[...d.rerollConfigs,t.rerollConfigs],achieved:Q,money:I-z,actionHistory:[...d.actionHistory,...t.actionHistory],upgradesInProgress:j,cumulativeRerolls:d.cumulativeRerolls+t.cumulativeRerolls,applianceCosts:d.applianceCosts+t.applianceCosts,deskTime:Re};if(!(j>M)){if(H.money>=0&&!H.upgradesInProgress){if(P<=0&&!H.upgradesInProgress){if(J.add(H)){Ee();continue}}else if(W<=0)continue;P<W&&(W=P,console.log(`best so far missing ${P} pieces `+ve(H,I)))}if(n>E&&(E=n),v){const ce=d.cumulativeRerolls;for(let Z=0;Z<=n;Z++)me[Z]===void 0&&(me[Z]=new G([],ls)),me[Z].add([ce,z]);continue}y.add(H)}}return W}const pe=new G([{achieved:{...U},actionHistory:[],applianceCosts:0,cumulativeRerolls:0,rerollConfigs:[],upgradesInProgress:0,day:0,numFloor:0,money:0,fodderAvailable:0,deskTime:0}],[..._,(c,t)=>c.applianceCosts-t.applianceCosts,(c,t)=>c.cumulativeRerolls-t.cumulativeRerolls]);let W=1/0,D=0,I=O?30:0;const A=new Ye(s),Ce=["Research Desk","Plates"];let xe=!1,ue=[];{const c=["Booking Desk","Blueprint Cabinet"];he.filter(t=>c.includes(t.Name)).forEach(t=>A.OwnedAppliances.push(t))}for(const c of e)A.addCard(c);function ds(c,t){let y=[{...c}];const v=JSON.parse(JSON.stringify(c.achieved));for(const R of t){let p=R.Name,b=v[p],w=!1;if(!b||b.goalsPurchased>=h[0][p].number){if(b=v[S[R.Name]],!b)continue;w=!0,p=S[R.Name]}if(!(b.goalsPurchased>=h[0][p].number)&&(p==="Table - Fancy Cloth"&&(w=!1),!(w&&b.goalsPurchased+b.substitutesPurchased>=h[0][p].number))){w?b.substitutesPurchased++:b.goalsPurchased++;{const le=y.map(B=>{const d={...B};d.achieved={...d.achieved},d.numFloor--,d.achieved[p]={...d.achieved[p],goalsPurchased:d.achieved[p].goalsPurchased+(w?0:1),substitutesPurchased:d.achieved[p].substitutesPurchased+(w?1:0)};const g=p==="Starter Bin"||p==="Table - Fancy Cloth"?oe(R.Name).PurchaseCost:oe(p).PurchaseCost;return d.applianceCosts+=g*(O?.5:1),d.actionHistory=[...d.actionHistory,`buy ${R.Name}`+(w?` for ${p}`:"")],p==="Starter Bin"&&(d.fodderPurchases=[...d.fodderPurchases],d.fodderPurchases[1]++,d.achieved[p].substitutesPurchased--),d});y=y.concat(le)}}}return y}for(;W;){const c=pe.array;pe.clear();const t=new G([],[...x,(g,C)=>g.cumulativeRerolls-C.cumulativeRerolls,(g,C)=>g.applianceCosts-C.applianceCosts]);if(I+=F[D],D++,D>14)break;if(D>1&&c.length===0){debugger;break}let y=5,v=.5*60*1e3;const R=Math.min(y-1,1/0);if(I>=k){const g=Math.sqrt((I-k)/10*2);console.log(`Have ${I} on day ${D}, need ${k} to buy everything. Allows for ~${g} rerolls across all days`)}D%5||(y=1);const p=a.shift(),b=ye.filter(g=>g.Name===p)[0];A.handleNewCardSpawnEffects(b);const w=A.getAppliances([{spawnInside:!0,blueprintCount:$}],D);A.handleNewCardRerollEffects(b);let le=[];if(Ce.length)for(let g=Ce.length-1;g>=0;g--){let C=w.length;for(;C--;){const n=w[C];if(n.Name===Ce[g]){if(console.log(`buying ${n.Name} on day ${D}`),I<n.PurchaseCost*(O?.5:1)){console.log("not enough money-- skip for now");continue}ue.push(n),Ce.splice(g,1),I-=n.PurchaseCost*(O?.5:1),w.splice(C,1);break}}le=ue.map(n=>`Buy ${n.Name}`)}let B=new G([{day:D,rerollConfigs:[],achieved:{...U},numFloor:$,fodderAvailable:E,fodderUsed:0,money:I,actionHistory:[],applianceCosts:0,cumulativeRerolls:0,fodderPurchases:[0,0]}],[(g,C)=>A.getPrngAdvancements(g.rerollConfigs,D)-A.getPrngAdvancements(C.rerollConfigs,D),(g,C)=>-A.getPrngAdvancements(g.rerollConfigs,D)+A.getPrngAdvancements(C.rerollConfigs,D),...x,(g,C)=>g.cumulativeRerolls-C.cumulativeRerolls,(g,C)=>g.applianceCosts-C.applianceCosts,(g,C)=>C.numFloor+C.fodderAvailable-g.numFloor+g.fodderAvailable,(g,C)=>g.numFloor-C.numFloor]);Ae(c,B.array[0],pe,!0);let d=1/0;e:for(;y--&&(ue.length&&((He=(Oe=B.array[0])==null?void 0:Oe.rerollConfigs)==null?void 0:He.length)===1&&(ue.some(n=>n.Name==="Research Desk")&&(xe=!0),A.OwnedAppliances.push(...ue),ue=[],le=[]),d=Date.now()+v/(((qe=(Ge=B.array[0])==null?void 0:Ge.rerollConfigs)==null?void 0:qe.length)??1)**2,B.array[0]!==void 0);){const g=me.map(n=>n.array.reduce((re,[z,de])=>Math.min(re,de+B.array[0].rerollConfigs.length*(z+1)*10),1/0));console.log(`Seed ${s} Day ${D} Reroll ${B.array[0].rerollConfigs.length} expanding ${B.array.length} states`),console.log({minSpentMoneyByExtraBlueprints:g});const C=B.array;if(!f.length&&W<=0){const n=C[0].rerollConfigs.length;if(n*((n+1)/2)*10+k>I){console.log("get me outta here!");break}}B.clear(),Se(C);for(const n of C){if(Date.now()>d){Se(B.array),B.array.sort((P,j)=>-P.achieved["Research Desk"].goalsPurchased+j.achieved["Research Desk"].goalsPurchased);continue e}if(n.numFloor+n.fodderAvailable===0||n.money<n.rerollConfigs.length*10)continue;let re=0;if(g[0]>n.money)continue;for(let P=1;P<g.length;P++)if(re++,g[P]>n.money){re=P-1;break}let z=R<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?n.numFloor+Math.min(n.fodderAvailable,re-n.fodderUsed):$;{let P=n.actionHistory.length;for(;P--&&!n.actionHistory[P].includes("reroll");)if(n.actionHistory[P].includes("Starter Bin")){z=n.numFloor;break}}const de=R<n.rerollConfigs.length?n.numFloor:n.rerollConfigs.length?Math.max(1,n.numFloor):$;let Q;n.rerollConfigs.length===0?Q=Y:R<n.rerollConfigs.length?Q=[n.rerollConfigs.at(-1)]:Q=fe,A.getAppliances([...n.rerollConfigs,{spawnInside:!0,blueprintCount:z}],n.day);for(const P of Q){const j=M=>{if(!B.add(M)||!t.add(M))return;M.fodderPurchases[0]+M.fodderPurchases[1]||Ae(c,M,pe)},ge=[de];for(let M=z;M>de;M--)ge.push(M);for(const M of ge){const Fe=[...n.rerollConfigs,{...P,blueprintCount:M}],Re=Fe.length===1?w:A.getAppliances(Fe,n.day),H=M-n.numFloor;if(H>n.fodderAvailable)debugger;const ce=ds({...n,fodderPurchases:[n.fodderPurchases[1],0],money:n.money-n.rerollConfigs.length*10,rerollConfigs:Fe,numFloor:Fe.length===1?M-ue.length:M,fodderAvailable:n.fodderAvailable-H,fodderUsed:n.fodderUsed+H,cumulativeRerolls:n.rerollConfigs.length?n.cumulativeRerolls+1:0,actionHistory:n.rerollConfigs.length?[...n.actionHistory,`${H?`take ${H} out, `:""}reroll ${P.spawnInside?"I":P.playerInside?"OI":"OO"}`]:[`day ${n.day} spawn`,`spawn ${P.spawnInside?"I":P.playerInside?"OI":"OO"}`,...le]},Re);for(const Z of ce)j(Z);if(Date.now()>d)break}}}}if(A.addCard(b),W<=0){if(!f.length){m((W<=0?`full build on ${s} by day ${D}: 
`:"")+J.array.map(g=>ve(g,I)).join(`
`));break}u=(($e=o["Blueprint Cabinet"])==null?void 0:$e.number)??0;for(const g of Object.values(o))g.number&&A.OwnedAppliances.push(oe(g.goal));o=f.shift(),h.shift(),x=[];for(const{goal:g,number:C}of Object.values(h[0]))x.push(Pe(C,g));W=1/0,me=[],Ee(!0),pe.array=J.array,J.clear(),J.objectiveFunctions}}return D;function Ee(c=!1){m(`tier ${l.length-f.length-(c?1:0)} build on ${s} by day ${D}${c?"":" (Partial)"}: 
`+J.array.map(t=>ve(t,I)).join(`
`))}}function ns(s,e){let a=0;for(const l of Object.values(s)){let r=l.number;a+=Math.max(0,r-e[l.goal].goalsPurchased-e[l.goal].substitutesPurchased)}return a}function ve(s,e){const a=s.cumulativeRerolls*(s.cumulativeRerolls+1)/2*10+s.applianceCosts;return`${s.day}: ${ke(s)} total rerolls: ${s.cumulativeRerolls}, appliance costs: ${s.applianceCosts} (money spent: ${a}/${e}), `+s.actionHistory.join(", ")}class ts{constructor(e,a=[],l=[]){T(this,"seed");T(this,"mapSize");T(this,"frontDoor");T(this,"startingCards");T(this,"cards");T(this,"playerCount");T(this,"turbo");T(this,"_cardsByDay",[]);this.seed=e,this.mapSize=this.getMapSize(),this.frontDoor=this.getDoorInfo(),this.startingCards=a,this.cards=l,this.playerCount=this.mapSize,this.turbo=this.startingCards.some(r=>{if(r===void 0){console.log({startingCards:a});debugger}return r.Name==="Turbo"})}guessMoney(e){if(e===0)return this.turbo?30:0;const a=this.getCardsByDay(e),l=1+a.filter(u=>u.Name==="All You Can Eat"||u.Name==="Double Helpings").length*.25,r=this.getCustomerCount(e)*l;let F=this.startingCards.reduce((u,f)=>u+f.DishValue,0);if(!this.startingCards.some(u=>u.DishType=K.Dessert)&&a.some(u=>u.Name==="Ice Cream")&&(F=(F+2)/2),a.some(u=>u.Name==="Doughnut")&&(F=5),a.some(u=>u.Name==="Double Helpings")&&(F+=3),Number.isNaN(r))debugger;if(Number.isNaN(F))debugger;const i=is(this.playerCount),m=this.getBookingDeskCount(e),o=this.getBookingDeskMoney(e);return i*(r*F+m*o)}getBookingDeskMoney(e){return Math.ceil((e+1)/2)+2}getCardsByDay(e){if(this._cardsByDay[e]===void 0){let a;this.turbo?a=e-1:(a=Math.max(0,Math.floor((e-1)/3)),e>5&&a++),this._cardsByDay[e]=[...this.startingCards,...this.cards.slice(0,a)]}return this._cardsByDay[e]}getBookingDeskCount(e){const a=Math.ceil(this.getExpectedCustomers(e)/this.getExpectedGroupSize(e));return this.getCardsByDay(e).some(l=>l.Name==="Herd Mentality")?Math.min(a,3)+1:a+(this.turbo?3:this.getCardsByDay(e).filter(l=>l.Name.includes(" Rush")).length)}getGroupCount(e){const a=this.getExpectedCustomers(e),l=this.getCardsByDay(e).filter(i=>i.Name==="Closing Time?").length*.2,r=this.getExpectedGroupSize(e),F=a*(1+l)/r;return Math.ceil(F)}getCustomerCount(e){return this.getGroupSizes(e).reduce((a,l)=>a+l,0)}getGroupSizes(e){const a=Ne(1997821,e,this.seed).random,l=this.getGroupCount(e),r=this.getCardsByDay(e).some(S=>S.Name==="Herd Mentality");let F=l,i=[],[m,o]=this.getGroupSizeRange(e);{let S=F-1;for(;S--;)a.value}for(;F--;)i.push(a.range(m,o+1)),!r&&F!==l-1&&a.value;let u=this.turbo?3:this.getCardsByDay(e).filter(S=>S.Name.includes(" Rush")).length;const f=Math.ceil(Math.max(1,this.getExpectedCustomers(e)*.15));let h=u*f;for(;h--;)i.push(a.range(m,o+1));return i}getExpectedGroupSize(e){const a=this.getGroupSizeRange(e);return(a[0]+a[1])/2}getGroupSizeRange(e){let a=1,l=2;for(const r of this.getCardsByDay(e))switch(r.Name){case"Individual Dining":l--;break;case"Medium Groups":a++,l+=2;break;case"Large Groups":a+=2,l+=2;break;case"Flexible Dining":a--,l++;break;case"Community":const F=Math.floor((e-1)/3);a+=F,l+=F;break}return[a,l]}getExpectedCustomers(e){const a=this.getReductions(e),l=this.getDayLength(e),r=this.getPlayerModifier(),F=this.getCourseModifier(e),i=this.getDayRate(e),m=this.getCustomersPerHour(e),o=this.getAdvertisingModifier(e);return .85**a*(l/25*i*r)/F*m*o}getAdvertisingModifier(e){return 1+.25*this.getCardsByDay(e).filter(l=>l.Name==="Advertising").length}getDayRate(e){let a=1;switch(e){case 1:a=1.25;break;case 2:a=1.5;break;default:a=1.5+.15*(e-3);break}return e>15&&(a+=(this.turbo?.1:0)*(e-15)**1.5),a}getCourseModifier(e){let a=1;const l=this.getCardsByDay(e);return l.some(r=>r.DishType===K.Dessert||r.Name==="Black Coffee")&&(a+=.25),l.some(r=>r.DishType===K.Starter)&&(a+=.25),a}getPlayerModifier(){let e;switch(this.playerCount){case 0:e=1;break;case 1:e=.8;break;case 2:e=1;break;case 3:e=1.25;break;default:e=1.5;break}return e}getDayLength(e){return 100+Math.floor(e/3)*25}getCustomersPerHour(e){let a=1;return this.turbo&&(a=1.5,a*=1+e/10),a}getReductions(e){return this.getCardsByDay(e).reduce((l,r)=>l+r.CustomerMultiplier,0)}getMapSize(){const a=new te(this.seed,5078598).useSubcontext(0).random.range(0,4);let l;switch(a){case 0:l=2;break;case 1:l=1;break;case 2:l=3;break;case 3:l=4;break;default:throw new Error}return l}getLayoutInfo(){const a=new te(this.seed,5078598).useSubcontext(0).random.range(0,8);let l,r;switch(a){case 0:r=70,l=2;break;case 4:r=84,l=2;break;case 1:case 5:r=60,l=1;break;case 2:case 6:r=9*13,l=3;break;case 3:case 7:r=12*16,l=4;break;default:throw new Error}return[l,r]}getDoorInfo(){if(this.mapSize!==1)return-1;let e=new Me(new te(this.seed,98234234).useSubcontext(0).random.value),a=23;for(;a--;)e.value;return e.range(0,4)}}function is(s){switch(s){case 1:return 1.25;case 2:return 1.1;default:return 1}}function os(s,e,a,l){let r=[],F=[];const i=s.cards.slice(e);let m=new ts(s.seed,a,i);m.playerCount=l;for(let o=1;o<=15;o++)r.push(m.guessMoney(o)),F.push(m.getBookingDeskCount(o));return r[0]+=m.guessMoney(0),{expectedMoneyByDay:r,expectedBookingDesksByDay:F}}var we=self;function us(s){we.postMessage(s)}const cs=["Copying Desk","Blueprint Cabinet","Clipboard Stand","Research Desk"],hs=[{goal:"Copying Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Blueprint Cabinet",number:8,substitutes:[],skipMissing:!0},{goal:"Clipboard Stand",number:1,substitutes:[],skipMissing:!0},{goal:"Research Desk",number:1,substitutes:[],skipMissing:!0},{goal:"Starter Bin",number:999,substitutes:he.filter(s=>!cs.includes(s.Name)).map(s=>s.Name),skipMissing:!0}];we.onmessage=s=>{let{config:e,tiers:a,playerCount:l}=s.data;a=a.filter(h=>h.length);const r=[...hs],F=a.flatMap(h=>h.flatMap(S=>[S.goal,...S.substitutes])),i=r.length-1;r[i].substitutes=r[i].substitutes.filter(h=>!F.some(S=>h===S)),a[a.length-1].push(...r);const m=e.cards.filter(h=>es.some(S=>S.Name===h.Name)).length+1,o=e.cards.slice(0,m);let{expectedMoneyByDay:u,expectedBookingDesksByDay:f}=os(e,m,o,l);Fs(e.seed,o,e.cards.slice(m).map(h=>h.Name),a,e.solo,u,f,us)}})();
