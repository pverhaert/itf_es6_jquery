// Check that service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
                console.log(`Service Worker registered! Scope: ${registration.scope}`);
                let updating;
                registration.addEventListener('updatefound', () => {
                    const serviceWorker = registration.installing;
                    serviceWorker.onstatechange = () => {
                        // IF ServiceWorker has been installed
                        // AND we have a controller, meaning that the old chached files got deleted and new files cached
                        // AND ServiceWorkerRegistration is waiting
                        // THEN let ServieWorker know that it can skip waiting.
                        if (
                            serviceWorker.state === 'installed' &&
                            navigator.serviceWorker.controller &&
                            registration &&
                            registration.waiting
                        ) {
                            updating = true;
                            // In '/sw.js' there is an event listener that got added to listen to the post message.
                            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                        }

                        // IF we had an update of the cache files and we are done activating the ServiceWorker service
                        // THEN let the user know that we updated the files and we are reloading the website.
                        if (updating && serviceWorker.state === 'activated') {
                            // We use a standard confirmation box here, but you can replace it with a layered version if you wish
                            const reload = confirm('This site have been updated, reload the browser?');
                            if (reload) {
                                window.location.reload();
                            }
                        }
                    };
                });
            })
            .catch((err) => {
                console.log(`Service Worker registration failed: ${err}`);
            });
    });
}
