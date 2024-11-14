 const offers = document.querySelectorAll('input[name="offer"]');
        const totalPriceElement = document.getElementById('total-price');

        offers.forEach(offer => {
            offer.addEventListener('change', (event) => {
                const selectedPrice = event.target.getAttribute('data-price');
                totalPriceElement.textContent = selectedPrice;
            });
        });
