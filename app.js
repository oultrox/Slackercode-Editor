var SCE = {};
SCE.Loader = 0;
SCE.Browser = {};
SCE.CodeEditor = {};
SCE.CodeEditor.HTML = {};
SCE.CodeEditor.CSS = {};
SCE.CodeEditor.JS = {};


(function () {
    $(document).ready(function () {

        $('sui-column-6').addClass('ui loader inverted>');  
        $('sui-browser').load("sections/browser/browser.html", function () {
                
        });
        
        $('sui-codeeditor').load("sections/codeeditor/codeeditor.html", function () {

        });
        $('sui-toolbar').load("sections/toolbar/toolbar.html", function () {

        });

    });
})();
