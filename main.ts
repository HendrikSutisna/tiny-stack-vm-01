import{mkdirSync as K,readdirSync as J,readFileSync as F,writeFileSync as W}from'fs';
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env;
const T="$5e(*./3########-------)---)---#---#############DHHD$###########),##############((%(";
const u=a=>a>>>0,B=[(a,b)=>a+b,(a,b)=>a-b,Math.imul,(a,b)=>b?a/b:NaN,(a,b)=>b?a%b:NaN,(a,b)=>b?u(a)/u(b):NaN,(a,b)=>b?u(a)%u(b):NaN,(a,b)=>-b,(a,b)=>a&b,(a,b)=>a|b,(a,b)=>a^b,(a,b)=>~b,(a,b)=>a<<b,(a,b)=>a>>b,(a,b)=>a>>>b,,(a,b)=>a==b,(a,b)=>a<b,(a,b)=>u(a)<u(b)];
function R(p,q){
let A=Int32Array,D=new A(256),s=0,C=new A(64),c=0,M=new A(256),o=Buffer.alloc(1<<16),l=0,i=0,x=0,t=0,n=p.length;
const d=e=>[o.slice(0,l),e];
for(;;){
if(t++==1e6)return d(10);
if(x>>>0>=n)return d(9);
let b=p[x],v=T.charCodeAt(b)-36;
if(!(v>=0))return d(5);
let m=v>>4,k=v/4&3;
if(x+m>=n)return d(9);
if(s<k)return d(2);
if(s-k+v%4>256)return d(3);
x+=m+1;
switch(b){
case 0:return d(0);
case 1:D[s++]=p[x-1]<<24>>24;break;
case 2:D[s++]=p.readInt32LE(x-4);break;
case 3:s--;break;
case 4:D[s++]=D[s-2];break;
case 5:m=D[s-1],D[s-1]=D[s-2],D[s-2]=m;break;
case 6:D[s++]=D[s-3];break;
case 7:m=D[s-3],D[s-3]=D[s-2],D[s-2]=D[s-1],D[s-1]=m;break;
case 48:case 49:case 50:if(b>48&&(D[--s]==0)==(b>49))break;x+=p.readInt16LE(x-2);break;
case 51:if(c==64)return d(7);C[c++]=x,x=p[x-2]|p[x-1]<<8;break;
case 52:if(!c)return d(8);x=C[--c];break;
case 64:m=D[s-1];if(m&~255)return d(6);D[s-1]=M[m];break;
case 65:m=D[s-1];if(m&~255)return d(6);s-=2,M[m]=D[s];break;
case 80:m=D[s-1]+'';if(l+m.length>65536)return d(11);s--;l+=o.write(m,l);break;
case 81:if(l>>16)return d(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=q[i++]??-1;break;
case 83:return d(D[--s]&255);
default:m=B[b-16](D[s-2],D[s-1]);if(m!=m)return d(4);D[s-k]=m,s+=1-k;
}}
}
for(const d of J(I).sort()){
let a=I+'/'+d,b=O+'/'+d,[r,e]=R(F(a+'/program.bin'),F(a+'/input.bin'));
K(b,{recursive:true});
W(b+'/stdout.bin',r);
W(b+'/exit.txt',''+e);
}
