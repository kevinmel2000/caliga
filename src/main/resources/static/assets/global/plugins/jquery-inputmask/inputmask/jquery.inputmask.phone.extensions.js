(function(a){"function"===typeof define&&define.amd?define(["jquery","./jquery.inputmask"],a):a(jQuery)})(function(a){a.extend(a.inputmask.defaults.aliases,{phone:{url:"phone-codes/phone-codes.json",mask:function(c){c.definitions={p:{validator:function(){return!1},cardinality:1},"#":{validator:"[0-9]",cardinality:1}};var b=[];a.ajax({url:c.url,async:!1,dataType:"json",success:function(a){b=a}});b.splice(0,0,"+p(ppp)ppp-pppp");return b},nojumps:!0,nojumpsThreshold:1},phonebe:{url:"phone-codes/phone-be.json",
mask:function(c){c.definitions={p:{validator:function(){return!1},cardinality:1},"#":{validator:"[0-9]",cardinality:1}};var b=[];a.ajax({url:c.url,async:!1,dataType:"json",success:function(a){b=a}});b.splice(0,0,"+32(ppp)ppp-pppp");return b},nojumps:!0,nojumpsThreshold:4}})});
