<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <b:if cond='data:blog.isMobile'>
      <meta content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0' name='viewport'/>
    <b:else/>
      <meta content='width=1100' name='viewport'/>
    </b:if>
<meta content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1' name='viewport'/>
<meta content='text/html;charset=UTF-8' http-equiv='Content-Type'/>
<meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'/> 
<b:include data='blog' name='all-head-content'/>

<!-- SEO Meta Tag -->
<b:if cond='data:blog.homepageUrl == data:blog.url'><meta expr:content='data:blog.title' name='keywords'/></b:if>	   
<b:if cond='data:blog.pageType == &quot;item&quot;'><meta expr:content='data:blog.pageName' name='keywords'/></b:if>
<b:if cond='data:blog.pageType == &quot;index&quot;'><b:if cond='data:blog.searchLabel'><meta content='noindex,nofollow' name='robots'/></b:if></b:if>
<b:if cond='data:blog.pageType == &quot;archive&quot;'><meta content='noindex,nofollow' name='robots'/></b:if>
<b:if cond='data:blog.isMobile'><meta content='noindex,nofollow' name='robots'/></b:if>

<!-- SEO Title Tag -->
<b:if cond='data:blog.url == data:blog.homepageUrl'><title><data:blog.title/></title></b:if>
    <b:if cond='data:blog.pageType == &quot;item&quot;'><title>Download Link</title></b:if>
<b:if cond='data:blog.pageType == &quot;archive&quot;'><title>Archive for <data:blog.pageName/></title></b:if>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'><title><data:blog.pageName/></title></b:if>
<b:if cond='data:blog.pageType == &quot;index&quot;'><b:if cond='data:blog.searchLabel'><title><data:blog.title/> - <data:blog.pageName/></title></b:if></b:if>
<b:if cond='data:blog.pageType == &quot;error_page&quot;'><title>Page Not Found</title></b:if>
<b:if cond='data:blog.pageType == &quot;index&quot;'><b:if cond='data:blog.url != data:blog.homepageUrl'><title><data:blog.pageTitle/> - All Post</title></b:if></b:if>

