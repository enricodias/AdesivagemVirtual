var browser;
var cookies = false;

var sepColor = 'FFF';
var inBoxColor = 'FFF';
var outBoxColor = 'FFF';

var ads_Blocks = new Array();
var ads = false;
var photo = false;

if (checkBrowser('msie')) if (document.getElementById('photo').innerHTML) photo = true;
else if (document.getElementById('photo')) photo = true;

if (photo == true) {

	var imageCrop = document.getElementById('imageCrop');
	var wrap = document.getElementById('wrap');
	var photo = document.getElementById('photo');
	
	if (document.getElementById('bounce'))
	document.getElementById('bounce').innerHTML = '<iframe border="0" frameborder="0" scrolling="no" width="1" height="1" src="http://www.adesivagemvirtual.com.br/marina/bounce/"/>';

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
function getPageMargin (size) { return (size / 100) - 5; }
function remAds(id) { hide(id); document.getElementById(id).innerHTML = ''; }
function setAds(id, code, color) {

	remAds(id);
	show(id);
	document.getElementById(id).innerHTML = '<iframe border="0" frameborder="0" scrolling="no" width="100%" height="100%" src="http://www.age4fun.com.br/ads.php?code=' + code + '&color=' + color + '"/>';
	
}

function getCelAds(type) {
	
	if (!cookies) return 0;
	
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
	var ads_paul = ReadCookie('ads_paul');
	var ads_fidelidade = ReadCookie('ads_fidelidade');
	var ads_webcam = ReadCookie('ads_webcam');
	var ads_flash = ReadCookie('ads_flash');
	var ads_ghost = ReadCookie('ads_ghost');
	
	if (type == 'square') {
		
		if (!ads_balada) { SetCookie('ads_balada', 1, 1); return 32; }
		if (!ads_teste) { SetCookie('ads_teste', 1, 1); return 33; }
		if (!ads_webcam) { SetCookie('ads_webcam', 1, 1); return 69; }
		if (!ads_ghost) { SetCookie('ads_ghost', 1, 1); return 74; }
		if (!ads_flash) { SetCookie('ads_flash', 1, 1); return 77; }
		if (!ads_fidelidade) { SetCookie('ads_fidelidade', 1, 1); return 80; }
		if (!ads_paul) { SetCookie('ads_paul', 1, 1); return 84; }
		
		if (sexo != 'f') {
			
			if (!ads_mulheres) { SetCookie('ads_mulheres', 1, 1); return 20; }
			if (!ads_poker) { SetCookie('ads_poker', 1, 1); return 21; }
			if (!guitar) { SetCookie('guitar', 1, 1); return 23; }
			if (!ads_24h) { SetCookie('ads_24h', 1, 1); return 24; }
			
		}
		
		if (!ads_capital) { SetCookie('ads_capital', 1, 1); return 34; }
		if (!ads_zeze) { SetCookie('ads_zeze', 1, 1); return 35; }
		if (!ads_michael) { SetCookie('ads_michael', 1, 1); return 36; }
		
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
		
		if (!ads_webcam) { SetCookie('ads_webcam', 1, 1); return 68; }
		if (!ads_ghost) { SetCookie('ads_ghost', 1, 1); return 76; }
		if (!ads_flash) { SetCookie('ads_flash', 1, 1); return 78; }
		if (!ads_fidelidade) { SetCookie('ads_fidelidade', 1, 1); return 81; }
		if (!ads_paul) { SetCookie('ads_paul', 1, 1); return 87; }
		if (!ads_teste) { SetCookie('ads_teste', 1, 1); return 47; }
		
		if (sexo != 'f') {
			
			if (!ads_poker) { SetCookie('ads_poker', 1, 1); return 37; }
			if (!ads_mulheres) { SetCookie('ads_mulheres', 1, 1); return 38; }
			if (!guitar) { SetCookie('guitar', 1, 1); return 39; }
			if (!ads_24h) { SetCookie('ads_24h', 1, 1); return 40; }
			
		}
		
		if (!ads_capital) { SetCookie('ads_capital', 1, 1); return 48; }
		if (!ads_zeze) { SetCookie('ads_zeze', 1, 1); return 49; }
		if (!ads_michael) { SetCookie('ads_michael', 1, 1); return 50; }
		
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
		if (!ads_webcam) { SetCookie('ads_webcam', 1, 1); return 67; }
		if (!ads_ghost) { SetCookie('ads_ghost', 1, 1); return 75; }
		if (!ads_flash) { SetCookie('ads_flash', 1, 1); return 79; }
		if (!ads_fidelidade) { SetCookie('ads_fidelidade', 1, 1); return 82; }
		if (!ads_paul) { SetCookie('ads_paul', 1, 1); return 86; }
		
		if (sexo != 'f') {
			
			if (!ads_poker) { SetCookie('ads_poker', 1, 1); return 51; }
			if (!ads_24h) { SetCookie('ads_24h', 1, 1); return 52; }
			if (!ads_mulheres) { SetCookie('ads_mulheres', 1, 1); return 53; }
			if (!guitar) { SetCookie('guitar', 1, 1); return 54; }
			
		}
		
		if (!ads_capital) { SetCookie('ads_capital', 1, 1); return 63; }
		if (!ads_zeze) { SetCookie('ads_zeze', 1, 1); return 64; }
		if (!ads_michael) { SetCookie('ads_michael', 1, 1); return 65; }
		
		if (sexo != 'm') {
			
			if (!dr_love) { SetCookie('dr_love', 1, 1); return 55; }
			if (!ads_smiles_1) { SetCookie('ads_smiles_1', 1, 1); return 56; }
			if (!ads_crepusculo_1) { SetCookie('ads_crepusculo_1', 1, 1); return 57; }
			if (!guitar) { SetCookie('guitar_f', 1, 1); return 58; }
			if (!ads_smiles_1) { SetCookie('ads_smiles_2', 1, 1); return 61; }
			if (!ads_crepusculo_2) { SetCookie('ads_crepusculo_2', 1, 1); return 59; }
			
		}
		
	}
	
	SetCookie('ads_poker', 1, -1);
	SetCookie('ads_mulheres', 1, -1);
	SetCookie('ads_crepusculo_1', 1, -1);
	SetCookie('ads_crepusculo_2', 1, -1);
	SetCookie('ads_smiles_1', 1, -1);
	SetCookie('ads_smiles_2', 1, -1);
	SetCookie('ads_balada', 1, -1);
	SetCookie('guitar', 1, -1);
	SetCookie('dr_love', 1, -1);
	SetCookie('ads_madona', 1, -1);
	SetCookie('ads_24h', 1, -1);
	SetCookie('ads_capital', 1, -1);
	SetCookie('ads_zeze', 1, -1);
	SetCookie('ads_teste', 1, -1);
	SetCookie('ads_michael', 1, -1);
	SetCookie('ads_webcam', 1, -1);
	SetCookie('ads_ghost', 1, -1);
	SetCookie('ads_flash', 1, -1); 
	SetCookie('ads_fidelidade', 1, -1);
	SetCookie('ads_paul', 1, -1);
	
	return getCelAds(type);
	
}

function adsRefresh() {
	
	if (ads_Blocks[0] == 1) setAds('adsTop', getCelAds('towerB'), sepColor);
	if (ads_Blocks[1] == 1) setAds('adsMiddle', getCelAds('towerB'), inBoxColor);
	if (ads_Blocks[2] == 1) setAds('adsTower', getCelAds('tower'), outBoxColor);
	if (ads_Blocks[3] == 1) setAds('ads1Sq', getCelAds('square'), outBoxColor);
	if (ads_Blocks[4] == 1) setAds('ads2Sq', getCelAds('square'), outBoxColor);
	if (ads_Blocks[5] == 1) setAds('ads1Tw', getCelAds('towerB'), outBoxColor);
	if (ads_Blocks[6] == 1) setAds('ads2Tw', getCelAds('towerB'), outBoxColor);
	if (ads_Blocks[7] == 1) setAds('adsTwB', getCelAds('towerB'), inBoxColor);
	if (ads_Blocks[8] == 1) setAds('adsTower', getCelAds('tower'), inBoxColor);
	
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
	
	var imgMargin = (freeArea - imgArea) / 2 - 1;
	wrap.style.padding = '0 0 0 ' + Math.ceil(imgMargin) + 'px';
	
	if (imgArea != photo['width']) {
		
		photo['width'] = imgArea;
		show('photo');
		
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
	
	return (windowWidth - getPageMargin(windowWidth) - 270);

}

function changeStick(id) { 
	
	var pos = 0;
	var preview = document.getElementById('preview_stick');
	selectedStick = id;
	
	if (id > 11) pos = (id - 1) * 81;
	else pos = (id - 1) * 68;
	
	if (id <= 10) {
		
		preview.style.top = '-48px';
		preview.style.height = '48px';
		preview.style.top = '-48px';
		preview.style.marginBottom = '-50px';
		
	} else {
		
		preview.style.top = '-190px';
		preview.style.height = '190px';
		preview.style.marginBottom = '-192px';
		
	}
	
	preview.style.backgroundPosition = '-60px -' + pos + 'px';
	document.getElementsByName('stick')[0].value = id;
	
}

function adapt(windowWidth) {
	
	var max2 = 1400;
	var max1 = 1200;
	var min1 = 970;
	var min2 = 800;
	var min3 = 600;
	var min4 = 250;
	
	if (!imageCrop) {
		
		if (windowWidth > 730) {
			
			setAds('adsTower', getCelAds('tower'), outBoxColor);
			document.getElementById('inner_content').style.width = getUtilArea() + 45 + 'px';
			ads_Blocks[2] = 1;
			
		} else {
			
			remAds('adsTower');
			document.getElementById('inner_content').style.width = '100%';
			ads_Blocks[2] = 0;
			
		}
		
		if (windowWidth > 990) {
			
			setAds('adsTwB', getCelAds('towerB'), inBoxColor);
			ads_Blocks[8] = 1;
			
		} else { 
			
			remAds('adsTwB');
			ads_Blocks[8] = 0;
			
		}
		
	} else {
		
		remAds('adsTower');
		ads_Blocks[2] = 0;
		
		if (windowWidth > 730) {
		
			setAds('adsTop', getCelAds('towerB'), sepColor);
			ads_Blocks[0] = 1;
			
		} else {
		
			remAds('adsTop');
			ads_Blocks[0] = 0;
			
		}
		
		if (windowWidth > 990) {
			
			setAds('adsTwB', getCelAds('towerB'), inBoxColor);
			ads_Blocks[8] = 1;
			
		} else { 
			
			remAds('adsTwB');
			ads_Blocks[8] = 0;
			
		}
		
	}
	
	if (windowWidth < min1) {
		
		hide('logoLeft');
		hide('ads_footer');
		
	} else {
		
		if (windowWidth < max2) {
			
			remAds('ads1Tw');
			ads_Blocks[5] = 0;
			remAds('ads2Tw');
			ads_Blocks[6] = 0;
			
			setAds('ads2Sq', getCelAds('square'), outBoxColor);
			ads_Blocks[4] = 1;
			
			if (windowWidth > max1) {
				
				setAds('ads1Sq', getCelAds('square'), outBoxColor);
				ads_Blocks[3] = 1;
				
			}
			
		} else {
			
			remAds('ads1Sq');
			ads_Blocks[3] = 0;
			remAds('ads2Sq');
			ads_Blocks[4] = 0;
			
			setAds('ads1Tw', getCelAds('tower'), outBoxColor);
			ads_Blocks[5] = 1;
			setAds('ads2Tw', getCelAds('tower'), outBoxColor);
			ads_Blocks[6] = 1;
			
		}
		
		show('logoLeft');
		show('ads_footer');
		
	}
	
	if (browser != 'Opera' || browser != 'msie' || windowWidth < min2) hide('footer_flag');
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

window.onerror = handleError;
window.onresize = function onResize() { adapt(getW()); }
window.setInterval('adsRefresh();', 60000);