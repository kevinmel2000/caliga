(function(b){"function"===typeof define&&define.amd?define(["jquery","./jquery.inputmask"],b):b(jQuery)})(function(b){b.extend(b.inputmask.defaults.definitions,{A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\u00c0-\u00ff\u00b5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\u00c0-\u00ff\u00b5]",cardinality:1,casing:"upper"}});b.extend(b.inputmask.defaults.aliases,{url:{mask:"ir",placeholder:"",separator:"",defaultPrefix:"http://",regex:{urlpre1:/[fh]/,urlpre2:/(ft|ht)/,
urlpre3:/(ftp|htt)/,urlpre4:/(ftp:|http|ftps)/,urlpre5:/(ftp:\/|ftps:|http:|https)/,urlpre6:/(ftp:\/\/|ftps:\/|http:\/|https:)/,urlpre7:/(ftp:\/\/|ftps:\/\/|http:\/\/|https:\/)/,urlpre8:/(ftp:\/\/|ftps:\/\/|http:\/\/|https:\/\/)/},definitions:{i:{validator:function(a,c,k,h,b){return!0},cardinality:8,prevalidator:function(){for(var a=[],c=0;8>c;c++)a[c]=function(){var a=c;return{validator:function(c,b,e,d,g){if(g.regex["urlpre"+(a+1)]){var f=c;0<a+1-c.length&&(f=b.buffer.join("").substring(0,a+1-c.length)+
""+f);c=g.regex["urlpre"+(a+1)].test(f);if(!d&&!c){e-=a;for(d=0;d<g.defaultPrefix.length;d++)b.buffer[e]=g.defaultPrefix[d],e++;for(d=0;d<f.length-1;d++)b.buffer[e]=f[d],e++;return{pos:e}}return c}return!1},cardinality:a}}();return a}()},r:{validator:".",cardinality:50}},insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,c,b,h,l){-1<b-1&&"."!=c.buffer[b-1]?(a=c.buffer[b-1]+a,a=-1<b-2&&"."!=c.buffer[b-2]?c.buffer[b-2]+a:"0"+a):a="00"+a;return/25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/.test(a)},
cardinality:1}}},email:{mask:"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",greedy:!1,onBeforePaste:function(a,b){a=a.toLowerCase();return a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"}}}})});
