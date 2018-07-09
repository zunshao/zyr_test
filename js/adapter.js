(function() {
    var oHtml = document.documentElement;
    getFont();
    window.onresize = function () {
        getFont();

    };
    function getFont() {
        var screenWidth = oHtml.clientWidth;
        if (screenWidth <= 320) {

            oHtml.style.fontSize = '20px';
        } else if (screenWidth >= 480) {

            oHtml.style.fontSize = '30px';

        } else {

            oHtml.style.fontSize = screenWidth / (320 / 20) + 'px';

        }
    }
})()
