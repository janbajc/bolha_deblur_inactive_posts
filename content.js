console.log('Extension running');

// Function to remove the ClassifiedDetail--blurContent class from div elements

function removeBlurContentClass() {
    // Get all div elements with the updated class names (removed .cf)
    var divs = document.querySelectorAll('.wrap-content.ClassifiedDetail.ClassifiedDetail--blurContent');
    console.log(divs);

    // Loop over the div elements
    divs.forEach(function(div) {
        // Check if the div element is still present in the HTML
        if (document.body.contains(div)) {
            // Remove the ClassifiedDetail--blurContent class from the div element
            div.classList.remove('ClassifiedDetail--blurContent');
            console.log(div);
        }
    });
}

// Create a MutationObserver to detect changes to the page
var observer = new MutationObserver(function(mutations) {
    // Re-run the code to remove the ClassifiedDetail--blurContent class from div elements
    removeBlurContentClass();
});

// Start observing changes to the page
observer.observe(document.body, {childList: true, subtree: true});

// Run the code to remove the ClassifiedDetail--blurContent class from div elements initially
removeBlurContentClass();