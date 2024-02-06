let name = "favour";
function showContent(page) {
    var contentDiv = document.getElementById('content');

    switch (page) {
        case 'home':
            contentDiv.innerHTML = '<p>Welcome to the Home Page!</p>';
            break;
        case 'about':
            contentDiv.innerHTML = '<p>Learn more about us...</p>';
            break;
        case 'cs':
            contentDiv.innerHTML = '<p>Computer Science content goes here...</p>';
            break;
        case 'undergrad':
            contentDiv.innerHTML = '<p>Undergraduate content goes here...</p>';
            break;
        default:
            contentDiv.innerHTML = '<p>Page not found</p>';
    }
}
