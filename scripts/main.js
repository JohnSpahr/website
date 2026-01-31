		function Email() {
			alert("Send me some mail via: johnspahrphoto [at] gmail [dot] com");
		}

		const cards = document.querySelectorAll('.card');
		const upBtn = document.getElementById('upBtn');
		const downBtn = document.getElementById('downBtn');

		let currentIndex = 0;

		// Detect which card is closest to top of viewport
		function updateCurrentCard() {
			let closest = 0;
			let closestOffset = Infinity;

			cards.forEach((card, index) => {
				const rect = card.getBoundingClientRect();
				const offset = Math.abs(rect.top);
				if (offset < closestOffset) {
					closestOffset = offset;
					closest = index;
				}
			});

			currentIndex = closest;
		}

		function scrollToCard(index) {
			if (index >= 0 && index < cards.length) {
				cards[index].scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		}

		upBtn.addEventListener('click', () => {
			updateCurrentCard();
			scrollToCard(currentIndex - 1);
		});

		downBtn.addEventListener('click', () => {
			updateCurrentCard();
			scrollToCard(currentIndex + 1);
		});

		// Optional: update index while scrolling manually
		window.addEventListener('scroll', () => {
			updateCurrentCard();
		});
