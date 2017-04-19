function changeColour(newColour)
{
	document.body.bgColor = newColour;
} // end of function changeColour(newColour)
function openWindow()
{
   // filename, internal name, characteristics
   myWindow = window.open("superpower.html", "window1", "width=350, height=500, resizable=yes");
   myWindow.moveTo(350, 100);
} // end of function openWindow
function displayDate()
{
   var currentDate = new Date();
   alert("The current date (in default format) is \n" + currentDate + ".");
} // end of function displayDate()
function displayISODate()
{
   var currentDate = new Date();
   
   var month = currentDate.getMonth();
   month++; // because getMonth() returns a value from 0-11
   if (month < 10) month = "0" + month;
   
   var date = currentDate.getDate();
   if (date < 10) date = "0" + date;
   
   var formattedDate = currentDate.getFullYear() + "-" + month + "-" + date;
   alert("The current date (in ISO format) is \n" + formattedDate + ".");
} // end of function displayISODate()
function displayLocalDate()
{
   var currentDate = new Date().toLocaleString();
   alert("The current date (in local format) is \n" + currentDate + ".");
} // end of function displayLocalDate()
function writePage()
{
	var currentDate = new Date();
	document.open();
	document.writeln('<head>');
	document.writeln('	<link rel="stylesheet" href="\/common\/css\/01.css" type="text\/css" \/>');
	document.writeln('	<style type="text\/css">');
	document.writeln('		table {font-size: 9pt; line-height: 12pt; border-collapse: collapse; width: 100%;}');
	document.writeln('		th {font-size: 8pt; font-style: italic;}');
	document.writeln('		th.criteria {text-align: right; padding-right: 1em;}');
	document.writeln('		tr {border-top: 1px solid black; border-bottom: 1px solid black;}');
	document.writeln('		tr.top {background: rgb(144, 144, 144);}');
	document.writeln('		tr.bottom {background: rgb(216,216,216);}');
	document.writeln('		td.method {text-align: right; padding-right: 1em;}');
	document.writeln('		td.value {text-align: center;}');
	document.writeln('		td.note {text-align: left;}');
	document.writeln('		tr.bottom td.criteria {font-size: 8pt; font-style: italic;}');
	document.writeln('		tr.bottom td.marks {font-size: 8pt; font-weight: bold;}');
	document.writeln('	<\/style>');
	document.writeln('<head\/>');
	document.writeln('<body class="EC_background">');
	document.writeln('	<p class="returnHome"><a class="internal" href="\/">touque.ca<\/a> &gt; <a class="internal" href="\/EC\/">Education Commons<\/a> &gt; <a class="internal" href="\/EC\/WWW\/">Website Design<\/a> &gt; <a class="internal" href="..\/index.php">Scripting: Simple Javascript<\/a> &gt; <em class="black">Display Date object<\/em> &gt; <a class="internal" href="A0008.html">Change paragraph style<\/a><\/p>');
	document.writeln('	<h1>Scripting: Simple Javascript scripts<\/h1>');
	document.writeln('	<h2>Display Date object*<\/h2>');
	document.writeln('	<table>');
	document.writeln('		<tr  class="top"><th>method<\/th><th>returned value<\/th><th>note<\/th><\/tr>');
	document.writeln('		<tr ><td class="method">Date()<\/td><td class="value">' + currentDate + '<\/td><td class="note">default date and time<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getDate()<\/td><td class="value">' + currentDate.getDate() + '<\/td><td class="note">day of month (1&ndash;31)<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getDay()<\/td><td class="value">' + currentDate.getDay() + '<\/td><td class="note">day of week (0&ndash;6)<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getMonth()<\/td><td class="value">' + currentDate.getMonth() + '<\/td><td class="note">month of year (0&ndash;11)<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getFullYear()<\/td><td class="value">' + currentDate.getFullYear() + '<\/td><td class="note">4-digit year<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getYear()<\/td><td class="value">' + currentDate.getYear() + '<\/td><td class="note">numbered from 1900<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getHours()<\/td><td class="value">' + currentDate.getHours() + '<\/td><td class="note">(0&ndash;23)<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getMinutes()<\/td><td class="value">' + currentDate.getMinutes() + '<\/td><td class="note">(0&ndash;59)<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getSeconds()<\/td><td class="value">' + currentDate.getSeconds() + '<\/td><td class="note">(0&ndash;59)<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getMilliseconds()<\/td><td class="value">' + currentDate.getMilliseconds() + '<\/td><td class="note">(0&ndash;999)<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getTime()<\/td><td class="value">' + currentDate.getTime() + '<\/td><td class="note">milliseconds since 1970&ndash;01&ndash;01<\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getTimezoneOffset()<\/td><td class="value">' + currentDate.getTimezoneOffset() + '<\/td><td class="note">minutes between local time and <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getUTCDate()<\/td><td class="value">' + currentDate.getUTCDate() + '<\/td><td class="note">as above, for <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getUTCDay()<\/td><td class="value">' + currentDate.getUTCDay() + '<\/td><td class="note">as above, for <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getUTCMonth()<\/td><td class="value">' + currentDate.getUTCMonth() + '<\/td><td class="note">as above, for <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getUTCFullYear()<\/td><td class="value">' + currentDate.getUTCFullYear() + '<\/td><td class="note">as above, for <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getUTCHours()<\/td><td class="value">' + currentDate.getUTCHours() + '<\/td><td class="note">as above, for <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getUTCMinutes()<\/td><td class="value">' + currentDate.getUTCMinutes() + '<\/td><td class="note">as above, for <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getUTCSeconds()<\/td><td class="value">' + currentDate.getUTCSeconds() + '<\/td><td class="note">as above, for <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">getUTCMilliseconds()<\/td><td class="value">' + currentDate.getUTCMilliseconds() + '<\/td><td class="note">as above, for <a class="external" href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC<\/a><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">toUTCString()<\/td><td class="value">' + currentDate.toUTCString() + '<\/td><td class="note"><\/td><\/tr>');
	document.writeln('		<tr ><td class="method">toLocaleString()<\/td><td class="value">' + currentDate.toLocaleString() + '<\/td><td class="note">formatted according to client&rsquo;s computer<\/td><\/tr>');
	document.writeln('	<\/table>');
	document.writeln('	<p>*Table data drawn from <a class="external" href="http://www.w3schools.com/jsref/jsref_obj_date.asp">W3 Schools<\/a>.<\/p>');
	document.writeln('	<hr \/>');
	document.writeln('	<p>How it&rsquo;s done:<\/p>');
	document.writeln('	<pre>');
	document.write('&lt;body onload="writePage()"&gt;');
	document.write('	<\/pre>');
	document.writeln('	<p>(See source for details of <em>writePage()<\/em>.)<\/p>');
	document.writeln('	<p class="returnHome"><a class="internal" href="\/">touque.ca<\/a> &gt; <a class="internal" href="\/EC\/">Education Commons<\/a> &gt; <a class="internal" href="\/EC\/WWW\/">Website Design<\/a> &gt; <a class="internal" href="..\/index.php">Scripting: Simple Javascript<\/a> &gt; <em class="black">Display Date object<\/em> &gt; <a class="internal" href="A0008.html">Change paragraph style<\/a><\/p>');
	document.writeln('<\/body><\/html>');
	document.close();
} // end of function writePage()
function changeParagraphStyle(newStyle)
{
   var element = document.getElementById("mainParagraph");
   if (newStyle == "knockout")
      element.setAttribute("style", "background: purple; color: yellow; padding: 1em;");
   else
      element.setAttribute("style", "background: white; color: black; padding: 0;");
} // end of function changeParagraphStyle()
function changeBodyClass(newStyle)
{
   var element = document.getElementById("body");
   element.setAttribute("class", newStyle);
} // end of function changeBodyClass()

