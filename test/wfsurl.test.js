import WFSUrl from "../wfsurl.js";

let wfsurl = new WFSUrl("https://www.example.com/test");
wfsurl.getCapabilities("1.1.0");

QUnit.module("WFSUrl Tests", function() {

    QUnit.test("Set querys", function(assert) {
        assert.equal(wfsurl.setQuery("request", wfsurl.request, WFSUrl.AND), "&request=getCapabilities");

    })

    QUnit.test("Test getCapabilities Props", function(assert) {
        assert.equal(wfsurl.url.host, "www.example.com");
        assert.equal(wfsurl.request, "getCapabilities");
        assert.equal(wfsurl.version, "1.1.0");
        assert.equal(wfsurl.url.pathname, "/test");
    });

    QUnit.test("Test WFS Url", function(assert) {
        let wfsurlcomplete = new WFSUrl("https://www.example.com/test");
        wfsurlcomplete.getCapabilities("1.1.0");
        assert.equal(wfsurlcomplete.getWFSUrl().toLowerCase(), "https://www.example.com/test?service=wfs&request=getcapabilities&version=1.1.0");
    });

});