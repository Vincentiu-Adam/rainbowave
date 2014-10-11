V.style.position='fixed';
V.style.top = 0;
V.style.left = 0;
V.width = W = innerWidth;
V.height = H = innerHeight;

z=80;
t=l=q=e=1,o=-1;
n=.01745;
//px=ob();
ff=[function(q){return Math.cos(4*q)},function(q){return sm(4*q)-Math.cos(q)},function(q){return q;}];

function u() 
{
	if (o<0) o=1, m=0,f=ff[0],px=e?ob():genT(1), e=!e;

	m=++t>40;
	for(i=(W*H/z|0)-1;i--;)
	{
		x=px[i];
		if (!x) continue;
		if (m&&x.t==1&&x.l<x.d&&o!=6) x.y=eioq(x.l,x.iy,x.py-x.iy,x.d), x.l+=.16;
		if (x.t==1&&x.l>x.d) x.l=0,x.t=0, x.d=60+.1*x.x-.05*x.y,x.ix=x.x, x.iy=x.y;
		if (!x.t) ++x.o;
		if (x.o>x.d) q=x.l*n, ro=f(q), x.x=x.ix+k*ro*Math.cos(q), x.y=x.iy+(k+s)*ro*Math.sin(q), x.l-=j*v*.16;
		if (j<0&&s>60) x.ix=x.x, x.iy=x.y, x.t=2, x.l=0, x.d=.1*x.x+.1*x.y,x.o=0;
		if (x.t>1) ++x.o;
	}
	
	if (o<4&&t%500==0) o=0;
	if (j>0&&s>60) s=-5,v=5,j=-j,f=ff[j?0:1];
	if (j<0&&s>60) f=ff[2], v=50, j=-j,k=70,s=0,o=5;
	if (!o&&t%20==0) s+=3,v+=1;
	if (o>4&&t%820==0) o=6; 
	if (o>5&&t%3e2==0) o=-1;
}
 
function eioq(t, b, c, d) 
{
	t /= d/2;if (t < 1) return c*.5*t*t + b;
	t--;return -c*.5 * (t*(t-2) - 1) + b;
};

function randomColor()
{
	return '#'+['f00','0f0','00f'][Math.random()*3|0]
}

function ob()
{
	c=[];
	for(i=W*H;i-=z;){ 
	j=i%W;k=i/W|0;l=i/z|0;
	c.push({x:j,y:(20+k)*z,c:randomColor(),s:z,t:1,ix:j,iy:(20+k)*z,d:10+.2*(l-1),px:j,py:k*z,l:0,o:0})};
	j=1;s=-5;v=5;k=30;
	return c;
}

function genT(yy)
{
	var txt=[0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,
		 0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,
		 0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,
		 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		 0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,
		 0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,
		 0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0];c=[];
	for(i=139;i--;)
		if(txt[i]) c.push({x:(i%20)*z,y:(20+yy)*z,c:randomColor(),s:z,t:1,ix:(i%20)*z,iy:(20+yy)*z,d:10+.2*yy,px:(i%20)*z,py:(yy+i/20|0)*z,l:0,o:0});
	j=1;s=-5;v=5;k=30;
	return c;
}

function r()
{
	C.fillStyle='rgba(0,0,0,.1)';
	C.fillRect(0,0,W,H);
	for(i=(W*H/z|0)-1;i--;)
	{
		x=px[i];
		if (!x) continue;
		if (o!=6) C.fillStyle=x.c, C.fillRect(x.x,x.y,x.s,x.s);
	}
}

function rn() {u();r();requestAnimationFrame(rn);} rn()
//(function rn(t) {u();r();requestAnimationFrame(rn);})()