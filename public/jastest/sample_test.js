(function($){
    // 読み込むHTMLのパス ①
    jasmine.getFixtures().fixturesPath = ./;
    // HTMLの読み込み ②
    var html = readFixtures("index.html");

    // テスト前に実行
    beforeEach(function(){
        // 読み込んだHTMLを適当な要素に突っ込む ③
        $("body").append("<div id=test-wrap></div>");
        $("#test-wrap").html(html);
    });

    // テスト後に実行
    afterEach(function(){
        $("#test-wrap").remove();
    });

    describe(アコーディオンのテスト, function() {
        it(accordion-listが非表示になっている, function(){
            expect($(".accordion-list").css("display")).toEqual("none");
        });
    });
})(jQuery);
