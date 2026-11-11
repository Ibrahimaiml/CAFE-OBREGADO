/**
 * CAFÉ OBREGATO — CONTROLLER
 * Full 0-100% Luxury Preloader, Mobile & Desktop Animated Owl Cursor,
 * Community Events & Reviews Carousel Controls, and Sticky Category Navigation.
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initLuxuryPreloader();
        initOwlCursor();
        initStickyMenuNavigation();
        initMarqueeNavButtons();
    });

    /**
     * 1. FULL 0-100% LUXURY PRELOADER ANIMATION
     */
    function initLuxuryPreloader() {
        const percentDisplay = document.getElementById('loaderPercent');
        const progressBar = document.getElementById('loaderBar');
        const preloader = document.getElementById('preloader');
        const flyingOwl = document.getElementById('flyingOwl');
        const customCursor = document.getElementById('custom-owl-cursor');

        // Hide custom cursor during preloader animation
        if (customCursor) customCursor.style.display = 'none';

        if (!preloader) {
            if (customCursor) customCursor.style.display = 'block';
            return;
        }

        let current = 0;
        const timer = setInterval(() => {
            current = Math.min(current + 1, 100); // strictly increments forward up to 100
            if (percentDisplay) percentDisplay.textContent = current;
            if (progressBar) progressBar.style.width = `${current}%`;
            if (flyingOwl) {
                flyingOwl.style.left = `${current}%`;
                const verticalSine = Math.sin(current * 0.18) * 8;
                flyingOwl.style.transform = `translateX(-50%) translateY(${verticalSine}px)`;
            }

            if (current >= 100) {
                clearInterval(timer);
                setTimeout(() => {
                    preloader.classList.add('loaded');
                    if (customCursor) customCursor.style.display = 'block';
                }, 200);
            }
        }, 12);
    }

    /**
     * 2. MOBILE & DESKTOP CONTINUOUS ANIMATED OWL CURSOR
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
     * 3. COMMUNITY & EVENTS ARROWS & REVIEWS CAROUSEL BUTTONS
     */
    function initMarqueeNavButtons() {
        // Community & Events navigation buttons
        const evtPrev = document.getElementById('evtPrev') || document.querySelector('.events-nav-prev');
        const evtNext = document.getElementById('evtNext') || document.querySelector('.events-nav-next');
        const eventsOuter = document.querySelector('.events-marquee-outer') || document.getElementById('eventsTrack');
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

        // Reviews section carousel buttons
        const revPrev = document.querySelector('.carousel-btn:first-child') || document.querySelector('.reviews-prev');
        const revNext = document.querySelector('.carousel-btn:last-child') || document.querySelector('.reviews-next');
        const revWindow = document.getElementById('reviewsWindow') || document.querySelector('.reviews-track');
        if (revPrev && revWindow) {
            revPrev.addEventListener('click', () => {
                revWindow.scrollBy({ left: -340, behavior: 'smooth' });
            });
        }
        if (revNext && revWindow) {
            revNext.addEventListener('click', () => {
                revWindow.scrollBy({ left: 340, behavior: 'smooth' });
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

        // Smooth scroll click handler
        pills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = pill.getAttribute('href');
                if (!targetId || !targetId.startsWith('#')) return;

                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    const navHeight = 130; // accounts for navbar + sticky category bar
                    const targetPosition = targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update active state
                    pills.forEach(p => p.classList.remove('active'));
                    pill.classList.add('active');

                    // Center pill inside horizontal scroll
                    centerPill(pill);
                }
            });
        });

        // Scroll spy to highlight active category while scrolling
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