<script type='text/javascript'>
var currentURL=location.href;
var str = currentURL;
var res = str.replace(&quot;http://jsgbloger.blogspot.com/2017/08/please-wait.html?url=&quot;, &quot;&quot;);

$(&quot;.Visit_Link&quot;).hide();

function changeLink(){
    var decodedString = Base64.decode(res);
    window.open(decodedString,&#39;_blank&#39;)
}

</script>


    <b:skin><![CDATA[/*
-----------------------------------------------
Blogger Template Style
Name:     Awesome Inc.
Designer: Tina Chen
URL:      tinachen.org
Modified: Christian Dwi Wijaya
----------------------------------------------- */

/* Variable definitions
   ====================
   <Variable name="keycolor" description="Main Color" type="color" default="#ffffff" value="#eeeeee"/>

   <Group description="Page" selector="body">
     <Variable name="body.font" description="Font" type="font"
         default="normal normal 15px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 13px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="body.background.color" description="Background Color" type="color" default="#000000" value="#ffffff"/>
     <Variable name="body.text.color" description="Text Color" type="color" default="#ffffff" value="#444444"/>
   </Group>

   <Group description="Links" selector=".main-inner">
     <Variable name="link.color" description="Link Color" type="color" default="#888888" value="#FFFFFF"/>
     <Variable name="link.visited.color" description="Visited Color" type="color" default="#444444" value="#FFFFFF"/>
     <Variable name="link.hover.color" description="Hover Color" type="color" default="#cccccc" value="#FFFFFF"/>
   </Group>

   <Group description="Blog Title" selector=".header h1">
     <Variable name="header.font" description="Title Font" type="font"
         default="normal bold 40px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 40px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="header.text.color" description="Title Color" type="color" default="$(body.text.color)"  value="#444444"/>
     <Variable name="header.background.color" description="Header Background" type="color" default="transparent"  value="transparent"/>
   </Group>

   <Group description="Blog Description" selector=".header .description">
     <Variable name="description.font" description="Font" type="font"
         default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="description.text.color" description="Text Color" type="color"
         default="$(body.text.color)"  value="#444444"/>
   </Group>

   <Group description="Tabs Text" selector=".tabs-inner .widget li a">
     <Variable name="tabs.font" description="Font" type="font"
         default="normal bold 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="tabs.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#444444"/>
     <Variable name="tabs.selected.text.color" description="Selected Color" type="color" default="$(tabs.text.color)" value="#444444"/>
   </Group>

   <Group description="Tabs Background" selector=".tabs-outer .PageList">
     <Variable name="tabs.background.color" description="Background Color" type="color" default="#141414" value="#eeeeee"/>
     <Variable name="tabs.selected.background.color" description="Selected Color" type="color" default="#444444" value="#666666"/>
     <Variable name="tabs.border.color" description="Border Color" type="color" default="$(widget.border.color)" value="#999999"/>
   </Group>

   <Group description="Date Header" selector=".main-inner .widget h2.date-header, .main-inner .widget h2.date-header span">
     <Variable name="date.font" description="Font" type="font"
         default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="date.text.color" description="Text Color" type="color" default="#666666" value="#444444"/>
     <Variable name="date.border.color" description="Border Color" type="color" default="$(widget.border.color)" value="#eeeeee"/>
   </Group>

   <Group description="Post Title" selector="h3.post-title, h4, h3.post-title a">
     <Variable name="post.title.font" description="Font" type="font"
         default="normal bold 22px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 22px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="post.title.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#444444"/>
   </Group>

   <Group description="Post Background" selector=".post">
     <Variable name="post.background.color" description="Background Color" type="color" default="$(widget.background.color)"  value="#ffffff"/>
     <Variable name="post.border.color" description="Border Color" type="color" default="$(widget.border.color)"  value="#eeeeee"/>
     <Variable name="post.border.bevel.color" description="Bevel Color" type="color" default="$(widget.border.color)" value="#eeeeee"/>
   </Group>

   <Group description="Gadget Title" selector="h2">
     <Variable name="widget.title.font" description="Font" type="font"
        default="normal bold 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="widget.title.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#444444"/>
   </Group>

   <Group description="Gadget Text" selector=".sidebar .widget">
     <Variable name="widget.font" description="Font" type="font"
        default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="widget.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#444444"/>
     <Variable name="widget.alternate.text.color" description="Alternate Color" type="color" default="#666666" value="#666666"/>
   </Group>

   <Group description="Gadget Links" selector=".sidebar .widget">
     <Variable name="widget.link.color" description="Link Color" type="color" default="$(link.color)" value="#FFFFFF"/>
     <Variable name="widget.link.visited.color" description="Visited Color" type="color" default="$(link.visited.color)" value="#FFFFFF"/>
     <Variable name="widget.link.hover.color" description="Hover Color" type="color" default="$(link.hover.color)" value="#FFFFFF"/>
   </Group>

   <Group description="Gadget Background" selector=".sidebar .widget">
     <Variable name="widget.background.color" description="Background Color" type="color" default="#141414" value="#ffffff"/>
     <Variable name="widget.border.color" description="Border Color" type="color" default="#222222" value="#eeeeee"/>
     <Variable name="widget.border.bevel.color" description="Bevel Color" type="color" default="#000000" value="transparent"/>
   </Group>

   <Group description="Sidebar Background" selector=".column-left-inner .column-right-inner">
     <Variable name="widget.outer.background.color" description="Background Color" type="color" default="transparent"  value="transparent"/>
   </Group>

   <Group description="Images" selector=".main-inner">
     <Variable name="image.background.color" description="Background Color" type="color" default="transparent" value="transparent"/>
     <Variable name="image.border.color" description="Border Color" type="color" default="transparent" value="transparent"/>
   </Group>

   <Group description="Feed" selector=".blog-feeds">
      <Variable name="feed.text.color" description="Text Color" type="color" default="$(body.text.color)" value="#444444"/>
   </Group>

   <Group description="Feed Links" selector=".blog-feeds">
     <Variable name="feed.link.color" description="Link Color" type="color" default="$(link.color)" value="#FFFFFF"/>
     <Variable name="feed.link.visited.color" description="Visited Color" type="color" default="$(link.visited.color)" value="#FFFFFF"/>
     <Variable name="feed.link.hover.color" description="Hover Color" type="color" default="$(link.hover.color)" value="#FFFFFF"/>
   </Group>

   <Group description="Pager" selector=".blog-pager">
     <Variable name="pager.background.color" description="Background Color" type="color" default="$(post.background.color)"  value="#ffffff"/>
   </Group>

   <Group description="Footer" selector=".footer-outer">
     <Variable name="footer.background.color" description="Background Color" type="color" default="$(widget.background.color)"  value="#ffffff"/>
     <Variable name="footer.text.color" description="Text Color" type="color" default="$(body.text.color)"  value="#FFFFFF"/>
   </Group>

   <Variable name="title.shadow.spread" description="Title Shadow" type="length" default="-1px" value="-1px"/>

   <Variable name="body.background" description="Body Background" type="background"
       color="$(body.background.color)"
       default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>
   <Variable name="body.background.gradient.cap" description="Body Gradient Cap" type="url"
       default="none" value="none"/>
   <Variable name="body.background.size" description="Body Background Size" type="string" default="auto" value="auto"/>

   <Variable name="tabs.background.gradient" description="Tabs Background Gradient" type="url"
       default="none" value="url(//www.blogblog.com/1kt/awesomeinc/tabs_gradient_light.png)"/>

   <Variable name="header.background.gradient" description="Header Background Gradient" type="url" default="none"  value="none"/>
   <Variable name="header.padding.top" description="Header Top Padding" type="length" default="22px"  value="22px"/>
   <Variable name="header.margin.top" description="Header Top Margin" type="length" default="0"  value="0"/>
   <Variable name="header.margin.bottom" description="Header Bottom Margin" type="length" default="0"  value="0"/>

   <Variable name="widget.padding.top" description="Widget Padding Top" type="length" default="8px"  value="8px"/>
   <Variable name="widget.padding.side" description="Widget Padding Side" type="length" default="15px"  value="15px"/>
   <Variable name="widget.outer.margin.top" description="Widget Top Margin" type="length" default="0"  value="0"/>
   <Variable name="widget.outer.background.gradient" description="Gradient" type="url" default="none"  value="none"/>
   <Variable name="widget.border.radius" description="Gadget Border Radius" type="length" default="0"  value="0"/>
   <Variable name="outer.shadow.spread" description="Outer Shadow Size" type="length" default="0"  value="0"/>

   <Variable name="date.header.border.radius.top" description="Date Header Border Radius Top" type="length" default="0"  value="0"/>
   <Variable name="date.header.position" description="Date Header Position" type="length" default="15px"  value="15px"/>

   <Variable name="date.space" description="Date Space" type="length" default="30px"  value="30px"/>
   <Variable name="date.position" description="Date Float" type="string" default="static"  value="static"/>
   <Variable name="date.padding.bottom" description="Date Padding Bottom" type="length" default="0"  value="0"/>
   <Variable name="date.border.size" description="Date Border Size" type="length" default="0"  value="0"/>
   <Variable name="date.background" description="Date Background" type="background" color="transparent"
       default="$(color) none no-repeat scroll top left"  value="$(color) none no-repeat scroll top left"/>
   <Variable name="date.first.border.radius.top" description="Date First top radius" type="length" default="$(widget.border.radius)"  value="0"/>
   <Variable name="date.last.space.bottom" description="Date Last Space Bottom" type="length"
       default="20px"  value="20px"/>
   <Variable name="date.last.border.radius.bottom" description="Date Last bottom radius" type="length" default="$(widget.border.radius)"  value="0"/>

   <Variable name="post.first.padding.top" description="First Post Padding Top" type="length" default="0"  value="0"/>

   <Variable name="image.shadow.spread" description="Image Shadow Size" type="length" default="0" value="0"/>
   <Variable name="image.border.radius" description="Image Border Radius" type="length" default="0" value="0"/>

   <Variable name="separator.outdent" description="Separator Outdent" type="length" default="15px"  value="15px"/>
   <Variable name="title.separator.border.size" description="Widget Title Border Size" type="length" default="1px"  value="1px"/>
   <Variable name="list.separator.border.size" description="List Separator Border Size" type="length" default="1px"  value="1px"/>
   <Variable name="shadow.spread" description="Shadow Size" type="length" default="0" value="20px"/>

   <Variable name="startSide" description="Side where text starts in blog language" type="automatic" default="left"/>
   <Variable name="endSide" description="Side where text ends in blog language" type="automatic" default="right"/>

   <Variable name="date.side" description="Side where date header is placed" type="string" default="$(endSide)" value="right"/>

   <Variable name="pager.border.radius.top" description="Pager Border Top Radius" type="length" default="$(widget.border.radius)"  value="0"/>
   <Variable name="pager.space.top" description="Pager Top Space" type="length" default="1em"  value="1em"/>

   <Variable name="footer.background.gradient" description="Background Gradient" type="url" default="none"  value="none"/>

   <Variable name="mobile.background.size" description="Mobile Background Size" type="string"
       default="$(body.background.size)" value="auto"/>
   <Variable name="mobile.background.overlay" description="Mobile Background Overlay" type="string"
       default="transparent none repeat scroll top left" value="transparent none repeat scroll top left"/>
   <Variable name="mobile.button.color" description="Mobile Button Color" type="color" default="#ffffff"  value="#ffffff"/>
*/

/* Content
----------------------------------------------- */
body {
  font: $(body.font);
  color: $(body.text.color);
  background: $(body.background);
}

html body .content-outer {
  min-width: 0;
  max-width: 100%;
  width: 100%;
}

a:link {
  text-decoration: none;
  color: $(link.color);
}

a:visited {
  text-decoration: none;
  color: $(link.visited.color);
}

a:hover {
  text-decoration: none;
  color: $(link.hover.color);
}

.body-fauxcolumn-outer .cap-top {
  position: absolute;
  z-index: 1;

  height: 276px;
  width: 100%;

  background: transparent $(body.background.gradient.cap) repeat-x scroll top left;
  _background-image: none;
}
/* CSS Contact Form */
#ContactForm1{
display:none;
}
#ContactForm1_contact-form-name, #ContactForm1_contact-form-email{
width: 300px;
height:auto;
margin: 5px auto;
padding: 10px;
background: #f2f2f2;
border: 1px solid #ccc;
color:#777;
}
#ContactForm1_contact-form-name:focus, #ContactForm1_contact-form-email:focus, #ContactForm1_contact-form-email-message:focus{
background: #fffff7;
}
#ContactForm1_contact-form-email-message{
width: 450px;
height: 175px;
margin: 5px auto;
padding: 10px;
background: #f2f2f2;
border: 1px solid #ccc;
color:#777;
font-family:Arial, sans-serif;
}
#ContactForm1_contact-form-submit {
width: 101px;
height: 35px;
float: left;
color: #FFF;
padding: 0;
margin: 10px 0 3px 0 0;
cursor: pointer;
background: #5E768D;
border: 1px solid #556f8c;
border-radius:3px;
}
#ContactForm1_contact-form-submit:hover {
background:#435c74;
}
#ContactForm1_contact-form-error-message, #ContactForm1_contact-form-success-message{
width: 450px;
margin-top:35px;
}
.Visit_Link {
background-color: #4173c9;
background-image: -moz-linear-gradient(top,#5e8ee4,#4173c9);
background-image: -webkit-linear-gradient(top,#5e8ee4,#4173c9);
background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#5e8ee4),color-stop(1,#4173c9));
background-image: linear-gradient(top,#5e8ee4,#4173c9);
border: 0;
-moz-border-radius: 2px;
-webkit-border-radius: 2px;
border-radius: 2px;
color: #fff;
cursor: pointer;
display: inline-block;
font-family: arial,sans-serif;
font-size: 13px;
font-weight: bold;
line-height: 1;
padding: 4px 8px;
text-align: center;
text-shadow: 0 -1px 0 rgba(0,0,0,.08);
}
.quickedit{display:none;important!}
#Attribution1 {
height:0px;
visibility:hidden;
display:none
}
#nav ul{
display:block;
margin: 0px;
padding: 0px;
float:right;
margin-right:15%;
}
#nav li{
float:left;
height:20px;
list-style-type:none;
padding:10px;
padding-top:13px;
}
#nav li a{
text-decoration:none;
color:#FFFFFF;
font:weight:bold;
}
#nav li:hover{
font:weight:bold;
text-decoration:none;
}

