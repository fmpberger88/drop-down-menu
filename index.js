class Dropdown {
    constructor(selector) {
        // Standardoptionen festlegen
        this.element = document.querySelector(selector);
    }

    init() {
        this.element.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggle();
        });

        // Wenn closeOnOutsideClick wahr ist, Dropdown schließen, wenn außerhalb des Elements geklickt wird
        if (this.options.closeOnOutsideClick) {
            document.addEventListener('click', () => this.close());
        }
    }

    toggle() {
        this.element.classList.toggle('is-active');
        // Hier könntest du die toggleSpeed-Option verwenden, um die Animationsgeschwindigkeit anzupassen
    }

    close() {
        this.element.classList.remove('is-active');
    }
}

export default Dropdown;

// UMD (Universal Module Definition) Patterns for JavaScript Modules
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Dropdown;
} else {
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return Dropdown;
        });
    } else {
        window.Dropdown = Dropdown;
    }
}
