const a29_0x382f91=a29_0x4e1a;(function(_0x45e4c6,_0x331019){const _0x16b7d3=a29_0x4e1a,_0x52777d=_0x45e4c6();while(!![]){try{const _0x56fee6=parseInt(_0x16b7d3(0x9b))/0x1+-parseInt(_0x16b7d3(0xcb))/0x2+-parseInt(_0x16b7d3(0x9d))/0x3*(-parseInt(_0x16b7d3(0xa6))/0x4)+parseInt(_0x16b7d3(0xd0))/0x5*(-parseInt(_0x16b7d3(0xe0))/0x6)+parseInt(_0x16b7d3(0xd7))/0x7+parseInt(_0x16b7d3(0xa4))/0x8+-parseInt(_0x16b7d3(0xa1))/0x9;if(_0x56fee6===_0x331019)break;else _0x52777d['push'](_0x52777d['shift']());}catch(_0x3bc857){_0x52777d['push'](_0x52777d['shift']());}}}(a29_0x3caa,0xb95a3));const {zokou}=require('../framework/zokou'),s=require(a29_0x382f91(0xde)),fs=require('fs'),dotenv=require(a29_0x382f91(0xa0));function getDescriptionFromEnv(_0x4d6917){const _0x35505b=a29_0x382f91;filePath=_0x35505b(0xaa);const _0xfb6e10=fs[_0x35505b(0xb0)](filePath,_0x35505b(0xdf)),_0x198cad=JSON[_0x35505b(0xc9)](_0xfb6e10),_0x472c14=_0x198cad[_0x35505b(0xc3)][_0x4d6917];return _0x472c14&&_0x472c14[_0x35505b(0xb7)]?_0x472c14[_0x35505b(0xb7)]:_0x35505b(0xa5);}zokou({'nomCom':'setvar','categorie':a29_0x382f91(0xe4)},async(_0x47ea86,_0x5e6ea3,_0x3c85e0)=>{const _0x37e1f2=a29_0x382f91,{repondre:_0x11a3bc,superUser:_0xcacae0,arg:_0x5c3641}=_0x3c85e0;if(!_0xcacae0){_0x11a3bc(_0x37e1f2(0xba));return;};if(s['HEROKU_APP_NAME']==null||s[_0x37e1f2(0xc2)]==null){_0x11a3bc(_0x37e1f2(0xb8));return;};if(!_0x5c3641[0x0]||!_0x5c3641[_0x37e1f2(0xa9)]('')[_0x37e1f2(0xb9)]('=')){_0x11a3bc(_0x37e1f2(0xae));return;};const _0x5bc5e6=_0x5c3641[_0x37e1f2(0xa9)]('\x20'),_0x90d02c=require(_0x37e1f2(0xaf)),_0x167fad=new _0x90d02c({'token':s[_0x37e1f2(0xc2)]});let _0x15ffa4=_0x37e1f2(0xc8)+s[_0x37e1f2(0xab)];await _0x167fad[_0x37e1f2(0xb5)](_0x15ffa4+_0x37e1f2(0xa2),{'body':{[_0x5bc5e6[_0x37e1f2(0xb9)]('=')[0x0]]:_0x5bc5e6[_0x37e1f2(0xb9)]('=')[0x1]}}),await _0x11a3bc(_0x37e1f2(0xbb));}),zokou({'nomCom':'getallvar','categorie':'Heroku'},async(_0x281a64,_0xdf21db,_0x277e9a)=>{const _0x5b8a78=a29_0x382f91,{repondre:_0x19a735,superUser:_0xf2d59d}=_0x277e9a;if(!_0xf2d59d){_0x19a735('Commande\x20reserver\x20au\x20proprietaire\x20du\x20bot');return;};if(s[_0x5b8a78(0xab)]==null||s[_0x5b8a78(0xc2)]==null){_0x19a735(_0x5b8a78(0xb8));return;};const _0x3ddedd=require(_0x5b8a78(0xaf)),_0x159572=new _0x3ddedd({'token':s['HEROKU_APY_KEY']});let _0x4ce90c=_0x5b8a78(0xc8)+s[_0x5b8a78(0xab)],_0x2b073e=await _0x159572['get'](_0x4ce90c+_0x5b8a78(0xa2)),_0x381e6d='*liste\x20des\x20variables\x20\x20Heroku\x20*\x0a\x0a';for(vr in _0x2b073e){_0x381e6d+=_0x5b8a78(0x99)+vr+'*\x20'+'=\x20'+_0x2b073e[vr]+'\x0a';}_0x19a735(_0x381e6d);}),zokou({'nomCom':a29_0x382f91(0x98),'categorie':a29_0x382f91(0xe4)},async(_0xd7e51f,_0xcb632e,_0x27d145)=>{const _0x4be0f6=a29_0x382f91,{repondre:_0x545e26,superUser:_0xa864ca,arg:_0x21e078}=_0x27d145;if(!_0xa864ca){_0x545e26('Commande\x20reserver\x20au\x20proprietaire\x20du\x20bot');return;};if(s[_0x4be0f6(0xab)]==null||s[_0x4be0f6(0xc2)]==null){_0x545e26(_0x4be0f6(0xb8));return;};if(!_0x21e078[0x0]){_0x545e26(_0x4be0f6(0x9c));return;};try{const _0x3e84f7=require(_0x4be0f6(0xaf)),_0xe7d1bc=new _0x3e84f7({'token':s[_0x4be0f6(0xc2)]});let _0x2939c6='/apps/'+s['HEROKU_APP_NAME'],_0x27c23e=await _0xe7d1bc[_0x4be0f6(0xd9)](_0x2939c6+_0x4be0f6(0xa2));for(vr in _0x27c23e){if(_0x21e078['join']('\x20')===vr)return _0x545e26(vr+'=\x20'+_0x27c23e[vr]);}}catch(_0x147152){_0x545e26(_0x4be0f6(0xbc)+_0x147152);}}),zokou({'nomCom':a29_0x382f91(0xda),'categorie':a29_0x382f91(0xe4)},async(_0x2d76f9,_0x4e6aa8,_0x4b6604)=>{const _0x349aaa=a29_0x382f91,{ms:_0x19559b,repondre:_0x4c56cd,superUser:_0x2af28c,auteurMessage:_0x1260bb}=_0x4b6604;if(!_0x2af28c){_0x4c56cd(_0x349aaa(0xba));return;};let _0x21c710=[{'nom':_0x349aaa(0xbd),'choix':['oui',_0x349aaa(0xa7)]},{'nom':'TELECHARGER_AUTO_STATUS','choix':[_0x349aaa(0xdc),_0x349aaa(0xa7)]},{'nom':_0x349aaa(0xd6),'choix':['oui',_0x349aaa(0xa7)]},{'nom':_0x349aaa(0xb4),'choix':[_0x349aaa(0xdc),_0x349aaa(0xa7)]},{'nom':_0x349aaa(0xdd),'choix':[_0x349aaa(0xdc),_0x349aaa(0xa7)]},{'nom':_0x349aaa(0xd8),'choix':[_0x349aaa(0xdc),'non']},{'nom':_0x349aaa(0xd4),'choix':['1','2','3','4']},{'nom':_0x349aaa(0xd2),'choix':[_0x349aaa(0xdc),'non']}],_0x539010='\x20\x20\x20\x20╭──────༺♡༻──────╮\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Zokou-settings\x0a\x20\x20\x20\x20╰──────༺♡༻──────╯\x0a\x0a';for(v=0x0;v<_0x21c710[_0x349aaa(0xca)];v++){_0x539010+=v+0x1+_0x349aaa(0xcc)+_0x21c710[v][_0x349aaa(0xcd)]+'*\x0a';}_0x539010+=_0x349aaa(0xa8);let _0x239c15=await _0x4e6aa8[_0x349aaa(0xb3)](_0x2d76f9,{'text':_0x539010},{'quoted':_0x19559b});console[_0x349aaa(0xbe)](_0x239c15);let _0x2e9b5f=await _0x4e6aa8[_0x349aaa(0x95)]({'chatJid':_0x2d76f9,'sender':_0x1260bb,'timeout':0xea60,'filter':_0x368168=>_0x368168[_0x349aaa(0xdb)][_0x349aaa(0xc6)]&&_0x368168['message'][_0x349aaa(0xc6)][_0x349aaa(0xe1)][_0x349aaa(0x96)]==_0x239c15[_0x349aaa(0xc1)]['id']&&(_0x368168[_0x349aaa(0xdb)][_0x349aaa(0xc6)][_0x349aaa(0xcf)]>0x0&&_0x368168[_0x349aaa(0xdb)]['extendedTextMessage'][_0x349aaa(0xcf)]<=_0x21c710['length'])}),_0x4089a3=_0x2e9b5f[_0x349aaa(0xdb)][_0x349aaa(0xc6)]['text']-0x1,{nom:_0x4a3216,choix:_0x5f292f}=_0x21c710[_0x4089a3],_0x37d4e1=_0x349aaa(0xc0);_0x37d4e1+='*Nom*\x20:'+_0x4a3216+'\x0a',_0x37d4e1+=_0x349aaa(0xe2)+getDescriptionFromEnv(_0x4a3216)+'\x0a\x0a',_0x37d4e1+=_0x349aaa(0xbf);for(i=0x0;i<_0x5f292f[_0x349aaa(0xca)];i++){_0x37d4e1+=_0x349aaa(0xd1)+(i+0x1)+'*\x20=>\x20'+_0x5f292f[i]+'\x0a';}_0x37d4e1+=_0x349aaa(0x9e);let _0x4f2550=await _0x4e6aa8[_0x349aaa(0xb3)](_0x2d76f9,{'text':_0x37d4e1},{'quoted':_0x2e9b5f}),_0x1797a2=await _0x4e6aa8['awaitForMessage']({'chatJid':_0x2d76f9,'sender':_0x1260bb,'timeout':0xea60,'filter':_0x11d756=>_0x11d756['message']['extendedTextMessage']&&_0x11d756[_0x349aaa(0xdb)]['extendedTextMessage'][_0x349aaa(0xe1)][_0x349aaa(0x96)]==_0x4f2550[_0x349aaa(0xc1)]['id']&&(_0x11d756[_0x349aaa(0xdb)][_0x349aaa(0xc6)]['text']>0x0&&_0x11d756[_0x349aaa(0xdb)][_0x349aaa(0xc6)][_0x349aaa(0xcf)]<=_0x5f292f[_0x349aaa(0xca)])}),_0x4e298f=_0x1797a2[_0x349aaa(0xdb)]['extendedTextMessage'][_0x349aaa(0xcf)]-0x1;if(s[_0x349aaa(0x97)]=='oui')try{const _0x215266=dotenv[_0x349aaa(0xc9)](fs['readFileSync'](_0x349aaa(0xb1),{'encoding':_0x349aaa(0xdf)}));_0x215266[_0x4a3216]=_0x5f292f[_0x4e298f];const _0x2893e0=Object[_0x349aaa(0xc4)](_0x215266)[_0x349aaa(0x9f)](_0xc2e2b7=>_0xc2e2b7+'='+_0x215266[_0xc2e2b7])[_0x349aaa(0xa9)]('\x0a');fs[_0x349aaa(0xe3)](_0x349aaa(0xb1),_0x2893e0),_0x4c56cd(_0x349aaa(0xb6));const {exec:_0x4bab50}=require(_0x349aaa(0xc7));_0x4bab50('pm2\x20restart\x20all');}catch(_0x3d1706){console[_0x349aaa(0xa3)](_0x3d1706),_0x4c56cd(_0x349aaa(0xd5));}else{if(s[_0x349aaa(0xab)]==null||s[_0x349aaa(0xc2)]==null)return _0x4c56cd(_0x349aaa(0xb8));;const _0x143ebe=require(_0x349aaa(0xaf));try{const _0x58ceb0=new _0x143ebe({'token':s['HEROKU_APY_KEY']});let _0x53fb08=_0x349aaa(0xc8)+s[_0x349aaa(0xab)];await _0x58ceb0['patch'](_0x53fb08+_0x349aaa(0xa2),{'body':{[_0x4a3216]:_0x5f292f[_0x4e298f]}}),await _0x4c56cd('variable\x20actualiser\x20,\x20redemarrage\x20en\x20cours....');}catch(_0x5d856b){_0x4c56cd('il\x20s\x27emblerait\x20que\x20vous\x20quez\x20fait\x20une\x20erreur\x20au\x20niveau\x20des\x20variables\x20Heroku');}}});function a29_0x4e1a(_0xe0067a,_0x4c64a5){const _0x3caa48=a29_0x3caa();return a29_0x4e1a=function(_0x4e1ad2,_0x5dcb41){_0x4e1ad2=_0x4e1ad2-0x95;let _0x5af10a=_0x3caa48[_0x4e1ad2];return _0x5af10a;},a29_0x4e1a(_0xe0067a,_0x4c64a5);}function changevars(_0x3dbf13,_0x158e92){zokou({'nomCom':_0x3dbf13,'categorie':'Heroku'},async(_0x53dbb0,_0x130821,_0x262590)=>{const _0x8c0e7e=a29_0x4e1a,{arg:_0xea413c,superUser:_0x4a6262,repondre:_0x132bc7}=_0x262590;if(!_0xea413c[0x0]){_0x132bc7(getDescriptionFromEnv(_0x158e92));return;};if(s[_0x8c0e7e(0x97)]=='oui')try{const _0x3d1ed0=dotenv[_0x8c0e7e(0xc9)](fs[_0x8c0e7e(0xb0)](_0x8c0e7e(0xb1),{'encoding':'utf-8'}));_0x3d1ed0[_0x158e92]=_0xea413c['join']('\x20');const _0x889eb5=Object[_0x8c0e7e(0xc4)](_0x3d1ed0)[_0x8c0e7e(0x9f)](_0x59abcd=>_0x59abcd+'='+_0x3d1ed0[_0x59abcd])[_0x8c0e7e(0xa9)]('\x0a');fs[_0x8c0e7e(0xe3)](_0x8c0e7e(0xb1),_0x889eb5),_0x132bc7(_0x8c0e7e(0xb6));const {exec:_0x4205a8}=require(_0x8c0e7e(0xc7));_0x4205a8(_0x8c0e7e(0xac));}catch(_0x45b1a0){console[_0x8c0e7e(0xbe)](_0x45b1a0),_0x132bc7(_0x8c0e7e(0xd5));}else{if(!_0x4a6262){_0x132bc7(_0x8c0e7e(0xad));return;};if(s[_0x8c0e7e(0xab)]==null||s[_0x8c0e7e(0xc2)]==null){_0x132bc7(_0x8c0e7e(0xb8));return;};const _0x2c88ca=require(_0x8c0e7e(0xaf)),_0x5af3c5=new _0x2c88ca({'token':s[_0x8c0e7e(0xc2)]});let _0x1f129a=_0x8c0e7e(0xc8)+s[_0x8c0e7e(0xab)];await _0x5af3c5[_0x8c0e7e(0xb5)](_0x1f129a+_0x8c0e7e(0xa2),{'body':{[_0x158e92]:_0xea413c[_0x8c0e7e(0xa9)]('\x20')}}),await _0x132bc7(_0x8c0e7e(0xbb));}});}function a29_0x3caa(){const _0x3c4852=['Erreur','PM_PERMIT','3825724xIlXSP','STARTING_BOT_MESSAGE','get','settings','message','oui','ANTI_VUE_UNIQUE','../set','utf-8','18RHjGLC','contextInfo','*Description*\x20:','writeFileSync','Heroku','awaitForMessage','stanzaId','HEROKU','getvar','🍁\x20*','LIENS_MENU','755282xnQXmt','Inserez\x20le\x20nom\x20de\x20la\x20variabke\x20en\x20grand\x20Charactere','33EYYWQL','\x0a└──────\x20⋆⋅☆⋅⋆\x20──────┘\x0a\x0aVeillez\x20entrez\x20le\x20chiffre\x20correspondant\x20a\x20votre\x20choix','map','dotenv','15755769OZArht','/config-vars','error','4247024TxbFOF','La\x20description\x20de\x20la\x20variable\x20d\x27environnement\x20n\x27a\x20pas\x20été\x20trouvée.','421628VWkOLg','non','\x0aChoisissez\x20une\x20variable\x20par\x20son\x20chiffre','join','./app.json','HEROKU_APP_NAME','pm2\x20restart\x20all','Vous\x20n\x27avez\x20pas\x20de\x20droit\x20sur\x20cette\x20categorie\x20de\x20commande','Mauvais\x20formats\x20;\x20voici\x20le\x20mode\x20d\x27emploie.\x0aSetvar\x20NOM_OWNER=Fredora','heroku-client','readFileSync','set.env','PREFIXE','sendMessage','MODE_PUBLIC','patch','Variable\x20Actualiser\x20avec\x20success\x0aRedemarrage\x20en\x20cours','description','Veuillez\x20renseigner\x20les\x20variables\x20d\x27environnement\x20HEROKU_APP_NAME\x20et\x20HEROKU_APY_KEY','split','Commande\x20reserver\x20au\x20proprietaire\x20du\x20bot','variable\x20actualiser\x20,\x20redemarrage\x20en\x20cours....','Erreur\x20lors\x20de\x20la\x20procedure\x20','LECTURE_AUTO_STATUS','log','┌──────\x20⋆⋅☆⋅⋆\x20──────┐\x0a\x0a','\x20\x20\x20\x20╭──────༺♡༻──────╮\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Zokou-settings\x0a\x20\x20\x20\x20╰──────༺♡༻──────╯\x0a\x0a','key','HEROKU_APY_KEY','env','keys','botname','extendedTextMessage','child_process','/apps/','parse','length','457656olBaou','-\x20*','nom','warncount','text','422495vpLkrB','*\x20*','PM_CHATBOT','setprefix','ETAT'];a29_0x3caa=function(){return _0x3c4852;};return a29_0x3caa();};changevars(a29_0x382f91(0xd3),a29_0x382f91(0xb2)),changevars('linkmenu',a29_0x382f91(0x9a)),changevars(a29_0x382f91(0xce),'WARN_COUNT'),changevars(a29_0x382f91(0xc5),'NOM_BOT');