/* Columns
----------------------------------------------- */
.content-inner {
  padding: 0;
}

.header-inner .section {
  margin: 0 16px;
}

.tabs-inner .section {
  margin: 0 16px;
}

.main-inner {
  padding-top: $(date.space);
}

.main-inner .column-center-inner,
.main-inner .column-left-inner,
.main-inner .column-right-inner {
  padding: 0 5px;
}

*+html body .main-inner .column-center-inner {
  margin-top: -$(date.space);
}

#layout .main-inner .column-center-inner {
  margin-top: 0;
}

/* Header
----------------------------------------------- */
.header-outer {
  margin: $(header.margin.top) 0 $(header.margin.bottom) 0;
  background: $(header.background.color) $(header.background.gradient) repeat scroll 0 0;
}

.Header h1 {
  font: $(header.font);
  color: $(header.text.color);
  text-shadow: 0 0 $(title.shadow.spread) #000000;
}

.Header h1 a {
  color: $(header.text.color);
}

.Header .description {
  font: $(description.font);
  color: $(description.text.color);
}

.header-inner .Header .titlewrapper,
.header-inner .Header .descriptionwrapper {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 0;
}

.header-inner .Header .titlewrapper {
  padding-top: $(header.padding.top);
}

/* Tabs
----------------------------------------------- */
.tabs-outer {
  overflow: hidden;
  position: relative;
}

#layout .tabs-outer {
  overflow: visible;
}

.tabs-cap-top, .tabs-cap-bottom {
  position: absolute;
  width: 100%;
}

.tabs-cap-bottom {
  bottom: 0;
}

.tabs-inner .widget li a {
  display: inline-block;

  margin: 0;
  padding: .6em 1.5em;

  font: $(tabs.font);
  color: $(tabs.text.color);

  border-top: 1px solid $(tabs.border.color);
  border-bottom: 1px solid $(tabs.border.color);
  border-$startSide: 1px solid $(tabs.border.color);

  height: 16px;
  line-height: 16px;
}

.tabs-inner .widget li:last-child a {
  border-$endSide: 1px solid $(tabs.border.color);
}

.tabs-inner .widget li.selected a, .tabs-inner .widget li a:hover {
  background: $(tabs.selected.background.color) $(tabs.background.gradient) repeat-x scroll 0 -100px;
  color: $(tabs.selected.text.color);
}

/* Headings
----------------------------------------------- */
h2 {
  font: $(widget.title.font);
  color: $(widget.title.text.color);
}

/* Widgets
----------------------------------------------- */
.main-inner .section {
  margin: 0 27px;
  padding: 0;
}

.main-inner .column-left-outer,
.main-inner .column-right-outer {
  margin-top: $(widget.outer.margin.top);
}

#layout .main-inner .column-left-outer,
#layout .main-inner .column-right-outer {
  margin-top: 0;
}

.main-inner .column-left-inner,
.main-inner .column-right-inner {
  background: $(widget.outer.background.color) $(widget.outer.background.gradient) repeat 0 0;

  -moz-box-shadow: 0 0 $(outer.shadow.spread) rgba(0, 0, 0, .2);
  -webkit-box-shadow: 0 0 $(outer.shadow.spread) rgba(0, 0, 0, .2);
  -goog-ms-box-shadow: 0 0 $(outer.shadow.spread) rgba(0, 0, 0, .2);
  box-shadow: 0 0 $(outer.shadow.spread) rgba(0, 0, 0, .2);

  -moz-border-radius: $(widget.border.radius);
  -webkit-border-radius: $(widget.border.radius);
  -goog-ms-border-radius: $(widget.border.radius);
  border-radius: $(widget.border.radius);
}

#layout .main-inner .column-left-inner,
#layout .main-inner .column-right-inner {
  margin-top: 0;
}

.sidebar .widget {
  font: $(widget.font);
  color: $(widget.text.color);
}

.sidebar .widget a:link {
  color: $(widget.link.color);
}

.sidebar .widget a:visited {
  color: $(widget.link.visited.color);
}

.sidebar .widget a:hover {
  color: $(widget.link.hover.color);
}

.sidebar .widget h2 {
  text-shadow: 0 0 $(title.shadow.spread) #000000;
}

.main-inner .widget {
  background-color: $(widget.background.color);
  padding: 0 $(widget.padding.side) 15px;
  margin: 20px -16px;

}

.main-inner .widget h2 {
  margin: 0 -$(separator.outdent);
  padding: .6em $(separator.outdent) .5em;
  border-bottom: 1px solid $(widget.border.bevel.color);
}

.agandos{
  padding: 10px;
  -moz-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -webkit-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  -goog-ms-box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);
  box-shadow: 0 0 $(shadow.spread) rgba(0, 0, 0, .2);

  -moz-border-radius: $(widget.border.radius);
  -webkit-border-radius: $(widget.border.radius);
  -goog-ms-border-radius: $(widget.border.radius);
  border-radius: $(widget.border.radius);
}

.footer-inner .widget h2 {
  padding: 0 0 .4em;

  border-bottom: 1px solid $(widget.border.bevel.color);
}

.main-inner .widget h2 + div, .footer-inner .widget h2 + div {
  border-top: $(title.separator.border.size) solid $(widget.border.color);
  padding-top: $(widget.padding.top);
}

.main-inner .widget .widget-content {
  margin: 0 -$(separator.outdent);
  padding: 7px $(separator.outdent) 0;
}

.main-inner .widget ul, .main-inner .widget #ArchiveList ul.flat {
  margin: -$(widget.padding.top) -15px 0;
  padding: 0;

  list-style: none;
}

.main-inner .widget #ArchiveList {
  margin: -$(widget.padding.top) 0 0;
}

.main-inner .widget ul li, .main-inner .widget #ArchiveList ul.flat li {
  padding: .5em 15px;
  text-indent: 0;

  color: $(widget.alternate.text.color);

  border-top: $(list.separator.border.size) solid $(widget.border.color);
  border-bottom: 1px solid $(widget.border.bevel.color);
}

.main-inner .widget #ArchiveList ul li {
  padding-top: .25em;
  padding-bottom: .25em;
}

.main-inner .widget ul li:first-child, .main-inner .widget #ArchiveList ul.flat li:first-child {
  border-top: none;
}

.main-inner .widget ul li:last-child, .main-inner .widget #ArchiveList ul.flat li:last-child {
  border-bottom: none;
}

.post-body {
  position: relative;
}

.main-inner .widget .post-body ul {
  padding: 0 2.5em;
  margin: .5em 0;

  list-style: disc;
}

.main-inner .widget .post-body ul li {
  padding: 0.25em 0;
  margin-bottom: .25em;

  color: $(body.text.color);

  border: none;
}

.footer-inner .widget ul {
  padding: 0;

  list-style: none;
}

.widget .zippy {
  color: $(widget.alternate.text.color);
}

