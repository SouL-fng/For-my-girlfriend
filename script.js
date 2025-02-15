const messages = [
    "Are you sure?",
    "Please pookie?",
    "Just think about it!",
    "I swear,Our date will be the best",
    "Don't be upset to me,I'm so sorry",
    "Don't you love me?",
    "fine, I will stop asking",
    "Just kidding, just say yes my wifey pookie lyy! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}