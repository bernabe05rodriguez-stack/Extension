class Analytics {
    constructor(debug = false) {
        this.debug = debug;
    }

    trackEvent(eventName, eventData = {}) {}
}

const GoogleAnalytics = new Analytics();