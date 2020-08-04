var keywords = '"KEYWORD","IMPRESSIONS"<br>';
var kws = document.querySelectorAll(".b-word-statistics__table");
kwlist = [].slice.call(kws);
var tmp = kwlist[0].querySelectorAll('.b-word-statistics__tr:not(:first-child)');
tmp2 = [].slice.call(tmp);
tmp2.forEach(function(f) {
	var kws = f.querySelectorAll("td");
	var kwtxt = kws[0].innerText;
	var kwnum = kws[1].innerText;
	keywords += '"' + kwtxt + '","' + kwnum + '"<br>';
});
keywords += '"----------","----------"<br>';
var tmp = kwlist[1].querySelectorAll('.b-word-statistics__tr:not(:first-child)');
tmp2 = [].slice.call(tmp);
tmp2.forEach(function(f) {
	var kws = f.querySelectorAll("td");
	var kwtxt = kws[0].innerText;
	var kwnum = kws[1].innerText;
	keywords += '"' + kwtxt + '","' + kwnum + '"<br>';
});
yandexKW = window.open();
yandexKW.document.write("<html><head><title>Yandex Keywords</title></head><body>" + keywords + "</body></html>");
yandexKW.document.close();
