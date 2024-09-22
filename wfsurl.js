export default class WFSUrl{
    static AND = "&";
    static END = "/";

    constructor(geoHost = new String()) {
        this.url = new URL(geoHost);
        this.service = "WFS";
        this.operation = new String();
        this.request = this.operation;
        this.version = new String();
        this.url.search +=
        this.setQuery("service", this.service);
    }

    setCapabilitiesURL(version = new String()) {
        this.operation = "getCapabilities";
        this.request = this.operation;
        this.version = version;
        this.url.search += this.setQuery("request", this.request, WFSUrl.AND)
        + this.setQuery("version", this.version, WFSUrl.AND);
    }

    getCapabilities(headers = []) {
        header.append(new Headers(headers));
        return fetch(this.url.href);
    }

    getWFSUrl() {
        return this.url.href;
    }

    setQuery(key = new String(""), val = new String(""), delim = new String("")) {
        return String(delim + key + "=" + val);
    }
}