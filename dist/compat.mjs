if(!Uint8Array.prototype.toHex)Object.defineProperty(Uint8Array.prototype,'toHex',{value:function(){return Array.from(this,b=>b.toString(16).padStart(2,'0')).join('');}});
if(!Uint8Array.prototype.toBase64)Object.defineProperty(Uint8Array.prototype,'toBase64',{value:function(){let s='';for(const b of this)s+=String.fromCharCode(b);return btoa(s);}});
if(!Uint8Array.fromBase64)Uint8Array.fromBase64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
