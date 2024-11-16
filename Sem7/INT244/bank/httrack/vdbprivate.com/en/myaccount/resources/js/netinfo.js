function handleComplete(xhr, status, args){

}

function handleCompleteUserId(xhr, status, args){
    if(args.showConfirmDialog){
        confirmChangeUserAlias.show();
        waitingDialog.hide();
    }
    else{
        waitingDialog.hide();
    }
}

function handleCompleteBrowserCompatibility(xhr, status, args){
    if(args.browserWarning){
        browserWarning.show();
        waitingDialog.hide();
    }
    else{
        waitingDialog.hide();
    }
}


function doMailto() {
    document.location.href = 'mailto:ebanking@fnfdata.com';
}


function openAndroid()
{
    NewWindow = window.open('https://play.google.com/store/apps/details?id=com.alpha.pass&amp;feature=search_result#?t=W251bGwsMSwxLDEsImNvbS5hbHBoYS5wYXNzIl0',"_blank","toolbar=no,menubar=0,status=0,copyhistory=0,scrollbars=yes,resizable=1,location=0,Width=1500,Height=760") ;
    return;
}
function openIphone()
{
    NewWindow = window.open('https://itunes.apple.com/app/alpha-safe-access/id598920237?mt=8',"_blank","toolbar=no,menubar=0,status=0,copyhistory=0,scrollbars=yes,resizable=1,location=0,Width=1500,Height=760") ;
    return;
}
function openWindows()
{
    NewWindow = window.open('https://www.windowsphone.com/en-us/store/app/alpha-safe-access/ae7c22f3-9a3d-470d-a6c6-fffd76fca1e8',"_blank","toolbar=no,menubar=0,status=0,copyhistory=0,scrollbars=yes,resizable=1,location=0,Width=1500,Height=760") ;
    return;
}

function openPdfForm()
{
    NewWindow = window.open('https://online.alphabank.com.cy/PDF/Token_Application_EN.pdf',"_blank","toolbar=no,menubar=0,status=0,copyhistory=0,scrollbars=yes,resizable=1,location=0,Width=1500,Height=760") ;
    return;
}

function getTransactionsMass()
{
    document.getElementById("showTransactions").click();
}

function openAegeanAirlinesWebsite()
{
    NewWindow = window.open('http://www.aegeanair.com',"_blank","toolbar=no,menubar=0,status=0,copyhistory=0,scrollbars=yes,resizable=1,location=0,Width=1500,Height=760") ;
    return;
}

function get_browser(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[0];
}
function get_browser_version(){
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M[1];
}
     
     
function check_Browser(){    
    var browserName=get_browser();
    var browser_version=get_browser_version();
    
                
    var subVersion = browser_version.substring(0,2);
    
    var s = ".";
    if(subVersion.indexOf(".") != -1){
       subVersion = browser_version.substring(0,1); 
    }
    
    if (browserName=="MSIE")
    {
        if(subVersion<8){
            alert("Web browser compatibility problem! \n To login to Alpha Express Banking, you need one of the following web browsers: \n - Microsoft Internet Explorer (IE) 8 or higher (http://windows.microsoft.com/en-us/internet-explorer/download-ie-MCM) copy and paste the link \n - Firefox 20 or higher (https://www.mozilla.org) copy and paste the link \n - Chrome 26 or higher (https://www.google.com) copy and paste the link \n - Safari 6 or higher (http://support.apple.com/downloads/#safari) copy and paste the link. \n We strongly recommend upgrading your web browser before your next login. ");
        }
    }else if(browserName=="Chrome")
    {
        if(subVersion<29){
           alert("Web browser compatibility problem! \n To login to Alpha Express Banking, you need one of the following web browsers: \n - Microsoft Internet Explorer (IE) 8 or higher (http://windows.microsoft.com/en-us/internet-explorer/download-ie-MCM) copy and paste the link \n - Firefox 20 or higher (https://www.mozilla.org) copy and paste the link \n - Chrome 26 or higher (https://www.google.com) copy and paste the link \n - Safari 6 or higher (http://support.apple.com/downloads/#safari) copy and paste the link. \n We strongly recommend upgrading your web browser before your next login. ");
        }
    }else if(browserName=="Firefox")
    {
        if(subVersion<20){
            alert("Web browser compatibility problem! \n To login to Alpha Express Banking, you need one of the following web browsers: \n - Microsoft Internet Explorer (IE) 8 or higher (http://windows.microsoft.com/en-us/internet-explorer/download-ie-MCM) copy and paste the link \n - Firefox 20 or higher (https://www.mozilla.org) copy and paste the link \n - Chrome 26 or higher (https://www.google.com) copy and paste the link \n - Safari 6 or higher (http://support.apple.com/downloads/#safari) copy and paste the link. \n We strongly recommend upgrading your web browser before your next login. ");
        }
    }
    else if(browserName=="Safari")
    {
        if(subVersion<5){
            alert("Web browser compatibility problem! \n To login to Alpha Express Banking, you need one of the following web browsers: \n - Microsoft Internet Explorer (IE) 8 or higher (http://windows.microsoft.com/en-us/internet-explorer/download-ie-MCM) copy and paste the link \n - Firefox 20 or higher (https://www.mozilla.org) copy and paste the link \n - Chrome 26 or higher (https://www.google.com) copy and paste the link \n - Safari 6 or higher (http://support.apple.com/downloads/#safari) copy and paste the link. \n We strongly recommend upgrading your web browser before your next login. ");
        }
    }
}

