document.addEventListener('DOMContentLoaded', function() {
    // Assuming navTemplate and footerTemplate are globally accessible from templates.js

    // Render Navigation
    if (document.getElementById('navigation-placeholder')) {
        document.getElementById('navigation-placeholder').innerHTML = Mustache.render(navTemplate, {});
    }

    // Render Footer
    if (document.getElementById('footer-placeholder')) {
        document.getElementById('footer-placeholder').innerHTML = Mustache.render(footerTemplate, {});
    }
});
