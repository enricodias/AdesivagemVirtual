var browser;;
var cookies = false;
var ads_default;
var ads_defaultS;
var ads_defaultT;
var ads_defaultB;

var sepColor = '7E0909';
var inBoxColor = 'D01919';
var outBoxColor = 'a91212';

var ads_uolStatus = new Array();
var ads_Blocks = new Array();
var photo = false;

if (checkBrowser('msie'))
if (document.getElementById('photo').innerHTML) photo = true;

if (document.getElementById('photo')) photo = true;

if (photo == true) {

	var imageCrop = document.getElementById('imageCrop');
	var wrap = document.getElementById('wrap');
	var photo = document.getElementById('photo');
	
	if (document.getElementById('bounce'))
	document.getElementById('bounce').innerHTML = '<iframe border="0" frameborder="0" scrolling="no" width="1" height="1" src="http://www.adesivagemvirtual.com.br/dilma/bounce/"/>';

} else {
	
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-18275365-1']);
	_gaq.push(['_trackPageview']);

	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	
}

function SetCookie(cookieName, cookieValue, nDays) {
	
	var today = new Date();
	var expire = new Date();
	if (nDays == null || nDays == 0) nDays=1;
	
	expire.setTime(today.getTime() + 3600000 * 24 * nDays);
	document.cookie = cookieName + '=' + escape(cookieValue) + ';expires=' + expire.toGMTString();
	
}

function ReadCookie(cookieName) {
	
	var theCookie = document.cookie;
	
	var ind = document.cookie.indexOf(cookieName);
	if (ind == -1 || cookieName == '') return false; 
	
	var ind1 = theCookie.indexOf(';',ind);
	if (ind1 == -1) ind1 = theCookie.length; 
	
	return unescape(theCookie.substring(ind + cookieName.length+1, ind1));
	
}

function handleError() { return true; }
function checkBrowser(string) { return  navigator.userAgent.toLowerCase().indexOf(string) + 1; }
function checkBox(id) { document.getElementById(id).checked = true; }
function show(id) { document.getElementById(id).style.display = 'block'; }
function hide(id) { document.getElementById(id).style.display = 'none'; }
function makeUpload() { hide('selectFile'); show('loading'); }
function getPageMargin (size) { return (size / 100) * 5; }
function remAds(id) { hide(id); document.getElementById(id).innerHTML = ''; }
function setAds(id, code, color) {

	remAds(id);
	show(id);
	document.getElementById(id).innerHTML = '<iframe border="0" frameborder="0" scrolling="no" width="100%" height="100%" src="http://www.age4fun.com.br/ads.php?code=' + code + '&color=' + color + '"/>';
	//document.getElementById(id).innerHTML = code;
	
}

function getUolAds (type) {
	
	var sexo = false;
	var rand = 2;
	
	if (cookies) sexo = ReadCookie(sexo);
	
	if (type == 'square') {
		
		if (Math.floor(Math.random() * rand) == 1) return ads_defaultS;
		
		if (ads_uolStatus[0] == 0) {
			
			ads_uolStatus[0] = 1;
			if (sexo == 'f') return 5;
			if (sexo == 'm') return 6;
			return 7;
		
		}
		
		if (ads_uolStatus[1] == 0) { ads_uolStatus[1] = 1; return 8; }
		if (ads_uolStatus[2] == 0) { ads_uolStatus[2] = 1; return 9; }
		
		return ads_defaultS;
		
	}
	
	if (type == 'tower') {
		
		if (Math.floor(Math.random() * rand) == 1) return ads_defaultT;
		
		if (ads_uolStatus[0] == 0) {
			
			ads_uolStatus[0] = 1;
			if (sexo == 'f') return 10;
			if (sexo == 'm') return 11;
			return 12;
		
		}
		
		if (ads_uolStatus[1] == 0) { ads_uolStatus[1] = 1; return 13; }
		if (ads_uolStatus[2] == 0) { ads_uolStatus[2] = 1; return 14; }
		
		return ads_defaultT;
		
	}
	
	if (type == 'towerB') {
		
		if (Math.floor(Math.random() * rand) == 1) return ads_defaultB;
		
		if (ads_uolStatus[0] == 0) {
			
			ads_uolStatus[0] = 1;
			if (sexo == 'f') return 15;
			if (sexo == 'm') return 16;
			return 17;
		
		}
		
		if (ads_uolStatus[1] == 0) { ads_uolStatus[1] = 1; return 18; }
		if (ads_uolStatus[2] == 0) { ads_uolStatus[2] = 1; return 19; }
		
		return ads_defaultB;
		
	}
	
	return '';
	
}