function openPdfIpad()
{
    NewWindow = window.open('http://www.alphabank.com.cy/pdf/aeb_en.pdf',"_blank","toolbar=no,menubar=0,status=0,copyhistory=0,scrollbars=yes,resizable=1,location=0,Width=1500,Height=760") ;
    return;
}
                
function checkSessionTimeoutRefresh(formName){
     // Set timout little less than actual timeout so as to give user time to react.

     timeout = 420000; // (7 * 60 * 1000) Milli-Seconds (for 10 minute timeout - warning in 7 minutes) 420000
     alertTimerId = setTimeout("location.reload(true);", timeout); 
 }
 
 function getTransactionsMass(){
     document.getElementById('showTransactions').click();
 }
 
 function createChart(line1,minValue,maxValue){
    // create graph"
        line2=[['17-Jan-11', 15500], ['18-Feb-11', 19000], ['19-Nov-11', 24000], ['20-Nov-11', 22000], ['21-Nov-11', 23000], ['22-Nov-11', 19000], ['23-Nov-11', 17000], ['24-Nov-11', 20765], ['25-Nov-11', 26000], ['26-Nov-11', 20000], ['27-Nov-11', 21000]];
//    var testline = jQuery.parseJSON(document.getElementById('form1:dataGridTest:0:test').value);
    var plot1 = $.jqplot('graph', [line1], {
        grid: {
            backgroundColor: "transparent",
            shadow: false,
            drawBorder: false
        },
        seriesDefaults : {
            markerRenderer: $.jqplot.ImageMarkerRenderer
        },
        series: [{
            color: "#00529c",
            lineWidth: 3,
            shadow: false,
            fill: true,
            fillAndStroke: true,
            fillColor: "rgba(255, 221, 78, 0.2)",
            showMarker: true,
            markerOptions: {
                color: "#00aeef",
                show: true,
                style: 'circle',
                lineWidth: 3,
                size: 3,
                shadow: false
            }
        }],
        axes:{
            xaxis:{
                renderer:$.jqplot.DateAxisRenderer,
                tickOptions: { 
                    formatString:'%b&nbsp;%#d',
                    showMark: false
                },
                min:minValue,
                max:maxValue
            },
            yaxis:{
                tickOptions:{
                    formatString:'%d',
                    showMark: false
                }
            }
        },
        highlighter: {
            show: true,
            tooltipLocation: 'n',
            tooltipOffset: 10,
            tooltipAxes: 'y',
            useAxesFormatters: false,
            tooltipFormatString: '&euro; %P',
            sizeAdjust: 2
        },
        cursor: {
            show: false
        }
    });
}

function togglePrint(){
    $('.print-buttons').slideToggle();
}


