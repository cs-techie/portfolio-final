// Execute immediately or when DOM is ready
const initScript = () => {
    /* =====================================================
       HELPERS
    ===================================================== */

    const $ = (selector) =>
        document.querySelector(selector);

    const $$ = (selector) =>
        [...document.querySelectorAll(selector)];

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = $("#loader");
    const loaderBar = $("#loaderBar");
    const loaderPercent = $("#loaderPercent");

    let progress = 0;

    const loaderInterval = setInterval(() => {
        progress +=
            Math.floor(Math.random() * 8) + 5;

        if (progress >= 100) {
            progress = 100;
            clearInterval(loaderInterval);
        }

        if (loaderBar) {
            loaderBar.style.width =
                `${progress}%`;
        }

        if (loaderPercent) {
            loaderPercent.textContent =
                `${String(progress).padStart(2, "0")}%`;
        }
    }, 70);

    const hideLoader = () => {
        setTimeout(() => {
            loader?.classList.add("hidden");
        }, 400);
    };

    if (document.readyState === "complete") {
        hideLoader();
    } else {
        window.addEventListener("load", hideLoader);
    }

    /* =====================================================
       HERO VIDEO
    ===================================================== */

    const heroVideo =
        $("#heroVideo");

    if (heroVideo) {
        heroVideo.muted = true;
        heroVideo.autoplay = true;
        heroVideo.loop = true;
        heroVideo.playsInline = true;

        const playHeroVideo = () => {
            heroVideo
                .play()
                .catch(() => { });
        };

        playHeroVideo();

        heroVideo.addEventListener(
            "loadeddata",
            playHeroVideo
        );

        heroVideo.addEventListener(
            "canplay",
            playHeroVideo
        );

        document.addEventListener(
            "visibilitychange",
            () => {
                if (
                    document.visibilityState ===
                    "visible"
                ) {
                    playHeroVideo();
                }
            }
        );
    }

    /* =====================================================
       SOUND BUTTON
    ===================================================== */

    const soundButton =
        $("#soundButton");

    soundButton?.addEventListener(
        "click",
        () => {
            if (!heroVideo) return;

            heroVideo.muted =
                !heroVideo.muted;

            soundButton.textContent =
                heroVideo.muted
                    ? "SOUND OFF"
                    : "SOUND ON";

            if (!heroVideo.muted) {
                heroVideo
                    .play()
                    .catch(() => { });
            }
        }
    );

    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursorDot =
        $(".cursor-dot");
    const cursorRing =
        $(".cursor-ring");

    document.addEventListener(
        "mousemove",
        (event) => {
            if (cursorDot) {
                cursorDot.style.left =
                    `${event.clientX}px`;
                cursorDot.style.top =
                    `${event.clientY}px`;
            }

            if (cursorRing) {
                cursorRing.style.left =
                    `${event.clientX}px`;
                cursorRing.style.top =
                    `${event.clientY}px`;
            }
        }
    );

    $$(
        "a, button, .skill, .project-browser"
    ).forEach((element) => {
        element.addEventListener(
            "mouseenter",
            () => {
                cursorRing?.classList.add(
                    "hover"
                );
            }
        );

        element.addEventListener(
            "mouseleave",
            () => {
                cursorRing?.classList.remove(
                    "hover"
                );
            }
        );
    });

    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        $$(".reveal");

    if (
        "IntersectionObserver" in window
    ) {
        const revealObserver =
            new IntersectionObserver(
                (entries) => {
                    entries.forEach(
                        (entry) => {
                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );
                        }
                    );
                },
                {
                    threshold: 0.10
                }
            );

        revealElements.forEach(
            (element) => {
                revealObserver.observe(
                    element
                );
            }
        );
    } else {
        revealElements.forEach(
            (element) => {
                element.classList.add(
                    "visible"
                );
            }
        );
    }

    /* SAFETY FALLBACK */
    setTimeout(() => {
        revealElements.forEach(
            (element) => {
                element.classList.add(
                    "visible"
                );
            }
        );
    }, 1400);

    /* =====================================================
       INTRO VIDEO MODAL
    ===================================================== */

    const introTrigger =
        $("#introTrigger");
    const introModal =
        $("#introModal");
    const introVideo =
        $("#introVideo");
    const modalClose =
        $("#modalClose");

    function openIntro() {
        if (!introModal) return;

        introModal.classList.add(
            "active"
        );
        introModal.setAttribute(
            "aria-hidden",
            "false"
        );
        document.body.classList.add(
            "no-scroll"
        );

        if (introVideo) {
            introVideo.currentTime = 0;
            introVideo
                .play()
                .catch(() => { });
        }
    }

    function closeIntro() {
        if (!introModal) return;

        introModal.classList.remove(
            "active"
        );
        introModal.setAttribute(
            "aria-hidden",
            "true"
        );
        document.body.classList.remove(
            "no-scroll"
        );

        if (introVideo) {
            introVideo.pause();
            introVideo.currentTime = 0;
        }
    }

    introTrigger?.addEventListener(
        "click",
        openIntro
    );

    modalClose?.addEventListener(
        "click",
        closeIntro
    );

    introModal?.addEventListener(
        "click",
        (event) => {
            if (
                event.target === introModal
            ) {
                closeIntro();
            }
        }
    );

    document.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Escape"
            ) {
                closeIntro();
            }
        }
    );

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        $("#menuButton");
    const mobileMenu =
        $("#mobileMenu");

    menuButton?.addEventListener(
        "click",
        () => {
            mobileMenu?.classList.toggle(
                "open"
            );
        }
    );

    $$(".mobile-menu a").forEach(
        (link) => {
            link.addEventListener(
                "click",
                () => {
                    mobileMenu?.classList.remove(
                        "open"
                    );
                }
            );
        }
    );

    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        $$("main section[id]");
    const navLinks =
        $$(".nav-link");

    if (
        "IntersectionObserver" in window
    ) {
        const navObserver =
            new IntersectionObserver(
                (entries) => {
                    entries.forEach(
                        (entry) => {
                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            navLinks.forEach(
                                (link) => {
                                    const target =
                                        link.getAttribute(
                                            "href"
                                        );

                                    link.classList.toggle(
                                        "active",
                                        target ===
                                        `#${entry.target.id}`
                                    );
                                }
                            );
                        }
                    );
                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }
            );

        sections.forEach(
            (section) => {
                navObserver.observe(
                    section
                );
            }
        );
    }

    /* =====================================================
       PROJECT VIDEOS
    ===================================================== */

    $$(".project-video").forEach(
        (video) => {
            video.muted = true;
            video.loop = true;
            video.playsInline = true;

            const playProjectVideo =
                () => {
                    video
                        .play()
                        .catch(() => { });
                };

            playProjectVideo();

            video.addEventListener(
                "loadeddata",
                playProjectVideo
            );

            video.addEventListener(
                "canplay",
                playProjectVideo
            );
        }
    );

    /* =====================================================
       PROFILE FALLBACK
    ===================================================== */

    const profileImage =
        $("#profileImage");
    const imageFallback =
        $(".image-fallback");

    profileImage?.addEventListener(
        "error",
        () => {
            profileImage.style.display =
                "none";

            if (imageFallback) {
                imageFallback.style.display =
                    "grid";
            }
        }
    );

    /* =====================================================
       MAGNETIC BUTTONS
    ===================================================== */

    $$(".btn").forEach(
        (button) => {
            button.addEventListener(
                "mousemove",
                (event) => {
                    if (
                        window.innerWidth <= 800
                    ) {
                        return;
                    }

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;

                    button.style.transform =
                        `translate(
                            ${x * .08}px,
                            ${y * .08}px
                        )`;
                }
            );

            button.addEventListener(
                "mouseleave",
                () => {
                    button.style.transform = "";
                }
            );
        }
    );

    /* =====================================================
       HERO VIDEO PAUSE WHEN TAB HIDDEN
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {
            if (!heroVideo) return;

            if (
                document.visibilityState ===
                "hidden"
            ) {
                heroVideo.pause();
            } else {
                heroVideo
                    .play()
                    .catch(() => { });
            }
        }
    );
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScript);
} else {
    initScript();
}
