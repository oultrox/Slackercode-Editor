(function () {

    $(document).ready(function () {
        initHTML();
        initCSS();
        initJS();
    });

    function initHTML() {
        SCE.CodeEditor.HTML.Editor = ace.edit("htmlcode");
        SCE.CodeEditor.HTML.Editor.setReadOnly(false);
        SCE.CodeEditor.HTML.Editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
        SCE.CodeEditor.HTML.Editor.setValue(`    
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
        SCE.CodeEditor.HTML.Editor.setTheme("ace/theme/chrome");
        SCE.CodeEditor.HTML.Session = SCE.CodeEditor.HTML.Editor.getSession();
        SCE.CodeEditor.HTML.Session.setMode("ace/mode/html");
        SCE.CodeEditor.HTML.Session.on('change', function (e) {
            SCE.Browser.contents().find('body').html(SCE.CodeEditor.HTML.Session.getValue());
        });
    }


    function initCSS() {
        SCE.CodeEditor.CSS.Editor = ace.edit("csscode");
        SCE.CodeEditor.CSS.Editor.setReadOnly(false);
        SCE.CodeEditor.CSS.Editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
        SCE.CodeEditor.CSS.Editor.setValue(`body{
    background-color:white;
}
`);

        SCE.CodeEditor.CSS.Editor.setTheme("ace/theme/chrome");
        SCE.CodeEditor.CSS.Session = SCE.CodeEditor.CSS.Editor.getSession();
        SCE.CodeEditor.CSS.Session.setMode("ace/mode/css");

        SCE.Browser.contents().find('#cssstyle').text(SCE.CodeEditor.CSS.Session.getValue());
        SCE.CodeEditor.CSS.Session.on('change', function (e) {
            SCE.Browser.contents().find('#cssstyle').text(SCE.CodeEditor.CSS.Session.getValue());
        });
    }








    function initJS() {
        SCE.CodeEditor.JS.Editor = ace.edit("jscode");
        SCE.CodeEditor.JS.Editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });

        SCE.CodeEditor.JS.Editor.setReadOnly(false);
        SCE.CodeEditor.JS.Editor.setTheme("ace/theme/chrome");
        SCE.CodeEditor.JS.Session = SCE.CodeEditor.JS.Editor.getSession();
        SCE.CodeEditor.JS.Session.setMode("ace/mode/javascript");
        SCE.CodeEditor.JS.Session.on('change', function (e) {
           

        });

        $(SCE.Browser.Body).click(function (e) {
            SCE.Browser[0].contentWindow.execute(SCE.CodeEditor.JS.Session.getValue());
        });
    }



})();
