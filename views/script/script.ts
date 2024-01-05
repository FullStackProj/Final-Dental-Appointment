
    document.addEventListener('DOMContentLoaded', function () {
        // Get the anchor element by its ID
        const myLink: HTMLAnchorElement | null = document.getElementById('myLink') as HTMLAnchorElement;

        // Check if the element exists
        if (myLink) {
            // Add a click event listener
            myLink.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a new page)
                alert('Link clicked!');
            });
        }
    });