function getCelAds (type) {
	
	if (!cookies) return getUolAds(type);
	
	var sexo = ReadCookie('sexo');
	var ads_poker = ReadCookie('ads_poker');
	var ads_mulheres = ReadCookie('ads_mulheres');
	var ads_crepusculo_1 = ReadCookie('ads_crepusculo_1');
	var ads_crepusculo_2 = ReadCookie('ads_crepusculo_2');
	var ads_smiles_1 = ReadCookie('ads_smiles_1');
	var ads_smiles_2 = ReadCookie('ads_smiles_2');
	var ads_balada = ReadCookie('ads_balada');
	var guitar = ReadCookie('guitar');
	var dr_love = ReadCookie('dr_love');
	var ads_madona = ReadCookie('ads_madona');
	var ads_24h = ReadCookie('ads_24h');
	var ads_capital = ReadCookie('ads_capital');
	var ads_zeze = ReadCookie('ads_zeze');
	var ads_teste = ReadCookie('ads_teste');
	var ads_michael = ReadCookie('ads_michael');
	
	if (type == 'square') {
		
		if (!ads_balada) { SetCookie('ads_balada', 1, 1); return 32; }
		if (!ads_teste) { SetCookie('ads_teste', 1, 1); return 33; }
		if (!ads_capital) { SetCookie('ads_capital', 1, 1); return 34; }
		if (!ads_zeze) { SetCookie('ads_zeze', 1, 1); return 35; }
		if (!ads_michael) { SetCookie('ads_michael', 1, 1); return 36; }
		
		if (sexo != 'f') {
			
			if (!ads_mulheres) { SetCookie('ads_mulheres', 1, 1); return 20; }
			if (!ads_poker) { SetCookie('ads_poker', 1, 1); return 21; }
			if (!guitar) { SetCookie('guitar', 1, 1); return 23; }
			if (!ads_24h) { SetCookie('ads_24h', 1, 1); return 24; }
			
		}
		
		if (sexo != 'm') {
			
			if (!ads_crepusculo_2) { SetCookie('ads_crepusculo_2', 1, 1); return 26; }
			if (!ads_madona) { SetCookie('ads_madona', 1, 1); return 25; }
			if (!ads_smiles_1) { SetCookie('ads_smiles_1', 1, 1); return 29; }
			if (!dr_love) { SetCookie('dr_love', 1, 1); return 27; }
			if (!guitar) { SetCookie('guitar', 1, 1); return 28; }
			if (!ads_smiles_2) { SetCookie('ads_smiles_2', 1, 1); return 31; }
			if (!ads_crepusculo_1) { SetCookie('ads_crepusculo_1', 1, 1); return 30; }
			
		}
		
	}
	
	if (type == 'tower') {
		
		if (!ads_teste) { SetCookie('ads_teste', 1, 1); return 47; }
		if (!ads_capital) { SetCookie('ads_capital', 1, 1); return 48; }
		if (!ads_zeze) { SetCookie('ads_zeze', 1, 1); return 49; }
		if (!ads_michael) { SetCookie('ads_michael', 1, 1); return 50; }
		
		if (sexo != 'f') {
			
			if (!ads_poker) { SetCookie('ads_poker', 1, 1); return 37; }
			if (!ads_mulheres) { SetCookie('ads_mulheres', 1, 1); return 38; }
			if (!guitar) { SetCookie('guitar', 1, 1); return 39; }
			if (!ads_24h) { SetCookie('ads_24h', 1, 1); return 40; }
			
		}
		
		if (sexo != 'm') {
			
			if (!ads_smiles_2) { SetCookie('ads_smiles_2', 1, 1); return 42; }
			if (!ads_crepusculo_2) { SetCookie('ads_crepusculo_2', 1, 1); return 43; }
			if (!ads_smiles_1) { SetCookie('ads_smiles_1', 1, 1); return 44; }
			if (!dr_love) { SetCookie('dr_love', 1, 1); return 45; }
			if (!ads_crepusculo_1) { SetCookie('ads_crepusculo_1', 1, 1); return 41; }
			if (!guitar) { SetCookie('guitar', 1, 1); return 46; }
			
		}
		
	}
	
	if (type == 'towerB') {
		
		if (!ads_balada) { SetCookie('ads_balada', 1, 1); return 60; }
		if (!ads_teste) { SetCookie('ads_teste', 1, 1); return 62; }
		if (!ads_capital) { SetCookie('ads_capital', 1, 1); return 63; }
		if (!ads_zeze) { SetCookie('ads_zeze', 1, 1); return 64; }
		if (!ads_michael) { SetCookie('ads_michael', 1, 1); return 65; }
		
		if (sexo != 'f') {
			
			if (!ads_poker) { SetCookie('ads_poker', 1, 1); return 51; }
			if (!ads_24h) { SetCookie('ads_24h', 1, 1); return 52; }
			if (!ads_mulheres) { SetCookie('ads_mulheres', 1, 1); return 53; }
			if (!guitar) { SetCookie('guitar', 1, 1); return 54; }
			
		}
		
		if (sexo != 'm') {
			
			if (!dr_love) { SetCookie('dr_love', 1, 1); return 55; }
			if (!ads_smiles_1) { SetCookie('ads_smiles_1', 1, 1); return 56; }
			if (!ads_crepusculo_1) { SetCookie('ads_crepusculo_1', 1, 1); return 57; }
			if (!guitar) { SetCookie('guitar_f', 1, 1); return 58; }
			if (!ads_smiles_1) { SetCookie('ads_smiles_2', 1, 1); return 61; }
			if (!ads_crepusculo_2) { SetCookie('ads_crepusculo_2', 1, 1); return 59; }
			
		}
		
	}
	
	return getUolAds(type);
	
}