/* Posts
----------------------------------------------- */
body .main-inner .Blog {
  padding: 0;
  margin-bottom: 1em;

  background-color: transparent;
  border: none;

  -moz-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  -goog-ms-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.main-inner .section:last-child .Blog:last-child {
  padding: 0;
  margin-bottom: 1em;
}

.main-inner .widget h2.date-header {
  margin: 0 -15px 1px;
  padding: 0 0 $(date.padding.bottom) 0;

  font: $(date.font);
  color: $(date.text.color);

  background: $(date.background);

  border-top: $(date.border.size) solid $(date.border.color);
  border-bottom: 1px solid $(widget.border.bevel.color);

  -moz-border-radius-topleft: $(date.header.border.radius.top);
  -moz-border-radius-topright: $(date.header.border.radius.top);
  -webkit-border-top-left-radius: $(date.header.border.radius.top);
  -webkit-border-top-right-radius: $(date.header.border.radius.top);
  border-top-left-radius: $(date.header.border.radius.top);
  border-top-right-radius: $(date.header.border.radius.top);

  position: $(date.position);
  bottom: 100%;
  $(date.side): $(date.header.position);
  text-shadow: 0 0 $(title.shadow.spread) #000000;
}

.main-inner .widget h2.date-header span {
  font: $(date.font);
  display: block;
  padding: .5em 15px;
  border-left: $(date.border.size) solid $(date.border.color);
  border-right: $(date.border.size) solid $(date.border.color);
}

.date-outer {
  position: relative;
  
  background-color: $(post.background.color);
  
}

.date-outer:first-child {
  margin-top: 0;
}

.date-outer:last-child {
  margin-bottom: $(date.last.space.bottom);

  -moz-border-radius-bottomleft: $(date.last.border.radius.bottom);
  -moz-border-radius-bottomright: $(date.last.border.radius.bottom);
  -webkit-border-bottom-left-radius: $(date.last.border.radius.bottom);
  -webkit-border-bottom-right-radius: $(date.last.border.radius.bottom);
  -goog-ms-border-bottom-left-radius: $(date.last.border.radius.bottom);
  -goog-ms-border-bottom-right-radius: $(date.last.border.radius.bottom);
  border-bottom-left-radius: $(date.last.border.radius.bottom);
  border-bottom-right-radius: $(date.last.border.radius.bottom);
}

.date-posts {
  margin: 0 -$(separator.outdent);
  padding: 0 $(separator.outdent);

  clear: both;
}

.post-outer, .inline-ad {
  border-top: 1px solid $(post.border.bevel.color);

  margin: 0 -$(separator.outdent);
  padding: 15px $(separator.outdent);
}

.post-outer {
  padding-bottom: 10px;
}

.post-outer:first-child {
  padding-top: $(post.first.padding.top);
  border-top: none;
}

.post-outer:last-child, .inline-ad:last-child {
  border-bottom: none;
}

.post-body {
  position: relative;
}

.post-body img {
  padding: 8px;
  background: $(image.background.color);
  border: 1px solid $(image.border.color);

  -moz-box-shadow: 0 0 $(image.shadow.spread) rgba(0, 0, 0, .2);
  -webkit-box-shadow: 0 0 $(image.shadow.spread) rgba(0, 0, 0, .2);
  box-shadow: 0 0 $(image.shadow.spread) rgba(0, 0, 0, .2);

  -moz-border-radius: $(image.border.radius);
  -webkit-border-radius: $(image.border.radius);
  border-radius: $(image.border.radius);
}

h3.post-title, h4 {
  font: $(post.title.font);
  color: $(post.title.text.color);
}

h3.post-title a {
  font: $(post.title.font);
  color: $(post.title.text.color);
}

h3.post-title a:hover {
  color: $(link.hover.color);
  text-decoration: none;
}

.post-header {
  margin: 0 0 1em;
}

.post-body {
  line-height: 1.4;
}

.post-outer h2 {
  color: $(body.text.color);
}

.post-footer {
  margin: 1.5em 0 0;
}

#blog-pager {
  padding: 15px;
  font-size: 120%;

  background-color: $(pager.background.color);
  

  margin-top: $(pager.space.top);
}

.blog-feeds, .post-feeds {
  margin: 1em 0;
  text-align: center;
  color: $(feed.text.color);
}

.blog-feeds a, .post-feeds a {
  color: $(feed.link.color);
}

.blog-feeds a:visited, .post-feeds a:visited {
  color: $(feed.link.visited.color);
}

.blog-feeds a:hover, .post-feeds a:hover {
  color: $(feed.link.hover.color);
}

.post-outer .comments {
  margin-top: 2em;
}

/* Comments
----------------------------------------------- */
.comments .comments-content .icon.blog-author {
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9sLFwMeCjjhcOMAAAD+SURBVDjLtZSvTgNBEIe/WRRnm3U8RC1neQdsm1zSBIU9VVF1FkUguQQsD9ITmD7ECZIJSE4OZo9stoVjC/zc7ky+zH9hXwVwDpTAWWLrgS3QAe8AZgaAJI5zYAmc8r0G4AHYHQKVwII8PZrZFsBFkeRCABYiMh9BRUhnSkPTNCtVXYXURi1FpBDgArj8QU1eVXUzfnjv7yP7kwu1mYrkWlU33vs1QNu2qU8pwN0UpKoqokjWwCztrMuBhEhmh8bD5UDqur75asbcX0BGUB9/HAMB+r32hznJgXy2v0sGLBcyAJ1EK3LFcbo1s91JeLwAbwGYu7TP/3ZGfnXYPgAVNngtqatUNgAAAABJRU5ErkJggg==);
}

.comments .comments-content .loadmore a {
  border-top: 1px solid $(tabs.border.color);
  border-bottom: 1px solid $(tabs.border.color);
}

.comments .continue {
  border-top: 2px solid $(tabs.border.color);
}

/* Footer
----------------------------------------------- */
.footer-outer {
  margin: -$(shadow.spread) 0 -1px;
  padding: $(shadow.spread) 0 0;
  color: $(footer.text.color);
  overflow: hidden;
}

.footer-fauxborder-left {
  border-top: 1px solid $(widget.border.color);
  background: #2EA9DA;

  margin: 0 -$(shadow.spread);
}

/* Mobile
----------------------------------------------- */
body.mobile {
  background-size: $(mobile.background.size);
}

.mobile .body-fauxcolumn-outer {
  background: $(mobile.background.overlay);
}

*+html body.mobile .main-inner .column-center-inner {
  margin-top: 0;
}

.mobile .main-inner .widget {
  padding: 0 0 15px;
}

.mobile .main-inner .widget h2 + div,
.mobile .footer-inner .widget h2 + div {
  border-top: none;
  padding-top: 0;
}

.mobile .footer-inner .widget h2 {
  padding: 0.5em 0;
  border-bottom: none;
}

.mobile .main-inner .widget .widget-content {
  margin: 0;
  padding: 7px 0 0;
}

.mobile .main-inner .widget ul,
.mobile .main-inner .widget #ArchiveList ul.flat {
  margin: 0 -15px 0;
}

.mobile .main-inner .widget h2.date-header {
  $(date.side): 0;
}

.mobile .date-header span {
  padding: 0.4em 0;
}

.mobile .date-outer:first-child {
  margin-bottom: 0;
  border: 1px solid $(post.border.color);

  -moz-border-radius-topleft: $(date.first.border.radius.top);
  -moz-border-radius-topright: $(date.first.border.radius.top);
  -webkit-border-top-left-radius: $(date.first.border.radius.top);
  -webkit-border-top-right-radius: $(date.first.border.radius.top);
  -goog-ms-border-top-left-radius: $(date.first.border.radius.top);
  -goog-ms-border-top-right-radius: $(date.first.border.radius.top);
  border-top-left-radius: $(date.first.border.radius.top);
  border-top-right-radius: $(date.first.border.radius.top);
}

.mobile .date-outer {
  border-color: $(post.border.color);
  border-width: 0 1px 1px;
}

.mobile .date-outer:last-child {
  margin-bottom: 0;
}

.mobile .main-inner {
  padding: 0;
}

.mobile .header-inner .section {
  margin: 0;
}

.mobile .post-outer, .mobile .inline-ad {
  padding: 5px 0;
}

.mobile .tabs-inner .section {
  margin: 0 10px;
}

.mobile .main-inner .widget h2 {
  margin: 0;
  padding: 0;
}

.mobile .main-inner .widget h2.date-header span {
  padding: 0;
}

.mobile .main-inner .widget .widget-content {
  margin: 0;
  padding: 7px 0 0;
}

