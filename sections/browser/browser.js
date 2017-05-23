(function () {

    $(document).ready(function () {
        UIFACTORY.Browser = $('#browsercontent');
        UIFACTORY.Browser.DocumentHTML = $('#browsercontent')[0].contentWindow.document.documentElement.innerHTML;
        UIFACTORY.Browser.Body = $('#browsercontent').contents().find('body');
        UIFACTORY.Browser.Head = $('#browsercontent').contents().find('head');
        UIFACTORY.Browser.Head.append("<style id='cssstyle'></style>");
        UIFACTORY.Browser.Head.append("<script id='jsscript'>function execute(c){eval(c)}</script>");
    });

})();