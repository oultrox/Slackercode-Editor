(function () {


    $(document).ready(function () {
        initExport();
        initSettings();





    });


    function initExport() {
        $('#settingsbutton').click(function (e) { // Show modal on settings button click
            $('#settingsmodal').modal('show');
        });
        $('#exportbutton').click(function (e) { // Download files
            download('index.html', SCE.CodeEditor.HTML.Editor.getValue());
            download('style.css', SCE.CodeEditor.CSS.Editor.getValue());
            download('app.js', SCE.CodeEditor.JS.Editor.getValue());
        });
    }

    function initSettings() {
        $('#filedropdown').dropdown({});
        $('#globaltheme').dropdown('set selected', 'Light');
        $('#editortheme').dropdown('set selected', 'Chrome');
        $('#settingsmodal').modal('setting', 'closable', false);
        
        $('#globaltheme').dropdown({ // Switch global theme accordingly
            onChange: function (value, text, $selectedItem) {
                switch (value) {
                    case "light":
                        $("#toolbar").removeClass("inverted");
                        $("#editortop").removeClass("inverted");
                        $("#editortab1").removeClass("inverted");
                        $("#editortab2").removeClass("inverted");
                        $("#editortab3").removeClass("inverted");
                        $("body").css("background-color", "#ffffff");
                        break;
                    case "dark":
                        $("#toolbar").addClass("inverted");
                        $("#editortop").addClass("inverted");
                        $("#editortab1").addClass("inverted");
                        $("#editortab2").addClass("inverted");
                        $("#editortab3").addClass("inverted");
                        $("body").css("background-color", "#1b1c1d");
                        break;
                };
            }
        });




        
        $('#editortheme').dropdown({  // Switch editor theme accordingly
            onChange: function (value, text, $selectedItem) {
                SCE.CodeEditor.HTML.Editor.setTheme("ace/theme/" + $selectedItem.attr("data-value"));
                SCE.CodeEditor.CSS.Editor.setTheme("ace/theme/" + $selectedItem.attr("data-value"));
                SCE.CodeEditor.JS.Editor.setTheme("ace/theme/" + $selectedItem.attr("data-value"));

            }
        });
        

    }


    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

})();
