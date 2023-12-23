function showTutorial(technology) {
    var iframeContainer = document.getElementById('iframe-container');
    var tutorialIframe = document.getElementById('tutorial-iframe');
    switch (technology) {
        case 'html':
            tutorialIframe.src = 'https://www.programiz.com/html';
            break;

        default:
            break;
    }
    iframeContainer.style.display = 'flex';
}
window.addEventListener('click', function(event) {
    var iframeContainer = document.getElementById('iframe-container');
    if (event.target === iframeContainer) {
        iframeContainer.style.display = 'none';
    }
});
