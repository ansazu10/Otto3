//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l=".",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/js/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_674F||null!=window.HYPE_dtl_674F)||true==!0||null!=c&&10>c;a=!0==d?"js/HYPE-674.full.min.js":"js/HYPE-674.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_674"+c,"HYPE_dtl_674"+c,a,d),false==!0&&(a=a||k("HYPE_w_674","HYPE_wdtl_674","js/HYPE-674.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_674","js/HYPE-674.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"scroll",source:"function(hypeDocument, element, event) {function wheel2(event) { // other browsers\nevent.preventDefault();\nif (event.detail < 0 && (hypeDocument.currentTimeInTimelineNamed('Main Timeline') > 2)) {\nhypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionReverse);\n} else {\nhypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward) }\n}\nfunction wheel(event) { // Firefox\nevent.preventDefault();\nif (event.wheelDeltaY > 0 && (hypeDocument.currentTimeInTimelineNamed('Main Timeline') > 2)) {\nhypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionReverse);\n} else {\nhypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward) }\n}\nwindow.onmousewheel = document.onmousewheel = wheel;\nwindow.addEventListener(\"DOMMouseScroll\", wheel2, false);\ndocument.addEventListener(\"DOMMouseScroll\", wheel2, false);}",identifier:"41"},{name:"keyboard",source:"function(hypeDocument, element, event) {document.onkeydown = checkKey;\nwhatTime = hypeDocument.currentTimeInTimelineNamed('Main TimeLine');\n\nfunction checkKey(e) {\n\ne = e || window.event;\n\nif (e.keyCode == '39') {\n    // right arrow\n    hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);\n}\nelse if (e.keyCode == '37') {\n    // left arrow\n    hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionReverse);\n}\n}\n\n}",identifier:"718"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_674"+c](f,g,{"47":{p:2,n:"media/Otto1.mp3",g:"899",t:"audio/mpeg"},"48":{n:"jester-webfont.woff"},"49":{n:"jester-webfont.woff2"},"0":{n:"boognn__-webfont.woff2"},"1":{n:"boognn__-webfont.woff"},"2":{p:1,n:"images/1_1Cama.png",g:"24",t:"@1x"},"3":{p:1,n:"images/1_antuco.png",g:"25",t:"@1x"},"4":{p:1,n:"images/1_Cama.png",g:"26",t:"@1x"},"5":{p:1,n:"images/1_escritorio.png",g:"27",t:"@1x"},"6":{p:1,n:"images/1_lampara.png",g:"29",t:"@1x"},"7":{p:1,n:"images/1_mesa.png",g:"30",t:"@1x"},"10":{p:1,n:"images/1_ventanas.png",g:"34",t:"@1x"},"8":{p:1,n:"images/1_puerta-cerrada.png",g:"32",t:"@1x"},"9":{p:1,n:"images/1_silla-escritorio.png",g:"33",t:"@1x"},"11":{n:"js/runOnLoad.js"},"12":{p:1,n:"images/1_josefa.png",g:"28",t:"@1x"},"13":{p:1,n:"images/1_josefa_2x.png",g:"28",t:"@2x"},"20":{p:2,n:"media/puerta1.mp3",g:"275",t:"audio/mpeg"},"21":{p:1,n:"images/1_Otto.png",g:"31",t:"@1x"},"14":{n:"coyotris_comic-webfont.woff"},"22":{p:1,n:"images/cover15_on.png",g:"347",t:"@1x"},"15":{n:"coyotris_comic-webfont.woff2"},"30":{p:1,n:"images/02.%20LogosMAG-MRED_2x.png",g:"546",t:"@2x"},"23":{p:1,n:"images/cover11_off.png",g:"349",t:"@1x"},"16":{p:2,n:"media/Honda_compressed.mp3",g:"107",t:"audio/mpeg"},"31":{p:1,n:"images/c1_otto_carta.png",g:"617",t:"@1x"},"24":{n:"images/1_bkg_honda1.jpg",g:"434",o:true,t:"@1x"},"17":{p:2,n:"media/82909__robinhood76__01338-tearing-letter-1.mp3",g:"253",t:"audio/mpeg"},"32":{p:1,n:"images/c1_otto_carta_2x.png",g:"617",t:"@2x"},"25":{n:"images/1_bkg_honda1_2x.jpg",g:"434",o:true,t:"@2x"},"18":{p:2,n:"media/hm_otto.mp3",g:"255",t:"audio/mpeg"},"40":{p:1,n:"images/tytoAlba_2x.png",g:"522",t:"@2x"},"33":{p:1,n:"images/c1_otto_carta2.png",g:"618",t:"@1x"},"26":{p:2,n:"media/honda2_.mp3",g:"495",t:"audio/mpeg"},"19":{p:2,n:"media/abrir.mp3",g:"274",t:"audio/mpeg"},"41":{p:1,n:"images/cover11_off-1.png",g:"730",t:"@1x"},"34":{n:"images/c1_casas-derecha.png",g:"702",t:"@1x"},"27":{p:1,n:"images/Logo%20Mincultura%20PNG.jpg",g:"542",t:"@1x"},"42":{p:1,n:"images/cover15_on-1.png",g:"731",t:"@1x"},"35":{p:1,n:"images/c1_ellosB.png",g:"703",t:"@1x"},"28":{p:1,n:"images/Logo%20Mincultura%20PNG_2x.jpg",g:"542",t:"@2x"},"43":{p:2,n:"media/tren1.mp3",g:"834",t:"audio/mpeg"},"50":{n:"images/poster.jpg",g:"496"},"36":{p:1,n:"images/c1_honda3bkg.jpg",g:"704",t:"@1x"},"29":{p:1,n:"images/02.%20LogosMAG-MRED.png",g:"546",t:"@1x"},"44":{p:2,n:"media/tren2.mp3",g:"835",t:"audio/mpeg"},"37":{p:1,n:"images/c1_honda3bkg_2x.jpg",g:"704",t:"@2x"},"45":{p:2,n:"media/26971__lg__train32.mp3",g:"891",t:"audio/mpeg"},"38":{p:1,n:"images/c1_muro-izquierdo.png",g:"705",t:"@1x"},"-1":{n:"js/PIE.htc"},"46":{p:2,n:"media/tren_sobre.mp3",g:"893",t:"audio/mpeg"},"39":{p:1,n:"images/tytoAlba.png",g:"522",t:"@1x"},"-2":{n:"images/blank.gif"}},l,["<style>\n@font-face {\n    font-family: 'boogienightsnfregular';\n   src: url('./boognn__-webfont.woff2') format('woff2'),\n         url('./boognn__-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n</style>","<style>\n@font-face {\n    font-family: 'coyotris_comicregular';\n   src: url('./coyotris_comic-webfont.woff2') format('woff2'),\n         url('./coyotris_comic-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n</style>","<style>\n\n@font-face {\n    font-family: 'jesterregular';\n    src: url('jester-webfont.woff2') format('woff2'),\n         url('jester-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n</style>"],e,[{n:"COVER",o:"1",X:[0]}],
[{o:"3",p:"600px",a:100,Y:1366,Z:768,b:100,cA:false,c:"#FFF",L:[{a:[{i:0,b:"556",p:9,symbolOid:"2"}],B:"creditos0"}],bY:1,d:1366,U:{"914":{V:{"Main Timeline":"939"},W:"939",n:"creditos"}},T:{"556":{q:false,z:0.17,i:"556",n:"creditos",a:[{y:0.03,i:"cY",s:"0",z:0,o:"914",f:"c"}],f:30,b:[{D:0.14,H:true,E:true,z:false,F:0,G:0,C:0.03,b:"939"}]},"939":{c:"914",q:false,z:0.14,i:"939",a:[{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"919"},{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"920"},{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"918"},{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"916"},{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"921"},{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"917"},{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"922"},{f:"c",y:0.04,z:0.1,i:"e",e:1,s:0,o:"922"},{f:"c",y:0.04,z:0.1,i:"e",e:1,s:0,o:"920"},{f:"c",y:0.04,z:0.1,i:"e",e:1,s:0,o:"919"},{f:"c",y:0.04,z:0.1,i:"e",e:1,s:0,o:"921"},{f:"c",y:0.04,z:0.1,i:"e",e:1,s:0,o:"917"},{f:"c",y:0.04,z:0.1,i:"e",e:1,s:0,o:"916"},{f:"c",y:0.04,z:0.1,i:"e",e:1,s:0,o:"918"},{y:0.04,i:"cY",s:"0",z:0,o:"920",f:"c"},{y:0.04,i:"cY",s:"0",z:0,o:"919",f:"c"},{y:0.04,i:"cY",s:"0",z:0,o:"918",f:"c"},{y:0.04,i:"cY",s:"0",z:0,o:"916",f:"c"},{y:0.04,i:"cY",s:"0",z:0,o:"921",f:"c"},{y:0.04,i:"cY",s:"0",z:0,o:"917",f:"c"},{y:0.04,i:"cY",s:"0",z:0,o:"922",f:"c"},{y:0.14,i:"e",s:1,z:0,o:"920",f:"c"},{y:0.14,i:"e",s:1,z:0,o:"922",f:"c"},{y:0.14,i:"e",s:1,z:0,o:"919",f:"c"},{y:0.14,i:"e",s:1,z:0,o:"921",f:"c"},{y:0.14,i:"e",s:1,z:0,o:"917",f:"c"},{y:0.14,i:"e",s:1,z:0,o:"916",f:"c"},{y:0.14,i:"e",s:1,z:0,o:"918",f:"c"}],n:"Control temporal principal",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:4.07,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1.03,i:"a",e:407,s:-391,o:"913"},{f:"c",y:0,z:1.03,i:"b",e:282,s:282,o:"913"},{f:"c",y:0,z:2.11,i:"c",e:985,s:0,o:"929"},{f:"c",y:0,z:2.11,i:"d",e:841,s:0,o:"938"},{f:"c",y:0,z:1.25,i:"e",e:0,s:0,o:"937"},{f:"c",y:0,z:2.22,i:"cY",e:"0",s:"1",o:"909"},{f:"c",p:2,y:0,z:4.07,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{p:12,o:"899",q:false}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:1,i:"c",e:421,s:0,o:"930"},{f:"c",y:0,z:3.18,i:"e",e:0,s:0,o:"909"},{y:0,i:"cY",s:"1",z:0,o:"914",f:"c"},{f:"c",y:0,z:2.11,i:"d",e:841,s:0,o:"926"},{f:"c",y:0,z:2.22,i:"e",e:0,s:0,o:"910"},{f:"c",y:0,z:2.11,i:"c",e:603,s:-395,o:"934"},{f:"c",y:0.19,z:1.03,i:"a",e:591,s:1387,o:"928"},{f:"c",y:0.19,z:1.03,i:"b",e:356,s:356,o:"928"},{f:"c",y:0.26,z:0.19,i:"e",e:1,s:0,o:"935"},{f:"c",y:0.26,z:0.11,i:"e",e:1,s:0,o:"911"},{f:"c",y:0.26,z:0.19,i:"e",e:1,s:0,o:"931"},{y:1,i:"c",s:421,z:0,o:"930",f:"c"},{f:"c",y:1,z:2.11,i:"c",e:603,s:0,o:"933"},{y:1.03,i:"b",s:282,z:0,o:"913",f:"c"},{y:1.03,i:"a",s:407,z:0,o:"913",f:"c"},{y:1.07,i:"e",s:1,z:0,o:"911",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"935",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"931",f:"c"},{y:1.22,i:"a",s:591,z:0,o:"928",f:"c"},{y:1.22,i:"b",s:356,z:0,o:"928",f:"c"},{f:"c",y:1.25,z:0.11,i:"e",e:1,s:0,o:"937"},{y:2.06,i:"e",s:1,z:0,o:"937",f:"c"},{y:2.11,i:"d",s:841,z:0,o:"938",f:"c"},{y:2.11,i:"d",s:841,z:0,o:"926",f:"c"},{y:2.11,i:"c",s:603,z:0,o:"934",f:"c"},{y:2.11,i:"c",s:985,z:0,o:"929",f:"c"},{y:2.22,i:"cY",s:"0",z:0,o:"909",f:"c"},{f:"c",y:2.22,z:0.19,i:"c",e:421,s:0,o:"925"},{f:"c",y:2.22,z:0.19,i:"c",e:421,s:0,o:"912"},{f:"c",y:2.22,z:0.19,i:"e",e:1,s:0,o:"910"},{f:"c",y:2.26,z:0.19,i:"e",e:1,s:0,o:"924"},{y:3.11,i:"c",s:603,z:0,o:"933",f:"c"},{y:3.11,i:"c",s:421,z:0,o:"925",f:"c"},{y:3.11,i:"c",s:421,z:0,o:"912",f:"c"},{y:3.11,i:"e",s:1,z:0,o:"910",f:"c"},{y:3.15,i:"e",s:1,z:0,o:"924",f:"c"},{f:"c",y:3.18,z:0.19,i:"e",e:1,s:0,o:"909"},{f:"c",p:2,y:4.07,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{y:4.07,i:"e",s:1,z:0,o:"909",f:"c"}],f:30,b:[{D:0.14,H:true,E:true,z:false,F:0,G:0,C:0,b:"939"}]}},bZ:180,O:["935","936","927","938","926","908","918","914","922","932","921","923","913","931","929","911","930","928","919","917","915","934","916","937","933","912","924","910","920","925","909"],n:"Dise\u00f1o sin t\u00edtulo","_":0,v:{"913":{aU:8,G:"#FFF",aV:8,r:"inline",s:"boogienightsnfregular",X:6.00815,t:72,Z:"break-word",w:"ElVIAJE",bF:"908",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:17,aS:8,aT:8,a:-391,b:282},"934":{c:-395,d:5,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,w:"",bF:"908",A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,N:0,C:"#FFF",z:14,O:0,D:"#FFF",k:"div",a:375,b:475},"926":{c:5,d:0,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,bF:"908",N:0,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,O:0,C:"#FFF",z:12,k:"div",D:"#FFF",a:975,b:-16},"918":{c:1232,d:666,I:"Solid",cY:"1",e:0,J:"Solid",K:"Solid",g:"#FFF",L:"Solid",M:3,bF:"914",N:3,A:"#000",x:"visible",j:"absolute",B:"#000",P:3,O:3,C:"#000",z:24,k:"div",D:"#000",a:0,b:0},"930":{c:0,d:5,r:"inline",I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,w:"",bF:"908",A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,N:0,C:"#FFF",O:0,z:23,D:"#FFF",k:"div",a:980,b:277},"922":{c:54,d:54,I:"Solid",cY:"1",e:0,J:"Solid",K:"Solid",g:"#000",L:"Solid",aP:"pointer",M:3,bF:"914",N:3,A:"#000",x:"visible",j:"absolute",B:"#000",P:3,O:3,C:"#000",z:32,dB:"button",D:"#000",aK:"50%",aJ:"50%",aA:{a:[{i:0,b:"939",p:9,symbolOid:"548"},{p:14,B:"creditos0"}]},k:"div",a:1162,aL:"50%",aI:"50%",b:18},"914":{x:"visible",a:64,cA:false,b:48,j:"absolute",r:"inline",c:1238,k:"div",bY:1,d:672,z:26,bF:"908",cY:"1",bZ:180,bX:false,cV:[]},"935":{x:"hidden",k:"div",c:504,d:666,z:4,e:0,a:978,j:"absolute",bF:"908",b:-384},"927":{c:1495,d:838,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:4,w:"",bF:"908",A:"#FFF",x:"visible",j:"absolute",B:"#FFF",N:4,O:4,C:"#FFF",P:4,z:2,D:"#FFF",m:"#E7B651",l:209,n:"#E0BF3E",k:"div",a:-59,b:-36},"919":{aU:8,G:"#000",c:443,aV:8,r:"inline",cY:"1",d:27,s:"jesterregular",e:0,t:24,Y:31,Z:"break-word",w:"<div style=\"text-align: center;\"><span style=\"white-space: pre-wrap;\">Este libro fue posible gracias a:</span></div>",bF:"914",j:"absolute",x:"visible",k:"div",y:"preserve",z:29,aS:8,aT:8,a:389,b:342},"910":{w:"",h:"522",p:"no-repeat",x:"visible",a:627,q:"100% 100%",b:588,j:"absolute",bF:"908",r:"inline",z:25,dB:"img",d:155,k:"div",cQ:1,e:0,c:100,cR:1},"931":{x:"hidden",k:"div",c:504,d:768,z:9,e:0,a:-129,j:"absolute",bF:"908",b:282},"923":{aU:8,G:"#000",c:576,aV:8,r:"inline",d:64,s:"jesterregular",t:24,Y:35,Z:"break-word",w:"es una historia creada por Andrea Sazu y Andrezzinho, con m\u00fasica original de Carlos Dudley Sandoval.",bF:"914",j:"absolute",x:"visible",k:"div",y:"preserve",z:25,aS:8,aT:8,a:323,F:"center",b:205},"915":{x:"visible",k:"div",c:822.24,d:136,z:26,a:208,j:"absolute",bF:"914",b:401},"936":{h:"704",p:"no-repeat",x:"visible",a:-497,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bF:"935",b:83,d:1025,k:"div",c:1450},"928":{aU:8,G:"#FFF",aV:8,r:"inline",s:"boogienightsnfregular",X:6.00815,t:72,Z:"break-word",w:"DE OTTO",bF:"908",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:8,aS:8,aT:8,a:1387,b:356},"911":{c:605,d:200,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#000",L:"Solid",M:0,bF:"908",N:0,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,O:0,C:"#FFF",z:3,k:"div",D:"#FFF",a:375,b:280},"932":{w:"",h:"434",p:"no-repeat",x:"visible",a:-184,q:"100% 100%",b:-108,j:"absolute",r:"inline",z:1,bF:"931",dB:"img",d:768,k:"div",c:1086.35},"924":{aU:8,G:"#000",c:190,H:"underline",bS:320,aV:8,r:"inline",d:66,e:0,s:"boogienightsnfregular",X:17.9049,t:48,u:"normal",Z:"break-word",aP:"pointer",w:"<div style=\"text-align: right;\"><span style=\"color: rgb(0, 0, 0); font-family: boogienightsnfregular; font-size: 48px; letter-spacing: 18px; text-align: center; white-space: nowrap; ;\">Leer</span></div>",bF:"908",j:"absolute",x:"visible",aA:{a:[{j:"capi1.html",p:5,k:false}]},k:"div",y:"preserve",dB:"button",z:5,aS:8,aT:8,a:1069,F:"center",b:562},"916":{h:"542",p:"no-repeat",x:"visible",a:462,q:"100% 100%",b:32,j:"absolute",bF:"915",r:"inline",cY:"1",z:1,d:72.24,dB:"img",k:"div",e:0,c:360.24},"908":{x:"hidden",k:"div",c:1366,d:768,z:0,a:0,bS:383,j:"absolute",b:0},"937":{aU:8,bB:0,G:"#424242",c:452,aV:8,r:"inline",d:36,e:0,s:"Futura,Verdana,sans-serif",X:4,bC:0,t:24,Y:26,Z:"break-word",w:"<span style=\"white-space: pre-wrap;\">andrezzinho &amp; andrea sazu</span><br>",bF:"908",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:16,aS:8,aT:8,a:449,bA:"#000",F:"center",b:496},"929":{c:0,d:5,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,bF:"908",N:0,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,O:0,C:"#FFF",z:13,k:"div",D:"#FFF",a:-7,b:277},"920":{aU:8,G:"#B2B2B2",c:1115,aV:8,r:"inline",cY:"1",d:22,s:"jesterregular",e:0,t:24,Y:31,Z:"break-word",w:"<div style=\"text-align: center;\"><span style=\"white-space: pre-wrap;\">Sonidos incidentales tomados de la biblioteca de sonidos con licencia creative commons<font color=\"#424242\"> <a href=\"https://freesound.org/\">freesound.org</a></font></span></div>",bF:"914",j:"absolute",x:"visible",k:"div",y:"preserve",z:30,aS:8,aT:8,a:53,b:596},"912":{c:0,d:5,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,w:"",bF:"908",A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,N:0,C:"#FFF",z:19,O:0,D:"#FFF",k:"div",a:978,b:549},"933":{c:0,d:5,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,w:"",bF:"908",A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,N:0,C:"#FFF",z:15,O:0,D:"#FFF",k:"div",a:375,b:549},"925":{c:0,d:5,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,bF:"908",N:0,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,O:0,C:"#FFF",z:18,k:"div",D:"#FFF",a:978,b:653},"917":{h:"546",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"915",r:"inline",cY:"1",z:2,d:136,dB:"img",k:"div",e:0,c:400},"909":{aU:8,G:"#000",c:213,H:"underline",bS:320,aV:8,r:"inline",cY:"1",d:49,s:"boogienightsnfregular",X:4,e:0,t:36,Z:"break-word",aP:"pointer",w:"Cr\u00e9ditos",bF:"908",j:"absolute",x:"visible",aA:{a:[{b:"556",p:3,z:false,symbolOid:"2"}]},k:"div",y:"preserve",dB:"button",z:21,aS:8,aT:8,a:1057,F:"center",b:680},"938":{c:5,d:0,I:"None",J:"None",K:"None",t:15,g:"#000",L:"None",M:0,w:"",bF:"908",A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,N:0,C:"#FFF",O:0,z:11,D:"#FFF",k:"div",a:375,b:-16},"921":{aU:8,G:"#000",c:699,aV:8,r:"inline",cY:"1",d:37,s:"Futura,Verdana,sans-serif",X:8,e:0,t:18,Y:31,Z:"break-word",w:"<div style=\"text-align: center;\"><span style=\"white-space: pre-wrap;\"><font face=\"boogienightsnfregular\" size=\"7\">El viaje de Otto</font>&nbsp;</span></div><div style=\"text-align: center;\"><br></div>",bF:"914",j:"absolute",x:"visible",k:"div",y:"preserve",z:31,aS:8,E:5.54348,aT:8,a:291,b:144}}}],{},h,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Cargando";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
