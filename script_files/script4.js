// Retrieve saved values from local storage
const cardholderName = localStorage.getItem('cardholderName');
const creditCardNumber = localStorage.getItem('creditCardNumber');
const expiryDate = localStorage.getItem('expiryDate');
const cvc = localStorage.getItem('cvc');

// Populate input fields with saved values
document.getElementById('cardholder-name').value = cardholderName;
document.getElementById('credit-card-number').value = creditCardNumber;
document.getElementById('expiry-date').value = expiryDate;
document.getElementById('cvc').value = cvc;

function showPaymentForm() {
  const selectedGame = document.getElementById('games').value;
  const gameData = getGameData(selectedGame);

  // Clear the body content
  document.body.innerHTML = '';

  // Add new elements
  document.body.innerHTML = `
    <div class="header">
      <!-- Logo image -->
      <img width="110px" src="../image_assets/logo.png" alt="Logo"> 
      <!-- Navigation buttons -->
      <div class="button-container">
        <button class="buttonX">
          <a href="index.html" class="buttonX">Home Page</a>
        </button> 
        <button class="buttonX">
          <a href="aditya.html" class="buttonX">Computer Defender</a>
        </button> 
        <button class="buttonX">
          <a href="dinel.html" class="buttonX">Velocity Rush</a>
        </button> 
        <button class="buttonX">
          <a href="rishit.html" class="buttonX">Batting simulator</a>
        </button> 
      </div>
    </div>
    <div id="game-details" style="flex: 1;">
      <img src="${gameData.image}" alt="${gameData.name}" width="600px" height="725px" style="margin-left: 400px; margin-top: 50px; border: 10px solid rgb(27, 27, 27);">
    </div>
    <div class="details-box">
      <p class="D">Details</p>
      <p>Price: ${gameData.price}</p>
      <br>
      <p>Size: ${gameData.size}</p>
      <br>
      <p>Genre: Sport, Education</p>
      <br>
      <p>Platforms: Scratch, Linux, MacOS, Windows, Web-browser</p>
    </div>
    <div id="payment-form">
      <h2>Enter Payment Information</h2>
      <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: flex-start;">
        <form style="flex: 2;">
          <label for="cardholder-name">Cardholder Name:</label>
          <input type="text" id="cardholder-name" name="cardholder-name"><br><br>
          <label for="credit-card-number">Credit Card Number:</label>
          <input type="text" id="credit-card-number" name="credit-card-number"><br><br>
          <label for="expiry-date">Expiry Date:</label>
          <input type="date" id="expiry-date" name="expiry-date"><br><br>
          <label for="cvc">CVC:</label>
          <input type="text" id="cvc" name="cvc"><br><br>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  `;
}

// Add event listener to "Pay Now" button
document.addEventListener('click', function(event) {
  if (event.target && event.target.type === 'submit') {
    event.preventDefault(); // Prevent form submission

    // Save input values to local storage
    const cardholderName = document.getElementById('cardholder-name').value;
    const creditCardNumber = document.getElementById('credit-card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;

    localStorage.setItem('cardholderName', cardholderName);
    localStorage.setItem('creditCardNumber', creditCardNumber);
    localStorage.setItem('expiryDate', expiryDate);
    localStorage.setItem('cvc', cvc);

    document.body.innerHTML = ''; // Clear the body content
    document.body.innerHTML = `
      <div class="header">
        <!-- Logo image -->
        <img width="110px" src="../image_assets/logo.png" alt="Logo"> 
        <!-- Navigation buttons -->
        <div class="button-container">
          <button class="buttonX">
            <a href="index.html" class="buttonX">Home Page</a>
          </button> 
          <button class="buttonX">
            <a href="aditya.html" class="buttonX">Computer Defender</a>
          </button> 
          <button class="buttonX">
            <a href="dinel.html" class="buttonX">Velocity Rush</a>
          </button> 
          <button class="buttonX">
            <a href="rishit.html" class="buttonX">Batting simulator</a>
          </button> 
        </div>
      </div>
      <div class="ZZSXA"><h1>Thank you for purchasing!</h1></div>
      <footer class="site-footer">
        <div class="footer-content">
          <div class="footer-info">
            <img width="110px" src="../image_assets/logo.png" alt="Logo"> 
            <p><strong>RAD STUDIOS</strong></p>
            <p>Penrith High School</p>
            <p>Phone: (123) 456-7890 | Email: <a href="mailto:RADSTUDIOS@company.com">RADSTUDIOS@company.com</a></p>
          </div>
          <div class="footer-links">
            <p><strong>Quick Links</strong></p>
            <ul>
              <li><a href="dinel.html">Velocity Rush</a></li>
              <li><a href="aditya.html">Computer Defender</a></li>
              <li><a href="rishit.html">Batting Simulator</a></li>
            </ul>
          </div>
          <div class="footer-elms">
            <div class="fire-gifs left">
              <img src="../image_assets/gif1.gif" class="fire-gif" alt="Fire GIF 1">
              <img src="../image_assets/gif1.gif" class="fire-gif" alt="Fire GIF 2">
            </div>
            <div class="fire-gifs right">
              <img src="../image_assets/gif1.gif" class="fire-gif" alt="Fire GIF 3">
              <img src="../image_assets/gif1.gif" class="fire-gif" alt="Fire GIF 4">
            </div>
          </div>
        </div>
      </footer>
    `;
  }
});

function getGameData(gameId) {
  // Define game data for each game
  const games = {
    'computer-defender': {
      name: 'Computer Defender',
      image: '../image_assets/image1.jpg',
      price: '$14.99',
      size: '18 MB'
    },
    'velocity-rush': {
      name: 'Velocity Rush',
      image: '../image_assets/image3.jpg',
      price: '$19.99',
      size: '25 MB'
    },
    'batting-simulator': {
      name: 'Batting Simulator',
      image: '../image_assets/image2.jpg',
      price: '$9.99',
      size: '20 MB'
    }
  };
  return games[gameId];
}

function updateGameDetails(gameData) {
  // Update game details in the DOM
  document.getElementById('game-image').src = gameData.image;
  document.getElementById('game-name').textContent = gameData.name;
  document.getElementById('game-price').textContent = gameData.price;
  document.getElementById('game-size').textContent = `Size: ${gameData.size}`;
}
