$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');

    document.querySelectorAll('[data-section-navigator]').forEach(function(navigator) {
        var toggle = navigator.querySelector('.section-navigator__toggle');
        var links = Array.prototype.slice.call(navigator.querySelectorAll('[data-section-nav-target]'));
        var sections = links.map(function(link) {
            return document.getElementById(link.dataset.sectionNavTarget);
        }).filter(Boolean);

        function closeNavigator() {
            navigator.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        }

        function updateActiveLink() {
            if (!sections.length) {
                return;
            }

            var activationLine = Math.min(180, window.innerHeight * 0.3);
            var activeSection = sections[0];

            sections.forEach(function(section) {
                if (section.getBoundingClientRect().top <= activationLine) {
                    activeSection = section;
                }
            });

            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                activeSection = sections[sections.length - 1];
            }

            links.forEach(function(link) {
                if (link.dataset.sectionNavTarget === activeSection.id) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        toggle.addEventListener('click', function() {
            var isOpen = navigator.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        links.forEach(function(link) {
            link.addEventListener('click', function() {
                closeNavigator();
                window.setTimeout(updateActiveLink, 0);
            });
        });

        document.addEventListener('click', function(event) {
            if (!navigator.contains(event.target)) {
                closeNavigator();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navigator.classList.contains('is-open')) {
                closeNavigator();
                toggle.focus();
            }
        });

        var updateQueued = false;
        window.addEventListener('scroll', function() {
            if (!updateQueued) {
                window.requestAnimationFrame(function() {
                    updateActiveLink();
                    updateQueued = false;
                });
                updateQueued = true;
            }
        }, { passive: true });

        window.addEventListener('resize', updateActiveLink);
        window.addEventListener('hashchange', updateActiveLink);
        updateActiveLink();
    });
});
