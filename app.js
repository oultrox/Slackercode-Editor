var SCE = {};
SCE.Loader = 0;
SCE.Browser = {};
SCE.CodeEditor = {};
SCE.CodeEditor.HTML = {};
SCE.CodeEditor.CSS = {};
SCE.CodeEditor.JS = {};


(function () {
    
    $('sui-loader').html('<div style="width:inherit" class="ui teal progress"><div class="bar"></div><div class="label">Loading...</div></div>');
    $('.progress').progress({percent: 0});
    $(document).ready(function () {

        $('sui-toolbar').load("sections/toolbar/toolbar.html", function () {
                $('.progress').progress({percent: 30});
           

        });   
        
        $('sui-browser').load("sections/browser/browser.html", function () {
                $('.progress').progress({percent: 60});
            
        });
        
        $('sui-codeeditor').load("sections/codeeditor/codeeditor.html", function () {
                $('.progress').progress({percent: 100});
                setTimeout(function(){$('sui-loader').fadeOut(600,function(){
                    $('sui-loader').remove();
                    $('sui-column-12').fadeIn(600);
                    $('sui-column-6').fadeIn(600);
                    $('sui-column-6').fadeIn(600);
                });},600);
                
        });


    });
})();
