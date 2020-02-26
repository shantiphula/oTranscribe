const OtInitializerForPhula = {
    perform() {
        this.preventPasteStyledText()
    },
    preventPasteStyledText() {
        const ce = document.querySelector('[contenteditable]');
        ce.addEventListener('paste', function (e) {
            e.preventDefault();
            const text = e.clipboardData.getData('text/plain');
            document.execCommand('insertText', false, text);
        })
    }
};

export {OtInitializerForPhula};