.mobile #blog-pager {
  border: 1px solid transparent;
  background: $(footer.background.color) $(footer.background.gradient) repeat scroll 0 0;
}

.mobile .main-inner .column-left-inner,
.mobile .main-inner .column-right-inner {
  background: $(widget.outer.background.color) $(widget.outer.background.gradient) repeat 0 0;

  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  -goog-ms-box-shadow: none;
  box-shadow: none;
}

.mobile .date-posts {
  margin: 0;
  padding: 0;
}

.mobile .footer-fauxborder-left {
  margin: 0;
  border-top: inherit;
}

.mobile .main-inner .section:last-child .Blog:last-child {
  margin-bottom: 0;
}

.mobile-index-contents {
  color: $(body.text.color);
}

.mobile .mobile-link-button {
  background: $(link.color) $(tabs.background.gradient) repeat scroll 0 0;
}

.mobile-link-button a:link, .mobile-link-button a:visited {
  color: $(mobile.button.color);
}

.mobile .tabs-inner .PageList .widget-content {
  background: transparent;
  border-top: 1px solid;
  border-color: $(tabs.border.color);
  color: $(tabs.text.color);
}

.mobile .tabs-inner .PageList .widget-content .pagelist-arrow {
  border-$startSide: 1px solid $(tabs.border.color);
}

]]></b:skin>

    <b:template-skin>
      <b:variable default='960px' name='content.width' type='length' value='930px'/>
      <b:variable default='0' name='main.column.left.width' type='length' value='180px'/>
      <b:variable default='310px' name='main.column.right.width' type='length' value='360px'/>

      <![CDATA[
      body {
        min-width: $(content.width);
      }

      .content-outer, .content-fauxcolumn-outer, .region-inner {
        min-width: $(content.width);
        max-width: 930px;
        _width: $(content.width);
      }






      .main-inner .columns {
        padding-left: $(main.column.left.width);
        padding-right: $(main.column.right.width);
      }

      .main-inner .fauxcolumn-center-outer {
        left: $(main.column.left.width);
        right: $(main.column.right.width);
        /* IE6 does not respect left and right together */
        _width: expression(this.parentNode.offsetWidth -
            parseInt("$(main.column.left.width)") -
            parseInt("$(main.column.right.width)") + 'px');
      }

      .main-inner .fauxcolumn-left-outer {
        width: $(main.column.left.width);
      }

      .main-inner .fauxcolumn-right-outer {
        width: $(main.column.right.width);
      }

      .main-inner .column-left-outer {
        width: $(main.column.left.width);
        right: 100%;
        margin-left: -$(main.column.left.width);
      }

      .main-inner .column-right-outer {
        width: $(main.column.right.width);
        margin-right: -$(main.column.right.width);
      }

      #layout {
        min-width: 0;
      }

      #layout .content-outer {
        min-width: 0;
        width: 800px;
      }

      #layout .region-inner {
        min-width: 0;
        width: auto;
      }
      ]]>
    </b:template-skin>
    <b:include data='blog' name='google-analytics'/>

<script type='text/javascript'>
//<![CDATA[
function generate() {
    var linkDL = document.getElementById("download"),
        btn = document.getElementById("btn"),
        notif = document.getElementById("daplong"),
        direklink = document.getElementById("download").href,
        waktu = 6;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            notif.style.display = "none";
            linkDL.style.display = "inline";
        } else {
            teks_waktu.innerHTML = "<h2>Link will appear in " + waktu.toString() + " Second</h2>";
            btn.style.display = "none";
        }
    }, 1000);
}
//]]>
</script>

  </head>


  <body expr:class='&quot;loading&quot; + data:blog.mobileClass' onload='generate()'>
  

  <b:if cond='data:blog.pageType == &quot;index&quot;'>
    <div itemscope='itemscope' itemtype='http://schema.org/Blog' style='display: none;'>
      <meta expr:content='data:blog.title' itemprop='name'/>
      <b:if cond='data:blog.metaDescription'>
        <meta expr:content='data:blog.metaDescription' itemprop='description'/>
      </b:if>
    </div>
  </b:if>

  <div class='body-fauxcolumns'>
    <div class='fauxcolumn-outer body-fauxcolumn-outer'>
    <div class='cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left'>
    <div class='fauxborder-right'/>
    <div class='fauxcolumn-inner'>
    </div>
    </div>
    <div class='cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>
  </div>

  <div class='content'>
  <div class='content-fauxcolumns'>
    <div class='fauxcolumn-outer content-fauxcolumn-outer'>
    <div class='cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left'>
    <div class='fauxborder-right'/>
    <div class='fauxcolumn-inner'>
    </div>
    </div>
    <div class='cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>
  </div>

  <div class='content-outer'>
  <div class='content-cap-top cap-top'>
    <div class='cap-left'/>
    <div class='cap-right'/>
  </div>
  <div class='fauxborder-left content-fauxborder-left'>
  <div class='fauxborder-right content-fauxborder-right'/>
  <div class='content-inner'>

    <header>
    <div class='header-outer'>
    <div class='header-cap-top cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left header-fauxborder-left'>
    <div class='fauxborder-right header-fauxborder-right'/>
    <div class='region-inner header-inner'>
      <b:section class='header' id='header' maxwidgets='1' showaddelement='no'>
        <b:widget id='Header1' locked='false' title='blog safelink (Header)' type='Header' version='1'>
          <b:widget-settings>
            <b:widget-setting name='displayUrl'/>
            <b:widget-setting name='displayHeight'>0</b:widget-setting>
            <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
            <b:widget-setting name='useImage'>false</b:widget-setting>
            <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
            <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
            <b:widget-setting name='displayWidth'>0</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>

  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <b:if cond='data:mobile'>
          <div id='header-inner'>
            <div class='titlewrapper' style='background: transparent'>
              <h1 class='title' style='background: transparent; border-width: 0px'>
                <b:include name='title'/>
              </h1>
            </div>
            <b:include name='description'/>
          </div>
        <b:else/>
          <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                        + &quot;background-position: &quot;                        + data:backgroundPositionStyleStr + &quot;; &quot;                        + data:widthStyleStr                        + &quot;min-height: &quot; + data:height                        + &quot;_height: &quot; + data:height                        + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
            <div class='titlewrapper' style='background: transparent'>
              <h1 class='title' style='background: transparent; border-width: 0px'>
                <b:include name='title'/>
              </h1>
            </div>
            <b:include name='description'/>
          </div>
        </b:if>
    <b:else/>
      <!--Show the image only-->
      <div id='header-inner'>
        <a expr:href='data:blog.homepageUrl' style='display: block'>
          <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
        </a>
        <!--Show the description-->
        <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
          <b:include name='description'/>
        </b:if>
      </div>
    </b:if>
  <b:else/>

  </b:if>
</b:includable>
          <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
          <b:includable id='title'>
  <b:if cond='data:blog.url == data:blog.homepageUrl'>
    <data:title/>
  <b:else/>
    <a expr:href='data:blog.homepageUrl'><data:title/></a>
  </b:if>
</b:includable>
        </b:widget>
      </b:section>
    </div>
    </div>
    <div class='header-cap-bottom cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>

    </header>

<div style='float:left;width:100%;margin:0 auto 0 auto;background:#2EA9DA;border-bottom:2px solid #000000;'>
<div id='nav'> 
<ul>
<li><a href='#'/></li>
  <li><a href='#'/></li> 
