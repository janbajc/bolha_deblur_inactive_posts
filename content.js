console.log("Bolha Deblur content script loaded");

function removeBlurContentClass() {
    var blurredElements = document.querySelectorAll(".ClassifiedDetail--blurContent");

    blurredElements.forEach(function (element) {
        if (document.body && document.body.contains(element)) {
            element.classList.remove("ClassifiedDetail--blurContent");
        }
    });
}

function startDeblurObserver() {
    if (!document.body) {
        return;
    }

    var observer = new MutationObserver(function () {
        removeBlurContentClass();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    removeBlurContentClass();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startDeblurObserver, { once: true });
} else {
    startDeblurObserver();
}