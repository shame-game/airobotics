(function () {
    var run = function () {
        if (typeof window.LadiPageScript == "undefined" || typeof window.ladi == "undefined" || window.ladi == undefined) {
            setTimeout(run, 100);
            return;
        }
        window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
        window.LadiPageScript.runtime.ladipage_id = '64b11295e8c14e00129d79f0';
        window.LadiPageScript.runtime.publish_platform = 'LADIPAGEDNS';
        window.LadiPageScript.runtime.version = '1698289512621';
        window.LadiPageScript.runtime.cdn_url = 'https://w.ladicdn.com/v2/source/';
        window.LadiPageScript.runtime.DOMAIN_SET_COOKIE = ["mindx.edu.vn"];
        window.LadiPageScript.runtime.DOMAIN_FREE = ["preview.ladipage.me", "ldp.link", "ldp.page"];
        window.LadiPageScript.runtime.bodyFontSize = 12;
        window.LadiPageScript.runtime.store_id = "5cefbc1ed062e8345a24dfe8";
        window.LadiPageScript.runtime.time_zone = 7;
        window.LadiPageScript.runtime.currency = "VND";
        window.LadiPageScript.runtime.convert_replace_str = true;
        window.LadiPageScript.runtime.desktop_width = 960;
        window.LadiPageScript.runtime.mobile_width = 420;
        window.LadiPageScript.runtime.formdata = true;
        window.LadiPageScript.runtime.tracking_button_click = true;
        window.LadiPageScript.runtime.lang = "vi";
        window.LadiPageScript.run(true);
        window.LadiPageScript.runEventScroll();
    };
    run();
})();