<li><a href='#'/></li> 
<li><a href='#'/></li> 
</ul> 
</div> 
</div>

    <div class='clear'/> 

    <div class='tabs-outer'>
    <div class='tabs-cap-top cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left tabs-fauxborder-left'>
    <div class='fauxborder-right tabs-fauxborder-right'/>
    <div class='region-inner tabs-inner'>
      <b:section class='tabs' id='crosscol' maxwidgets='1' showaddelement='yes'/>
      <b:section class='tabs' id='crosscol-overflow' showaddelement='no'/>
    </div>
    </div>
    <div class='tabs-cap-bottom cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>

    <div class='main-outer'>








    
    <div class='fauxborder-left main-fauxborder-left'>
    <div class='fauxborder-right main-fauxborder-right'/>
    <div class='region-inner main-inner'>






      <div class='columns fauxcolumns'>

        <div class='fauxcolumn-outer fauxcolumn-center-outer'>
        <div class='cap-top'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        <div class='fauxborder-left'>
        <div class='fauxborder-right'/>
        <div class='fauxcolumn-inner'>
        </div>
        </div>
        <div class='cap-bottom'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        </div>

        <div class='fauxcolumn-outer fauxcolumn-left-outer'>
        <div class='cap-top'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        <div class='fauxborder-left'>
        <div class='fauxborder-right'/>
        <div class='fauxcolumn-inner'>
        </div>
        </div>
        <div class='cap-bottom'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        </div>

        <div class='fauxcolumn-outer fauxcolumn-right-outer'>
        <div class='cap-top'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        <div class='fauxborder-left'>
        <div class='fauxborder-right'/>
        <div class='fauxcolumn-inner'>
        </div>
        </div>
        <div class='cap-bottom'>
          <div class='cap-left'/>
          <div class='cap-right'/>
        </div>
        </div>

        <!-- corrects IE6 width calculation -->
        <div class='columns-inner'>

        <div class='column-center-outer'>
        <div class='column-center-inner'>
          <b:section class='main' id='main' showaddelement='no'>
            <b:widget id='HTML2' locked='false' mobile='yes' title='' type='HTML'>
              <b:widget-settings>
                <b:widget-setting name='content'>&lt;script type=&quot;text/javascript&quot;&gt;
    google_ad_client = &quot;ca-pub-9564135204892184&quot;;
google_ad_host = &quot;pub-1556223355139109&quot;;
    google_ad_slot = &quot;6410015163&quot;;
    google_ad_width = 336;
    google_ad_height = 280;
&lt;/script&gt;
&lt;!-- Iklan Text --&gt;
&lt;script type=&quot;text/javascript&quot;
src=&quot;//pagead2.googlesyndication.com/pagead/show_ads.js&quot;&gt;
&lt;/script&gt;</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
            </b:widget>
            <b:widget id='Blog1' locked='false' title='Posting Blog' type='Blog' version='1'>
              <b:widget-settings>
                <b:widget-setting name='showDateHeader'>false</b:widget-setting>
                <b:widget-setting name='style.textcolor'>#444444</b:widget-setting>
                <b:widget-setting name='showShareButtons'>false</b:widget-setting>
                <b:widget-setting name='authorLabel'>By</b:widget-setting>
                <b:widget-setting name='showCommentLink'>false</b:widget-setting>
                <b:widget-setting name='style.urlcolor'>#444444</b:widget-setting>
                <b:widget-setting name='showAuthor'>false</b:widget-setting>
                <b:widget-setting name='style.linkcolor'>#444444</b:widget-setting>
                <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
                <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                <b:widget-setting name='showLabels'>false</b:widget-setting>
                <b:widget-setting name='showLocation'>false</b:widget-setting>
                <b:widget-setting name='showTimestamp'>false</b:widget-setting>
                <b:widget-setting name='postsPerAd'>1</b:widget-setting>
                <b:widget-setting name='showBacklinks'>false</b:widget-setting>
                <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='showInlineAds'>false</b:widget-setting>
                <b:widget-setting name='showReactions'>false</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main' var='top'>
  <b:if cond='data:mobile == &quot;false&quot;'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <data:defaultAdStart/>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isDateStart and data:post.isFirstPost == &quot;false&quot;'>
          &lt;/div&gt;&lt;/div&gt;
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>
        <b:if cond='data:post.dateHeader'>
          <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>
          <b:include data='post' name='post'/>
          <b:include cond='data:blog.pageType == &quot;static_page&quot; or data:blog.pageType == &quot;item&quot;' data='post' name='comment_picker'/>
        </div>
        <b:if cond='data:post.includeAd'>
          <b:if cond='data:post.isFirstPost'>
            <data:defaultAdEnd/>
          <b:else/>
            <data:adEnd/>
          </b:if>
          <div class='inline-ad'>
            <data:adCode/>
          </div>
          <data:adStart/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
      <data:adEnd/>
    </div>

    <!-- navigation -->
    <b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>

  <b:else/>
    <b:include name='mobile-main'/>
  </b:if>

  <b:if cond='data:top.showDummy'>
    <data:top.dummyBootstrap/>
  </b:if>

</b:includable>
              <b:includable id='backlinkDeleteIcon' var='backlink'>
  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
      <img src='//www.blogger.com/img/icon_delete13.gif'/>
    </a>
  </span>
</b:includable>
              <b:includable id='backlinks' var='post'>
  <a name='links'/><h4><data:post.backlinksLabel/></h4>
  <b:if cond='data:post.numBacklinks != 0'>
    <dl class='comments-block' id='comments-block'>
      <b:loop values='data:post.backlinks' var='backlink'>
        <div class='collapsed-backlink backlink-control'>
          <dt class='comment-title'>
            <span class='backlink-toggle-zippy'>&#160;</span>
            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
            <b:include data='backlink' name='backlinkDeleteIcon'/>
          </dt>
          <dd class='comment-body collapseable'>
            <data:backlink.snippet/>
          </dd>
          <dd class='comment-footer collapseable'>
            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
          </dd>
        </div>
      </b:loop>
    </dl>
  </b:if>
  <p class='comment-footer'>
    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
  </p>
</b:includable>
              <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
              <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='//www.blogger.com/img/icon_delete13.gif'/>
      </a>
    </b:if>
  </span>
</b:includable>
              <b:includable id='comment_count_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.canonicalUrl'>
    </span>
  <b:else/>
    <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
      <data:post.commentLabelFull/>:
    </a>
  </b:if>
</b:includable>
              <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <b:include data='post' name='iframe_comments'/>
  <b:else/>
    <b:if cond='data:post.showThreadedComments'>
      <b:include data='post' name='threaded_comments'/>
    <b:else/>
      <b:include data='post' name='comments'/>
    </b:if>
  </b:if>
</b:includable>
              <b:includable id='comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <b:if cond='data:post.allowComments'>
      <h4><data:post.commentLabelFull/>:</h4>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <b:if cond='data:post.hasOlderLinks'>
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
              &#160;
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
              &#160;
          </b:if>

          <data:post.commentRangeText/>

          <b:if cond='data:post.hasNewerLinks'>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </b:if>
        </span>
      </b:if>

      <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
        <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
          <b:loop values='data:post.comments' var='comment'>
            <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
              <b:if cond='data:comment.favicon'>
                <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
              </b:if>
              <a expr:name='data:comment.anchorName'/>
              <b:if cond='data:blog.enabledCommentProfileImages'>
                <data:comment.authorAvatarImage/>
              </b:if>
              <b:if cond='data:comment.authorUrl'>
                <a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.author/></a>
              <b:else/>
                <data:comment.author/>
              </b:if>
              <data:commentPostedByMsg/>
            </dt>
            <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
              <b:if cond='data:comment.isDeleted'>
                <span class='deleted-comment'><data:comment.body/></span>
              <b:else/>
                <p>
                  <data:comment.body/>
                </p>
              </b:if>
            </dd>
            <dd class='comment-footer'>
              <span class='comment-timestamp'>
                <a expr:href='data:comment.url' title='comment permalink'>
                  <data:comment.timestamp/>
                </a>
                <b:include data='comment' name='commentDeleteIcon'/>
              </span>
            </dd>
          </b:loop>
        </dl>
      </div>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
            <data:post.oldestLinkText/>
          </a>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
            <data:post.olderLinkText/>
          </a>
          &#160;
          <data:post.commentRangeText/>
          &#160;
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
            <data:post.newerLinkText/>
          </a>
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
            <data:post.newestLinkText/>
          </a>
        </span>
      </b:if>

      <p class='comment-footer'>
        <b:if cond='data:post.embedCommentForm'>
          <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='comment-form'/>
          <b:else/>
            <data:post.noNewCommentsText/>
          </b:if>
        <b:else/>
          <b:if cond='data:post.allowComments'>
            <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
          </b:if>
        </b:if>

      </p>
    </b:if>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
       <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
    </div>
    </div>
  </div>
