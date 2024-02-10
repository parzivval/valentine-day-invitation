<script>
    let leftPos = 0;
    let bottomPos = 0;

    // Event listener for the "Yes" button
    document.getElementById('yessir').addEventListener('click', () => {
        // Display the philosophical question
        alert('Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно длани господней, парящей над миром? По крайней мере, истинно то, что человек не властен даже над своей волей');
        
        // Open the Instagram profile
        openInstagram();
    });

    // Function to open Instagram
    function openInstagram() {
        window.open('https://instagram.com/parziwal', '_blank');
    }

    // Event listeners for the "No" button to move on mouseover and click
    document.getElementById('nooo').addEventListener('mouseover', moveButton);
    document.getElementById('nooo').addEventListener('click', moveButton);

    // Function to move the "No" button
    function moveButton() {
        let leftPos = 0;
        let bottomPos = 0;

// When the "Yes" button is clicked, show an alert and then open Instagram.
document.getElementById('yessir').addEventListener('click', () => {
    alert('Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно длани господней, парящей над миром? По крайней мере, истинно то, что человек не властен даже над своей волей');
    window.open('https://instagram.com/parziwal', '_blank');
});

// Make the "No" button move on mouseover and click by changing its position randomly.
function moveButton() {
    leftPos = Math.floor(Math.random() * (window.innerWidth - document.getElementById('nooo').offsetWidth));
    bottomPos = Math.floor(Math.random() * (window.innerHeight - document.getElementById('nooo').offsetHeight));
    document.getElementById('nooo').style.position = "absolute";
    document.getElementById('nooo').style.left = leftPos + "px";
    document.getElementById('nooo').style.top = bottomPos + "px";
}

document.getElementById('nooo').addEventListener('mouseover', moveButton);
document.getElementById('nooo').addEventListener('click', moveButton);

