const a7_0xabce02=a7_0x473b;(function(_0x1d56be,_0x36d1cc){const _0x2c18c6=a7_0x473b,_0x48487b=_0x1d56be();while(!![]){try{const _0x42c696=parseInt(_0x2c18c6(0x1a0))/0x1+parseInt(_0x2c18c6(0x191))/0x2*(parseInt(_0x2c18c6(0x193))/0x3)+-parseInt(_0x2c18c6(0x18b))/0x4*(-parseInt(_0x2c18c6(0x188))/0x5)+-parseInt(_0x2c18c6(0x19d))/0x6+-parseInt(_0x2c18c6(0x19b))/0x7+parseInt(_0x2c18c6(0x196))/0x8+-parseInt(_0x2c18c6(0x1a1))/0x9;if(_0x42c696===_0x36d1cc)break;else _0x48487b['push'](_0x48487b['shift']());}catch(_0x17e39c){_0x48487b['push'](_0x48487b['shift']());}}}(a7_0xe9a8,0x6ca8c),require(a7_0xabce02(0x18e))[a7_0xabce02(0x18d)]());const {Pool}=require('pg'),s=require(a7_0xabce02(0x18a));var dbUrl=s['DATABASE_URL']?s[a7_0xabce02(0x19a)]:a7_0xabce02(0x19e);function a7_0xe9a8(){const _0x5141d4=['release','\x20a\x20été\x20supprimé\x20de\x20la\x20liste\x20de\x20hentai.','exports','DATABASE_URL','994259wjRGqy','log','1859028ZLuLID','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','Le\x20groupe\x20JID\x20','11062GOBSYz','5324886tnVFJQ','query','La\x20table\x20\x27hentai\x27\x20avec\x20\x27groupeJid\x27\x20comme\x20clé\x20primaire\x20a\x20été\x20créée\x20avec\x20succès.','43315pIjelc','SELECT\x20EXISTS\x20(SELECT\x201\x20FROM\x20hentai\x20WHERE\x20groupeJid\x20=\x20$1)','../set','368iyMLFi','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27hentai\x27:','config','dotenv','connect','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20la\x20présence\x20du\x20groupe\x20dans\x20la\x20liste\x20de\x20hentai\x20:','6XxvOAL','error','535863HhecUw','Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20groupe\x20à\x20la\x20liste\x20de\x20hentai\x20:','\x20a\x20été\x20ajouté\x20à\x20la\x20liste\x20de\x20hentai.','1157408MwcfId'];a7_0xe9a8=function(){return _0x5141d4;};return a7_0xe9a8();}const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableHentai=async()=>{const _0x222ef3=a7_0xabce02;try{await pool[_0x222ef3(0x186)]('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20hentai\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20groupeJid\x20text\x20PRIMARY\x20KEY\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20'),console[_0x222ef3(0x19c)](_0x222ef3(0x187));}catch(_0x59c1c3){console[_0x222ef3(0x192)](_0x222ef3(0x18c),_0x59c1c3);}};creerTableHentai();async function addToHentaiList(_0x44a38b){const _0xd71075=a7_0xabce02,_0x33a365=await pool[_0xd71075(0x18f)]();try{const _0x50d42b='INSERT\x20INTO\x20hentai\x20(groupeJid)\x20VALUES\x20($1)',_0x4bd7d4=[_0x44a38b];await _0x33a365[_0xd71075(0x186)](_0x50d42b,_0x4bd7d4),console[_0xd71075(0x19c)](_0xd71075(0x19f)+_0x44a38b+_0xd71075(0x195));}catch(_0x24f291){console[_0xd71075(0x192)](_0xd71075(0x194),_0x24f291);}finally{_0x33a365[_0xd71075(0x197)]();}}function a7_0x473b(_0x59a2f2,_0x36d9ce){const _0xe9a84e=a7_0xe9a8();return a7_0x473b=function(_0x473b4c,_0x3a3c3f){_0x473b4c=_0x473b4c-0x186;let _0x4b9b4c=_0xe9a84e[_0x473b4c];return _0x4b9b4c;},a7_0x473b(_0x59a2f2,_0x36d9ce);}async function checkFromHentaiList(_0x51e96a){const _0x3f7107=a7_0xabce02,_0x438736=await pool[_0x3f7107(0x18f)]();try{const _0x62e11d=_0x3f7107(0x189),_0x3ca398=[_0x51e96a],_0x246b77=await _0x438736[_0x3f7107(0x186)](_0x62e11d,_0x3ca398);return _0x246b77['rows'][0x0]['exists'];}catch(_0x4c263d){return console[_0x3f7107(0x192)](_0x3f7107(0x190),_0x4c263d),![];}finally{_0x438736[_0x3f7107(0x197)]();}}async function removeFromHentaiList(_0x4bea03){const _0x90b9b0=a7_0xabce02,_0x18154d=await pool['connect']();try{const _0x1b2a3b='DELETE\x20FROM\x20hentai\x20WHERE\x20groupeJid\x20=\x20$1',_0xb2ca55=[_0x4bea03];await _0x18154d[_0x90b9b0(0x186)](_0x1b2a3b,_0xb2ca55),console['log'](_0x90b9b0(0x19f)+_0x4bea03+_0x90b9b0(0x198));}catch(_0x1ec882){console[_0x90b9b0(0x192)]('Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20groupe\x20de\x20la\x20liste\x20de\x20hentai\x20:',_0x1ec882);}finally{_0x18154d[_0x90b9b0(0x197)]();}}module[a7_0xabce02(0x199)]={'addToHentaiList':addToHentaiList,'checkFromHentaiList':checkFromHentaiList,'removeFromHentaiList':removeFromHentaiList};