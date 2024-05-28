document.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');

    let count = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;
    likeCount.textContent = count;

    likeButton.addEventListener('click', () => {
        count++;
        likeCount.textContent = count;
        localStorage.setItem('likeCount', count);
    });
});