function adsRefresh() {
	
	if (ads_Blocks[0] == 1) setAds('adsTop', ads_default, sepBoxColor);
	if (ads_Blocks[1] == 1) setAds('adsMiddle', ads_default, inBoxColor);
	if (ads_Blocks[2] == 1) setAds('adsTower', ads_defaultT, outBoxColor);
	if (ads_Blocks[3] == 1) setAds('ads1Sq', ads_defaultS, outBoxColor);
	if (ads_Blocks[4] == 1) setAds('ads2Sq', getCelAds('square'), outBoxColor);
	if (ads_Blocks[5] == 1) setAds('ads1Tw', ads_defaultT, outBoxColor);
	if (ads_Blocks[6] == 1) setAds('ads2Tw', getCelAds('tower'), outBoxColor);
	if (ads_Blocks[7] == 1) setAds('adsTwB', getCelAds('towerB'), inBoxColor);
	if (ads_Blocks[8] == 1) setAds('adsTower', ads_defaultIn, inBoxColor);
	if (ads_Blocks[9] == 1) setAds('adsIn', ads_defaultIn, inBoxColor);
	
	var i;
	var anchors = document.getElementsByTagName('a');
	for (i=0; i<anchors.length; i++) if (anchors[i].getAttribute('href')) anchors[i].target = '_blank';
	
}

function getW() {
	
	if (typeof(window.innerWidth) == 'number') return window.innerWidth;
	if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) return document.documentElement.clientWidth + 21;
	if (document.body && (document.body.clientWidth || document.body.clientHeight)) return document.body.clientWidth + 21;
	
	return 0;

}

function setImgWidth() {

	var windowWidth = getW();
	if (windowWidth <= 0) return false;
	
	var imgArea;
	var freeArea = getUtilArea();
	
	if (freeArea > 600) imgArea = 600;
	else imgArea = freeArea;
	
	if (imgArea > imgInitialWidth) imgArea = imgInitialWidth;
	
	if (imgArea != photo['width']) {
		
		photo['width'] = imgArea;
		show('photo');
		
		var imgMargin = (freeArea - imgArea) / 2 - 1;
		wrap.style.padding = '0 0 0 ' + Math.ceil(imgMargin) + 'px';
		
		MarqueeTool.getMarquee = '';
		
		MarqueeTool = new Marquee('photo', {
			
			coords: {x1: 20, y1: 15, width: 190, height: 190},
			preview: 'preview', 
			previewWidth: 190,
			previewHeight: 190,
			allowHotKeys: false,
			opacity: 0.35
			
		});
		
	}
	
	return true;
	
}

function getUtilArea() {

	var windowWidth = getW();
	if (windowWidth <= 0) return false;
	
	return (windowWidth - getPageMargin(windowWidth) - 260);

}

function changeStick(id) { 
	
	//hide('stick_'+selectedStick);
	selectedStick = id;
	//show('stick_'+selectedStick);
	var pos = (id - 1) * 68;
	document.getElementById('preview_stick').style.backgroundPosition = '-25px -' + pos + 'px';
	document.getElementsByName('stick')[0].value = id;
	
}

