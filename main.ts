import{mkdirSync as K,readdirSync as J,readFileSync as F,writeFileSync as W}from'fs';
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env;
const T="$5e(*./3########-------)---)---#---#############DHHD$###########),##############((%(";
const B=[(a,b)=>a+b,(a,b)=>a-b,Math.imul,(a,b)=>b?a/b:NaN,(a,b)=>b?a%b:NaN,(a,b)=>b?(a>>>0)/(b>>>0):NaN,(a,b)=>b?(a>>>0)%(b>>>0):NaN,,(a,b)=>a&b,(a,b)=>a|b,(a,b)=>a^b,,(a,b)=>a<<(b&31),(a,b)=>a>>(b&31),(a,b)=>a>>>(b&31),,(a,b)=>a==b?1:0,(a,b)=>a<b?1:0,(a,b)=>a>>>0<b>>>0?1:0];
function R(p,q){
let A=Int32Array,D=new A(256),s=0,C=new A(64),c=0,M=new A(256),o=new Uint8Array(65536),l=0,i=0,x=0,t=0,n=p.length;
const d=e=>[o.slice(0,l),e];
for(;;){
if(t==1e6)return d(10);
if(x<0|x>=n)return d(9);
let b=p[x],v=T.charCodeAt(b)-36;
if(!(v>=0))return d(5);
let m=v>>4,u=v>>2&3,k=v&3;
if(x+m>=n)return d(9);
t++;
if(s<u)return d(2);
if(s-u+k>256)return d(3);
x+=m+1;
switch(b){
case 0:return d(0);
case 1:D[s++]=p[x-1]<<24>>24;break;
case 2:D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1],s++;break;
case 5:[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break;
case 6:D[s]=D[s-2],s++;break;
case 7:[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];break;
case 23:D[s-1]=-D[s-1];break;
case 27:D[s-1]=~D[s-1];break;
case 48:case 49:case 50:{
let r=(p[x-2]|p[x-1]<<8)<<16>>16;
if(b!=48&&((b==49)!=(D[--s]==0)))break;
x+=r;break;}
case 51:
if(c==64)return d(7);
C[c++]=x;x=p[x-2]|p[x-1]<<8;break;
case 52:
if(!c)return d(8);
x=C[--c];break;
case 64:{
let a=D[s-1];
if(a&~255)return d(6);
D[s-1]=M[a];break;}
case 65:{
let a=D[s-1],w=D[s-2];
if(a&~255)return d(6);
M[a]=w,s-=2;break;}
case 80:{
let g=D[s-1]+'';
if(l+g.length>65536)return d(11);
s--;o.set(Buffer.from(g),l),l+=g.length;break;}
case 81:
if(l>65535)return d(11);
o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return d(D[--s]&255);
default:{
let z=D[s-1],a=D[s-2],r=B[b-16](a,z);
if(r!=r)return d(4);
D[s-2]=r;s--;}
}}
}
for(const id of J(I).sort()){
let a=I+'/'+id,b=O+'/'+id,[r,e]=R(F(a+'/program.bin'),F(a+'/input.bin'));
K(b,{recursive:true});
W(b+'/stdout.bin',r);
W(b+'/exit.txt',''+e);
}