</b:includable>
              <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      
    </b:if>

    <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.allowComments'>
          <b:if cond='data:post.feedLinks'>
            <b:include data='post.feedLinks' name='feedLinksBody'/>
          </b:if>
        </b:if>
      </b:loop>
    </div>
  </b:if>
</b:includable>
              <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:feedLinksMsg/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
              <b:includable id='iframe_comments' var='post'>

  <b:if cond='data:post.allowIframeComments'>
    <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
    <div class='cmt_iframe_holder' expr:data-href='data:post.canonicalUrl' expr:data-viewtype='data:post.viewType'/>

    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
    </b:if>
  </b:if>
</b:includable>
              <b:includable id='mobile-index-post' var='post'>
  <div class='mobile-date-outer date-outer'>
    <b:if cond='data:post.dateHeader'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </b:if>

    <div class='mobile-post-outer'>
      <a expr:href='data:post.url'>
        <h3 class='mobile-index-title entry-title' itemprop='name'>
          <data:post.title/>
        </h3>

        <div class='mobile-index-arrow'>&amp;rsaquo;</div>

        <div class='mobile-index-contents'>
          <b:if cond='data:post.thumbnailUrl'>
            <div class='mobile-index-thumbnail'>
              <div class='Image'>
                <img expr:src='data:post.thumbnailUrl'/>
              </div>
            </div>
          </b:if>

          <div class='post-body'>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div style='float:left; margin: 0px 10px 0px 0px'>
      //script unit iklan Adsense Anda yang sudah diparse
</div></b:if>
            <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
          </div>
        </div>

        <div style='clear: both;'/>
      </a>

      <div class='mobile-index-comment'>
        <b:include cond='data:blog.pageType != &quot;static_page&quot;                          and data:post.allowComments                          and data:post.numComments != 0' data='post' name='comment_count_picker'/>
      </div>
    </div>
  </div>
</b:includable>
              <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
              <b:includable id='mobile-nextprev'>
  
  <div class='clear'/>
</b:includable>
              <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
          <b:if cond='data:post.thumbnailUrl'>
            <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
          </b:if>
          <meta expr:content='data:blog.blogId' itemprop='blogId'/>
          <meta expr:content='data:post.id' itemprop='postId'/>

          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
            <data:post.body/>
            <div style='clear: both;'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <span itemprop='name'><data:post.author/></span>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <span itemprop='name'><data:post.author/></span>
                    </span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <meta expr:content='data:post.canonicalUrl' itemprop='url'/>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:if cond='data:blog.pageType != &quot;item&quot;'>
                  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                    <b:if cond='data:post.allowComments'>
                      <b:include data='post' name='comment_count_picker'/>
                    </b:if>
                  </b:if>
                </b:if>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:include data='post' name='comment_picker'/>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:include data='post' name='comment_picker'/>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
              <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    
    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
              <b:includable id='post' var='post'>
  <div class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
    <b:if cond='data:post.firstImageUrl'>
      <meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
    </b:if>
    <meta expr:content='data:blog.blogId' itemprop='blogId'/>
    <meta expr:content='data:post.id' itemprop='postId'/>

    <a expr:name='data:post.id'/>
    <b:if cond='data:post.title'>
   
    </b:if>

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>

    <b:if cond='data:blog.metaDescription == &quot;&quot;'>
      <!-- Then use the post body as the schema.org description,
          for good G+/FB snippeting. -->
      <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='description articleBody'>
        <data:post.body/>
        <div style='clear: both;'/> <!-- clear for photos floats -->
      </div>
    <b:else/>
      <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
        <data:post.body/>
        <div style='clear: both;'/> <!-- clear for photos floats -->
      </div>
    </b:if>

    <b:if cond='data:post.hasJumpLink'>
      <div class='jump-link'>
        <a expr:href='data:post.url + &quot;#more&quot;' expr:title='data:post.title'><data:post.jumpText/></a>
      </div>
    </b:if>

    <div class='post-footer'>
    <div class='post-footer-line post-footer-line-1'><span class='post-icons'>
        <!-- email post links -->
        <b:if cond='data:post.emailPostUrl'>
          <span class='item-action'>
          <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
              <img alt='' class='icon-action' height='13' src='http://img1.blogblog.com/img/icon18_email.gif' width='18'/>
          </a>
          </span>
        </b:if>

        <!-- quickedit pencil -->
        <b:include data='post' name='postQuickEdit'/>
      </span> </div>

      <div class='post-footer-line post-footer-line-2'/>

      <div class='post-footer-line post-footer-line-3'/>
      <b:if cond='data:post.authorAboutMe'>
        <div class='author-profile' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
          <b:if cond='data:post.authorPhoto.url'>
            <img expr:src='data:post.authorPhoto.url' itemprop='image' width='50px'/>
          </b:if>
          <div>
            <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'>
              <span itemprop='name'><data:post.author/></span>
            </a>
          </div>
          <span itemprop='description'><data:post.authorAboutMe/></span>
        </div>
      </b:if>
    </div>
  </div>
</b:includable>
              <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
              <b:includable id='shareButtons' var='post'>
  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showPinterestButton'><a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToPinterestMsg/></span></a></b:if><b:if cond='data:top.showDummy'><div class='goog-inline-block dummy-container'><data:post.dummyTag/></div></b:if>
</b:includable>
              <b:includable id='status-message'>
  <b:if cond='data:navMessage'>
  <div class='status-msg-wrap'>
    <div class='status-msg-body'>
      <data:navMessage/>
    </div>
    <div class='status-msg-border'>
      <div class='status-msg-bg'>
        <div class='status-msg-hidden'><data:navMessage/></div>
      </div>
    </div>
  </div>
  <div style='clear: both;'/>
  </b:if>
</b:includable>
              <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
              <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var config = <data:post.commentConfig/>;

// <![CDATA[
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
            }
          }
        }
        return entry.content.$t;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == config.authorName
              && comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/delete-comment.g?blogID='
               + config.blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
              <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <h4><data:post.commentLabelFull/>:</h4>

    <div class='comments-content'>
      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
      <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
    </div>
    </div>
  </div>
