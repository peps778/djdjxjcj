function displayMessage(friendId) {
    var messages = {
        'IRA': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed fermentum leo. Donec porta, mi et sagittis mattis, ipsum quam pellentesque ipsum, quis suscipit libero massa ut tortor. Vivamus non est quis quam aliquam scelerisque ac sed sapien. Praesent cursus eget magna id ullamcorper. Sed eget vulputate lorem. Cras sed nibh at est elementum tincidunt. Praesent posuere vestibulum mollis. Ut vitae auctor libero, et vestibulum ex. Fusce dui ex, semper sit amet arcu vitae, consequat accumsan tortor. Morbi ultrices elementum pellentesque. Donec semper maximus nisi. In porta, ex ac porta ornare, sapien ante finibus sem, efficitur luctus nulla risus nec sapien. Suspendisse ullamcorper iaculis dui, id fermentum urna auctor a. Proin sagittis ligula risus.',
        'akang': 'Makdkfkdlskskfkd..',
        'helen': 'HI DENG.'
    };

    var messageContent = messages[friendId] || '';
    document.getElementById('textContainer').innerHTML = messageContent;
}

function clearMessage() {
    document.getElementById('textContainer').innerHTML = '';
}



// Declare the messages variable in the global scope or a scope accessible by your functions
var messages = {
    'IRA': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in semper neque. Morbi sollicitudin turpis magna, in egestas leo ornare id. Donec rhoncus, massa sed porttitor facilisis, urna nibh iaculis purus, at malesuada metus nisl id arcu. Nulla pellentesque sem mauris, vel blandit dui pulvinar at. Fusce at dapibus mi. Etiam dapibus quam a fringilla vulputate. In turpis ligula, congue vitae erat ac, rhoncus sodales dui. Curabitur at sapien elementum, dictum est vulputate, vestibulum elit. Cras sollicitudin erat nisi, ac laoreet dolor placerat nec.Nam at risus vitae est interdum mattis. Integer vulputate velit sed dui iaculis sollicitudin. Curabitur fermentum scelerisque elementum. Curabitur finibus neque feugiat, sollicitudin enim at, convallis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque elit libero, porttitor eu consequat gravida, fringilla interdum massa. Donec varius enim feugiat magna auctor, vitae tempor velit vehicula. In feugiat, elit eu rutrum varius, neque enim vestibulum risus, vel commodo justo purus ac nisi. Donec fringilla euismod ligula ut semper. Aliquam elementum nec erat et blandit. Nunc faucibus imperdiet lorem, a suscipit libero auctor sit amet.',
    'akang': 'Makdkfkdlskskfkd...',
    'helen': 'HI DENG.'
};

function displayMessage(messageId) {
    var textContainer = document.getElementById('textContainer');
    var messageContent = messages[messageId];

    // Add the message-content class to the content
    textContainer.innerHTML = `<p class="message-content">${messageContent}</p>`;
}





function validateLogin() {
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    // Perform your authentication logic here
    if (username === 'admin' && password === 'admin01') {
        // Redirect to another page upon successful login
        window.location.href = 'personal.html';
    } else {
        // Show a customized error message using SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'BAWWW BUDENGHH',
            text: 'Sala kapa sa login babiiii, Ikaw lang na gn gaan ko pass BWHAHAHA, Iloveyouu',
            confirmButtonColor: '#4158d0',
        });
    }
}