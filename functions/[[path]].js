globalThis.process = {
	argv: [],
	env: {},
};
var qa=Object.create;var tt=Object.defineProperty;var Ia=Object.getOwnPropertyDescriptor;var Ma=Object.getOwnPropertyNames;var La=Object.getPrototypeOf,za=Object.prototype.hasOwnProperty;var T=(e,i)=>()=>(e&&(i=e(e=0)),i);var ae=(e,i)=>()=>(i||e((i={exports:{}}).exports,i),i.exports),q=(e,i)=>{for(var n in i)tt(e,n,{get:i[n],enumerable:!0})},Na=(e,i,n,t)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of Ma(i))!za.call(e,o)&&o!==n&&tt(e,o,{get:()=>i[o],enumerable:!(t=Ia(i,o))||t.enumerable});return e};var W=(e,i,n)=>(n=e!=null?qa(La(e)):{},Na(i||!e||!e.__esModule?tt(n,"default",{value:e,enumerable:!0}):n,e));var it=(e,i,n)=>{if(!i.has(e))throw TypeError("Cannot "+n)};var m=(e,i,n)=>(it(e,i,"read from private field"),n?n.call(e):i.get(e)),A=(e,i,n)=>{if(i.has(e))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(e):i.set(e,n)},j=(e,i,n,t)=>(it(e,i,"write to private field"),t?t.call(e,n):i.set(e,n),n);var V=(e,i,n)=>(it(e,i,"access private method"),n);var oe=ae(nt=>{"use strict";nt.parse=Ga;nt.serialize=Va;var Ha=Object.prototype.toString,Ue=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Ga(e,i){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var n={},t=i||{},o=t.decode||Ja,a=0;a<e.length;){var s=e.indexOf("=",a);if(s===-1)break;var r=e.indexOf(";",a);if(r===-1)r=e.length;else if(r<s){a=e.lastIndexOf(";",s-1)+1;continue}var c=e.slice(a,s).trim();if(n[c]===void 0){var u=e.slice(s+1,r).trim();u.charCodeAt(0)===34&&(u=u.slice(1,-1)),n[c]=Za(u,o)}a=r+1}return n}function Va(e,i,n){var t=n||{},o=t.encode||Ka;if(typeof o!="function")throw new TypeError("option encode is invalid");if(!Ue.test(e))throw new TypeError("argument name is invalid");var a=o(i);if(a&&!Ue.test(a))throw new TypeError("argument val is invalid");var s=e+"="+a;if(t.maxAge!=null){var r=t.maxAge-0;if(isNaN(r)||!isFinite(r))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(r)}if(t.domain){if(!Ue.test(t.domain))throw new TypeError("option domain is invalid");s+="; Domain="+t.domain}if(t.path){if(!Ue.test(t.path))throw new TypeError("option path is invalid");s+="; Path="+t.path}if(t.expires){var c=t.expires;if(!Xa(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+c.toUTCString()}if(t.httpOnly&&(s+="; HttpOnly"),t.secure&&(s+="; Secure"),t.priority){var u=typeof t.priority=="string"?t.priority.toLowerCase():t.priority;switch(u){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(t.sameSite){var l=typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite;switch(l){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}function Ja(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function Ka(e){return encodeURIComponent(e)}function Xa(e){return Ha.call(e)==="[object Date]"||e instanceof Date}function Za(e,i){try{return i(e)}catch{return e}}});function Qa(e){for(var i=[],n=0;n<e.length;){var t=e[n];if(t==="*"||t==="+"||t==="?"){i.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(t==="\\"){i.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(t==="{"){i.push({type:"OPEN",index:n,value:e[n++]});continue}if(t==="}"){i.push({type:"CLOSE",index:n,value:e[n++]});continue}if(t===":"){for(var o="",a=n+1;a<e.length;){var s=e.charCodeAt(a);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){o+=e[a++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(n));i.push({type:"NAME",index:n,value:o}),n=a;continue}if(t==="("){var r=1,c="",a=n+1;if(e[a]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<e.length;){if(e[a]==="\\"){c+=e[a++]+e[a++];continue}if(e[a]===")"){if(r--,r===0){a++;break}}else if(e[a]==="("&&(r++,e[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(a));c+=e[a++]}if(r)throw new TypeError("Unbalanced pattern at ".concat(n));if(!c)throw new TypeError("Missing pattern at ".concat(n));i.push({type:"PATTERN",index:n,value:c}),n=a;continue}i.push({type:"CHAR",index:n,value:e[n++]})}return i.push({type:"END",index:n,value:""}),i}function eo(e,i){i===void 0&&(i={});for(var n=Qa(e),t=i.prefixes,o=t===void 0?"./":t,a="[^".concat(io(i.delimiter||"/#?"),"]+?"),s=[],r=0,c=0,u="",l=function(G){if(c<n.length&&n[c].type===G)return n[c++].value},p=function(G){var ne=l(G);if(ne!==void 0)return ne;var b=n[c],Y=b.type,$=b.index;throw new TypeError("Unexpected ".concat(Y," at ").concat($,", expected ").concat(G))},d=function(){for(var G="",ne;ne=l("CHAR")||l("ESCAPED_CHAR");)G+=ne;return G};c<n.length;){var B=l("CHAR"),E=l("NAME"),x=l("PATTERN");if(E||x){var v=B||"";o.indexOf(v)===-1&&(u+=v,v=""),u&&(s.push(u),u=""),s.push({name:E||r++,prefix:v,suffix:"",pattern:x||a,modifier:l("MODIFIER")||""});continue}var w=B||l("ESCAPED_CHAR");if(w){u+=w;continue}u&&(s.push(u),u="");var g=l("OPEN");if(g){var v=d(),H=l("NAME")||"",U=l("PATTERN")||"",R=d();p("CLOSE"),s.push({name:H||(U?r++:""),pattern:H&&!U?a:U,prefix:v,suffix:R,modifier:l("MODIFIER")||""});continue}p("END")}return s}function Nt(e,i){return to(eo(e,i),i)}function to(e,i){i===void 0&&(i={});var n=no(i),t=i.encode,o=t===void 0?function(c){return c}:t,a=i.validate,s=a===void 0?!0:a,r=e.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),n)});return function(c){for(var u="",l=0;l<e.length;l++){var p=e[l];if(typeof p=="string"){u+=p;continue}var d=c?c[p.name]:void 0,B=p.modifier==="?"||p.modifier==="*",E=p.modifier==="*"||p.modifier==="+";if(Array.isArray(d)){if(!E)throw new TypeError('Expected "'.concat(p.name,'" to not repeat, but got an array'));if(d.length===0){if(B)continue;throw new TypeError('Expected "'.concat(p.name,'" to not be empty'))}for(var x=0;x<d.length;x++){var v=o(d[x],p);if(s&&!r[l].test(v))throw new TypeError('Expected all "'.concat(p.name,'" to match "').concat(p.pattern,'", but got "').concat(v,'"'));u+=p.prefix+v+p.suffix}continue}if(typeof d=="string"||typeof d=="number"){var v=o(String(d),p);if(s&&!r[l].test(v))throw new TypeError('Expected "'.concat(p.name,'" to match "').concat(p.pattern,'", but got "').concat(v,'"'));u+=p.prefix+v+p.suffix;continue}if(!B){var w=E?"an array":"a string";throw new TypeError('Expected "'.concat(p.name,'" to be ').concat(w))}}return u}}function io(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function no(e){return e&&e.sensitive?"":"i"}var Ht=T(()=>{});var Vt=ae((hl,Gt)=>{"use strict";function We(){this._types=Object.create(null),this._extensions=Object.create(null);for(let e=0;e<arguments.length;e++)this.define(arguments[e]);this.define=this.define.bind(this),this.getType=this.getType.bind(this),this.getExtension=this.getExtension.bind(this)}We.prototype.define=function(e,i){for(let n in e){let t=e[n].map(function(o){return o.toLowerCase()});n=n.toLowerCase();for(let o=0;o<t.length;o++){let a=t[o];if(a[0]!=="*"){if(!i&&a in this._types)throw new Error('Attempt to change mapping for "'+a+'" extension from "'+this._types[a]+'" to "'+n+'". Pass `force=true` to allow this, otherwise remove "'+a+'" from the list of extensions for "'+n+'".');this._types[a]=n}}if(i||!this._extensions[n]){let o=t[0];this._extensions[n]=o[0]!=="*"?o:o.substr(1)}}};We.prototype.getType=function(e){e=String(e);let i=e.replace(/^.*[/\\]/,"").toLowerCase(),n=i.replace(/^.*\./,"").toLowerCase(),t=i.length<e.length;return(n.length<i.length-1||!t)&&this._types[n]||null};We.prototype.getExtension=function(e){return e=/^\s*([^;\s]*)/.test(e)&&RegExp.$1,e&&this._extensions[e.toLowerCase()]||null};Gt.exports=We});var Kt=ae((fl,Jt)=>{Jt.exports={"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["es","ecma"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/express":["exp"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/trig":["trig"],"application/ttml+xml":["ttml"],"application/ubjson":["ubj"],"application/urc-ressheet+xml":["rsheet"],"application/urc-targetdesc+xml":["td"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["*xsl","xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/amr":["amr"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx","opus"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/avif":["avif"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/ktx2":["ktx2"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/step+xml":["stpx"],"model/step+zip":["stpz"],"model/step-xml+zip":["stpxz"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/spdx":["spdx"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/iso.segment":["m4s"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]}});var Zt=ae((gl,Xt)=>{Xt.exports={"application/prs.cww":["cww"],"application/vnd.1000minds.decision-model+xml":["1km"],"application/vnd.3gpp.pic-bw-large":["plb"],"application/vnd.3gpp.pic-bw-small":["psb"],"application/vnd.3gpp.pic-bw-var":["pvb"],"application/vnd.3gpp2.tcap":["tcap"],"application/vnd.3m.post-it-notes":["pwn"],"application/vnd.accpac.simply.aso":["aso"],"application/vnd.accpac.simply.imp":["imp"],"application/vnd.acucobol":["acu"],"application/vnd.acucorp":["atc","acutc"],"application/vnd.adobe.air-application-installer-package+zip":["air"],"application/vnd.adobe.formscentral.fcdt":["fcdt"],"application/vnd.adobe.fxp":["fxp","fxpl"],"application/vnd.adobe.xdp+xml":["xdp"],"application/vnd.adobe.xfdf":["xfdf"],"application/vnd.ahead.space":["ahead"],"application/vnd.airzip.filesecure.azf":["azf"],"application/vnd.airzip.filesecure.azs":["azs"],"application/vnd.amazon.ebook":["azw"],"application/vnd.americandynamics.acc":["acc"],"application/vnd.amiga.ami":["ami"],"application/vnd.android.package-archive":["apk"],"application/vnd.anser-web-certificate-issue-initiation":["cii"],"application/vnd.anser-web-funds-transfer-initiation":["fti"],"application/vnd.antix.game-component":["atx"],"application/vnd.apple.installer+xml":["mpkg"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.mpegurl":["m3u8"],"application/vnd.apple.numbers":["numbers"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.pkpass":["pkpass"],"application/vnd.aristanetworks.swi":["swi"],"application/vnd.astraea-software.iota":["iota"],"application/vnd.audiograph":["aep"],"application/vnd.balsamiq.bmml+xml":["bmml"],"application/vnd.blueice.multipass":["mpm"],"application/vnd.bmi":["bmi"],"application/vnd.businessobjects":["rep"],"application/vnd.chemdraw+xml":["cdxml"],"application/vnd.chipnuts.karaoke-mmd":["mmd"],"application/vnd.cinderella":["cdy"],"application/vnd.citationstyles.style+xml":["csl"],"application/vnd.claymore":["cla"],"application/vnd.cloanto.rp9":["rp9"],"application/vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"application/vnd.cluetrust.cartomobile-config":["c11amc"],"application/vnd.cluetrust.cartomobile-config-pkg":["c11amz"],"application/vnd.commonspace":["csp"],"application/vnd.contact.cmsg":["cdbcmsg"],"application/vnd.cosmocaller":["cmc"],"application/vnd.crick.clicker":["clkx"],"application/vnd.crick.clicker.keyboard":["clkk"],"application/vnd.crick.clicker.palette":["clkp"],"application/vnd.crick.clicker.template":["clkt"],"application/vnd.crick.clicker.wordbank":["clkw"],"application/vnd.criticaltools.wbs+xml":["wbs"],"application/vnd.ctc-posml":["pml"],"application/vnd.cups-ppd":["ppd"],"application/vnd.curl.car":["car"],"application/vnd.curl.pcurl":["pcurl"],"application/vnd.dart":["dart"],"application/vnd.data-vision.rdz":["rdz"],"application/vnd.dbf":["dbf"],"application/vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"application/vnd.dece.ttml+xml":["uvt","uvvt"],"application/vnd.dece.unspecified":["uvx","uvvx"],"application/vnd.dece.zip":["uvz","uvvz"],"application/vnd.denovo.fcselayout-link":["fe_launch"],"application/vnd.dna":["dna"],"application/vnd.dolby.mlp":["mlp"],"application/vnd.dpgraph":["dpg"],"application/vnd.dreamfactory":["dfac"],"application/vnd.ds-keypoint":["kpxx"],"application/vnd.dvb.ait":["ait"],"application/vnd.dvb.service":["svc"],"application/vnd.dynageo":["geo"],"application/vnd.ecowin.chart":["mag"],"application/vnd.enliven":["nml"],"application/vnd.epson.esf":["esf"],"application/vnd.epson.msf":["msf"],"application/vnd.epson.quickanime":["qam"],"application/vnd.epson.salt":["slt"],"application/vnd.epson.ssf":["ssf"],"application/vnd.eszigno3+xml":["es3","et3"],"application/vnd.ezpix-album":["ez2"],"application/vnd.ezpix-package":["ez3"],"application/vnd.fdf":["fdf"],"application/vnd.fdsn.mseed":["mseed"],"application/vnd.fdsn.seed":["seed","dataless"],"application/vnd.flographit":["gph"],"application/vnd.fluxtime.clip":["ftc"],"application/vnd.framemaker":["fm","frame","maker","book"],"application/vnd.frogans.fnc":["fnc"],"application/vnd.frogans.ltf":["ltf"],"application/vnd.fsc.weblaunch":["fsc"],"application/vnd.fujitsu.oasys":["oas"],"application/vnd.fujitsu.oasys2":["oa2"],"application/vnd.fujitsu.oasys3":["oa3"],"application/vnd.fujitsu.oasysgp":["fg5"],"application/vnd.fujitsu.oasysprs":["bh2"],"application/vnd.fujixerox.ddd":["ddd"],"application/vnd.fujixerox.docuworks":["xdw"],"application/vnd.fujixerox.docuworks.binder":["xbd"],"application/vnd.fuzzysheet":["fzs"],"application/vnd.genomatix.tuxedo":["txd"],"application/vnd.geogebra.file":["ggb"],"application/vnd.geogebra.tool":["ggt"],"application/vnd.geometry-explorer":["gex","gre"],"application/vnd.geonext":["gxt"],"application/vnd.geoplan":["g2w"],"application/vnd.geospace":["g3w"],"application/vnd.gmx":["gmx"],"application/vnd.google-apps.document":["gdoc"],"application/vnd.google-apps.presentation":["gslides"],"application/vnd.google-apps.spreadsheet":["gsheet"],"application/vnd.google-earth.kml+xml":["kml"],"application/vnd.google-earth.kmz":["kmz"],"application/vnd.grafeq":["gqf","gqs"],"application/vnd.groove-account":["gac"],"application/vnd.groove-help":["ghf"],"application/vnd.groove-identity-message":["gim"],"application/vnd.groove-injector":["grv"],"application/vnd.groove-tool-message":["gtm"],"application/vnd.groove-tool-template":["tpl"],"application/vnd.groove-vcard":["vcg"],"application/vnd.hal+xml":["hal"],"application/vnd.handheld-entertainment+xml":["zmm"],"application/vnd.hbci":["hbci"],"application/vnd.hhe.lesson-player":["les"],"application/vnd.hp-hpgl":["hpgl"],"application/vnd.hp-hpid":["hpid"],"application/vnd.hp-hps":["hps"],"application/vnd.hp-jlyt":["jlt"],"application/vnd.hp-pcl":["pcl"],"application/vnd.hp-pclxl":["pclxl"],"application/vnd.hydrostatix.sof-data":["sfd-hdstx"],"application/vnd.ibm.minipay":["mpy"],"application/vnd.ibm.modcap":["afp","listafp","list3820"],"application/vnd.ibm.rights-management":["irm"],"application/vnd.ibm.secure-container":["sc"],"application/vnd.iccprofile":["icc","icm"],"application/vnd.igloader":["igl"],"application/vnd.immervision-ivp":["ivp"],"application/vnd.immervision-ivu":["ivu"],"application/vnd.insors.igm":["igm"],"application/vnd.intercon.formnet":["xpw","xpx"],"application/vnd.intergeo":["i2g"],"application/vnd.intu.qbo":["qbo"],"application/vnd.intu.qfx":["qfx"],"application/vnd.ipunplugged.rcprofile":["rcprofile"],"application/vnd.irepository.package+xml":["irp"],"application/vnd.is-xpr":["xpr"],"application/vnd.isac.fcs":["fcs"],"application/vnd.jam":["jam"],"application/vnd.jcp.javame.midlet-rms":["rms"],"application/vnd.jisp":["jisp"],"application/vnd.joost.joda-archive":["joda"],"application/vnd.kahootz":["ktz","ktr"],"application/vnd.kde.karbon":["karbon"],"application/vnd.kde.kchart":["chrt"],"application/vnd.kde.kformula":["kfo"],"application/vnd.kde.kivio":["flw"],"application/vnd.kde.kontour":["kon"],"application/vnd.kde.kpresenter":["kpr","kpt"],"application/vnd.kde.kspread":["ksp"],"application/vnd.kde.kword":["kwd","kwt"],"application/vnd.kenameaapp":["htke"],"application/vnd.kidspiration":["kia"],"application/vnd.kinar":["kne","knp"],"application/vnd.koan":["skp","skd","skt","skm"],"application/vnd.kodak-descriptor":["sse"],"application/vnd.las.las+xml":["lasxml"],"application/vnd.llamagraphics.life-balance.desktop":["lbd"],"application/vnd.llamagraphics.life-balance.exchange+xml":["lbe"],"application/vnd.lotus-1-2-3":["123"],"application/vnd.lotus-approach":["apr"],"application/vnd.lotus-freelance":["pre"],"application/vnd.lotus-notes":["nsf"],"application/vnd.lotus-organizer":["org"],"application/vnd.lotus-screencam":["scm"],"application/vnd.lotus-wordpro":["lwp"],"application/vnd.macports.portpkg":["portpkg"],"application/vnd.mapbox-vector-tile":["mvt"],"application/vnd.mcd":["mcd"],"application/vnd.medcalcdata":["mc1"],"application/vnd.mediastation.cdkey":["cdkey"],"application/vnd.mfer":["mwf"],"application/vnd.mfmp":["mfm"],"application/vnd.micrografx.flo":["flo"],"application/vnd.micrografx.igx":["igx"],"application/vnd.mif":["mif"],"application/vnd.mobius.daf":["daf"],"application/vnd.mobius.dis":["dis"],"application/vnd.mobius.mbk":["mbk"],"application/vnd.mobius.mqy":["mqy"],"application/vnd.mobius.msl":["msl"],"application/vnd.mobius.plc":["plc"],"application/vnd.mobius.txf":["txf"],"application/vnd.mophun.application":["mpn"],"application/vnd.mophun.certificate":["mpc"],"application/vnd.mozilla.xul+xml":["xul"],"application/vnd.ms-artgalry":["cil"],"application/vnd.ms-cab-compressed":["cab"],"application/vnd.ms-excel":["xls","xlm","xla","xlc","xlt","xlw"],"application/vnd.ms-excel.addin.macroenabled.12":["xlam"],"application/vnd.ms-excel.sheet.binary.macroenabled.12":["xlsb"],"application/vnd.ms-excel.sheet.macroenabled.12":["xlsm"],"application/vnd.ms-excel.template.macroenabled.12":["xltm"],"application/vnd.ms-fontobject":["eot"],"application/vnd.ms-htmlhelp":["chm"],"application/vnd.ms-ims":["ims"],"application/vnd.ms-lrm":["lrm"],"application/vnd.ms-officetheme":["thmx"],"application/vnd.ms-outlook":["msg"],"application/vnd.ms-pki.seccat":["cat"],"application/vnd.ms-pki.stl":["*stl"],"application/vnd.ms-powerpoint":["ppt","pps","pot"],"application/vnd.ms-powerpoint.addin.macroenabled.12":["ppam"],"application/vnd.ms-powerpoint.presentation.macroenabled.12":["pptm"],"application/vnd.ms-powerpoint.slide.macroenabled.12":["sldm"],"application/vnd.ms-powerpoint.slideshow.macroenabled.12":["ppsm"],"application/vnd.ms-powerpoint.template.macroenabled.12":["potm"],"application/vnd.ms-project":["mpp","mpt"],"application/vnd.ms-word.document.macroenabled.12":["docm"],"application/vnd.ms-word.template.macroenabled.12":["dotm"],"application/vnd.ms-works":["wps","wks","wcm","wdb"],"application/vnd.ms-wpl":["wpl"],"application/vnd.ms-xpsdocument":["xps"],"application/vnd.mseq":["mseq"],"application/vnd.musician":["mus"],"application/vnd.muvee.style":["msty"],"application/vnd.mynfc":["taglet"],"application/vnd.neurolanguage.nlu":["nlu"],"application/vnd.nitf":["ntf","nitf"],"application/vnd.noblenet-directory":["nnd"],"application/vnd.noblenet-sealer":["nns"],"application/vnd.noblenet-web":["nnw"],"application/vnd.nokia.n-gage.ac+xml":["*ac"],"application/vnd.nokia.n-gage.data":["ngdat"],"application/vnd.nokia.n-gage.symbian.install":["n-gage"],"application/vnd.nokia.radio-preset":["rpst"],"application/vnd.nokia.radio-presets":["rpss"],"application/vnd.novadigm.edm":["edm"],"application/vnd.novadigm.edx":["edx"],"application/vnd.novadigm.ext":["ext"],"application/vnd.oasis.opendocument.chart":["odc"],"application/vnd.oasis.opendocument.chart-template":["otc"],"application/vnd.oasis.opendocument.database":["odb"],"application/vnd.oasis.opendocument.formula":["odf"],"application/vnd.oasis.opendocument.formula-template":["odft"],"application/vnd.oasis.opendocument.graphics":["odg"],"application/vnd.oasis.opendocument.graphics-template":["otg"],"application/vnd.oasis.opendocument.image":["odi"],"application/vnd.oasis.opendocument.image-template":["oti"],"application/vnd.oasis.opendocument.presentation":["odp"],"application/vnd.oasis.opendocument.presentation-template":["otp"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.spreadsheet-template":["ots"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.text-master":["odm"],"application/vnd.oasis.opendocument.text-template":["ott"],"application/vnd.oasis.opendocument.text-web":["oth"],"application/vnd.olpc-sugar":["xo"],"application/vnd.oma.dd2+xml":["dd2"],"application/vnd.openblox.game+xml":["obgx"],"application/vnd.openofficeorg.extension":["oxt"],"application/vnd.openstreetmap.data+xml":["osm"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.openxmlformats-officedocument.presentationml.slide":["sldx"],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":["ppsx"],"application/vnd.openxmlformats-officedocument.presentationml.template":["potx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":["xltx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"application/vnd.openxmlformats-officedocument.wordprocessingml.template":["dotx"],"application/vnd.osgeo.mapguide.package":["mgp"],"application/vnd.osgi.dp":["dp"],"application/vnd.osgi.subsystem":["esa"],"application/vnd.palm":["pdb","pqa","oprc"],"application/vnd.pawaafile":["paw"],"application/vnd.pg.format":["str"],"application/vnd.pg.osasli":["ei6"],"application/vnd.picsel":["efif"],"application/vnd.pmi.widget":["wg"],"application/vnd.pocketlearn":["plf"],"application/vnd.powerbuilder6":["pbd"],"application/vnd.previewsystems.box":["box"],"application/vnd.proteus.magazine":["mgz"],"application/vnd.publishare-delta-tree":["qps"],"application/vnd.pvi.ptid1":["ptid"],"application/vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"application/vnd.rar":["rar"],"application/vnd.realvnc.bed":["bed"],"application/vnd.recordare.musicxml":["mxl"],"application/vnd.recordare.musicxml+xml":["musicxml"],"application/vnd.rig.cryptonote":["cryptonote"],"application/vnd.rim.cod":["cod"],"application/vnd.rn-realmedia":["rm"],"application/vnd.rn-realmedia-vbr":["rmvb"],"application/vnd.route66.link66+xml":["link66"],"application/vnd.sailingtracker.track":["st"],"application/vnd.seemail":["see"],"application/vnd.sema":["sema"],"application/vnd.semd":["semd"],"application/vnd.semf":["semf"],"application/vnd.shana.informed.formdata":["ifm"],"application/vnd.shana.informed.formtemplate":["itp"],"application/vnd.shana.informed.interchange":["iif"],"application/vnd.shana.informed.package":["ipk"],"application/vnd.simtech-mindmapper":["twd","twds"],"application/vnd.smaf":["mmf"],"application/vnd.smart.teacher":["teacher"],"application/vnd.software602.filler.form+xml":["fo"],"application/vnd.solent.sdkm+xml":["sdkm","sdkd"],"application/vnd.spotfire.dxp":["dxp"],"application/vnd.spotfire.sfs":["sfs"],"application/vnd.stardivision.calc":["sdc"],"application/vnd.stardivision.draw":["sda"],"application/vnd.stardivision.impress":["sdd"],"application/vnd.stardivision.math":["smf"],"application/vnd.stardivision.writer":["sdw","vor"],"application/vnd.stardivision.writer-global":["sgl"],"application/vnd.stepmania.package":["smzip"],"application/vnd.stepmania.stepchart":["sm"],"application/vnd.sun.wadl+xml":["wadl"],"application/vnd.sun.xml.calc":["sxc"],"application/vnd.sun.xml.calc.template":["stc"],"application/vnd.sun.xml.draw":["sxd"],"application/vnd.sun.xml.draw.template":["std"],"application/vnd.sun.xml.impress":["sxi"],"application/vnd.sun.xml.impress.template":["sti"],"application/vnd.sun.xml.math":["sxm"],"application/vnd.sun.xml.writer":["sxw"],"application/vnd.sun.xml.writer.global":["sxg"],"application/vnd.sun.xml.writer.template":["stw"],"application/vnd.sus-calendar":["sus","susp"],"application/vnd.svd":["svd"],"application/vnd.symbian.install":["sis","sisx"],"application/vnd.syncml+xml":["xsm"],"application/vnd.syncml.dm+wbxml":["bdm"],"application/vnd.syncml.dm+xml":["xdm"],"application/vnd.syncml.dmddf+xml":["ddf"],"application/vnd.tao.intent-module-archive":["tao"],"application/vnd.tcpdump.pcap":["pcap","cap","dmp"],"application/vnd.tmobile-livetv":["tmo"],"application/vnd.trid.tpt":["tpt"],"application/vnd.triscape.mxs":["mxs"],"application/vnd.trueapp":["tra"],"application/vnd.ufdl":["ufd","ufdl"],"application/vnd.uiq.theme":["utz"],"application/vnd.umajin":["umj"],"application/vnd.unity":["unityweb"],"application/vnd.uoml+xml":["uoml"],"application/vnd.vcx":["vcx"],"application/vnd.visio":["vsd","vst","vss","vsw"],"application/vnd.visionary":["vis"],"application/vnd.vsf":["vsf"],"application/vnd.wap.wbxml":["wbxml"],"application/vnd.wap.wmlc":["wmlc"],"application/vnd.wap.wmlscriptc":["wmlsc"],"application/vnd.webturbo":["wtb"],"application/vnd.wolfram.player":["nbp"],"application/vnd.wordperfect":["wpd"],"application/vnd.wqd":["wqd"],"application/vnd.wt.stf":["stf"],"application/vnd.xara":["xar"],"application/vnd.xfdl":["xfdl"],"application/vnd.yamaha.hv-dic":["hvd"],"application/vnd.yamaha.hv-script":["hvs"],"application/vnd.yamaha.hv-voice":["hvp"],"application/vnd.yamaha.openscoreformat":["osf"],"application/vnd.yamaha.openscoreformat.osfpvg+xml":["osfpvg"],"application/vnd.yamaha.smaf-audio":["saf"],"application/vnd.yamaha.smaf-phrase":["spf"],"application/vnd.yellowriver-custom-menu":["cmp"],"application/vnd.zul":["zir","zirz"],"application/vnd.zzazz.deck+xml":["zaz"],"application/x-7z-compressed":["7z"],"application/x-abiword":["abw"],"application/x-ace-compressed":["ace"],"application/x-apple-diskimage":["*dmg"],"application/x-arj":["arj"],"application/x-authorware-bin":["aab","x32","u32","vox"],"application/x-authorware-map":["aam"],"application/x-authorware-seg":["aas"],"application/x-bcpio":["bcpio"],"application/x-bdoc":["*bdoc"],"application/x-bittorrent":["torrent"],"application/x-blorb":["blb","blorb"],"application/x-bzip":["bz"],"application/x-bzip2":["bz2","boz"],"application/x-cbr":["cbr","cba","cbt","cbz","cb7"],"application/x-cdlink":["vcd"],"application/x-cfs-compressed":["cfs"],"application/x-chat":["chat"],"application/x-chess-pgn":["pgn"],"application/x-chrome-extension":["crx"],"application/x-cocoa":["cco"],"application/x-conference":["nsc"],"application/x-cpio":["cpio"],"application/x-csh":["csh"],"application/x-debian-package":["*deb","udeb"],"application/x-dgc-compressed":["dgc"],"application/x-director":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"],"application/x-doom":["wad"],"application/x-dtbncx+xml":["ncx"],"application/x-dtbook+xml":["dtb"],"application/x-dtbresource+xml":["res"],"application/x-dvi":["dvi"],"application/x-envoy":["evy"],"application/x-eva":["eva"],"application/x-font-bdf":["bdf"],"application/x-font-ghostscript":["gsf"],"application/x-font-linux-psf":["psf"],"application/x-font-pcf":["pcf"],"application/x-font-snf":["snf"],"application/x-font-type1":["pfa","pfb","pfm","afm"],"application/x-freearc":["arc"],"application/x-futuresplash":["spl"],"application/x-gca-compressed":["gca"],"application/x-glulx":["ulx"],"application/x-gnumeric":["gnumeric"],"application/x-gramps-xml":["gramps"],"application/x-gtar":["gtar"],"application/x-hdf":["hdf"],"application/x-httpd-php":["php"],"application/x-install-instructions":["install"],"application/x-iso9660-image":["*iso"],"application/x-iwork-keynote-sffkey":["*key"],"application/x-iwork-numbers-sffnumbers":["*numbers"],"application/x-iwork-pages-sffpages":["*pages"],"application/x-java-archive-diff":["jardiff"],"application/x-java-jnlp-file":["jnlp"],"application/x-keepass2":["kdbx"],"application/x-latex":["latex"],"application/x-lua-bytecode":["luac"],"application/x-lzh-compressed":["lzh","lha"],"application/x-makeself":["run"],"application/x-mie":["mie"],"application/x-mobipocket-ebook":["prc","mobi"],"application/x-ms-application":["application"],"application/x-ms-shortcut":["lnk"],"application/x-ms-wmd":["wmd"],"application/x-ms-wmz":["wmz"],"application/x-ms-xbap":["xbap"],"application/x-msaccess":["mdb"],"application/x-msbinder":["obd"],"application/x-mscardfile":["crd"],"application/x-msclip":["clp"],"application/x-msdos-program":["*exe"],"application/x-msdownload":["*exe","*dll","com","bat","*msi"],"application/x-msmediaview":["mvb","m13","m14"],"application/x-msmetafile":["*wmf","*wmz","*emf","emz"],"application/x-msmoney":["mny"],"application/x-mspublisher":["pub"],"application/x-msschedule":["scd"],"application/x-msterminal":["trm"],"application/x-mswrite":["wri"],"application/x-netcdf":["nc","cdf"],"application/x-ns-proxy-autoconfig":["pac"],"application/x-nzb":["nzb"],"application/x-perl":["pl","pm"],"application/x-pilot":["*prc","*pdb"],"application/x-pkcs12":["p12","pfx"],"application/x-pkcs7-certificates":["p7b","spc"],"application/x-pkcs7-certreqresp":["p7r"],"application/x-rar-compressed":["*rar"],"application/x-redhat-package-manager":["rpm"],"application/x-research-info-systems":["ris"],"application/x-sea":["sea"],"application/x-sh":["sh"],"application/x-shar":["shar"],"application/x-shockwave-flash":["swf"],"application/x-silverlight-app":["xap"],"application/x-sql":["sql"],"application/x-stuffit":["sit"],"application/x-stuffitx":["sitx"],"application/x-subrip":["srt"],"application/x-sv4cpio":["sv4cpio"],"application/x-sv4crc":["sv4crc"],"application/x-t3vm-image":["t3"],"application/x-tads":["gam"],"application/x-tar":["tar"],"application/x-tcl":["tcl","tk"],"application/x-tex":["tex"],"application/x-tex-tfm":["tfm"],"application/x-texinfo":["texinfo","texi"],"application/x-tgif":["*obj"],"application/x-ustar":["ustar"],"application/x-virtualbox-hdd":["hdd"],"application/x-virtualbox-ova":["ova"],"application/x-virtualbox-ovf":["ovf"],"application/x-virtualbox-vbox":["vbox"],"application/x-virtualbox-vbox-extpack":["vbox-extpack"],"application/x-virtualbox-vdi":["vdi"],"application/x-virtualbox-vhd":["vhd"],"application/x-virtualbox-vmdk":["vmdk"],"application/x-wais-source":["src"],"application/x-web-app-manifest+json":["webapp"],"application/x-x509-ca-cert":["der","crt","pem"],"application/x-xfig":["fig"],"application/x-xliff+xml":["*xlf"],"application/x-xpinstall":["xpi"],"application/x-xz":["xz"],"application/x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"audio/vnd.dece.audio":["uva","uvva"],"audio/vnd.digital-winds":["eol"],"audio/vnd.dra":["dra"],"audio/vnd.dts":["dts"],"audio/vnd.dts.hd":["dtshd"],"audio/vnd.lucent.voice":["lvp"],"audio/vnd.ms-playready.media.pya":["pya"],"audio/vnd.nuera.ecelp4800":["ecelp4800"],"audio/vnd.nuera.ecelp7470":["ecelp7470"],"audio/vnd.nuera.ecelp9600":["ecelp9600"],"audio/vnd.rip":["rip"],"audio/x-aac":["aac"],"audio/x-aiff":["aif","aiff","aifc"],"audio/x-caf":["caf"],"audio/x-flac":["flac"],"audio/x-m4a":["*m4a"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/x-ms-wax":["wax"],"audio/x-ms-wma":["wma"],"audio/x-pn-realaudio":["ram","ra"],"audio/x-pn-realaudio-plugin":["rmp"],"audio/x-realaudio":["*ra"],"audio/x-wav":["*wav"],"chemical/x-cdx":["cdx"],"chemical/x-cif":["cif"],"chemical/x-cmdf":["cmdf"],"chemical/x-cml":["cml"],"chemical/x-csml":["csml"],"chemical/x-xyz":["xyz"],"image/prs.btif":["btif"],"image/prs.pti":["pti"],"image/vnd.adobe.photoshop":["psd"],"image/vnd.airzip.accelerator.azv":["azv"],"image/vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"image/vnd.djvu":["djvu","djv"],"image/vnd.dvb.subtitle":["*sub"],"image/vnd.dwg":["dwg"],"image/vnd.dxf":["dxf"],"image/vnd.fastbidsheet":["fbs"],"image/vnd.fpx":["fpx"],"image/vnd.fst":["fst"],"image/vnd.fujixerox.edmics-mmr":["mmr"],"image/vnd.fujixerox.edmics-rlc":["rlc"],"image/vnd.microsoft.icon":["ico"],"image/vnd.ms-dds":["dds"],"image/vnd.ms-modi":["mdi"],"image/vnd.ms-photo":["wdp"],"image/vnd.net-fpx":["npx"],"image/vnd.pco.b16":["b16"],"image/vnd.tencent.tap":["tap"],"image/vnd.valve.source.texture":["vtf"],"image/vnd.wap.wbmp":["wbmp"],"image/vnd.xiff":["xif"],"image/vnd.zbrush.pcx":["pcx"],"image/x-3ds":["3ds"],"image/x-cmu-raster":["ras"],"image/x-cmx":["cmx"],"image/x-freehand":["fh","fhc","fh4","fh5","fh7"],"image/x-icon":["*ico"],"image/x-jng":["jng"],"image/x-mrsid-image":["sid"],"image/x-ms-bmp":["*bmp"],"image/x-pcx":["*pcx"],"image/x-pict":["pic","pct"],"image/x-portable-anymap":["pnm"],"image/x-portable-bitmap":["pbm"],"image/x-portable-graymap":["pgm"],"image/x-portable-pixmap":["ppm"],"image/x-rgb":["rgb"],"image/x-tga":["tga"],"image/x-xbitmap":["xbm"],"image/x-xpixmap":["xpm"],"image/x-xwindowdump":["xwd"],"message/vnd.wfa.wsc":["wsc"],"model/vnd.collada+xml":["dae"],"model/vnd.dwf":["dwf"],"model/vnd.gdl":["gdl"],"model/vnd.gtw":["gtw"],"model/vnd.mts":["mts"],"model/vnd.opengex":["ogex"],"model/vnd.parasolid.transmit.binary":["x_b"],"model/vnd.parasolid.transmit.text":["x_t"],"model/vnd.sap.vds":["vds"],"model/vnd.usdz+zip":["usdz"],"model/vnd.valve.source.compiled-map":["bsp"],"model/vnd.vtu":["vtu"],"text/prs.lines.tag":["dsc"],"text/vnd.curl":["curl"],"text/vnd.curl.dcurl":["dcurl"],"text/vnd.curl.mcurl":["mcurl"],"text/vnd.curl.scurl":["scurl"],"text/vnd.dvb.subtitle":["sub"],"text/vnd.fly":["fly"],"text/vnd.fmi.flexstor":["flx"],"text/vnd.graphviz":["gv"],"text/vnd.in3d.3dml":["3dml"],"text/vnd.in3d.spot":["spot"],"text/vnd.sun.j2me.app-descriptor":["jad"],"text/vnd.wap.wml":["wml"],"text/vnd.wap.wmlscript":["wmls"],"text/x-asm":["s","asm"],"text/x-c":["c","cc","cxx","cpp","h","hh","dic"],"text/x-component":["htc"],"text/x-fortran":["f","for","f77","f90"],"text/x-handlebars-template":["hbs"],"text/x-java-source":["java"],"text/x-lua":["lua"],"text/x-markdown":["mkd"],"text/x-nfo":["nfo"],"text/x-opml":["opml"],"text/x-org":["*org"],"text/x-pascal":["p","pas"],"text/x-processing":["pde"],"text/x-sass":["sass"],"text/x-scss":["scss"],"text/x-setext":["etx"],"text/x-sfv":["sfv"],"text/x-suse-ymp":["ymp"],"text/x-uuencode":["uu"],"text/x-vcalendar":["vcs"],"text/x-vcard":["vcf"],"video/vnd.dece.hd":["uvh","uvvh"],"video/vnd.dece.mobile":["uvm","uvvm"],"video/vnd.dece.pd":["uvp","uvvp"],"video/vnd.dece.sd":["uvs","uvvs"],"video/vnd.dece.video":["uvv","uvvv"],"video/vnd.dvb.file":["dvb"],"video/vnd.fvt":["fvt"],"video/vnd.mpegurl":["mxu","m4u"],"video/vnd.ms-playready.media.pyv":["pyv"],"video/vnd.uvvu.mp4":["uvu","uvvu"],"video/vnd.vivo":["viv"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"],"video/x-mng":["mng"],"video/x-ms-asf":["asf","asx"],"video/x-ms-vob":["vob"],"video/x-ms-wm":["wm"],"video/x-ms-wmv":["wmv"],"video/x-ms-wmx":["wmx"],"video/x-ms-wvx":["wvx"],"video/x-msvideo":["avi"],"video/x-sgi-movie":["movie"],"video/x-smv":["smv"],"x-conference/x-cooltalk":["ice"]}});var se=ae((vl,Qt)=>{"use strict";var ao=Vt();Qt.exports=new ao(Kt(),Zt())});function F(e,i){let n=new RegExp(`\\x1b\\[${i}m`,"g"),t=`\x1B[${e}m`,o=`\x1B[${i}m`;return function(a){return!oo.enabled||a==null?a:t+(~(""+a).indexOf(o)?a.replace(n,o+t):a)+o}}var at,ei,ti,ii,ni,oo,ai,Re,oi,yl,Dl,bl,xl,wl,Cl,si,Fl,ot,kl,El,ri,Sl,Al,_l,Pl,Tl,Bl,Yl,jl,$l,Ol,Ul,re=T(()=>{ni=!0;typeof process<"u"&&({FORCE_COLOR:at,NODE_DISABLE_COLORS:ei,NO_COLOR:ti,TERM:ii}=process.env||{},ni=process.stdout&&process.stdout.isTTY);oo={enabled:!ei&&ti==null&&ii!=="dumb"&&(at!=null&&at!=="0"||ni)};ai=F(0,0),Re=F(1,22),oi=F(2,22),yl=F(3,23),Dl=F(4,24),bl=F(7,27),xl=F(8,28),wl=F(9,29),Cl=F(30,39),si=F(31,39),Fl=F(32,39),ot=F(33,39),kl=F(34,39),El=F(35,39),ri=F(36,39),Sl=F(37,39),Al=F(90,39),_l=F(90,39),Pl=F(40,49),Tl=F(41,49),Bl=F(42,49),Yl=F(43,49),jl=F(44,49),$l=F(45,49),Ol=F(46,49),Ul=F(47,49)});var ci=T(()=>{});var li=T(()=>{ci()});var pi=ae((Ll,st)=>{var ee={};typeof st>"u"?window.eastasianwidth=ee:st.exports=ee;ee.eastAsianWidth=function(e){var i=e.charCodeAt(0),n=e.length==2?e.charCodeAt(1):0,t=i;return 55296<=i&&i<=56319&&56320<=n&&n<=57343&&(i&=1023,n&=1023,t=i<<10|n,t+=65536),t==12288||65281<=t&&t<=65376||65504<=t&&t<=65510?"F":t==8361||65377<=t&&t<=65470||65474<=t&&t<=65479||65482<=t&&t<=65487||65490<=t&&t<=65495||65498<=t&&t<=65500||65512<=t&&t<=65518?"H":4352<=t&&t<=4447||4515<=t&&t<=4519||4602<=t&&t<=4607||9001<=t&&t<=9002||11904<=t&&t<=11929||11931<=t&&t<=12019||12032<=t&&t<=12245||12272<=t&&t<=12283||12289<=t&&t<=12350||12353<=t&&t<=12438||12441<=t&&t<=12543||12549<=t&&t<=12589||12593<=t&&t<=12686||12688<=t&&t<=12730||12736<=t&&t<=12771||12784<=t&&t<=12830||12832<=t&&t<=12871||12880<=t&&t<=13054||13056<=t&&t<=19903||19968<=t&&t<=42124||42128<=t&&t<=42182||43360<=t&&t<=43388||44032<=t&&t<=55203||55216<=t&&t<=55238||55243<=t&&t<=55291||63744<=t&&t<=64255||65040<=t&&t<=65049||65072<=t&&t<=65106||65108<=t&&t<=65126||65128<=t&&t<=65131||110592<=t&&t<=110593||127488<=t&&t<=127490||127504<=t&&t<=127546||127552<=t&&t<=127560||127568<=t&&t<=127569||131072<=t&&t<=194367||177984<=t&&t<=196605||196608<=t&&t<=262141?"W":32<=t&&t<=126||162<=t&&t<=163||165<=t&&t<=166||t==172||t==175||10214<=t&&t<=10221||10629<=t&&t<=10630?"Na":t==161||t==164||167<=t&&t<=168||t==170||173<=t&&t<=174||176<=t&&t<=180||182<=t&&t<=186||188<=t&&t<=191||t==198||t==208||215<=t&&t<=216||222<=t&&t<=225||t==230||232<=t&&t<=234||236<=t&&t<=237||t==240||242<=t&&t<=243||247<=t&&t<=250||t==252||t==254||t==257||t==273||t==275||t==283||294<=t&&t<=295||t==299||305<=t&&t<=307||t==312||319<=t&&t<=322||t==324||328<=t&&t<=331||t==333||338<=t&&t<=339||358<=t&&t<=359||t==363||t==462||t==464||t==466||t==468||t==470||t==472||t==474||t==476||t==593||t==609||t==708||t==711||713<=t&&t<=715||t==717||t==720||728<=t&&t<=731||t==733||t==735||768<=t&&t<=879||913<=t&&t<=929||931<=t&&t<=937||945<=t&&t<=961||963<=t&&t<=969||t==1025||1040<=t&&t<=1103||t==1105||t==8208||8211<=t&&t<=8214||8216<=t&&t<=8217||8220<=t&&t<=8221||8224<=t&&t<=8226||8228<=t&&t<=8231||t==8240||8242<=t&&t<=8243||t==8245||t==8251||t==8254||t==8308||t==8319||8321<=t&&t<=8324||t==8364||t==8451||t==8453||t==8457||t==8467||t==8470||8481<=t&&t<=8482||t==8486||t==8491||8531<=t&&t<=8532||8539<=t&&t<=8542||8544<=t&&t<=8555||8560<=t&&t<=8569||t==8585||8592<=t&&t<=8601||8632<=t&&t<=8633||t==8658||t==8660||t==8679||t==8704||8706<=t&&t<=8707||8711<=t&&t<=8712||t==8715||t==8719||t==8721||t==8725||t==8730||8733<=t&&t<=8736||t==8739||t==8741||8743<=t&&t<=8748||t==8750||8756<=t&&t<=8759||8764<=t&&t<=8765||t==8776||t==8780||t==8786||8800<=t&&t<=8801||8804<=t&&t<=8807||8810<=t&&t<=8811||8814<=t&&t<=8815||8834<=t&&t<=8835||8838<=t&&t<=8839||t==8853||t==8857||t==8869||t==8895||t==8978||9312<=t&&t<=9449||9451<=t&&t<=9547||9552<=t&&t<=9587||9600<=t&&t<=9615||9618<=t&&t<=9621||9632<=t&&t<=9633||9635<=t&&t<=9641||9650<=t&&t<=9651||9654<=t&&t<=9655||9660<=t&&t<=9661||9664<=t&&t<=9665||9670<=t&&t<=9672||t==9675||9678<=t&&t<=9681||9698<=t&&t<=9701||t==9711||9733<=t&&t<=9734||t==9737||9742<=t&&t<=9743||9748<=t&&t<=9749||t==9756||t==9758||t==9792||t==9794||9824<=t&&t<=9825||9827<=t&&t<=9829||9831<=t&&t<=9834||9836<=t&&t<=9837||t==9839||9886<=t&&t<=9887||9918<=t&&t<=9919||9924<=t&&t<=9933||9935<=t&&t<=9953||t==9955||9960<=t&&t<=9983||t==10045||t==10071||10102<=t&&t<=10111||11093<=t&&t<=11097||12872<=t&&t<=12879||57344<=t&&t<=63743||65024<=t&&t<=65039||t==65533||127232<=t&&t<=127242||127248<=t&&t<=127277||127280<=t&&t<=127337||127344<=t&&t<=127386||917760<=t&&t<=917999||983040<=t&&t<=1048573||1048576<=t&&t<=1114109?"A":"N"};ee.characterLength=function(e){var i=this.eastAsianWidth(e);return i=="F"||i=="W"||i=="A"?2:1};function ui(e){return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]}ee.length=function(e){for(var i=ui(e),n=0,t=0;t<i.length;t++)n=n+this.characterLength(i[t]);return n};ee.slice=function(e,i,n){textLen=ee.length(e),i=i||0,n=n||1,i<0&&(i=textLen+i),n<0&&(n=textLen+n);for(var t="",o=0,a=ui(e),s=0;s<a.length;s++){var r=a[s],c=ee.length(r);if(o>=i-(c==2?1:0))if(o+c<=n)t+=r;else break;o+=c}return t}});var mi=ae((zl,di)=>{"use strict";di.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var so,ro,ce=T(()=>{li();so=W(pi(),1),ro=W(mi(),1)});function rt(e){let i=/^\\\\\?\\/.test(e),n=/[^\u0000-\u0080]+/.test(e);return i||n?e:e.replace(/\\/g,"/")}var le=T(()=>{});var co,lo,uo,po,hi,ue=T(()=>{({replace:co}=""),lo=/[&<>'"]/g,uo={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},po=e=>uo[e],hi=e=>co.call(e,lo,po)});function Tt(e,i){Reflect.set(e,Oi,i)}function ho(e){let i=Reflect.get(e,Oi);if(i!=null)return i}function*fo(e){let i=ho(e);if(!i)return[];for(let n of i.headers())yield n;return[]}function go(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function vo(e){let i=Object.entries(h).find(n=>n[1].code===e);if(i)return{name:i[0],data:i[1]}}function yo(e,i){if(!i||i.line===void 0||i.column===void 0)return"";let n=go(e).split(`
`).map(s=>s.replace(/\t/g,"  ")),t=[];for(let s=-2;s<=2;s++)n[i.line+s]&&t.push(i.line+s);let o=0;for(let s of t){let r=`> ${s}`;r.length>o&&(o=r.length)}let a="";for(let s of t){let r=s===i.line-1;a+=r?"> ":"  ",a+=`${s+1} | ${n[s]}
`,r&&(a+=`${Array.from({length:o}).join(" ")}  | ${Array.from({length:i.column}).join(" ")}^
`)}return a}function Do(e){return!(e.length!==3||!e[0]||typeof e[0]!="object")}function Ui(e,i){var n;let t=((n=i?.split("/").pop())==null?void 0:n.replace(".astro",""))??"",o=(...a)=>{if(!Do(a))throw new k({...h.InvalidComponentArgs,message:h.InvalidComponentArgs.message(t)});return e(...a)};return Object.defineProperty(o,"name",{value:t,writable:!1}),o.isAstroComponentFactory=!0,o.moduleId=i,o}function bo(e){let i=Ui(e.factory,e.moduleId);return i.propagation=e.propagation,i}function S(e,i){return typeof e=="function"?Ui(e,i):bo(e)}function xo(){return(i,n)=>{let t=[...Object.values(i)];if(t.length===0)throw new Error(`Astro.glob(${JSON.stringify(n())}) - no matches found.`);return Promise.all(t.map(o=>o()))}}function _(e){return{site:e?new URL(e):void 0,generator:`Astro v${Wi}`,glob:xo()}}function wo(e,i){if(e[i])return e[i];if(i==="delete"&&e.del)return e.del;if(e.all)return e.all}async function Co(e,i,n){var t;let{request:o,params:a}=i,s=(t=o.method)==null?void 0:t.toLowerCase(),r=wo(e,s);if(!n&&n===!1&&s&&s!=="get"&&console.warn(`
${s} requests are not available when building a static site. Update your config to output: 'server' to handle ${s} requests.`),!r||typeof r!="function")return new Response(null,{status:404,headers:{"X-Astro-Response":"Not-Found"}});r.length>1&&console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);let c=new Proxy(i,{get(u,l){return l in u?Reflect.get(u,l):l in a?(console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`),Reflect.get(a,l)):void 0}});return r.call(e,c,o)}function Ri(e){let i={};return n(e),Object.keys(i).join(" ");function n(t){t&&typeof t.forEach=="function"?t.forEach(n):t===Object(t)?Object.keys(t).forEach(o=>{t[o]&&n(o)}):(t=t===!1||t==null?"":String(t).trim(),t&&t.split(/\s+/).forEach(o=>{i[o]=!0}))}}function Bt(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}async function*Dt(e){let i=e.getReader();try{for(;;){let{done:n,value:t}=await i.read();if(n)return;yield t}}finally{i.releaseLock()}}function Yt(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function Fo(e){return new Ie(e)}function qi(e){return typeof e.getReader=="function"}async function*gi(e){if(qi(e))for await(let i of Dt(e))yield Ee(i);else for await(let i of e)yield Ee(i)}function*ko(e){for(let i of e)yield Ee(i)}function Ee(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return Fo(e);if(e instanceof Response&&e.body){let i=e.body;return gi(i)}else{if(typeof e.then=="function")return Promise.resolve(e).then(i=>Ee(i));if(Symbol.iterator in e)return ko(e);if(Symbol.asyncIterator in e||qi(e))return gi(e)}}return D(e)}function Fe(e){return e&&typeof e=="object"&&e[Je]}function Eo(e){if(typeof e.type=="string")return e;let i={};if(Fe(e.props.children)){let n=e.props.children;if(!Fe(n)||!("slot"in n.props))return;let t=yi(n.props.slot);i[t]=[n],i[t].$$slot=!0,delete n.props.slot,delete e.props.children}Array.isArray(e.props.children)&&(e.props.children=e.props.children.map(n=>{if(!Fe(n)||!("slot"in n.props))return n;let t=yi(n.props.slot);return Array.isArray(i[t])?i[t].push(n):(i[t]=[n],i[t].$$slot=!0),delete n.props.slot,vi}).filter(n=>n!==vi)),Object.assign(e.props,i)}function Ii(e){return typeof e=="string"?D(e):Array.isArray(e)?e.map(i=>Ii(i)):e}function So(e){if("set:html"in e.props||"set:text"in e.props){if("set:html"in e.props){let i=Ii(e.props["set:html"]);delete e.props["set:html"],Object.assign(e.props,{children:i});return}if("set:text"in e.props){let i=e.props["set:text"];delete e.props["set:text"],Object.assign(e.props,{children:i});return}}}function X(e,i){let n={[Ct]:"astro:jsx",[Je]:!0,type:e,props:i??{}};return So(n),Eo(n),n}function jo(e){return e._metadata.hasHydrationScript?!1:e._metadata.hasHydrationScript=!0}function $o(e,i){return e._metadata.hasDirectives.has(i)?!1:(e._metadata.hasDirectives.add(i),!0)}function bi(e){if(!(e in Di))throw new Error(`Unknown directive: ${e}`);return Di[e]}function Oo(e,i){switch(e){case"both":return`<style>astro-island,astro-slot{display:contents}</style><script>${bi(i)+Yo}<\/script>`;case"directive":return`<script>${bi(i)}<\/script>`}return""}function Lo(e){let i="";for(let[n,t]of Object.entries(e))i+=`const ${Io(n)} = ${JSON.stringify(t)};
`;return D(i)}function xi(e){return e.length===1?e[0]:`${e.slice(0,-1).join(", ")} or ${e[e.length-1]}`}function M(e,i,n=!0){if(e==null)return"";if(e===!1)return Wo.test(i)||Ro.test(i)?D(` ${i}="false"`):"";if(qo.has(i))return console.warn(`[astro] The "${i}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${i}={value}\`) instead of the dynamic spread syntax (\`{...{ "${i}": value }}\`).`),"";if(i==="class:list"){let t=xe(Ri(e),n);return t===""?"":D(` ${i.slice(0,-5)}="${t}"`)}return i==="style"&&!(e instanceof he)&&typeof e=="object"?D(` ${i}="${xe(Mo(e),n)}"`):i==="className"?D(` class="${xe(e,n)}"`):e===!0&&(i.startsWith("data-")||Uo.test(i))?D(` ${i}`):D(` ${i}="${xe(e,n)}"`)}function bt(e,i=!0){let n="";for(let[t,o]of Object.entries(e))n+=M(o,t,i);return D(n)}function me(e,{props:i,children:n=""},t=!0){let{lang:o,"data-astro-id":a,"define:vars":s,...r}=i;return s&&(e==="style"&&(delete r["is:global"],delete r["is:scoped"]),e==="script"&&(delete r.hoist,n=Lo(s)+`
`+n)),(n==null||n=="")&&jt.test(e)?`<${e}${bt(r,t)} />`:`<${e}${bt(r,t)}>${n}</${e}>`}function wi(e){e._metadata.hasRenderedHead=!0;let i=Array.from(e.styles).filter(lt).map(a=>me("style",a));e.styles.clear();let n=Array.from(e.scripts).filter(lt).map((a,s)=>me("script",a,!1)),o=Array.from(e.links).filter(lt).map(a=>me("link",a,!1)).join(`
`)+i.join(`
`)+n.join(`
`);if(e.extraHead.length>0)for(let a of e.extraHead)o+=a;return D(o)}function*$t(e){yield{type:"head",result:e}}function*P(e){e._metadata.hasRenderedHead||(yield{type:"maybe-head",result:e,scope:e.scope})}function zo(e,i){e.scope|=i}function ut(e,i){return(e.scope&i)===i}function ge(e,i){let n=Object.create(e,{scope:{writable:!0,value:e.scope}});return i!=null&&zo(n,i),n}function Ke(e){return typeof e=="object"&&!!e[Mi]}function No(e,i){return{[Mi]:!0,head:e,content:i}}function zi(e){return typeof e=="object"&&!!e[Li]}async function*Xe(e){for await(let i of e)if(i||i===0)for await(let n of be(i))switch(n.type){case"directive":{yield n;break}default:{yield D(n);break}}}function f(e,...i){return new xt(e,i)}function Ni(e){return e==null?!1:e.isAstroComponentFactory===!0}async function Ho(e,i,n,t){let o=ge(e,y.Astro),a=await i(o,n,t);if(a instanceof Response)throw a;let s=new Se,r=Ke(a)?a.content:a;for await(let c of Xe(r))s.append(c,e);return s.toString()}function Go(e,i){let n=i.propagation||"none";return i.moduleId&&e.propagation.has(i.moduleId)&&n==="none"&&(n=e.propagation.get(i.moduleId)),n==="in-tree"||n==="self"}function pt(e,i={},n=new WeakSet){if(n.has(e))throw new Error(`Cyclic reference detected while serializing props for <${i.displayName} client:${i.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);n.add(e);let t=e.map(o=>Gi(o,i,n));return n.delete(e),t}function Hi(e,i={},n=new WeakSet){if(n.has(e))throw new Error(`Cyclic reference detected while serializing props for <${i.displayName} client:${i.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);n.add(e);let t=Object.fromEntries(Object.entries(e).map(([o,a])=>[o,Gi(a,i,n)]));return n.delete(e),t}function Gi(e,i={},n=new WeakSet){switch(Object.prototype.toString.call(e)){case"[object Date]":return[I.Date,e.toISOString()];case"[object RegExp]":return[I.RegExp,e.source];case"[object Map]":return[I.Map,JSON.stringify(pt(Array.from(e),i,n))];case"[object Set]":return[I.Set,JSON.stringify(pt(Array.from(e),i,n))];case"[object BigInt]":return[I.BigInt,e.toString()];case"[object URL]":return[I.URL,e.toString()];case"[object Array]":return[I.JSON,JSON.stringify(pt(e,i,n))];case"[object Uint8Array]":return[I.Uint8Array,JSON.stringify(Array.from(e))];case"[object Uint16Array]":return[I.Uint16Array,JSON.stringify(Array.from(e))];case"[object Uint32Array]":return[I.Uint32Array,JSON.stringify(Array.from(e))];default:return e!==null&&typeof e=="object"?[I.Value,Hi(e,i,n)]:[I.Value,e]}}function Vi(e,i){return JSON.stringify(Hi(e,i))}function Jo(e,i){let n={isPage:!1,hydration:null,props:{}};for(let[t,o]of Object.entries(i))if(t.startsWith("server:")&&t==="server:root"&&(n.isPage=!0),t.startsWith("client:"))switch(n.hydration||(n.hydration={directive:"",value:"",componentUrl:"",componentExport:{value:""}}),t){case"client:component-path":{n.hydration.componentUrl=o;break}case"client:component-export":{n.hydration.componentExport.value=o;break}case"client:component-hydration":break;case"client:display-name":break;default:{if(n.hydration.directive=t.split(":")[1],n.hydration.value=o,!Vo.has(n.hydration.directive))throw new Error(`Error: invalid hydration directive "${t}". Supported hydration methods: ${Array.from(Ki).join(", ")}`);if(n.hydration.directive==="media"&&typeof n.hydration.value!="string")throw new k(h.MissingMediaQueryDirective);break}}else t==="class:list"?o&&(n.props[t.slice(0,-5)]=Ri(o)):n.props[t]=o;for(let t of Object.getOwnPropertySymbols(i))n.props[t]=i[t];return n}async function Ko(e,i){let{renderer:n,result:t,astroId:o,props:a,attrs:s}=e,{hydrate:r,componentUrl:c,componentExport:u}=i;if(!u.value)throw new Error(`Unable to resolve a valid export for "${i.displayName}"! Please open an issue at https://astro.build/issues!`);let l={children:"",props:{uid:o}};if(s)for(let[d,B]of Object.entries(s))l.props[d]=Ce(B);l.props["component-url"]=await t.resolve(decodeURI(c)),n.clientEntrypoint&&(l.props["component-export"]=u.value,l.props["renderer-url"]=await t.resolve(decodeURI(n.clientEntrypoint)),l.props.props=Ce(Vi(a,i))),l.props.ssr="",l.props.client=r;let p=await t.resolve("astro:scripts/before-hydration.js");return p.length&&(l.props["before-hydration-url"]=p),l.props.opts=Ce(JSON.stringify({name:i.displayName,value:i.hydrateArgs||""})),l}function Xo(e,i){if(e!=null)for(let n of Object.keys(e))Ki.has(n)&&console.warn(`You are attempting to render <${i} ${n} />, but ${i} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`)}function Zo(e,i,n,t,o={}){Xo(t,i);let a=new wt(e,t,o,n);return Go(e,n)&&!e.propagators.has(n)&&e.propagators.set(n,a),a}function Ot(e){return typeof e=="object"&&!!e[Zi]}async function*be(e){if(e=await e,e instanceof Me)e.instructions&&(yield*e.instructions),yield e;else if(Yt(e))yield e;else if(Array.isArray(e))for(let i of e)yield D(await be(i));else typeof e=="function"?yield*be(e()):typeof e=="string"?yield D(Ce(e)):!e&&e!==0||(zi(e)?yield*Xe(e):Ot(e)?yield*e.render():ArrayBuffer.isView(e)?yield e:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e)?yield*e:yield e)}function Qo(e){return!!e[Qi]}async function z(e,i,n){if(i){let t=ge(e,y.Slot),o=be(typeof i=="function"?i(t):i),a="",s=null;for await(let r of o)typeof r.type=="string"?(s===null&&(s=[]),s.push(r)):a+=r;return D(new Me(a,s))}return n?z(e,n):""}async function en(e,i={}){let n=null,t={};return i&&await Promise.all(Object.entries(i).map(([o,a])=>z(e,a).then(s=>{s.instructions&&(n===null&&(n=[]),n.push(...s.instructions)),t[o]=s}))),{slotInstructions:n,children:t}}function Oe(e,i){if(typeof i.type=="string"){let n=i;switch(n.type){case"directive":{let{hydration:t}=n,o=t&&jo(e),a=t&&$o(e,t.directive),s=o?"both":a?"directive":null;if(s){let r=Oo(s,t.directive);return D(r)}else return""}case"head":return e._metadata.hasRenderedHead?"":wi(e);case"maybe-head":{if(e._metadata.hasRenderedHead)return"";switch(n.scope){case y.JSX|y.Slot|y.Astro:case y.JSX|y.Astro|y.HeadBuffer:case y.JSX|y.Slot|y.Astro|y.HeadBuffer:return"";case y.JSX|y.Astro:{if(ut(e,y.JSX))return"";break}case y.Slot:case y.Slot|y.HeadBuffer:{if(ut(e,y.RenderSlot))return"";break}case y.HeadBuffer:{if(ut(e,y.JSX|y.HeadBuffer))return"";break}case y.RenderSlot|y.Astro:case y.RenderSlot|y.Astro|y.JSX:case y.RenderSlot|y.Astro|y.JSX|y.HeadBuffer:return""}return wi(e)}}}else{if(Qo(i)){let n="",t=i;if(t.instructions)for(let o of t.instructions)n+=Oe(e,o);return n+=i.toString(),n}return i.toString()}}function ts(e,i){if(i instanceof Uint8Array)return i;let n=Oe(e,i);return Ut.encode(n.toString())}async function ie(e,i){switch(!0){case i instanceof he:return i.toString().trim()===""?"":i;case typeof i=="string":return D(Ce(i));case typeof i=="function":return i;case(!i&&i!==0):return"";case Array.isArray(i):return D((await Promise.all(i.map(t=>ie(e,t)))).join(""))}let n;return i.props?i.props[te.symbol]?n=i.props[te.symbol]:n=new te(i):n=new te(i),kt(e,i,n)}async function kt(e,i,n){if(Fe(i)){switch(!0){case!i.type:throw new Error(`Unable to render ${e._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);case i.type===Symbol.for("astro:fragment"):return ie(e,i.props.children);case i.type.isAstroComponentFactory:{let t={},o={};for(let[r,c]of Object.entries(i.props??{}))r==="children"||c&&typeof c=="object"&&c.$$slot?o[r==="children"?"default":r]=()=>ie(e,c):t[r]=c;let a=ge(e,y.JSX);return D(await Ho(a,i.type,t,o))}case(!i.type&&i.type!==0):return"";case(typeof i.type=="string"&&i.type!==Fi):return D(await is(e,i.type,i.props??{}))}if(i.type){let t=function(l){if(Array.isArray(l))return l.map(p=>t(p));if(!Fe(l)){s.default.push(l);return}if("slot"in l.props){s[l.props.slot]=[...s[l.props.slot]??[],l],delete l.props.slot;return}s.default.push(l)};if(typeof i.type=="function"&&i.type["astro:renderer"]&&n.increment(),typeof i.type=="function"&&i.props["server:root"]){let l=await i.type(i.props??{});return await ie(e,l)}if(typeof i.type=="function")if(n.haveNoTried()||n.isCompleted()){as();try{let l=await i.type(i.props??{}),p;if(l&&l[Je])return p=await kt(e,l,n),p;if(!l)return p=await kt(e,l,n),p}catch(l){if(n.isCompleted())throw l;n.increment()}finally{os()}}else n.increment();let{children:o=null,...a}=i.props??{},s={default:[]};t(o);for(let[l,p]of Object.entries(a))p.$$slot&&(s[l]=p,delete a[l]);let r=[],c={};for(let[l,p]of Object.entries(s))r.push(ie(e,p).then(d=>{d.toString().trim().length!==0&&(c[l]=()=>d)}));await Promise.all(r),a[te.symbol]=n;let u;if(i.type===Fi&&i.props["client:only"]?u=await Ei(e,i.props["client:display-name"]??"",null,a,c):u=await Ei(e,typeof i.type=="function"?i.type.name:i.type,i.type,a,c),typeof u!="string"&&Symbol.asyncIterator in u){let l=new Se;for await(let p of u)l.append(p,e);return D(l.toString())}else return D(u)}}return D(`${i}`)}async function is(e,i,{children:n,...t}){return D(`<${i}${Q(t)}${D((n==null||n=="")&&jt.test(i)?"/>":`>${n==null?"":await ie(e,ns(i,n))}</${i}>`)}`)}function ns(e,i){return typeof i=="string"&&(e==="style"||e==="script")?D(i):i}function as(){if(Wt++,!Ft){Ft=console.error;try{console.error=ss}catch{}}}function os(){Wt--}function ss(e,...i){Wt>0&&typeof e=="string"&&e.includes("Warning: Invalid hook call.")&&e.includes("https://reactjs.org/link/invalid-hook-call")||Ft(e,...i)}function rs(e){let i=0;if(e.length===0)return i;for(let n=0;n<e.length;n++){let t=e.charCodeAt(n);i=(i<<5)-i+t,i=i&i}return i}function cs(e){let i,n="",t=rs(e),o=t<0?"Z":"";for(t=Math.abs(t);t>=dt;)i=t%dt,t=Math.floor(t/dt),n=Et[i]+n;return t>0&&(n=Et[t]+n),o+n}function ls(e){return typeof HTMLElement<"u"&&HTMLElement.isPrototypeOf(e)}async function us(e,i,n,t){let o=ps(i),a="";for(let s in n)a+=` ${s}="${xe(await n[s])}"`;return D(`<${o}${a}>${await z(e,t?.default)}</${o}>`)}function ps(e){let i=customElements.getName(e);return i||e.name.replace(/^HTML|Element$/g,"").replace(/[A-Z]/g,"-$&").toLowerCase().replace(/^-/,"html-")}function ds(e){switch(e?.split(".").pop()){case"svelte":return["@astrojs/svelte"];case"vue":return["@astrojs/vue"];case"jsx":case"tsx":return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue (jsx)"];default:return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue","@astrojs/svelte","@astrojs/lit"]}}function ms(e){return e===Z}function hs(e){return e&&typeof e=="object"&&e["astro:html"]}async function fs(e,i,n,t,o={}){var a,s;if(!n&&!t["client:only"])throw new Error(`Unable to render ${i} because it is ${n}!
Did you forget to import the component or is it possible there is a typo?`);let{renderers:r}=e._metadata,c={displayName:i},{hydration:u,isPage:l,props:p}=Jo(i,t),d="",B;u&&(c.hydrate=u.directive,c.hydrateArgs=u.value,c.componentExport=u.componentExport,c.componentUrl=u.componentUrl);let E=ds(c.componentUrl),x=r.filter(b=>b.name!=="astro:jsx"),{children:v,slotInstructions:w}=await en(e,o),g;if(c.hydrate!=="only"){let b=!1;try{b=n&&n[Ct]}catch{}if(b){let Y=n[Ct];g=r.find(({name:$})=>$===Y)}if(!g){let Y;for(let $ of r)try{if(await $.ssr.check.call({result:e},n,p,v)){g=$;break}}catch(et){Y??(Y=et)}if(!g&&Y)throw Y}if(!g&&typeof HTMLElement=="function"&&ls(n))return us(e,n,t,o)}else{if(c.hydrateArgs){let b=c.hydrateArgs,Y=ki.has(b)?ki.get(b):b;g=r.find(({name:$})=>$===`@astrojs/${Y}`||$===Y)}if(!g&&x.length===1&&(g=x[0]),!g){let b=(a=c.componentUrl)==null?void 0:a.split(".").pop();g=r.filter(({name:Y})=>Y===`@astrojs/${b}`||Y===b)[0]}}if(g)c.hydrate==="only"?d=await z(e,o?.fallback):{html:d,attrs:B}=await g.ssr.renderToStaticMarkup.call({result:e},n,p,v,c);else{if(c.hydrate==="only")throw new k({...h.NoClientOnlyHint,message:h.NoClientOnlyHint.message(c.displayName),hint:h.NoClientOnlyHint.hint(E.map(b=>b.replace("@astrojs/","")).join("|"))});if(typeof n!="string"){let b=x.filter($=>E.includes($.name)),Y=x.length>1;if(b.length===0)throw new k({...h.NoMatchingRenderer,message:h.NoMatchingRenderer.message(c.displayName,(s=c?.componentUrl)==null?void 0:s.split(".").pop(),Y,x.length),hint:h.NoMatchingRenderer.hint(xi(E.map($=>"`"+$+"`")))});if(b.length===1)g=b[0],{html:d,attrs:B}=await g.ssr.renderToStaticMarkup.call({result:e},n,p,v,c);else throw new Error(`Unable to render ${c.displayName}!

This component likely uses ${xi(E)},
but Astro encountered an error during server-side rendering.

Please ensure that ${c.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(g&&!g.clientEntrypoint&&g.name!=="@astrojs/lit"&&c.hydrate)throw new k({...h.NoClientEntrypoint,message:h.NoClientEntrypoint.message(i,c.hydrate,g.name)});if(!d&&typeof n=="string"){let b=gs(n),Y=Object.values(v).join(""),$=Xe(await f`<${b}${bt(p)}${D(Y===""&&jt.test(b)?"/>":`>${Y}</${b}>`)}`);d="";for await(let et of $)d+=et}if(!u)return async function*(){w&&(yield*w),l||g?.name==="astro:jsx"?yield d:d&&d.length>0?yield D(d.replace(/\<\/?astro-slot\>/g,"")):yield""}();let H=cs(`<!--${c.componentExport.value}:${c.componentUrl}-->
${d}
${Vi(p,c)}`),U=await Ko({renderer:g,result:e,astroId:H,props:p,attrs:B},c),R=[];if(d){if(Object.keys(v).length>0)for(let b of Object.keys(v))d.includes(b==="default"?"<astro-slot>":`<astro-slot name="${b}">`)||R.push(b)}else R=Object.keys(v);let G=R.length>0?R.map(b=>`<template data-astro-template${b!=="default"?`="${b}"`:""}>${v[b]}</template>`).join(""):"";U.children=`${d??""}${G}`,U.children&&(U.props["await-children"]="");async function*ne(){w&&(yield*w),yield{type:"directive",hydration:u,result:e},yield D(me("astro-island",U,!1))}return ne()}function gs(e){let i=/[&<>'"\s]+/g;return i.test(e)?e.trim().split(i)[0].trim():e}async function vs(e,i={}){let n=await z(e,i?.default);return n==null?n:D(n)}async function ys(e,i,n,t={}){let{slotInstructions:o,children:a}=await en(e,t),s=i.render({slots:a}),r=o?o.map(c=>Oe(e,c)).join(""):"";return D(r+s)}function C(e,i,n,t,o={}){return Bt(n)?Promise.resolve(n).then(a=>C(e,i,a,t,o)):ms(n)?vs(e,o):hs(n)?ys(e,n,t,o):Ni(n)?Zo(e,i,n,t,o):fs(e,i,n,t,o)}function Ei(e,i,n,t,o={}){let a=C(e,i,n,t,o);return Ot(a)?a.render():a}function Ds(){var e,i,n;return Le=(n=class extends Response{constructor(o,a){let s=o instanceof ReadableStream;super(s?null:o,a);A(this,e,void 0);A(this,i,void 0);j(this,e,s),j(this,i,o)}get body(){return m(this,i)}async text(){if(m(this,e)&&St){let o=new TextDecoder,a=m(this,i),s="";for await(let r of Dt(a))s+=o.decode(r);return s}return super.text()}async arrayBuffer(){if(m(this,e)&&St){let o=m(this,i),a=[],s=0;for await(let u of Dt(o))a.push(u),s+=u.length;let r=new Uint8Array(s),c=0;for(let u of a)r.set(u,c),c+=u.length;return r}return super.arrayBuffer()}},e=new WeakMap,i=new WeakMap,n),Le}function xs(e){return Si in e&&!!e[Si]}async function Ai(e,i,n){let t=new Se,o=0;for await(let a of i)Yt(a)&&o===0&&(o++,/<!doctype html/i.test(String(a))||(t.append(`<!DOCTYPE html>
`,e),n&&await n(t))),t.append(a,e);return t.toArrayBuffer()}async function ws(e){let i=e.propagators.values(),n=ge(e,y.HeadBuffer);for(;;){let{value:t,done:o}=i.next();if(o)break;let a=await t.init(n);Ke(a)&&e.extraHead.push(a.head)}}async function Cs(e,i,n,t,o,a){if(!Ni(i)){let c={...n??{},"server:root":!0},u;try{let p=await C(e,i.name,i,c,null);Ot(p)?u=p.render():u=p}catch(p){throw k.is(p)&&!p.loc&&p.setLocation({file:a?.component}),p}let l=await Ai(e,u,async p=>{if(xs(i))for await(let d of P(e))p.append(d,e)});return new Response(l,{headers:new Headers([["Content-Type","text/html; charset=utf-8"],["Content-Length",l.byteLength.toString()]])})}let s=await i(e,n,t),r=Ke(s);if(zi(s)||r){await ws(e);let c=r?s.content:s,u=Xe(c),l=e.response,p=new Headers(l.headers),d;return o?d=new ReadableStream({start(E){async function x(){let v=0;try{for await(let w of u){Yt(w)&&v===0&&(/<!doctype html/i.test(String(w))||E.enqueue(Ut.encode(`<!DOCTYPE html>
`)));let g=ts(e,w);E.enqueue(g),v++}E.close()}catch(w){k.is(w)&&!w.loc&&w.setLocation({file:a?.component}),E.error(w)}}x()}}):(d=await Ai(e,u),p.set("Content-Length",d.byteLength.toString())),bs(d,{...l,headers:p})}if(!(s instanceof Response))throw new k({...h.OnlyResponseCanBeReturned,message:h.OnlyResponseCanBeReturned.message(a?.route,typeof s),location:{file:a?.component}});return s}function Fs(e){return me("style",{props:{},children:e})}function ks({props:e,children:i}){return me("script",{props:e,children:i})}function Es({href:e}){return me("link",{props:{rel:tn,href:e},children:""},!1)}function Ss(e,i){for(let n of e.links)if(n.props.rel===tn&&n.props.href===i.href)return"";return Es(i)}function Q(e,i,{class:n}={}){let t="";n&&(typeof e.class<"u"?e.class+=` ${n}`:typeof e["class:list"]<"u"?e["class:list"]=[e["class:list"],n]:e.class=n);for(let[o,a]of Object.entries(e))t+=M(a,o,!0);return D(t)}function nn(e,i,n,t){let o=e.level,a=e.dest,s={type:n,level:i,message:t};ze[o]>ze[i]||a.write(s)}function fe(e,i,n){return nn(e,"warn",i,n)}function _s(e,i,n){return nn(e,"error",i,n)}function Ps(...e){"_astroGlobalDebug"in globalThis&&globalThis._astroGlobalDebug(...e)}function Bs([e,i],n){if(!Ts.includes(typeof i))throw new k({...h.GetStaticPathsInvalidRouteParam,message:h.GetStaticPathsInvalidRouteParam.message(e,i,typeof i),location:{file:n}})}function Ys(e,{ssr:i,logging:n,route:t}){if(i&&e.getStaticPaths&&!e.prerender&&fe(n,"getStaticPaths",'getStaticPaths() is ignored when "output: server" is set.'),(!i||e.prerender)&&!e.getStaticPaths)throw new k({...h.GetStaticPathsRequired,location:{file:t.component}})}function js(e,i,n){if(!Array.isArray(e))throw new k({...h.InvalidGetStaticPathsReturn,message:h.InvalidGetStaticPathsReturn.message(typeof e),location:{file:n.component}});e.forEach(t=>{if(t.params===void 0||t.params===null||t.params&&Object.keys(t.params).length===0)throw new k({...h.GetStaticPathsExpectedParams,location:{file:n.component}});if(typeof t.params!="object")throw new k({...h.InvalidGetStaticPathParam,message:h.InvalidGetStaticPathParam.message(typeof t.params),location:{file:n.component}});for(let[o,a]of Object.entries(t.params))typeof a>"u"||typeof a=="string"||typeof a=="number"||fe(i,"getStaticPaths",`invalid path param: ${o}. A string, number or undefined value was expected, but got \`${JSON.stringify(a)}\`.`),typeof a=="string"&&a===""&&fe(i,"getStaticPaths",`invalid path param: ${o}. \`undefined\` expected for an optional param, but got empty string.`)})}function $s(e){return n=>{let t={};return e.forEach((o,a)=>{o.startsWith("...")?t[o.slice(3)]=n[a+1]?decodeURIComponent(n[a+1]):void 0:t[o]=decodeURIComponent(n[a+1])}),t}}function an(e,i){let n=Object.entries(e).reduce((t,o)=>{Bs(o,i);let[a,s]=o;return t[a]=s?.toString(),t},{});return JSON.stringify(n,Object.keys(e).sort())}function Os(e){return function(){switch(e){case"Astro.redirect":throw new k(h.StaticRedirectNotAvailable)}}}function Us(e){var i;if(e&&((i=e.expressions)==null?void 0:i.length)===1)return e.expressions[0]}function Ws(e){let{markdown:i,params:n,pathname:t,renderers:o,request:a,resolve:s}=e,r=new URL(a.url),c=new Headers;c.set("Content-Type","text/html");let u={status:e.status,statusText:"OK",headers:c};Object.defineProperty(u,"headers",{value:u.headers,enumerable:!0,writable:!1});let l,p={styles:e.styles??new Set,scripts:e.scripts??new Set,links:e.links??new Set,propagation:e.propagation??new Map,propagators:new Map,extraHead:[],scope:0,cookies:l,createAstro(d,B,E){let x=new At(p,E,e.logging),v={__proto__:d,get clientAddress(){if(!(_i in a))throw e.adapterName?new k({...h.ClientAddressNotAvailable,message:h.ClientAddressNotAvailable.message(e.adapterName)}):new k(h.StaticClientAddressNotAvailable);return Reflect.get(a,_i)},get cookies(){return l||(l=new qe(a),p.cookies=l,l)},params:n,props:B,request:a,url:r,redirect:e.ssr?(w,g)=>new Response(null,{status:g||302,headers:{Location:w}}):Os("Astro.redirect"),response:u,slots:x};return Object.defineProperty(v,"__renderMarkdown",{enumerable:!1,writable:!1,value:async function(w,g){if(typeof Deno<"u")throw new Error("Markdown is not supported in Deno SSR");if(!mt){let U="@astrojs/";U+="markdown-remark",mt=(await import(U)).renderMarkdown}let{code:H}=await mt(w,{...i,...g??{}});return H}}),v},resolve:s,_metadata:{renderers:o,pathname:t,hasHydrationScript:!1,hasRenderedHead:!1,hasDirectives:new Set},response:u};return p}function Rs(e){return function(n,t={}){let{pageSize:o,params:a,props:s}=t,r=o||10,c="page",u=a||{},l=s||{},p;if(e.params.includes(`...${c}`))p=!1;else if(e.params.includes(`${c}`))p=!0;else throw new k({...h.PageNumberParamNotFound,message:h.PageNumberParamNotFound.message(c)});let d=Math.max(1,Math.ceil(n.length/r));return[...Array(d).keys()].map(E=>{let x=E+1,v=r===1/0?0:(x-1)*r,w=Math.min(v+r,n.length),g={...u,[c]:p||x>1?String(x):void 0};return{params:g,props:{...l,page:{data:n.slice(v,w),start:v,end:w-1,size:r,total:n.length,currentPage:x,lastPage:d,url:{current:e.generate({...g}),next:x===d?void 0:e.generate({...g,page:String(x+1)}),prev:x===1?void 0:e.generate({...g,page:!p&&x-1===1?"":String(x-1)})}}}}})}}async function qs({isValidate:e,logging:i,mod:n,route:t,ssr:o}){if(Ys(n,{ssr:o,logging:i,route:t}),o&&!n.prerender)return{staticPaths:Object.assign([],{keyed:new Map})};if(!n.getStaticPaths)throw new Error("Unexpected Error.");let a=[];a=await n.getStaticPaths({paginate:Rs(t),rss(){throw new k(h.GetStaticPathsRemovedRSSHelper)}}),Array.isArray(a)&&(a=a.flat()),e&&js(a,i,t);let s=a;s.keyed=new Map;for(let r of s){let c=an(r.params,t.component);s.keyed.set(c,r)}return{staticPaths:s}}function Is(e,i,n){let t=an(i,n.component),o=e.keyed.get(t);if(o)return o;Ps("findPathItemByKey",`Unexpected cache miss looking for ${t}`)}async function sn(e){let{logging:i,mod:n,route:t,routeCache:o,pathname:a,ssr:s}=e,r={},c;if(t&&!t.pathname){if(t.params.length){let p=t.pattern.exec(a);p&&(r=$s(t.params)(p))}let u=o.get(t);u||(u=await qs({mod:n,route:t,isValidate:!0,logging:i,ssr:s}),o.set(t,u));let l=Is(u.staticPaths,r,t);if(!l&&(!s||n.prerender))return 0;c=l?.props?{...l.props}:{}}else c={};return[r,c]}async function Ms(e,i,n){var t,o;let a=await sn({logging:n.logging,mod:e,route:i.route,routeCache:n.routeCache,pathname:i.pathname,ssr:n.ssr});if(a===0)throw new k({...h.NoMatchingStaticPathFound,message:h.NoMatchingStaticPathFound.message(i.pathname),hint:(t=i.route)!=null&&t.component?h.NoMatchingStaticPathFound.hint([(o=i.route)==null?void 0:o.component]):""});let[s,r]=a,c=e.default;if(!c)throw new Error(`Expected an exported Astro component but received typeof ${typeof c}`);let u=Ws({adapterName:n.adapterName,links:i.links,styles:i.styles,logging:n.logging,markdown:n.markdown,mode:n.mode,origin:i.origin,params:s,props:r,pathname:i.pathname,propagation:i.propagation,resolve:n.resolve,renderers:n.renderers,request:i.request,site:n.site,scripts:i.scripts,ssr:n.ssr,status:i.status??200});typeof e.components=="object"&&Object.assign(r,{components:e.components});let l=await Cs(u,c,r,null,n.streaming,i.route);return u.cookies&&Tt(l,u.cookies),l}function Ls({request:e,params:i,site:n,props:t,adapterName:o}){return{cookies:new qe(e),request:e,params:i,site:n?new URL(n):void 0,generator:`Astro v${Wi}`,props:t,redirect(a,s){return new Response(null,{status:s||302,headers:{Location:a}})},url:new URL(e.url),get clientAddress(){if(!(Pi in e))throw o?new k({...h.ClientAddressNotAvailable,message:h.ClientAddressNotAvailable.message(o)}):new k(h.StaticClientAddressNotAvailable);return Reflect.get(e,Pi)}}}async function zs(e,i,n,t){var o,a;let s=await sn({mod:e,route:n.route,routeCache:i.routeCache,pathname:n.pathname,logging:i.logging,ssr:i.ssr});if(s===on.NoMatchingStaticPath)throw new k({...h.NoMatchingStaticPathFound,message:h.NoMatchingStaticPathFound.message(n.pathname),hint:(o=n.route)!=null&&o.component?h.NoMatchingStaticPathFound.hint([(a=n.route)==null?void 0:a.component]):""});let[r,c]=s,u=Ls({request:n.request,params:r,props:c,site:i.site,adapterName:i.adapterName}),l=await Co(e,u,i.ssr);return l instanceof Response?(Tt(l,u.cookies),{type:"response",response:l}):(i.ssr&&!e.prerender&&(l.hasOwnProperty("headers")&&fe(t,"ssr","Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."),l.encoding&&fe(t,"ssr","`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.")),{type:"simple",body:l.body,encoding:l.encoding,cookies:u.cookies})}function rn(e){return e.endsWith("/")?e:e+"/"}function cn(e){return e[0]==="/"?e:"/"+e}function Hs(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function Gs(e){return e.startsWith("/")?e.substring(1):e}function Vs(e){return e.replace(/^\/|\/$/g,"")}function Js(e){return typeof e=="string"||e instanceof String}function Ks(...e){return e.filter(Js).map(Vs).join("/")}function Bi(e){let i=e.request,n=new URL(i.url),t=e.origin??n.origin,o=e.pathname??n.pathname;return{...e,origin:t,pathname:o,url:n}}function Xs(e){return rn(new URL(e||"/","http://localhost/").pathname)}function ln(e,i){let n=Xs(i),t=rt(e);return rn(n)+Gs(t)}function Zs(e,i){return{props:{rel:"stylesheet",href:ln(e,i)},children:""}}function Qs(e,i){return new Set(e.map(n=>Zs(n,i)))}function er(e,i){return e.type==="external"?tr(e.value,i):{props:{type:"module"},children:e.value}}function tr(e,i){return{props:{type:"module",src:ln(e,i)},children:""}}function ft(e,i){return i.routes.find(n=>n.pattern.test(decodeURI(e)))}function ir(e,i){let n=e.map(a=>"/"+a.map(s=>s.spread?`:${s.content.slice(3)}(.*)?`:s.dynamic?`:${s.content}`:s.content.normalize().replace(/\?/g,"%3F").replace(/#/g,"%23").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("")).join(""),t="";return i==="always"&&e.length&&(t="/"),Nt(n+t)}function Yi(e){return{route:e.route,type:e.type,pattern:new RegExp(e.pattern),params:e.params,component:e.component,generate:ir(e.segments,e._meta.trailingSlash),pathname:e.pathname||void 0,segments:e.segments,prerender:e.prerender}}function un(e){let i=[];for(let o of e.routes){i.push({...o,routeData:Yi(o.routeData)});let a=o;a.routeData=Yi(o.routeData)}let n=new Set(e.assets),t=new Map(e.propagation);return{...e,assets:n,propagation:t,routes:i}}async function nr(e,i,{default:n=null,...t}={}){if(typeof e!="function")return!1;let o={};for(let[a,s]of Object.entries(t)){let r=dn(a);o[r]=s}try{return(await e({...i,...o,children:n}))[Je]}catch{}return!1}async function ar(e,i={},{default:n=null,...t}={}){let o={};for(let[r,c]of Object.entries(t)){let u=dn(r);o[u]=c}let{result:a}=this;return{html:await ie(a,X(e,{...i,...o,children:n}))}}function Rt({globResult:e,contentDir:i}){let n={};for(let t in e){let a=t.replace(new RegExp(`^${i}`),"").split("/");if(a.length<=1)continue;let s=a[0],r=a.slice(1).join("/");n[s]??(n[s]={}),n[s][r]=e[t]}return n}function hn({collectionToEntryMap:e,collectionToRenderEntryMap:i}){return async function(t,o){let a=Object.values(e[t]??{}),s=[];return gt.has(t)?s=gt.get(t):(s=await Promise.all(a.map(async r=>{let c=await r();return{id:c.id,slug:c.slug,body:c.body,collection:c.collection,data:c.data,async render(){return or({collection:c.collection,id:c.id,collectionToRenderEntryMap:i})}}})),gt.set(t,s)),typeof o=="function"?s.filter(o):s}}async function or({collection:e,id:i,collectionToRenderEntryMap:n}){var t,o;let a=new k({...h.UnknownContentCollectionError,message:`Unexpected error while rendering ${String(e)} \u2192 ${String(i)}.`}),s=(t=n[e])==null?void 0:t[i];if(typeof s!="function")throw a;let r=await s();if(r==null||typeof r!="object")throw a;let{collectedStyles:c,collectedLinks:u,collectedScripts:l,getMod:p}=r;if(typeof p!="function")throw a;let d=await p();if(d==null||typeof d!="object")throw a;return{Content:S({factory(E,x,v){let w="",g="",H="";Array.isArray(c)&&(w=c.map(R=>Fs(R)).join("")),Array.isArray(u)&&(g=u.map(R=>Ss(E,{href:cn(R)})).join("")),Array.isArray(l)&&(H=l.map(R=>ks(R)).join(""));let U=x;return i.endsWith("mdx")&&(U={components:d.components??{},...x}),No(Ee(w+g+H),f`${C(ge(E),"Content",d.Content,U,v)}`)},propagation:"self"}),headings:((o=d.getHeadings)==null?void 0:o.call(d))??[],remarkPluginFrontmatter:d.frontmatter??{}}}var ke,ji,mo,fi,we,Ae,J,O,_e,vt,Pe,yt,He,$i,qe,Oi,h,k,Wi,Ce,Ie,he,D,Je,vi,yi,Ao,_o,Po,To,Bo,Yo,Di,jt,Uo,Wo,Ro,qo,Io,xe,ct,Mo,lt,y,Mi,Ci,Li,xt,I,Ji,Vo,Ki,Xi,Zi,wt,Qi,Me,Z,Ct,Ut,es,Se,Fi,te,Ft,Wt,Et,dt,ki,St,Le,bs,Si,tn,As,ze,Ts,_i,Te,K,Be,At,mt,_t,on,Pi,Ti,ht,Ns,ye,L,pe,Ye,Ge,de,De,je,$e,Pt,Ve,pn,Ne,dn,mn,gt,ve=T(()=>{ke=W(oe(),1);Ht();ji=W(se(),1);re();ce();le();ue();mo=new Date(0),fi="deleted",we=class{constructor(i){this.value=i}json(){if(this.value===void 0)throw new Error("Cannot convert undefined to an object.");return JSON.parse(this.value)}number(){return Number(this.value)}boolean(){return this.value==="false"||this.value==="0"?!1:!!this.value}},qe=class{constructor(i){A(this,_e);A(this,Pe);A(this,He);A(this,Ae,void 0);A(this,J,void 0);A(this,O,void 0);j(this,Ae,i),j(this,J,null),j(this,O,null)}delete(i,n){let t={expires:mo};n?.domain&&(t.domain=n.domain),n?.path&&(t.path=n.path),V(this,Pe,yt).call(this).set(i,[fi,(0,ke.serialize)(i,fi,t),!1])}get(i){if(m(this,O)!==null&&m(this,O).has(i)){let[o,,a]=m(this,O).get(i);return a?new we(o):new we(void 0)}let t=V(this,_e,vt).call(this)[i];return new we(t)}has(i){if(m(this,O)!==null&&m(this,O).has(i)){let[,,t]=m(this,O).get(i);return t}return!!V(this,_e,vt).call(this)[i]}set(i,n,t){let o;if(typeof n=="string")o=n;else{let s=n.toString();s===Object.prototype.toString.call(n)?o=JSON.stringify(n):o=s}let a={};t&&Object.assign(a,t),V(this,Pe,yt).call(this).set(i,[o,(0,ke.serialize)(i,o,a),!0])}*headers(){if(m(this,O)!=null)for(let[,i]of m(this,O))yield i[1]}};Ae=new WeakMap,J=new WeakMap,O=new WeakMap,_e=new WeakSet,vt=function(){return m(this,J)||V(this,He,$i).call(this),m(this,J)||j(this,J,{}),m(this,J)},Pe=new WeakSet,yt=function(){return m(this,O)||j(this,O,new Map),m(this,O)},He=new WeakSet,$i=function(){let i=m(this,Ae).headers.get("cookie");i&&j(this,J,(0,ke.parse)(i))};Oi=Symbol.for("astro.cookies");h={UnknownCompilerError:{title:"Unknown compiler error.",code:1e3,hint:"This is almost always a problem with the Astro compiler, not your code. Please open an issue at https://astro.build/issues/compiler."},StaticRedirectNotAvailable:{title:"`Astro.redirect` is not available in static mode.",code:3001,message:"Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."},ClientAddressNotAvailable:{title:"`Astro.clientAddress` is not available in current adapter.",code:3002,message:e=>`\`Astro.clientAddress\` is not available in the \`${e}\` adapter. File an issue with the adapter to add support.`},StaticClientAddressNotAvailable:{title:"`Astro.clientAddress` is not available in static mode.",code:3003,message:"`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."},NoMatchingStaticPathFound:{title:"No static path found for requested path.",code:3004,message:e=>`A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${e}\`.`,hint:e=>`Possible dynamic routes being matched: ${e.join(", ")}.`},OnlyResponseCanBeReturned:{title:"Invalid type returned by Astro page.",code:3005,message:(e,i)=>`Route \`${e||""}\` returned a \`${i}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,hint:"See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."},MissingMediaQueryDirective:{title:"Missing value for `client:media` directive.",code:3006,message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},NoMatchingRenderer:{title:"No matching renderer found.",code:3007,message:(e,i,n,t)=>`Unable to render \`${e}\`.

${t>0?`There ${n?"are.":"is."} ${t} renderer${n?"s.":""} configured in your \`astro.config.mjs\` file,
but ${n?"none were.":"it was not."} able to server-side render \`${e}\`.`:`No valid renderer was found ${i?`for the \`.${i}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`},NoClientEntrypoint:{title:"No client entrypoint specified in renderer.",code:3008,message:(e,i,n)=>`\`${e}\` component has a \`client:${i}\` directive, but no client entrypoint was provided by \`${n}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},NoClientOnlyHint:{title:"Missing hint on client:only directive.",code:3009,message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},InvalidGetStaticPathParam:{title:"Invalid value returned by a `getStaticPaths` path.",code:3010,message:e=>`Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${e}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},InvalidGetStaticPathsReturn:{title:"Invalid value returned by getStaticPaths.",code:3011,message:e=>`Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${e}\``,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},GetStaticPathsRemovedRSSHelper:{title:"getStaticPaths RSS helper is not available anymore.",code:3012,message:"The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",hint:"See https://docs.astro.build/en/guides/rss/ for more information."},GetStaticPathsExpectedParams:{title:"Missing params property on `getStaticPaths` route.",code:3013,message:"Missing or empty required `params` property on `getStaticPaths` route.",hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},GetStaticPathsInvalidRouteParam:{title:"Invalid value for `getStaticPaths` route parameter.",code:3014,message:(e,i,n)=>`Invalid getStaticPaths route parameter for \`${e}\`. Expected undefined, a string or a number, received \`${n}\` (\`${i}\`)`,hint:"See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."},GetStaticPathsRequired:{title:"`getStaticPaths()` function required for dynamic routes.",code:3015,message:"`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",hint:'See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.\n\nAlternatively, set `output: "server"` in your Astro config file to switch to a non-static server build. This error can also occur if using `export const prerender = true;`.\nSee https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.'},ReservedSlotName:{title:"Invalid slot name.",code:3016,message:e=>`Unable to create a slot named \`${e}\`. \`${e}\` is a reserved slot name. Please update the name of this slot.`},NoAdapterInstalled:{title:"Cannot use Server-side Rendering without an adapter.",code:3017,message:"Cannot use `output: 'server'` without an adapter. Please install and configure the appropriate server adapter for your final deployment.",hint:"See https://docs.astro.build/en/guides/server-side-rendering/ for more information."},NoMatchingImport:{title:"No import found for component.",code:3018,message:e=>`Could not render \`${e}\`. No matching import has been found for \`${e}\`.`,hint:"Please make sure the component is properly imported."},InvalidPrerenderExport:{title:"Invalid prerender export.",code:3019,message:(e,i)=>{let n="A `prerender` export has been detected, but its value cannot be statically analyzed.";return e!=="const"&&(n+=`
Expected \`const\` declaration but got \`${e}\`.`),i!=="true"&&(n+=`
Expected \`true\` value but got \`${i}\`.`),n},hint:"Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."},InvalidComponentArgs:{title:"Invalid component arguments.",code:3020,message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},PageNumberParamNotFound:{title:"Page number param not found.",code:3021,message:e=>`[paginate()] page number param \`${e}\` not found in your filepath.`,hint:"Rename your file to `[page].astro` or `[...page].astro`."},ImageMissingAlt:{title:"Missing alt property",code:3022,message:"The alt property is required.",hint:"The `alt` property is important for the purpose of accessibility, without it users using screen readers or other assistive technologies won't be able to understand what your image is supposed to represent. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt for more information."},InvalidImageService:{title:"Error while loading image service",code:3023,message:"There was an error loading the configured image service. Please see the stack trace for more information."},MissingImageDimension:{title:"Missing image dimensions",code:3024,message:(e,i)=>`Missing ${e==="both"?"width and height attributes":`${e} attribute`} for ${i}. When using remote images, both dimensions are always required in order to avoid CLS.`,hint:"If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets)."},UnsupportedImageFormat:{title:"Unsupported image format",code:3025,message:(e,i,n)=>`Received unsupported format \`${e}\` from \`${i}\`. Currently only ${n.join(", ")} are supported for optimization.`,hint:"If you do not need optimization, using an `img` tag directly instead of the `Image` component might be what you're looking for."},UnknownViteError:{title:"Unknown Vite Error.",code:4e3},FailedToLoadModuleSSR:{title:"Could not import file.",code:4001,message:e=>`Could not import \`${e}\`.`,hint:"This is often caused by a typo in the import path. Please make sure the file exists."},InvalidGlob:{title:"Invalid glob pattern.",code:4002,message:e=>`Invalid glob pattern: \`${e}\`. Glob patterns must start with './', '../' or '/'.`,hint:"See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."},UnknownCSSError:{title:"Unknown CSS Error.",code:5e3},CSSSyntaxError:{title:"CSS Syntax Error.",code:5001},UnknownMarkdownError:{title:"Unknown Markdown Error.",code:6e3},MarkdownFrontmatterParseError:{title:"Failed to parse Markdown frontmatter.",code:6001},InvalidFrontmatterInjectionError:{title:"Invalid frontmatter injection.",code:6003,message:'A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.',hint:"See the frontmatter injection docs https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically for more information."},MdxIntegrationMissingError:{title:"MDX integration missing.",code:6004,message:e=>`Unable to render ${e}. Ensure that the \`@astrojs/mdx\` integration is installed.`,hint:"See the MDX integration docs for installation and usage instructions: https://docs.astro.build/en/guides/integrations-guide/mdx/"},UnknownConfigError:{title:"Unknown configuration error.",code:7e3},ConfigNotFound:{title:"Specified configuration file not found.",code:7001,message:e=>`Unable to resolve \`--config "${e}"\`. Does the file exist?`},ConfigLegacyKey:{title:"Legacy configuration detected.",code:7002,message:e=>`Legacy configuration detected: \`${e}\`.`,hint:`Please update your configuration to the new format.
See https://astro.build/config for more information.`},UnknownCLIError:{title:"Unknown CLI Error.",code:8e3},GenerateContentTypesError:{title:"Failed to generate content types.",code:8001,message:"`astro sync` command failed to generate content collection types.",hint:"Check your `src/content/config.*` file for typos."},UnknownContentCollectionError:{title:"Unknown Content Collection Error.",code:9e3},InvalidContentEntryFrontmatterError:{title:"Content entry frontmatter does not match schema.",code:9001,message:(e,i,n)=>[`**${String(e)} \u2192 ${String(i)}** frontmatter does not match collection schema.`,...n.errors.map(t=>t.message)].join(`
`),hint:"See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."},InvalidContentEntrySlugError:{title:"Invalid content entry slug.",code:9002,message:(e,i)=>`${String(e)} \u2192 ${String(i)} has an invalid slug. \`slug\` must be a string.`,hint:"See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."},ContentSchemaContainsSlugError:{title:"Content Schema should not contain `slug`.",code:9003,message:e=>`A content collection schema should not contain \`slug\` since it is reserved for slug generation. Remove this from your ${e} collection schema.`,hint:"See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."},UnknownError:{title:"Unknown Error.",code:99999}};k=class extends Error{constructor(i,...n){var t;super(...n),this.type="AstroError";let{code:o,name:a,title:s,message:r,stack:c,location:u,hint:l,frame:p}=i;this.errorCode=o,a&&a!=="Error"?this.name=a:this.name=((t=vo(this.errorCode))==null?void 0:t.name)??"UnknownError",this.title=s,r&&(this.message=r),this.stack=c||this.stack,this.loc=u,this.hint=l,this.frame=p}setErrorCode(i){this.errorCode=i}setLocation(i){this.loc=i}setName(i){this.name=i}setMessage(i){this.message=i}setHint(i){this.hint=i}setFrame(i,n){this.frame=yo(i,n)}static is(i){return i.type==="AstroError"}};Wi="2.1.5";Ce=hi,Ie=class extends Uint8Array{};Object.defineProperty(Ie.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});he=class extends String{get[Symbol.toStringTag](){return"HTMLString"}},D=e=>e instanceof he?e:typeof e=="string"?new he(e):e;Je="astro:jsx",vi=Symbol("empty"),yi=e=>e;Ao='(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));',_o='(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));',Po='(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));',To='(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));',Bo='(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));',Yo='var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(`astro:${e}`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}';Di={idle:Ao,load:_o,only:To,media:Po,visible:Bo};jt=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,Uo=/^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i,Wo=/^(contenteditable|draggable|spellcheck|value)$/i,Ro=/^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i,qo=new Set(["set:html","set:text"]),Io=e=>e.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g,(i,n)=>/[^\w]|\s/.test(i)?"":n===0?i:i.toUpperCase()),xe=(e,i=!0)=>i?String(e).replace(/&/g,"&#38;").replace(/"/g,"&#34;"):e,ct=e=>e.toLowerCase()===e?e:e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`),Mo=e=>Object.entries(e).map(([i,n])=>i[0]!=="-"&&i[1]!=="-"?`${ct(i)}:${n}`:ct(i)!==i?`${ct(i)}:var(${i});${i}:${n}`:`${i}:${n}`).join(";");lt=(e,i,n)=>{let t=JSON.stringify(e.props),o=e.children;return i===n.findIndex(a=>JSON.stringify(a.props)===t&&a.children==o)};y={Astro:1<<0,JSX:1<<1,Slot:1<<2,HeadBuffer:1<<3,RenderSlot:1<<4};Mi=Symbol.for("astro.headAndContent");Li=Symbol.for("astro.renderTemplateResult"),xt=class{constructor(i,n){this[Ci]=!0,this.htmlParts=i,this.error=void 0,this.expressions=n.map(t=>Bt(t)?Promise.resolve(t).catch(o=>{if(!this.error)throw this.error=o,o}):t)}async*[(Ci=Li,Symbol.asyncIterator)](){let{htmlParts:i,expressions:n}=this;for(let t=0;t<i.length;t++){let o=i[t],a=n[t];yield D(o),yield*be(a)}}};I={Value:0,JSON:1,RegExp:2,Date:3,Map:4,Set:5,BigInt:6,URL:7,Uint8Array:8,Uint16Array:9,Uint32Array:10};Ji=["load","idle","media","visible","only"],Vo=new Set(Ji),Ki=new Set(Ji.map(e=>`client:${e}`));Zi=Symbol.for("astro.componentInstance"),wt=class{constructor(i,n,t,o){this[Xi]=!0,this.result=i,this.props=n,this.factory=o,this.slotValues={};let a=ge(i,y.Slot);for(let s in t){let r=t[s](a);this.slotValues[s]=()=>r}}async init(i){return this.returnValue=this.factory(i,this.props,this.slotValues),this.returnValue}async*render(){this.returnValue===void 0&&await this.init(this.result);let i=this.returnValue;Bt(i)&&(i=await i),Ke(i)?yield*i.content:yield*be(i)}};Xi=Zi;Qi=Symbol.for("astro:slot-string"),Me=class extends he{constructor(i,n){super(i),this.instructions=n,this[Qi]=!0}};Z=Symbol.for("astro:fragment"),Ct=Symbol.for("astro:renderer"),Ut=new TextEncoder,es=new TextDecoder;Se=class{constructor(){this.parts=""}append(i,n){ArrayBuffer.isView(i)?this.parts+=es.decode(i):this.parts+=Oe(n,i)}toString(){return this.parts}toArrayBuffer(){return Ut.encode(this.parts)}};Fi="astro-client-only",te=class{constructor(i){this.vnode=i,this.count=0}increment(){this.count++}haveNoTried(){return this.count===0}isCompleted(){return this.count>2}};te.symbol=Symbol("astro:jsx:skip");Wt=0;Et="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",dt=Et.length;ki=new Map([["solid","solid-js"]]);St=typeof process=="object"&&Object.prototype.toString.call(process)==="[object process]";bs=St?(e,i)=>typeof e=="string"||ArrayBuffer.isView(e)?new Response(e,i):typeof Le>"u"?new(Ds())(e,i):new Le(e,i):(e,i)=>new Response(e,i),Si=Symbol.for("astro.needsHeadRendering");tn="stylesheet";As=new Intl.DateTimeFormat([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}),ze={debug:20,info:30,warn:40,error:50,silent:90};if(typeof process<"u"){let e=process;"argv"in e&&Array.isArray(e.argv)&&(e.argv.includes("--verbose")||e.argv.includes("--silent"))}Ts=["string","number","undefined"];_i=Symbol.for("astro.clientAddress");At=class{constructor(i,n,t){A(this,Te,void 0);A(this,K,void 0);A(this,Be,void 0);if(j(this,Te,i),j(this,K,n),j(this,Be,t),n)for(let o of Object.keys(n)){if(this[o]!==void 0)throw new k({...h.ReservedSlotName,message:h.ReservedSlotName.message(o)});Object.defineProperty(this,o,{get(){return!0},enumerable:!0})}}has(i){return m(this,K)?!!m(this,K)[i]:!1}async render(i,n=[]){if(!m(this,K)||!this.has(i))return;let t=ge(m(this,Te),y.RenderSlot);if(!Array.isArray(n))fe(m(this,Be),"Astro.slots.render",`Expected second parameter to be an array, received a ${typeof n}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);else if(n.length>0){let s=m(this,K)[i],r=typeof s=="function"?await s(t):await s,c=Us(r);if(c)return await z(t,()=>c(...n)).then(l=>l!=null?String(l):l);if(typeof r=="function")return await ie(t,r(...n)).then(u=>u!=null?String(u):u)}let o=await z(t,m(this,K)[i]);return Oe(t,o)}};Te=new WeakMap,K=new WeakMap,Be=new WeakMap;mt=null;_t=class{constructor(i,n="production"){this.cache={},this.logging=i,this.mode=n}clearAll(){this.cache={}}set(i,n){this.mode==="production"&&this.cache[i.component]&&fe(this.logging,"routeCache",`Internal Warning: route cache overwritten. (${i.component})`),this.cache[i.component]=n}get(i){return this.cache[i.component]}};on=(e=>(e[e.NoMatchingStaticPath=0]="NoMatchingStaticPath",e))(on||{});Pi=Symbol.for("astro.clientAddress");ht=1,Ns={write(e){let i=console.error;ze[e.level]<ze.error&&(i=console.log);function n(){let a="",s=e.type;return s&&(a+=oi(As.format(new Date)+" "),e.level==="info"?s=Re(ri(`[${s}]`)):e.level==="warn"?s=Re(ot(`[${s}]`)):e.level==="error"&&(s=Re(si(`[${s}]`))),a+=`${s} `),ai(a)}let t=e.message;t===Ti?(ht++,t=`${t} ${ot(`(x${ht})`)}`):(Ti=t,ht=1);let o=n()+t;return i(o),!0}};Ne=class{constructor(i,n=!0){A(this,$e);A(this,Ve);A(this,ye,void 0);A(this,L,void 0);A(this,pe,void 0);A(this,Ye,void 0);A(this,Ge,new TextEncoder);A(this,de,{dest:Ns,level:"info"});A(this,De,void 0);A(this,je,void 0);j(this,L,i),j(this,pe,{routes:i.routes.map(t=>t.routeData)}),j(this,Ye,new Map(i.routes.map(t=>[t.routeData,t]))),j(this,ye,{adapterName:i.adapterName,logging:m(this,de),markdown:i.markdown,mode:"production",renderers:i.renderers,async resolve(t){if(!(t in i.entryModules))throw new Error(`Unable to resolve [${t}]`);let o=i.entryModules[t];switch(!0){case o.startsWith("data:"):case o.length===0:return o;default:return cn(Ks(i.base,o))}},routeCache:new _t(m(this,de)),site:m(this,L).site,ssr:!0,streaming:n}),j(this,De,m(this,L).base||"/"),j(this,je,Hs(m(this,De)))}removeBase(i){return i.startsWith(m(this,De))?i.slice(m(this,je).length+1):i}match(i,{matchNotFound:n=!1}={}){let t=new URL(i.url);if(m(this,L).assets.has(t.pathname))return;let o="/"+this.removeBase(t.pathname),a=ft(o,m(this,pe));if(a)return a.prerender?void 0:a;if(n){let s=ft("/404",m(this,pe));return s?.prerender?void 0:s}else return}async render(i,n){let t=200;if(!n&&(n=this.match(i),n||(t=404,n=this.match(i,{matchNotFound:!0})),!n))return new Response(null,{status:404,statusText:"Not found"});n.route==="/404"&&(t=404);let o=m(this,L).pageMap.get(n.component);if(n.type==="page"){let a=await V(this,$e,Pt).call(this,i,n,o,t);if(a.status===500){let s=ft("/500",m(this,pe));if(s){o=m(this,L).pageMap.get(s.component);try{return await V(this,$e,Pt).call(this,i,s,o,500)}catch{}}}return a}else{if(n.type==="endpoint")return V(this,Ve,pn).call(this,i,n,o,t);throw new Error(`Unsupported route type [${n.type}].`)}}setCookieHeaders(i){return fo(i)}};ye=new WeakMap,L=new WeakMap,pe=new WeakMap,Ye=new WeakMap,Ge=new WeakMap,de=new WeakMap,De=new WeakMap,je=new WeakMap,$e=new WeakSet,Pt=async function(i,n,t,o=200){let a=new URL(i.url),s="/"+this.removeBase(a.pathname),r=m(this,Ye).get(n),c=Qs(r.links),u=new Set;for(let l of r.scripts)"stage"in l?l.stage==="head-inline"&&u.add({props:{},children:l.children}):u.add(er(l));try{let l=Bi({request:i,origin:a.origin,pathname:s,propagation:m(this,L).propagation,scripts:u,links:c,route:n,status:o});return await Ms(t,l,m(this,ye))}catch(l){return _s(m(this,de),"ssr",l.stack||l.message||String(l)),new Response(null,{status:500,statusText:"Internal server error"})}},Ve=new WeakSet,pn=async function(i,n,t,o=200){let a=new URL(i.url),s="/"+this.removeBase(a.pathname),r=t,c=Bi({request:i,origin:a.origin,pathname:s,route:n,status:o}),u=await zs(r,m(this,ye),c,m(this,de));if(u.type==="response"){if(u.response.headers.get("X-Astro-Response")==="Not-Found"){let l=new Request(new URL("/404",i.url)),p=this.match(l);if(p)return this.render(l,p)}return u.response}else{let l=u.body,p=new Headers,d=ji.default.getType(a.pathname);d?p.set("Content-Type",`${d};charset=utf-8`):p.set("Content-Type","text/plain;charset=utf-8");let B=m(this,Ge).encode(l);p.set("Content-Length",B.byteLength.toString());let E=new Response(B,{status:200,headers:p});return Tt(E,u.cookies),E}};dn=e=>e.trim().replace(/[-_]([a-z])/g,(i,n)=>n.toUpperCase());mn={check:nr,renderToStaticMarkup:ar};gt=new Map});var fn={};q(fn,{_internal:()=>pr,body:()=>lr,collection:()=>rr,data:()=>ur,id:()=>sr,slug:()=>cr});var sr,rr,cr,lr,ur,pr,gn=T(()=>{sr="markdown-styling.md",rr="blog",cr="markdown-styling",lr=`
Wnat to submit an article and get full creditation? Here is a sample of some basic Markdown syntax that can be used when writing content in Markdown. 

Don't forget to share a logo/avatar and suggested tags too.

## Headings

The following HTML \`<h1>\`\u2014\`<h6>\` elements represent six levels of section headings. \`<h1>\` is the highest section level while \`<h6>\` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![This is a placeholder image description](/img/photo/posts/3.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a \`footer\` or \`cite\` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> \u2014 <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | \`code\` |

## Code Blocks

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
\`\`\`

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements \u2014 sub, sup, mark

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.`,ur={title:"Want to contribute, submit an article?",description:"Some basic Markdown syntax that can be used when writing Markdown content.",created:new Date(165663e7),updated:new Date(16781472e5),image:"/img/vectors/content.svg",avatar:"/img/logo/icon.svg",author:"ardency",tags:["astro","markdown"],language:"en"},pr={filePath:"/Users/goose/Spaces/pepeye/github/group/src/content/blog/markdown-styling.md",rawData:`
title: "Want to contribute, submit an article?"
description: "Some basic Markdown syntax that can be used when writing Markdown content."
created: "Jul 01 2022"
updated: "Mar 07 2023"
image: "/img/vectors/content.svg"
avatar: "/img/logo/icon.svg"
author: "ardency"
tags: ["astro", "markdown"]
language: "en"`}});var vn={};q(vn,{_internal:()=>vr,body:()=>fr,collection:()=>mr,data:()=>gr,id:()=>dr,slug:()=>hr});var dr,mr,hr,fr,gr,vr,yn=T(()=>{dr="state-of-european-tech.md",mr="blog",hr="state-of-european-tech",fr=`
# Much Further to Go

Venture capital is an essential source of funding for entrepreneurs looking to start and grow their businesses. However, ethnic minorities face significant barriers when it comes to securing venture capital funding. Despite some progress in recent years, the statistics still show a significant lack of funding for ethnic minority-led startups. This issue is not only a matter of social justice but also a missed opportunity for the venture capital industry to tap into a diverse and lucrative market. In this blog, we will explore the challenges faced by ethnic minority entrepreneurs and the steps that need to be taken to promote inclusivity in the venture capital industry.

Ethnic minority entrepreneurs face a wide range of challenges when it comes to securing venture capital funding. These challenges can be both structural and societal and often stem from systemic biases and historical inequalities. Here are some of the key challenges faced by ethnic minority entrepreneurs:

- Bias and discrimination: One of the biggest challenges faced by ethnic minority entrepreneurs is bias and discrimination. Studies have shown that venture capitalists are more likely to invest in entrepreneurs who are like them in terms of race, gender, and social background. This means that ethnic minority entrepreneurs may face bias and discrimination when seeking funding, even if they have a strong business idea and a solid track record.
- Lack of networks: Another challenge faced by ethnic minority entrepreneurs is a lack of networks. Access to networks is essential for securing venture capital funding, as investors often rely on referrals from their existing networks to find new investment opportunities. However, ethnic minority entrepreneurs may face barriers to accessing these networks, particularly if they come from underrepresented communities or have limited social capital.
- Limited access to mentorship and support: Ethnic minority entrepreneurs may also face limited access to mentorship and support, which can be crucial for success in the startup world. Many successful entrepreneurs credit their mentors with helping them navigate the challenges of building a business, but ethnic minority entrepreneurs may struggle to find mentors who understand their unique challenges and experiences.
- Cultural differences: Cultural differences can also pose challenges for ethnic minority entrepreneurs, particularly if they come from communities with different business practices or values. For example, some investors may be unfamiliar with business practices that are common in certain ethnic communities, which can make it harder for entrepreneurs from those communities to secure funding.
- Lack of representation: Finally, a lack of representation in the venture capital industry itself can make it harder for ethnic minority entrepreneurs to secure funding. Research has shown that ethnic minority investors are more likely to invest in ethnic minority entrepreneurs, so a lack of diversity in the investor pool can contribute to the lack of funding for ethnic minority entrepreneurs.

In North America, there has been a persistent lack of access to venture capital funding for ethnic minority founders, particularly for black founders. According to a report by RateMyInvestor and DiversityVC, black founders received only 1% of total venture capital funding in the US in 2020, despite making up 13% of the US population. This trend has persisted over the last decade, with black founders receiving only 1% of total venture capital funding in the US between 2010 and 2018, according to a report by CB Insights. Similarly, in Canada, a study by the Brookfield Institute found that racialized entrepreneurs received only 4.1% of venture capital funding between 2015 and 2019.

In Europe, the situation is not much different. According to a study by DiversityVC, only 1.6% of venture capital funding went to black and ethnic minority founders in the UK in 2019, despite making up 14% of the UK population. The situation is even worse in other European countries, with black founders receiving less than 0.1% of venture capital funding in France and Germany. A report by Atomico also found that only 1% of founders of European startups backed by venture capital were black, and only 2.3% were of Middle Eastern and North African descent. Overall, the lack of access to venture capital funding for ethnic minority founders in North America and Europe over the last 10 years highlights the urgent need for greater inclusivity in the venture capital industry.

> 2\xA2 for every dollar invested in venture capital over the past 10 years has gone to all-ethnic teams.
> \u2014 <cite>State of European Tech[^1]</cite>

[^1]: [State of European Tech, 2020 - State of Diversity & Inclusion](https://2020.stateofeuropeantech.com/chapter/diversity-inclusion/article/diversity-inclusion/)

To promote inclusivity in the venture capital industry and ensure that ethnic minority entrepreneurs have equal access to funding, there are several steps that need to be taken.

1. There needs to be greater awareness and education around bias and discrimination in the industry. 
2. Greater investment in networks and support systems for ethnic minority entrepreneurs. 

Many of the existing biases can be addressed via through diversity and inclusion training for investors, as well as by increasing the diversity of the venture capital industry itself.

Overall this is the reason why \`ardency\` was formed - in response to many of the challenges faced by this effectively marginalised group. Looking forwards, the hope is to provide mentorship programs, setup up a business accelerators (more to come shortly), and create networking events specifically designed to support underrepresented entrepreneurs.
`,gr={title:"Much Further to Go",description:"Addressing the wider diversity issues facing ethnic founders across the global venture capital industry.",created:new Date(165663e7),updated:new Date(16781472e5),image:"/img/vectors/investing.svg",avatar:"/img/logo/icon.svg",author:"ardency",tags:["investing","funding","vc"],language:"en"},vr={filePath:"/Users/goose/Spaces/pepeye/github/group/src/content/blog/state-of-european-tech.md",rawData:`
title: "Much Further to Go"
description: "Addressing the wider diversity issues facing ethnic founders across the global venture capital industry."
created: "Jul 01 2022"
updated: "Mar 07 2023"
image: "/img/vectors/investing.svg"
avatar: "/img/logo/icon.svg"
author: "ardency"
tags: ["investing", "funding", "vc"]
language: "en"`}});var Dn={};q(Dn,{_internal:()=>Cr,body:()=>xr,collection:()=>Dr,data:()=>wr,id:()=>yr,slug:()=>br});var yr,Dr,br,xr,wr,Cr,bn=T(()=>{yr="privacy.md",Dr="policy",br="privacy",xr=`
![This is a placeholder image description](/img/vectors/private-data.svg)

# Privacy Policy

Last updated: March 16, 2023

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the [Free Privacy Policy Generator](https://www.freeprivacypolicy.com/free-privacy-policy-generator/).

# Interpretation and Definitions

## Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

## Definitions

For the purposes of this Privacy Policy:

- __Account__ means a unique account created for You to access our Service or parts of our Service.
- __Affiliate__ means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.



- __Company__ (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Ardency Group Limited, 7, Bell Yard, London, WC2A 2JR.



- __Cookies__ are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.

- __Country__ refers to:  United Kingdom

- __Device__ means any device that can access the Service such as a computer, a cellphone or a digital tablet.



- __Personal Data__ is any information that relates to an identified or identifiable individual.



- __Service__ refers to the Website.

- __Service Provider__ means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
	

- __Usage Data__ refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).

- __Website__ refers to ardency, accessible from [https://ardency.io](https://ardency.io)

- __You__ means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.



# Collecting and Using Your Personal Data

## Types of Data Collected

### Personal Data

While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

- Email address
- First name and last name




- Usage Data



### Usage Data

Usage Data is collected automatically when using the Service.

Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.






### Tracking Technologies and Cookies

We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:

- __Cookies or Browser Cookies.__ A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
- __Web Beacons.__ Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).

Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the [Free Privacy Policy website](https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking) article.

We use both Session and Persistent Cookies for the purposes set out below:

- __Necessary / Essential Cookies__

	Type: Session Cookies

	Administered by: Us

	Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
- __Cookies Policy / Notice Acceptance Cookies__

	Type: Persistent Cookies

	Administered by: Us

	Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
- __Functionality Cookies__

	Type: Persistent Cookies

	Administered by: Us

	Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.



For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.


## Use of Your Personal Data

The Company may use Personal Data for the following purposes:

- __To provide and maintain our Service__, including to monitor the usage of our Service.
- __To manage Your Account:__ to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
- __For the performance of a contract:__ the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
- __To contact You:__ To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
- __To provide You__ with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
- __To manage Your requests:__ To attend and manage Your requests to Us.

- __For business transfers:__ We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
- __For other purposes__: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience. 

We may share Your personal information in the following situations:

- __With Service Providers:__ We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.
- __For business transfers:__ We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
- __With Affiliates:__ We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
- __With business partners:__ We may share Your information with Our business partners to offer You certain products, services or promotions.
- __With other users:__ when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. 
- __With Your consent__: We may disclose Your personal information for any other purpose with Your consent.

## Retention of Your Personal Data

The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.

## Transfer of Your Personal Data

Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to \u2014 and maintained on \u2014 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.

Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.

The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.

## Delete Your Personal Data

You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.

Our Service may give You the ability to delete certain information about You from within the Service.

You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.

Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.

## Disclosure of Your Personal Data

### Business Transactions

If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.

### Law enforcement

Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).

### Other legal requirements

The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:

- Comply with a legal obligation
- Protect and defend the rights or property of the Company
- Prevent or investigate possible wrongdoing in connection with the Service
- Protect the personal safety of Users of the Service or the public
- Protect against legal liability

## Security of Your Personal Data

The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
















# Children's Privacy

Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.

If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.


# Links to Other Websites

Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.

# Changes to this Privacy Policy

We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

# Contact Us

If you have any questions about this Privacy Policy, You can contact us:


- By email: hello@ardency.io`,wr={title:"Privacy Policy",description:"Privacy Policy",created:new Date(165663e7),updated:new Date(16781472e5),image:"/img/vectors/private-data.svg",avatar:"/img/logo/icon.svg",author:"ardency",tags:["policy","documents"],language:"en"},Cr={filePath:"/Users/goose/Spaces/pepeye/github/group/src/content/policy/privacy.md",rawData:`
title: "Privacy Policy"
description: "Privacy Policy"
created: "Jul 01 2022"
updated: "Mar 07 2023"
image: "/img/vectors/private-data.svg"
avatar: "/img/logo/icon.svg"
author: "ardency"
tags: ["policy", "documents"]
language: "en"`}});var xn={};q(xn,{_internal:()=>_r,body:()=>Sr,collection:()=>kr,data:()=>Ar,id:()=>Fr,slug:()=>Er});var Fr,kr,Er,Sr,Ar,_r,wn=T(()=>{Fr="terms.md",kr="policy",Er="terms",Sr=`
![This is a placeholder image description](/img/vectors/terms-accept.svg)

# Terms and Conditions

Last updated: March 16, 2023

Please read these terms and conditions carefully before using Our Service.

# Interpretation and Definitions

## Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

## Definitions

For the purposes of these Terms and Conditions:



- __Affiliate__ means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.

- __Country__ refers to:  United Kingdom
- __Company__ (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Ardency Group Limited, 7, Bell Yard, London, WC2A 2JR.

- __Device__ means any device that can access the Service such as a computer, a cellphone or a digital tablet.







- __Service__ refers to the Website.


- __Terms and Conditions__ (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the [Free Terms and Conditions Generator](https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/).
- __Third-party Social Media Service__ means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
- __Website__ refers to ardency, accessible from [https://ardency.io](https://ardency.io)
- __You__ means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

# Acknowledgment

These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.


You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.


Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.



















# Links to Other Websites

Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.

# Termination

We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately.


# Limitation of Liability

Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.

# "AS IS" and "AS AVAILABLE" Disclaimer

The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.

# Governing Law

The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.

# Disputes Resolution

If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.


# For European Union (EU) Users

If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.





# United States Legal Compliance

You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.


# Severability and Waiver

## Severability

If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

## Waiver

Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.

# Translation Interpretation

These Terms and Conditions may have been translated if We have made them available to You on our Service.
You agree that the original English text shall prevail in the case of a dispute.

# Changes to These Terms and Conditions

We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.

# Contact Us

If you have any questions about these Terms and Conditions, You can contact us:


- By email: hello@ardency.io`,Ar={title:"Terms and Conditions",description:"Terms and Conditions",created:new Date(165663e7),updated:new Date(16781472e5),image:"/img/vectors/terms-accept.svg",avatar:"/img/logo/icon.svg",author:"ardency",tags:["terms","documents"],language:"en"},_r={filePath:"/Users/goose/Spaces/pepeye/github/group/src/content/policy/terms.md",rawData:`
title: "Terms and Conditions"
description: "Terms and Conditions"
created: "Jul 01 2022"
updated: "Mar 07 2023"
image: "/img/vectors/terms-accept.svg"
avatar: "/img/logo/icon.svg"
author: "ardency"
tags: ["terms", "documents"]
language: "en"`}});var An={};q(An,{Content:()=>Sn,compiledContent:()=>Br,default:()=>Sn,file:()=>kn,frontmatter:()=>Fn,getHeadings:()=>Yr,images:()=>qt,rawContent:()=>Tr,url:()=>En});function Pr(e){return e.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(i,n)=>Q({src:qt[n].src,...qt[n].attributes}))}function Tr(){return`
Wnat to submit an article and get full creditation? Here is a sample of some basic Markdown syntax that can be used when writing content in Markdown. 

Don't forget to share a logo/avatar and suggested tags too.

## Headings

The following HTML \`<h1>\`\u2014\`<h6>\` elements represent six levels of section headings. \`<h1>\` is the highest section level while \`<h6>\` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![This is a placeholder image description](/img/photo/posts/3.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a \`footer\` or \`cite\` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> \u2014 <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | \`code\` |

## Code Blocks

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
\`\`\`

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements \u2014 sub, sup, mark

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.`}function Br(){return Cn}function Yr(){return[{depth:2,slug:"headings",text:"Headings"},{depth:1,slug:"h1",text:"H1"},{depth:2,slug:"h2",text:"H2"},{depth:3,slug:"h3",text:"H3"},{depth:4,slug:"h4",text:"H4"},{depth:5,slug:"h5",text:"H5"},{depth:6,slug:"h6",text:"H6"},{depth:2,slug:"paragraph",text:"Paragraph"},{depth:2,slug:"images",text:"Images"},{depth:2,slug:"blockquotes",text:"Blockquotes"},{depth:3,slug:"blockquote-without-attribution",text:"Blockquote without attribution"},{depth:4,slug:"blockquote-with-attribution",text:"Blockquote with attribution"},{depth:2,slug:"tables",text:"Tables"},{depth:2,slug:"code-blocks",text:"Code Blocks"},{depth:2,slug:"list-types",text:"List Types"},{depth:4,slug:"ordered-list",text:"Ordered List"},{depth:4,slug:"unordered-list",text:"Unordered List"},{depth:4,slug:"nested-list",text:"Nested list"},{depth:2,slug:"other-elements--sub-sup-mark",text:"Other Elements \u2014 sub, sup, mark"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}async function Sn(){let{layout:e,...i}=Fn;return i.file=kn,i.url=En,X(Z,{"set:html":Cn})}var ou,su,qt,Cn,Fn,kn,En,_n=T(()=>{ve();ou=W(oe(),1),su=W(se(),1);re();ce();le();ue();qt={};Cn=Pr(`<p>Wnat to submit an article and get full creditation? Here is a sample of some basic Markdown syntax that can be used when writing content in Markdown.</p>
<p>Don\u2019t forget to share a logo/avatar and suggested tags too.</p>
<h2 id="headings">Headings</h2>
<p>The following HTML <code>&#x3C;h1></code>\u2014<code>&#x3C;h6></code> elements represent six levels of section headings. <code>&#x3C;h1></code> is the highest section level while <code>&#x3C;h6></code> is the lowest.</p>
<h1 id="h1">H1</h1>
<h2 id="h2">H2</h2>
<h3 id="h3">H3</h3>
<h4 id="h4">H4</h4>
<h5 id="h5">H5</h5>
<h6 id="h6">H6</h6>
<h2 id="paragraph">Paragraph</h2>
<p>Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.</p>
<p>Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.</p>
<h2 id="images">Images</h2>
<p><img src="/img/photo/posts/3.jpg" alt="This is a placeholder image description"></p>
<h2 id="blockquotes">Blockquotes</h2>
<p>The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a <code>footer</code> or <code>cite</code> element, and optionally with in-line changes such as annotations and abbreviations.</p>
<h3 id="blockquote-without-attribution">Blockquote without attribution</h3>
<blockquote>
<p>Tiam, ad mint andaepu dandae nostion secatur sequo quae.<br>
<strong>Note</strong> that you can use <em>Markdown syntax</em> within a blockquote.</p>
</blockquote>
<h4 id="blockquote-with-attribution">Blockquote with attribution</h4>
<blockquote>
<p>Don\u2019t communicate by sharing memory, share memory by communicating.<br>
\u2014 <cite>Rob Pike<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup></cite></p>
</blockquote>
<h2 id="tables">Tables</h2>















<table><thead><tr><th>Italics</th><th>Bold</th><th>Code</th></tr></thead><tbody><tr><td><em>italics</em></td><td><strong>bold</strong></td><td><code>code</code></td></tr></tbody></table>
<h2 id="code-blocks">Code Blocks</h2>
<pre is:raw="" class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">&#x3C;!</span><span style="color: #7EE787">DOCTYPE</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">html</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">&#x3C;</span><span style="color: #7EE787">html</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">lang</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">"en"</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">  &#x3C;</span><span style="color: #7EE787">head</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">    &#x3C;</span><span style="color: #7EE787">meta</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">charset</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">"utf-8"</span><span style="color: #C9D1D9"> /></span></span>
<span class="line"><span style="color: #C9D1D9">    &#x3C;</span><span style="color: #7EE787">title</span><span style="color: #C9D1D9">>Example HTML5 Document&#x3C;/</span><span style="color: #7EE787">title</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">  &#x3C;/</span><span style="color: #7EE787">head</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">  &#x3C;</span><span style="color: #7EE787">body</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">    &#x3C;</span><span style="color: #7EE787">p</span><span style="color: #C9D1D9">>Test&#x3C;/</span><span style="color: #7EE787">p</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">  &#x3C;/</span><span style="color: #7EE787">body</span><span style="color: #C9D1D9">></span></span>
<span class="line"><span style="color: #C9D1D9">&#x3C;/</span><span style="color: #7EE787">html</span><span style="color: #C9D1D9">></span></span></code></pre>
<h2 id="list-types">List Types</h2>
<h4 id="ordered-list">Ordered List</h4>
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
<h4 id="unordered-list">Unordered List</h4>
<ul>
<li>List item</li>
<li>Another item</li>
<li>And another item</li>
</ul>
<h4 id="nested-list">Nested list</h4>
<ul>
<li>Fruit
<ul>
<li>Apple</li>
<li>Orange</li>
<li>Banana</li>
</ul>
</li>
<li>Dairy
<ul>
<li>Milk</li>
<li>Cheese</li>
</ul>
</li>
</ul>
<h2 id="other-elements--sub-sup-mark">Other Elements \u2014 sub, sup, mark</h2>
<p>H<sub>2</sub>O</p>
<p>X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup></p>
<p>Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>The above quote is excerpted from Rob Pike\u2019s <a href="https://www.youtube.com/watch?v=PAAkCSZUG1c">talk</a> during Gopherfest, November 18, 2015. <a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">\u21A9</a></p>
</li>
</ol>
</section>`),Fn={title:"Want to contribute, submit an article?",description:"Some basic Markdown syntax that can be used when writing Markdown content.",created:"Jul 01 2022",updated:"Mar 07 2023",image:"/img/vectors/content.svg",avatar:"/img/logo/icon.svg",author:"ardency",tags:["astro","markdown"],language:"en"},kn="/Users/goose/Spaces/pepeye/github/group/src/content/blog/markdown-styling.md",En=void 0;Sn[Symbol.for("astro.needsHeadRendering")]=!0});var Pn={};q(Pn,{collectedLinks:()=>$r,collectedScripts:()=>Ur,collectedStyles:()=>Or,getMod:()=>jr});async function jr(){return Promise.resolve().then(()=>(_n(),An))}var $r,Or,Ur,Tn=T(()=>{$r="@@ASTRO-LINKS@@",Or="@@ASTRO-STYLES@@",Ur="@@ASTRO-SCRIPTS@@"});var Un={};q(Un,{Content:()=>On,compiledContent:()=>qr,default:()=>On,file:()=>jn,frontmatter:()=>Yn,getHeadings:()=>Ir,images:()=>It,rawContent:()=>Rr,url:()=>$n});function Wr(e){return e.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(i,n)=>Q({src:It[n].src,...It[n].attributes}))}function Rr(){return`
# Much Further to Go

Venture capital is an essential source of funding for entrepreneurs looking to start and grow their businesses. However, ethnic minorities face significant barriers when it comes to securing venture capital funding. Despite some progress in recent years, the statistics still show a significant lack of funding for ethnic minority-led startups. This issue is not only a matter of social justice but also a missed opportunity for the venture capital industry to tap into a diverse and lucrative market. In this blog, we will explore the challenges faced by ethnic minority entrepreneurs and the steps that need to be taken to promote inclusivity in the venture capital industry.

Ethnic minority entrepreneurs face a wide range of challenges when it comes to securing venture capital funding. These challenges can be both structural and societal and often stem from systemic biases and historical inequalities. Here are some of the key challenges faced by ethnic minority entrepreneurs:

- Bias and discrimination: One of the biggest challenges faced by ethnic minority entrepreneurs is bias and discrimination. Studies have shown that venture capitalists are more likely to invest in entrepreneurs who are like them in terms of race, gender, and social background. This means that ethnic minority entrepreneurs may face bias and discrimination when seeking funding, even if they have a strong business idea and a solid track record.
- Lack of networks: Another challenge faced by ethnic minority entrepreneurs is a lack of networks. Access to networks is essential for securing venture capital funding, as investors often rely on referrals from their existing networks to find new investment opportunities. However, ethnic minority entrepreneurs may face barriers to accessing these networks, particularly if they come from underrepresented communities or have limited social capital.
- Limited access to mentorship and support: Ethnic minority entrepreneurs may also face limited access to mentorship and support, which can be crucial for success in the startup world. Many successful entrepreneurs credit their mentors with helping them navigate the challenges of building a business, but ethnic minority entrepreneurs may struggle to find mentors who understand their unique challenges and experiences.
- Cultural differences: Cultural differences can also pose challenges for ethnic minority entrepreneurs, particularly if they come from communities with different business practices or values. For example, some investors may be unfamiliar with business practices that are common in certain ethnic communities, which can make it harder for entrepreneurs from those communities to secure funding.
- Lack of representation: Finally, a lack of representation in the venture capital industry itself can make it harder for ethnic minority entrepreneurs to secure funding. Research has shown that ethnic minority investors are more likely to invest in ethnic minority entrepreneurs, so a lack of diversity in the investor pool can contribute to the lack of funding for ethnic minority entrepreneurs.

In North America, there has been a persistent lack of access to venture capital funding for ethnic minority founders, particularly for black founders. According to a report by RateMyInvestor and DiversityVC, black founders received only 1% of total venture capital funding in the US in 2020, despite making up 13% of the US population. This trend has persisted over the last decade, with black founders receiving only 1% of total venture capital funding in the US between 2010 and 2018, according to a report by CB Insights. Similarly, in Canada, a study by the Brookfield Institute found that racialized entrepreneurs received only 4.1% of venture capital funding between 2015 and 2019.

In Europe, the situation is not much different. According to a study by DiversityVC, only 1.6% of venture capital funding went to black and ethnic minority founders in the UK in 2019, despite making up 14% of the UK population. The situation is even worse in other European countries, with black founders receiving less than 0.1% of venture capital funding in France and Germany. A report by Atomico also found that only 1% of founders of European startups backed by venture capital were black, and only 2.3% were of Middle Eastern and North African descent. Overall, the lack of access to venture capital funding for ethnic minority founders in North America and Europe over the last 10 years highlights the urgent need for greater inclusivity in the venture capital industry.

> 2\xA2 for every dollar invested in venture capital over the past 10 years has gone to all-ethnic teams.
> \u2014 <cite>State of European Tech[^1]</cite>

[^1]: [State of European Tech, 2020 - State of Diversity & Inclusion](https://2020.stateofeuropeantech.com/chapter/diversity-inclusion/article/diversity-inclusion/)

To promote inclusivity in the venture capital industry and ensure that ethnic minority entrepreneurs have equal access to funding, there are several steps that need to be taken.

1. There needs to be greater awareness and education around bias and discrimination in the industry. 
2. Greater investment in networks and support systems for ethnic minority entrepreneurs. 

Many of the existing biases can be addressed via through diversity and inclusion training for investors, as well as by increasing the diversity of the venture capital industry itself.

Overall this is the reason why \`ardency\` was formed - in response to many of the challenges faced by this effectively marginalised group. Looking forwards, the hope is to provide mentorship programs, setup up a business accelerators (more to come shortly), and create networking events specifically designed to support underrepresented entrepreneurs.
`}function qr(){return Bn}function Ir(){return[{depth:1,slug:"much-further-to-go",text:"Much Further to Go"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}async function On(){let{layout:e,...i}=Yn;return i.file=jn,i.url=$n,X(Z,{"set:html":Bn})}var du,mu,It,Bn,Yn,jn,$n,Wn=T(()=>{ve();du=W(oe(),1),mu=W(se(),1);re();ce();le();ue();It={};Bn=Wr(`<h1 id="much-further-to-go">Much Further to Go</h1>
<p>Venture capital is an essential source of funding for entrepreneurs looking to start and grow their businesses. However, ethnic minorities face significant barriers when it comes to securing venture capital funding. Despite some progress in recent years, the statistics still show a significant lack of funding for ethnic minority-led startups. This issue is not only a matter of social justice but also a missed opportunity for the venture capital industry to tap into a diverse and lucrative market. In this blog, we will explore the challenges faced by ethnic minority entrepreneurs and the steps that need to be taken to promote inclusivity in the venture capital industry.</p>
<p>Ethnic minority entrepreneurs face a wide range of challenges when it comes to securing venture capital funding. These challenges can be both structural and societal and often stem from systemic biases and historical inequalities. Here are some of the key challenges faced by ethnic minority entrepreneurs:</p>
<ul>
<li>Bias and discrimination: One of the biggest challenges faced by ethnic minority entrepreneurs is bias and discrimination. Studies have shown that venture capitalists are more likely to invest in entrepreneurs who are like them in terms of race, gender, and social background. This means that ethnic minority entrepreneurs may face bias and discrimination when seeking funding, even if they have a strong business idea and a solid track record.</li>
<li>Lack of networks: Another challenge faced by ethnic minority entrepreneurs is a lack of networks. Access to networks is essential for securing venture capital funding, as investors often rely on referrals from their existing networks to find new investment opportunities. However, ethnic minority entrepreneurs may face barriers to accessing these networks, particularly if they come from underrepresented communities or have limited social capital.</li>
<li>Limited access to mentorship and support: Ethnic minority entrepreneurs may also face limited access to mentorship and support, which can be crucial for success in the startup world. Many successful entrepreneurs credit their mentors with helping them navigate the challenges of building a business, but ethnic minority entrepreneurs may struggle to find mentors who understand their unique challenges and experiences.</li>
<li>Cultural differences: Cultural differences can also pose challenges for ethnic minority entrepreneurs, particularly if they come from communities with different business practices or values. For example, some investors may be unfamiliar with business practices that are common in certain ethnic communities, which can make it harder for entrepreneurs from those communities to secure funding.</li>
<li>Lack of representation: Finally, a lack of representation in the venture capital industry itself can make it harder for ethnic minority entrepreneurs to secure funding. Research has shown that ethnic minority investors are more likely to invest in ethnic minority entrepreneurs, so a lack of diversity in the investor pool can contribute to the lack of funding for ethnic minority entrepreneurs.</li>
</ul>
<p>In North America, there has been a persistent lack of access to venture capital funding for ethnic minority founders, particularly for black founders. According to a report by RateMyInvestor and DiversityVC, black founders received only 1% of total venture capital funding in the US in 2020, despite making up 13% of the US population. This trend has persisted over the last decade, with black founders receiving only 1% of total venture capital funding in the US between 2010 and 2018, according to a report by CB Insights. Similarly, in Canada, a study by the Brookfield Institute found that racialized entrepreneurs received only 4.1% of venture capital funding between 2015 and 2019.</p>
<p>In Europe, the situation is not much different. According to a study by DiversityVC, only 1.6% of venture capital funding went to black and ethnic minority founders in the UK in 2019, despite making up 14% of the UK population. The situation is even worse in other European countries, with black founders receiving less than 0.1% of venture capital funding in France and Germany. A report by Atomico also found that only 1% of founders of European startups backed by venture capital were black, and only 2.3% were of Middle Eastern and North African descent. Overall, the lack of access to venture capital funding for ethnic minority founders in North America and Europe over the last 10 years highlights the urgent need for greater inclusivity in the venture capital industry.</p>
<blockquote>
<p>2\xA2 for every dollar invested in venture capital over the past 10 years has gone to all-ethnic teams.
\u2014 <cite>State of European Tech<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup></cite></p>
</blockquote>
<p>To promote inclusivity in the venture capital industry and ensure that ethnic minority entrepreneurs have equal access to funding, there are several steps that need to be taken.</p>
<ol>
<li>There needs to be greater awareness and education around bias and discrimination in the industry.</li>
<li>Greater investment in networks and support systems for ethnic minority entrepreneurs.</li>
</ol>
<p>Many of the existing biases can be addressed via through diversity and inclusion training for investors, as well as by increasing the diversity of the venture capital industry itself.</p>
<p>Overall this is the reason why <code>ardency</code> was formed - in response to many of the challenges faced by this effectively marginalised group. Looking forwards, the hope is to provide mentorship programs, setup up a business accelerators (more to come shortly), and create networking events specifically designed to support underrepresented entrepreneurs.</p>
<section data-footnotes="" class="footnotes"><h2 class="sr-only" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p><a href="https://2020.stateofeuropeantech.com/chapter/diversity-inclusion/article/diversity-inclusion/">State of European Tech, 2020 - State of Diversity &#x26; Inclusion</a> <a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">\u21A9</a></p>
</li>
</ol>
</section>`),Yn={title:"Much Further to Go",description:"Addressing the wider diversity issues facing ethnic founders across the global venture capital industry.",created:"Jul 01 2022",updated:"Mar 07 2023",image:"/img/vectors/investing.svg",avatar:"/img/logo/icon.svg",author:"ardency",tags:["investing","funding","vc"],language:"en"},jn="/Users/goose/Spaces/pepeye/github/group/src/content/blog/state-of-european-tech.md",$n=void 0;On[Symbol.for("astro.needsHeadRendering")]=!0});var Rn={};q(Rn,{collectedLinks:()=>Lr,collectedScripts:()=>Nr,collectedStyles:()=>zr,getMod:()=>Mr});async function Mr(){return Promise.resolve().then(()=>(Wn(),Un))}var Lr,zr,Nr,qn=T(()=>{Lr="@@ASTRO-LINKS@@",zr="@@ASTRO-STYLES@@",Nr="@@ASTRO-SCRIPTS@@"});var Hn={};q(Hn,{Content:()=>Nn,compiledContent:()=>Vr,default:()=>Nn,file:()=>Ln,frontmatter:()=>Mn,getHeadings:()=>Jr,images:()=>Mt,rawContent:()=>Gr,url:()=>zn});function Hr(e){return e.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(i,n)=>Q({src:Mt[n].src,...Mt[n].attributes}))}function Gr(){return`
![This is a placeholder image description](/img/vectors/private-data.svg)

# Privacy Policy

Last updated: March 16, 2023

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the [Free Privacy Policy Generator](https://www.freeprivacypolicy.com/free-privacy-policy-generator/).

# Interpretation and Definitions

## Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

## Definitions

For the purposes of this Privacy Policy:

- __Account__ means a unique account created for You to access our Service or parts of our Service.
- __Affiliate__ means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.



- __Company__ (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Ardency Group Limited, 7, Bell Yard, London, WC2A 2JR.



- __Cookies__ are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.

- __Country__ refers to:  United Kingdom

- __Device__ means any device that can access the Service such as a computer, a cellphone or a digital tablet.



- __Personal Data__ is any information that relates to an identified or identifiable individual.



- __Service__ refers to the Website.

- __Service Provider__ means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
	

- __Usage Data__ refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).

- __Website__ refers to ardency, accessible from [https://ardency.io](https://ardency.io)

- __You__ means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.



# Collecting and Using Your Personal Data

## Types of Data Collected

### Personal Data

While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

- Email address
- First name and last name




- Usage Data



### Usage Data

Usage Data is collected automatically when using the Service.

Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.






### Tracking Technologies and Cookies

We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:

- __Cookies or Browser Cookies.__ A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
- __Web Beacons.__ Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).

Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the [Free Privacy Policy website](https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking) article.

We use both Session and Persistent Cookies for the purposes set out below:

- __Necessary / Essential Cookies__

	Type: Session Cookies

	Administered by: Us

	Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
- __Cookies Policy / Notice Acceptance Cookies__

	Type: Persistent Cookies

	Administered by: Us

	Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
- __Functionality Cookies__

	Type: Persistent Cookies

	Administered by: Us

	Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.



For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.


## Use of Your Personal Data

The Company may use Personal Data for the following purposes:

- __To provide and maintain our Service__, including to monitor the usage of our Service.
- __To manage Your Account:__ to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
- __For the performance of a contract:__ the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
- __To contact You:__ To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
- __To provide You__ with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
- __To manage Your requests:__ To attend and manage Your requests to Us.

- __For business transfers:__ We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
- __For other purposes__: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience. 

We may share Your personal information in the following situations:

- __With Service Providers:__ We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.
- __For business transfers:__ We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
- __With Affiliates:__ We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
- __With business partners:__ We may share Your information with Our business partners to offer You certain products, services or promotions.
- __With other users:__ when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. 
- __With Your consent__: We may disclose Your personal information for any other purpose with Your consent.

## Retention of Your Personal Data

The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.

## Transfer of Your Personal Data

Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to \u2014 and maintained on \u2014 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.

Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.

The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.

## Delete Your Personal Data

You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.

Our Service may give You the ability to delete certain information about You from within the Service.

You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.

Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.

## Disclosure of Your Personal Data

### Business Transactions

If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.

### Law enforcement

Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).

### Other legal requirements

The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:

- Comply with a legal obligation
- Protect and defend the rights or property of the Company
- Prevent or investigate possible wrongdoing in connection with the Service
- Protect the personal safety of Users of the Service or the public
- Protect against legal liability

## Security of Your Personal Data

The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
















# Children's Privacy

Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.

If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.


# Links to Other Websites

Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.

# Changes to this Privacy Policy

We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

# Contact Us

If you have any questions about this Privacy Policy, You can contact us:


- By email: hello@ardency.io`}function Vr(){return In}function Jr(){return[{depth:1,slug:"privacy-policy",text:"Privacy Policy"},{depth:1,slug:"interpretation-and-definitions",text:"Interpretation and Definitions"},{depth:2,slug:"interpretation",text:"Interpretation"},{depth:2,slug:"definitions",text:"Definitions"},{depth:1,slug:"collecting-and-using-your-personal-data",text:"Collecting and Using Your Personal Data"},{depth:2,slug:"types-of-data-collected",text:"Types of Data Collected"},{depth:3,slug:"personal-data",text:"Personal Data"},{depth:3,slug:"usage-data",text:"Usage Data"},{depth:3,slug:"tracking-technologies-and-cookies",text:"Tracking Technologies and Cookies"},{depth:2,slug:"use-of-your-personal-data",text:"Use of Your Personal Data"},{depth:2,slug:"retention-of-your-personal-data",text:"Retention of Your Personal Data"},{depth:2,slug:"transfer-of-your-personal-data",text:"Transfer of Your Personal Data"},{depth:2,slug:"delete-your-personal-data",text:"Delete Your Personal Data"},{depth:2,slug:"disclosure-of-your-personal-data",text:"Disclosure of Your Personal Data"},{depth:3,slug:"business-transactions",text:"Business Transactions"},{depth:3,slug:"law-enforcement",text:"Law enforcement"},{depth:3,slug:"other-legal-requirements",text:"Other legal requirements"},{depth:2,slug:"security-of-your-personal-data",text:"Security of Your Personal Data"},{depth:1,slug:"childrens-privacy",text:"Children\u2019s Privacy"},{depth:1,slug:"links-to-other-websites",text:"Links to Other Websites"},{depth:1,slug:"changes-to-this-privacy-policy",text:"Changes to this Privacy Policy"},{depth:1,slug:"contact-us",text:"Contact Us"}]}async function Nn(){let{layout:e,...i}=Mn;return i.file=Ln,i.url=zn,X(Z,{"set:html":In})}var Du,bu,Mt,In,Mn,Ln,zn,Gn=T(()=>{ve();Du=W(oe(),1),bu=W(se(),1);re();ce();le();ue();Mt={};In=Hr(`<p><img src="/img/vectors/private-data.svg" alt="This is a placeholder image description"></p>
<h1 id="privacy-policy">Privacy Policy</h1>
<p>Last updated: March 16, 2023</p>
<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/">Free Privacy Policy Generator</a>.</p>
<h1 id="interpretation-and-definitions">Interpretation and Definitions</h1>
<h2 id="interpretation">Interpretation</h2>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h2 id="definitions">Definitions</h2>
<p>For the purposes of this Privacy Policy:</p>
<ul>
<li>
<p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
</li>
<li>
<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where \u201Ccontrol\u201D means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either \u201Cthe Company\u201D, \u201CWe\u201D, \u201CUs\u201D or \u201COur\u201D in this Agreement) refers to Ardency Group Limited, 7, Bell Yard, London, WC2A 2JR.</p>
</li>
<li>
<p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
</li>
<li>
<p><strong>Country</strong> refers to:  United Kingdom</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
</li>
<li>
<p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Website.</p>
</li>
<li>
<p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
</li>
<li>
<p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
</li>
<li>
<p><strong>Website</strong> refers to ardency, accessible from <a href="https://ardency.io">https://ardency.io</a></p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h1 id="collecting-and-using-your-personal-data">Collecting and Using Your Personal Data</h1>
<h2 id="types-of-data-collected">Types of Data Collected</h2>
<h3 id="personal-data">Personal Data</h3>
<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
<ul>
<li>
<p>Email address</p>
</li>
<li>
<p>First name and last name</p>
</li>
<li>
<p>Usage Data</p>
</li>
</ul>
<h3 id="usage-data">Usage Data</h3>
<p>Usage Data is collected automatically when using the Service.</p>
<p>Usage Data may include information such as Your Device\u2019s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
<h3 id="tracking-technologies-and-cookies">Tracking Technologies and Cookies</h3>
<p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
<ul>
<li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
<li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
</ul>
<p>Cookies can be \u201CPersistent\u201D or \u201CSession\u201D Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking">Free Privacy Policy website</a> article.</p>
<p>We use both Session and Persistent Cookies for the purposes set out below:</p>
<ul>
<li>
<p><strong>Necessary / Essential Cookies</strong></p>
<p>Type: Session Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
</li>
<li>
<p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
</li>
<li>
<p><strong>Functionality Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
</li>
</ul>
<p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
<h2 id="use-of-your-personal-data">Use of Your Personal Data</h2>
<p>The Company may use Personal Data for the following purposes:</p>
<ul>
<li>
<p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
</li>
<li>
<p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
</li>
<li>
<p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
</li>
<li>
<p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application\u2019s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
</li>
<li>
<p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
</li>
<li>
<p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
</li>
<li>
<p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
</li>
<li>
<p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
</li>
</ul>
<p>We may share Your personal information in the following situations:</p>
<ul>
<li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
<li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
<li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
<li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
<li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
<li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
</ul>
<h2 id="retention-of-your-personal-data">Retention of Your Personal Data</h2>
<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
<h2 id="transfer-of-your-personal-data">Transfer of Your Personal Data</h2>
<p>Your information, including Personal Data, is processed at the Company\u2019s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to \u2014 and maintained on \u2014 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
<h2 id="delete-your-personal-data">Delete Your Personal Data</h2>
<p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
<p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
<p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
<p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
<h2 id="disclosure-of-your-personal-data">Disclosure of Your Personal Data</h2>
<h3 id="business-transactions">Business Transactions</h3>
<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h3 id="law-enforcement">Law enforcement</h3>
<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h3 id="other-legal-requirements">Other legal requirements</h3>
<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
<ul>
<li>Comply with a legal obligation</li>
<li>Protect and defend the rights or property of the Company</li>
<li>Prevent or investigate possible wrongdoing in connection with the Service</li>
<li>Protect the personal safety of Users of the Service or the public</li>
<li>Protect against legal liability</li>
</ul>
<h2 id="security-of-your-personal-data">Security of Your Personal Data</h2>
<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
<h1 id="childrens-privacy">Children\u2019s Privacy</h1>
<p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
<p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent\u2019s consent before We collect and use that information.</p>
<h1 id="links-to-other-websites">Links to Other Websites</h1>
<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party\u2019s site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
<h1 id="changes-to-this-privacy-policy">Changes to this Privacy Policy</h1>
<p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
<p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the \u201CLast updated\u201D date at the top of this Privacy Policy.</p>
<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
<h1 id="contact-us">Contact Us</h1>
<p>If you have any questions about this Privacy Policy, You can contact us:</p>
<ul>
<li>By email: <a href="mailto:hello@ardency.io">hello@ardency.io</a></li>
</ul>`),Mn={title:"Privacy Policy",description:"Privacy Policy",created:"Jul 01 2022",updated:"Mar 07 2023",image:"/img/vectors/private-data.svg",avatar:"/img/logo/icon.svg",author:"ardency",tags:["policy","documents"],language:"en"},Ln="/Users/goose/Spaces/pepeye/github/group/src/content/policy/privacy.md",zn=void 0;Nn[Symbol.for("astro.needsHeadRendering")]=!0});var Vn={};q(Vn,{collectedLinks:()=>Xr,collectedScripts:()=>Qr,collectedStyles:()=>Zr,getMod:()=>Kr});async function Kr(){return Promise.resolve().then(()=>(Gn(),Hn))}var Xr,Zr,Qr,Jn=T(()=>{Xr="@@ASTRO-LINKS@@",Zr="@@ASTRO-STYLES@@",Qr="@@ASTRO-SCRIPTS@@"});var ta={};q(ta,{Content:()=>ea,compiledContent:()=>ic,default:()=>ea,file:()=>Zn,frontmatter:()=>Xn,getHeadings:()=>nc,images:()=>Lt,rawContent:()=>tc,url:()=>Qn});function ec(e){return e.replaceAll(/__ASTRO_IMAGE_="(.+)"/gm,(i,n)=>Q({src:Lt[n].src,...Lt[n].attributes}))}function tc(){return`
![This is a placeholder image description](/img/vectors/terms-accept.svg)

# Terms and Conditions

Last updated: March 16, 2023

Please read these terms and conditions carefully before using Our Service.

# Interpretation and Definitions

## Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

## Definitions

For the purposes of these Terms and Conditions:



- __Affiliate__ means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.

- __Country__ refers to:  United Kingdom
- __Company__ (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Ardency Group Limited, 7, Bell Yard, London, WC2A 2JR.

- __Device__ means any device that can access the Service such as a computer, a cellphone or a digital tablet.







- __Service__ refers to the Website.


- __Terms and Conditions__ (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the [Free Terms and Conditions Generator](https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/).
- __Third-party Social Media Service__ means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
- __Website__ refers to ardency, accessible from [https://ardency.io](https://ardency.io)
- __You__ means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

# Acknowledgment

These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.


You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.


Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.



















# Links to Other Websites

Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.

# Termination

We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately.


# Limitation of Liability

Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.

# "AS IS" and "AS AVAILABLE" Disclaimer

The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.

# Governing Law

The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.

# Disputes Resolution

If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.


# For European Union (EU) Users

If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.





# United States Legal Compliance

You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.


# Severability and Waiver

## Severability

If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

## Waiver

Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.

# Translation Interpretation

These Terms and Conditions may have been translated if We have made them available to You on our Service.
You agree that the original English text shall prevail in the case of a dispute.

# Changes to These Terms and Conditions

We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.

# Contact Us

If you have any questions about these Terms and Conditions, You can contact us:


- By email: hello@ardency.io`}function ic(){return Kn}function nc(){return[{depth:1,slug:"terms-and-conditions",text:"Terms and Conditions"},{depth:1,slug:"interpretation-and-definitions",text:"Interpretation and Definitions"},{depth:2,slug:"interpretation",text:"Interpretation"},{depth:2,slug:"definitions",text:"Definitions"},{depth:1,slug:"acknowledgment",text:"Acknowledgment"},{depth:1,slug:"links-to-other-websites",text:"Links to Other Websites"},{depth:1,slug:"termination",text:"Termination"},{depth:1,slug:"limitation-of-liability",text:"Limitation of Liability"},{depth:1,slug:"as-is-and-as-available-disclaimer",text:"\u201CAS IS\u201D and \u201CAS AVAILABLE\u201D Disclaimer"},{depth:1,slug:"governing-law",text:"Governing Law"},{depth:1,slug:"disputes-resolution",text:"Disputes Resolution"},{depth:1,slug:"for-european-union-eu-users",text:"For European Union (EU) Users"},{depth:1,slug:"united-states-legal-compliance",text:"United States Legal Compliance"},{depth:1,slug:"severability-and-waiver",text:"Severability and Waiver"},{depth:2,slug:"severability",text:"Severability"},{depth:2,slug:"waiver",text:"Waiver"},{depth:1,slug:"translation-interpretation",text:"Translation Interpretation"},{depth:1,slug:"changes-to-these-terms-and-conditions",text:"Changes to These Terms and Conditions"},{depth:1,slug:"contact-us",text:"Contact Us"}]}async function ea(){let{layout:e,...i}=Xn;return i.file=Zn,i.url=Qn,X(Z,{"set:html":Kn})}var Eu,Su,Lt,Kn,Xn,Zn,Qn,ia=T(()=>{ve();Eu=W(oe(),1),Su=W(se(),1);re();ce();le();ue();Lt={};Kn=ec(`<p><img src="/img/vectors/terms-accept.svg" alt="This is a placeholder image description"></p>
<h1 id="terms-and-conditions">Terms and Conditions</h1>
<p>Last updated: March 16, 2023</p>
<p>Please read these terms and conditions carefully before using Our Service.</p>
<h1 id="interpretation-and-definitions">Interpretation and Definitions</h1>
<h2 id="interpretation">Interpretation</h2>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h2 id="definitions">Definitions</h2>
<p>For the purposes of these Terms and Conditions:</p>
<ul>
<li>
<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where \u201Ccontrol\u201D means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
</li>
<li>
<p><strong>Country</strong> refers to:  United Kingdom</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either \u201Cthe Company\u201D, \u201CWe\u201D, \u201CUs\u201D or \u201COur\u201D in this Agreement) refers to Ardency Group Limited, 7, Bell Yard, London, WC2A 2JR.</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Website.</p>
</li>
<li>
<p><strong>Terms and Conditions</strong> (also referred as \u201CTerms\u201D) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/">Free Terms and Conditions Generator</a>.</p>
</li>
<li>
<p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
</li>
<li>
<p><strong>Website</strong> refers to ardency, accessible from <a href="https://ardency.io">https://ardency.io</a></p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h1 id="acknowledgment">Acknowledgment</h1>
<p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
<p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
<p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
<p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
<p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
<h1 id="links-to-other-websites">Links to Other Websites</h1>
<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
<p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
<p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
<h1 id="termination">Termination</h1>
<p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
<p>Upon termination, Your right to use the Service will cease immediately.</p>
<h1 id="limitation-of-liability">Limitation of Liability</h1>
<p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven\u2019t purchased anything through the Service.</p>
<p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
<p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party\u2019s liability will be limited to the greatest extent permitted by law.</p>
<h1 id="as-is-and-as-available-disclaimer">\u201CAS IS\u201D and \u201CAS AVAILABLE\u201D Disclaimer</h1>
<p>The Service is provided to You \u201CAS IS\u201D and \u201CAS AVAILABLE\u201D and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
<p>Without limiting the foregoing, neither the Company nor any of the company\u2019s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
<p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
<h1 id="governing-law">Governing Law</h1>
<p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
<h1 id="disputes-resolution">Disputes Resolution</h1>
<p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
<h1 id="for-european-union-eu-users">For European Union (EU) Users</h1>
<p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
<h1 id="united-states-legal-compliance">United States Legal Compliance</h1>
<p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a \u201Cterrorist supporting\u201D country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
<h1 id="severability-and-waiver">Severability and Waiver</h1>
<h2 id="severability">Severability</h2>
<p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
<h2 id="waiver">Waiver</h2>
<p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party\u2019s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
<h1 id="translation-interpretation">Translation Interpretation</h1>
<p>These Terms and Conditions may have been translated if We have made them available to You on our Service.
You agree that the original English text shall prevail in the case of a dispute.</p>
<h1 id="changes-to-these-terms-and-conditions">Changes to These Terms and Conditions</h1>
<p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days\u2019 notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
<p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
<h1 id="contact-us">Contact Us</h1>
<p>If you have any questions about these Terms and Conditions, You can contact us:</p>
<ul>
<li>By email: <a href="mailto:hello@ardency.io">hello@ardency.io</a></li>
</ul>`),Xn={title:"Terms and Conditions",description:"Terms and Conditions",created:"Jul 01 2022",updated:"Mar 07 2023",image:"/img/vectors/terms-accept.svg",avatar:"/img/logo/icon.svg",author:"ardency",tags:["terms","documents"],language:"en"},Zn="/Users/goose/Spaces/pepeye/github/group/src/content/policy/terms.md",Qn=void 0;ea[Symbol.for("astro.needsHeadRendering")]=!0});var na={};q(na,{collectedLinks:()=>oc,collectedScripts:()=>rc,collectedStyles:()=>sc,getMod:()=>ac});async function ac(){return Promise.resolve().then(()=>(ia(),ta))}var oc,sc,rc,aa=T(()=>{oc="@@ASTRO-LINKS@@",sc="@@ASTRO-STYLES@@",rc="@@ASTRO-SCRIPTS@@"});ve();ve();var cc=_(),oa=S(async(e,i,n)=>{let t=e.createAstro(cc,i,n);return t.self=oa,f`${P(e)}<div class="megamenu" x-bind:class="{
    'is-active': megamenuOpened,
    '': !megamenuOpened,
  }">
  <!--Megamenu 1-->
  <div x-show="openedMegamenu === 'megamenu-1'" class="megamenu-inner">
    <button class="close-button" x-on:click="megamenuOpened = !megamenuOpened">
      <i class="iconify" data-icon="lucide:arrow-left"></i>
    </button>
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="megamenu-block">
            <div class="media">
              <div class="media-left text-primary">
                <i class="iconify" data-icon="ph:grid-four-duotone"></i>
              </div>
              <div class="media-content">
                <h3 class="text-rainbow">Expertise</h3>
                <p>
                  Support for product design, development buiild, funding or strategy needs.
                </p>
                <a class="action-link" href="/advisory">
                  <span>Explore</span>
                  <i class="iconify" data-icon="lucide:arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block has-margin">
            <h4 class="text-rainbow">Looking for</h4>
            <ul>
              <li>
                <a href="/advisory" class="slide-link is-default">
                  <span>Advisory</span>
                </a>
              </li>
              <li>
                <a href="/technology" class="slide-link is-default">
                  <span>Development</span>
                </a>
              </li>
              <li>
                <a href="/funding" class="slide-link is-default">
                  <span>Funding</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-6">
          <div class="megamenu-block">
            <div class="showcase">
              <a href="/technology" class="showcase-item">
                <img src="/img/menu/code.png" alt="showcase photo">
                <div class="showcase-content">
                  <div>
                    <h5 class="title is-6 is-narrow">Build with you</h5>
                    <p>ardency.io</p>
                  </div>
                  <i class="iconify" data-icon="ph:code-duotone"></i>
                </div>
              </a>
              <a href="/funding" class="showcase-item">
                <img src="/img/menu/plant.jpg" alt="showcase photo">
                <div class="showcase-content">
                  <div>
                    <h5 class="title is-6 is-narrow">We back you</h5>
                    <p>ardency.vc</p>
                  </div>
                  <i class="iconify" data-icon="ph:plant-duotone"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`},"/Users/goose/Spaces/pepeye/github/group/src/components/Megamenu.astro"),lc=_(),sa=S(async(e,i,n)=>{let t=e.createAstro(lc,i,n);return t.self=sa,f`${P(e)}<nav class="navbar is-transparent is-fixed-top is-fade" x-data="initNavbar()" x-init="initScrollAnchors()" x-on:mouseleave="megamenuOpened = false" x-on:scroll.window="scroll()" :class="{
        'is-scrolled': scrolled,
        '': !scrolled,
        'is-solid': mobileOpen || megamenuOpened,
        '': !mobileOpen || megamenuOpened
    }">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img class="navbar-logo light-image-block" src="/img/logo/ardency.svg" alt="Logo">
        <img class="navbar-logo dark-image-block" src="/img/logo/ardency-white.svg" alt="Logo">
      </a>
      <div class="navbar-burger" @click="openMobileMenu()">
        <div class="menu-toggle">
          <div class="icon-box-toggle is-navbar" :class="{
                'active': mobileOpen,
                '': !mobileOpen
            }">
            <div class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-menu b-centered-mobile b-centered-tablet-p" :class="{
          'is-active': mobileOpen,
          '': !mobileOpen
      }">
      <div class="navbar-start">
        <!-- Dropdown -->
       <a class="navbar-item" x-on:mouseover="megamenuOpened = true, openedMegamenu = 'megamenu-1'">
          <span> What we offer </span>
          <i class="iconify caret" data-icon="lucide:chevron-down"></i>
        </a>
        <a class="navbar-item" href="/blog"> Blog </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item is-mobile-centered">
          <label class="theme-toggle">
            <input type="checkbox" x-on:change="toggleTheme()" :checked="$store.app.isDark">
            <span class="theme-toggle-inner">
              <i class="sun-icon iconify" data-icon="feather:sun"></i>
              <i class="moon-icon iconify" data-icon="feather:moon"></i>
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
  ${C(e,"Megamenu",oa,{})}
</nav>`},"/Users/goose/Spaces/pepeye/github/group/src/components/Navbar.astro"),uc=_(),ra=S(async(e,i,n)=>{let t=e.createAstro(uc,i,n);return t.self=ra,f`${P(e)}<footer class="footer">
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <img class="footer-logo light-image-block" src="/img/logo/ardency.svg" alt="Logo">
        <img class="footer-logo dark-image-block" src="/img/logo/ardency-white.svg" alt="Logo">
        <!-- <p class="footer-text">
          ardency is a ...
        </p> -->
        <div class="socials">
          <a href="https://twitter.com/ardencyio" target="_blank">
            <i class="iconify" data-icon="fa:twitter"></i>
          </a>
          <a><i class="iconify" data-icon="fa:linkedin"></i></a>
          <a href="https://medium.com/@ardencygrp" target="_blank">
            <i class="iconify" data-icon="fa:medium"></i></a>
          <a href="https://github.com/ardencyio" target="_blank">
            <i class="iconify" data-icon="fa:github"></i>
          </a>
        </div>
      </div>
      <div class="column is-2 is-offset-2">
        <h4 class="title is-6">Company</h4>
        <ul class="footer-menu">
          <li>
            <a href="/advisory#our-services" class="footer-link">Consulting</a>
          </li>
          <li><a href="/technology" class="footer-link">Engineering</a></li>
          <li><a href="/funding" class="footer-link">Funding</a></li>
          <li><a href="/blog" class="footer-link">Musings</a></li>
        </ul>
      </div>
      <div class="column is-2">
        <h4 class="title is-6">More</h4>
        <ul class="footer-menu">
          <li>
            <a href="/policy/terms" class="footer-link">Terms & Conditions</a>
          </li>
          <li>
            <a href="/policy/privacy" class="footer-link">Privacy Policy</a>
          </li>
          <li>
            <a href="https://www.freepik.com/author/stories?&from_view=author" class="footer-link">Illustrations</a>
          </li>
        </ul>
      </div>
      <div class="column is-5">
        <h4 class="title is-6">Find Us</h4>
        <ul class="footer-menu">
          <li>L6 Ken Lee Bldg, 20 Edith Cavell St</li>
          <li>Pt. Louis, Mauritius 11302</li>
          <li>hello@ardency.io</li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <div class="subscribe">
        <div class="control">
          <input class="input" placeholder="Subscribe">
          <button class="button is-solid">Subscribe</button>
        </div>
      </div>
      <div class="copyright-text">
        <a href="cssninja.io" target="_blank"><img class="copyright-logo" src="/img/logo/ardencyio.svg" width="112" height="28" alt="">
        </a>
        &nbsp; &copy;
      </div>
    </div>
  </div>
</footer>`},"/Users/goose/Spaces/pepeye/github/group/src/components/Footer.astro"),pc=_(),zt=S(async(e,i,n)=>{let t=e.createAstro(pc,i,n);return t.self=zt,f`${P(e)}<div class="progress-wrap" x-data="initBackToTop()" x-init="setup()" x-on:scroll.window="scroll()" x-bind:class="{
        'active-progress': scrolled,
        '': !scrolled,
        }" x-on:click="scrollTop()">
  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
  </svg>

  <svg class="inner-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
</div>`},"/Users/goose/Spaces/pepeye/github/group/src/components/BackToTop.astro"),dc=_(),N=S(async(e,i,n)=>{let t=e.createAstro(dc,i,n);t.self=N;let{title:o}=t.props;return f`<html dir="ltr" lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ardency ${"- "+o}</title>

    <!-- Google Tag Manager -->
    
    <!-- End Google Tag Manager -->

    <link rel="icon" type="image/png" href="/img/favicon.ico">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!-- <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    /> -->
    <link href="https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@400;500;600;700;800&family=Sen:wght@400;700;800&display=swap" rel="stylesheet">
  ${$t(e)}</head>

  <body x-data="initTheme()" :class="{
      'is-dark': $store.app.isDark,
      '': !$store.app.isDark
    }">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PV65Z24" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <!-- Navbar -->
    ${C(e,"Navbar",sa,{})}

    <!--page partial-->
    ${z(e,n.default)}

    <!-- Footer  -->
    ${C(e,"Footer",ra,{})}

    <!--Back to top-->
    ${C(e,"BackToTop",zt,{})}
    
    
  </body>
</html>`},"/Users/goose/Spaces/pepeye/github/group/src/layouts/Default.astro"),mc=_(),ca=S(async(e,i,n)=>{let t=e.createAstro(mc,i,n);return t.self=ca,f`${C(e,"Layout",N,{title:"Home"},{default:a=>f`${P(a)}<div class="hero is-fullheight is-center has-top-bg">
    <img class="top-bg-alt" src="/img/bg/top-bg-alt.svg" alt="">

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered mt-6">
          <div class="column">
            <h1 class="title is-1 is-bold">Accelerating growth</h1>
            <p class="subtitle is-5 mx-auto max-w-5 b-centered-tablet-p text-medium">
              We help businesses unleash their full potential
              <!-- Product / Strategic Advice, Technology and Private Capital -->
            </p>
            <div class="buttons">
              <a class="button is-primary is-medium is-raised" href="/advisory">Discover</a>
              <a class="button is-primary is-outlined is-medium" href="/technology">Build Together</a>
            </div>
            <img class="hero-image-center mx-auto py-4" src="/img/vectors/ok.svg" alt="Hero image">
          </div>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/index.astro"),hc="/Users/goose/Spaces/pepeye/github/group/src/pages/index.astro",fc="",la=Object.freeze(Object.defineProperty({__proto__:null,default:ca,file:hc,url:fc},Symbol.toStringTag,{value:"Module"})),gc=_(),ua=S(async(e,i,n)=>{let t=e.createAstro(gc,i,n);return t.self=ua,f`${C(e,"Layout",N,{title:"Home"},{default:a=>f`${P(a)}<div class="hero is-fullheight is-center has-top-bg">
    <img class="top-bg-alt" src="/img/bg/top-bg-alt.svg" alt="">

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered mt-6">
          <div class="column">
            <h1 class="title is-1 is-bold">Build your super idea</h1>
            <p class="subtitle is-5 mx-auto max-w-5 b-centered-tablet-p text-medium">
              Product technology leadership and development for mobile, web, app services, platforms,
              data pipelines and more.
            </p>
            <div class="buttons">
              <a class="button is-primary is-medium is-raised" href="#skills">Discover</a>
              <a class="button is-primary is-outlined is-medium" href="#hire-us">Get Started</a>
            </div>
            <div class="mx-auto max-w-6">
              <img class="light-image-block mx-auto" src="/img/vectors/sdlc.svg" alt="">
              <img class="dark-image-block mx-auto" src="/img/vectors/sdlc.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><div class="section" id="skills">
    <div class="container">
      <div class="has-text-centered pb-6">
        <span class="tag is-primary is-curved is-outlined is-thick mb-2">Skills</span>
        <h2 class="title is-3">Our expertise</h2>
        <p class="subtitle is-5 text-medium">
          Deep knowledge across the full software development lifecycle
        </p>
      </div>

      <div class="feature-block-v12">
        <!-- Feature -->
        <div class="py-6">
          <div class="columns is-vcentered b-centered-tablet-p">
            <div class="column is-6">
              <img class="block mx-auto light-image-block" src="/img/vectors/design.svg" alt="Block image">
              <img class="block mx-auto dark-image-block" src="/img/vectors/design.svg" alt="Block image">
            </div>

            <div class="column is-5">
              <span class="is-block is-uppercase mb-2 text-primary">Experience Design</span>
              <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
                Product Experts
              </h3>
              <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
                We have skilled product managers with a strong technical leaning
                able to communicate and work effectively with your development
                teams and business stakeholders. Our product managers are as comfortable in
                business meetings as they are in Tmux + Vim <i class="iconify" data-icon="ph:smiley-wink-duotone"></i>.
              </p>
              <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
                We've designed and built experiences across multiple sectors
                including banking, financial services, data analytics, energy and industrials.
              </p>
              <!-- <a class="action-link" href="#">
                <span>See how it works</span>
                <i class="iconify" data-icon="lucide:arrow-right"></i>
              </a> -->
            </div>
          </div>
        </div>

        <!-- Feature -->
        <div class="py-6">
          <div class="columns is-vcentered b-centered-tablet-p">
            <div class="column is-5 is-offset-1">
              <span class="is-block is-uppercase mb-2 text-primary">Engineering</span>
              <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
                Skilled Polygots
              </h3>
              <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
                Our developers works with your
                team to understand the desired business outcome and are able to
                build using modern software architecture pardigms leveraging the
                required tools, languages and frameworks to meet your goals.
              </p>
              <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
                While comfortable in any stack as developers, here are
                some of the frameworks and tools like a lot (by no means exhaustive).
              </p>
              <!-- languages -->
              <div class="is-flex py-4">
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="fa-brands:rust"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="fa6-brands:golang"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="file-icons:typescript-alt"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:kotlin"></i>
                </div>
              </div>
              <!-- frameworks -->
              <div class="is-flex py-4">
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="fa-brands:node-js"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="fa-brands:react"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="file-icons:svelte"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:astro"></i>
                </div>
              </div>
              <!-- frameworks -->
              <div class="is-flex py-4">
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="fa-brands:swift"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="file-icons:flutter"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:ios"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="fa-brands:android"></i>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <img class="block mx-auto light-image-block" src="/img/vectors/coding.svg" alt="Block image">
              <img class="block mx-auto dark-image-block" src="/img/vectors/coding.svg" alt="Block image">
            </div>
          </div>
        </div>

        <!-- Feature -->
        <div class="py-6">
          <div class="columns is-vcentered b-centered-tablet-p">
            <div class="column is-6">
              <img class="block mx-auto light-image-block" src="/img/vectors/endpoints.svg" alt="Block image">
              <img class="block mx-auto dark-image-block" src="/img/vectors/endpoints.svg" alt="Block image">
            </div>

            <div class="column is-5">
              <span class="is-block is-uppercase mb-2 text-primary">DevOps</span>
              <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
                Repeatable, Observable Deployments
              </h3>
              <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
                We build simplified and repeatable deployments running on
                technology able to scale as required. We practice GitOps
                ensuring that infrastructure is versioned as code, auditable and repeatable.
              </p>
              <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
                We place priority on observability configured with pre-emptive
                approaches to failure utilising thresholds and alerts in our
                stacks. Everything is scoped to deliver your business definted and benchmarked SLAs.
              </p>
              <!-- infra -->
              <div class="is-flex py-4">
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="file-icons:terraform"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="file-icons:kubernetes"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="file-icons:docker"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:helm"></i>
                </div>
              </div>
              <!-- observability -->
              <div class="is-flex py-4">
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:prometheus"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:grafana"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:datadog"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="clarity:ci-cd-line" alt="ci-cd"></i>
                </div>
              </div>
              <!-- cloud -->
              <div class="is-flex py-4">
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:amazonaws"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:googlecloud"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:azuredevops"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:digitalocean" alt="ci-cd"></i>
                </div>
              </div>
              <!-- <a class="action-link" href="#">
                <span>Learn more about sharing</span>
                <i class="iconify" data-icon="lucide:arrow-right"></i>
              </a> -->
            </div>
          </div>
        </div>

        <!-- Feature -->
        <div class="py-6">
          <div class="columns is-vcentered b-centered-tablet-p">
            <div class="column is-5 is-offset-1">
              <span class="is-block is-uppercase mb-2 text-primary">Quality</span>
              <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
                Test, Test, Test...
              </h3>
              <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
                Passionate about delivering flawless software? So are we.
                From BDD to TDD, we use the industry standard testing
                methodologies to ensure your software is top-notch.
              </p>
              <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
                With implement comprehensive testing strategies to  
                squash pesky bugs before they can cause mayhem. Our mission
                is simple: to deliver high-performing, sleek software products
                that exceed your expectations and make your business thrive.
              </p>
              <!-- cloud -->
              <div class="is-flex py-4">
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:cypress"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:vitest"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:jest"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:puppeteer" alt="ci-cd"></i>
                </div>
                <div class="is-flex is-justify-content-center is-align-items-center size-52x52 is-circle bg-muted text-primary mx-2">
                  <i class="iconify rem-175" data-icon="simple-icons:blazemeter" alt="ci-cd"></i>
                </div>
              </div>
              <ul class="pl-4 small:hidden">
                <li class="is-flex is-align-items-center py-2">
                  <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                  <div class="ml-2">
                    <p class="small:max-w-2 text-medium">Mobile.App testing</p>
                  </div>
                </li>
                <li class="is-flex is-align-items-center py-2">
                  <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                  <div class="ml-2">
                    <p class="small:max-w-2 text-medium">Web headless testing</p>
                  </div>
                </li>
                <li class="is-flex is-align-items-center py-2">
                  <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                  <div class="ml-2">
                    <p class="small:max-w-2 text-medium">
                      API integration testing
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="column is-6">
              <img class="block mx-auto light-image-block" src="/img/vectors/code-testing.svg" alt="Block image">
              <img class="block mx-auto dark-image-block" src="/img/vectors/code-testing.svg" alt="Block image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><div class="section" id="hire-us">
    <div class="container">
      <div class="call-block-v3">
        <div class="card max-w-7 mx-auto px-4 py-6 border-primary">
          <div class="has-text-centered">
            <h3 class="title is-3 is-spaced">It's all in the cloud</h3>
            <p class="subtitle is-6 mx-auto max-w-3 text-medium">
              We take a cloud native approach leveraging capable open-source tools
            </p>
            <a class="button is-primary is-big is-long-2 raised" href="mailto:hello@ardency.io">
              Hire Us
            </a>

            <p class="rem-90 py-4 text-light">
              Experienced with all hyperscale cloud platforms
            </p>
            <div class="mx-auto max-w-5 max-w-tablet-p max-w-tp-4">
              <div class="columns b-columns-half-mobile b-columns-half-tablet-p">
                <div class="column large:px-5">
                  <img class="block max-w-xs mx-auto filter-invert" src="/img/logo/brands/aws.svg" alt="">
                </div>
                <div class="column large:px-5">
                  <img class="block max-w-xs mx-auto filter-invert" src="/img/logo/brands/gcp.svg" alt="">
                </div>
                <div class="column large:px-5">
                  <img class="block max-w-xs mx-auto filter-invert" src="/img/logo/brands/azure.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/technology.astro"),vc="/Users/goose/Spaces/pepeye/github/group/src/pages/technology.astro",yc="/technology",pa=Object.freeze(Object.defineProperty({__proto__:null,default:ua,file:vc,url:yc},Symbol.toStringTag,{value:"Module"})),Dc=_(),da=S(async(e,i,n)=>{let t=e.createAstro(Dc,i,n);return t.self=da,f`${C(e,"Layout",N,{title:"Home"},{default:a=>f`${P(a)}<div class="hero is-fullheight is-side is-left has-top-bg">
    <img class="top-bg-alt" src="/img/bg/top-bg-alt.svg" alt="">

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <h1 class="title is-1 is-bold">Your Decision Support System</h1>
            <p class="subtitle is-5 b-centered-tablet-p text-medium">
              We unlock business potential with data-backed strategies,
              financial acumen, and M&A guidance.
            </p>
            <div class="buttons">
              <a class="button is-primary is-medium is-raised" href="#our-services">Explore</a>
              <a class="button is-primary is-outlined is-medium">Contact</a>
            </div>
          </div>
          <div class="column is-6 is-offset-1">
            <img class="mx-auto" src="/img/vectors/business-decisions.svg" alt="Hero image">
          </div>
        </div>
      </div>
    </div>
  </div><div class="section has-pseudo-lines" id="our-services">
    <div class="container">
      <div class="has-text-centered py-12">
        <span class="tag is-primary is-curved is-outlined is-thick mb-2">Our Support</span>
        <h2 class="title is-3">Amazing stuff we do</h2>
        <p class="subtitle is-5 text-medium">
          Holds up well with the best out there
        </p>
      </div>

      <div class="py-6">
        <div class="columns is-vcentered b-centered-tablet-p">
          <div class="column is-5 is-offset-1">
            <img class="light-image-block" src="/img/vectors/critical.svg" alt="">
            <img class="dark-image-block" src="/img/vectors/critical.svg" alt="">
          </div>

          <div class="column is-5">
            <span class="is-block is-uppercase mb-2 text-primary">Planning</span>
            <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
              Business Strategy
            </h3>
            <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
              We work closely with our clients to understand their goals,
              identify potential obstacles, and develop a customized plan to
              achieve long-term success. Our team of experienced consultants
              have a deep understanding of industry trends, market dynamics and
              best practices, to provide pragmatic, actionable recommendations
              to help businesses thrive.
            </p>
            <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
              Whether you're looking to grow your business, enter new markets,
              or improve your operational efficiency, we can help you define
              strategies to suit. Contact us today to learn more about how we
              can help your business achieve its goals.
            </p>

            <!-- <a class="action-link" href="#">
              <span>Explore components</span>
              <i class="iconify" data-icon="lucide:arrow-right"></i>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div><div class="section has-pseudo-lines">
    <div class="container">
      <div class="py-6">
        <div class="columns is-vcentered b-centered-tablet-p">
          <div class="column is-5 is-offset-1">
            <span class="is-block is-uppercase mb-2 text-primary">Research</span>
            <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
              Data Backed Analysis
            </h3>
            <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
              From market sizing and segmentation to customer behavior and
              sentiment analysis, we help you understand your target market and
              make data-driven decisions that generate growth. We leverage our
              network of research and analysts to deliver accurate, actionable
              data that drives results.
            </p>
            <ul class="pl-4 small:hidden">
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">
                    Market Research & Segmentation
                  </p>
                </div>
              </li>
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">Competitive Analysis</p>
                </div>
              </li>
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">
                    Financials / Valuations
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="column is-6">
            <img class="light-image-block" src="/img/vectors/solving.svg" alt="">
            <img class="dark-image-block" src="/img/vectors/solving.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div><div class="section has-pseudo-lines">
    <div class="container">
      <div class="py-6">
        <div class="columns is-vcentered b-centered-tablet-p">
          <div class="column is-6">
            <img class="light-image-block" src="/img/vectors/consulting.svg" alt="">
            <img class="dark-image-block" src="/img/vectors/consulting.svg" alt="">
          </div>

          <div class="column is-5">
            <span class="is-block is-uppercase mb-2 text-primary">M&A</span>
            <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
              Transaction Services
            </h3>
            <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
              ardency is a trusted advisor for businesses looking to navigate
              complex transactions. With our considerable experience in
              corporate finance, we can provide the necessary guidance to help
              clients achieve their M&A objectives. Our team of professionals
              possess a wealth of knowledge across transaction processes,
              commercial due diligence, valuation, and deal structuring.
            </p>
            <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
              We are able to support from initial target identification & screening
              through deal negotiations and closing.
            </p>

            <!-- <a class="action-link" href="#">
              <span>Case studies</span>
              <i class="iconify" data-icon="lucide:arrow-right"></i>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div><div class="section has-pseudo-lines">
    <div class="container">
      <div class="py-6">
        <div class="columns is-vcentered b-centered-tablet-p">
          <div class="column is-5 is-offset-1">
            <span class="is-block is-uppercase mb-2 text-primary">Process</span>
            <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
              Digital Transformation
            </h3>
            <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
              We specialise in leveraging technology to transform businesses
              and processes, driving increased efficiency and profitability. We
              help clients identifying
              opportunities to adopt new technologies, streamline operations,
              and enhance customer experiences or services.
            </p>
            <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
              Our team has the know-how to make technology work for
              you, delivering solutions that generate measurable results.
            </p>
            <ul class="pl-4 small:hidden">
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">
                    Product and service design
                  </p>
                </div>
              </li>
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">Technology roadmap</p>
                </div>
              </li>
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">
                    C-Suite reporting & management
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="column is-6">
            <img class="light-image-block" src="/img/vectors/efficiency.svg" alt="">
            <img class="dark-image-block" src="/img/vectors/efficiency.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div><div class="section has-pseudo-lines">
    <div class="container">
      <div class="feature-block-v11 py-12">
        <div class="columns is-vcentered py-4">
          <div class="column is-5">
            <h2 class="title is-3">Rounded experience</h2>
            <p class="max-w-tp-full medium:max-w-4 mb-4 text-medium">
              Our team are experienced working across numerous sectors including
              banking & payments, wealth & investments, energy, chemicals and
              gaming. We have advised and supported on transactions with over
              $20Bn combined in implicit value for blue-chip firms, top tier
              banks and large buyout funds.
            </p>
            <!-- <p class="max-w-tp-full medium:max-w-4 mb-4 text-medium">
              Our experience in fintech includes deep understanding across the
              value chain from RegTech offerings to support onboarding (KYC,
              AML), reactive and modern banking ledgers, cards (processors, bin
              sponsors) to facilitating cross border payments.
            </p> -->

            <!-- <a class="action-link" href="#">
              <span>Find out more</span>
              <i class="iconify" data-icon="lucide:arrow-right"></i>
            </a> -->
          </div>
          <div class="column is-6 is-offset-1">
            <div class="columns is-multiline b-columns-half-tablet-p">
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <i class="iconify rem-150 text-primary" data-icon="fa6-solid:oil-well"></i>
                  <h4 class="title is-6 is-narrow">Oil, Gas, Chemicals</h4>
                  <p class="pt-2 max-w-2 text-medium rem-90">
                    Project Appraisal, Market Dynamics, Price Forecasts, Production Cost Analysis, Transaction Support.
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <i class="iconify rem-150 text-primary" data-icon="ph:bank-bold"></i>
                  <h4 class="title is-6 is-narrow">Financial Services</h4>
                  <p class="pt-2 max-w-2 text-medium rem-90">
                    Retail & SME Banking, Neobanking, Wealth Management, Payments
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <i class="iconify rem-150 text-primary" data-icon="fa6-solid:microchip"></i>
                  <h4 class="title is-6 is-narrow">Technology</h4>
                  <p class="pt-2 max-w-2 text-medium rem-90">
                    Data Analytics, Research and ETL
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <i class="iconify rem-150 text-primary" data-icon="ph:game-controller-bold"></i>
                  <h4 class="title is-6 is-narrow">Gaming</h4>
                  <p class="pt-2 max-w-2 text-medium rem-90">
                    Lottery and Sports Themed Products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><div class="section">
    <div class="container">
      <div class="has-text-centered">
        <p class="subtitle mx-auto max-w-5 text-medium">
          Tell us more about your business, product or technology aspirations
          and lets see how we can help
        </p>
        <div class="buttons is-centered mt-4 mb-6">
          <a class="button is-primary is-big is-long-2 raised" href="mailto:hello@ardency.io">
            <i class="iconify rem-125" data-icon="ph:envelope-simple"></i>
            &nbsp;Email us
          </a>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/advisory.astro"),bc="/Users/goose/Spaces/pepeye/github/group/src/pages/advisory.astro",xc="/advisory",ma=Object.freeze(Object.defineProperty({__proto__:null,default:da,file:bc,url:xc},Symbol.toStringTag,{value:"Module"})),wc=_(),ha=S(async(e,i,n)=>{let t=e.createAstro(wc,i,n);return t.self=ha,f`${P(e)}<div class="call-block-v8">
  <div class="py-6">
    <div class="columns is-vcentered b-columns-half-tablet-p">
      <div class="column is-5 is-offset-1">
        
        <p class="text-medium text-italic rem-95 max-w-3 mb-4">
          "Strategy without tactics is the slowest route to victory. Tactics
          without strategy is the noise before defeat." - Sun Tzu, The Art of
          War.
        </p>
        <p class="subtitle is-5 max-w-5 text-medium">
          Tell us how we can help
        </p>
        <div>
            <img src="/img/vectors/contact-us.svg" alt="">
          </div>
      </div>
      <div class="column is-5 is-offset-1">
        <div class="box mobile:p-4 small:p-6 large:p-6 wide:p-6 big:p-10 mx-auto max-w-7">
          <div>
            <h3 class="title is-3">Contact us</h3>
            <h4 class="subtitle is-6">
              Use the form below to send us a message.
            </h4>
            <form class="py-4">
              <div class="field">
                <label>Full Name</label>
                <div class="control has-icon">
                  <input class="input" placeholder="Your name">
                  <div class="form-icon">
                    <i class="iconify" data-icon="lucide:user"></i>
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Email Address</label>
                <div class="control has-icon">
                  <input class="input" placeholder="Your email">
                  <div class="form-icon">
                    <i class="iconify" data-icon="lucide:mail"></i>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Subject</label>
                <div class="control has-icon">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Select a topic</option>
                      <option>Advisory</option>
                      <option>Development</option>
                      <option>Funding</option>
                    </select>
                    <div class="form-icon">
                      <i class="iconify" data-icon="lucide:feather"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <label>Message</label>
                <div class="control">
                  <textarea class="textarea" rows="4" placeholder="Write your message"></textarea>
                </div>
              </div>
              <div class="field pt-4">
                <div class="control">
                  <button type="button" class="button is-primary is-fullwidth raised">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`},"/Users/goose/Spaces/pepeye/github/group/src/components/blocks/contact/Contact.astro"),Cc=_(),fa=S(async(e,i,n)=>{let t=e.createAstro(Cc,i,n);return t.self=fa,f`${C(e,"Layout",N,{title:"Home"},{default:a=>f`${P(a)}<div class="section" id="contact">
    <div class="container">
      <div class="has-text-centered py-12">
        <span class="tag is-primary is-curved is-outlined mb-2">Contact</span>
        <h2 class="title is-3">Get in touch</h2>
        <p class="subtitle is-5 text-medium">
          Please fill in the form and tell us how we can help
        </p>
      </div>

      <!-- Contact block v2 -->
      <div class="pb-12">
        ${C(a,"Contact",ha,{})}
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/contact.astro"),Fc="/Users/goose/Spaces/pepeye/github/group/src/pages/contact.astro",kc="/contact",ga=Object.freeze(Object.defineProperty({__proto__:null,default:fa,file:Fc,url:kc},Symbol.toStringTag,{value:"Module"})),Ec=_(),va=S(async(e,i,n)=>{let t=e.createAstro(Ec,i,n);return t.self=va,f`${C(e,"Layout",N,{title:"Home"},{default:a=>f`${P(a)}<div class="hero is-fullheight is-center has-top-bg">
    <img class="top-bg-alt" src="/img/bg/top-bg-alt.svg" alt="">

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered mt-6">
          <div class="column">
            <h1 class="title is-1 is-bold">Building the future of Africa</h1>
            <p class="subtitle is-5 mx-auto max-w-5 b-centered-tablet-p text-medium">
              We seek to invest in and support Africa's most promising
              technology startups
            </p>
            <div class="buttons">
              <a class="button is-primary is-medium is-raised" href="#criteria">Learn More</a>
              <a class="button is-primary is-outlined is-medium">Apply</a>
            </div>
            <img class="hero-image-center mx-auto py-4 inverted-filter" src="/img/illustrations/skyline.svg" alt="Hero image">
          </div>
        </div>
      </div>
    </div>
  </div><div class="section" id="criteria">
    <div class="container">
      <div class="has-text-centered pb-6">
        <span class="tag is-primary is-curved is-outlined is-thick mb-2">
          Criteria
        </span>
        <h2 class="title is-3">Our Approach</h2>
        <p class="subtitle is-5 text-medium">Things we look for / offer</p>
      </div>
      <div class="feature-block-v1">
        <div class="columns is-multiline b-columns-half-tablet-p has-text-centered">
          <!-- Feature -->
          <div class="column is-4">
            <div class="py-4">
              <i class="iconify rem-200 text-primary" data-icon="fa6-solid:microchip"></i>
              <h4 class="title is-6 is-narrow">Deep Scalable Tech</h4>
              <p class="pt-2 mx-auto max-w-3 text-medium rem-95">
                We partner with startups where technology preferably drives the
                business model, not just supports it.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="column is-4">
            <div class="py-4">
              <i class="iconify rem-200 text-primary" data-icon="fluent:people-team-32-regular"></i>
              <h4 class="title is-6 is-narrow">Team centric</h4>
              <p class="pt-2 mx-auto max-w-3 text-medium rem-95">
                We focus on people and teams, partnering with founders to drive
                success, not just funding.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="column is-4">
            <div class="py-4">
              <i class="iconify rem-200 text-primary" data-icon="icons8:idea"></i>
              <h4 class="title is-6 is-narrow">Fresh Perspectives</h4>
              <p class="pt-2 mx-auto max-w-3 text-medium rem-95">
                We seek out startups that not only innovate, but drive positive
                change in communities they serve.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="column is-4">
            <div class="py-4">
              <i class="iconify rem-200 text-primary" data-icon="carbon:crop-growth"></i>
              <h4 class="title is-6 is-narrow">Traction Focus</h4>
              <p class="pt-2 mx-auto max-w-3 text-medium rem-95">
                We support startups demonstrating early success, proven demand,
                and a scalable business model.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="column is-4">
            <div class="py-4">
              <i class="iconify rem-200 text-primary" data-icon="ph:rocket-duotone"></i>
              <h4 class="title is-6 is-narrow">Willing Propellants</h4>
              <p class="pt-2 mx-auto max-w-3 text-medium rem-95">
                We can guide startups through larger funding rounds connecting
                them with later stage investors.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="column is-4">
            <div class="py-4">
              <i class="iconify rem-200 text-primary" data-icon="la:globe-africa"></i>
              <h4 class="title is-6 is-narrow">Africa Focused?</h4>
              <p class="pt-2 mx-auto max-w-3 text-medium rem-95">
                We are sector agnostic and global but get super excited about
                propositions with an Africa-centric focus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><div class="section has-pseudo-lines">
    <div class="container">
      <div class="py-6">
        <div class="columns is-vcentered b-centered-tablet-p">
          <div class="column is-5 is-offset-1">
            <span class="is-block is-uppercase mb-2 text-primary">Partnering</span>
            <h3 class="title is-3 is-narrow max-w-3 small:mx-auto">
              In the fight together
            </h3>
            <p class="py-2 max-w-4 text-medium mb-4 small:mx-auto">
              Our tech-savvy investors give our portfolio companies the
              resources and support they need to level up their pursuit.
            </p>
            <ul class="pl-4 small:hidden">
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">
                    Experienced & Commercial
                  </p>
                </div>
              </li>
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">Deeply Technical</p>
                </div>
              </li>
              <li class="is-flex is-align-items-center py-2">
                <i class="iconify text-primary rem-125" data-icon="lucide:check"></i>
                <div class="ml-2">
                  <p class="small:max-w-2 text-medium">Connected</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="column is-6">
            <img class="light-image-block" src="/img/vectors/good-team.svg" alt="">
            <img class="dark-image-block" src="/img/vectors/good-team.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div><div class="section has-pseudo-lines">
    <div class="container">
      <div class="has-text-centered py-12">
        <span class="tag is-primary is-curved is-outlined is-thick mb-2">Who we are</span>
        <h2 class="title is-3">Our Values</h2>
        <p class="subtitle is-5 text-medium">
          Hoping to address enthicity gap in startup funding -
          <a class="action-link" target="_blank" href="https://2020.stateofeuropeantech.com/chapter/diversity-inclusion/article/diversity-inclusion/">
            <span>Read more</span>
          </a>
        </p>
      </div>

      <div class="py-12">
        <div class="columns is-vcentered">
          <div class="column is-6 is-relative is-centered-portrait">
              <img class="block mx-auto" src="/img/photo/allhands.jpg" alt="Block image">
          </div>
          <div class="column is-5 is-offset-1">
            <h2 class="title is-3 small:text-centered">Why We Exist</h2>

            <div class="columns is-multiline small:max-w-5 small:mx-auto small:px-8">
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <h4 class="title is-6 is-narrow">Equality</h4>
                  <p class="pt-2 max-w-3 text-medium rem-90">
                    All-ethnic teams received 1.58% of all venture capital funding across stages between 2009-2019 - 
                    <a class="action-link" href="https://2020.stateofeuropeantech.com/chapter/diversity-inclusion/article/diversity-inclusion/">
                      <span>Read more</span>
                    </a>
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <h4 class="title is-6 is-narrow">Empowerment</h4>
                  <p class="pt-2 max-w-3 text-medium rem-90">
                    Platform for self-sustinance and value for marginalised communities.
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <h4 class="title is-6 is-narrow">Nurturing</h4>
                  <p class="pt-2 max-w-3 text-medium rem-90">
                    Support growth and innovation that can transform others.
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <h4 class="title is-6 is-narrow">Willing Vessels</h4>
                  <p class="pt-2 max-w-3 text-medium rem-90">
                    Selflessness, generosity of spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><div class="section">
    <div class="container">
      <div class="has-text-centered">
        <p class="subtitle mx-auto max-w-5 text-medium">
          See us not as investors but partners.
        </p>
        <div class="buttons is-centered mt-4 mb-6">
          <a class="button is-primary is-big is-long-2 raised" href="mailto:hello@ardency.io">
            <!-- <i class="iconify rem-125" data-icon="ph:envelope-simple"></i> -->
            &nbsp;Email Us
          </a>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/funding.astro"),Sc="/Users/goose/Spaces/pepeye/github/group/src/pages/funding.astro",Ac="/funding",ya=Object.freeze(Object.defineProperty({__proto__:null,default:va,file:Sc,url:Ac},Symbol.toStringTag,{value:"Module"})),_c=_(),Da=S(async(e,i,n)=>{let t=e.createAstro(_c,i,n);t.self=Da;let{tag:o,title:a,description:s,slug:r,image:c,avatar:u}=t.props;return f`${P(e)}<div class="column is-4">
    <div class="card">
        <div class="card-image">
        <img${M(c,"src")}${M(a,"alt")}>
        </div>
        <div class="card-content">
        <div class="media is-align-items-center">
            <div class="media-left">
            <img class="block size-44x44 is-circle has-border filter-gray"${M(u,"src")} alt="Avatar">
            </div>
            <div class="media-content">
            <p class="subtitle rem-80 text-uppercase text-light">Policy</p>
            <p class="title is-6">${a}</p>
            </div>
        </div>

        <div class="content">
            <p class="text-medium">${s}</p>
        </div>
        <div class="is-flex is-align-items-center is-justify-content-space-between">
            <div>
            <a class="action-link"${M(`/policy/${r}/`,"href")}>
                <span>Read More</span>
                <i class="iconify" data-icon="feather:arrow-right"></i>
            </a>
            </div>
            <div class="is-flex is-align-items-center">
            <!-- <div class="is-flex is-align-items-center text-light">
                <i class="iconify" data-icon="feather:eye"></i>
                <span class="ml-1">327</span>
            </div> -->
            <div class="mx-3"></div>
            <!-- <div class="is-flex is-align-items-center text-light">
                <i class="iconify" data-icon="feather:message-circle"></i>
                <span class="ml-1">12</span>
            </div> -->
            </div>
        </div>
        </div>
    </div>
</div>`},"/Users/goose/Spaces/pepeye/github/group/src/components/blocks/policy/Policy.astro"),ba="/src/content/",Pc=Object.assign({"/src/content/blog/markdown-styling.md":()=>Promise.resolve().then(()=>(gn(),fn)),"/src/content/blog/state-of-european-tech.md":()=>Promise.resolve().then(()=>(yn(),vn)),"/src/content/policy/privacy.md":()=>Promise.resolve().then(()=>(bn(),Dn)),"/src/content/policy/terms.md":()=>Promise.resolve().then(()=>(wn(),xn))}),Tc=Rt({globResult:Pc,contentDir:ba}),Bc=Object.assign({"/src/content/blog/markdown-styling.md":()=>Promise.resolve().then(()=>(Tn(),Pn)),"/src/content/blog/state-of-european-tech.md":()=>Promise.resolve().then(()=>(qn(),Rn)),"/src/content/policy/privacy.md":()=>Promise.resolve().then(()=>(Jn(),Vn)),"/src/content/policy/terms.md":()=>Promise.resolve().then(()=>(aa(),na))}),Yc=Rt({globResult:Bc,contentDir:ba}),Ze=hn({collectionToEntryMap:Tc,collectionToRenderEntryMap:Yc}),jc=_(),xa=S(async(e,i,n)=>{let t=e.createAstro(jc,i,n);t.self=xa;let o="Documents",a=(await Ze("policy")).sort((s,r)=>s.data.updated.valueOf()-r.data.updated.valueOf());return f`${C(e,"Layout",N,{title:o},{default:s=>f`${P(s)}<div id="content-start" class="section">
    <div class="container">
      <div class="has-text-centered py-12">
        <span class="tag is-primary is-curved is-outlined mb-2">Compliance</span>
        <h2 class="title is-3">Important Documents</h2>
        <p class="subtitle is-5 text-medium">
          Please ensure you have read and accept these
        </p>
      </div>

      <!-- Posts block v1 -->
      <div class="pb-12">
        <div class="posts-block-v1">
          <div class="columns is-multiline b-columns-half-tablet-p">
            ${a.map(r=>f`${C(s,"Policy",Da,{title:r.data.title,description:r.data.description,image:r.data.image,avatar:r.data.avatar,slug:r.slug})}`)}
          </div>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/policy/index.astro"),$c="/Users/goose/Spaces/pepeye/github/group/src/pages/policy/index.astro",Oc="/policy",wa=Object.freeze(Object.defineProperty({__proto__:null,default:xa,file:$c,url:Oc},Symbol.toStringTag,{value:"Module"})),Uc=_();async function Wc(){return(await Ze("policy")).map(i=>({params:{slug:i.slug},props:i}))}var Ca=S(async(e,i,n)=>{let t=e.createAstro(Uc,i,n);t.self=Ca;let o=t.props,{Content:a}=await o.render();return f`${C(e,"Layout",N,{...o.data},{default:s=>f`${P(s)}<div class="section">
		<div class="container">
			<div class="has-text-centered py-12">
				<span class="tag is-primary is-curved is-outlined mb-2">Policy</span>
				<h2 class="title is-3">${o.data.title}</h2>
				<p class="subtitle is-5 text-medium">
					${o.data.description}
				</p>
			</div>
		
			<!-- Content block v4 -->
			<div class="pb-12">
				<div class="content">
					${C(s,"Content",a,{})}
				</div>
			</div>
		</div>
	</div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/policy/[...slug].astro"),Rc="/Users/goose/Spaces/pepeye/github/group/src/pages/policy/[...slug].astro",qc="/policy/[...slug]",Fa=Object.freeze(Object.defineProperty({__proto__:null,default:Ca,file:Rc,getStaticPaths:Wc,url:qc},Symbol.toStringTag,{value:"Module"})),Ic=_(),Qe=S(async(e,i,n)=>{let t=e.createAstro(Ic,i,n);t.self=Qe;let{title:o}=t.props;return f`<html dir="ltr" lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ardency ${"- "+o}</title>

    <link rel="icon" type="image/png" href="/img/favicon.ico">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  ${$t(e)}</head>

  <body x-data="initTheme()" class="has-sticky" :class="{
      'is-dark': $store.app.isDark,
      '': !$store.app.isDark
    }">

    <!--Body partial-->
    ${z(e,n.default)}

    <!--Back to top-->
    ${C(e,"BackToTop",zt,{})}

    
  </body>
</html>`},"/Users/goose/Spaces/pepeye/github/group/src/layouts/Minimal.astro"),Mc=_(),ka=S(async(e,i,n)=>{let t=e.createAstro(Mc,i,n);return t.self=ka,f`${C(e,"Layout",Qe,{title:"Signup"},{default:a=>f`${P(a)}<div class="signup-wrapper">
    <!--Nav-->
    <div class="signup-nav">
      <div class="container">
        <div class="signup-nav-inner">
          <div class="start">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img class="light-image-block" src="/img/logo/ardency.svg" alt="">
                <img class="dark-image-block" src="/img/logo/ardency-white.svg" alt="">
              </a>
            </div>
          </div>
          <div class="end">
            <label class="theme-toggle">
              <input type="checkbox" x-on:change="toggleTheme()" :checked="$store.app.isDark">
              <span class="theme-toggle-inner">
                <i class="sun-icon iconify" data-icon="feather:sun"></i>
                <i class="moon-icon iconify" data-icon="feather:moon"></i>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!--Hero-->
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-5 is-offset-1">
              <div class="signup-caption">
                <h1 class="title is-2 is-thin is-leading">Register</h1>
                <p>
                  Signup for more updates from ardency
                </p>
              </div>

              <div class="signup-form">
                <form>
                  <div class="field">
                    <label>Email Address</label>
                    <div class="control has-icon">
                      <input type="text" class="input" placeholder="Enter your email">
                      <div class="form-icon">
                        <i class="iconify" data-icon="feather:mail"></i>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <label>Password</label>
                    <div class="control has-icon">
                      <input type="password" class="input" placeholder="Enter your password">
                      <div class="form-icon">
                        <i class="iconify" data-icon="feather:lock"></i>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="signup-conditions">
                      <label class="f-switch is-secondary">
                        <input type="checkbox" class="is-switch">
                        <i></i>
                      </label>
                      <span>I agree to the <a>Terms Of Service</a></span>
                    </div>
                  </div>
                  <div class="field">
                    <div class="buttons">
                      <button class="button is-primary is-fullwidth raised">
                        Sign Up
                      </button>
                    </div>

                    <div class="login-link">
                      <a href="/login">I already have an account</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="column is-6">
              <img class="signup-illustration" src="/img/vectors/signup.svg" alt="Signup Illustration">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/signup.astro"),Lc="/Users/goose/Spaces/pepeye/github/group/src/pages/signup.astro",zc="/signup",Ea=Object.freeze(Object.defineProperty({__proto__:null,default:ka,file:Lc,url:zc},Symbol.toStringTag,{value:"Module"})),Nc=_(),Sa=S(async(e,i,n)=>{let t=e.createAstro(Nc,i,n);return t.self=Sa,f`${C(e,"Layout",Qe,{title:"Login"},{default:a=>f`${P(a)}<div class="login-wrapper">
    <!--Nav-->
    <div class="login-nav">
      <div class="container">
        <div class="login-nav-inner">
          <div class="start">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img class="light-image-block" src="/img/logo/ardency.svg" alt="">
                <img class="dark-image-block" src="/img/logo/ardency-white.svg" alt="">
              </a>
            </div>
          </div>
          <div class="end">
            <label class="theme-toggle">
              <input type="checkbox" x-on:change="toggleTheme()" :checked="$store.app.isDark">
              <span class="theme-toggle-inner">
                <i class="sun-icon iconify" data-icon="feather:sun"></i>
                <i class="moon-icon iconify" data-icon="feather:moon"></i>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!--Hero-->
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="login-caption">
                <h1 class="title is-2 is-thin is-leading">Sign In</h1>
                <p>
                  Client portal - comming soon!
                </p>
              </div>

              <div class="login-form" x-data="initLogin()">
                <form>
                  <div class="field">
                    <label>Email Address</label>
                    <div class="control has-icon">
                      <input type="text" class="input" placeholder="Enter your email">
                      <div class="form-icon">
                        <i class="iconify" data-icon="feather:mail"></i>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <label>Password</label>
                    <div class="control has-icon">
                      <input type="password" class="input" placeholder="Enter your password">
                      <div class="form-icon">
                        <i class="iconify" data-icon="feather:lock"></i>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="login-conditions">
                      <label class="f-switch is-secondary">
                        <input type="checkbox" class="is-switch">
                        <i></i>
                      </label>
                      <span>Remember me</span>
                    </div>
                  </div>
                  <div class="field">
                    <div class="buttons">
                      <button type="button" class="button is-primary is-fullwidth raised" x-bind:class="{
                          'is-loading': isLoading,
                        }" x-on:click="login()">
                        Login
                      </button>
                    </div>

                    <div class="login-link">
                      <a href="/login">Don't have an account?</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/login.astro"),Hc="/Users/goose/Spaces/pepeye/github/group/src/pages/login.astro",Gc="/login",Aa=Object.freeze(Object.defineProperty({__proto__:null,default:Sa,file:Hc,url:Gc},Symbol.toStringTag,{value:"Module"})),Vc=_(),_a=S(async(e,i,n)=>{let t=e.createAstro(Vc,i,n);t.self=_a;let{tag:o,title:a,description:s,slug:r,image:c,avatar:u}=t.props;return f`${P(e)}<div class="column is-4">
  <div class="card">
    <div class="card-image">
      <img${M(c,"src")}${M(a,"alt")}>
    </div>
    <div class="card-content">
      <div class="media is-align-items-center">
        <div class="media-left">
          <img class="block size-44x44 is-circle has-border filter-gray"${M(u,"src")} alt="Avatar">
        </div>
        <div class="media-content">
          <p class="subtitle rem-80 text-uppercase text-light">Article</p>
          <p class="title is-6">${a}</p>
        </div>
      </div>

      <div class="content">
        <p class="text-medium">${s}</p>
      </div>
      <div class="is-flex is-align-items-center is-justify-content-space-between">
        <div>
          <a class="action-link"${M(`/blog/${r}/`,"href")}>
            <span>Read More</span>
            <i class="iconify" data-icon="feather:arrow-right"></i>
          </a>
        </div>
        <!-- <div class="is-flex is-align-items-center">
          <div class="is-flex is-align-items-center text-light">
            <i class="iconify" data-icon="feather:eye"></i>
            <span class="ml-1">327</span>
          </div>
          <div class="mx-3"></div>
          <div class="is-flex is-align-items-center text-light">
            <i class="iconify" data-icon="feather:message-circle"></i>
            <span class="ml-1">12</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</div>`},"/Users/goose/Spaces/pepeye/github/group/src/components/blocks/posts/Post.astro"),Jc=_(),Pa=S(async(e,i,n)=>{let t=e.createAstro(Jc,i,n);t.self=Pa;let o="Blog",a=(await Ze("blog")).sort((s,r)=>s.data.updated.valueOf()-r.data.updated.valueOf());return f`${C(e,"Layout",N,{title:o},{default:s=>f`${P(s)}<div id="content-start" class="section">
    <div class="container">
      <div class="has-text-centered py-12">
        <span class="tag is-primary is-curved is-outlined mb-2">Blog</span>
        <h2 class="title is-3">Latest Musings</h2>
        <p class="subtitle is-5 text-medium">
          Stay tuned to our new feed and don't miss anything
        </p>
      </div>

      <!-- Posts block v1 -->
      <div class="pb-12">
        <div class="posts-block-v1">
          <div class="columns is-multiline b-columns-half-tablet-p">
            ${a.map(r=>f`${C(s,"Post",_a,{title:r.data.title,description:r.data.description,image:r.data.image,avatar:r.data.avatar,slug:r.slug})}`)}
          </div>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/blog/index.astro"),Kc="/Users/goose/Spaces/pepeye/github/group/src/pages/blog/index.astro",Xc="/blog",Ta=Object.freeze(Object.defineProperty({__proto__:null,default:Pa,file:Kc,url:Xc},Symbol.toStringTag,{value:"Module"})),Zc=_();async function Qc(){return(await Ze("blog")).map(i=>({params:{slug:i.slug},props:i}))}var Ba=S(async(e,i,n)=>{let t=e.createAstro(Zc,i,n);t.self=Ba;let o=t.props,{Content:a}=await o.render();return f`${C(e,"Layout",N,{...o.data},{default:s=>f`${P(s)}<div class="section">
		<div class="container">
			<div class="has-text-centered py-12">
				<span class="tag is-primary is-curved is-outlined mb-2">Article</span>
				<h2 class="title is-3">${o.data.title}</h2>
				<p class="subtitle is-5 text-medium">
					${o.data.description}
				</p>
			</div>
		
			<!-- Content block v4 -->
			<div class="pb-12">
				<div class="content">
					${C(s,"Content",a,{})}
				</div>
			</div>
		</div>
	</div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/blog/[...slug].astro"),el="/Users/goose/Spaces/pepeye/github/group/src/pages/blog/[...slug].astro",tl="/blog/[...slug]",Ya=Object.freeze(Object.defineProperty({__proto__:null,default:Ba,file:el,getStaticPaths:Qc,url:tl},Symbol.toStringTag,{value:"Module"})),il=_(),ja=S(async(e,i,n)=>{let t=e.createAstro(il,i,n);return t.self=ja,f`${C(e,"Layout",Qe,{title:"Error 404"},{default:a=>f`${P(a)}<div class="hero is-fullheight is-grey error-hero">
    <!--Nav-->
    <div class="error-nav">
      <div class="container">
        <div class="error-nav-inner">
          <div class="start">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img class="light-image-block" src="/img/logo/ardency.svg" alt="">
                <img class="dark-image-block" src="/img/logo/ardency-white.svg" alt="">
              </a>
            </div>
          </div>
          <div class="end">
            <label class="theme-toggle">
              <input type="checkbox" x-on:change="toggleTheme()" :checked="$store.app.isDark">
              <span class="theme-toggle-inner">
                <i class="sun-icon iconify" data-icon="feather:sun"></i>
                <i class="moon-icon iconify" data-icon="feather:moon"></i>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-body">
      <div class="container">
        <div class="error-wrapper">
          <div class="error-wrapper-inner">
            <div class="error-image">
              <img class="light-image-block" src="/img/illustrations/404.svg" alt="Error image">
              <img class="dark-image-block" src="/img/illustrations/404-dark.svg" alt="Error image">
            </div>
            <div class="error-content">
              <h2 class="title is-3 is-leading">
                <span>Page Not Found</span>
              </h2>
              <p class="paragraph rem-115 mx-auto max-w-4 mb-4">
                Oops, something went wrong and we couldn't find that page.
                Please try again later.
              </p>
              <div class="buttons is-centered">
                <a href="/home-3" class="button is-primary raised">Homepage</a>
                <a class="button is-solid">Back</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`})}`},"/Users/goose/Spaces/pepeye/github/group/src/pages/404.astro"),nl="/Users/goose/Spaces/pepeye/github/group/src/pages/404.astro",al="/404",$a=Object.freeze(Object.defineProperty({__proto__:null,default:ja,file:nl,url:al},Symbol.toStringTag,{value:"Module"}));var Ou=W(se(),1),Uu=W(oe(),1);re();le();ce();ue();var ol=typeof process=="object"&&Object.prototype.toString.call(process)==="[object process]";function sl(){return new Proxy({},{get:(e,i)=>{console.warn(`Unable to access \`import.meta\0.env.${i.toString()}\` on initialization as the Cloudflare platform only provides the environment variables per request. Please move the environment variable access inside a function that's only called after a request has been received.`)}})}ol||(process.env=sl());function Wa(e){let i=new Ne(e);return{onRequest:async({request:t,next:o,...a})=>{process.env=a.env;let{pathname:s}=new URL(t.url);if(e.assets.has(s))return o(t);let r=i.match(t,{matchNotFound:!0});if(r){Reflect.set(t,Symbol.for("astro.clientAddress"),t.headers.get("cf-connecting-ip")),Reflect.set(t,Symbol.for("runtime"),{...a,name:"cloudflare",next:o});let c=await i.render(t,r);if(i.setCookieHeaders)for(let u of i.setCookieHeaders(c))c.headers.append("Set-Cookie",u);return c}return new Response(null,{status:404,statusText:"Not found"})}}}var Oa=Object.freeze(Object.defineProperty({__proto__:null,createExports:Wa},Symbol.toStringTag,{value:"Module"})),rl=new Map([["src/pages/index.astro",la],["src/pages/technology.astro",pa],["src/pages/advisory.astro",ma],["src/pages/contact.astro",ga],["src/pages/funding.astro",ya],["src/pages/policy/index.astro",wa],["src/pages/policy/[...slug].astro",Fa],["src/pages/signup.astro",Ea],["src/pages/login.astro",Aa],["src/pages/blog/index.astro",Ta],["src/pages/blog/[...slug].astro",Ya],["src/pages/404.astro",$a]]),cl=[Object.assign({name:"astro:jsx",serverEntrypoint:"astro/jsx/server.js",jsxImportSource:"astro"},{ssr:mn})],Ra=Object.assign(un({adapterName:"@astrojs/cloudflare",routes:[{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/",type:"page",pattern:"^\\/$",segments:[],params:[],component:"src/pages/index.astro",pathname:"/",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/technology",type:"page",pattern:"^\\/technology\\/?$",segments:[[{content:"technology",dynamic:!1,spread:!1}]],params:[],component:"src/pages/technology.astro",pathname:"/technology",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/advisory",type:"page",pattern:"^\\/advisory\\/?$",segments:[[{content:"advisory",dynamic:!1,spread:!1}]],params:[],component:"src/pages/advisory.astro",pathname:"/advisory",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/contact",type:"page",pattern:"^\\/contact\\/?$",segments:[[{content:"contact",dynamic:!1,spread:!1}]],params:[],component:"src/pages/contact.astro",pathname:"/contact",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/funding",type:"page",pattern:"^\\/funding\\/?$",segments:[[{content:"funding",dynamic:!1,spread:!1}]],params:[],component:"src/pages/funding.astro",pathname:"/funding",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/policy",type:"page",pattern:"^\\/policy\\/?$",segments:[[{content:"policy",dynamic:!1,spread:!1}]],params:[],component:"src/pages/policy/index.astro",pathname:"/policy",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/policy/[...slug]",type:"page",pattern:"^\\/policy(?:\\/(.*?))?\\/?$",segments:[[{content:"policy",dynamic:!1,spread:!1}],[{content:"...slug",dynamic:!0,spread:!0}]],params:["...slug"],component:"src/pages/policy/[...slug].astro",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.9c6a669a.js"}],routeData:{route:"/signup",type:"page",pattern:"^\\/signup\\/?$",segments:[[{content:"signup",dynamic:!1,spread:!1}]],params:[],component:"src/pages/signup.astro",pathname:"/signup",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.9c6a669a.js"}],routeData:{route:"/login",type:"page",pattern:"^\\/login\\/?$",segments:[[{content:"login",dynamic:!1,spread:!1}]],params:[],component:"src/pages/login.astro",pathname:"/login",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/blog",type:"page",pattern:"^\\/blog\\/?$",segments:[[{content:"blog",dynamic:!1,spread:!1}]],params:[],component:"src/pages/blog/index.astro",pathname:"/blog",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.2915be57.js"}],routeData:{route:"/blog/[...slug]",type:"page",pattern:"^\\/blog(?:\\/(.*?))?\\/?$",segments:[[{content:"blog",dynamic:!1,spread:!1}],[{content:"...slug",dynamic:!0,spread:!0}]],params:["...slug"],component:"src/pages/blog/[...slug].astro",prerender:!1,_meta:{trailingSlash:"ignore"}}},{file:"",links:["_astro/advisory.8c251acd.css"],scripts:[{type:"external",value:"_astro/hoisted.9c6a669a.js"}],routeData:{route:"/404",type:"page",pattern:"^\\/404\\/?$",segments:[[{content:"404",dynamic:!1,spread:!1}]],params:[],component:"src/pages/404.astro",pathname:"/404",prerender:!1,_meta:{trailingSlash:"ignore"}}}],base:"/",markdown:{drafts:!1,syntaxHighlight:"shiki",shikiConfig:{langs:[],theme:"github-dark",wrap:!1},remarkPlugins:[],rehypePlugins:[],remarkRehype:{},gfm:!0,smartypants:!0},pageMap:null,propagation:[["/Users/goose/Spaces/pepeye/github/group/src/pages/blog/[...slug].astro","in-tree"],["/Users/goose/Spaces/pepeye/github/group/src/pages/blog/index.astro","in-tree"],["/Users/goose/Spaces/pepeye/github/group/src/pages/policy/[...slug].astro","in-tree"],["/Users/goose/Spaces/pepeye/github/group/src/pages/policy/index.astro","in-tree"]],renderers:[],entryModules:{"\0@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/blog/markdown-styling.md?astroContent=true":"chunks/markdown-styling.ac4973c6.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/blog/state-of-european-tech.md?astroContent=true":"chunks/state-of-european-tech.c87e3c4a.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/policy/privacy.md?astroContent=true":"chunks/privacy.6c5f3cc5.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/policy/terms.md?astroContent=true":"chunks/terms.bea33c65.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/blog/markdown-styling.md?astroPropagatedAssets=true":"chunks/markdown-styling.d650df6e.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/blog/state-of-european-tech.md?astroPropagatedAssets=true":"chunks/state-of-european-tech.831733e6.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/policy/privacy.md?astroPropagatedAssets=true":"chunks/privacy.d206f80b.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/policy/terms.md?astroPropagatedAssets=true":"chunks/terms.fc08021c.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/blog/markdown-styling.md":"chunks/markdown-styling.3fbad70c.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/blog/state-of-european-tech.md":"chunks/state-of-european-tech.6227ef56.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/policy/privacy.md":"chunks/privacy.18626031.mjs","/Users/goose/Spaces/pepeye/github/group/src/content/policy/terms.md":"chunks/terms.112ad6be.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.2915be57.js","/astro/hoisted.js?q=1":"_astro/hoisted.9c6a669a.js","astro:scripts/before-hydration.js":""},assets:["/_astro/advisory.8c251acd.css","/_astro/hoisted.2915be57.js","/_astro/hoisted.9c6a669a.js","/_astro/main.a6a50ee3.js","/img/favicon.ico","/$server_build/_astro/advisory.8c251acd.css","/$server_build/chunks/astro.1c28a364.mjs","/$server_build/chunks/markdown-styling.3fbad70c.mjs","/$server_build/chunks/markdown-styling.ac4973c6.mjs","/$server_build/chunks/markdown-styling.d650df6e.mjs","/$server_build/chunks/privacy.18626031.mjs","/$server_build/chunks/privacy.6c5f3cc5.mjs","/$server_build/chunks/privacy.d206f80b.mjs","/$server_build/chunks/state-of-european-tech.6227ef56.mjs","/$server_build/chunks/state-of-european-tech.831733e6.mjs","/$server_build/chunks/state-of-european-tech.c87e3c4a.mjs","/$server_build/chunks/terms.112ad6be.mjs","/$server_build/chunks/terms.bea33c65.mjs","/$server_build/chunks/terms.fc08021c.mjs","/img/bg/footer-city.png","/img/bg/top-bg-alt.svg","/img/bg/top-bg.svg","/img/logo/ardency-white.svg","/img/logo/ardency.svg","/img/logo/ardencyio-white.svg","/img/logo/ardencyio.svg","/img/logo/icon.svg","/img/illustrations/404-dark.svg","/img/illustrations/404.svg","/img/illustrations/characters.svg","/img/illustrations/critical.svg","/img/illustrations/feature-1-dark.svg","/img/illustrations/feature-1.svg","/img/illustrations/feature-2-dark.svg","/img/illustrations/feature-2.svg","/img/illustrations/feature-3-dark.svg","/img/illustrations/feature-3.svg","/img/illustrations/feature-4-dark.svg","/img/illustrations/feature-4.svg","/img/illustrations/hero-1-dark.svg","/img/illustrations/hero-1.svg","/img/illustrations/hero-10-dark.svg","/img/illustrations/hero-10.svg","/img/illustrations/hero-11-dark.svg","/img/illustrations/hero-11.svg","/img/illustrations/hero-12-dark.svg","/img/illustrations/hero-12.svg","/img/illustrations/hero-2-dark.svg","/img/illustrations/hero-2.svg","/img/illustrations/hero-3-dark.svg","/img/illustrations/hero-3.svg","/img/illustrations/hero-4-dark.svg","/img/illustrations/hero-4.svg","/img/illustrations/hero-5-dark.svg","/img/illustrations/hero-5.svg","/img/illustrations/hero-6-dark.svg","/img/illustrations/hero-6.svg","/img/illustrations/hero-7-dark.svg","/img/illustrations/hero-7.svg","/img/illustrations/hero-8-dark.svg","/img/illustrations/hero-8.svg","/img/illustrations/hero-9-dark.svg","/img/illustrations/hero-9.svg","/img/illustrations/hero-dark.svg","/img/illustrations/hero-woman-2.svg","/img/illustrations/hero-woman.svg","/img/illustrations/hero.svg","/img/illustrations/mobile-feature-1-dark.svg","/img/illustrations/mobile-feature-1.svg","/img/illustrations/mobile-feature-2-dark.svg","/img/illustrations/mobile-feature-2.svg","/img/illustrations/mobile-feature-3-dark.svg","/img/illustrations/mobile-feature-3.svg","/img/illustrations/signup.svg","/img/illustrations/skyline.svg","/img/menu/aio.png","/img/menu/avc.png","/img/menu/code.png","/img/menu/plant.jpg","/img/photo/allhands.jpg","/img/vectors/business-decisions.svg","/img/vectors/code-testing.svg","/img/vectors/coding.svg","/img/vectors/consulting.svg","/img/vectors/contact-us.svg","/img/vectors/content.svg","/img/vectors/critical.svg","/img/vectors/design.svg","/img/vectors/efficiency.svg","/img/vectors/endpoints.svg","/img/vectors/good-team.svg","/img/vectors/investing.svg","/img/vectors/investment.svg","/img/vectors/login.svg","/img/vectors/ok.svg","/img/vectors/our-team.svg","/img/vectors/private-data.svg","/img/vectors/sdlc.svg","/img/vectors/signup.svg","/img/vectors/solving.svg","/img/vectors/terms-accept.svg","/$server_build/chunks/pages/all.fbac45ca.mjs","/img/logo/brands/aws.svg","/img/logo/brands/azure.svg","/img/logo/brands/digital-ocean.svg","/img/logo/brands/gcp.svg"]}),{pageMap:rl,renderers:cl}),ll=void 0,ul=Wa(Ra),Mu=ul.onRequest,Ua="start";Ua in Oa&&Oa[Ua](Ra,ll);export{Mu as onRequest,rl as pageMap,cl as renderers};
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
