<?php

echo '<html><meta name="robots" content="noindex, nofollow"/><body style="margin: 0; padding: 0; background: #'.$_GET['color'].';"><center>';

$cm = $cm.'<script type="text/javascript" src="http://afiliados.cliquemidia.com/getbanner.php?ads=';
$ul = '<script type="text/javascript">';

switch ($_GET['code']) {
	
	case 1:
	default:
	echo $ul.'<!--descrColor="FFB300";titleColor="FFB300";urlColor="FFB300";borderColor="7E0909";bgColor="7E0909";altColor="7E0909";coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="2";numads="2";type="1";--></script><script type="text/javascript" src="http://adrequisitor-af.lp.uol.com.br/uolaf.js"></script>';
	break;
	case 2: echo $ul.'<!--descrColor="FFFFFF";titleColor="FFFFFF";urlColor="FFFFFF";borderColor="A91212";bgColor="A91212";altColor="A91212";coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="9";numads="4";type="1";--></script><script type="text/javascript" src="http://adrequisitor-af.lp.uol.com.br/uolaf.js"></script>';
	break;
	case 3: echo $ul.'<!--descrColor="FFFFFF";titleColor="FFFFFF";urlColor="FFFFFF";borderColor="A91212";bgColor="A91212";altColor="A91212";coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="6";numads="5";type="1";--></script><script type="text/javascript" src="http://adrequisitor-af.lp.uol.com.br/uolaf.js"></script>';
	break;
	case 4: echo $ul.'<!--descrColor="FFFFFF";titleColor="FFFFFF";urlColor="FFFFFF";borderColor="A91212";bgColor="A91212";altColor="A91212";coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="1";numads="4";type="1";--></script><script type="text/javascript" src="http://adrequisitor-af.lp.uol.com.br/uolaf.js"></script>';
	break;
	
	case 5: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="45";numads="1";type="9";idtShape="45";category="23";altColor="A91212";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 6: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="45";numads="1";type="9";idtShape="45";category="22";altColor="A91212";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 7: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="45";numads="1";type="9";idtShape="45";category="22,23";altColor="A91212";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 8: echo $ul."<!--xmlECParams='17|300|250|94088|26|9669|WORK_AREA_ADMI|vendedor|';jobViewColor='0x990000'; jobBorderColor='0x990000'; jobBackColor='0x990000'; jobTitleColor='0xFFFFFF'; jobDescriptionColor='0xFFFF33'; jobLocalColor='0xFFFFFF'; jobLegendColor='0x990000'; jobLegendTextColor='0xFFFFFF';--></script><script type='text/javascript' src='http://adrequisitor-af.uol.com.br/uolafec.js'></script>";
	break;
	case 9: echo $ul.'<!--descrColor="FFFFFF";titleColor="FFFFFF";urlColor="FFFFFF";borderColor="A91212";bgColor="A91212";altColor="A91212";category="2,1,8,4";coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="17";has_search="1";numads="4";type="2";--></script><div id="af-shopping-uol"><a href="http://shopping.uol.com.br"><span style="text-decoration:none;">An&uacute;ncios Shopping UOL</span></a></div><script type="text/javascript" src="http://adrequisitor-af.shopping.uol.com.br/uolaf.js"></script>';
	break;
	case 10: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="43";numads="1";type="9";idtShape="43";category="23";altColor="A91212";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 11: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="43";numads="1";type="9";idtShape="43";category="22";altColor="A91212";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 12: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="43";numads="1";type="9";idtShape="43";category="22,23";altColor="A91212";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 13: echo $ul."<!--xmlECParams='15|160|600|94088|26|9669|WORK_AREA_ADMI|vendedor|'; hasSearch='1';jobViewColor='0x990000'; jobBorderColor='0x990000'; jobBackColor='0x990000'; jobTitleColor='0xFFFFFF'; jobDescriptionColor='0xFFFF33'; jobLocalColor='0xFFFFFF'; jobLegendColor='0x990000';--></script><script type='text/javascript' src='http://adrequisitor-af.uol.com.br/uolafec.js'></script>";
	break;
	case 14: echo $ul.'<!--descrColor="FFFFFF";titleColor="FFFFFF";urlColor="FFFFFF";borderColor="A91212";bgColor="A91212";altColor="A91212";category="2,1,8,4";coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="15";has_search="1";numads="5";type="2";--></script><div id="af-shopping-uol"><a href="http://shopping.uol.com.br"><span style="text-decoration:none;">An&uacute;ncios Shopping UOL</span></a></div><script type="text/javascript" src="http://adrequisitor-af.shopping.uol.com.br/uolaf.js"></script>';
	break;
	case 15: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="40";numads="1";type="9";idtShape="40";category="23";altColor="D01919";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 16: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="40";numads="1";type="9";idtShape="40";category="22";altColor="D01919";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 17: echo $ul.'<!--coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="40";numads="1";type="9";idtShape="40";category="22,23";altColor="D01919";--></script><script type="text/javascript" src="http://adrequisitor-af.uol.com.br/uolafmi.js"></script>';
	break;
	case 18: echo $ul."<!--xmlECParams='12|728|90|94088|||WORK_AREA_ADMI|vendedor|';jobViewColor='0xFFFFFD'; jobBorderColor='0xD01919'; jobBackColor='0xD01919'; jobTitleColor='0xFFFFFF'; jobDescriptionColor='0xFFFFFF'; jobLocalColor='0xFFFFFF'; jobLegendColor='0xD01919'; jobLegendTextColor='0xFFFFFF';--></script><script type='text/javascript' src='http://adrequisitor-af.uol.com.br/uolafec.js'></script>";
	break;
	case 19: echo $ul.'<!--descrColor="FFFFFF";titleColor="FFFFFF";urlColor="FFFFFF";borderColor="D01919";bgColor="D01919";altColor="FFFFFD";category="4,2,8,1";coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="12";has_search="1";numads="4";type="2";--></script><div id="af-shopping-uol"><a href="http://shopping.uol.com.br"><span style="text-decoration:none;">An&uacute;ncios Shopping UOL</span></a></div><script type="text/javascript" src="http://adrequisitor-af.shopping.uol.com.br/uolaf.js"></script>';
	break;
	
	case 21: echo $cm.'MjU1OCMyMDEjYmlkIzExNDcjMTIyIzM5MDMzNCMzMDAjMjUwI2J0bl9zcG9rZXJfMzAweDI1MF9zd2Yuc3dm"></script>';
	break;
	case 20: echo $cm.'MjU1OCMxNzgjYmlkIzEwMTgjNDMyIzM5MDMzNCMzMDAjMjUwI3NleHktcmluZ2dpcmxzXzMwMHgyNTAuanBn"></script>';
	break;
	case 30: echo $cm.'MjU1OCMxOTIjYmlkIzEwOTUjMTIxIzM5MDMzNCMzMDAjMjUwI2J0bl9uZXctbW9vbl8zMDB4MjUwX3N3Zi5zd2Y"></script>';
	break;
	case 26: echo $cm.'MjU1OCMyMDYjYmlkIzExNzgjNDI4IzM5MDMzNCMzMDAjMjUwI2J0bl9qY3JlcHVzY3VsbzMwMHgyNTBfc3dmLnN3Zg"></script>';
	break;
	case 29: echo $cm.'MjU1OCMxNTEjYmlkIzg0MyMxMjAjMzkwMzM0IzMwMCMyNTAjYnRuX3N3ZWV0XzMwMHgyNTBfYl9zd2Yuc3dm"></script>';
	break;
	case 31: echo $cm.'MjU1OCMxNTEjYmlkIzg0NSMxMjAjMzkwMzM0IzMwMCMyNTAjYnRuX3N3ZWV0XzMwMHgyNTBfZF9zd2Yuc3dm"></script>';
	break;
	case 32: echo $cm.'MjU1OCMxNDcjYmlkIzgxNCM0MzIjMzkwMzM0IzMwMCMyNTAjYXphcmFjYW8tcXVhZHJvc18zMDB4MjUwLmdpZg"></script>';
	break;
	case 23: echo $cm.'MjU1OCMxMjUjYmlkIzcwNyM0ODgjMzkwMzM0IzMwMCMyNTAjZ3VpdGFySGVyb1dUXzMwMFgyNTAuZ2lm"></script>';
	break;
	case 28: echo $cm.'MjU1OCMxMzgjYmlkIzc0NCM0MzIjMzkwMzM0IzMwMCMyNTAjcm9ja3N0YXJfcm9xdWVpcmFfMzAweDI1MC5naWY"></script>';
	break;
	case 27: echo $cm.'MjU1OCMxODcjYmlkIzEwNjgjNzY1IzM5MDMzNCMzMDAjMjUwI2Jhbm5lcmxvdmVjYWxjdWxhdG9yLTMwMHgyNS5naWY"></script>';
	break;
	case 25: echo $cm.'MjU1OCMxNTkjYmlkIzg5NSMxMjEjMzkwMzM0IzMwMCMyNTAjYnRuX21hZG9ubmFfMzAweDI1MF9zd2Yuc3dm"></script>';
	break;
	case 24: echo $cm.'MjU1OCMxNDQjYmlkIzc5NiM0MzIjMzkwMzM0IzMwMCMyNTAjMjRocy1qYWNrLWJhdWVyXzMwMHgyNTAuanBn"></script>';
	break;
	case 34: echo $cm.'MjU1OCMxOTYjYmlkIzExMDUjMTIxIzM5MDMzNCMzMDAjMjUwI2J0bl9jYXBpdGFsXzMwMHgyNTBfc3dmLnN3Zg"></script>';
	break;
	case 33: echo $cm.'MjU1OCM1NCNiaWQjMzUyIzEzMiMzOTAzMzQjMzAwIzI1MCNGbHljZWxsX0JSX1BpZV8zMDB4MjUwYy5zd2Y"></script>';
	break;
	case 35: echo $cm.'MjU1OCMxOTkjYmlkIzExMTcjMTIxIzM5MDMzNCMzMDAjMjUwI2J0bl96ZXplXzMwMHgyNTBfc3dmLnN3Zg"></script>';
	break;
	case 36: echo $cm.'MjU1OCMxOTMjYmlkIzExMDEjMTIxIzM5MDMzNCMzMDAjMjUwI2J0bl9tal8zMDB4MjUwX3N3Zi5zd2Y"></script>';
	break;
	
	case 37: echo $cm.'MjU1OCMyMDEjYmlkIzExNTAjMTIyIzM5MDMzNCMxNjAjNjAwI2J0bl9zcG9rZXJfMTYweDYwMF9zd2Yuc3dm"></script>';
	break;
	case 38: echo $cm.'MjU1OCMxODgjYmlkIzEwNzYjNDMyIzM5MDMzNCMxNjAjNjAwI3NleHlfcGFuaXF1ZXRlc18xNjB4NjAwLmpwZw"></script>';
	break;
	case 41: echo $cm.'MjU1OCMxOTIjYmlkIzEwOTYjMTIxIzM5MDMzNCMxNjAjNjAwI2J0bl9uZXctbW9vbl8xNjB4NjAwX3N3Zi5zd2Y"></script>';
	break;
	case 43: echo $cm.'MjU1OCMyMDYjYmlkIzExNzkjNDI4IzM5MDMzNCMxNjAjNjAwI2J0bl9qY3JlcHVzY3VsbzE2MHg2MDBfc3dmLnN3Zg"></script>';
	break;
	case 44: echo $cm.'MjU1OCMxNTEjYmlkIzg0NyMxMjAjMzkwMzM0IzEyMCM2MDAjYnRuX3N3ZWV0XzEyMHg2MDBfYl9zd2Yuc3dm"></script>';
	break;
	case 42: echo $cm.'MjU1OCMxNTEjYmlkIzg1MCMxMjAjMzkwMzM0IzE2MCM2MDAjYnRuX3N3ZWV0XzE2MHg2MDBfc3dmLnN3Zg"></script>';
	break;
	case 39: echo $cm.'MjU1OCMxMjUjYmlkIzcwOSM0ODgjMzkwMzM0IzE2MCM2MDAjZ3VpdGFySGVyb1dUXzE2MFg2MDAuZ2lm"></script';
	break;
	case 46: echo $cm.'MjU1OCMxMzgjYmlkIzc0NiM0MzIjMzkwMzM0IzE2MCM2MDAjcm9ja3N0YXJfcm9xdWVpcmFfMTYweDYwMC5naWY"></script>';
	break;
	case 45: echo $cm.'MjU1OCMxODcjYmlkIzEwNzAjNzY1IzM5MDMzNCMxNjAjNjAwI2Jhbm5lcmxvdmVjYWxjdWxhdG9yLTE2MC0teC5naWY"></script>';
	break;
	case 40: echo $cm.'MjU1OCMxNDQjYmlkIzc5OCM0MzIjMzkwMzM0IzE2MCM2MDAjMjRocy1qYWNrLWJhdWVyXzE2MHg2MDAuanBn"></script>';
	break;
	case 48: echo $cm.'MjU1OCMxOTYjYmlkIzExMDYjMTIxIzM5MDMzNCMxMjAjNjAwI2J0bl9jYXBpdGFsXzEyMHg2MDBfc3dmLnN3Zg"></script>';
	break;
	case 47: echo $cm.'MjU1OCM1NCNiaWQjMzU0IzEzMiMzOTAzMzQjMTYwIzYwMCNGbHljZWxsX0JSX1BpZV8xNjB4NjAwYy5zd2Y"></script>';
	break;
	case 49: echo $cm.'MjU1OCMxOTkjYmlkIzExMTgjMTIxIzM5MDMzNCMxMjAjNjAwI2J0bl96ZXplXzEyMHg2MDBfc3dmLnN3Zg"></script>';
	break;
	case 50: echo $cm.'MjU1OCMxOTMjYmlkIzExMDIjMTIxIzM5MDMzNCMxNjAjNjAwI2J0bl9tal8xNjB4NjAwX3N3Zi5zd2Y"></script>';
	break;
	
	case 51: echo $cm.'MjU1OCMyMDEjYmlkIzExNDUjMTIyIzM5MDMzNCM3MjgjOTAjYnRuX3Nwb2tlcl83Mjh4OTBfc3dmLnN3Zg"></script>';
	break;
	case 53: echo $cm.'MjU1OCMxODgjYmlkIzEwNzIjNDMyIzM5MDMzNCM3MjgjOTAjc2V4eV9wYW5pcXVldGVzXzcyOHg5MC5qcGc"></script>';
	break;
	case 57: echo $cm.'MjU1OCMxOTIjYmlkIzEwOTQjMTIxIzM5MDMzNCM3MjgjOTAjYnRuX25ldy1tb29uXzcyOHg5MF9zd2Yuc3dm"></script>';
	break;
	case 59: echo $cm.'MjU1OCMyMDYjYmlkIzExNzYjNDI4IzM5MDMzNCM3MjgjOTAjYnRuX2pjcmVwdXNjdWxvNzI4eDkwX3N3Zi5zd2Y"></script>';
	break;
	case 56: echo $cm.'MjU1OCMxNTEjYmlkIzgzOSMxMjAjMzkwMzM0IzcyOCM5MCNidG5fc3dlZXRfNzI4eDkwX2Jfc3dmLnN3Zg"></script>';
	break;
	case 61: echo $cm.'MjU1OCMxNTEjYmlkIzgzOCMxMjAjMzkwMzM0IzcyOCM5MCNidG5fc3dlZXRfNzI4eDkwX3N3Zi5zd2Y"></script>';
	break;
	case 60: echo $cm.'MjU1OCMxNDcjYmlkIzgxMyM0MzIjMzkwMzM0IzcyOCM5MCNhemFyYWNhby1xdWFkcm9zXzcyOHg5MC5naWY"></script>';
	break;
	case 54: echo $cm.'MjU1OCMxMjUjYmlkIzcwNiM0ODgjMzkwMzM0IzcyOCM5MCNndWl0YXJIZXJvV1RfNzI4WDkwLmdpZg"></script>';
	break;
	case 58: echo $cm.'MjU1OCMxMzgjYmlkIzc0MyM0MzIjMzkwMzM0IzcyOCM5MCNyb2Nrc3Rhcl9yb3F1ZWlyYV83Mjh4OTAuZ2lm"></script>';
	break;
	case 55: echo $cm.'MjU1OCMxODcjYmlkIzEwNjUjNzY1IzM5MDMzNCM3MjgjOTAjYmFubmVybG92ZWNhbGN1bGF0b3IxLTcyOHg5LmdpZg"></script>';
	break;
	case 52: echo $cm.'MjU1OCMxNDQjYmlkIzc5NSM0MzIjMzkwMzM0IzcyOCM5MCMyNGhzLWphY2stYmF1ZXJfNzI4eDkwLmpwZw"></script>';
	break;
	case 63: echo $cm.'MjU1OCMxOTYjYmlkIzExMDQjMTIxIzM5MDMzNCM3MjgjOTAjYnRuX2NhcGl0YWxfNzI4eDkwX3N3Zi5zd2Y"></script>';
	break;
	case 62: echo $cm.'MjU1OCM1NCNiaWQjMzUxIzEzMiMzOTAzMzQjNzI4IzkwI0ZseWNlbGxfQlJfUGllXzcyOHg5MGMuc3dm"></script>';
	break;
	case 64: echo $cm.'MjU1OCMxOTkjYmlkIzExMTYjMTIxIzM5MDMzNCM3MjgjOTAjYnRuX3plemVfNzI4eDkwX3N3Zi5zd2Y"></script>';
	break;
	case 65: echo $cm.'MjU1OCMxOTMjYmlkIzExMDAjMTIxIzM5MDMzNCM3MjgjOTAjYnRuX21qXzcyOHg5MF9zd2Yuc3dm"></script>';
	break;
	
	case 66: echo  $ul.'<!--descrColor="FFFFFF";titleColor="FFFFFF";urlColor="FFFFFF";borderColor="A91212";bgColor="A91212";altColor="A91212";coddisplaysupplier="b7ff5a4304c74bba9ab766c6cb7f9656";formatId="2";numads="2";type="1";--></script><script type="text/javascript" src="http://adrequisitor-af.lp.uol.com.br/uolaf.js"></script>';
	break;

	case 67: echo $cm.'MjU1OCMxMjYjYmlkIzcyMyM0ODgjMzkwMzM0IzcyOCM5MCNidG5fTXlXZWJDYW1fNzI4eDkwX3N3Zi5zd2Y"></script>';
	break;
	case 68: echo $cm.'MjU1OCMxMjYjYmlkIzcyNiM0ODgjMzkwMzM0IzE2MCM2MDAjYnRuX015V2ViQ2FtXzE2MHg2MDBfc3dmLnN3Zg"></script>';
	break;
	case 69: echo $cm.'MjU1OCMxMjYjYmlkIzcyNCM0ODgjMzkwMzM0IzMwMCMyNTAjYnRuX015V2ViQ2FtXzMwMHgyNTBfc3dmLnN3Zg"></script>';
	break;
	
	// webcam 468
	case 70: echo $cm.'MjU1OCMxMjYjYmlkIzcyMiM0ODgjMzkwMzM0IzQ2OCM2MCNidG5fTXlXZWJDYW1fNDY4eDYwX3N3Zi5zd2Y"></script>';
	break;
	
	// balada 468
	case 71: echo $cm.'MjU1OCMxNDcjYmlkIzgxMiM0MzIjMzkwMzM0IzQ2OCM2MCNhemFyYWNhby1xdWFkcm9zXzQ2OHg2MC5naWY"></script>';
	break;
	
	// baixe musicas 468
	case 72: echo $cm.'MjU1OCMxNzMjYmlkIzk2NiM0MzIjMzkwMzM0IzQ2OCM2MCNhcnRpc3Rhcy1tdXNpY2FzXzQ2OHg2MC5qcGc"></script>';
	break;
	
	// mulheres 468
	case 73: echo $cm.'MjU1OCMxNzgjYmlkIzEwMTQjNDMyIzM5MDMzNCM0NjgjNjAjc2V4eS1yaW5nZ2lybHNfNDY4eDYwLmpwZw"></script>';
	break;
	
	case 74: echo $cm.'MjU1OCMxNjQjYmlkIzkwNiMxMjIjMzkwMzM0IzMwMCMyNTAjYnRuXzMwMHgyNTBfZ2hvc3RzZW5zb3Jfc3dmLnN3Zg"></script>';
	break;
	case 75: echo $cm.'MjU1OCMxNjQjYmlkIzkwNCMxMjIjMzkwMzM0IzcyOCM5MCNidG5fNzI4eDkwX2dob3N0c2Vuc29yX3N3Zi5zd2Y"></script>';
	break;
	case 76: echo $cm.'MjU1OCMxNjQjYmlkIzkwOSMxMjIjMzkwMzM0IzE2MCM2MDAjYnRuXzE2MHg2MDBfZ2hvc3RzZW5zb3Jfc3dmLnN3Zg"></script>';
	break;
	case 77: echo $cm.'MjU1OCMxNjUjYmlkIzkwMCMxMjIjMzkwMzM0IzMwMCMyNTAjYnRuXzMwMHgyNTBfZmxhc2hfc3dmLnN3Zg"></script>';
	break;
	case 78: echo $cm.'MjU1OCMxNjUjYmlkIzkwMyMxMjIjMzkwMzM0IzE2MCM2MDAjYnRuXzE2MHg2MDBfZmxhc2hfc3dmLnN3Zg"></script>';
	break;
	case 79: echo $cm.'MjU1OCMxNjUjYmlkIzg5OCMxMjIjMzkwMzM0IzcyOCM5MCNidG5fNzI4eDkwX2ZsYXNoX3N3Zi5zd2Y"></script>';
	break;
	case 80: echo $cm.'MjU1OCMyMTQjYmlkIzEyMDYjMTMwIzM5MDMzNCMzMDAjMjUwI2RldGV0aXZlXzMwMHgyNTAuZ2lm"></script>';
	break;
	case 81: echo $cm.'MjU1OCMyMTQjYmlkIzEyMDkjMTMwIzM5MDMzNCMxNjAjNjAwI2RldGV0aXZlXzE2MHg2MDAuZ2lm"></script>';
	break;
	case 82: echo $cm.'MjU1OCMyMTQjYmlkIzEyMDEjMTMwIzM5MDMzNCM3MjgjOTAjZGV0ZXRpdmVfNzI4eDkwX2dpZi5naWY"></script>';
	break;
	
	// fidelidade 468
	case 83: echo $cm.'MjU1OCMyMTQjYmlkIzEyMDIjMTMwIzM5MDMzNCM0NjgjNjAjZGV0ZXRpdmVfNDY4eDYwLmdpZg"></script>';
	break;
	
	case 84: echo $cm.'MjU1OCMyMTYjYmlkIzEyMTUjMTMwIzM5MDMzNCMzMDAjMjUwI3BvbHZvXzMwMHgyNTBfanBlZy5qcGc"></script>';
	break;
	
	// paul 468
	case 85: echo $cm.'MjU1OCMyMTYjYmlkIzEyMTMjMTMwIzM5MDMzNCM0NjgjNjAjcG9sdm9fNDY4eDYwX2pwZWcuanBn"></script>';
	break;
	
	case 86: echo $cm.'MjU1OCMyMTYjYmlkIzEyMTQjMTMwIzM5MDMzNCM3MjgjOTAjcG9sdm9fNzI4eDkwX2pwZWcuanBn"></script>';
	break;
	case 87: echo $cm.'MjU1OCMyMTYjYmlkIzEyMTgjMTMwIzM5MDMzNCMxNjAjNjAwI3BvbHZvXzE2MHg2MDBfanBlZy5qcGc"></script>';
	break;
	
}

echo $ul."var i = 0; anchors = document.getElementsByTagName('a');	for (i=0; i<anchors.length; i++) if (anchors[i].getAttribute('href')) anchors[i].target = '_blank';</script>";
echo '</center></body></html>';

?>