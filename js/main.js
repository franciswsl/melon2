
// 点击切换1
function contentTab(id) {
	if(id=='group1'){
		document.getElementById('group1').style.display='block';
		document.getElementById('group2').style.display='none';
		document.getElementById('group3').style.display='none';
		document.getElementById('group4').style.display='none';
		document.getElementById('group5').style.display='none';
		document.getElementById('tab1').className = 'checked';
		document.getElementById('tab2').className = '';
		document.getElementById('tab3').className = '';
		document.getElementById('tab4').className = '';
		document.getElementById('tab5').className = '';
	}
	else if(id=='group2'){
		document.getElementById('group1').style.display='none';
		document.getElementById('group2').style.display='block';
		document.getElementById('group3').style.display='none';
		document.getElementById('group4').style.display='none';
		document.getElementById('group5').style.display='none';
		document.getElementById('tab1').className = '';
		document.getElementById('tab2').className = 'checked';
		document.getElementById('tab3').className = '';
		document.getElementById('tab4').className = '';
		document.getElementById('tab5').className = '';
	}
	else if(id=='group3'){
		document.getElementById('group1').style.display='none';
		document.getElementById('group2').style.display='none';
		document.getElementById('group3').style.display='block';
		document.getElementById('group4').style.display='none';
		document.getElementById('group5').style.display='none';
		document.getElementById('tab1').className = '';
		document.getElementById('tab2').className = '';
		document.getElementById('tab3').className = 'checked';
		document.getElementById('tab4').className = '';
		document.getElementById('tab5').className = '';
	}
	else if(id=='group4'){
		document.getElementById('group1').style.display='none';
		document.getElementById('group2').style.display='none';
		document.getElementById('group3').style.display='none';
		document.getElementById('group4').style.display='block';
		document.getElementById('group5').style.display='none';
		document.getElementById('tab1').className = '';
		document.getElementById('tab2').className = '';
		document.getElementById('tab3').className = '';
		document.getElementById('tab4').className = 'checked';
		document.getElementById('tab5').className = '';
	}
	else{
		document.getElementById('group1').style.display='none';
		document.getElementById('group2').style.display='none';
		document.getElementById('group3').style.display='none';
		document.getElementById('group4').style.display='none';
		document.getElementById('group5').style.display='block';
		document.getElementById('tab1').className = '';
		document.getElementById('tab2').className = '';
		document.getElementById('tab3').className = '';
		document.getElementById('tab4').className = '';
		document.getElementById('tab5').className = 'checked';
	}
}

// 点击切换2
function contentNav(id) {
	if(id=='cart1'){
		document.getElementById('cart1').style.display='block';
		document.getElementById('cart2').style.display='none';
		document.getElementById('cart3').style.display='none';
		document.getElementById('cart4').style.display='none';
		document.getElementById('nav1').className = 'checked';
		document.getElementById('nav2').className = '';
		document.getElementById('nav3').className = '';
		document.getElementById('nav4').className = '';
	}
	else if(id=='cart2'){
		document.getElementById('cart1').style.display='none';
		document.getElementById('cart2').style.display='block';
		document.getElementById('cart3').style.display='none';
		document.getElementById('cart4').style.display='none';
		document.getElementById('nav1').className = '';
		document.getElementById('nav2').className = 'checked';
		document.getElementById('nav3').className = '';
		document.getElementById('nav4').className = '';
	}
	else if(id=='cart3'){
		document.getElementById('cart1').style.display='none';
		document.getElementById('cart2').style.display='none';
		document.getElementById('cart3').style.display='block';
		document.getElementById('cart4').style.display='none';
		document.getElementById('nav1').className = '';
		document.getElementById('nav2').className = '';
		document.getElementById('nav3').className = 'checked';
		document.getElementById('nav4').className = '';
	}
	else{
		document.getElementById('cart1').style.display='none';
		document.getElementById('cart2').style.display='none';
		document.getElementById('cart3').style.display='none';
		document.getElementById('cart4').style.display='block';
		document.getElementById('nav1').className = '';
		document.getElementById('nav2').className = '';
		document.getElementById('nav3').className = '';
		document.getElementById('nav4').className = 'checked';
	}
}

	function chose(){
	var oImg1=document.getElementById('prev');
	var nImg1=document.getElementById('prev2');
	var oImg2=document.getElementById('next');
	var nImg2=document.getElementById('next2');
	oImg1.onclick=function(){
		oImg1.style.display='none';
		nImg1.style.display='block';
		oImg2.style.display='block';
		nImg2.style.display='none';
	}
	oImg2.onclick=function(){
		oImg2.style.display='none';
		nImg2.style.display='block';
		oImg1.style.display='block';
		nImg1.style.display='none';
	}
}
chose();