$(document).ready(function() {
    $(".icon-dashboard").parent(".ui-menuitem-link").attr("href", "DashboardPage.xhtml?cs=1");
//    $(".icon-dashboard").parent(".ui-menuitem-link").onclick(function(){alert('')});
    $('.ui-menu-parent').hover(function (){
//        if($(this).hasClass("top-level")){
            var pos = $(this).offset();
            if ($(window).width()<pos.left + 270){
                $(this).find('.ui-menu-child').css('left','-162px')
            };
        /*}else{ //in case you have more submenus who are not top level e.x. level 2 
            pos = $(this).offset();
            if ($(window).width()<pos.left + 500){
                $(this).find('.ui-menu-child').css('left','-188px')
            };
        }*/
    },
        function(){}
    );
    
    
    /*$('input').on("keyup keypress", function(e) {
  	  var code = e.keyCode || e.which; 
  	  if (code  == 13) {               
  	    e.preventDefault();
  	   $('.confirmBtn').click();
  	    return false;
  	  }
  	});*/
             
       
})

function scrollToFirstMessage()
{
	 $('html,body').animate({scrollTop: 0,scrollLeft: 300}, 500);
}

function getId(){
		this.empty = "00000000-0000-0000-0000-000000000000";
		return (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1).toUpperCase();
	   
	}


$( document ).delegate(".myOnlineBankingClick","click",function(){ window.open("DashboardPage.xhtml?cs=1","_self");});

//Responsive Design - SEARCH FUNCTION (Sidebar)

$(document).ready(function(){
var $list = $('.cd-panel.from-left .ui-menu-list');

jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});


$('.filter-input').keyup(function() {
	var filter = $(this).val();
	if (filter) {
	
		  $list.find("h3:not(:Contains(" + filter + "))").parent().slideUp();
		  $list.find("a:not(:Contains(" + filter + "))").parent().slideUp();
		  $list.find("a:not(:Contains(" + filter + "))").parent().slideUp();
	      $list.find("a:Contains(" + filter + ")").parent().slideDown();
	   	  $list.find("h3:Contains(" + filter + ")").parent().slideDown();
	    } else {
	      $list.find("li").slideDown();
	    }
});


//Responsive Design - SIDEBAR

//open sidebar

$( document ).delegate('.cd-btn','click',function(event){
	event.preventDefault();
	$list.find("li").slideDown();

	$('html').css('overflow', 'hidden');

	$('.cd-panel.from-right').css('height','0px');
	$('.cd-panel.from-left').addClass('is-visible');

});

$( document ).delegate('.user-btn','click',function(event){
	event.preventDefault();

	$('html').css('overflow', 'hidden');
	$('.cd-panel.from-left').css('height','0px');
	
	$('.cd-panel.from-right.userOptionsRT').addClass('is-visible');
});

$( document ).delegate('.notifications-btn','click',function(event){
	event.preventDefault();

	$('html').css('overflow', 'hidden');
	$('.cd-panel.from-left').css('height','0px');

	$('.cd-panel.from-right.notificationsRT').addClass('is-visible');
});

$( document ).delegate('.log-out-btn','click',function(event){
	event.preventDefault();

	$('html').css('overflow', 'hidden');
	$('.cd-panel.from-left').css('height','0px');
	
	$('.cd-panel.from-right.logoutRT').addClass('is-visible');
});

//close sidebar
$( document ).delegate('.cd-panel','click',function(event){
	if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) {
		event.preventDefault();

		$('html').css('overflow-y', 'scroll');
		$('.cd-panel').removeClass('is-visible');
		$('.cd-panel').css('height','100%');
	}
});
});


$( document ).delegate('#form1','pageinit',function(event){
   
	//open sidebar
	$('.cd-btn').delegate('mousedown touchstart', function(event){
	event.preventDefault();
	$('.cd-panel').addClass('is-visible');
	});

	//close sidebar 
	$('.cd-panel').delegate('mousedown touchstart', function(event){
	if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
		$('.cd-panel').removeClass('is-visible');
		event.preventDefault();
	}
	});
});



$( document ).delegate('input',"keyup keypress", function(e) {
	  var code = e.keyCode || e.which; 
	  
	  if (code  == 13) {
		//alert('login');
	    e.preventDefault();
	   	$('.confirmBtn').focus();
	   	$('.confirmBtn').click();
	   	//PF('.statEURialog').show();
	    return false;
	  }
	});
