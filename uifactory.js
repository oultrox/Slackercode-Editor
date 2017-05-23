var UIFACTORY = {};
UIFACTORY.Browser = {};
UIFACTORY.CodeEditor = {};
UIFACTORY.CodeEditor.HTML = {};
UIFACTORY.CodeEditor.CSS = {};
UIFACTORY.CodeEditor.JS = {};


(function () {
    $(document).ready(function () {


        $('sui-browser').load("sections/browser/browser.html", function () {

        });
        
        $('sui-codeeditor').load("sections/codeeditor/codeeditor.html", function () {

        });
        $('sui-toolbar').load("sections/toolbar/toolbar.html", function () {

        });
  



       


    });
})();