function showTutorial(technology) {
    var iframeContainer = document.getElementById('iframe-container');
    var tutorialIframe = document.getElementById('tutorial-iframe');
    switch (technology) {
        case 'html':
            tutorialIframe.src = 'https://www.w3schools.com/html/';
            break;
        case 'php':
            tutorialIframe.src = 'https://www.w3schools.com/php/';
            break;
        case 'css':
            tutorialIframe.src = 'https://www.w3schools.com/css/';
            break;
        case 'java':
            tutorialIframe.src = 'https://www.w3schools.com/java/';
            break;
        case 'js':
            tutorialIframe.src = 'https://www.w3schools.com/js/';
            break;
        case 'c':
            tutorialIframe.src = 'https://www.w3schools.com/c/';
            break;
        case 'cs':
            tutorialIframe.src = 'https://www.w3schools.com/cs/';
            break;
        case 'react':
                tutorialIframe.src = 'https://www.w3schools.com/react/';
                break;
        case 'mysql':
                tutorialIframe.src = 'https://www.w3schools.com/mysql/';
                break;
        case 'nodejs':
                tutorialIframe.src = 'https://www.w3schools.com/nodejs/';
                break;
        case 'mongodb':
                tutorialIframe.src = 'https://www.w3schools.com/mongodb/';
                break;
        case 'kotlin':
                tutorialIframe.src = 'https://www.w3schools.com/kotlin/';
                break;
        case 'python':
                tutorialIframe.src = 'https://www.w3schools.com/python/';
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

