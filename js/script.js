var cnt=0;
var array_length;
var autopaly = true;
var autopalyInterval = 4000;

function show()
{
	cnt++;

	if (cnt==array_length) 
	{
		cnt = 0;
	}

	if (cnt < 0) 
	{
		cnt = array_length-1;
	}
	slider();

}

if (autopaly) 
{
	setInterval(show,autopalyInterval)
}

function slider(n)
{
	var imgname = document.getElementsByClassName('img_1');
	var dots=document.getElementsByClassName('dot');

	for (var i = 0; i < imgname.length; i++)
	{
		
		imgname[i].style.display ="none";
	}

	for (var i = 0; i < dots.length; i++) {
		
		dots[i].className = dots[i].className.replace(" active","");
	}

	array_length=imgname.length;

	if (n> array_length) 
	{
		cnt = 0;
	}

	if (n< 0) 
	{
		cnt = array_length-1;
	}


	imgname[cnt].style.display = "block"

	dots[cnt].className +=" active";
	
	for (var j=0; j<imgname.length;j++)
	{
			for (var k=cnt;k<3+cnt;k++)
			{
				imgname[k].style.display = "block"
			}
		
	}
	

	
}

function next()
{
	cnt++;

	if (cnt==array_length)
	{
		cnt=0;
	}

	
	slider();
}
function prev()
{
	cnt--;
	if (cnt<0)
	{
		cnt=array_length;
	}
	slider();
}
window.onload = function()
{
	slider();

}

function dot_1(n)
{
	slider(cnt=n);	

}

// ==============================================chech box===================================================================

function check()
{
	var x = document.getElementsByClassName('p_js');
	cnt=0;
	sum=0;

	for (var i = 0; i<x.length; i++) 
	{
		if (x[i].checked)
		{
			cnt++
			sum=sum + parseInt(x[i].value)
			
		}
		
		
	}

	document.getElementById("amount").value=sum;

	var tax=sum*12/100;

	document.getElementById('tax').value=tax

	var total=tax+sum;

	document.getElementById('total').value=total

	
		
}