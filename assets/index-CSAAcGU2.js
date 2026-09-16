import{B as j,V as F,P as qi,L as ce,a as ee,T as ze,S as dr,M as H,b as se,c as Gi,D as $i,R as mr,F as Ht,U as Ze,d as Q,N as k,I as At,e as U,f as Wt,g as pr,h as hi,i as gr,j as O,k as Vt,l as ji,m as vr,n as Yi,o as yt,p as Ue,q as xr,r as Le,s as yr,t as br,u as Tt,v as He,W as Oe,w as Se,x as Xi,y as re,H as J,z as oe,A as we,C as _e,E as Tr,Q as wr,G as Sr,J as _r,K as ti,O as Ar,X as Qi,Y as Mr,Z as Ki,_ as Ir,$ as Rr,a0 as Pr,a1 as Fr,a2 as Cr,a3 as Dr,a4 as Br,a5 as Er}from"./index-DR-7lhNX.js";import{G as zr}from"./GradientEquirectTexture-VLwvdlzd.js";import{P as On}from"./GradientEquirectTexture-VLwvdlzd.js";const Zi=0,kr=1,Ji=2,di=2,Mt=1.25,mi=1,me=32,wt=65535,Nr=Math.pow(2,-24),It=Symbol("SKIP_GENERATION");function er(s){return s.index?s.index.count:s.attributes.position.count}function We(s){return er(s)/3}function tr(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function Or(s,e){if(!s.index){const t=s.attributes.position.count,i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,a=tr(t,i);s.setIndex(new j(a,1));for(let n=0;n<t;n++)a[n]=n}}function ir(s,e){const t=We(s),i=e||s.drawRange,a=i.start/3,n=(i.start+i.count)/3,r=Math.max(0,a),c=Math.min(t,n)-r;return[{offset:Math.floor(r),count:Math.floor(c)}]}function rr(s,e){if(!s.groups||!s.groups.length)return ir(s,e);const t=[],i=new Set,a=e||s.drawRange,n=a.start/3,r=(a.start+a.count)/3;for(const l of s.groups){const h=l.start/3,f=(l.start+l.count)/3;i.add(Math.max(n,h)),i.add(Math.min(r,f))}const c=Array.from(i.values()).sort((l,h)=>l-h);for(let l=0;l<c.length-1;l++){const h=c[l],f=c[l+1];t.push({offset:Math.floor(h),count:Math.floor(f-h)})}return t}function Ur(s,e){const t=We(s),i=rr(s,e).sort((r,c)=>r.offset-c.offset),a=i[i.length-1];a.count=Math.min(t-a.offset,a.count);let n=0;return i.forEach(({count:r})=>n+=r),t!==n}function Rt(s,e,t,i,a){let n=1/0,r=1/0,c=1/0,l=-1/0,h=-1/0,f=-1/0,u=1/0,o=1/0,m=1/0,p=-1/0,x=-1/0,d=-1/0;for(let g=e*6,v=(e+t)*6;g<v;g+=6){const y=s[g+0],T=s[g+1],b=y-T,w=y+T;b<n&&(n=b),w>l&&(l=w),y<u&&(u=y),y>p&&(p=y);const S=s[g+2],_=s[g+3],A=S-_,I=S+_;A<r&&(r=A),I>h&&(h=I),S<o&&(o=S),S>x&&(x=S);const R=s[g+4],M=s[g+5],P=R-M,C=R+M;P<c&&(c=P),C>f&&(f=C),R<m&&(m=R),R>d&&(d=R)}i[0]=n,i[1]=r,i[2]=c,i[3]=l,i[4]=h,i[5]=f,a[0]=u,a[1]=o,a[2]=m,a[3]=p,a[4]=x,a[5]=d}function Lr(s,e=null,t=null,i=null){const a=s.attributes.position,n=s.index?s.index.array:null,r=We(s),c=a.normalized;let l;e===null?(l=new Float32Array(r*6),t=0,i=r):(l=e,t=t||0,i=i||r);const h=a.array,f=a.offset||0;let u=3;a.isInterleavedBufferAttribute&&(u=a.data.stride);const o=["getX","getY","getZ"];for(let m=t;m<t+i;m++){const p=m*3,x=m*6;let d=p+0,g=p+1,v=p+2;n&&(d=n[d],g=n[g],v=n[v]),c||(d=d*u+f,g=g*u+f,v=v*u+f);for(let y=0;y<3;y++){let T,b,w;c?(T=a[o[y]](d),b=a[o[y]](g),w=a[o[y]](v)):(T=h[d+y],b=h[g+y],w=h[v+y]);let S=T;b<S&&(S=b),w<S&&(S=w);let _=T;b>_&&(_=b),w>_&&(_=w);const A=(_-S)/2,I=y*2;l[x+I+0]=S+A,l[x+I+1]=A+(Math.abs(S)+A)*Nr}}return l}function z(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function pi(s){let e=-1,t=-1/0;for(let i=0;i<3;i++){const a=s[i+3]-s[i];a>t&&(t=a,e=i)}return e}function gi(s,e){e.set(s)}function vi(s,e,t){let i,a;for(let n=0;n<3;n++){const r=n+3;i=s[n],a=e[n],t[n]=i<a?i:a,i=s[r],a=e[r],t[r]=i>a?i:a}}function tt(s,e,t){for(let i=0;i<3;i++){const a=e[s+2*i],n=e[s+2*i+1],r=a-n,c=a+n;r<t[i]&&(t[i]=r),c>t[i+3]&&(t[i+3]=c)}}function Ve(s){const e=s[3]-s[0],t=s[4]-s[1],i=s[5]-s[2];return 2*(e*t+t*i+i*e)}const ne=32,Hr=(s,e)=>s.candidate-e.candidate,fe=new Array(ne).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),it=new Float32Array(6);function Wr(s,e,t,i,a,n){let r=-1,c=0;if(n===Zi)r=pi(e),r!==-1&&(c=(e[r]+e[r+3])/2);else if(n===kr)r=pi(s),r!==-1&&(c=Vr(t,i,a,r));else if(n===Ji){const l=Ve(s);let h=Mt*a;const f=i*6,u=(i+a)*6;for(let o=0;o<3;o++){const m=e[o],d=(e[o+3]-m)/ne;if(a<ne/4){const g=[...fe];g.length=a;let v=0;for(let T=f;T<u;T+=6,v++){const b=g[v];b.candidate=t[T+2*o],b.count=0;const{bounds:w,leftCacheBounds:S,rightCacheBounds:_}=b;for(let A=0;A<3;A++)_[A]=1/0,_[A+3]=-1/0,S[A]=1/0,S[A+3]=-1/0,w[A]=1/0,w[A+3]=-1/0;tt(T,t,w)}g.sort(Hr);let y=a;for(let T=0;T<y;T++){const b=g[T];for(;T+1<y&&g[T+1].candidate===b.candidate;)g.splice(T+1,1),y--}for(let T=f;T<u;T+=6){const b=t[T+2*o];for(let w=0;w<y;w++){const S=g[w];b>=S.candidate?tt(T,t,S.rightCacheBounds):(tt(T,t,S.leftCacheBounds),S.count++)}}for(let T=0;T<y;T++){const b=g[T],w=b.count,S=a-b.count,_=b.leftCacheBounds,A=b.rightCacheBounds;let I=0;w!==0&&(I=Ve(_)/l);let R=0;S!==0&&(R=Ve(A)/l);const M=mi+Mt*(I*w+R*S);M<h&&(r=o,h=M,c=b.candidate)}}else{for(let y=0;y<ne;y++){const T=fe[y];T.count=0,T.candidate=m+d+y*d;const b=T.bounds;for(let w=0;w<3;w++)b[w]=1/0,b[w+3]=-1/0}for(let y=f;y<u;y+=6){let w=~~((t[y+2*o]-m)/d);w>=ne&&(w=ne-1);const S=fe[w];S.count++,tt(y,t,S.bounds)}const g=fe[ne-1];gi(g.bounds,g.rightCacheBounds);for(let y=ne-2;y>=0;y--){const T=fe[y],b=fe[y+1];vi(T.bounds,b.rightCacheBounds,T.rightCacheBounds)}let v=0;for(let y=0;y<ne-1;y++){const T=fe[y],b=T.count,w=T.bounds,_=fe[y+1].rightCacheBounds;b!==0&&(v===0?gi(w,it):vi(w,it,it)),v+=b;let A=0,I=0;v!==0&&(A=Ve(it)/l);const R=a-v;R!==0&&(I=Ve(_)/l);const M=mi+Mt*(A*v+I*R);M<h&&(r=o,h=M,c=T.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${n} used.`);return{axis:r,pos:c}}function Vr(s,e,t,i){let a=0;for(let n=e,r=e+t;n<r;n++)a+=s[n*6+i*2];return a/t}class Pt{constructor(){this.boundingData=new Float32Array(6)}}function qr(s,e,t,i,a,n){let r=i,c=i+a-1;const l=n.pos,h=n.axis*2;for(;;){for(;r<=c&&t[r*6+h]<l;)r++;for(;r<=c&&t[c*6+h]>=l;)c--;if(r<c){for(let f=0;f<3;f++){let u=e[r*3+f];e[r*3+f]=e[c*3+f],e[c*3+f]=u}for(let f=0;f<6;f++){let u=t[r*6+f];t[r*6+f]=t[c*6+f],t[c*6+f]=u}r++,c--}else return r}}function Gr(s,e,t,i,a,n){let r=i,c=i+a-1;const l=n.pos,h=n.axis*2;for(;;){for(;r<=c&&t[r*6+h]<l;)r++;for(;r<=c&&t[c*6+h]>=l;)c--;if(r<c){let f=s[r];s[r]=s[c],s[c]=f;for(let u=0;u<6;u++){let o=t[r*6+u];t[r*6+u]=t[c*6+u],t[c*6+u]=o}r++,c--}else return r}}function L(s,e){return e[s+15]===65535}function q(s,e){return e[s+6]}function G(s,e){return e[s+14]}function Y(s){return s+8}function $(s,e){return e[s+6]}function ii(s,e){return e[s+7]}let sr,Qe,xt,ar;const $r=Math.pow(2,32);function qt(s){return"count"in s?1:1+qt(s.left)+qt(s.right)}function jr(s,e,t){return sr=new Float32Array(t),Qe=new Uint32Array(t),xt=new Uint16Array(t),ar=new Uint8Array(t),Gt(s,e)}function Gt(s,e){const t=s/4,i=s/2,a="count"in e,n=e.boundingData;for(let r=0;r<6;r++)sr[t+r]=n[r];if(a)if(e.buffer){const r=e.buffer;ar.set(new Uint8Array(r),s);for(let c=s,l=s+r.byteLength;c<l;c+=me){const h=c/2;L(h,xt)||(Qe[c/4+6]+=t)}return s+r.byteLength}else{const r=e.offset,c=e.count;return Qe[t+6]=r,xt[i+14]=c,xt[i+15]=wt,s+me}else{const r=e.left,c=e.right,l=e.splitAxis;let h;if(h=Gt(s+me,r),h/4>$r)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Qe[t+6]=h/4,h=Gt(h,c),Qe[t+7]=l,h}}function Yr(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,i=t>2**16,a=i?4:2,n=e?new SharedArrayBuffer(t*a):new ArrayBuffer(t*a),r=i?new Uint32Array(n):new Uint16Array(n);for(let c=0,l=r.length;c<l;c++)r[c]=c;return r}function Xr(s,e,t,i,a){const{maxDepth:n,verbose:r,maxLeafTris:c,strategy:l,onProgress:h,indirect:f}=a,u=s._indirectBuffer,o=s.geometry,m=o.index?o.index.array:null,p=f?Gr:qr,x=We(o),d=new Float32Array(6);let g=!1;const v=new Pt;return Rt(e,t,i,v.boundingData,d),T(v,t,i,d),v;function y(b){h&&h(b/x)}function T(b,w,S,_=null,A=0){if(!g&&A>=n&&(g=!0,r&&(console.warn(`MeshBVH: Max depth of ${n} reached when generating BVH. Consider increasing maxDepth.`),console.warn(o))),S<=c||A>=n)return y(w+S),b.offset=w,b.count=S,b;const I=Wr(b.boundingData,_,e,w,S,l);if(I.axis===-1)return y(w+S),b.offset=w,b.count=S,b;const R=p(u,m,e,w,S,I);if(R===w||R===w+S)y(w+S),b.offset=w,b.count=S;else{b.splitAxis=I.axis;const M=new Pt,P=w,C=R-w;b.left=M,Rt(e,P,C,M.boundingData,d),T(M,P,C,d,A+1);const D=new Pt,E=R,ie=S-C;b.right=D,Rt(e,E,ie,D.boundingData,d),T(D,E,ie,d,A+1)}return b}}function Qr(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=Yr(t,e.useSharedArrayBuffer),Ur(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||Or(t,e);const i=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,a=Lr(t),n=e.indirect?ir(t,e.range):rr(t,e.range);s._roots=n.map(r=>{const c=Xr(s,a,r.offset,r.count,e),l=qt(c),h=new i(me*l);return jr(0,c,h),h})}class le{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let i=1/0,a=-1/0;for(let n=0,r=e.length;n<r;n++){const l=e[n][t];i=l<i?l:i,a=l>a?l:a}this.min=i,this.max=a}setFromPoints(e,t){let i=1/0,a=-1/0;for(let n=0,r=t.length;n<r;n++){const c=t[n],l=e.dot(c);i=l<i?l:i,a=l>a?l:a}this.min=i,this.max=a}isSeparated(e){return this.min>e.max||e.min>this.max}}le.prototype.setFromBox=(function(){const s=new F;return function(t,i){const a=i.min,n=i.max;let r=1/0,c=-1/0;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){s.x=a.x*l+n.x*(1-l),s.y=a.y*h+n.y*(1-h),s.z=a.z*f+n.z*(1-f);const u=t.dot(s);r=Math.min(u,r),c=Math.max(u,c)}this.min=r,this.max=c}})();const Kr=(function(){const s=new F,e=new F,t=new F;return function(a,n,r){const c=a.start,l=s,h=n.start,f=e;t.subVectors(c,h),s.subVectors(a.end,a.start),e.subVectors(n.end,n.start);const u=t.dot(f),o=f.dot(l),m=f.dot(f),p=t.dot(l),d=l.dot(l)*m-o*o;let g,v;d!==0?g=(u*o-p*m)/d:g=0,v=(u+g*o)/m,r.x=g,r.y=v}})(),ri=(function(){const s=new ee,e=new F,t=new F;return function(a,n,r,c){Kr(a,n,s);let l=s.x,h=s.y;if(l>=0&&l<=1&&h>=0&&h<=1){a.at(l,r),n.at(h,c);return}else if(l>=0&&l<=1){h<0?n.at(0,c):n.at(1,c),a.closestPointToPoint(c,!0,r);return}else if(h>=0&&h<=1){l<0?a.at(0,r):a.at(1,r),n.closestPointToPoint(r,!0,c);return}else{let f;l<0?f=a.start:f=a.end;let u;h<0?u=n.start:u=n.end;const o=e,m=t;if(a.closestPointToPoint(u,!0,e),n.closestPointToPoint(f,!0,t),o.distanceToSquared(u)<=m.distanceToSquared(f)){r.copy(o),c.copy(u);return}else{r.copy(f),c.copy(m);return}}}})(),Zr=(function(){const s=new F,e=new F,t=new qi,i=new ce;return function(n,r){const{radius:c,center:l}=n,{a:h,b:f,c:u}=r;if(i.start=h,i.end=f,i.closestPointToPoint(l,!0,s).distanceTo(l)<=c||(i.start=h,i.end=u,i.closestPointToPoint(l,!0,s).distanceTo(l)<=c)||(i.start=f,i.end=u,i.closestPointToPoint(l,!0,s).distanceTo(l)<=c))return!0;const x=r.getPlane(t);if(Math.abs(x.distanceToPoint(l))<=c){const g=x.projectPoint(l,e);if(r.containsPoint(g))return!0}return!1}})(),Jr=1e-15;function Ft(s){return Math.abs(s)<Jr}class te extends ze{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new F),this.satBounds=new Array(4).fill().map(()=>new le),this.points=[this.a,this.b,this.c],this.sphere=new dr,this.plane=new qi,this.needsUpdate=!0}intersectsSphere(e){return Zr(e,this)}update(){const e=this.a,t=this.b,i=this.c,a=this.points,n=this.satAxes,r=this.satBounds,c=n[0],l=r[0];this.getNormal(c),l.setFromPoints(c,a);const h=n[1],f=r[1];h.subVectors(e,t),f.setFromPoints(h,a);const u=n[2],o=r[2];u.subVectors(t,i),o.setFromPoints(u,a);const m=n[3],p=r[3];m.subVectors(i,e),p.setFromPoints(m,a),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(c,e),this.needsUpdate=!1}}te.prototype.closestPointToSegment=(function(){const s=new F,e=new F,t=new ce;return function(a,n=null,r=null){const{start:c,end:l}=a,h=this.points;let f,u=1/0;for(let o=0;o<3;o++){const m=(o+1)%3;t.start.copy(h[o]),t.end.copy(h[m]),ri(t,a,s,e),f=s.distanceToSquared(e),f<u&&(u=f,n&&n.copy(s),r&&r.copy(e))}return this.closestPointToPoint(c,s),f=c.distanceToSquared(s),f<u&&(u=f,n&&n.copy(s),r&&r.copy(c)),this.closestPointToPoint(l,s),f=l.distanceToSquared(s),f<u&&(u=f,n&&n.copy(s),r&&r.copy(l)),Math.sqrt(u)}})();te.prototype.intersectsTriangle=(function(){const s=new te,e=new Array(3),t=new Array(3),i=new le,a=new le,n=new F,r=new F,c=new F,l=new F,h=new F,f=new ce,u=new ce,o=new ce,m=new F;function p(x,d,g){const v=x.points;let y=0,T=-1;for(let b=0;b<3;b++){const{start:w,end:S}=f;w.copy(v[b]),S.copy(v[(b+1)%3]),f.delta(r);const _=Ft(d.distanceToPoint(w));if(Ft(d.normal.dot(r))&&_){g.copy(f),y=2;break}const A=d.intersectLine(f,m);if(!A&&_&&m.copy(w),(A||_)&&!Ft(m.distanceTo(S))){if(y<=1)(y===1?g.start:g.end).copy(m),_&&(T=y);else if(y>=2){(T===1?g.start:g.end).copy(m),y=2;break}if(y++,y===2&&T===-1)break}}return y}return function(d,g=null,v=!1){this.needsUpdate&&this.update(),d.isExtendedTriangle?d.needsUpdate&&d.update():(s.copy(d),s.update(),d=s);const y=this.plane,T=d.plane;if(Math.abs(y.normal.dot(T.normal))>1-1e-10){const b=this.satBounds,w=this.satAxes;t[0]=d.a,t[1]=d.b,t[2]=d.c;for(let A=0;A<4;A++){const I=b[A],R=w[A];if(i.setFromPoints(R,t),I.isSeparated(i))return!1}const S=d.satBounds,_=d.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let A=0;A<4;A++){const I=S[A],R=_[A];if(i.setFromPoints(R,e),I.isSeparated(i))return!1}for(let A=0;A<4;A++){const I=w[A];for(let R=0;R<4;R++){const M=_[R];if(n.crossVectors(I,M),i.setFromPoints(n,e),a.setFromPoints(n,t),i.isSeparated(a))return!1}}return g&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),g.start.set(0,0,0),g.end.set(0,0,0)),!0}else{const b=p(this,T,u);if(b===1&&d.containsPoint(u.end))return g&&(g.start.copy(u.end),g.end.copy(u.end)),!0;if(b!==2)return!1;const w=p(d,y,o);if(w===1&&this.containsPoint(o.end))return g&&(g.start.copy(o.end),g.end.copy(o.end)),!0;if(w!==2)return!1;if(u.delta(c),o.delta(l),c.dot(l)<0){let P=o.start;o.start=o.end,o.end=P}const S=u.start.dot(c),_=u.end.dot(c),A=o.start.dot(c),I=o.end.dot(c),R=_<A,M=S<I;return S!==I&&A!==_&&R===M?!1:(g&&(h.subVectors(u.start,o.start),h.dot(c)>0?g.start.copy(u.start):g.start.copy(o.start),h.subVectors(u.end,o.end),h.dot(c)<0?g.end.copy(u.end):g.end.copy(o.end)),!0)}}})();te.prototype.distanceToPoint=(function(){const s=new F;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();te.prototype.distanceToTriangle=(function(){const s=new F,e=new F,t=["a","b","c"],i=new ce,a=new ce;return function(r,c=null,l=null){const h=c||l?i:null;if(this.intersectsTriangle(r,h))return(c||l)&&(c&&h.getCenter(c),l&&h.getCenter(l)),0;let f=1/0;for(let u=0;u<3;u++){let o;const m=t[u],p=r[m];this.closestPointToPoint(p,s),o=p.distanceToSquared(s),o<f&&(f=o,c&&c.copy(s),l&&l.copy(p));const x=this[m];r.closestPointToPoint(x,s),o=x.distanceToSquared(s),o<f&&(f=o,c&&c.copy(x),l&&l.copy(s))}for(let u=0;u<3;u++){const o=t[u],m=t[(u+1)%3];i.set(this[o],this[m]);for(let p=0;p<3;p++){const x=t[p],d=t[(p+1)%3];a.set(r[x],r[d]),ri(i,a,s,e);const g=s.distanceToSquared(e);g<f&&(f=g,c&&c.copy(s),l&&l.copy(e))}}return Math.sqrt(f)}})();class W{constructor(e,t,i){this.isOrientedBox=!0,this.min=new F,this.max=new F,this.matrix=new H,this.invMatrix=new H,this.points=new Array(8).fill().map(()=>new F),this.satAxes=new Array(3).fill().map(()=>new F),this.satBounds=new Array(3).fill().map(()=>new le),this.alignedSatBounds=new Array(3).fill().map(()=>new le),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),i&&this.matrix.copy(i)}set(e,t,i){this.min.copy(e),this.max.copy(t),this.matrix.copy(i),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}W.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,i=this.max,a=this.points;for(let h=0;h<=1;h++)for(let f=0;f<=1;f++)for(let u=0;u<=1;u++){const o=1*h|2*f|4*u,m=a[o];m.x=h?i.x:t.x,m.y=f?i.y:t.y,m.z=u?i.z:t.z,m.applyMatrix4(e)}const n=this.satBounds,r=this.satAxes,c=a[0];for(let h=0;h<3;h++){const f=r[h],u=n[h],o=1<<h,m=a[o];f.subVectors(c,m),u.setFromPoints(f,a)}const l=this.alignedSatBounds;l[0].setFromPointsField(a,"x"),l[1].setFromPointsField(a,"y"),l[2].setFromPointsField(a,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();W.prototype.intersectsBox=(function(){const s=new le;return function(t){this.needsUpdate&&this.update();const i=t.min,a=t.max,n=this.satBounds,r=this.satAxes,c=this.alignedSatBounds;if(s.min=i.x,s.max=a.x,c[0].isSeparated(s)||(s.min=i.y,s.max=a.y,c[1].isSeparated(s))||(s.min=i.z,s.max=a.z,c[2].isSeparated(s)))return!1;for(let l=0;l<3;l++){const h=r[l],f=n[l];if(s.setFromBox(h,t),f.isSeparated(s))return!1}return!0}})();W.prototype.intersectsTriangle=(function(){const s=new te,e=new Array(3),t=new le,i=new le,a=new F;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(s.copy(r),s.update(),r=s);const c=this.satBounds,l=this.satAxes;e[0]=r.a,e[1]=r.b,e[2]=r.c;for(let o=0;o<3;o++){const m=c[o],p=l[o];if(t.setFromPoints(p,e),m.isSeparated(t))return!1}const h=r.satBounds,f=r.satAxes,u=this.points;for(let o=0;o<3;o++){const m=h[o],p=f[o];if(t.setFromPoints(p,u),m.isSeparated(t))return!1}for(let o=0;o<3;o++){const m=l[o];for(let p=0;p<4;p++){const x=f[p];if(a.crossVectors(m,x),t.setFromPoints(a,e),i.setFromPoints(a,u),t.isSeparated(i))return!1}}return!0}})();W.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();W.prototype.distanceToPoint=(function(){const s=new F;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();W.prototype.distanceToBox=(function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new ce),t=new Array(12).fill().map(()=>new ce),i=new F,a=new F;return function(r,c=0,l=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(l||h)&&(r.getCenter(a),this.closestPointToPoint(a,i),r.closestPointToPoint(i,a),l&&l.copy(i),h&&h.copy(a)),0;const f=c*c,u=r.min,o=r.max,m=this.points;let p=1/0;for(let d=0;d<8;d++){const g=m[d];a.copy(g).clamp(u,o);const v=g.distanceToSquared(a);if(v<p&&(p=v,l&&l.copy(g),h&&h.copy(a),v<f))return Math.sqrt(v)}let x=0;for(let d=0;d<3;d++)for(let g=0;g<=1;g++)for(let v=0;v<=1;v++){const y=(d+1)%3,T=(d+2)%3,b=g<<y|v<<T,w=1<<d|g<<y|v<<T,S=m[b],_=m[w];e[x].set(S,_);const I=s[d],R=s[y],M=s[T],P=t[x],C=P.start,D=P.end;C[I]=u[I],C[R]=g?u[R]:o[R],C[M]=v?u[M]:o[R],D[I]=o[I],D[R]=g?u[R]:o[R],D[M]=v?u[M]:o[R],x++}for(let d=0;d<=1;d++)for(let g=0;g<=1;g++)for(let v=0;v<=1;v++){a.x=d?o.x:u.x,a.y=g?o.y:u.y,a.z=v?o.z:u.z,this.closestPointToPoint(a,i);const y=a.distanceToSquared(i);if(y<p&&(p=y,l&&l.copy(i),h&&h.copy(a),y<f))return Math.sqrt(y)}for(let d=0;d<12;d++){const g=e[d];for(let v=0;v<12;v++){const y=t[v];ri(g,y,i,a);const T=i.distanceToSquared(a);if(T<p&&(p=T,l&&l.copy(i),h&&h.copy(a),T<f))return Math.sqrt(T)}}return Math.sqrt(p)}})();class si{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class es extends si{constructor(){super(()=>new te)}}const X=new es;class ts{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=i=>{t&&e.push(t),t=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const B=new ts;let de,Ne;const Ae=[],rt=new si(()=>new se);function is(s,e,t,i,a,n){de=rt.getPrimitive(),Ne=rt.getPrimitive(),Ae.push(de,Ne),B.setBuffer(s._roots[e]);const r=$t(0,s.geometry,t,i,a,n);B.clearBuffer(),rt.releasePrimitive(de),rt.releasePrimitive(Ne),Ae.pop(),Ae.pop();const c=Ae.length;return c>0&&(Ne=Ae[c-1],de=Ae[c-2]),r}function $t(s,e,t,i,a=null,n=0,r=0){const{float32Array:c,uint16Array:l,uint32Array:h}=B;let f=s*2;if(L(f,l)){const o=q(s,h),m=G(f,l);return z(s,c,de),i(o,m,!1,r,n+s,de)}else{let I=function(M){const{uint16Array:P,uint32Array:C}=B;let D=M*2;for(;!L(D,P);)M=Y(M),D=M*2;return q(M,C)},R=function(M){const{uint16Array:P,uint32Array:C}=B;let D=M*2;for(;!L(D,P);)M=$(M,C),D=M*2;return q(M,C)+G(D,P)};const o=Y(s),m=$(s,h);let p=o,x=m,d,g,v,y;if(a&&(v=de,y=Ne,z(p,c,v),z(x,c,y),d=a(v),g=a(y),g<d)){p=m,x=o;const M=d;d=g,g=M,v=y}v||(v=de,z(p,c,v));const T=L(p*2,l),b=t(v,T,d,r+1,n+p);let w;if(b===di){const M=I(p),C=R(p)-M;w=i(M,C,!0,r+1,n+p,v)}else w=b&&$t(p,e,t,i,a,n,r+1);if(w)return!0;y=Ne,z(x,c,y);const S=L(x*2,l),_=t(y,S,g,r+1,n+x);let A;if(_===di){const M=I(x),C=R(x)-M;A=i(M,C,!0,r+1,n+x,y)}else A=_&&$t(x,e,t,i,a,n,r+1);return!!A}}const qe=new F,Ct=new F;function rs(s,e,t={},i=0,a=1/0){const n=i*i,r=a*a;let c=1/0,l=null;if(s.shapecast({boundsTraverseOrder:f=>(qe.copy(e).clamp(f.min,f.max),qe.distanceToSquared(e)),intersectsBounds:(f,u,o)=>o<c&&o<r,intersectsTriangle:(f,u)=>{f.closestPointToPoint(e,qe);const o=e.distanceToSquared(qe);return o<c&&(Ct.copy(qe),c=o,l=u),o<n}}),c===1/0)return null;const h=Math.sqrt(c);return t.point?t.point.copy(Ct):t.point=Ct.clone(),t.distance=h,t.faceIndex=l,t}const ss=parseInt(mr)>=169,ge=new F,ve=new F,xe=new F,st=new ee,at=new ee,nt=new ee,xi=new F,yi=new F,bi=new F,Ge=new F;function as(s,e,t,i,a,n,r,c){let l;if(n===Gi?l=s.intersectTriangle(i,t,e,!0,a):l=s.intersectTriangle(e,t,i,n!==$i,a),l===null)return null;const h=s.origin.distanceTo(a);return h<r||h>c?null:{distance:h,point:a.clone()}}function ns(s,e,t,i,a,n,r,c,l,h,f){ge.fromBufferAttribute(e,n),ve.fromBufferAttribute(e,r),xe.fromBufferAttribute(e,c);const u=as(s,ge,ve,xe,Ge,l,h,f);if(u){const o=new F;ze.getBarycoord(Ge,ge,ve,xe,o),i&&(st.fromBufferAttribute(i,n),at.fromBufferAttribute(i,r),nt.fromBufferAttribute(i,c),u.uv=ze.getInterpolation(Ge,ge,ve,xe,st,at,nt,new ee)),a&&(st.fromBufferAttribute(a,n),at.fromBufferAttribute(a,r),nt.fromBufferAttribute(a,c),u.uv1=ze.getInterpolation(Ge,ge,ve,xe,st,at,nt,new ee)),t&&(xi.fromBufferAttribute(t,n),yi.fromBufferAttribute(t,r),bi.fromBufferAttribute(t,c),u.normal=ze.getInterpolation(Ge,ge,ve,xe,xi,yi,bi,new F),u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1));const m={a:n,b:r,c,normal:new F,materialIndex:0};ze.getNormal(ge,ve,xe,m.normal),u.face=m,u.faceIndex=n,ss&&(u.barycoord=o)}return u}function St(s,e,t,i,a,n,r){const c=i*3;let l=c+0,h=c+1,f=c+2;const u=s.index;s.index&&(l=u.getX(l),h=u.getX(h),f=u.getX(f));const{position:o,normal:m,uv:p,uv1:x}=s.attributes,d=ns(t,o,m,p,x,l,h,f,e,n,r);return d?(d.faceIndex=i,a&&a.push(d),d):null}function N(s,e,t,i){const a=s.a,n=s.b,r=s.c;let c=e,l=e+1,h=e+2;t&&(c=t.getX(c),l=t.getX(l),h=t.getX(h)),a.x=i.getX(c),a.y=i.getY(c),a.z=i.getZ(c),n.x=i.getX(l),n.y=i.getY(l),n.z=i.getZ(l),r.x=i.getX(h),r.y=i.getY(h),r.z=i.getZ(h)}function os(s,e,t,i,a,n,r,c){const{geometry:l,_indirectBuffer:h}=s;for(let f=i,u=i+a;f<u;f++)St(l,e,t,f,n,r,c)}function cs(s,e,t,i,a,n,r){const{geometry:c,_indirectBuffer:l}=s;let h=1/0,f=null;for(let u=i,o=i+a;u<o;u++){let m;m=St(c,e,t,u,null,n,r),m&&m.distance<h&&(f=m,h=m.distance)}return f}function ls(s,e,t,i,a,n,r){const{geometry:c}=t,{index:l}=c,h=c.attributes.position;for(let f=s,u=e+s;f<u;f++){let o;if(o=f,N(r,o*3,l,h),r.needsUpdate=!0,i(r,o,a,n))return!0}return!1}function us(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,i=t.index?t.index.array:null,a=t.attributes.position;let n,r,c,l,h=0;const f=s._roots;for(let o=0,m=f.length;o<m;o++)n=f[o],r=new Uint32Array(n),c=new Uint16Array(n),l=new Float32Array(n),u(0,h),h+=n.byteLength;function u(o,m,p=!1){const x=o*2;if(c[x+15]===wt){const g=r[o+6],v=c[x+14];let y=1/0,T=1/0,b=1/0,w=-1/0,S=-1/0,_=-1/0;for(let A=3*g,I=3*(g+v);A<I;A++){let R=i[A];const M=a.getX(R),P=a.getY(R),C=a.getZ(R);M<y&&(y=M),M>w&&(w=M),P<T&&(T=P),P>S&&(S=P),C<b&&(b=C),C>_&&(_=C)}return l[o+0]!==y||l[o+1]!==T||l[o+2]!==b||l[o+3]!==w||l[o+4]!==S||l[o+5]!==_?(l[o+0]=y,l[o+1]=T,l[o+2]=b,l[o+3]=w,l[o+4]=S,l[o+5]=_,!0):!1}else{const g=o+8,v=r[o+6],y=g+m,T=v+m;let b=p,w=!1,S=!1;e?b||(w=e.has(y),S=e.has(T),b=!w&&!S):(w=!0,S=!0);const _=b||w,A=b||S;let I=!1;_&&(I=u(g,m,b));let R=!1;A&&(R=u(v,m,b));const M=I||R;if(M)for(let P=0;P<3;P++){const C=g+P,D=v+P,E=l[C],ie=l[C+3],ae=l[D],ue=l[D+3];l[o+P]=E<ae?E:ae,l[o+P+3]=ie>ue?ie:ue}return M}}}function pe(s,e,t,i,a){let n,r,c,l,h,f;const u=1/t.direction.x,o=1/t.direction.y,m=1/t.direction.z,p=t.origin.x,x=t.origin.y,d=t.origin.z;let g=e[s],v=e[s+3],y=e[s+1],T=e[s+3+1],b=e[s+2],w=e[s+3+2];return u>=0?(n=(g-p)*u,r=(v-p)*u):(n=(v-p)*u,r=(g-p)*u),o>=0?(c=(y-x)*o,l=(T-x)*o):(c=(T-x)*o,l=(y-x)*o),n>l||c>r||((c>n||isNaN(n))&&(n=c),(l<r||isNaN(r))&&(r=l),m>=0?(h=(b-d)*m,f=(w-d)*m):(h=(w-d)*m,f=(b-d)*m),n>f||h>r)?!1:((h>n||n!==n)&&(n=h),(f<r||r!==r)&&(r=f),n<=a&&r>=i)}function fs(s,e,t,i,a,n,r,c){const{geometry:l,_indirectBuffer:h}=s;for(let f=i,u=i+a;f<u;f++){let o=h?h[f]:f;St(l,e,t,o,n,r,c)}}function hs(s,e,t,i,a,n,r){const{geometry:c,_indirectBuffer:l}=s;let h=1/0,f=null;for(let u=i,o=i+a;u<o;u++){let m;m=St(c,e,t,l?l[u]:u,null,n,r),m&&m.distance<h&&(f=m,h=m.distance)}return f}function ds(s,e,t,i,a,n,r){const{geometry:c}=t,{index:l}=c,h=c.attributes.position;for(let f=s,u=e+s;f<u;f++){let o;if(o=t.resolveTriangleIndex(f),N(r,o*3,l,h),r.needsUpdate=!0,i(r,o,a,n))return!0}return!1}function ms(s,e,t,i,a,n,r){B.setBuffer(s._roots[e]),jt(0,s,t,i,a,n,r),B.clearBuffer()}function jt(s,e,t,i,a,n,r){const{float32Array:c,uint16Array:l,uint32Array:h}=B,f=s*2;if(L(f,l)){const o=q(s,h),m=G(f,l);os(e,t,i,o,m,a,n,r)}else{const o=Y(s);pe(o,c,i,n,r)&&jt(o,e,t,i,a,n,r);const m=$(s,h);pe(m,c,i,n,r)&&jt(m,e,t,i,a,n,r)}}const ps=["x","y","z"];function gs(s,e,t,i,a,n){B.setBuffer(s._roots[e]);const r=Yt(0,s,t,i,a,n);return B.clearBuffer(),r}function Yt(s,e,t,i,a,n){const{float32Array:r,uint16Array:c,uint32Array:l}=B;let h=s*2;if(L(h,c)){const u=q(s,l),o=G(h,c);return cs(e,t,i,u,o,a,n)}else{const u=ii(s,l),o=ps[u],p=i.direction[o]>=0;let x,d;p?(x=Y(s),d=$(s,l)):(x=$(s,l),d=Y(s));const v=pe(x,r,i,a,n)?Yt(x,e,t,i,a,n):null;if(v){const b=v.point[o];if(p?b<=r[d+u]:b>=r[d+u+3])return v}const T=pe(d,r,i,a,n)?Yt(d,e,t,i,a,n):null;return v&&T?v.distance<=T.distance?v:T:v||T||null}}const ot=new se,Me=new te,Ie=new te,$e=new H,Ti=new W,ct=new W;function vs(s,e,t,i){B.setBuffer(s._roots[e]);const a=Xt(0,s,t,i);return B.clearBuffer(),a}function Xt(s,e,t,i,a=null){const{float32Array:n,uint16Array:r,uint32Array:c}=B;let l=s*2;if(a===null&&(t.boundingBox||t.computeBoundingBox(),Ti.set(t.boundingBox.min,t.boundingBox.max,i),a=Ti),L(l,r)){const f=e.geometry,u=f.index,o=f.attributes.position,m=t.index,p=t.attributes.position,x=q(s,c),d=G(l,r);if($e.copy(i).invert(),t.boundsTree)return z(s,n,ct),ct.matrix.copy($e),ct.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>ct.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let y=x*3,T=(d+x)*3;y<T;y+=3)if(N(Ie,y,u,o),Ie.needsUpdate=!0,v.intersectsTriangle(Ie))return!0;return!1}});for(let g=x*3,v=(d+x)*3;g<v;g+=3){N(Me,g,u,o),Me.a.applyMatrix4($e),Me.b.applyMatrix4($e),Me.c.applyMatrix4($e),Me.needsUpdate=!0;for(let y=0,T=m.count;y<T;y+=3)if(N(Ie,y,m,p),Ie.needsUpdate=!0,Me.intersectsTriangle(Ie))return!0}}else{const f=s+8,u=c[s+6];return z(f,n,ot),!!(a.intersectsBox(ot)&&Xt(f,e,t,i,a)||(z(u,n,ot),a.intersectsBox(ot)&&Xt(u,e,t,i,a)))}}const lt=new H,Dt=new W,je=new W,xs=new F,ys=new F,bs=new F,Ts=new F;function ws(s,e,t,i={},a={},n=0,r=1/0){e.boundingBox||e.computeBoundingBox(),Dt.set(e.boundingBox.min,e.boundingBox.max,t),Dt.needsUpdate=!0;const c=s.geometry,l=c.attributes.position,h=c.index,f=e.attributes.position,u=e.index,o=X.getPrimitive(),m=X.getPrimitive();let p=xs,x=ys,d=null,g=null;a&&(d=bs,g=Ts);let v=1/0,y=null,T=null;return lt.copy(t).invert(),je.matrix.copy(lt),s.shapecast({boundsTraverseOrder:b=>Dt.distanceToBox(b),intersectsBounds:(b,w,S)=>S<v&&S<r?(w&&(je.min.copy(b.min),je.max.copy(b.max),je.needsUpdate=!0),!0):!1,intersectsRange:(b,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:_=>je.distanceToBox(_),intersectsBounds:(_,A,I)=>I<v&&I<r,intersectsRange:(_,A)=>{for(let I=_,R=_+A;I<R;I++){N(m,3*I,u,f),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let M=b,P=b+w;M<P;M++){N(o,3*M,h,l),o.needsUpdate=!0;const C=o.distanceToTriangle(m,p,d);if(C<v&&(x.copy(p),g&&g.copy(d),v=C,y=M,T=I),C<n)return!0}}}});{const S=We(e);for(let _=0,A=S;_<A;_++){N(m,3*_,u,f),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let I=b,R=b+w;I<R;I++){N(o,3*I,h,l),o.needsUpdate=!0;const M=o.distanceToTriangle(m,p,d);if(M<v&&(x.copy(p),g&&g.copy(d),v=M,y=I,T=_),M<n)return!0}}}}}),X.releasePrimitive(o),X.releasePrimitive(m),v===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=v,i.faceIndex=y,a&&(a.point?a.point.copy(g):a.point=g.clone(),a.point.applyMatrix4(lt),x.applyMatrix4(lt),a.distance=x.sub(a.point).length(),a.faceIndex=T),i)}function Ss(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,i=t.index?t.index.array:null,a=t.attributes.position;let n,r,c,l,h=0;const f=s._roots;for(let o=0,m=f.length;o<m;o++)n=f[o],r=new Uint32Array(n),c=new Uint16Array(n),l=new Float32Array(n),u(0,h),h+=n.byteLength;function u(o,m,p=!1){const x=o*2;if(c[x+15]===wt){const g=r[o+6],v=c[x+14];let y=1/0,T=1/0,b=1/0,w=-1/0,S=-1/0,_=-1/0;for(let A=g,I=g+v;A<I;A++){const R=3*s.resolveTriangleIndex(A);for(let M=0;M<3;M++){let P=R+M;P=i?i[P]:P;const C=a.getX(P),D=a.getY(P),E=a.getZ(P);C<y&&(y=C),C>w&&(w=C),D<T&&(T=D),D>S&&(S=D),E<b&&(b=E),E>_&&(_=E)}}return l[o+0]!==y||l[o+1]!==T||l[o+2]!==b||l[o+3]!==w||l[o+4]!==S||l[o+5]!==_?(l[o+0]=y,l[o+1]=T,l[o+2]=b,l[o+3]=w,l[o+4]=S,l[o+5]=_,!0):!1}else{const g=o+8,v=r[o+6],y=g+m,T=v+m;let b=p,w=!1,S=!1;e?b||(w=e.has(y),S=e.has(T),b=!w&&!S):(w=!0,S=!0);const _=b||w,A=b||S;let I=!1;_&&(I=u(g,m,b));let R=!1;A&&(R=u(v,m,b));const M=I||R;if(M)for(let P=0;P<3;P++){const C=g+P,D=v+P,E=l[C],ie=l[C+3],ae=l[D],ue=l[D+3];l[o+P]=E<ae?E:ae,l[o+P+3]=ie>ue?ie:ue}return M}}}function _s(s,e,t,i,a,n,r){B.setBuffer(s._roots[e]),Qt(0,s,t,i,a,n,r),B.clearBuffer()}function Qt(s,e,t,i,a,n,r){const{float32Array:c,uint16Array:l,uint32Array:h}=B,f=s*2;if(L(f,l)){const o=q(s,h),m=G(f,l);fs(e,t,i,o,m,a,n,r)}else{const o=Y(s);pe(o,c,i,n,r)&&Qt(o,e,t,i,a,n,r);const m=$(s,h);pe(m,c,i,n,r)&&Qt(m,e,t,i,a,n,r)}}const As=["x","y","z"];function Ms(s,e,t,i,a,n){B.setBuffer(s._roots[e]);const r=Kt(0,s,t,i,a,n);return B.clearBuffer(),r}function Kt(s,e,t,i,a,n){const{float32Array:r,uint16Array:c,uint32Array:l}=B;let h=s*2;if(L(h,c)){const u=q(s,l),o=G(h,c);return hs(e,t,i,u,o,a,n)}else{const u=ii(s,l),o=As[u],p=i.direction[o]>=0;let x,d;p?(x=Y(s),d=$(s,l)):(x=$(s,l),d=Y(s));const v=pe(x,r,i,a,n)?Kt(x,e,t,i,a,n):null;if(v){const b=v.point[o];if(p?b<=r[d+u]:b>=r[d+u+3])return v}const T=pe(d,r,i,a,n)?Kt(d,e,t,i,a,n):null;return v&&T?v.distance<=T.distance?v:T:v||T||null}}const ut=new se,Re=new te,Pe=new te,Ye=new H,wi=new W,ft=new W;function Is(s,e,t,i){B.setBuffer(s._roots[e]);const a=Zt(0,s,t,i);return B.clearBuffer(),a}function Zt(s,e,t,i,a=null){const{float32Array:n,uint16Array:r,uint32Array:c}=B;let l=s*2;if(a===null&&(t.boundingBox||t.computeBoundingBox(),wi.set(t.boundingBox.min,t.boundingBox.max,i),a=wi),L(l,r)){const f=e.geometry,u=f.index,o=f.attributes.position,m=t.index,p=t.attributes.position,x=q(s,c),d=G(l,r);if(Ye.copy(i).invert(),t.boundsTree)return z(s,n,ft),ft.matrix.copy(Ye),ft.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>ft.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let y=x,T=d+x;y<T;y++)if(N(Pe,3*e.resolveTriangleIndex(y),u,o),Pe.needsUpdate=!0,v.intersectsTriangle(Pe))return!0;return!1}});for(let g=x,v=d+x;g<v;g++){const y=e.resolveTriangleIndex(g);N(Re,3*y,u,o),Re.a.applyMatrix4(Ye),Re.b.applyMatrix4(Ye),Re.c.applyMatrix4(Ye),Re.needsUpdate=!0;for(let T=0,b=m.count;T<b;T+=3)if(N(Pe,T,m,p),Pe.needsUpdate=!0,Re.intersectsTriangle(Pe))return!0}}else{const f=s+8,u=c[s+6];return z(f,n,ut),!!(a.intersectsBox(ut)&&Zt(f,e,t,i,a)||(z(u,n,ut),a.intersectsBox(ut)&&Zt(u,e,t,i,a)))}}const ht=new H,Bt=new W,Xe=new W,Rs=new F,Ps=new F,Fs=new F,Cs=new F;function Ds(s,e,t,i={},a={},n=0,r=1/0){e.boundingBox||e.computeBoundingBox(),Bt.set(e.boundingBox.min,e.boundingBox.max,t),Bt.needsUpdate=!0;const c=s.geometry,l=c.attributes.position,h=c.index,f=e.attributes.position,u=e.index,o=X.getPrimitive(),m=X.getPrimitive();let p=Rs,x=Ps,d=null,g=null;a&&(d=Fs,g=Cs);let v=1/0,y=null,T=null;return ht.copy(t).invert(),Xe.matrix.copy(ht),s.shapecast({boundsTraverseOrder:b=>Bt.distanceToBox(b),intersectsBounds:(b,w,S)=>S<v&&S<r?(w&&(Xe.min.copy(b.min),Xe.max.copy(b.max),Xe.needsUpdate=!0),!0):!1,intersectsRange:(b,w)=>{if(e.boundsTree){const S=e.boundsTree;return S.shapecast({boundsTraverseOrder:_=>Xe.distanceToBox(_),intersectsBounds:(_,A,I)=>I<v&&I<r,intersectsRange:(_,A)=>{for(let I=_,R=_+A;I<R;I++){const M=S.resolveTriangleIndex(I);N(m,3*M,u,f),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let P=b,C=b+w;P<C;P++){const D=s.resolveTriangleIndex(P);N(o,3*D,h,l),o.needsUpdate=!0;const E=o.distanceToTriangle(m,p,d);if(E<v&&(x.copy(p),g&&g.copy(d),v=E,y=P,T=I),E<n)return!0}}}})}else{const S=We(e);for(let _=0,A=S;_<A;_++){N(m,3*_,u,f),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let I=b,R=b+w;I<R;I++){const M=s.resolveTriangleIndex(I);N(o,3*M,h,l),o.needsUpdate=!0;const P=o.distanceToTriangle(m,p,d);if(P<v&&(x.copy(p),g&&g.copy(d),v=P,y=I,T=_),P<n)return!0}}}}}),X.releasePrimitive(o),X.releasePrimitive(m),v===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=v,i.faceIndex=y,a&&(a.point?a.point.copy(g):a.point=g.clone(),a.point.applyMatrix4(ht),x.applyMatrix4(ht),a.distance=x.sub(a.point).length(),a.faceIndex=T),i)}function Bs(){return typeof SharedArrayBuffer<"u"}const Je=new B.constructor,bt=new B.constructor,he=new si(()=>new se),Fe=new se,Ce=new se,Et=new se,zt=new se;let kt=!1;function Es(s,e,t,i){if(kt)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");kt=!0;const a=s._roots,n=e._roots;let r,c=0,l=0;const h=new H().copy(t).invert();for(let f=0,u=a.length;f<u;f++){Je.setBuffer(a[f]),l=0;const o=he.getPrimitive();z(0,Je.float32Array,o),o.applyMatrix4(h);for(let m=0,p=n.length;m<p&&(bt.setBuffer(n[m]),r=Z(0,0,t,h,i,c,l,0,0,o),bt.clearBuffer(),l+=n[m].length,!r);m++);if(he.releasePrimitive(o),Je.clearBuffer(),c+=a[f].length,r)break}return kt=!1,r}function Z(s,e,t,i,a,n=0,r=0,c=0,l=0,h=null,f=!1){let u,o;f?(u=bt,o=Je):(u=Je,o=bt);const m=u.float32Array,p=u.uint32Array,x=u.uint16Array,d=o.float32Array,g=o.uint32Array,v=o.uint16Array,y=s*2,T=e*2,b=L(y,x),w=L(T,v);let S=!1;if(w&&b)f?S=a(q(e,g),G(e*2,v),q(s,p),G(s*2,x),l,r+e,c,n+s):S=a(q(s,p),G(s*2,x),q(e,g),G(e*2,v),c,n+s,l,r+e);else if(w){const _=he.getPrimitive();z(e,d,_),_.applyMatrix4(t);const A=Y(s),I=$(s,p);z(A,m,Fe),z(I,m,Ce);const R=_.intersectsBox(Fe),M=_.intersectsBox(Ce);S=R&&Z(e,A,i,t,a,r,n,l,c+1,_,!f)||M&&Z(e,I,i,t,a,r,n,l,c+1,_,!f),he.releasePrimitive(_)}else{const _=Y(e),A=$(e,g);z(_,d,Et),z(A,d,zt);const I=h.intersectsBox(Et),R=h.intersectsBox(zt);if(I&&R)S=Z(s,_,t,i,a,n,r,c,l+1,h,f)||Z(s,A,t,i,a,n,r,c,l+1,h,f);else if(I)if(b)S=Z(s,_,t,i,a,n,r,c,l+1,h,f);else{const M=he.getPrimitive();M.copy(Et).applyMatrix4(t);const P=Y(s),C=$(s,p);z(P,m,Fe),z(C,m,Ce);const D=M.intersectsBox(Fe),E=M.intersectsBox(Ce);S=D&&Z(_,P,i,t,a,r,n,l,c+1,M,!f)||E&&Z(_,C,i,t,a,r,n,l,c+1,M,!f),he.releasePrimitive(M)}else if(R)if(b)S=Z(s,A,t,i,a,n,r,c,l+1,h,f);else{const M=he.getPrimitive();M.copy(zt).applyMatrix4(t);const P=Y(s),C=$(s,p);z(P,m,Fe),z(C,m,Ce);const D=M.intersectsBox(Fe),E=M.intersectsBox(Ce);S=D&&Z(A,P,i,t,a,r,n,l,c+1,M,!f)||E&&Z(A,C,i,t,a,r,n,l,c+1,M,!f),he.releasePrimitive(M)}}return S}const dt=new W,Si=new se,zs={strategy:Zi,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class ai{static serialize(e,t={}){t={cloneBuffers:!0,...t};const i=e.geometry,a=e._roots,n=e._indirectBuffer,r=i.getIndex();let c;return t.cloneBuffers?c={roots:a.map(l=>l.slice()),index:r?r.array.slice():null,indirectBuffer:n?n.slice():null}:c={roots:a,index:r?r.array:null,indirectBuffer:n},c}static deserialize(e,t,i={}){i={setIndex:!0,indirect:!!e.indirectBuffer,...i};const{index:a,roots:n,indirectBuffer:r}=e,c=new ai(t,{...i,[It]:!0});if(c._roots=n,c._indirectBuffer=r||null,i.setIndex){const l=t.getIndex();if(l===null){const h=new j(e.index,1,!1);t.setIndex(h)}else l.array!==a&&(l.array.set(a),l.needsUpdate=!0)}return c}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...zs,[It]:!1},t),t.useSharedArrayBuffer&&!Bs())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[It]||(Qr(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new se))),this.resolveTriangleIndex=t.indirect?i=>this._indirectBuffer[i]:i=>i}refit(e=null){return(this.indirect?Ss:us)(this,e)}traverse(e,t=0){const i=this._roots[t],a=new Uint32Array(i),n=new Uint16Array(i);r(0);function r(c,l=0){const h=c*2,f=n[h+15]===wt;if(f){const u=a[c+6],o=n[h+14];e(l,f,new Float32Array(i,c*4,6),u,o)}else{const u=c+me/4,o=a[c+6],m=a[c+7];e(l,f,new Float32Array(i,c*4,6),m)||(r(u,l+1),r(o,l+1))}}}raycast(e,t=Ht,i=0,a=1/0){const n=this._roots,r=this.geometry,c=[],l=t.isMaterial,h=Array.isArray(t),f=r.groups,u=l?t.side:t,o=this.indirect?_s:ms;for(let m=0,p=n.length;m<p;m++){const x=h?t[f[m].materialIndex].side:u,d=c.length;if(o(this,m,x,e,c,i,a),h){const g=f[m].materialIndex;for(let v=d,y=c.length;v<y;v++)c[v].face.materialIndex=g}}return c}raycastFirst(e,t=Ht,i=0,a=1/0){const n=this._roots,r=this.geometry,c=t.isMaterial,l=Array.isArray(t);let h=null;const f=r.groups,u=c?t.side:t,o=this.indirect?Ms:gs;for(let m=0,p=n.length;m<p;m++){const x=l?t[f[m].materialIndex].side:u,d=o(this,m,x,e,i,a);d!=null&&(h==null||d.distance<h.distance)&&(h=d,l&&(d.face.materialIndex=f[m].materialIndex))}return h}intersectsGeometry(e,t){let i=!1;const a=this._roots,n=this.indirect?Is:vs;for(let r=0,c=a.length;r<c&&(i=n(this,r,e,t),!i);r++);return i}shapecast(e){const t=X.getPrimitive(),i=this.indirect?ds:ls;let{boundsTraverseOrder:a,intersectsBounds:n,intersectsRange:r,intersectsTriangle:c}=e;if(r&&c){const u=r;r=(o,m,p,x,d)=>u(o,m,p,x,d)?!0:i(o,m,this,c,p,x,t)}else r||(c?r=(u,o,m,p)=>i(u,o,this,c,m,p,t):r=(u,o,m)=>m);let l=!1,h=0;const f=this._roots;for(let u=0,o=f.length;u<o;u++){const m=f[u];if(l=is(this,u,n,r,a,h),l)break;h+=m.byteLength}return X.releasePrimitive(t),l}bvhcast(e,t,i){let{intersectsRanges:a,intersectsTriangles:n}=i;const r=X.getPrimitive(),c=this.geometry.index,l=this.geometry.attributes.position,h=this.indirect?p=>{const x=this.resolveTriangleIndex(p);N(r,x*3,c,l)}:p=>{N(r,p*3,c,l)},f=X.getPrimitive(),u=e.geometry.index,o=e.geometry.attributes.position,m=e.indirect?p=>{const x=e.resolveTriangleIndex(p);N(f,x*3,u,o)}:p=>{N(f,p*3,u,o)};if(n){const p=(x,d,g,v,y,T,b,w)=>{for(let S=g,_=g+v;S<_;S++){m(S),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let A=x,I=x+d;A<I;A++)if(h(A),r.needsUpdate=!0,n(r,f,A,S,y,T,b,w))return!0}return!1};if(a){const x=a;a=function(d,g,v,y,T,b,w,S){return x(d,g,v,y,T,b,w,S)?!0:p(d,g,v,y,T,b,w,S)}}else a=p}return Es(this,e,t,a)}intersectsBox(e,t){return dt.set(e.min,e.max,t),dt.needsUpdate=!0,this.shapecast({intersectsBounds:i=>dt.intersectsBox(i),intersectsTriangle:i=>dt.intersectsTriangle(i)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,i={},a={},n=0,r=1/0){return(this.indirect?Ds:ws)(this,e,t,i,a,n,r)}closestPointToPoint(e,t={},i=0,a=1/0){return rs(this,e,t,i,a)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(i=>{z(0,new Float32Array(i),Si),e.union(Si)}),e}}function ks(s){switch(s){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Ns(s){switch(s){case 1:return yt;case 2:return Yi;case 3:return O;case 4:return O}}function _i(s){switch(s){case 1:return vr;case 2:return ji;case 3:return Vt;case 4:return Vt}}class nr extends Q{constructor(){super(),this.minFilter=k,this.magFilter=k,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,i=e.itemSize,a=e.count;if(t!==null){if(i*a%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=a*i/t}const n=e.itemSize,r=e.count,c=e.normalized,l=e.array.constructor,h=l.BYTES_PER_ELEMENT;let f=this._forcedType,u=n;if(f===null)switch(l){case Float32Array:f=U;break;case Uint8Array:case Uint16Array:case Uint32Array:f=Ze;break;case Int8Array:case Int16Array:case Int32Array:f=At;break}let o,m,p,x,d=ks(n);switch(f){case U:p=1,m=Ns(n),c&&h===1?(x=l,d+="8",l===Uint8Array?o=Wt:(o=hi,d+="_SNORM")):(x=Float32Array,d+="32F",o=U);break;case At:d+=h*8+"I",p=c?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=_i(n),h===1?(x=Int8Array,o=hi):h===2?(x=Int16Array,o=gr):(x=Int32Array,o=At);break;case Ze:d+=h*8+"UI",p=c?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=_i(n),h===1?(x=Uint8Array,o=Wt):h===2?(x=Uint16Array,o=pr):(x=Uint32Array,o=Ze);break}u===3&&(m===O||m===Vt)&&(u=4);const g=Math.ceil(Math.sqrt(r))||1,v=u*g*g,y=new x(v),T=e.normalized;e.normalized=!1;for(let b=0;b<r;b++){const w=u*b;y[w]=e.getX(b)/p,n>=2&&(y[w+1]=e.getY(b)/p),n>=3&&(y[w+2]=e.getZ(b)/p,u===4&&(y[w+3]=1)),n>=4&&(y[w+3]=e.getW(b)/p)}e.normalized=T,this.internalFormat=d,this.format=m,this.type=o,this.image.width=g,this.image.height=g,this.image.data=y,this.needsUpdate=!0,this.dispose(),e.itemSize=i,e.count=a}}class or extends nr{constructor(){super(),this._forcedType=Ze}}class cr extends nr{constructor(){super(),this._forcedType=U}}class Os{constructor(){this.index=new or,this.position=new cr,this.bvhBounds=new Q,this.bvhContents=new Q,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(Ls(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const i=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==i.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const a=tr(er(t));this._cachedIndexAttr=new j(a,1,!1)}Us(t,i,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:i,bvhContents:a}=this;e&&e.dispose(),t&&t.dispose(),i&&i.dispose(),a&&a.dispose()}}function Us(s,e,t){const i=t.array,a=s.index?s.index.array:null;for(let n=0,r=e.length;n<r;n++){const c=3*n,l=3*e[n];for(let h=0;h<3;h++)i[c+h]=a?a[l+h]:l+h}}function Ls(s,e,t){const i=s._roots;if(i.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const a=i[0],n=new Uint16Array(a),r=new Uint32Array(a),c=new Float32Array(a),l=a.byteLength/me,h=2*Math.ceil(Math.sqrt(l/2)),f=new Float32Array(4*h*h),u=Math.ceil(Math.sqrt(l)),o=new Uint32Array(2*u*u);for(let m=0;m<l;m++){const p=m*me/4,x=p*2,d=p;for(let g=0;g<3;g++)f[8*m+0+g]=c[d+0+g],f[8*m+4+g]=c[d+3+g];if(L(x,n)){const g=G(x,n),v=q(p,r),y=4294901760|g;o[m*2+0]=y,o[m*2+1]=v}else{const g=4*$(p,r)/me,v=ii(p,r);o[m*2+0]=v,o[m*2+1]=g}}e.image.data=f,e.image.width=h,e.image.height=h,e.format=O,e.type=U,e.internalFormat="RGBA32F",e.minFilter=k,e.magFilter=k,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=o,t.image.width=u,t.image.height=u,t.format=ji,t.type=Ze,t.internalFormat="RG32UI",t.minFilter=k,t.magFilter=k,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Hs=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Ws=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Vs=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function lr(s,e,t=0){if(s.isInterleavedBufferAttribute){const i=s.itemSize;for(let a=0,n=s.count;a<n;a++){const r=a+t;e.setX(r,s.getX(a)),i>=2&&e.setY(r,s.getY(a)),i>=3&&e.setZ(r,s.getZ(a)),i>=4&&e.setW(r,s.getW(a))}}else{const i=e.array,a=i.constructor,n=i.BYTES_PER_ELEMENT*s.itemSize*t;new a(i.buffer,n,s.array.length).set(s.array)}}function Ke(s,e=null){const t=s.array.constructor,i=s.normalized,a=s.itemSize,n=e===null?s.count:e;return new j(new t(a*n),a,i)}function ke(s,e){if(!s&&!e)return!0;if(!!s!=!!e)return!1;const t=s.count===e.count,i=s.normalized===e.normalized,a=s.array.constructor===e.array.constructor,n=s.itemSize===e.itemSize;return!(!t||!i||!a||!n)}function qs(s){const e=s[0].index!==null,t=new Set(Object.keys(s[0].attributes));if(!s[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let i=0;i<s.length;++i){const a=s[i];let n=0;if(e!==(a.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const r in a.attributes){if(!t.has(r))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+r+'" attribute exists among all geometries, or in none of them.');n++}if(n!==t.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function Gs(s){let e=0;for(let t=0,i=s.length;t<i;t++)e+=s[t].getIndex().count;return e}function $s(s){let e=0;for(let t=0,i=s.length;t<i;t++)e+=s[t].getAttribute("position").count;return e}function js(s,e,t){s.index&&s.index.count!==e&&s.setIndex(null);const i=s.attributes;for(const a in i)i[a].count!==t&&s.deleteAttribute(a)}function Ys(s,e={},t=new Ue){const{useGroups:i=!1,forceUpdate:a=!1,skipAssigningAttributes:n=[],overwriteIndex:r=!0}=e;qs(s);const c=s[0].index!==null,l=c?Gs(s):-1,h=$s(s);if(js(t,l,h),i){let u=0;for(let o=0,m=s.length;o<m;o++){const p=s[o];let x;c?x=p.getIndex().count:x=p.getAttribute("position").count,t.addGroup(u,x,o),u+=x}}if(c){let u=!1;if(t.index||(t.setIndex(new j(new Uint32Array(l),1,!1)),u=!0),u||r){let o=0,m=0;const p=t.getIndex();for(let x=0,d=s.length;x<d;x++){const g=s[x],v=g.getIndex();if(!(!a&&!u&&n[x]))for(let T=0;T<v.count;++T)p.setX(o+T,v.getX(T)+m);o+=v.count,m+=g.getAttribute("position").count}}}const f=Object.keys(s[0].attributes);for(let u=0,o=f.length;u<o;u++){let m=!1;const p=f[u];if(!t.getAttribute(p)){const g=s[0].getAttribute(p);t.setAttribute(p,Ke(g,h)),m=!0}let x=0;const d=t.getAttribute(p);for(let g=0,v=s.length;g<v;g++){const y=s[g],T=!a&&!m&&n[g],b=y.getAttribute(p);if(!T)if(p==="color"&&d.itemSize!==b.itemSize)for(let w=x,S=b.count;w<S;w++)b.setXYZW(w,d.getX(w),d.getY(w),d.getZ(w),1);else lr(b,d,x);x+=b.count}}}function Xs(s,e,t){const i=s.index,n=s.attributes.position.count,r=i?i.count:n;let c=s.groups;c.length===0&&(c=[{count:r,start:0,materialIndex:0}]);let l=s.getAttribute("materialIndex");if(!l||l.count!==n){let f;t.length<=255?f=new Uint8Array(n):f=new Uint16Array(n),l=new j(f,1,!1),s.deleteAttribute("materialIndex"),s.setAttribute("materialIndex",l)}const h=l.array;for(let f=0;f<c.length;f++){const u=c[f],o=u.start,m=u.count,p=Math.min(m,r-o),x=Array.isArray(e)?e[u.materialIndex]:e,d=t.indexOf(x);for(let g=0;g<p;g++){let v=o+g;i&&(v=i.getX(v)),h[v]=d}}}function Qs(s,e){if(!s.index){const t=s.attributes.position.count,i=new Array(t);for(let a=0;a<t;a++)i[a]=a;s.setIndex(i)}if(!s.attributes.normal&&e&&e.includes("normal")&&s.computeVertexNormals(),!s.attributes.uv&&e&&e.includes("uv")){const t=s.attributes.position.count;s.setAttribute("uv",new j(new Float32Array(t*2),2,!1))}if(!s.attributes.uv2&&e&&e.includes("uv2")){const t=s.attributes.position.count;s.setAttribute("uv2",new j(new Float32Array(t*2),2,!1))}if(!s.attributes.tangent&&e&&e.includes("tangent"))if(s.attributes.uv&&s.attributes.normal)s.computeTangents();else{const t=s.attributes.position.count;s.setAttribute("tangent",new j(new Float32Array(t*4),4,!1))}if(!s.attributes.color&&e&&e.includes("color")){const t=s.attributes.position.count,i=new Float32Array(t*4);i.fill(1),s.setAttribute("color",new j(i,4))}}function ni(s){let e=0;if(s.byteLength!==0){const t=new Uint8Array(s);for(let i=0;i<s.byteLength;i++){const a=t[i];e=(e<<5)-e+a,e|=0}}return e}function Ai(s){let e=s.uuid;const t=Object.values(s.attributes);s.index&&(t.push(s.index),e+=`index|${s.index.version}`);const i=Object.keys(t).sort();for(const a of i){const n=t[a];e+=`${a}_${n.version}|`}return e}function Mi(s){const e=s.skeleton;return e?(e.boneTexture||e.computeBoneTexture(),`${ni(e.boneTexture.image.data.buffer)}_${e.boneTexture.uuid}`):null}class Ks{constructor(e=null){this.matrixWorld=new H,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,e!==null&&this.updateFrom(e)}updateFrom(e){const t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;this.matrixWorld.copy(e.matrixWorld),this.geometryHash=Ai(t),this.primitiveCount=i,this.skeletonHash=Mi(e)}didChange(e){const t=e.geometry,i=(t.index?t.index.count:t.attributes.position.count)/3;return!(this.matrixWorld.equals(e.matrixWorld)&&this.geometryHash===Ai(t)&&this.skeletonHash===Mi(e)&&this.primitiveCount===i)}}const ye=new F,be=new F,Te=new F,Ii=new Le,mt=new F,Nt=new F,Ri=new Le,Pi=new Le,pt=new H,Fi=new H;function Ci(s,e,t){const i=s.skeleton,a=s.geometry,n=i.bones,r=i.boneInverses;Ri.fromBufferAttribute(a.attributes.skinIndex,e),Pi.fromBufferAttribute(a.attributes.skinWeight,e),pt.elements.fill(0);for(let c=0;c<4;c++){const l=Pi.getComponent(c);if(l!==0){const h=Ri.getComponent(c);Fi.multiplyMatrices(n[h].matrixWorld,r[h]),Zs(pt,Fi,l)}}return pt.multiply(s.bindMatrix).premultiply(s.bindMatrixInverse),t.transformDirection(pt),t}function Ot(s,e,t,i,a){mt.set(0,0,0);for(let n=0,r=s.length;n<r;n++){const c=e[n],l=s[n];c!==0&&(Nt.fromBufferAttribute(l,i),t?mt.addScaledVector(Nt,c):mt.addScaledVector(Nt.sub(a),c))}a.add(mt)}function Zs(s,e,t){const i=s.elements,a=e.elements;for(let n=0,r=a.length;n<r;n++)i[n]+=a[n]*t}function Js(s){const{index:e,attributes:t}=s;if(e)for(let i=0,a=e.count;i<a;i+=3){const n=e.getX(i),r=e.getX(i+2);e.setX(i,r),e.setX(i+2,n)}else for(const i in t){const a=t[i],n=a.itemSize;for(let r=0,c=a.count;r<c;r+=3)for(let l=0;l<n;l++){const h=a.getComponent(r,l),f=a.getComponent(r+2,l);a.setComponent(r,l,f),a.setComponent(r+2,l,h)}}return s}function ea(s,e={},t=new Ue){e={applyWorldTransforms:!0,attributes:[],...e};const i=s.geometry,a=e.applyWorldTransforms,n=e.attributes.includes("normal"),r=e.attributes.includes("tangent"),c=i.attributes,l=t.attributes;for(const v in t.attributes)(!e.attributes.includes(v)||!(v in i.attributes))&&t.deleteAttribute(v);!t.index&&i.index&&(t.index=i.index.clone()),l.position||t.setAttribute("position",Ke(c.position)),n&&!l.normal&&c.normal&&t.setAttribute("normal",Ke(c.normal)),r&&!l.tangent&&c.tangent&&t.setAttribute("tangent",Ke(c.tangent)),ke(i.index,t.index),ke(c.position,l.position),n&&ke(c.normal,l.normal),r&&ke(c.tangent,l.tangent);const h=c.position,f=n?c.normal:null,u=r?c.tangent:null,o=i.morphAttributes.position,m=i.morphAttributes.normal,p=i.morphAttributes.tangent,x=i.morphTargetsRelative,d=s.morphTargetInfluences,g=new xr;g.getNormalMatrix(s.matrixWorld),i.index&&t.index.array.set(i.index.array);for(let v=0,y=c.position.count;v<y;v++)ye.fromBufferAttribute(h,v),f&&be.fromBufferAttribute(f,v),u&&(Ii.fromBufferAttribute(u,v),Te.fromBufferAttribute(u,v)),d&&(o&&Ot(o,d,x,v,ye),m&&Ot(m,d,x,v,be),p&&Ot(p,d,x,v,Te)),s.isSkinnedMesh&&(s.applyBoneTransform(v,ye),f&&Ci(s,v,be),u&&Ci(s,v,Te)),a&&ye.applyMatrix4(s.matrixWorld),l.position.setXYZ(v,ye.x,ye.y,ye.z),f&&(a&&be.applyNormalMatrix(g),l.normal.setXYZ(v,be.x,be.y,be.z)),u&&(a&&Te.transformDirection(s.matrixWorld),l.tangent.setXYZW(v,Te.x,Te.y,Te.z,Ii.w));for(const v in e.attributes){const y=e.attributes[v];y==="position"||y==="tangent"||y==="normal"||!(y in c)||(l[y]||t.setAttribute(y,Ke(c[y])),ke(c[y],l[y]),lr(c[y],l[y]))}return s.matrixWorld.determinant()<0&&Js(t),t}class ta extends Ue{constructor(){super(),this.version=0,this.hash=null,this._diff=new Ks}isCompatible(e,t){const i=e.geometry;for(let a=0;a<t.length;a++){const n=t[a],r=i.attributes[n],c=this.attributes[n];if(r&&!ke(r,c))return!1}return!0}updateFrom(e,t){const i=this._diff;return i.didChange(e)?(ea(e,t,this),i.updateFrom(e),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}}const Jt=0,ur=1,fr=2;function ia(s,e){for(let t=0,i=s.length;t<i;t++)s[t].traverseVisible(n=>{n.isMesh&&e(n)})}function ra(s){const e=[];for(let t=0,i=s.length;t<i;t++){const a=s[t];Array.isArray(a.material)?e.push(...a.material):e.push(a.material)}return e}function sa(s,e,t){if(s.length===0){e.setIndex(null);const i=e.attributes;for(const a in i)e.deleteAttribute(a);for(const a in t.attributes)e.setAttribute(t.attributes[a],new j(new Float32Array(0),4,!1))}else Ys(s,t,e);for(const i in e.attributes)e.attributes[i].needsUpdate=!0}class aa{constructor(e){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(e||[])}_getDummyMesh(){if(!this._dummyMesh){const e=new yr,t=new Ue;t.setAttribute("position",new j(new Float32Array(9),3)),this._dummyMesh=new br(t,e)}return this._dummyMesh}_getMeshes(){const e=[];return ia(this.objects,t=>{e.push(t)}),e.sort((t,i)=>t.uuid>i.uuid?1:t.uuid<i.uuid?-1:0),e.length===0&&e.push(this._getDummyMesh()),e}_updateIntermediateGeometries(){const{_intermediateGeometry:e}=this,t=this._getMeshes(),i=new Set(e.keys()),a={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let n=0,r=t.length;n<r;n++){const c=t[n],l=c.uuid;i.delete(l);let h=e.get(l);(!h||!h.isCompatible(c,this.attributes))&&(h&&h.dispose(),h=new ta,e.set(l,h)),h.updateFrom(c,a)&&this.generateMissingAttributes&&Qs(h,this.attributes)}i.forEach(n=>{e.delete(n)})}setObjects(e){Array.isArray(e)?this.objects=[...e]:this.objects=[e]}generate(e=new Ue){const{useGroups:t,overwriteIndex:i,_intermediateGeometry:a,_geometryMergeSets:n}=this,r=this._getMeshes(),c=[],l=[],h=n.get(e)||[];this._updateIntermediateGeometries();let f=!1;r.length!==h.length&&(f=!0);for(let o=0,m=r.length;o<m;o++){const p=r[o],x=a.get(p.uuid);l.push(x);const d=h[o];!d||d.uuid!==x.uuid?(c.push(!1),f=!0):d.version!==x.version?c.push(!1):c.push(!0)}sa(l,e,{useGroups:t,forceUpdate:f,skipAssigningAttributes:c,overwriteIndex:i}),f&&e.dispose(),n.set(e,l.map(o=>({version:o.version,uuid:o.uuid})));let u=Jt;return f?u=fr:c.includes(!1)&&(u=ur),{changeType:u,materials:ra(r),geometry:e}}}function na(s){const e=new Set;for(let t=0,i=s.length;t<i;t++){const a=s[t];for(const n in a){const r=a[n];r&&r.isTexture&&e.add(r)}}return Array.from(e)}function oa(s){const e=[],t=new Set;for(let a=0,n=s.length;a<n;a++)s[a].traverse(r=>{r.visible&&(r.isRectAreaLight||r.isSpotLight||r.isPointLight||r.isDirectionalLight)&&(e.push(r),r.iesMap&&t.add(r.iesMap))});const i=Array.from(t).sort((a,n)=>a.uuid<n.uuid?1:a.uuid>n.uuid?-1:0);return{lights:e,iesTextures:i}}class oi{get initialized(){return!!this.bvh}constructor(e){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new Ue,this.staticGeometryGenerator=new aa(e),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(e){this.staticGeometryGenerator.setObjects(e)}setBVHWorker(e){this._bvhWorker=e}async generateAsync(e=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(e)))),this._pendingGenerate;{this._buildAsync=!0;const t=this.generate(e);return this._buildAsync=!1,t.bvh=this.bvh=await t.bvh,t}}generate(e=null){const{staticGeometryGenerator:t,geometry:i,attributes:a}=this,n=t.objects;t.attributes=a,n.forEach(o=>{o.traverse(m=>{m.isSkinnedMesh&&m.skeleton&&m.skeleton.update()})});const r=t.generate(i),c=r.materials;let l=r.changeType!==Jt||this._materialUuids===null||this._materialUuids.length!==length;if(!l){for(let o=0,m=c.length;o<m;o++)if(c[o].uuid!==this._materialUuids[o]){l=!0;break}}const h=na(c),{lights:f,iesTextures:u}=oa(n);if(l&&(Xs(i,c,c),this._materialUuids=c.map(o=>o.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(r.changeType===fr){const o={strategy:Ji,maxLeafTris:1,indirect:!0,onProgress:e,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(i,o):this.bvh=new ai(i,o)}else r.changeType===ur&&this.bvh.refit()}return{bvhChanged:r.changeType!==Jt,bvh:this.bvh,needsMaterialIndexUpdate:l,lights:f,iesTextures:u,geometry:i,materials:c,textures:h,objects:n}}}class In extends oi{constructor(...e){super(...e),console.warn('DynamicPathTracingSceneGenerator has been deprecated and renamed to "PathTracingSceneGenerator".')}}class Rn extends oi{constructor(...e){super(...e),console.warn('PathTracingSceneWorker has been deprecated and renamed to "PathTracingSceneGenerator".')}}class et extends Tt{set needsUpdate(e){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(e){super(e);for(const t in this.uniforms)Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(i){this.uniforms[t].value=i}})}setDefine(e,t=void 0){if(t==null){if(e in this.defines)return delete this.defines[e],this.needsUpdate=!0,!0}else if(this.defines[e]!==t)return this.defines[e]=t,this.needsUpdate=!0,!0;return!1}}class ca extends et{constructor(e){super({blending:He,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(e)}}function gt(s=1){let e="uint";return s>1&&(e="uvec"+s),`
		${e} sobolReverseBits( ${e} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${e} sobolHashCombine( uint seed, ${e} v ) {

			return seed ^ ( v + ${e}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${e} sobolLaineKarrasPermutation( ${e} x, ${e} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${e} nestedUniformScrambleBase2( ${e} x, ${e} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function vt(s=1){let e="uint",t="float",i="",a=".r",n="1u";return s>1&&(e="uvec"+s,t="vec"+s,i=s+"",s===2?(a=".rg",n="uvec2( 1u, 2u )"):s===3?(a=".rgb",n="uvec3( 1u, 2u, 3u )"):(a="",n="uvec4( 1u, 2u, 3u, 4u )")),`

		${t} sobol${i}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${t} sobol_pt = sobolGetTexturePoint( shuffled_index )${a};
			${e} result = ${e}( sobol_pt * 16777216.0 );

			${e} seed2 = sobolHashCombine( seed, ${n} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${t}( result >> 8 );

		}
	`}const hr=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${gt(1)}
	${gt(2)}
	${gt(3)}
	${gt(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,la=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,ua=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${vt(1)}
	${vt(2)}
	${vt(3)}
	${vt(4)}

`;class fa extends et{constructor(){super({blending:He,uniforms:{resolution:{value:new ee}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${hr}
				${la}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class ha{generate(e,t=256){const i=new Oe(t,t,{type:U,format:O,minFilter:k,magFilter:k,generateMipmaps:!1}),a=e.getRenderTarget();e.setRenderTarget(i);const n=new Se(new fa);return n.material.resolution.set(t,t),n.render(e),e.setRenderTarget(a),n.dispose(),i}}class da extends Xi{set bokehSize(e){this.fStop=this.getFocalLength()/e}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...e){super(...e),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(e,t){return super.copy(e,t),this.fStop=e.fStop,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio,this}}class ma{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(e){e instanceof da?(this.bokehSize=e.bokehSize,this.apertureBlades=e.apertureBlades,this.apertureRotation=e.apertureRotation,this.focusDistance=e.focusDistance,this.anamorphicRatio=e.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}function Ut(s){const e=new Uint16Array(s.length);for(let t=0,i=s.length;t<i;++t)e[t]=re.toHalfFloat(s[t]);return e}function Di(s,e,t=0,i=s.length){let a=t,n=t+i-1;for(;a<n;){const r=a+n>>1;s[r]<e?a=r+1:n=r}return a-t}function pa(s,e,t){return .2126*s+.7152*e+.0722*t}function ga(s,e=J){const t=s.clone();t.source=new Tr({...t.image});const{width:i,height:a,data:n}=t.image;let r=n;if(t.type!==e){e===J?r=new Uint16Array(n.length):r=new Float32Array(n.length);let c;n instanceof Int8Array||n instanceof Int16Array||n instanceof Int32Array?c=2**(8*n.BYTES_PER_ELEMENT-1)-1:c=2**(8*n.BYTES_PER_ELEMENT)-1;for(let l=0,h=n.length;l<h;l++){let f=n[l];t.type===J&&(f=re.fromHalfFloat(n[l])),t.type!==U&&t.type!==J&&(f/=c),e===J&&(r[l]=re.toHalfFloat(f))}t.image.data=r,t.type=e}if(t.flipY){const c=r;r=r.slice();for(let l=0;l<a;l++)for(let h=0;h<i;h++){const f=a-l-1,u=4*(l*i+h),o=4*(f*i+h);r[o+0]=c[u+0],r[o+1]=c[u+1],r[o+2]=c[u+2],r[o+3]=c[u+3]}t.flipY=!1,t.image.data=r}return t}class va{constructor(){const e=new Q(Ut(new Float32Array([0,0,0,0])),1,1);e.type=J,e.format=O,e.minFilter=oe,e.magFilter=oe,e.wrapS=we,e.wrapT=we,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new Q(Ut(new Float32Array([0,1])),1,2);t.type=J,t.format=yt,t.minFilter=oe,t.magFilter=oe,t.generateMipmaps=!1,t.needsUpdate=!0;const i=new Q(Ut(new Float32Array([0,0,1,1])),2,2);i.type=J,i.format=yt,i.minFilter=oe,i.magFilter=oe,i.generateMipmaps=!1,i.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=i,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){const t=ga(e);t.wrapS=we,t.wrapT=_e;const{width:i,height:a,data:n}=t.image,r=new Float32Array(i*a),c=new Float32Array(i*a),l=new Float32Array(a),h=new Float32Array(a);let f=0,u=0;for(let d=0;d<a;d++){let g=0;for(let v=0;v<i;v++){const y=d*i+v,T=re.fromHalfFloat(n[4*y+0]),b=re.fromHalfFloat(n[4*y+1]),w=re.fromHalfFloat(n[4*y+2]),S=pa(T,b,w);g+=S,f+=S,r[y]=S,c[y]=g}if(g!==0)for(let v=d*i,y=d*i+i;v<y;v++)r[v]/=g,c[v]/=g;u+=g,l[d]=g,h[d]=u}if(u!==0)for(let d=0,g=l.length;d<g;d++)l[d]/=u,h[d]/=u;const o=new Uint16Array(a),m=new Uint16Array(i*a);for(let d=0;d<a;d++){const g=(d+1)/a,v=Di(h,g);o[d]=re.toHalfFloat((v+.5)/a)}for(let d=0;d<a;d++)for(let g=0;g<i;g++){const v=d*i+g,y=(g+1)/i,T=Di(c,y,d*i,i);m[v]=re.toHalfFloat((T+.5)/i)}this.dispose();const{marginalWeights:p,conditionalWeights:x}=this;p.image={width:a,height:1,data:o},p.needsUpdate=!0,x.image={width:i,height:a,data:m},x.needsUpdate=!0,this.totalSum=f,this.map=t}}const Lt=6,xa=0,ya=1,ba=2,Ta=3,wa=4,K=new F,V=new F,Bi=new H,De=new wr,Ei=new F,Be=new F,Sa=new F(0,1,0);class _a{constructor(){const e=new Q(new Float32Array(4),1,1);e.format=O,e.type=U,e.wrapS=_e,e.wrapT=_e,e.generateMipmaps=!1,e.minFilter=k,e.magFilter=k,this.tex=e,this.count=0}updateFrom(e,t=[]){const i=this.tex,a=Math.max(e.length*Lt,1),n=Math.ceil(Math.sqrt(a));i.image.width!==n&&(i.dispose(),i.image.data=new Float32Array(n*n*4),i.image.width=n,i.image.height=n);const r=i.image.data;for(let l=0,h=e.length;l<h;l++){const f=e[l],u=l*Lt*4;let o=0;for(let p=0;p<Lt*4;p++)r[u+p]=0;f.getWorldPosition(V),r[u+o++]=V.x,r[u+o++]=V.y,r[u+o++]=V.z;let m=xa;if(f.isRectAreaLight&&f.isCircular?m=ya:f.isSpotLight?m=ba:f.isDirectionalLight?m=Ta:f.isPointLight&&(m=wa),r[u+o++]=m,r[u+o++]=f.color.r,r[u+o++]=f.color.g,r[u+o++]=f.color.b,r[u+o++]=f.intensity,f.getWorldQuaternion(De),f.isRectAreaLight)K.set(f.width,0,0).applyQuaternion(De),r[u+o++]=K.x,r[u+o++]=K.y,r[u+o++]=K.z,o++,V.set(0,f.height,0).applyQuaternion(De),r[u+o++]=V.x,r[u+o++]=V.y,r[u+o++]=V.z,r[u+o++]=K.cross(V).length()*(f.isCircular?Math.PI/4:1);else if(f.isSpotLight){const p=f.radius||0;Ei.setFromMatrixPosition(f.matrixWorld),Be.setFromMatrixPosition(f.target.matrixWorld),Bi.lookAt(Ei,Be,Sa),De.setFromRotationMatrix(Bi),K.set(1,0,0).applyQuaternion(De),r[u+o++]=K.x,r[u+o++]=K.y,r[u+o++]=K.z,o++,V.set(0,1,0).applyQuaternion(De),r[u+o++]=V.x,r[u+o++]=V.y,r[u+o++]=V.z,r[u+o++]=Math.PI*p*p,r[u+o++]=p,r[u+o++]=f.decay,r[u+o++]=f.distance,r[u+o++]=Math.cos(f.angle),r[u+o++]=Math.cos(f.angle*(1-f.penumbra)),r[u+o++]=f.iesMap?t.indexOf(f.iesMap):-1}else if(f.isPointLight){const p=K.setFromMatrixPosition(f.matrixWorld);r[u+o++]=p.x,r[u+o++]=p.y,r[u+o++]=p.z,o++,o+=4,o+=1,r[u+o++]=f.decay,r[u+o++]=f.distance}else if(f.isDirectionalLight){const p=K.setFromMatrixPosition(f.matrixWorld),x=V.setFromMatrixPosition(f.target.matrixWorld);Be.subVectors(p,x).normalize(),r[u+o++]=Be.x,r[u+o++]=Be.y,r[u+o++]=Be.z}}this.count=e.length;const c=ni(r.buffer);return this.hash!==c?(this.hash=c,i.needsUpdate=!0,!0):!1}}function zi(s,e,t,i,a){if(e>i)throw new Error;const n=s.length/e,r=s.constructor.BYTES_PER_ELEMENT*8;let c=1;switch(s.constructor){case Uint8Array:case Uint16Array:case Uint32Array:c=2**r-1;break;case Int8Array:case Int16Array:case Int32Array:c=2**(r-1)-1;break}for(let l=0;l<n;l++){const h=4*l,f=e*l;for(let u=0;u<i;u++)t[a+h+u]=e>=u+1?s[f+u]/c:0}}class Aa extends Sr{constructor(){super(),this._textures=[],this.type=U,this.format=O,this.internalFormat="RGBA32F"}updateAttribute(e,t){const i=this._textures[e];i.updateFrom(t);const a=i.image,n=this.image;if(a.width!==n.width||a.height!==n.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:r,height:c,data:l}=n,f=r*c*4*e;let u=t.itemSize;u===3&&(u=4),zi(i.image.data,u,l,4,f),this.dispose(),this.needsUpdate=!0}setAttributes(e){const t=e[0].count,i=e.length;for(let u=0,o=i;u<o;u++)if(e[u].count!==t)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const a=this._textures;for(;a.length<i;){const u=new cr;a.push(u)}for(;a.length>i;)a.pop();for(let u=0,o=i;u<o;u++)a[u].updateFrom(e[u]);const r=a[0].image,c=this.image;(r.width!==c.width||r.height!==c.height||r.depth!==i)&&(c.width=r.width,c.height=r.height,c.depth=i,c.data=new Float32Array(c.width*c.height*c.depth*4));const{data:l,width:h,height:f}=c;for(let u=0,o=i;u<o;u++){const m=a[u],x=h*f*4*u;let d=e[u].itemSize;d===3&&(d=4),zi(m.image.data,d,l,4,x)}this.dispose(),this.needsUpdate=!0}}class Ma extends Aa{updateNormalAttribute(e){this.updateAttribute(0,e)}updateTangentAttribute(e){this.updateAttribute(1,e)}updateUvAttribute(e){this.updateAttribute(2,e)}updateColorAttribute(e){this.updateAttribute(3,e)}updateFrom(e,t,i,a){this.setAttributes([e,t,i,a])}}function ci(s,e){return s.uuid<e.uuid?1:s.uuid>e.uuid?-1:0}function ei(s){return`${s.source.uuid}:${s.colorSpace}`}function Ia(s){const e=new Set,t=[];for(let i=0,a=s.length;i<a;i++){const n=s[i],r=ei(n);e.has(r)||(e.add(r),t.push(n))}return t}function Ra(s){const e=s.map(i=>i.iesMap||null).filter(i=>i),t=new Set(e);return Array.from(t).sort(ci)}function Pa(s){const e=new Set;for(let i=0,a=s.length;i<a;i++){const n=s[i];for(const r in n){const c=n[r];c&&c.isTexture&&e.add(c)}}const t=Array.from(e);return Ia(t).sort(ci)}function Fa(s){const e=[];return s.traverse(t=>{t.visible&&(t.isRectAreaLight||t.isSpotLight||t.isPointLight||t.isDirectionalLight)&&e.push(t)}),e.sort(ci)}const li=47,ki=li*4;class Ca{constructor(){this._features={}}isUsed(e){return e in this._features}setUsed(e,t=!0){t===!1?delete this._features[e]:this._features[e]=!0}reset(){this._features={}}}class Da extends Q{constructor(){super(new Float32Array(4),1,1),this.format=O,this.type=U,this.wrapS=_e,this.wrapT=_e,this.minFilter=k,this.magFilter=k,this.generateMipmaps=!1,this.features=new Ca}updateFrom(e,t){function i(p,x,d=-1){if(x in p&&p[x]){const g=ei(p[x]);return u[g]}else return d}function a(p,x,d){return x in p?p[x]:d}function n(p,x,d,g){const v=p[x]&&p[x].isTexture?p[x]:null;if(v){v.matrixAutoUpdate&&v.updateMatrix();const y=v.matrix.elements;let T=0;d[g+T++]=y[0],d[g+T++]=y[3],d[g+T++]=y[6],T++,d[g+T++]=y[1],d[g+T++]=y[4],d[g+T++]=y[7],T++}return 8}let r=0;const c=e.length*li,l=Math.ceil(Math.sqrt(c))||1,{image:h,features:f}=this,u={};for(let p=0,x=t.length;p<x;p++)u[ei(t[p])]=p;h.width!==l&&(this.dispose(),h.data=new Float32Array(l*l*4),h.width=l,h.height=l);const o=h.data;f.reset();for(let p=0,x=e.length;p<x;p++){const d=e[p];if(d.isFogVolumeMaterial){f.setUsed("FOG");for(let y=0;y<ki;y++)o[r+y]=0;o[r+0+0]=d.color.r,o[r+0+1]=d.color.g,o[r+0+2]=d.color.b,o[r+8+3]=a(d,"emissiveIntensity",0),o[r+12+0]=d.emissive.r,o[r+12+1]=d.emissive.g,o[r+12+2]=d.emissive.b,o[r+52+1]=d.density,o[r+52+3]=0,o[r+56+2]=4,r+=ki;continue}o[r++]=d.color.r,o[r++]=d.color.g,o[r++]=d.color.b,o[r++]=i(d,"map"),o[r++]=a(d,"metalness",0),o[r++]=i(d,"metalnessMap"),o[r++]=a(d,"roughness",0),o[r++]=i(d,"roughnessMap"),o[r++]=a(d,"ior",1.5),o[r++]=a(d,"transmission",0),o[r++]=i(d,"transmissionMap"),o[r++]=a(d,"emissiveIntensity",0),"emissive"in d?(o[r++]=d.emissive.r,o[r++]=d.emissive.g,o[r++]=d.emissive.b):(o[r++]=0,o[r++]=0,o[r++]=0),o[r++]=i(d,"emissiveMap"),o[r++]=i(d,"normalMap"),"normalScale"in d?(o[r++]=d.normalScale.x,o[r++]=d.normalScale.y):(o[r++]=1,o[r++]=1),o[r++]=a(d,"clearcoat",0),o[r++]=i(d,"clearcoatMap"),o[r++]=a(d,"clearcoatRoughness",0),o[r++]=i(d,"clearcoatRoughnessMap"),o[r++]=i(d,"clearcoatNormalMap"),"clearcoatNormalScale"in d?(o[r++]=d.clearcoatNormalScale.x,o[r++]=d.clearcoatNormalScale.y):(o[r++]=1,o[r++]=1),r++,o[r++]=a(d,"sheen",0),"sheenColor"in d?(o[r++]=d.sheenColor.r,o[r++]=d.sheenColor.g,o[r++]=d.sheenColor.b):(o[r++]=0,o[r++]=0,o[r++]=0),o[r++]=i(d,"sheenColorMap"),o[r++]=a(d,"sheenRoughness",0),o[r++]=i(d,"sheenRoughnessMap"),o[r++]=i(d,"iridescenceMap"),o[r++]=i(d,"iridescenceThicknessMap"),o[r++]=a(d,"iridescence",0),o[r++]=a(d,"iridescenceIOR",1.3);const g=a(d,"iridescenceThicknessRange",[100,400]);o[r++]=g[0],o[r++]=g[1],"specularColor"in d?(o[r++]=d.specularColor.r,o[r++]=d.specularColor.g,o[r++]=d.specularColor.b):(o[r++]=1,o[r++]=1,o[r++]=1),o[r++]=i(d,"specularColorMap"),o[r++]=a(d,"specularIntensity",1),o[r++]=i(d,"specularIntensityMap");const v=a(d,"thickness",0)===0&&a(d,"attenuationDistance",1/0)===1/0;if(o[r++]=Number(v),r++,"attenuationColor"in d?(o[r++]=d.attenuationColor.r,o[r++]=d.attenuationColor.g,o[r++]=d.attenuationColor.b):(o[r++]=1,o[r++]=1,o[r++]=1),o[r++]=a(d,"attenuationDistance",1/0),o[r++]=i(d,"alphaMap"),o[r++]=d.opacity,o[r++]=d.alphaTest,!v&&d.transmission>0)o[r++]=0;else switch(d.side){case Ht:o[r++]=1;break;case Gi:o[r++]=-1;break;case $i:o[r++]=0;break}o[r++]=Number(a(d,"matte",!1)),o[r++]=Number(a(d,"castShadow",!0)),o[r++]=Number(d.vertexColors)|Number(d.flatShading)<<1,o[r++]=Number(d.transparent),r+=n(d,"map",o,r),r+=n(d,"metalnessMap",o,r),r+=n(d,"roughnessMap",o,r),r+=n(d,"transmissionMap",o,r),r+=n(d,"emissiveMap",o,r),r+=n(d,"normalMap",o,r),r+=n(d,"clearcoatMap",o,r),r+=n(d,"clearcoatNormalMap",o,r),r+=n(d,"clearcoatRoughnessMap",o,r),r+=n(d,"sheenColorMap",o,r),r+=n(d,"sheenRoughnessMap",o,r),r+=n(d,"iridescenceMap",o,r),r+=n(d,"iridescenceThicknessMap",o,r),r+=n(d,"specularColorMap",o,r),r+=n(d,"specularIntensityMap",o,r),r+=n(d,"alphaMap",o,r)}const m=ni(o.buffer);return this.hash!==m?(this.hash=m,this.needsUpdate=!0,!0):!1}}const Ni=new ti;function Ba(s){return s?`${s.uuid}:${s.version}`:null}function Ea(s,e){for(const t in e)t in s&&(s[t]=e[t])}class Oi extends _r{constructor(e,t,i){const a={format:O,type:Wt,minFilter:oe,magFilter:oe,wrapS:we,wrapT:we,generateMipmaps:!1,...i};super(e,t,1,a),Ea(this.texture,a),this.texture.setTextures=(...r)=>{this.setTextures(...r)},this.hashes=[null];const n=new Se(new za);this.fsQuad=n}setTextures(e,t,i=this.width,a=this.height){const n=e.getRenderTarget(),r=e.toneMapping,c=e.getClearAlpha();e.getClearColor(Ni);const l=t.length||1;(i!==this.width||a!==this.height||this.depth!==l)&&(this.setSize(i,a,l),this.hashes=new Array(l).fill(null)),e.setClearColor(0,0),e.toneMapping=Ar;const h=this.fsQuad,f=this.hashes;let u=!1;for(let o=0,m=l;o<m;o++){const p=t[o],x=Ba(p);p&&(f[o]!==x||p.isWebGLRenderTarget)&&(p.matrixAutoUpdate=!1,p.matrix.identity(),h.material.map=p,e.setRenderTarget(this,o),h.render(e),p.updateMatrix(),p.matrixAutoUpdate=!0,f[o]=x,u=!0)}return h.material.map=null,e.setClearColor(Ni,c),e.setRenderTarget(n),e.toneMapping=r,u}dispose(){super.dispose(),this.fsQuad.dispose()}}class za extends Tt{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}}function ka(s,e=Math.random()){for(let t=s.length-1;t>0;t--){const i=Math.floor(e()*(t+1)),a=s[t];s[t]=s[i],s[i]=a}return s}class Na{constructor(e,t,i=Math.random){const a=e**t,n=new Uint16Array(a);let r=a;for(let c=0;c<a;c++)n[c]=c;this.samples=new Float32Array(t),this.strataCount=e,this.reset=function(){for(let c=0;c<a;c++)n[c]=c;r=0},this.reshuffle=function(){r=0},this.next=function(){const{samples:c}=this;r>=n.length&&(ka(n,i),this.reshuffle());let l=n[r++];for(let h=0;h<t;h++)c[h]=(l%e+i())/e,l=Math.floor(l/e);return c}}}class Oa{constructor(e,t,i=Math.random){let a=0;for(const l of t)a+=l;const n=new Float32Array(a),r=[];let c=0;for(const l of t){const h=new Na(e,l,i);h.samples=new Float32Array(n.buffer,c,h.samples.length),c+=h.samples.length*4,r.push(h)}this.samples=n,this.strataCount=e,this.next=function(){for(const l of r)l.next();return n},this.reshuffle=function(){for(const l of r)l.reshuffle()},this.reset=function(){for(const l of r)l.reset()}}}class Ua{constructor(e=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=e}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}}class La extends Q{constructor(e=1,t=1,i=8){super(new Float32Array(1),1,1,O,U),this.minFilter=k,this.magFilter=k,this.strata=i,this.sampler=null,this.generator=new Ua,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(e,t,i)}init(e=this.image.height,t=this.image.width,i=this.strata){const{image:a}=this;if(a.width===t&&a.height===e&&this.sampler!==null)return;const n=new Array(e*t).fill(4),r=new Oa(i,n,this.random);a.width=t,a.height=e,a.data=r.samples,this.sampler=r,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}}function Ha(s,e=Math.random){for(let t=s.length-1;t>0;t--){const i=~~((e()-1e-6)*t),a=s[t];s[t]=s[i],s[i]=a}}function Wa(s,e){s.fill(0);for(let t=0;t<e;t++)s[t]=1}class Ui{constructor(e){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(e),this.setSigma(1.5)}findVoid(){const{score:e,binaryPattern:t}=this;let i=1/0,a=-1;for(let n=0,r=t.length;n<r;n++){if(t[n]!==0)continue;const c=e[n];c<i&&(i=c,a=n)}return a}findCluster(){const{score:e,binaryPattern:t}=this;let i=-1/0,a=-1;for(let n=0,r=t.length;n<r;n++){if(t[n]!==1)continue;const c=e[n];c>i&&(i=c,a=n)}return a}setSigma(e){if(e===this.sigma)return;const t=~~(Math.sqrt(20*e**2)+1),i=2*t+1,a=new Float32Array(i*i),n=e*e;for(let r=-t;r<=t;r++)for(let c=-t;c<=t;c++){const l=(t+c)*i+r+t,h=r*r+c*c;a[l]=Math.E**(-h/(2*n))}this.lookupTable=a,this.sigma=e,this.radius=t}resize(e){this.size!==e&&(this.size=e,this.score=new Float32Array(e*e),this.binaryPattern=new Uint8Array(e*e))}invert(){const{binaryPattern:e,score:t,size:i}=this;t.fill(0);for(let a=0,n=e.length;a<n;a++)if(e[a]===0){const r=~~(a/i),c=a-r*i;this.updateScore(c,r,1),e[a]=1}else e[a]=0}updateScore(e,t,i){const{size:a,score:n,lookupTable:r}=this,c=this.radius,l=2*c+1;for(let h=-c;h<=c;h++)for(let f=-c;f<=c;f++){const u=(c+f)*l+h+c,o=r[u];let m=e+h;m=m<0?a+m:m%a;let p=t+f;p=p<0?a+p:p%a;const x=p*a+m;n[x]+=i*o}}addPointIndex(e){this.binaryPattern[e]=1;const t=this.size,i=~~(e/t),a=e-i*t;this.updateScore(a,i,1),this.count++}removePointIndex(e){this.binaryPattern[e]=0;const t=this.size,i=~~(e/t),a=e-i*t;this.updateScore(a,i,-1),this.count--}copy(e){this.resize(e.size),this.score.set(e.score),this.binaryPattern.set(e.binaryPattern),this.setSigma(e.sigma),this.count=e.count}}class Va{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new Ui(1),this.savedSamples=new Ui(1)}generate(){const{samples:e,savedSamples:t,sigma:i,majorityPointsRatio:a,size:n}=this;e.resize(n),e.setSigma(i);const r=Math.floor(n*n*a),c=e.binaryPattern;Wa(c,r),Ha(c,this.random);for(let u=0,o=c.length;u<o;u++)c[u]===1&&e.addPointIndex(u);for(;;){const u=e.findCluster();e.removePointIndex(u);const o=e.findVoid();if(u===o){e.addPointIndex(u);break}e.addPointIndex(o)}const l=new Uint32Array(n*n);t.copy(e);let h;for(h=e.count-1;h>=0;){const u=e.findCluster();e.removePointIndex(u),l[u]=h,h--}const f=n*n;for(h=t.count;h<f/2;){const u=t.findVoid();t.addPointIndex(u),l[u]=h,h++}for(t.invert();h<f;){const u=t.findCluster();t.removePointIndex(u),l[u]=h,h++}return{data:l,maxValue:f}}}function qa(s){return s>=3?4:s}function Ga(s){switch(s){case 1:return yt;case 2:return Yi;default:return O}}class $a extends Q{constructor(e=64,t=1){super(new Float32Array(4),1,1,O,U),this.minFilter=k,this.magFilter=k,this.size=e,this.channels=t,this.update()}update(){const e=this.channels,t=this.size,i=new Va;i.channels=e,i.size=t;const a=qa(e),n=Ga(a);(this.image.width!==t||n!==this.format)&&(this.image.width=t,this.image.height=t,this.image.data=new Float32Array(t**2*a),this.format=n,this.dispose());const r=this.image.data;for(let c=0,l=e;c<l;c++){const h=i.generate(),f=h.data,u=h.maxValue;for(let o=0,m=f.length;o<m;o++){const p=f[o]/u;r[o*a+c]=p}}this.needsUpdate=!0}}const ja=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,Ya=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,Xa=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`,Qa=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;
		mat3 alphaMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * uint( MATERIAL_PIXELS );

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );
		m.alphaMapTransform = m.alphaMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 30u );

		return m;

	}

`,Ka=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`,Za=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`,Ja=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`,en=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`,tn=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`,rn=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`,sn=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`,an=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`,ui=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`,Li=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`,nn=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`,on=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`,cn=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`,ln=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`,un=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`,fn=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`,hn=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * uint( MATERIAL_PIXELS );
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`,dn=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
					albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`,mn=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = sampleAperture( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`,pn=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`,gn=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
			albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`,vn=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`,xn=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;class yn extends et{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(e){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:li},uniforms:{resolution:{value:new ee},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new ma},cameraWorldMatrix:{value:new H},invProjectionMatrix:{value:new H},bvh:{value:new Os},attributesArray:{value:new Ma},materialIndexAttribute:{value:new or},materials:{value:new Da},textures:{value:new Oi().texture},lights:{value:new _a},iesProfiles:{value:new Oi(360,180,{type:J,wrapS:_e,wrapT:_e}).texture},environmentIntensity:{value:1},environmentRotation:{value:new H},envMapInfo:{value:new va},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new H},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new La},stratifiedOffsetTexture:{value:new $a(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${Hs}
				${Vs}
				${Ws}

				// uniform structs
				${ja}
				${Xa}
				${Ya}
				${Qa}
				${Ka}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${nn}

				#elif RANDOM_TYPE == 1 	// Sobol

					${Li}
					${hr}
					${ua}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${Li}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${an}
				${tn}
				${ui}
				${rn}
				${sn}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${en}
				${Za}
				${Ja}

				${hn}
				${ln}
				${fn}
				${un}
				${cn}
				${on}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${vn}
				${mn}
				${xn}
				${dn}
				${pn}
				${gn}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(e)}}function*bn(){const{_renderer:s,_fsQuad:e,_blendQuad:t,_primaryTarget:i,_blendTargets:a,_sobolTarget:n,_subframe:r,alpha:c,material:l}=this,h=new Le,f=new Le,u=t.material;let[o,m]=a;for(;;){c?(u.opacity=this._opacityFactor/(this.samples+1),l.blending=He,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=Qi);const[p,x,d,g]=r,v=i.width,y=i.height;l.resolution.set(v*d,y*g),l.sobolTexture=n.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;const T=this.tiles.x||1,b=this.tiles.y||1,w=T*b,S=Math.ceil(v*d),_=Math.ceil(y*g),A=Math.floor(p*v),I=Math.floor(x*y),R=Math.ceil(S/T),M=Math.ceil(_/b);for(let P=0;P<b;P++)for(let C=0;C<T;C++){const D=s.getRenderTarget(),E=s.autoClear,ie=s.getScissorTest();s.getScissor(h),s.getViewport(f);let ae=C,ue=P;if(!this.stableTiles){const _t=this._currentTile%(T*b);ae=_t%T,ue=~~(_t/T),this._currentTile=_t+1}const fi=b-ue-1;i.scissor.set(A+ae*R,I+fi*M,Math.min(R,S-ae*R),Math.min(M,_-fi*M)),i.viewport.set(A,I,S,_),s.setRenderTarget(i),s.setScissorTest(!0),s.autoClear=!1,e.render(s),s.setViewport(f),s.setScissor(h),s.setScissorTest(ie),s.setRenderTarget(D),s.autoClear=E,c&&(u.target1=o.texture,u.target2=i.texture,s.setRenderTarget(m),t.render(s),s.setRenderTarget(D)),this.samples+=1/w,C===T-1&&P===b-1&&(this.samples=Math.round(this.samples)),yield}[o,m]=[m,o]}}const Hi=new ti;class Wi{get material(){return this._fsQuad.material}set material(e){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),e.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=e}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(e){this._alpha!==e&&(e||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=e,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(e){this.camera=null,this.tiles=new ee(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new Le(0,0,1,1),this._opacityFactor=1,this._renderer=e,this._alpha=!1,this._fsQuad=new Se(new yn),this._blendQuad=new Se(new ca),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new ha().generate(e),this._primaryTarget=new Oe(1,1,{format:O,type:U,magFilter:k,minFilter:k}),this._blendTargets=[new Oe(1,1,{format:O,type:U,magFilter:k,minFilter:k}),new Oe(1,1,{format:O,type:U,magFilter:k,minFilter:k})],this._compileFunction=()=>{const t=this.compileMaterial(this._fsQuad._mesh);t.then(()=>{this._compilePromise===t&&(this._compilePromise=null)}),this._compilePromise=t},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(e){const{material:t}=this;t.cameraWorldMatrix.copy(e.matrixWorld),t.invProjectionMatrix.copy(e.projectionMatrixInverse),t.physicalCamera.updateFrom(e);let i=0;e.projectionMatrix.elements[15]>0&&(i=1),e.isEquirectCamera&&(i=2),t.setDefine("CAMERA_TYPE",i),this.camera=e}setSize(e,t){e=Math.ceil(e),t=Math.ceil(t),!(this._primaryTarget.width===e&&this._primaryTarget.height===t)&&(this._primaryTarget.setSize(e,t),this._blendTargets[0].setSize(e,t),this._blendTargets[1].setSize(e,t),this.reset())}getSize(e){e.x=this._primaryTarget.width,e.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:e,_primaryTarget:t,_blendTargets:i}=this,a=e.getRenderTarget(),n=e.getClearAlpha();e.getClearColor(Hi),e.setRenderTarget(t),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[0]),e.setClearColor(0,0),e.clearColor(),e.setRenderTarget(i[1]),e.setClearColor(0,0),e.clearColor(),e.setClearColor(Hi,n),e.setRenderTarget(a),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=bn.call(this)),this._task.next())}}class Tn extends Tt{get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}constructor(e){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(e)}}class wn extends Tt{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${ui}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}}class Vi{constructor(e){this._renderer=e,this._quad=new Se(new wn)}generate(e,t=null,i=null){if(!e.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");const a=e.images[0],n=this._renderer,r=this._quad;t===null&&(t=4*a.height),i===null&&(i=2*a.height);const c=new Oe(t,i,{type:U,colorSpace:a.colorSpace}),l=a.height,h=Math.log2(l)-2,f=1/l,u=1/(3*Math.max(Math.pow(2,h),112));r.material.defines.CUBEUV_MAX_MIP=`${h}.0`,r.material.defines.CUBEUV_TEXEL_WIDTH=u,r.material.defines.CUBEUV_TEXEL_HEIGHT=f,r.material.uniforms.envMap.value=e,r.material.uniforms.flipEnvMap.value=e.isRenderTargetTexture?1:-1,r.material.needsUpdate=!0;const o=n.getRenderTarget(),m=n.autoClear;n.autoClear=!0,n.setRenderTarget(c),r.render(n),n.setRenderTarget(o),n.autoClear=m;const p=new Uint16Array(t*i*4),x=new Float32Array(t*i*4);n.readRenderTargetPixels(c,0,0,t,i,x),c.dispose();for(let g=0,v=x.length;g<v;g++)p[g]=re.toHalfFloat(x[g]);const d=new Q(p,t,i,O,J);return d.minFilter=Mr,d.magFilter=oe,d.wrapS=we,d.wrapT=we,d.mapping=Ki,d.needsUpdate=!0,d}dispose(){this._quad.dispose()}}function Sn(s){return s.extensions.get("EXT_float_blend")}const Ee=new ee;class Pn{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(e){this._pathTracer.material.setDefine("FEATURE_MIS",e?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(e){this._pathTracer.material.transmissiveBounces=e}get bounces(){return this._pathTracer.material.bounces}set bounces(e){this._pathTracer.material.bounces=e}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(e){this._pathTracer.material.filterGlossyFactor=e}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(e){this._pathTracer.stableNoise=e}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(e){this._renderer=e,this._generator=new oi,this._pathTracer=new Wi(e),this._queueReset=!1,this._clock=new Ir,this._compilePromise=null,this._lowResPathTracer=new Wi(e),this._lowResPathTracer.tiles.set(1,1),this._quad=new Se(new Tn({map:null,transparent:!0,blending:He,premultipliedAlpha:e.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new ee(1024,1024),this.rasterizeSceneCallback=(t,i)=>{this._renderer.render(t,i)},this.renderToCanvasCallback=(t,i,a)=>{const n=i.autoClear;i.autoClear=!1,a.render(i),i.autoClear=n},this.setScene(new Rr,new Xi)}setBVHWorker(e){this._generator.setBVHWorker(e)}setScene(e,t,i={}){e.updateMatrixWorld(!0),t.updateMatrixWorld();const a=this._generator;if(a.setObjects(e),this._buildAsync)return a.generateAsync(i.onProgress).then(n=>this._updateFromResults(e,t,n));{const n=a.generate();return this._updateFromResults(e,t,n)}}setSceneAsync(...e){this._buildAsync=!0;const t=this.setScene(...e);return this._buildAsync=!1,t}setCamera(e){this.camera=e,this.updateCamera()}updateCamera(){const e=this.camera;e.updateMatrixWorld(),this._pathTracer.setCamera(e),this._lowResPathTracer.setCamera(e),this.reset()}updateMaterials(){const e=this._pathTracer.material,t=this._renderer,i=this._materials,a=this.textureSize,n=Pa(i);e.textures.setTextures(t,n,a.x,a.y),e.materials.updateFrom(i,n),this.reset()}updateLights(){const e=this.scene,t=this._renderer,i=this._pathTracer.material,a=Fa(e),n=Ra(a);i.lights.updateFrom(a,n),i.iesProfiles.setTextures(t,n),this.reset()}updateEnvironment(){const e=this.scene,t=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),t.backgroundBlur=e.backgroundBlurriness,t.backgroundIntensity=e.backgroundIntensity??1,t.backgroundRotation.makeRotationFromEuler(e.backgroundRotation).invert(),e.background===null)t.backgroundMap=null,t.backgroundAlpha=0;else if(e.background.isColor){this._colorBackground=this._colorBackground||new zr(16);const i=this._colorBackground;i.topColor.equals(e.background)||(i.topColor.set(e.background),i.bottomColor.set(e.background),i.update()),t.backgroundMap=i,t.backgroundAlpha=1}else if(e.background.isCubeTexture){if(e.background!==this._previousBackground){const i=new Vi(this._renderer).generate(e.background);this._internalBackground=i,t.backgroundMap=i,t.backgroundAlpha=1}}else t.backgroundMap=e.background,t.backgroundAlpha=1;if(t.environmentIntensity=e.environment!==null?e.environmentIntensity??1:0,t.environmentRotation.makeRotationFromEuler(e.environmentRotation).invert(),this._previousEnvironment!==e.environment&&e.environment!==null)if(e.environment.isCubeTexture){const i=new Vi(this._renderer).generate(e.environment);t.envMapInfo.updateFrom(i)}else t.envMapInfo.updateFrom(e.environment);this._previousEnvironment=e.environment,this._previousBackground=e.background,this.reset()}_updateFromResults(e,t,i){const{materials:a,geometry:n,bvh:r,bvhChanged:c,needsMaterialIndexUpdate:l}=i;this._materials=a;const f=this._pathTracer.material;return c&&(f.bvh.updateFrom(r),f.attributesArray.updateFrom(n.attributes.normal,n.attributes.tangent,n.attributes.uv,n.attributes.color)),l&&f.materialIndexAttribute.updateFrom(n.attributes.materialIndex),this._previousScene=e,this.scene=e,this.camera=t,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),i}renderSample(){const e=this._lowResPathTracer,t=this._pathTracer,i=this._renderer,a=this._clock,n=this._quad;this._updateScale(),this._queueReset&&(t.reset(),e.reset(),this._queueReset=!1,n.material.opacity=0,a.start());const r=a.getDelta()*1e3,c=a.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=c&&!this.isCompiling&&t.update(),t.alpha=t.material.backgroundAlpha!==1||!Sn(i),e.alpha=t.alpha,this.renderToCanvas){const l=this._renderer,h=this.minSamples;if(c>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?n.material.opacity=Math.min(n.material.opacity+r/this.fadeDuration,1):n.material.opacity=1),!this.enablePathTracing||this.samples<h||n.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){e.samples<1&&(e.material=t.material,e.update());const f=n.material.opacity;n.material.opacity=1-n.material.opacity,n.material.map=e.target.texture,n.render(l),n.material.opacity=f}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&n.material.opacity>0&&(n.material.opacity<1&&(n.material.blending=this.dynamicLowRes?Pr:Qi),n.material.map=t.target.texture,this.renderToCanvasCallback(t.target,l,n),n.material.blending=He)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(Ee);const e=Math.floor(this.renderScale*Ee.x),t=Math.floor(this.renderScale*Ee.y);if(this._pathTracer.getSize(Ee),Ee.x!==e||Ee.y!==t){const i=this.lowResScale;this._pathTracer.setSize(e,t),this._lowResPathTracer.setSize(Math.floor(e*i),Math.floor(t*i))}}}}class Fn extends Fr{constructor(){super(),this.isEquirectCamera=!0}}class Cn extends Cr{constructor(...e){super(...e),this.iesMap=null,this.radius=0}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this.radius=e.radius,this}}class Dn extends Dr{constructor(...e){super(...e),this.isCircular=!1}copy(e,t){return super.copy(e,t),this.isCircular=e.isCircular,this}}class _n extends et{constructor(){super({uniforms:{envMap:{value:null},blur:{value:0}},vertexShader:`

				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}

			`,fragmentShader:`

				#include <common>
				#include <cube_uv_reflection_fragment>

				${ui}

				uniform sampler2D envMap;
				uniform float blur;
				varying vec2 vUv;
				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					gl_FragColor = textureCubeUV( envMap, rayDirection, blur );

				}

			`})}}class Bn{constructor(e){this.renderer=e,this.pmremGenerator=new Br(e),this.copyQuad=new Se(new _n),this.renderTarget=new Oe(1,1,{type:U,format:O})}dispose(){this.pmremGenerator.dispose(),this.copyQuad.dispose(),this.renderTarget.dispose()}generate(e,t){const{pmremGenerator:i,renderTarget:a,copyQuad:n,renderer:r}=this,c=i.fromEquirectangular(e),{width:l,height:h}=e.image;a.setSize(l,h),n.material.envMap=c.texture,n.material.blur=t;const f=r.getRenderTarget(),u=r.autoClear;r.setRenderTarget(a),r.autoClear=!0,n.render(r),r.setRenderTarget(f),r.autoClear=u;const o=new Uint16Array(l*h*4),m=new Float32Array(l*h*4);r.readRenderTargetPixels(a,0,0,l,h,m);for(let x=0,d=m.length;x<d;x++)o[x]=re.toHalfFloat(m[x]);const p=new Q(o,l,h,O,J);return p.minFilter=e.minFilter,p.magFilter=e.magFilter,p.wrapS=e.wrapS,p.wrapT=e.wrapT,p.mapping=Ki,p.needsUpdate=!0,c.dispose(),p}}class En extends et{constructor(e){super({blending:He,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:5},threshold:{value:.03},kSigma:{value:1},map:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}

			`,fragmentShader:`

				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				//  Copyright (c) 2018-2019 Michele Morrone
				//  All rights reserved.
				//
				//  https://michelemorrone.eu - https://BrutPitt.com
				//
				//  me@michelemorrone.eu - brutpitt@gmail.com
				//  twitter: @BrutPitt - github: BrutPitt
				//
				//  https://github.com/BrutPitt/glslSmartDeNoise/
				//
				//  This software is distributed under the terms of the BSD 2-Clause license
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

				uniform sampler2D map;

				uniform float sigma;
				uniform float threshold;
				uniform float kSigma;
				uniform float opacity;

				varying vec2 vUv;

				#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439
				#define INV_PI 0.31830988618379067153776752674503

				// Parameters:
				//	 sampler2D tex	 - sampler image / texture
				//	 vec2 uv		   - actual fragment coord
				//	 float sigma  >  0 - sigma Standard Deviation
				//	 float kSigma >= 0 - sigma coefficient
				//		 kSigma * sigma  -->  radius of the circular kernel
				//	 float threshold   - edge sharpening threshold
				vec4 smartDeNoise( sampler2D tex, vec2 uv, float sigma, float kSigma, float threshold ) {

					float radius = round( kSigma * sigma );
					float radQ = radius * radius;

					float invSigmaQx2 = 0.5 / ( sigma * sigma );
					float invSigmaQx2PI = INV_PI * invSigmaQx2;

					float invThresholdSqx2 = 0.5 / ( threshold * threshold );
					float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;

					vec4 centrPx = texture2D( tex, uv );
					centrPx.rgb *= centrPx.a;

					float zBuff = 0.0;
					vec4 aBuff = vec4( 0.0 );
					vec2 size = vec2( textureSize( tex, 0 ) );

					vec2 d;
					for ( d.x = - radius; d.x <= radius; d.x ++ ) {

						float pt = sqrt( radQ - d.x * d.x );

						for ( d.y = - pt; d.y <= pt; d.y ++ ) {

							float blurFactor = exp( - dot( d, d ) * invSigmaQx2 ) * invSigmaQx2PI;

							vec4 walkPx = texture2D( tex, uv + d / size );
							walkPx.rgb *= walkPx.a;

							vec4 dC = walkPx - centrPx;
							float deltaFactor = exp( - dot( dC.rgba, dC.rgba ) * invThresholdSqx2 ) * invThresholdSqrt2PI * blurFactor;

							zBuff += deltaFactor;
							aBuff += deltaFactor * walkPx;

						}

					}

					return aBuff / zBuff;

				}

				void main() {

					gl_FragColor = smartDeNoise( map, vec2( vUv.x, vUv.y ), sigma, kSigma, threshold );
					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <premultiplied_alpha_fragment>

					gl_FragColor.a *= opacity;

				}

			`}),this.setValues(e)}}class zn extends Er{constructor(e){super(e),this.isFogVolumeMaterial=!0,this.density=.015,this.emissive=new ti,this.emissiveIntensity=0,this.opacity=.15,this.transparent=!0,this.roughness=1,this.metalness=0,this.setValues(e)}}export{Bn as BlurredEnvMapGenerator,En as DenoiseMaterial,In as DynamicPathTracingSceneGenerator,Fn as EquirectCamera,zn as FogVolumeMaterial,zr as GradientEquirectTexture,Wi as PathTracingRenderer,oi as PathTracingSceneGenerator,Rn as PathTracingSceneWorker,da as PhysicalCamera,yn as PhysicalPathTracingMaterial,Cn as PhysicalSpotLight,On as ProceduralEquirectTexture,Dn as ShapedAreaLight,Pn as WebGLPathTracer};
