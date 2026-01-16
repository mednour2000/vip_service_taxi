// i18n.js - Internationalization System
class I18n {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || 'en';
        this.languages = {};
        this.defaultLanguage = 'en';
        this.init();
    }

    async init() {
        // Load all language files
        try {
            await Promise.all([
                this.loadLanguage('en'),
                this.loadLanguage('fr'),
                this.loadLanguage('ar')
            ]);
            // Only set language after all are loaded
            if (this.languages[this.currentLanguage]) {
                this.setLanguage(this.currentLanguage);
            } else {
                this.setLanguage('en');
            }
        } catch (error) {
            console.error('Error loading languages:', error);
            // Fallback to default
            if (this.languages['en']) {
                this.setLanguage('en');
            }
        }
    }

    async loadLanguage(lang) {
        try {
            const response = await fetch(`./lang/${lang}.json`);
            this.languages[lang] = await response.json();
        } catch (error) {
            console.error(`Failed to load language ${lang}:`, error);
        }
    }

    setLanguage(lang) {
        if (this.languages[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('preferredLanguage', lang);
            this.applyLanguage();
            this.updateDirection();
            this.updateLangButton();
            // Force update of select options
            this.updateSelectOptions();
        } else {
            console.warn(`Language ${lang} not loaded yet`);
        }
    }

    updateSelectOptions() {
        // Update service type select options
        const serviceTypeSelect = document.getElementById('service_type');
        if (serviceTypeSelect && this.translations) {
            const options = serviceTypeSelect.querySelectorAll('option[data-i18n]');
            options.forEach(option => {
                const key = option.getAttribute('data-i18n');
                if (key && this.translations[key]) {
                    option.textContent = this.translations[key];
                }
            });
        }
    }

    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage');
    }

    applyLanguage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[key] || key;
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.getAttribute('placeholder')) {
                    element.placeholder = translation;
                }
            } else if (element.tagName === 'LABEL') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update placeholders with data-placeholder-i18n
        document.querySelectorAll('[data-placeholder-i18n]').forEach(element => {
            const key = element.getAttribute('data-placeholder-i18n');
            const translation = this.translations[key] || key;
            element.placeholder = translation;
        });

        // Update title
        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.hasAttribute('data-i18n')) {
            const titleKey = titleElement.getAttribute('data-i18n');
            document.title = this.translations[titleKey] || titleKey;
        }
    }

    updateDirection() {
        const htmlElement = document.documentElement;
        if (this.currentLanguage === 'ar') {
            htmlElement.setAttribute('dir', 'rtl');
            htmlElement.setAttribute('lang', 'ar');
            document.body.style.direction = 'rtl';
        } else {
            htmlElement.setAttribute('dir', 'ltr');
            htmlElement.setAttribute('lang', this.currentLanguage);
            document.body.style.direction = 'ltr';
        }
    }

    updateLangButton() {
        const langBtn = document.getElementById('langBtn');
        const langCodes = { 'en': 'EN', 'fr': 'FR', 'ar': 'AR' };
        if (langBtn) {
            langBtn.textContent = (langCodes[this.currentLanguage] || 'EN') + ' ▼';
        }
    }

    get translations() {
        return this.languages[this.currentLanguage] || this.languages[this.defaultLanguage];
    }

    t(key) {
        return this.translations[key] || key;
    }
}

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
