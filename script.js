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
     * 1. DETERMINISTIC PRELOADER LOOP (SINGLE SOURCE OF TRUTH)
     */
    function initPreloader() {
        let progress = 0;
        let shown = 0;
        let done = false;

        const counterEl = document.getElementById('preloader-counter') || document.getElementById('loaderPercent');
        const barEl = document.getElementById('preloader-bar') || document.getElementById('loaderBar');
        const preloaderEl = document.getElementById('preloader');
        const track = document.getElementById('crestTrack') || document.querySelector('.crest-track') || document.querySelector('.flight-track');
        const mover = document.getElementById('crestMover') || document.querySelector('.crest-mover') || document.getElementById('flyingOwl');

        let maxX = 0;
        function updateMaxX() {
            if (track && mover) {
                maxX = Math.max(0, track.clientWidth - mover.offsetWidth);
            }
        }
        updateMaxX();
        window.addEventListener('resize', () => {
            updateMaxX();
            render();
        }, { passive: true });

        function render() {
            shown = Math.max(shown, progress);
            if (counterEl) {
                counterEl.textContent = shown + '%';
            }
            if (barEl) {
                barEl.style.transformOrigin = 'left';
                barEl.style.transform = `scaleX(${shown / 100})`;
            }
            if (mover && track) {
                if (maxX <= 0) updateMaxX();
                const x = (maxX * shown / 100).toFixed(1);
                mover.style.transform = `translate3d(${x}px, 0, 0)`;
            }
        }

        render();

        const failsafe = setTimeout(() => {
            finish();
        }, 6000);

        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 4) + 2;
            if (progress >= 100) {
                progress = 100;
                finish();
            } else {
                render();
            }
        }, 30);

        function finish() {
            if (done) return;
            done = true;
            clearInterval(interval);
            clearTimeout(failsafe);
            progress = 100;
            shown = 100;
            render();

            setTimeout(() => {
                if (!preloaderEl) {
                    completeTransition();
                    return;
                }

                let transitionFinished = false;
                function onTransitionEnd(e) {
                    if (e && e.target !== preloaderEl) return;
                    if (transitionFinished) return;
                    transitionFinished = true;
                    preloaderEl.removeEventListener('transitionend', onTransitionEnd);
                    completeTransition();
                }

                preloaderEl.addEventListener('transitionend', onTransitionEnd);
                setTimeout(onTransitionEnd, 600); // Failsafe fallback for transitionend

                preloaderEl.classList.add('is-hidden');
                preloaderEl.classList.add('loaded');
            }, 250);

            function completeTransition() {
                document.body.classList.remove('is-loading');
                if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    startOwlCursor();
                }
            }
        }
    }

    /**
     * 2. ANIMATED OWL CURSOR (Desktop Real Pointer Only - Starts only after preloader)
     */
    let startOwlCursor = function () {};

    function initOwlCursor() {
        // Strict guard: Real pointer devices with hover only. Never on touch phones.
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            return;
        }

        const owlCursor = document.getElementById('custom-owl-cursor');
        if (!owlCursor) return;

        let targetX = -100;
        let targetY = -100;
        let curX = -100;
        let curY = -100;
        let cursorActive = false;
        let hasMoved = false;

        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            if (!hasMoved) {
                hasMoved = true;
                curX = targetX;
                curY = targetY;
                if (cursorActive) {
                    owlCursor.style.display = 'block';
                    owlCursor.style.opacity = '1';
                }
            }
        }, { passive: true });

        function animCursor() {
            if (cursorActive && hasMoved) {
                curX += (targetX - curX) * 0.22;
                curY += (targetY - curY) * 0.22;
                owlCursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
            }
            requestAnimationFrame(animCursor);
        }
        animCursor();

        startOwlCursor = function () {
            cursorActive = true;
            if (hasMoved) {
                owlCursor.style.display = 'block';
                owlCursor.style.opacity = '1';
            }
        };

        if (!document.body.classList.contains('is-loading')) {
            startOwlCursor();
        }
    }

    /**
     * 3. COMMUNITY & EVENTS AND REVIEWS ARROW CONTROLS (±320px)
     */
    function initCarouselControls() {
        // Community & Events Golden Arrow Controls (±320px & 14s loop)
        const evtPrev = document.getElementById('evtPrev');
        const evtNext = document.getElementById('evtNext');
        const eventsOuter = document.querySelector('.events-marquee-outer');

        let isEvtPaused = false;
        let evtPauseTimer = null;

        function pauseEvents(duration = 3000) {
            isEvtPaused = true;
            clearTimeout(evtPauseTimer);
            evtPauseTimer = setTimeout(() => {
                isEvtPaused = false;
            }, duration);
        }

        if (eventsOuter) {
            let lastEvtTime = performance.now();
            function stepEventsMarquee(now) {
                const dt = Math.min(now - lastEvtTime, 100);
                lastEvtTime = now;

                if (!isEvtPaused && eventsOuter) {
                    const halfWidth = eventsOuter.scrollWidth / 2;
                    if (halfWidth > 0) {
                        const pixelsPerMs = halfWidth / 14000;
                        eventsOuter.scrollLeft += pixelsPerMs * dt;

                        if (eventsOuter.scrollLeft >= halfWidth) {
                            eventsOuter.scrollLeft -= halfWidth;
                        } else if (eventsOuter.scrollLeft <= 0) {
                            eventsOuter.scrollLeft += halfWidth;
                        }
                    }
                }
                requestAnimationFrame(stepEventsMarquee);
            }
            requestAnimationFrame(stepEventsMarquee);

            eventsOuter.addEventListener('mouseenter', () => { isEvtPaused = true; });
            eventsOuter.addEventListener('mouseleave', () => { isEvtPaused = false; });
            eventsOuter.addEventListener('touchstart', () => { pauseEvents(3000); }, { passive: true });
        }

        if (evtPrev && eventsOuter) {
            evtPrev.addEventListener('click', () => {
                pauseEvents(3000);
                eventsOuter.scrollBy({ left: -320, behavior: 'smooth' });
            });
        }
        if (evtNext && eventsOuter) {
            evtNext.addEventListener('click', () => {
                pauseEvents(3000);
                eventsOuter.scrollBy({ left: 320, behavior: 'smooth' });
            });
        }

        // Reviews Section Carousel Arrow Controls (±320px)
        const revPrev = document.getElementById('revPrev');
        const revNext = document.getElementById('revNext');
        const revCarousel = document.querySelector('.reviews-carousel') || document.getElementById('reviewsWindow') || document.querySelector('.reviews-track');

        let isRevPaused = false;
        let revPauseTimer = null;

        function pauseReviews(duration = 3000) {
            isRevPaused = true;
            clearTimeout(revPauseTimer);
            revPauseTimer = setTimeout(() => {
                isRevPaused = false;
            }, duration);
        }

        if (revCarousel) {
            let lastRevTime = performance.now();
            function stepReviewsScroll(now) {
                const dt = Math.min(now - lastRevTime, 100);
                lastRevTime = now;

                if (!isRevPaused && revCarousel) {
                    const maxScroll = revCarousel.scrollWidth - revCarousel.clientWidth;
                    if (maxScroll > 10) {
                        revCarousel.scrollLeft += 0.04 * dt;
                        if (revCarousel.scrollLeft >= maxScroll - 2) {
                            revCarousel.scrollLeft = 0;
                        }
                    }
                }
                requestAnimationFrame(stepReviewsScroll);
            }
            requestAnimationFrame(stepReviewsScroll);

            revCarousel.addEventListener('mouseenter', () => { isRevPaused = true; });
            revCarousel.addEventListener('mouseleave', () => { isRevPaused = false; });
            revCarousel.addEventListener('touchstart', () => { pauseReviews(3000); }, { passive: true });
        }

        if (revPrev && revCarousel) {
            revPrev.addEventListener('click', () => {
                pauseReviews(3000);
                revCarousel.scrollBy({ left: -320, behavior: 'smooth' });
            });
        }
        if (revNext && revCarousel) {
            revNext.addEventListener('click', () => {
                pauseReviews(3000);
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
