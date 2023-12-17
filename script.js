$(document).ready(function () {
    var titleArray = ["SOFTWARE ENGINEER", "DESIGNER", "ARTIST"];
    var currentTitleIndex = 0;
    var isScrollAllowed = false;

    function updateTitle() {
        $(".title").text(titleArray[currentTitleIndex]);
    }

    function handleScroll() {
        var introContainer = document.getElementsByClassName('intro-container')[0];

        // Check if the intro-container is fully in view
        if (isElementVisible(introContainer)
        ) {
            console.log('intro vis')
            isScrollAllowed = false;
        } else {
            isScrollAllowed = true;
            console.log('intro not vis')
        }

        // Change the title when scrolling is allowed
        if (!isScrollAllowed) {
            if (currentTitleIndex < titleArray.length - 1) {
                currentTitleIndex++;
                updateTitle();
            }
        }
    }

    // Attach the scroll event handler
    $(window).scroll(handleScroll);

    // Initial title update
    updateTitle();
});

function isElementVisible(el) {
    var rect = el.getBoundingClientRect(),
        vWidth = window.innerWidth || document.documentElement.clientWidth,
        vHeight = window.innerHeight || document.documentElement.clientHeight,
        efp = function (x, y) { return document.elementFromPoint(x, y) };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0
        || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
        el.contains(efp(rect.left, rect.top))
        || el.contains(efp(rect.right, rect.top))
        || el.contains(efp(rect.right, rect.bottom))
        || el.contains(efp(rect.left, rect.bottom))
    );
}