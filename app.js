var SCE = {};
SCE.Loader = 0;
SCE.Browser = {};
SCE.CodeEditor = {};
SCE.CodeEditor.HTML = {};
SCE.CodeEditor.CSS = {};
SCE.CodeEditor.JS = {};


(function () {
    
    $('sui-loader').html('<div id="loadingbar"></div>');
    $(document).ready(function () {

        $('sui-toolbar').load("sections/toolbar/toolbar.html", function () {
                $('#loadingbar').css('width','30%');
            alert(1);

        });   
        
        $('sui-browser').load("sections/browser/browser.html", function () {
                $('#loadingbar').css('width','60%');
            alert(2);
        });
        
        $('sui-codeeditor').load("sections/codeeditor/codeeditor.html", function () {
                $('#loadingbar').css('width','100%');
            alert(3);
        });


    });
})();
