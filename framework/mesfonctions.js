'use strict';const a56_0x459e76=a56_0x48dc;(function(_0x576c2c,_0x35152e){const _0x43e354=a56_0x48dc,_0x1ca480=_0x576c2c();while(!![]){try{const _0x52418a=parseInt(_0x43e354(0x19d))/0x1*(-parseInt(_0x43e354(0x181))/0x2)+parseInt(_0x43e354(0x172))/0x3+parseInt(_0x43e354(0x1c2))/0x4*(parseInt(_0x43e354(0x1c8))/0x5)+-parseInt(_0x43e354(0x185))/0x6*(-parseInt(_0x43e354(0x1bb))/0x7)+parseInt(_0x43e354(0x168))/0x8*(parseInt(_0x43e354(0x1cb))/0x9)+-parseInt(_0x43e354(0x1cf))/0xa+parseInt(_0x43e354(0x1c7))/0xb;if(_0x52418a===_0x35152e)break;else _0x1ca480['push'](_0x1ca480['shift']());}catch(_0x3e8dc1){_0x1ca480['push'](_0x1ca480['shift']());}}}(a56_0x2a22,0x3d931));Object[a56_0x459e76(0x180)](exports,a56_0x459e76(0x1d0),{'value':!![]}),exports['reaction']=exports['recept_message']=exports[a56_0x459e76(0x16b)]=exports[a56_0x459e76(0x1a0)]=exports[a56_0x459e76(0x1a2)]=exports[a56_0x459e76(0x1b0)]=exports['fruit']=exports['tabCmd']=exports[a56_0x459e76(0x197)]=exports['styletext']=exports[a56_0x459e76(0x1c4)]=exports['ajouterCommande']=void 0x0;const axios=require('axios'),path=require(a56_0x459e76(0x164)),cheerio=require(a56_0x459e76(0x187)),{Sticker,createSticker,StickerTypes}=require('wa-sticker-formatter'),baileys_1=require(a56_0x459e76(0x189)),fs=require(a56_0x459e76(0x1a3)),util=require(a56_0x459e76(0x1a1));let {listall}=require(a56_0x459e76(0x1a6));module[a56_0x459e76(0x1af)][a56_0x459e76(0x16d)]=async _0x576932=>{const _0x5439ec=a56_0x459e76;var _0x468b55=Math[_0x5439ec(0x1b7)](Math[_0x5439ec(0x1a7)]()*0x7d0),_0x44be07=_0x5439ec(0x183)+_0x468b55+'.'+_0x576932;return _0x44be07;},module[a56_0x459e76(0x1af)][a56_0x459e76(0x18d)]=async(_0x15134a,_0x35fafd)=>{const _0x3606ad=a56_0x459e76;var _0x23ed91=new Sticker(_0x15134a,{'pack':_0x3606ad(0x1ba),'author':_0x35fafd,'type':StickerTypes['FULL'],'categories':['🤩','🎉'],'id':_0x3606ad(0x192),'quality':0x32,'background':_0x3606ad(0x167)});return _0x23ed91;};async function zJson(_0x9212a,_0x542fa1){const _0x1701b4=a56_0x459e76;try{_0x542fa1?_0x542fa1:{};const _0x4c5279=await axios({'method':'GET','url':_0x9212a,'headers':{'User-Agent':_0x1701b4(0x18c)},..._0x542fa1});return _0x4c5279[_0x1701b4(0x1b3)];}catch(_0x46ee43){return _0x46ee43;}}exports[a56_0x459e76(0x1a0)]=zJson;async function getBuffer(_0x5ea22f,_0x474292){const _0x20b3a0=a56_0x459e76;try{_0x474292?_0x474292:{};const _0x8a6fbf=await axios({'method':'GET','url':_0x5ea22f,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x474292,'responseType':_0x20b3a0(0x194)});return _0x8a6fbf[_0x20b3a0(0x1b3)];}catch(_0x3857b2){console[_0x20b3a0(0x1c5)](_0x3857b2);}}exports['getBuffer']=getBuffer;async function recept_message(_0x10d07c,_0x469957,_0x373dee){const _0x3bf9e7=a56_0x459e76;if(!_0x469957)return;_0x469957['key']&&(_0x469957[_0x3bf9e7(0x19f)]=_0x469957[_0x3bf9e7(0x1bf)],_0x469957['idMessage']=_0x469957[_0x3bf9e7(0x1bf)]['id'],_0x469957['origineMessage']=_0x469957[_0x3bf9e7(0x1bf)][_0x3bf9e7(0x1a4)],_0x469957['moi']=_0x469957[_0x3bf9e7(0x1bf)][_0x3bf9e7(0x1cd)],_0x469957['groupe']=_0x469957['origineMessage'][_0x3bf9e7(0x1b2)](_0x3bf9e7(0x1cc)),_0x469957[_0x3bf9e7(0x1ae)]=_0x469957['idMessage']['startsWith'](_0x3bf9e7(0x198))&&_0x469957['idMessage'][_0x3bf9e7(0x16a)]==0x10);if(_0x469957['message']){_0x469957[_0x3bf9e7(0x193)]=(0x0,baileys_1[_0x3bf9e7(0x1b8)])(_0x469957['message']),_0x469957['ms']=_0x469957['typeMessage']==_0x3bf9e7(0x199)?_0x469957[_0x3bf9e7(0x186)][_0x469957['typeMessage']][_0x3bf9e7(0x186)][(0x0,baileys_1[_0x3bf9e7(0x1b8)])(_0x469957['message'][_0x469957['typeMessage']]['message'])]:_0x469957['message'][_0x469957[_0x3bf9e7(0x193)]];try{switch(_0x469957[_0x3bf9e7(0x193)]){case _0x3bf9e7(0x1b1):_0x469957[_0x3bf9e7(0x1be)]=_0x469957[_0x3bf9e7(0x186)][_0x3bf9e7(0x1b1)];break;case _0x3bf9e7(0x176):_0x469957['corpsMessage']=_0x469957[_0x3bf9e7(0x186)]['imageMessage'][_0x3bf9e7(0x195)];break;case'videoMessage':_0x469957[_0x3bf9e7(0x1be)]=_0x469957[_0x3bf9e7(0x186)][_0x3bf9e7(0x1b9)][_0x3bf9e7(0x195)];break;case _0x3bf9e7(0x18a):_0x469957['corpsMessage']=_0x469957[_0x3bf9e7(0x186)][_0x3bf9e7(0x18b)][_0x3bf9e7(0x17e)];break;case _0x3bf9e7(0x19a):_0x469957[_0x3bf9e7(0x1be)]=_0x469957[_0x3bf9e7(0x186)][_0x3bf9e7(0x19a)]['SelectedButtonId'];break;case'listResponseMessage':_0x469957[_0x3bf9e7(0x1be)]=_0x469957[_0x3bf9e7(0x186)][_0x3bf9e7(0x17b)][_0x3bf9e7(0x1b5)][_0x3bf9e7(0x1a9)];break;case _0x3bf9e7(0x1d1):_0x469957[_0x3bf9e7(0x1be)]=_0x469957['message']['templateButtonReplyMessage']['selectedId'];break;case _0x3bf9e7(0x166):_0x469957[_0x3bf9e7(0x1be)]=_0x469957['message'][_0x3bf9e7(0x19a)][_0x3bf9e7(0x182)]||_0x469957[_0x3bf9e7(0x186)][_0x3bf9e7(0x17b)][_0x3bf9e7(0x1b5)]['selectedRowId']||_0x469957[_0x3bf9e7(0x173)]||'';break;default:_0x469957['corpsMessage']=![];}}catch{_0x469957[_0x3bf9e7(0x1be)]=![];}}let _0x19b080=_0x469957[_0x3bf9e7(0x170)]=_0x469957['ms']['contextInfo']?_0x469957['ms'][_0x3bf9e7(0x1a8)][_0x3bf9e7(0x1b6)]:null;_0x469957['mentionedJid']=_0x469957['ms'][_0x3bf9e7(0x1a8)]?_0x469957['ms'][_0x3bf9e7(0x1a8)]['mentionedJid']:[];if(_0x469957[_0x3bf9e7(0x170)]){}return _0x469957;}exports[a56_0x459e76(0x190)]=recept_message;function a56_0x2a22(){const _0x3c7023=['9umhTIj','@g.us','fromMe','extname','4678580PAMfiP','__esModule','templateButtonReplyMessage','fruit','each','path','MIME_JPEG','messageContextInfo','#000000','961320oXlNea','waifu','length','getBuffer','nomCom','genererNomFichier','toLowerCase','./commandes/','quoted','td:nth-child(1)\x20>\x20span','636645UGhtBd','text','read','table\x20>\x20tbody\x20>\x20tr','imageMessage','https://api.waifu.pics/nsfw/','normalize','push','clone','listResponseMessage','trap','sizeFormatter','Textarea','getBufferAsync','defineProperty','106KRUooE','SelectedButtonId','Zok','ajouterCommande','195066HdoWJE','message','cheerio','https://api.waifu.pics/nsfw/waifu','@whiskeysockets/baileys','entendedTextMessage','extendedTextMessage','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/95.0.4638.69\x20Safari/537.36','stick','td:nth-child(2)','promisify','recept_message','trim','12345','typeMessage','arrayBuffer','caption','neko','police','BAE5','viewOnceMessage','buttonsResponseMessage','readdirSync','find','1790FdeLVb','fichier\x20:\x20','cleMessage','zJson','util','apiWaifu','fs-extra','remoteJid','generatepp','./stylish-font','random','contextInfo','selectedRowId','load','readFile','get','split','origineBot','exports','format','conversation','endsWith','data','getHeight','singleSelectReply','quotedMessage','floor','getContentType','videoMessage','Zokou-MD','7GUVQhR','/../commandes/','crop','corpsMessage','key','blowjob','jimp','4xffvay','scaleToFit','xlab','log','forEach','2025001kRKLvL','1329775YKamJW','.js','styletext'];a56_0x2a22=function(){return _0x3c7023;};return a56_0x2a22();}function styletext(_0x19cf0d){return new Promise((_0x300280,_0x33ad50)=>{const _0x454577=a56_0x48dc;axios[_0x454577(0x1ac)]('http://qaz.wtf/u/convert.cgi?text='+_0x19cf0d)['then'](({data:_0x17ec1f})=>{const _0x340d11=_0x454577;let _0x214d6d=cheerio[_0x340d11(0x1aa)](_0x17ec1f),_0x16a21f=[];_0x214d6d(_0x340d11(0x175))[_0x340d11(0x1d3)](function(_0x3b8831,_0x1e4ae9){const _0x57c1b1=_0x340d11;_0x16a21f[_0x57c1b1(0x179)]({'name':_0x214d6d(_0x1e4ae9)['find'](_0x57c1b1(0x171))[_0x57c1b1(0x173)](),'result':_0x214d6d(_0x1e4ae9)[_0x57c1b1(0x19c)](_0x57c1b1(0x18e))[_0x57c1b1(0x173)]()[_0x57c1b1(0x191)]()});}),_0x300280(_0x16a21f);});});}exports[a56_0x459e76(0x1ca)]=styletext;async function apiWaifu(_0x3649e9){const _0x12356c=a56_0x459e76;var _0x51501b=_0x12356c(0x177);if(_0x3649e9==_0x12356c(0x169))_0x51501b+=_0x3649e9;else{if(_0x3649e9==_0x12356c(0x17c))_0x51501b+=_0x3649e9;else{if(_0x3649e9==_0x12356c(0x196))_0x51501b+=_0x3649e9;else _0x3649e9==_0x12356c(0x1c0)?_0x51501b+=_0x12356c(0x1c0):_0x51501b=_0x12356c(0x188);}}try{const _0x5d19b8=await axios[_0x12356c(0x1ac)](_0x51501b);return _0x5d19b8['data']['url'];}catch(_0x52016d){console[_0x12356c(0x1c5)](_0x52016d);}}exports['apiWaifu']=apiWaifu;var tabCmd={};exports['tabCmd']=tabCmd;var reaction={};exports['reaction']=reaction;var fruit={};exports[a56_0x459e76(0x1d2)]=fruit;async function ajouterCommande(){const _0xf5e198=a56_0x459e76;fs[_0xf5e198(0x19b)](__dirname+'/../commandes')[_0xf5e198(0x1c6)](_0x4c8e66=>{const _0x5a0664=_0xf5e198;path[_0x5a0664(0x1ce)](_0x4c8e66)[_0x5a0664(0x16e)]()==_0x5a0664(0x1c9)&&(require(__dirname+_0x5a0664(0x1bc)+_0x4c8e66[_0x5a0664(0x1ad)](_0x5a0664(0x1c9))[0x0]),console[_0x5a0664(0x1c5)](_0x5a0664(0x19e)+_0x4c8e66));});}exports[a56_0x459e76(0x184)]=ajouterCommande;async function xlab(){const _0x55e4a8=a56_0x459e76,_0xee31ba=util[_0x55e4a8(0x18f)](fs['readdir']),_0x1d7ea6=util[_0x55e4a8(0x18f)](fs[_0x55e4a8(0x1ab)]);var _0x2fdfeb=_0x55e4a8(0x16f),_0x593134=await _0xee31ba(_0x2fdfeb);_0x593134['forEach'](_0xaa3e4d=>{const _0x234285=_0x55e4a8;if(_0xaa3e4d['endsWith']('.js')){var {commande:_0x3815ed}=require(__dirname+_0x234285(0x1bc)+_0xaa3e4d[_0x234285(0x1ad)](_0x234285(0x1c9))[0x0]),_0xb3cbaa;_0x3815ed?_0xb3cbaa=_0x3815ed():_0xb3cbaa=null;if(_0xb3cbaa!=null)for(const _0x479cf9 of _0xb3cbaa[_0x234285(0x16c)]){fruit[_0x479cf9]=_0xb3cbaa['execute'];}}});}exports[a56_0x459e76(0x1c4)]=xlab;function a56_0x48dc(_0x19d595,_0x14d6b6){const _0x2a2291=a56_0x2a22();return a56_0x48dc=function(_0x48dcec,_0x109301){_0x48dcec=_0x48dcec-0x164;let _0x5cfd12=_0x2a2291[_0x48dcec];return _0x5cfd12;},a56_0x48dc(_0x19d595,_0x14d6b6);}const human_readable_1=require('human-readable'),format=(0x0,human_readable_1[a56_0x459e76(0x17d)])({'std':'JEDEC','decimalPlaces':0x2,'keepTrailingZeroes':![],'render':(_0x2a6241,_0x754bfa)=>_0x2a6241+'\x20'+_0x754bfa+'B'});exports['format']=format;function police(_0x685250,_0x43ab0e){return _0x43ab0e=_0x43ab0e-0x1,listall(_0x685250)[_0x43ab0e];}exports[a56_0x459e76(0x197)]=police,exports[a56_0x459e76(0x1a5)]=async _0x4c6d03=>{const _0xf9efca=a56_0x459e76,_0x382031=require(_0xf9efca(0x1c1)),_0x582d08=await _0x382031[_0xf9efca(0x174)](_0x4c6d03),_0x453b39=_0x582d08['getWidth'](),_0x48a1ca=_0x582d08[_0xf9efca(0x1b4)](),_0x5dbca4=_0x582d08[_0xf9efca(0x17a)]()[_0xf9efca(0x1bd)](0x0,0x0,_0x453b39,_0x48a1ca),_0x3bea23=await _0x5dbca4[_0xf9efca(0x17a)]()[_0xf9efca(0x1c3)](0x2d0,0x2d0)[_0xf9efca(0x17f)](_0x382031[_0xf9efca(0x165)]),_0x5ca762=await _0x5dbca4[_0xf9efca(0x17a)]()[_0xf9efca(0x178)]()[_0xf9efca(0x17f)](_0x382031['MIME_JPEG']);return{'img':_0x3bea23,'preview':_0x5ca762};};