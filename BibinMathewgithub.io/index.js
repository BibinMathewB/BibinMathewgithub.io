document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

const searchBtn = document.getElementById('search-btn');
    const zipCodeInput = document.getElementById('zip-code');
    const dealerResults = document.getElementById('dealer-results');

    searchBtn.addEventListener('click', function() {
        const zipCode = zipCodeInput.value;
        if (zipCode) {
            // For the purpose of this example, we use static data.
            // In a real application, you would fetch data from an API here.
            const dealers = [
                { name: 'Kia Dealership Rashidya', address: 'Al Rashidya 3, Ajman, UAE', phone: '050-xxxx-xxx' },
                { name: 'Kia Dealership Hawal', address: 'Sheikh zayad road, Dubai, UAE', phone: '050-xxxx-xxx' }
            ];

            displayDealers(dealers);
        } else {
            dealerResults.innerHTML = '<p>Please enter a valid ZIP code.</p>';
            dealerResults.style.display = 'block';
        }
    });

    function displayDealers(dealers) {
        dealerResults.innerHTML = '';
        dealers.forEach(dealer => {
            const dealerCard = document.createElement('div');
            dealerCard.classList.add('dealer-card');

            const dealerName = document.createElement('h3');
            dealerName.textContent = dealer.name;

            const dealerAddress = document.createElement('p');
            dealerAddress.textContent = `Address: ${dealer.address}`;

            const dealerPhone = document.createElement('p');
            dealerPhone.textContent = `Phone: ${dealer.phone}`;

            dealerCard.appendChild(dealerName);
            dealerCard.appendChild(dealerAddress);
            dealerCard.appendChild(dealerPhone);

            dealerResults.appendChild(dealerCard);
        });
        dealerResults.style.display = 'block';
    }