</b:includable>
            </b:widget>
          </b:section>
        </div>
        </div>

        <div class='column-left-outer'>
        <div class='column-left-inner'>
          <aside>
          <macro:include id='main-column-left-sections' name='sections'>
            <macro:param default='0' name='num' value='1'/>
            <macro:param default='sidebar-left' name='idPrefix'/>
            <macro:param default='sidebar' name='class'/>
            <macro:param default='true' name='includeBottom'/>
          </macro:include>
          </aside>
        </div>
        </div>

        <div class='column-right-outer'>
        <div class='column-right-inner'>
          <aside>
          <macro:include id='main-column-right-sections' name='sections'>
            <macro:param default='2' name='num' value='2'/>
            <macro:param default='sidebar-right' name='idPrefix'/>
            <macro:param default='sidebar' name='class'/>
            <macro:param default='true' name='includeBottom'/>
          </macro:include>
          </aside>
        </div>
        </div>

        </div>

        <div style='clear: both'/>
      <!-- columns -->
      </div>

    <!-- main -->
    </div>
    </div>
    <div class='main-cap-bottom cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>

    <footer>
    <div class='footer-outer'>
    <div class='footer-cap-top cap-top'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    <div class='fauxborder-left footer-fauxborder-left'>
    <div class='fauxborder-right footer-fauxborder-right'/>
    <div class='region-inner footer-inner'>

      <div style='text-align:center;'> &#169; 2015
 <a href='http://www.downloadgameswindows.com/'>Download Games Windows</a> Powered by <a href='http://www.blogger.com/'>Blogger</a> </div>

      <macro:include id='footer-sections' name='sections'>
        <macro:param default='2' name='num' value='1'/>
        <macro:param default='footer' name='idPrefix'/>
        <macro:param default='foot' name='class'/>
        <macro:param default='false' name='includeBottom'/>
      </macro:include>
      <!-- outside of the include in order to lock Attribution widget -->
      <b:section class='foot' id='footer-3' showaddelement='no'>
        <b:widget id='Attribution1' locked='false' title='' type='Attribution'>
          <b:widget-settings>
            <b:widget-setting name='copyright'/>
          </b:widget-settings>
          <b:includable id='main'>
    <div class='widget-content' style='text-align: center;'>
      <b:if cond='data:attribution != &quot;&quot;'>
       <data:attribution/>
      </b:if>
    </div>

    <b:include name='quickedit'/>
  </b:includable>
        </b:widget>
      </b:section>
    </div>
    </div>
    <div class='footer-cap-bottom cap-bottom'>
      <div class='cap-left'/>
      <div class='cap-right'/>
    </div>
    </div>
    </footer>

  <!-- content -->
  </div>
  </div>
  <div class='content-cap-bottom cap-bottom'>
    <div class='cap-left'/>
    <div class='cap-right'/>
  </div>
  </div>
  </div>

  <script type='text/javascript'>
    window.setTimeout(function() {
        document.body.className = document.body.className.replace(&#39;loading&#39;, &#39;&#39;);
      }, 10);
  </script>
</body>

<macro:includable id='sections' var='col'>
  <macro:if cond='data:col.num == 0'>
  <macro:else/>
    <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-1&quot;' preferred='yes' showaddelement='yes'/>

    <macro:if cond='data:col.num &gt;= 2'>
      <table border='0' cellpadding='0' cellspacing='0' mexpr:class='&quot;section-columns columns-&quot; + data:col.num'>
      <tbody>
      <tr>
        <td class='first columns-cell'>
          <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-2-1&quot;'/>
        </td>

        <td class='columns-cell'>
          <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-2-2&quot;'/>
        </td>

        <macro:if cond='data:col.num &gt;= 3'>
          <td class='columns-cell'>
            <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-2-3&quot;'/>
          </td>
        </macro:if>

        <macro:if cond='data:col.num &gt;= 4'>
          <td class='columns-cell'>
            <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-2-4&quot;'/>
          </td>
        </macro:if>
      </tr>
      </tbody>
      </table>

      <macro:if cond='data:col.includeBottom'>
        <b:section mexpr:class='data:col.class' mexpr:id='data:col.idPrefix + &quot;-3&quot;' showaddelement='no'/>
      </macro:if>
    </macro:if>
  </macro:if>
</macro:includable>

   



<b:section-contents id='sidebar-left-1'/><b:section-contents id='sidebar-right-1'/><b:section-contents id='sidebar-right-2-1'>
  <b:widget id='HTML3' locked='false' mobile='yes' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;script type=&quot;text/javascript&quot;&gt;
    google_ad_client = &quot;ca-pub-9564135204892184&quot;;
google_ad_host = &quot;pub-1556223355139109&quot;;
    google_ad_slot = &quot;6295476859&quot;;
    google_ad_width = 336;
    google_ad_height = 280;
&lt;/script&gt;
&lt;!-- Iklan gambar dan teks --&gt;
&lt;script type=&quot;text/javascript&quot;
src=&quot;//pagead2.googlesyndication.com/pagead/show_ads.js&quot;&gt;
&lt;/script&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML5' locked='false' mobile='yes' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;div dir=&quot;ltr&quot; style=&quot;text-align: left;&quot; trbidi=&quot;on&quot;&gt;
&lt;center&gt;
&lt;h2 id=&quot;daplong&quot; style=&quot;color: daplong;&quot;&gt;
Please Wait...&lt;/h2&gt;
&lt;script src=&quot;https://drive.google.com/open?id=0B5n961kFcYvlVDQwN1YtNGNKZkk&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt; &lt;script type=&quot;text/javascript&quot;&gt;
var currentURL=location.href;
var str = currentURL;
var res = str.replace(&quot;http://jsgbloger.blogspot.com/2017/08/please-wait.htmlurl=&quot;, &quot;&quot;);
document.write(&#39;&lt;button id=&quot;download&quot; class=&quot;Visit_Link&quot; onclick=&quot;changeLink();&quot; style=&quot;display: none;text-align:justify;margin-bottom:2px;&quot;&gt;&gt;&gt;&lt;/button&gt;&#39;)
&lt;/script&gt;&lt;/center&gt;
&lt;/div&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='HTML4' locked='false' Mobile='yes' title='' type='HTML'>
    <b:widget-settings>
      <b:widget-setting name='content'>&lt;script type=&quot;text/javascript&quot;&gt;
    google_ad_client = &quot;ca-pub-9564135204892184&quot;;
google_ad_host = &quot;pub-1556223355139109&quot;;
    google_ad_slot = &quot;6295476859&quot;;
    google_ad_width = 336;
    google_ad_height = 280;
&lt;/script&gt;
&lt;!-- Iklan gambar dan teks --&gt;
&lt;script type=&quot;text/javascript&quot;
src=&quot;//pagead2.googlesyndication.com/pagead/show_ads.js&quot;&gt;
&lt;/script&gt;</b:widget-setting>
    </b:widget-settings>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
</b:section-contents><b:section-contents id='sidebar-right-2-2'/><b:section-contents id='sidebar-right-3'/><b:section-contents id='footer-1'>
  <b:widget id='ContactForm1' locked='false' title='Contact' type='ContactForm'>
    <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='contact-form-widget'>
    <div class='form'>
      <form name='contact-form'>
        <p/>
        <data:contactFormNameMsg/>
        <br/>
        <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' type='text' value=''/>
        <p/>
        <data:contactFormEmailMsg/> <span style='font-weight: bolder;'>*</span>
        <br/>
        <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' type='text' value=''/>
        <p/>
        <data:contactFormMessageMsg/> <span style='font-weight: bolder;'>*</span>
        <br/>
        <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
        <p/>
        <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
        <p/>
        <div style='text-align: center; max-width: 222px; width: 100%'>
          <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
          <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
        </div>
      </form>
    </div>
  </div>
  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='Navbar1' locked='false' title='Navbar' type='Navbar' version='1'>
    <b:includable id='main'>&lt;script type=&quot;text/javascript&quot;&gt;
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener(&#39;load&#39;,
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent(&#39;onload&#39;, function(){ object[attribute] = val; });
      }
    }
  &lt;/script&gt;
&lt;div id=&quot;navbar-iframe-container&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://apis.google.com/js/plusone.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
      gapi.load(&quot;gapi.iframes:gapi.iframes.style.bubble&quot;, function() {
        if (gapi.iframes &amp;&amp; gapi.iframes.getContext) {
          gapi.iframes.getContext().openChild({
              url: &#39;https://www.blogger.com/navbar.g?targetBlogID\x3d4689679727726790632\x26blogName\x3dblog+safelink\x26publishMode\x3dPUBLISH_MODE_BLOGSPOT\x26navbarType\x3dDISABLED\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttps://jsgbloger.blogspot.com/search\x26blogLocale\x3din\x26v\x3d2\x26homepageUrl\x3dhttps://jsgbloger.blogspot.com/\x26vt\x3d1321478028242530419&#39;,
              where: document.getElementById(&quot;navbar-iframe-container&quot;),
              id: &quot;navbar-iframe&quot;
          });
        }
      });
    &lt;/script&gt;&lt;script type=&quot;text/javascript&quot;&gt;
(function() {
var script = document.createElement(&#39;script&#39;);
script.type = &#39;text/javascript&#39;;
script.src = &#39;//pagead2.googlesyndication.com/pagead/js/google_top_exp.js&#39;;
var head = document.getElementsByTagName(&#39;head&#39;)[0];
if (head) {
head.appendChild(script);
}})();
&lt;/script&gt;
</b:includable>
  </b:widget>
  <b:widget id='HTML1' locked='false' title='' type='HTML'>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
</b:section-contents></html>