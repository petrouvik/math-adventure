const CACHE_NAME =
    "math-adventure-v2.0";

const APP_FILES = [

    // HTML
    "./",
    "./index.html",
    "./learn.html",
    "./course.html",
    "./lesson.html",
    "./progress.html",
    "./shop.html",
    "./settings.html",

    // CSS
    "./css/base.css",
    "./css/layout.css",
    "./css/navigation.css",
    "./css/home.css",
    "./css/stats.css",
    "./css/learn.css",
    "./css/course.css",
    "./css/lesson.css",
    "./css/progress.css",
    "./css/shop.css",
    "./css/settings.css",
    "./css/achievement.css",

    // JavaScript
    "./js/player.js",
    "./js/i18n.js",
    "./js/themes.js",
    "./js/achievements.js",
    "./js/courses.js",
    "./js/lesson.js",
    "./js/settings.js",
    "./js/course.js",
    "./js/explanations.js",
    "./js/generator-utils.js",
    "./js/generators.js",
    "./js/image-utils.js",
    "./js/interactions.js",
    "./js/learn.js",
    "./js/progress.js",
    "./js/shop.js",

    // Translations
    "./js/translations/en.js",
    "./js/translations/sr.js",

    // Icons
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];


self.addEventListener(
    "install",
    event => {

        event.waitUntil(

            caches
                .open(CACHE_NAME)
                .then(cache =>
                    cache.addAll(APP_FILES)
                )

        );

    }
);


self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches
                .keys()
                .then(cacheNames =>

                    Promise.all(

                        cacheNames
                            .filter(
                                name =>
                                    name !== CACHE_NAME
                            )
                            .map(
                                name =>
                                    caches.delete(name)
                            )

                    )

                )

        );

    }
);


self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            caches
                .match(
                    event.request,
                    {
                        ignoreSearch: true
                    }
                )
                .then(cachedResponse => {

                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    return fetch(
                        event.request
                    );

                })

        );

    }
);