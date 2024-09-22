
import WFSUrl from "../wfsurl.js";

let wfsurl = new WFSUrl("https://www.example.com/test");
wfsurl.setCapabilitiesURL("1.1.0");

QUnit.module("WFS Tests", function() {

    QUnit.test("Set querys", function(assert) {
        assert.equal(wfsurl.setQuery("request", wfsurl.request, WFSUrl.AND), "&request=getCapabilities");

    })

    QUnit.test("Test setCapabilitiesURL Props", function(assert) {
        assert.equal(wfsurl.url.host, "www.example.com");
        assert.equal(wfsurl.request, "getCapabilities");
        assert.equal(wfsurl.version, "1.1.0");
        assert.equal(wfsurl.url.pathname, "/test");
    });


    QUnit.test("Test WFS Url", function(assert) {
        let wfsurlcomplete = new WFSUrl("https://gdi.berlin.de/services/wfs/adressen_berlin");
        wfsurlcomplete.setCapabilitiesURL("2.0");
        assert.equal(wfsurlcomplete.getWFSUrl().toLowerCase(), "https://gdi.berlin.de/services/wfs/adressen_berlin?SERVICE=wfs&REQUEST=GetCapabilities&version=2.0".toLowerCase());
    });

    QUnit.test("Test getCapabilities Ressources", function(assert) {
        const done = assert.async();

        wfsurl.getCapabilities(["Content-Type", "application/json"]).then( function(response) {
            assert.equal(response.status, "200");
            assert.equal(typeof(response), "object");
            done();
        });
    })
});