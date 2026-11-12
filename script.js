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
     * 1. PRELOADER: OWL GLIDES SMOOTHLY FROM 0% TO 100% (ONE RAF LOOP)
     */
    function initPreloader() {
        const pre = document.getElementById('preloader');
        if (!pre) {
            document.body.classList.remove('is-loading');
            return;
        }

        const counterEl = document.getElementById('preloader-counter') || document.getElementById('loaderPercent');
        const barEl = document.getElementById('preloader-bar') || document.getElementById('loaderBar');
        const track = document.getElementById('crestTrack');
        const mover = document.getElementById('crestMover');

        let target = 0, shown = 0, loaded = false, done = false, maxX = 0;
        const t0 = performance.now();
        let last = t0;

        const measure = () => {
            if (track && mover) {
                maxX = Math.max(0, track.clientWidth - mover.offsetWidth);
            }
        };
        measure();
        window.addEventListener('resize', measure, { passive: true });
        window.addEventListener('orientationchange', measure, { passive: true });

        const ready = () => { loaded = true; };
        if (document.readyState === 'complete') {
            loaded = true;
        } else {
            window.addEventListener('load', ready, { once: true });
        }
        try {
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(ready).catch(() => {});
            }
        } catch (_) {}
        setTimeout(ready, 5000);

        function render() {
            if (counterEl) counterEl.textContent = Math.round(shown) + '%';
            if (barEl) {
                barEl.style.transformOrigin = 'left';
                barEl.style.transform = 'scaleX(' + (shown / 100) + ')';
            }
            if (mover) {
                mover.style.transform = 'translate3d(' + (maxX * shown / 100).toFixed(2) + 'px,0,0)';
            }
        }

        function finish() {
            if (done) return;
            done = true;
            shown = 100;
            render();
            setTimeout(() => {
                pre.classList.add('is-hidden');
                let ended = false;
                const end = () => {
                    if (ended) return;
                    ended = true;
                    document.body.classList.remove('is-loading');
                    pre.style.display = 'none';
                    document.dispatchEvent(new Event('preloader:done'));
                };
                pre.addEventListener('transitionend', end, { once: true });
                setTimeout(end, 700);
            }, 300);
        }

        function frame(now) {
            if (done) return;
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            const p = Math.min(1, (now - t0) / 2800);
            const eased = 1 - Math.pow(1 - p, 2.2);
            target = Math.min(loaded ? 100 : 92, eased * 100);
            const delta = Math.min(2.0, (target - shown) * (1 - Math.exp(-dt * 9)));
            shown = Math.max(shown, shown + delta);
            if (target >= 100 && shown > 99.5) shown = 100;
            render();
            if (shown >= 100) {
                finish();
                return;
            }
            requestAnimationFrame(frame);
        }

        setTimeout(() => {
            if (!done) finish();
        }, 8000); // hard failsafe

        render();
        requestAnimationFrame(frame);
    }

    /**
     * 2. ANIMATED OWL CURSOR (Desktop Real Pointer Only - Starts after preloader:done)
     */
    function initOwlCursor() {
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

        function startOwlCursor() {
            cursorActive = true;
            if (hasMoved) {
                owlCursor.style.display = 'block';
                owlCursor.style.opacity = '1';
            }
        }

        document.addEventListener('preloader:done', startOwlCursor, { once: true });
        if (!document.body.classList.contains('is-loading')) {
            startOwlCursor();
        }
    }

    /**
     * 3. ONE REUSABLE TRANSFORM CAROUSEL (initCx)
     */
    function initCx(viewport, opts) {
        opts = opts || {};
        const step = opts.step || 320;
        const track = viewport && viewport.querySelector('.cx-track');
        if (!track || track.dataset.cx) return;
        track.dataset.cx = '1';

        const originals = Array.from(track.children);
        if (!originals.length) return;
        let period = 0;

        function getSpeed() {
            const isPhone = window.innerWidth < 768;
            const baseSpeed = opts.type === 'reviews'
                ? (isPhone ? 40 : 50)
                : (isPhone ? 55 : 80);
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            return reduce ? baseSpeed / 2 : baseSpeed;
        }

        function measurePeriod() {
            if (track.children.length > originals.length) {
                const firstOrig = originals[0];
                const firstClone = track.children[originals.length];
                const diff = firstClone.offsetLeft - firstOrig.offsetLeft;
                if (diff > 0) {
                    period = diff;
                }
            }
        }

        function ensureFilled() {
            measurePeriod();
            const vpWidth = Math.max(viewport.clientWidth, window.innerWidth);
            let cloneSets = Math.round(track.children.length / originals.length) - 1;
            while (cloneSets < 4) {
                measurePeriod();
                const totalWidth = track.scrollWidth;
                if (period > 0 && cloneSets >= 2 && totalWidth >= period + vpWidth + 200) {
                    break;
                }
                originals.forEach(n => {
                    const k = n.cloneNode(true);
                    k.setAttribute('aria-hidden', 'true');
                    k.querySelectorAll('a,button,input').forEach(e => e.tabIndex = -1);
                    track.appendChild(k);
                });
                cloneSets++;
                measurePeriod();
            }
        }

        ensureFilled();

        let x = 0, last = 0, anim = null, dragging = false, hover = false, visible = true, resumeAt = 0, vel = 0, moved = false;

        const apply = () => {
            if (period > 0) {
                const d = ((x % period) + period) % period;
                track.style.transform = 'translate3d(' + (-d).toFixed(2) + 'px,0,0)';
            }
        };

        const remeasure = () => {
            ensureFilled();
            measurePeriod();
            apply();
        };

        window.addEventListener('resize', remeasure, { passive: true });
        window.addEventListener('orientationchange', remeasure, { passive: true });

        function watchImages() {
            track.querySelectorAll('img').forEach(i => {
                if (!i.complete) {
                    i.addEventListener('load', remeasure, { once: true });
                }
            });
        }
        watchImages();

        if ('IntersectionObserver' in window) {
            new IntersectionObserver(e => {
                visible = e[0].isIntersecting;
                last = 0;
            }).observe(viewport);
        }

        document.addEventListener('visibilitychange', () => { last = 0; });

        if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
            viewport.addEventListener('mouseenter', () => hover = true);
            viewport.addEventListener('mouseleave', () => hover = false);
        }

        function tick(now) {
            if (!last) last = now;
            const dt = Math.min(0.04, (now - last) / 1000);
            last = now;

            if (anim) {
                const p = Math.min(1, (now - anim.t0) / anim.dur);
                const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
                x = anim.from + (anim.to - anim.from) * e;
                if (p >= 1) {
                    anim = null;
                    resumeAt = now + 1500;
                }
            } else if (!dragging) {
                if (Math.abs(vel) > 2) {
                    const stepVel = Math.sign(vel) * Math.min(Math.abs(vel * dt), 2.5);
                    x += stepVel;
                    vel *= Math.pow(0.04, dt);
                } else if (visible && !document.hidden && !hover && now >= resumeAt) {
                    const speed = getSpeed();
                    const dStep = Math.min(2.5, speed * dt);
                    x += dStep;
                }
            }

            apply();
            requestAnimationFrame(tick);
        }

        // Drag / swipe (pointer events)
        let sx = 0, sy = 0, sxPos = 0, lastX = 0, lastT = 0;

        viewport.addEventListener('pointerdown', e => {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            sx = e.clientX;
            sy = e.clientY;
            sxPos = x;
            lastX = e.clientX;
            lastT = performance.now();
            vel = 0;
            anim = null;
            moved = false;
            viewport._down = true;
        });

        viewport.addEventListener('pointermove', e => {
            if (!viewport._down) return;
            const dx = e.clientX - sx;
            if (!dragging && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(e.clientY - sy)) {
                dragging = true;
                moved = true;
                try {
                    viewport.setPointerCapture(e.pointerId);
                } catch (_) {}
            }
            if (dragging) {
                x = sxPos - dx;
                const n = performance.now();
                const dt = Math.max(1, n - lastT) / 1000;
                vel = -(e.clientX - lastX) / dt;
                lastX = e.clientX;
                lastT = n;
            }
        });

        const up = () => {
            viewport._down = false;
            if (dragging) {
                dragging = false;
                resumeAt = performance.now() + 1500;
            }
        };

        viewport.addEventListener('pointerup', up);
        viewport.addEventListener('pointercancel', up);
        viewport.addEventListener('pointerleave', () => {
            if (!dragging) viewport._down = false;
        });

        viewport.addEventListener('click', e => {
            if (moved) {
                e.preventDefault();
                e.stopPropagation();
                moved = false;
            }
        }, true);

        function glide(d) {
            vel = 0;
            anim = { from: x, to: x + d, t0: performance.now(), dur: 400 };
        }

        if (opts.prev) opts.prev.addEventListener('click', () => glide(-step));
        if (opts.next) opts.next.addEventListener('click', () => glide(step));

        requestAnimationFrame(tick);
    }

    /**
     * 4. COMMUNITY & EVENTS CONTROLS + CAROUSEL INITIALIZATION
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

        // Init Ambiance Gallery & Reviews Carousels via initCx
        const galleryViewport = document.querySelector('.partner-setup-outer');
        const reviewsViewport = document.getElementById('reviewsWindow') || document.querySelector('.reviews-carousel');

        if (galleryViewport) {
            initCx(galleryViewport, {
                type: 'gallery',
                step: 320
            });
        }

        if (reviewsViewport) {
            initCx(reviewsViewport, {
                type: 'reviews',
                step: 320,
                prev: document.getElementById('revPrev'),
                next: document.getElementById('revNext')
            });
        }
    }

    /**
     * 5. STICKY HORIZONTALLY-SCROLLABLE CATEGORY NAVIGATION BAR
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
