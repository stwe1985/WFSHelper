import WFSUrl from "./wfsurl.js";

function checkBerlinPostalCode() {
    const RequestInit = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }

    let fetchURL = new WFSUrl("https://gdi.berlin.de/services/wfs/postleitzahlen");
    fetchURL.operation = "GetFeature";
    fetchURL.version = "2.0";
    console.log(fetchURL.url.href);
}

checkBerlinPostalCode();