function adapt(windowWidth) {
	
	var max2 = 1400;
	var max1 = 1200;
	var min1 = 1024;
	var min2 = 800;
	var min3 = 600;
	var min4 = 250;
	
	if (windowWidth < min1) {
		
		hide('logoLeft');
		hide('ads_footer');
		
		if (!imageCrop) {
			
			remAds('adsTower');
			document.getElementById('inner_content').style.width = '100%';
			ads_Blocks[2] = 0;
			setAds('adsIn', ads_defaultIn, inBoxColor);
			ads_Blocks[9] = 1;
		
		} else {
			
			remAds('adsTwB');
			ads_Blocks[7] = 0;
			setAds('adsTower', ads_defaultIn, inBoxColor);
			ads_Blocks[8] = 1;
			
		}
		
		setAds('adsTop', ads_default, sepColor);
		ads_Blocks[0] = 1;
		
	} else {
		
		remAds('adsTop');
		ads_Blocks[0] = 0;
		
		if (!imageCrop) {
			
			setAds('adsIn', ads_defaultIn, inBoxColor);
			ads_Blocks[9] = 1;
			setAds('adsTower', getCelAds('tower'), outBoxColor);
			document.getElementById('inner_content').style.width = getUtilArea() + 45 + 'px';
			ads_Blocks[2] = 1;
		
		} else {
			
			setAds('adsTwB', getCelAds('towerB'), inBoxColor);
			ads_Blocks[7] = 1;
			
		}
		
		if (windowWidth < max2) {
			
			remAds('ads1Tw');
			ads_Blocks[5] = 0;
			remAds('ads2Tw');
			ads_Blocks[6] = 0;
			
			setAds('ads2Sq', getCelAds('square'), outBoxColor);
			ads_Blocks[4] = 1;
			
			if (windowWidth > max1) {
				
				setAds('ads1Sq', ads_defaultS, outBoxColor);
				ads_Blocks[3] = 1;
				
			}
			
		} else {
			
			remAds('ads1Sq');
			ads_Blocks[3] = 0;
			remAds('ads2Sq');
			ads_Blocks[4] = 0;
			
			setAds('ads1Tw', ads_defaultT, outBoxColor);
			ads_Blocks[5] = 1;
			setAds('ads2Tw', getCelAds('tower'), outBoxColor);
			ads_Blocks[6] = 1;
			
		}
		
		show('logoLeft');
		show('ads_footer');
		
	}
	
	if (browser != 'Opera')
	if (windowWidth < min2) hide('footer_flag');
	else show('footer_flag');
	
	if (windowWidth < min3) hide('pre_footer');
	else show('pre_footer');
	
	if (windowWidth < min4) hide('logo');
	else show('logo');
	
	if (imageCrop) {
		
		changeStick(selectedStick);
		imageCrop.style.width = getUtilArea() + 'px';
		setImgWidth();
		
	} else {
		
		if (!windowWidth || windowWidth <= 0) windowWidth = 1;
		document.getElementsByName('windowWidth')[0].value = windowWidth;
		
	}
	
}

window.onload = function init() {
	
	var anchors;
	var i = 0;
	
	ads_default = 1;
	ads_defaultS = 2;
	ads_defaultT = 3;
	ads_defaultB = 4;
	ads_defaultIn = 66;
	
	ads_uolStatus[0] = 0; // namoro
	ads_uolStatus[1] = 0; // emprego
	ads_uolStatus[2] = 0; // shopping
	
	ads_Blocks[0] = 0; // 468 top
	ads_Blocks[1] = 0; // 468 middle
	ads_Blocks[2] = 0; // tower right
	ads_Blocks[3] = 0; // 1º square
	ads_Blocks[4] = 0; // 2º square
	ads_Blocks[5] = 0; // 1º tower
	ads_Blocks[6] = 0; // 2º tower
	ads_Blocks[7] = 0; // 7º tower
	ads_Blocks[8] = 0; // InBox tower
	ads_Blocks[9] = 0; // InBox default
	
	SetCookie('cookieTest', 1, 1);
	cookies = ReadCookie('cookieTest');
	
	if (checkBrowser('opera')) browser = 'Opera';
	else if (checkBrowser('firefox')) browser = 'Firefox';
	else if (checkBrowser('msie')) browser = 'msie';
	
	adapt(getW());
	
	anchors = document.getElementsByTagName('a');
	for (i=0; i<anchors.length; i++) if (anchors[i].getAttribute('href') && anchors[i].getAttribute('rel') == 'external') anchors[i].target = '_blank';
	
}

//window.onerror = handleError;
window.onresize = function onResize() { adapt(getW()); }
window.setInterval('adsRefresh();', 60000);
