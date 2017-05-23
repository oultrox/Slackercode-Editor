(function () {

    $(document).ready(function () {
        SCE.Browser = $('#browsercontent');
        SCE.Browser.DocumentHTML = $('#browsercontent')[0].contentWindow.document.documentElement.innerHTML;
        SCE.Browser.Body = $('#browsercontent').contents().find('body');
        SCE.Browser.Head = $('#browsercontent').contents().find('head');
        SCE.Browser.Head.append("<style id='cssstyle'></style>");
        SCE.Browser.Head.append("<script id='jsscript'>function execute(c){eval(c)}</script>");
    });

})();
