// Function to show details about an artist
function showDetails(artist) {
    // You can enhance this to show more detailed information about each artist
    alert(`Learn more about ${artist} and their music!`);
}

// Function to handle ticket purchase
function buyTickets() {
    const ticketUrl = "https://ticketwebsite.com"; // Replace with actual ticketing URL

    if (ticketUrl && ticketUrl.startsWith("http")) {
        window.location.href = ticketUrl;
    } else {
        alert("Ticket purchase URL is not set correctly.");
    }
}

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Example of handling form data (e.g., sending to a server)
    // Uncomment and customize the following lines if you want to send the data to a server
    // fetch('https://yourserver.com/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // }).then(response => {
    //     if (response.ok) {
    //         alert("Thank you for reaching out! We will get back to you shortly.");
    //         document.getElementById('contactForm').reset(); // Reset form fields
    //     } else {
    //         alert("There was an error submitting your form. Please try again.");
    //     }
    // });

    alert("Thank you for reaching out! We will get back to you shortly.");
    document.getElementById('contactForm').reset(); // Reset form fields
});

// Sample data for events based on dates
const eventSchedule = {
    "2024-08-15": [
        "10:00 AM - Opening Ceremony",
        "12:00 PM - Rock Band Performance",
        "2:00 PM - DJ Set"
    ],
    "2024-08-16": [
        "11:00 AM - Indie Band Showcase",
        "1:00 PM - Pop Music Concert",
        "3:00 PM - Acoustic Session"
    ],
    "2024-08-17": [
        "9:00 AM - Early Morning Jam Session",
        "11:00 AM - Electronic Dance Music",
        "4:00 PM - Festival Finale Performance"
    ]
};

// Function to display events based on selected date
function showEvents() {
    const selectedDate = document.getElementById("event-date").value;
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = ""; // Clear previous events

    if (eventSchedule[selectedDate]) {
        const events = eventSchedule[selectedDate];
        events.forEach(event => {
            const eventItem = document.createElement("p");
            eventItem.textContent = event;
            eventList.appendChild(eventItem);
        });
    } else {
        const noEventItem = document.createElement("p");
        noEventItem.textContent = "No events scheduled for this date.";
        eventList.appendChild(noEventItem);
    }
}

<script src="script.js" defer></script>
