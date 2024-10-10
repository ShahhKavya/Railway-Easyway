// Train Status Functionality
document.getElementById('train-status-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const trainNumber = document.getElementById('train-number').value;
    
    document.getElementById('train-status-output').innerHTML = `Train ${trainNumber} is on time and will arrive at platform 3.`;
});

// Booking Functionality
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    
    document.getElementById('booking-form').reset();
    alert(`Ticket booked from ${origin} to ${destination} on ${date}.`);
});

// Parking Finder Functionality
document.getElementById('parking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const stationLocation = document.getElementById('station-location').value;
    
    document.getElementById('parking-output').innerHTML = `Parking spots found near ${stationLocation} Railway Station!`;
});

// SOS Button Functionality
document.getElementById('sos-button').addEventListener('click', function() {
    alert('Emergency services have been contacted at the railway station!');
});
