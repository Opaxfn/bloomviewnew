(function() {
    var imageSrc = "https://marketing-assets.smartlead.ai/og/SL+Partner+Badge.png"; // Replace with your actual image URL
    var whitelistedDomains = ["five2one.com.au", "www.five2one.com.au", "thedeallab.com", "www.thedeallab.com"]; // Add your whitelisted domains here
    var imageId = "smartleadEmbedCPPLogo"; // Unique ID for the embeddable image

    function isDomainWhitelisted() {
        var currentDomain = window.location.hostname;
        return whitelistedDomains.includes(currentDomain);
    }

    function displayImage(targetId) {
        if (!isDomainWhitelisted()) {
            console.warn("This domain is not whitelisted to display the image.");
            return;
        }

        var targetDiv = document.getElementById(targetId);
        if (!targetDiv) {
            console.warn("Target div not found.");
            return;
        }

        var imageContainer = document.createElement("div");
        imageContainer.style.maxWidth = "100%"; // Ensures the image container fits within its parent container
        imageContainer.style.textAlign = "center"; // Centers the image

        var image = new Image();
        image.id = imageId; // Set the unique ID for the image
        image.src = imageSrc;
        image.style.width = "100%"; // This width can be adjusted via the setImageWidth function
        image.style.height = "auto"; // Maintains aspect ratio

        imageContainer.appendChild(image);
        targetDiv.appendChild(imageContainer);
    }

    // Public API to allow customization and targeted display
    window.myEmbeddableImage = {
        displayInDiv: displayImage,
        setImageWidth: function(width) {
            var image = document.getElementById(imageId);
            if (image) {
                image.style.width = width;
            } else {
                console.warn("Embeddable image not found.");
            }
        }
    };
})();
