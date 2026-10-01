document.getElementById('showInfoButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('closeOverlayButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

// Optional: Close overlay if clicking outside the content
document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
