var browser;
var cookies = false;

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18275365-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

if (document.getElementById('photo')) {
	
	var imageCrop = document.getElementById('imageCrop');
	var wrap = document.getElementById('wrap');
	var photo = document.getElementById('photo');
	photo['width'] = imgInitialWidth;
	show('photo');
	
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
function show(id) { document.getElementById(id).style.display = 'block'; }
function hide(id) { document.getElementById(id).style.display = 'none'; }
function getPageMargin (size) { return (size / 100) * 5; }

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
		//wrap.style.padding = '0 0 0 ' + Math.ceil(imgMargin) + 'px';
		
		MarqueeTool.getMarquee = '';
		
		MarqueeTool = new Marquee('photo', {
			
			coords: {x1: 20, y1: 15, width: 150, height: 150},
			preview: 'preview', 
			previewWidth: 150,
			previewHeight: 150,
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
	
	var min1 = 1024;
	var min2 = 800;
	var min3 = 600;
	var min4 = 250;
	
	if (windowWidth < min1) {
		
		hide('logoLeft);
		
		if (!imageCrop) {
			
			document.getElementById('inner_content').style.width = '100%';
		
		}
		
	} else show('logoLeft');
	
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
	
	if (checkBrowser('opera')) browser = 'Opera';
	else if (checkBrowser('firefox')) browser = 'Firefox';
	else if (checkBrowser('msie')) browser = 'msie';
	
	adapt(getW());
	
	anchors = document.getElementsByTagName('a');
	for (i=0; i<anchors.length; i++) if (anchors[i].getAttribute('href') && anchors[i].getAttribute('rel') == 'external') anchors[i].target = '_blank';
	
}

window.onerror = handleError;
window.onresize = function onResize() { adapt(getW()); }
