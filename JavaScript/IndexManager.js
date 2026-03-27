export default class IndexManager {

    static InjecHtmlContentToTheEnd(elementId, content) {
        let retBool = true;
        const el = document.getElementById(elementId);

        if (el) {
            try {
                el.innerHTML += content;
            } catch (error) {
                retBool = false;
                console.error(error);
            }
        }

        return retBool;
    }

    static ReplaceHtmlContent(elementId, content) {
        let retBool = true;
        const el = document.getElementById(elementId);

        if (el) {
            try {
                el.innerHTML = content;
            } catch (error) {
                retBool = false;
                console.error(error);
            }
        }

        return retBool;
    }

    static FindTabByElement(tabs, el) {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].tabI === el) {
                return tabs[i];
            }
        }

        return null;
    }
}
