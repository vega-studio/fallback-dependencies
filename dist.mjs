#!/usr/bin/env bun
// @bun
import{createRequire as c6} from"node:module";var n6=Object.create;var{defineProperty:i0,getPrototypeOf:p6,getOwnPropertyNames:f6}=Object;var i6=Object.prototype.hasOwnProperty;var d6=(H,K,U)=>{U=H!=null?n6(p6(H)):{};const V=K||!H||!H.__esModule?i0(U,"default",{value:H,enumerable:!0}):U;for(let z of f6(H))if(!i6.call(V,z))i0(V,z,{get:()=>H[z],enumerable:!0});return V};var L=(H,K)=>()=>(K||H((K={exports:{}}).exports,K),K.exports);var $=c6(import.meta.url);var x=L((o6)=>{o6.fromCallback=function(H){return Object.defineProperty(function(...K){if(typeof K[K.length-1]==="function")H.apply(this,K);else return new Promise((U,V)=>{K.push((z,X)=>z!=null?V(z):U(X)),H.apply(this,K)})},"name",{value:H.name})};o6.fromPromise=function(H){return Object.defineProperty(function(...K){const U=K[K.length-1];if(typeof U!=="function")return H.apply(this,K);else K.pop(),H.apply(this,K).then((V)=>U(null,V),U)},"name",{value:H.name})}});var c0=L((WV,d0)=>{var s6=function(H){if(o.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./))K(H);if(!H.lutimes)U(H);if(H.chown=X(H.chown),H.fchown=X(H.fchown),H.lchown=X(H.lchown),H.chmod=V(H.chmod),H.fchmod=V(H.fchmod),H.lchmod=V(H.lchmod),H.chownSync=Z(H.chownSync),H.fchownSync=Z(H.fchownSync),H.lchownSync=Z(H.lchownSync),H.chmodSync=z(H.chmodSync),H.fchmodSync=z(H.fchmodSync),H.lchmodSync=z(H.lchmodSync),H.stat=Y(H.stat),H.fstat=Y(H.fstat),H.lstat=Y(H.lstat),H.statSync=W(H.statSync),H.fstatSync=W(H.fstatSync),H.lstatSync=W(H.lstatSync),H.chmod&&!H.lchmod)H.lchmod=function(G,O,A){if(A)process.nextTick(A)},H.lchmodSync=function(){};if(H.chown&&!H.lchown)H.lchown=function(G,O,A,J){if(J)process.nextTick(J)},H.lchownSync=function(){};if(t6==="win32")H.rename=typeof H.rename!=="function"?H.rename:function(G){function O(A,J,q){var E=Date.now(),Q=0;G(A,J,function R(n){if(n&&(n.code==="EACCES"||n.code==="EPERM"||n.code==="EBUSY")&&Date.now()-E<60000){if(setTimeout(function(){H.stat(J,function(g,G0){if(g&&g.code==="ENOENT")G(A,J,R);else q(n)})},Q),Q<100)Q+=10;return}if(q)q(n)})}if(Object.setPrototypeOf)Object.setPrototypeOf(O,G);return O}(H.rename);H.read=typeof H.read!=="function"?H.read:function(G){function O(A,J,q,E,Q,R){var n;if(R&&typeof R==="function"){var g=0;n=function(G0,p0,f0){if(G0&&G0.code==="EAGAIN"&&g<10)return g++,G.call(H,A,J,q,E,Q,n);R.apply(this,arguments)}}return G.call(H,A,J,q,E,Q,n)}if(Object.setPrototypeOf)Object.setPrototypeOf(O,G);return O}(H.read),H.readSync=typeof H.readSync!=="function"?H.readSync:function(G){return function(O,A,J,q,E){var Q=0;while(!0)try{return G.call(H,O,A,J,q,E)}catch(R){if(R.code==="EAGAIN"&&Q<10){Q++;continue}throw R}}}(H.readSync);function K(G){G.lchmod=function(O,A,J){G.open(O,o.O_WRONLY|o.O_SYMLINK,A,function(q,E){if(q){if(J)J(q);return}G.fchmod(E,A,function(Q){G.close(E,function(R){if(J)J(Q||R)})})})},G.lchmodSync=function(O,A){var J=G.openSync(O,o.O_WRONLY|o.O_SYMLINK,A),q=!0,E;try{E=G.fchmodSync(J,A),q=!1}finally{if(q)try{G.closeSync(J)}catch(Q){}else G.closeSync(J)}return E}}function U(G){if(o.hasOwnProperty("O_SYMLINK")&&G.futimes)G.lutimes=function(O,A,J,q){G.open(O,o.O_SYMLINK,function(E,Q){if(E){if(q)q(E);return}G.futimes(Q,A,J,function(R){G.close(Q,function(n){if(q)q(R||n)})})})},G.lutimesSync=function(O,A,J){var q=G.openSync(O,o.O_SYMLINK),E,Q=!0;try{E=G.futimesSync(q,A,J),Q=!1}finally{if(Q)try{G.closeSync(q)}catch(R){}else G.closeSync(q)}return E};else if(G.futimes)G.lutimes=function(O,A,J,q){if(q)process.nextTick(q)},G.lutimesSync=function(){}}function V(G){if(!G)return G;return function(O,A,J){return G.call(H,O,A,function(q){if(D(q))q=null;if(J)J.apply(this,arguments)})}}function z(G){if(!G)return G;return function(O,A){try{return G.call(H,O,A)}catch(J){if(!D(J))throw J}}}function X(G){if(!G)return G;return function(O,A,J,q){return G.call(H,O,A,J,function(E){if(D(E))E=null;if(q)q.apply(this,arguments)})}}function Z(G){if(!G)return G;return function(O,A,J){try{return G.call(H,O,A,J)}catch(q){if(!D(q))throw q}}}function Y(G){if(!G)return G;return function(O,A,J){if(typeof A==="function")J=A,A=null;function q(E,Q){if(Q){if(Q.uid<0)Q.uid+=4294967296;if(Q.gid<0)Q.gid+=4294967296}if(J)J.apply(this,arguments)}return A?G.call(H,O,A,q):G.call(H,O,q)}}function W(G){if(!G)return G;return function(O,A){var J=A?G.call(H,O,A):G.call(H,O);if(J){if(J.uid<0)J.uid+=4294967296;if(J.gid<0)J.gid+=4294967296}return J}}function D(G){if(!G)return!0;if(G.code==="ENOSYS")return!0;var O=!process.getuid||process.getuid()!==0;if(O){if(G.code==="EINVAL"||G.code==="EPERM")return!0}return!1}},o=import.meta.require("constants"),e6=process.cwd,_0=null,t6=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){if(!_0)_0=e6.call(process);return _0};try{process.cwd()}catch(H){}if(typeof process.chdir==="function"){if($0=process.chdir,process.chdir=function(H){_0=null,$0.call(process,H)},Object.setPrototypeOf)Object.setPrototypeOf(process.chdir,$0)}var $0;d0.exports=s6});var r0=L((CV,a0)=>{var HK=function(H){return{ReadStream:K,WriteStream:U};function K(V,z){if(!(this instanceof K))return new K(V,z);o0.call(this);var X=this;this.path=V,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=65536,z=z||{};var Z=Object.keys(z);for(var Y=0,W=Z.length;Y<W;Y++){var D=Z[Y];this[D]=z[D]}if(this.encoding)this.setEncoding(this.encoding);if(this.start!==void 0){if(typeof this.start!=="number")throw TypeError("start must be a Number");if(this.end===void 0)this.end=Infinity;else if(typeof this.end!=="number")throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(this.fd!==null){process.nextTick(function(){X._read()});return}H.open(this.path,this.flags,this.mode,function(G,O){if(G){X.emit("error",G),X.readable=!1;return}X.fd=O,X.emit("open",O),X._read()})}function U(V,z){if(!(this instanceof U))return new U(V,z);o0.call(this),this.path=V,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,z=z||{};var X=Object.keys(z);for(var Z=0,Y=X.length;Z<Y;Z++){var W=X[Z];this[W]=z[W]}if(this.start!==void 0){if(typeof this.start!=="number")throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}if(this.busy=!1,this._queue=[],this.fd===null)this._open=H.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush()}},o0=import.meta.require("stream").Stream;a0.exports=HK});var t0=L((MV,e0)=>{var UK=function(H){if(H===null||typeof H!=="object")return H;if(H instanceof Object)var K={__proto__:KK(H)};else var K=Object.create(null);return Object.getOwnPropertyNames(H).forEach(function(U){Object.defineProperty(K,U,Object.getOwnPropertyDescriptor(H,U))}),K};e0.exports=UK;var KK=Object.getPrototypeOf||function(H){return H.__proto__}});var K0=L((RV,F0)=>{var ZK=function(){},KH=function(H,K){Object.defineProperty(H,y,{get:function(){return K}})},x0=function(H){VK(H),H.gracefulify=x0,H.createReadStream=p0,H.createWriteStream=f0;var K=H.readFile;H.readFile=U;function U(B,I,_){if(typeof I==="function")_=I,I=null;return F(B,I,_);function F(k,P,N,w){return K(k,P,function(C){if(C&&(C.code==="EMFILE"||C.code==="ENFILE"))H0([F,[k,P,N],C,w||Date.now(),Date.now()]);else if(typeof N==="function")N.apply(this,arguments)})}}var V=H.writeFile;H.writeFile=z;function z(B,I,_,F){if(typeof _==="function")F=_,_=null;return k(B,I,_,F);function k(P,N,w,C,v){return V(P,N,w,function(M){if(M&&(M.code==="EMFILE"||M.code==="ENFILE"))H0([k,[P,N,w,C],M,v||Date.now(),Date.now()]);else if(typeof C==="function")C.apply(this,arguments)})}}var X=H.appendFile;if(X)H.appendFile=Z;function Z(B,I,_,F){if(typeof _==="function")F=_,_=null;return k(B,I,_,F);function k(P,N,w,C,v){return X(P,N,w,function(M){if(M&&(M.code==="EMFILE"||M.code==="ENFILE"))H0([k,[P,N,w,C],M,v||Date.now(),Date.now()]);else if(typeof C==="function")C.apply(this,arguments)})}}var Y=H.copyFile;if(Y)H.copyFile=W;function W(B,I,_,F){if(typeof _==="function")F=_,_=0;return k(B,I,_,F);function k(P,N,w,C,v){return Y(P,N,w,function(M){if(M&&(M.code==="EMFILE"||M.code==="ENFILE"))H0([k,[P,N,w,C],M,v||Date.now(),Date.now()]);else if(typeof C==="function")C.apply(this,arguments)})}}var D=H.readdir;H.readdir=O;var G=/^v[0-5]\./;function O(B,I,_){if(typeof I==="function")_=I,I=null;var F=G.test(process.version)?function P(N,w,C,v){return D(N,k(N,w,C,v))}:function P(N,w,C,v){return D(N,w,k(N,w,C,v))};return F(B,I,_);function k(P,N,w,C){return function(v,M){if(v&&(v.code==="EMFILE"||v.code==="ENFILE"))H0([F,[P,N,w],v,C||Date.now(),Date.now()]);else{if(M&&M.sort)M.sort();if(typeof w==="function")w.call(this,v,M)}}}}if(process.version.substr(0,4)==="v0.8"){var A=zK(H);R=A.ReadStream,g=A.WriteStream}var J=H.ReadStream;if(J)R.prototype=Object.create(J.prototype),R.prototype.open=n;var q=H.WriteStream;if(q)g.prototype=Object.create(q.prototype),g.prototype.open=G0;Object.defineProperty(H,"ReadStream",{get:function(){return R},set:function(B){R=B},enumerable:!0,configurable:!0}),Object.defineProperty(H,"WriteStream",{get:function(){return g},set:function(B){g=B},enumerable:!0,configurable:!0});var E=R;Object.defineProperty(H,"FileReadStream",{get:function(){return E},set:function(B){E=B},enumerable:!0,configurable:!0});var Q=g;Object.defineProperty(H,"FileWriteStream",{get:function(){return Q},set:function(B){Q=B},enumerable:!0,configurable:!0});function R(B,I){if(this instanceof R)return J.apply(this,arguments),this;else return R.apply(Object.create(R.prototype),arguments)}function n(){var B=this;P0(B.path,B.flags,B.mode,function(I,_){if(I){if(B.autoClose)B.destroy();B.emit("error",I)}else B.fd=_,B.emit("open",_),B.read()})}function g(B,I){if(this instanceof g)return q.apply(this,arguments),this;else return g.apply(Object.create(g.prototype),arguments)}function G0(){var B=this;P0(B.path,B.flags,B.mode,function(I,_){if(I)B.destroy(),B.emit("error",I);else B.fd=_,B.emit("open",_)})}function p0(B,I){return new H.ReadStream(B,I)}function f0(B,I){return new H.WriteStream(B,I)}var l6=H.open;H.open=P0;function P0(B,I,_,F){if(typeof _==="function")F=_,_=null;return k(B,I,_,F);function k(P,N,w,C,v){return l6(P,N,w,function(M,_V){if(M&&(M.code==="EMFILE"||M.code==="ENFILE"))H0([k,[P,N,w,C],M,v||Date.now(),Date.now()]);else if(typeof C==="function")C.apply(this,arguments)})}}return H},H0=function(H){t("ENQUEUE",H[0].name,H[1]),T[y].push(H),j0()},HH=function(){var H=Date.now();for(var K=0;K<T[y].length;++K)if(T[y][K].length>2)T[y][K][3]=H,T[y][K][4]=H;j0()},j0=function(){if(clearTimeout(I0),I0=void 0,T[y].length===0)return;var H=T[y].shift(),K=H[0],U=H[1],V=H[2],z=H[3],X=H[4];if(z===void 0)t("RETRY",K.name,U),K.apply(null,U);else if(Date.now()-z>=60000){t("TIMEOUT",K.name,U);var Z=U.pop();if(typeof Z==="function")Z.call(null,V)}else{var Y=Date.now()-X,W=Math.max(X-z,1),D=Math.min(W*1.2,100);if(Y>=D)t("RETRY",K.name,U),K.apply(null,U.concat([z]));else T[y].push(H)}if(I0===void 0)I0=setTimeout(j0,0)},T=import.meta.require("fs"),VK=c0(),zK=r0(),XK=t0(),E0=import.meta.require("util"),y,Q0;if(typeof Symbol==="function"&&typeof Symbol.for==="function")y=Symbol.for("graceful-fs.queue"),Q0=Symbol.for("graceful-fs.previous");else y="___graceful-fs.queue",Q0="___graceful-fs.previous";var t=ZK;if(E0.debuglog)t=E0.debuglog("gfs4");else if(/\bgfs4\b/i.test(process.env.NODE_DEBUG||""))t=function(){var H=E0.format.apply(E0,arguments);H="GFS4: "+H.split(/\n/).join("\nGFS4: "),console.error(H)};if(!T[y]){if(s0=global[y]||[],KH(T,s0),T.close=function(H){function K(U,V){return H.call(T,U,function(z){if(!z)HH();if(typeof V==="function")V.apply(this,arguments)})}return Object.defineProperty(K,Q0,{value:H}),K}(T.close),T.closeSync=function(H){function K(U){H.apply(T,arguments),HH()}return Object.defineProperty(K,Q0,{value:H}),K}(T.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||""))process.on("exit",function(){t(T[y]),import.meta.require("assert").equal(T[y].length,0)})}var s0;if(!global[y])KH(global,T[y]);F0.exports=x0(XK(T));if(process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!T.__patched)F0.exports=x0(T),T.__patched=!0;var I0});var S=L((k0)=>{var UH=x().fromCallback,u=K0(),GK=["access","appendFile","chmod","chown","close","copyFile","fchmod","fchown","fdatasync","fstat","fsync","ftruncate","futimes","lchmod","lchown","link","lstat","mkdir","mkdtemp","open","opendir","readdir","readFile","readlink","realpath","rename","rm","rmdir","stat","symlink","truncate","unlink","utimes","writeFile"].filter((H)=>{return typeof u[H]==="function"});Object.assign(k0,u);GK.forEach((H)=>{k0[H]=UH(u[H])});k0.exists=function(H,K){if(typeof K==="function")return u.exists(H,K);return new Promise((U)=>{return u.exists(H,U)})};k0.read=function(H,K,U,V,z,X){if(typeof X==="function")return u.read(H,K,U,V,z,X);return new Promise((Z,Y)=>{u.read(H,K,U,V,z,(W,D,G)=>{if(W)return Y(W);Z({bytesRead:D,buffer:G})})})};k0.write=function(H,K,...U){if(typeof U[U.length-1]==="function")return u.write(H,K,...U);return new Promise((V,z)=>{u.write(H,K,...U,(X,Z,Y)=>{if(X)return z(X);V({bytesWritten:Z,buffer:Y})})})};k0.readv=function(H,K,...U){if(typeof U[U.length-1]==="function")return u.readv(H,K,...U);return new Promise((V,z)=>{u.readv(H,K,...U,(X,Z,Y)=>{if(X)return z(X);V({bytesRead:Z,buffers:Y})})})};k0.writev=function(H,K,...U){if(typeof U[U.length-1]==="function")return u.writev(H,K,...U);return new Promise((V,z)=>{u.writev(H,K,...U,(X,Z,Y)=>{if(X)return z(X);V({bytesWritten:Z,buffers:Y})})})};if(typeof u.realpath.native==="function")k0.realpath.native=UH(u.realpath.native);else process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?","Warning","fs-extra-WARN0003")});var zH=L((LK,VH)=>{var BK=import.meta.require("path");LK.checkPath=function H(K){if(process.platform==="win32"){if(/[<>:"|?*]/.test(K.replace(BK.parse(K).root,""))){const V=new Error(`Path contains invalid characters: ${K}`);throw V.code="EINVAL",V}}}});var JH=L((EK,v0)=>{var XH=S(),{checkPath:ZH}=zH(),GH=(H)=>{const K={mode:511};if(typeof H==="number")return H;return{...K,...H}.mode};EK.makeDir=async(H,K)=>{return ZH(H),XH.mkdir(H,{mode:GH(K),recursive:!0})};EK.makeDirSync=(H,K)=>{return ZH(H),XH.mkdirSync(H,{mode:GH(K),recursive:!0})}});var i=L((wV,YH)=>{var WK=x().fromPromise,{makeDir:CK,makeDirSync:y0}=JH(),b0=WK(CK);YH.exports={mkdirs:b0,mkdirsSync:y0,mkdirp:b0,mkdirpSync:y0,ensureDir:b0,ensureDirSync:y0}});var a=L((DV,qH)=>{var RK=function(H){return AH.access(H).then(()=>!0).catch(()=>!1)},MK=x().fromPromise,AH=S();qH.exports={pathExists:MK(RK),pathExistsSync:AH.existsSync}});var g0=L((PV,OH)=>{async function TK(H,K,U){const V=await U0.open(H,"r+");let z=null;try{await U0.futimes(V,K,U)}finally{try{await U0.close(V)}catch(X){z=X}}if(z)throw z}var wK=function(H,K,U){const V=U0.openSync(H,"r+");return U0.futimesSync(V,K,U),U0.closeSync(V)},U0=S(),NK=x().fromPromise;OH.exports={utimesMillis:NK(TK),utimesMillisSync:wK}});var s=L(($V,EH)=>{var DK=function(H,K,U){const V=U.dereference?(z)=>V0.stat(z,{bigint:!0}):(z)=>V0.lstat(z,{bigint:!0});return Promise.all([V(H),V(K).catch((z)=>{if(z.code==="ENOENT")return null;throw z})]).then(([z,X])=>({srcStat:z,destStat:X}))},PK=function(H,K,U){let V;const z=U.dereference?(Z)=>V0.statSync(Z,{bigint:!0}):(Z)=>V0.lstatSync(Z,{bigint:!0}),X=z(H);try{V=z(K)}catch(Z){if(Z.code==="ENOENT")return{srcStat:X,destStat:null};throw Z}return{srcStat:X,destStat:V}};async function $K(H,K,U,V){const{srcStat:z,destStat:X}=await DK(H,K,V);if(X){if(J0(z,X)){const Z=j.basename(H),Y=j.basename(K);if(U==="move"&&Z!==Y&&Z.toLowerCase()===Y.toLowerCase())return{srcStat:z,destStat:X,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(z.isDirectory()&&!X.isDirectory())throw new Error(`Cannot overwrite non-directory '${K}' with directory '${H}'.`);if(!z.isDirectory()&&X.isDirectory())throw new Error(`Cannot overwrite directory '${K}' with non-directory '${H}'.`)}if(z.isDirectory()&&u0(H,K))throw new Error(W0(H,K,U));return{srcStat:z,destStat:X}}var xK=function(H,K,U,V){const{srcStat:z,destStat:X}=PK(H,K,V);if(X){if(J0(z,X)){const Z=j.basename(H),Y=j.basename(K);if(U==="move"&&Z!==Y&&Z.toLowerCase()===Y.toLowerCase())return{srcStat:z,destStat:X,isChangingCase:!0};throw new Error("Source and destination must not be the same.")}if(z.isDirectory()&&!X.isDirectory())throw new Error(`Cannot overwrite non-directory '${K}' with directory '${H}'.`);if(!z.isDirectory()&&X.isDirectory())throw new Error(`Cannot overwrite directory '${K}' with non-directory '${H}'.`)}if(z.isDirectory()&&u0(H,K))throw new Error(W0(H,K,U));return{srcStat:z,destStat:X}};async function LH(H,K,U,V){const z=j.resolve(j.dirname(H)),X=j.resolve(j.dirname(U));if(X===z||X===j.parse(X).root)return;let Z;try{Z=await V0.stat(X,{bigint:!0})}catch(Y){if(Y.code==="ENOENT")return;throw Y}if(J0(K,Z))throw new Error(W0(H,U,V));return LH(H,K,X,V)}var _H=function(H,K,U,V){const z=j.resolve(j.dirname(H)),X=j.resolve(j.dirname(U));if(X===z||X===j.parse(X).root)return;let Z;try{Z=V0.statSync(X,{bigint:!0})}catch(Y){if(Y.code==="ENOENT")return;throw Y}if(J0(K,Z))throw new Error(W0(H,U,V));return _H(H,K,X,V)},J0=function(H,K){return K.ino&&K.dev&&K.ino===H.ino&&K.dev===H.dev},u0=function(H,K){const U=j.resolve(H).split(j.sep).filter((z)=>z),V=j.resolve(K).split(j.sep).filter((z)=>z);return U.every((z,X)=>V[X]===z)},W0=function(H,K,U){return`Cannot ${U} '${H}' to a subdirectory of itself, '${K}'.`},V0=S(),j=import.meta.require("path"),BH=x().fromPromise;EH.exports={checkPaths:BH($K),checkPathsSync:xK,checkParentPaths:BH(LH),checkParentPathsSync:_H,isSrcSubdir:u0,areIdentical:J0}});var MH=L((xV,CH)=>{async function vK(H,K,U={}){if(typeof U==="function")U={filter:U};if(U.clobber="clobber"in U?!!U.clobber:!0,U.overwrite="overwrite"in U?!!U.overwrite:U.clobber,U.preserveTimestamps&&process.arch==="ia32")process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269","Warning","fs-extra-WARN0001");const{srcStat:V,destStat:z}=await A0.checkPaths(H,K,"copy",U);if(await A0.checkParentPaths(H,V,K,"copy"),!await QH(H,K,U))return;const Z=Y0.dirname(K);if(!await FK(Z))await jK(Z);await WH(z,H,K,U)}async function QH(H,K,U){if(!U.filter)return!0;return U.filter(H,K)}async function WH(H,K,U,V){const X=await(V.dereference?b.stat:b.lstat)(K);if(X.isDirectory())return uK(X,H,K,U,V);if(X.isFile()||X.isCharacterDevice()||X.isBlockDevice())return yK(X,H,K,U,V);if(X.isSymbolicLink())return SK(H,K,U,V);if(X.isSocket())throw new Error(`Cannot copy a socket file: ${K}`);if(X.isFIFO())throw new Error(`Cannot copy a FIFO pipe: ${K}`);throw new Error(`Unknown file: ${K}`)}async function yK(H,K,U,V,z){if(!K)return IH(H,U,V,z);if(z.overwrite)return await b.unlink(V),IH(H,U,V,z);if(z.errorOnExist)throw new Error(`'${V}' already exists`)}async function IH(H,K,U,V){if(await b.copyFile(K,U),V.preserveTimestamps){if(bK(H.mode))await gK(U,H.mode);const z=await b.stat(K);await kK(U,z.atime,z.mtime)}return b.chmod(U,H.mode)}var bK=function(H){return(H&128)===0},gK=function(H,K){return b.chmod(H,K|128)};async function uK(H,K,U,V,z){if(!K)await b.mkdir(V);const X=await b.readdir(U);if(await Promise.all(X.map(async(Z)=>{const Y=Y0.join(U,Z),W=Y0.join(V,Z);if(!await QH(Y,W,z))return;const{destStat:G}=await A0.checkPaths(Y,W,"copy",z);return WH(G,Y,W,z)})),!K)await b.chmod(V,H.mode)}async function SK(H,K,U,V){let z=await b.readlink(K);if(V.dereference)z=Y0.resolve(process.cwd(),z);if(!H)return b.symlink(z,U);let X=null;try{X=await b.readlink(U)}catch(Z){if(Z.code==="EINVAL"||Z.code==="UNKNOWN")return b.symlink(z,U);throw Z}if(V.dereference)X=Y0.resolve(process.cwd(),X);if(A0.isSrcSubdir(z,X))throw new Error(`Cannot copy '${z}' to a subdirectory of itself, '${X}'.`);if(A0.isSrcSubdir(X,z))throw new Error(`Cannot overwrite '${X}' with '${z}'.`);return await b.unlink(U),b.symlink(z,U)}var b=S(),Y0=import.meta.require("path"),{mkdirs:jK}=i(),{pathExists:FK}=a(),{utimesMillis:kK}=g0(),A0=s();CH.exports=vK});var DH=L((jV,wH)=>{var lK=function(H,K,U){if(typeof U==="function")U={filter:U};if(U=U||{},U.clobber="clobber"in U?!!U.clobber:!0,U.overwrite="overwrite"in U?!!U.overwrite:U.clobber,U.preserveTimestamps&&process.arch==="ia32")process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n\tsee https://github.com/jprichardson/node-fs-extra/issues/269","Warning","fs-extra-WARN0002");const{srcStat:V,destStat:z}=O0.checkPathsSync(H,K,"copy",U);if(O0.checkParentPathsSync(H,V,K,"copy"),U.filter&&!U.filter(H,K))return;const X=q0.dirname(K);if(!h.existsSync(X))hK(X);return RH(z,H,K,U)},RH=function(H,K,U,V){const X=(V.dereference?h.statSync:h.lstatSync)(K);if(X.isDirectory())return oK(X,H,K,U,V);else if(X.isFile()||X.isCharacterDevice()||X.isBlockDevice())return nK(X,H,K,U,V);else if(X.isSymbolicLink())return eK(H,K,U,V);else if(X.isSocket())throw new Error(`Cannot copy a socket file: ${K}`);else if(X.isFIFO())throw new Error(`Cannot copy a FIFO pipe: ${K}`);throw new Error(`Unknown file: ${K}`)},nK=function(H,K,U,V,z){if(!K)return NH(H,U,V,z);return pK(H,U,V,z)},pK=function(H,K,U,V){if(V.overwrite)return h.unlinkSync(U),NH(H,K,U,V);else if(V.errorOnExist)throw new Error(`'${U}' already exists`)},NH=function(H,K,U,V){if(h.copyFileSync(K,U),V.preserveTimestamps)fK(H.mode,K,U);return S0(U,H.mode)},fK=function(H,K,U){if(iK(H))dK(U,H);return cK(K,U)},iK=function(H){return(H&128)===0},dK=function(H,K){return S0(H,K|128)},S0=function(H,K){return h.chmodSync(H,K)},cK=function(H,K){const U=h.statSync(H);return mK(K,U.atime,U.mtime)},oK=function(H,K,U,V,z){if(!K)return aK(H.mode,U,V,z);return TH(U,V,z)},aK=function(H,K,U,V){return h.mkdirSync(U),TH(K,U,V),S0(U,H)},TH=function(H,K,U){h.readdirSync(H).forEach((V)=>rK(V,H,K,U))},rK=function(H,K,U,V){const z=q0.join(K,H),X=q0.join(U,H);if(V.filter&&!V.filter(z,X))return;const{destStat:Z}=O0.checkPathsSync(z,X,"copy",V);return RH(Z,z,X,V)},eK=function(H,K,U,V){let z=h.readlinkSync(K);if(V.dereference)z=q0.resolve(process.cwd(),z);if(!H)return h.symlinkSync(z,U);else{let X;try{X=h.readlinkSync(U)}catch(Z){if(Z.code==="EINVAL"||Z.code==="UNKNOWN")return h.symlinkSync(z,U);throw Z}if(V.dereference)X=q0.resolve(process.cwd(),X);if(O0.isSrcSubdir(z,X))throw new Error(`Cannot copy '${z}' to a subdirectory of itself, '${X}'.`);if(O0.isSrcSubdir(X,z))throw new Error(`Cannot overwrite '${X}' with '${z}'.`);return tK(z,U)}},tK=function(H,K){return h.unlinkSync(K),h.symlinkSync(H,K)},h=K0(),q0=import.meta.require("path"),hK=i().mkdirsSync,mK=g0().utimesMillisSync,O0=s();wH.exports=lK});var C0=L((FV,PH)=>{var sK=x().fromPromise;PH.exports={copy:sK(MH()),copySync:DH()}});var B0=L((kV,xH)=>{var KU=function(H,K){$H.rm(H,{recursive:!0,force:!0},K)},UU=function(H){$H.rmSync(H,{recursive:!0,force:!0})},$H=K0(),HU=x().fromCallback;xH.exports={remove:HU(KU),removeSync:UU}});var uH=L((vV,gH)=>{var FH=function(H){let K;try{K=kH.readdirSync(H)}catch{return yH.mkdirsSync(H)}K.forEach((U)=>{U=vH.join(H,U),bH.removeSync(U)})},VU=x().fromPromise,kH=S(),vH=import.meta.require("path"),yH=i(),bH=B0(),jH=VU(async function H(K){let U;try{U=await kH.readdir(K)}catch{return yH.mkdirs(K)}return Promise.all(U.map((V)=>bH.remove(vH.join(K,V))))});gH.exports={emptyDirSync:FH,emptydirSync:FH,emptyDir:jH,emptydir:jH}});var lH=L((yV,mH)=>{async function XU(H){let K;try{K=await c.stat(H)}catch{}if(K&&K.isFile())return;const U=SH.dirname(H);let V=null;try{V=await c.stat(U)}catch(z){if(z.code==="ENOENT"){await hH.mkdirs(U),await c.writeFile(H,"");return}else throw z}if(V.isDirectory())await c.writeFile(H,"");else await c.readdir(U)}var ZU=function(H){let K;try{K=c.statSync(H)}catch{}if(K&&K.isFile())return;const U=SH.dirname(H);try{if(!c.statSync(U).isDirectory())c.readdirSync(U)}catch(V){if(V&&V.code==="ENOENT")hH.mkdirsSync(U);else throw V}c.writeFileSync(H,"")},zU=x().fromPromise,SH=import.meta.require("path"),c=S(),hH=i();mH.exports={createFile:zU(XU),createFileSync:ZU}});var dH=L((bV,iH)=>{async function YU(H,K){let U;try{U=await r.lstat(K)}catch{}let V;try{V=await r.lstat(H)}catch(Z){throw Z.message=Z.message.replace("lstat","ensureLink"),Z}if(U&&fH(V,U))return;const z=nH.dirname(K);if(!await JU(z))await pH.mkdirs(z);await r.link(H,K)}var AU=function(H,K){let U;try{U=r.lstatSync(K)}catch{}try{const X=r.lstatSync(H);if(U&&fH(X,U))return}catch(X){throw X.message=X.message.replace("lstat","ensureLink"),X}const V=nH.dirname(K);if(r.existsSync(V))return r.linkSync(H,K);return pH.mkdirsSync(V),r.linkSync(H,K)},GU=x().fromPromise,nH=import.meta.require("path"),r=S(),pH=i(),{pathExists:JU}=a(),{areIdentical:fH}=s();iH.exports={createLink:GU(YU),createLinkSync:AU}});var oH=L((gV,cH)=>{async function BU(H,K){if(e.isAbsolute(H)){try{await L0.lstat(H)}catch(X){throw X.message=X.message.replace("lstat","ensureSymlink"),X}return{toCwd:H,toDst:H}}const U=e.dirname(K),V=e.join(U,H);if(await qU(V))return{toCwd:V,toDst:H};try{await L0.lstat(H)}catch(X){throw X.message=X.message.replace("lstat","ensureSymlink"),X}return{toCwd:H,toDst:e.relative(U,H)}}var LU=function(H,K){if(e.isAbsolute(H)){if(!L0.existsSync(H))throw new Error("absolute srcpath does not exist");return{toCwd:H,toDst:H}}const U=e.dirname(K),V=e.join(U,H);if(L0.existsSync(V))return{toCwd:V,toDst:H};if(!L0.existsSync(H))throw new Error("relative srcpath does not exist");return{toCwd:H,toDst:e.relative(U,H)}},e=import.meta.require("path"),L0=S(),{pathExists:qU}=a(),OU=x().fromPromise;cH.exports={symlinkPaths:OU(BU),symlinkPathsSync:LU}});var eH=L((uV,rH)=>{async function EU(H,K){if(K)return K;let U;try{U=await aH.lstat(H)}catch{return"file"}return U&&U.isDirectory()?"dir":"file"}var IU=function(H,K){if(K)return K;let U;try{U=aH.lstatSync(H)}catch{return"file"}return U&&U.isDirectory()?"dir":"file"},aH=S(),_U=x().fromPromise;rH.exports={symlinkType:_U(EU),symlinkTypeSync:IU}});var K6=L((SV,H6)=>{async function DU(H,K,U){let V;try{V=await d.lstat(K)}catch{}if(V&&V.isSymbolicLink()){const[Y,W]=await Promise.all([d.stat(H),d.stat(K)]);if(sH(Y,W))return}const z=await MU(H,K);H=z.toDst;const X=await NU(z.toCwd,U),Z=tH.dirname(K);if(!await wU(Z))await WU(Z);return d.symlink(H,K,X)}var PU=function(H,K,U){let V;try{V=d.lstatSync(K)}catch{}if(V&&V.isSymbolicLink()){const Y=d.statSync(H),W=d.statSync(K);if(sH(Y,W))return}const z=RU(H,K);H=z.toDst,U=TU(z.toCwd,U);const X=tH.dirname(K);if(d.existsSync(X))return d.symlinkSync(H,K,U);return CU(X),d.symlinkSync(H,K,U)},QU=x().fromPromise,tH=import.meta.require("path"),d=S(),{mkdirs:WU,mkdirsSync:CU}=i(),{symlinkPaths:MU,symlinkPathsSync:RU}=oH(),{symlinkType:NU,symlinkTypeSync:TU}=eH(),{pathExists:wU}=a(),{areIdentical:sH}=s();H6.exports={createSymlink:QU(DU),createSymlinkSync:PU}});var Y6=L((hV,J6)=>{var{createFile:U6,createFileSync:V6}=lH(),{createLink:z6,createLinkSync:X6}=dH(),{createSymlink:Z6,createSymlinkSync:G6}=K6();J6.exports={createFile:U6,createFileSync:V6,ensureFile:U6,ensureFileSync:V6,createLink:z6,createLinkSync:X6,ensureLink:z6,ensureLinkSync:X6,createSymlink:Z6,createSymlinkSync:G6,ensureSymlink:Z6,ensureSymlinkSync:G6}});var M0=L((mV,A6)=>{var $U=function(H,{EOL:K="\n",finalEOL:U=!0,replacer:V=null,spaces:z}={}){const X=U?K:"";return JSON.stringify(H,V,z).replace(/\n/g,K)+X},xU=function(H){if(Buffer.isBuffer(H))H=H.toString("utf8");return H.replace(/^\uFEFF/,"")};A6.exports={stringify:$U,stripBom:xU}});var L6=L((lV,B6)=>{async function jU(H,K={}){if(typeof K==="string")K={encoding:K};const U=K.fs||z0,V="throws"in K?K.throws:!0;let z=await R0.fromCallback(U.readFile)(H,K);z=O6(z);let X;try{X=JSON.parse(z,K?K.reviver:null)}catch(Z){if(V)throw Z.message=`${H}: ${Z.message}`,Z;else return null}return X}var kU=function(H,K={}){if(typeof K==="string")K={encoding:K};const U=K.fs||z0,V="throws"in K?K.throws:!0;try{let z=U.readFileSync(H,K);return z=O6(z),JSON.parse(z,K.reviver)}catch(z){if(V)throw z.message=`${H}: ${z.message}`,z;else return null}};async function vU(H,K,U={}){const V=U.fs||z0,z=q6(K,U);await R0.fromCallback(V.writeFile)(H,z,U)}var bU=function(H,K,U={}){const V=U.fs||z0,z=q6(K,U);return V.writeFileSync(H,z,U)},z0;try{z0=K0()}catch(H){z0=import.meta.require("fs")}var R0=x(),{stringify:q6,stripBom:O6}=M0(),FU=R0.fromPromise(jU),yU=R0.fromPromise(vU),gU={readFile:FU,readFileSync:kU,writeFile:yU,writeFileSync:bU};B6.exports=gU});var E6=L((nV,_6)=>{var N0=L6();_6.exports={readJson:N0.readFile,readJsonSync:N0.readFileSync,writeJson:N0.writeFile,writeJsonSync:N0.writeFileSync}});var T0=L((pV,W6)=>{async function hU(H,K,U="utf-8"){const V=I6.dirname(H);if(!await SU(V))await Q6.mkdirs(V);return h0.writeFile(H,K,U)}var mU=function(H,...K){const U=I6.dirname(H);if(!h0.existsSync(U))Q6.mkdirsSync(U);h0.writeFileSync(H,...K)},uU=x().fromPromise,h0=S(),I6=import.meta.require("path"),Q6=i(),SU=a().pathExists;W6.exports={outputFile:uU(hU),outputFileSync:mU}});var M6=L((fV,C6)=>{async function pU(H,K,U={}){const V=lU(K,U);await nU(H,V,U)}var{stringify:lU}=M0(),{outputFile:nU}=T0();C6.exports=pU});var N6=L((iV,R6)=>{var dU=function(H,K,U){const V=fU(K,U);iU(H,V,U)},{stringify:fU}=M0(),{outputFileSync:iU}=T0();R6.exports=dU});var w6=L((dV,T6)=>{var cU=x().fromPromise,m=E6();m.outputJson=cU(M6());m.outputJsonSync=N6();m.outputJSON=m.outputJson;m.outputJSONSync=m.outputJsonSync;m.writeJSON=m.writeJson;m.writeJSONSync=m.writeJsonSync;m.readJSON=m.readJson;m.readJSONSync=m.readJsonSync;T6.exports=m});var j6=L((cV,x6)=>{async function tU(H,K,U={}){const V=U.overwrite||U.clobber||!1,{srcStat:z,isChangingCase:X=!1}=await P6.checkPaths(H,K,"move",U);await P6.checkParentPaths(H,z,K,"move");const Z=D6.dirname(K);if(D6.parse(Z).root!==Z)await rU(Z);return sU(H,K,V,X)}async function sU(H,K,U,V){if(!V){if(U)await $6(K);else if(await eU(K))throw new Error("dest already exists.")}try{await oU.rename(H,K)}catch(z){if(z.code!=="EXDEV")throw z;await HV(H,K,U)}}async function HV(H,K,U){return await aU(H,K,{overwrite:U,errorOnExist:!0,preserveTimestamps:!0}),$6(H)}var oU=S(),D6=import.meta.require("path"),{copy:aU}=C0(),{remove:$6}=B0(),{mkdirp:rU}=i(),{pathExists:eU}=a(),P6=s();x6.exports=tU});var b6=L((oV,y6)=>{var VV=function(H,K,U){U=U||{};const V=U.overwrite||U.clobber||!1,{srcStat:z,isChangingCase:X=!1}=F6.checkPathsSync(H,K,"move",U);if(F6.checkParentPathsSync(H,z,K,"move"),!zV(K))UV(l0.dirname(K));return XV(H,K,V,X)},zV=function(H){const K=l0.dirname(H);return l0.parse(K).root===K},XV=function(H,K,U,V){if(V)return m0(H,K,U);if(U)return v6(K),m0(H,K,U);if(k6.existsSync(K))throw new Error("dest already exists.");return m0(H,K,U)},m0=function(H,K,U){try{k6.renameSync(H,K)}catch(V){if(V.code!=="EXDEV")throw V;return ZV(H,K,U)}},ZV=function(H,K,U){return KV(H,K,{overwrite:U,errorOnExist:!0,preserveTimestamps:!0}),v6(H)},k6=K0(),l0=import.meta.require("path"),KV=C0().copySync,v6=B0().removeSync,UV=i().mkdirpSync,F6=s();y6.exports=VV});var u6=L((aV,g6)=>{var GV=x().fromPromise;g6.exports={move:GV(j6()),moveSync:b6()}});var h6=L((rV,S6)=>{S6.exports={...S(),...C0(),...uH(),...Y6(),...w6(),...i(),...u6(),...T0(),...a(),...B0()}});var p=d6(h6(),1);import f from"path";var JV=function(H){return H&&typeof H.status==="number"};function YV(H){return H!==void 0&&H!==null}async function w0(H,K=[]){try{const U=Bun.spawnSync([H,...K.filter(YV)],{stdio:["inherit","ignore","inherit"],env:process.env});if(U.exitCode!==0){if(!w0.silent)console.error(`Error: ${H} ${K.join(" ")} failed with code: ${U.exitCode}`),console.error(new Error().stack);return!1}}catch(U){if(!w0.silent){if(JV(U))console.error(`Error: ${H} ${K.join(" ")} failed with code: ${U.status}`);else if(U instanceof Error)console.error(U.message);console.error(new Error().stack)}return!1}return!0}w0.silent=!0;var X0=w0;import{URL as OV} from"url";var AV=function(H){return H&&typeof H.status==="number"};function qV(H){return H!==void 0&&H!==null}async function D0(H,K=[]){try{D0.lastError="";const U=Bun.spawnSync([H,...K.filter(qV)],{stdio:["inherit","pipe","pipe"],env:process.env});if(U.exitCode!==0)return console.error(`Error: ${H} ${K.join(" ")} failed with code: ${U.exitCode}`),console.error(new Error().stack),null;return(U.stdout||"").toString()}catch(U){if(AV(U))console.error(`Error: ${H} ${K.join(" ")} failed with code: ${U.status}`);else if(U instanceof Error)D0.lastError=U.message,console.error(U.message);return console.error(new Error().stack),null}}D0.lastError="";var Z0=D0;var m6=function(H){return H?.charAt},l=function(...H){p.default.appendFileSync(BV,`\n${H.join(" ")}`,{encoding:"utf-8"}),console.warn(...H)};async function LV(){const K=p.default.readJsonSync(f.resolve("package.json")).fallbackDependencies,U=await X0("bun",["-v"]),V=!U?await X0("yarn",["-v"]):!1,z=!U&&!V?await X0("npm",["-v"]):!1;if(!U&&!z&&!V){l("No appropriate package manager detected for executing fallbackDependencies. Please ensure yarn, bun, or npm is available.");return}if(!p.default.existsSync(f.resolve("bunfig.toml")))p.default.copySync(f.join(n0,"bunfig.toml"),f.resolve("bunfig.toml"));const X=async(Z)=>{if(m6(Z))Z=[Z];if(U){let Y=Boolean(await Z0("bun",["add","--no-save","--ignore-scripts",...Z]));if(Z0.lastError.includes("no commit matching")&&Z0.lastError.includes("but repository exists"))await Z0("bun",["pm","cache","rm"]),Y=Boolean(await Z0("bun",["add","--no-save","--ignore-scripts",...Z]));if(!Y)l(`Failed to install dependency with bun: ${Z}`);return Y}else if(V)return await X0("yarn",["add","--no-save","--ignore-scripts",...Z]);else if(z)return await X0("npm",["install","--no-save","--ignore-scripts",...Z])};l("POST INSTALL: fallback-dependencies"),l("Fallbacks:"),l(JSON.stringify(K,null,2));for(let[Z,Y]of Object.entries(K)){if(l("Installing dependencies with fallbacks for:",Z),!Array.isArray(Y)){l("Invalid fallbacks for:",Z,"Expected an array but got:",JSON.stringify(Y));continue}let W=!1;for(let A of Y){if(!m6(A)){l("Invalid repo for:",Z,"Expected a string but got:",A);continue}if(await X(A)){l("Installed:",A),W=!0;break}else l("Installation failed for:",A),l("Attempting fallback...")}if(!W){l("No fallback dependency worked for:",Z);continue}const D=f.resolve("node_modules");if(!p.default.existsSync(f.join(D,Z))){l(`A fallback dependency was installed, however, the key provided "${Z}" in the fallback dependency configuration does NOT match the package identifier.\nError: node_modules/${Z} was not found.`);continue}const G=f.join(D,Z,"package.json");if(!p.default.existsSync(G)){l(`A fallback dependency was installed, however, the package.json for "${Z}" was not found at: ${G}.`);continue}const O=p.default.readJsonSync(G);if(O.bin)for(let A of Object.keys(O.bin)){const J=f.join(D,".bin");if(!p.default.existsSync(J))p.default.ensureDirSync(J);const q=f.join(J,A);if(p.default.existsSync(q))continue;const E=f.join(D,Z,O.bin[A]);if(!p.default.existsSync(E)){l(`A fallback dependency was installed, however, the bin "${A}" was not found at: ${E}.`);continue}p.default.copySync(E,q)}}}var n0=new OV(".",import.meta.url).pathname,BV=f.resolve(n0,"post-install.log"),V2=f.resolve(n0,".cache.json");LV();