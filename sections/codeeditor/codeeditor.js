(function () {

    $(document).ready(function () {
        initHTML();
        initCSS();
        initJS();
    });

    function initHTML() {
        UIFACTORY.CodeEditor.HTML.Editor = ace.edit("htmlcode");
        UIFACTORY.CodeEditor.HTML.Editor.setReadOnly(false);
        UIFACTORY.CodeEditor.HTML.Editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
        UIFACTORY.CodeEditor.HTML.Editor.setValue(`    
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>



</body>
</html>       
        `);
        UIFACTORY.CodeEditor.HTML.Editor.setTheme("ace/theme/chrome");
        UIFACTORY.CodeEditor.HTML.Session = UIFACTORY.CodeEditor.HTML.Editor.getSession();
        UIFACTORY.CodeEditor.HTML.Session.setMode("ace/mode/html");
        UIFACTORY.CodeEditor.HTML.Session.on('change', function (e) {
            UIFACTORY.Browser.contents().find('body').html(UIFACTORY.CodeEditor.HTML.Session.getValue());
        });
    }


    function initCSS() {
        UIFACTORY.CodeEditor.CSS.Editor = ace.edit("csscode");
        UIFACTORY.CodeEditor.CSS.Editor.setReadOnly(false);
        UIFACTORY.CodeEditor.CSS.Editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
        UIFACTORY.CodeEditor.CSS.Editor.setValue(`body{
    background-color:white;
}
`);

        UIFACTORY.CodeEditor.CSS.Editor.setTheme("ace/theme/chrome");
        UIFACTORY.CodeEditor.CSS.Session = UIFACTORY.CodeEditor.CSS.Editor.getSession();
        UIFACTORY.CodeEditor.CSS.Session.setMode("ace/mode/css");

        UIFACTORY.Browser.contents().find('#cssstyle').text(UIFACTORY.CodeEditor.CSS.Session.getValue());
        UIFACTORY.CodeEditor.CSS.Session.on('change', function (e) {
            UIFACTORY.Browser.contents().find('#cssstyle').text(UIFACTORY.CodeEditor.CSS.Session.getValue());
        });
    }








    function initJS() {
        UIFACTORY.CodeEditor.JS.Editor = ace.edit("jscode");
        UIFACTORY.CodeEditor.JS.Editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });

        UIFACTORY.CodeEditor.JS.Editor.setReadOnly(false);
        UIFACTORY.CodeEditor.JS.Editor.setTheme("ace/theme/chrome");
        UIFACTORY.CodeEditor.JS.Session = UIFACTORY.CodeEditor.JS.Editor.getSession();
        UIFACTORY.CodeEditor.JS.Session.setMode("ace/mode/javascript");
        UIFACTORY.CodeEditor.JS.Session.on('change', function (e) {
           

        });

        $(UIFACTORY.Browser.Body).click(function (e) {
            UIFACTORY.Browser[0].contentWindow.execute(UIFACTORY.CodeEditor.JS.Session.getValue());
        });
    }



})();