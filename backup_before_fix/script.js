/**
 * CAFÉ OBREGATO — CONTROLLER
 * Preloader, Custom Owl Cursor, Community Events, Reviews Carousel, and Sticky Menu
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initPreloader();
        initOwlCursor();
        initStickyMenuNavigation();
        initCarouselControls();
    });

    /**
     * 1. DETERMINISTIC PRELOADER LOOP & CURSOR HIDE STATE
     */
    function initPreloader() {
        let progress = 0;
        const counterEl = document.getElementById('preloader-counter') || document.getElementById('loaderPercent');
        const barEl = document.getElementById('preloader-bar') || document.getElementById('loaderBar');
        const preloaderEl = document.getElementById('preloader');
        const flyingOwl = document.getElementById('flyingOwl');

        // Disable custom cursor during preload
        document.body.classList.add('is-loading');

        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 4) + 2;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    if (preloaderEl) preloaderEl.classList.add('loaded');
                    document.body.classList.remove('is-loading');
                }, 300);
            }
            if (counterEl) counterEl.textContent = progress + '%';
            if (barEl) barEl.style.width = progress + '%';
            if (flyingOwl) {
                flyingOwl.style.left = progress + '%';
                const verticalSine = Math.sin(progress * 0.18) * 8;
                flyingOwl.style.transform = `translateX(-50%) translateY(${verticalSine}px)`;
            }
        }, 30);
    }

    /**
     * 2. ANIMATED OWL CURSOR (Desktop & Touch)
     */
    function initOwlCursor() {
        const owlCursor = document.getElementById('custom-owl-cursor');
        if (!owlCursor) return;

        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let curX = targetX;
        let curY = targetY;

        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches[0]) {
                targetX = e.touches[0].clientX;
                targetY = e.touches[0].clientY;
            }
        }, { passive: true });

        function animCursor() {
            curX += (targetX - curX) * 0.22;
            curY += (targetY - curY) * 0.22;
            owlCursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(animCursor);
        }
        animCursor();
    }

    /**
     * 3. COMMUNITY & EVENTS AND REVIEWS ARROW CONTROLS (±320px)
     */
    function initCarouselControls() {
        // Community & Events Golden Arrow Controls (±320px)
        const evtPrev = document.getElementById('evtPrev');
        const evtNext = document.getElementById('evtNext');
        const eventsOuter = document.querySelector('.events-marquee-outer');

        if (evtPrev && eventsOuter) {
            evtPrev.addEventListener('click', () => {
                eventsOuter.scrollBy({ left: -320, behavior: 'smooth' });
            });
        }
        if (evtNext && eventsOuter) {
            evtNext.addEventListener('click', () => {
                eventsOuter.scrollBy({ left: 320, behavior: 'smooth' });
            });
        }

        // Reviews Section Carousel Arrow Controls (±320px)
        const revPrev = document.getElementById('revPrev');
        const revNext = document.getElementById('revNext');
        const revCarousel = document.querySelector('.reviews-carousel') || document.getElementById('reviewsWindow') || document.querySelector('.reviews-track');

        if (revPrev && revCarousel) {
            revPrev.addEventListener('click', () => {
                revCarousel.scrollBy({ left: -320, behavior: 'smooth' });
            });
        }
        if (revNext && revCarousel) {
            revNext.addEventListener('click', () => {
                revCarousel.scrollBy({ left: 320, behavior: 'smooth' });
            });
        }
    }

    /**
     * 4. STICKY HORIZONTALLY-SCROLLABLE CATEGORY NAVIGATION BAR
     */
    function initStickyMenuNavigation() {
        const catBar = document.getElementById('menuCategoriesBar');
        if (!catBar) return;

        const pills = catBar.querySelectorAll('.menu-cat-pill');
        const sections = document.querySelectorAll('.menu-cat-group-clean, .menu-cat-group');

        if (!pills.length || !sections.length) return;

        pills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = pill.getAttribute('href');
                if (!targetId || !targetId.startsWith('#')) return;

                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    const navHeight = 130;
                    const targetPosition = targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    pills.forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');
                    centerPill(pill);
                }
            });
        });

        let isTicking = false;
        window.addEventListener('scroll', () => {
            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    updateActiveCategoryOnScroll();
                    isTicking = false;
                });
                isTicking = true;
            }
        }, { passive: true });

        function updateActiveCategoryOnScroll() {
            const scrollPos = window.pageYOffset + 150;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPos >= top && scrollPos < top + height) {
                    pills.forEach(p => {
                        if (p.getAttribute('href') === `#${id}`) {
                            if (!p.classList.contains('active')) {
                                pills.forEach(item => item.classList.remove('active'));
                                p.classList.add('active');
                                centerPill(p);
                            }
                        }
                    });
                }
            });
        }

        function centerPill(pill) {
            if (!catBar) return;
            const barWidth = catBar.offsetWidth;
            const pillLeft = pill.offsetLeft;
            const pillWidth = pill.offsetWidth;
            catBar.scrollTo({
                left: pillLeft - (barWidth / 2) + (pillWidth / 2),
                behavior: 'smooth'
            });
        }
    }
})();
