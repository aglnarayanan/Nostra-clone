
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }
  const images = document.querySelectorAll('#carousel img');
    let current = 0;

    function changeSlide(direction) {
      images[current].classList.remove('opacity-100');
      images[current].classList.add('opacity-0');

      current = (current + direction + images.length) % images.length;

      images[current].classList.remove('opacity-0');
      images[current].classList.add('opacity-100');
    }
    function removeBar(){
      const discountBar = document.getElementById("discountBar");
      if(discountBar){
        discountBar.remove();
        const navbar = document.querySelector("nav");
        navbar.style.top = "0";
      }
    }

    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }
    
    // Dummy image data
    const collections = [
      { id: 1, name: "Summer Red", price: "₹299", arrival: "New", color: "Red", location: "Summer", img: "images/o10.avif" },
      { id: 2, name: "Party Blue", price: "₹399", arrival: "New", color: "Blue", location: "Party", img: "images/o11.avif" },
      { id: 3, name: "Beach Beach", price: "₹299", arrival: "Old", color: "Blue", location: "Beach", img: "images/o12.avif" },
      { id: 4, name: "Party White", price: "₹299", arrival: "Old", color: "White", location: "Party", img: "images/o13.avif" },
      { id: 5, name: "Summer White", price: "₹299", arrival: "New", color: "White", location: "Summer", img: "images/o5-5.avif" },
      { id: 6, name: "Summer Black", price: "₹549", arrival: "New", color: "Black", location: "Summer", img: "images/o6-6.avif" },
      { id: 7, name: "Party Red", price: "₹499", arrival: "Old", color: "Red", location: "Party", img: "images/o12.avif" },
      { id: 8, name: "Beach Blue", price: "₹399", arrival: "Old", color: "Blue", location: "Beach", img: "images/o8.avif" },
      { id: 9, name: "Beach Blue", price: "₹399", arrival: "Old", color: "Blue", location: "Beach", img: "images/o9.avif" }
    ];
    
    // Show images
    function displayCollections(data) {
      const container = document.getElementById('collectionContainer');
      container.innerHTML = "";
    
      data.forEach(item => {
        container.innerHTML += `
          <div class="border  overflow-hidden hover:shadow-lg transition">
            <img src="${item.img}" alt="${item.name}" class="w-full h-60 object-cover">
            <div class="p-4">
              <p class="font-semibold text-lg">${item.name}</p>
              <p class="text-gray-500">${item.price}</p>
            </div>
          </div>
        `;
      });
    }
    
    // Initial display
    displayCollections(collections);
    
    // Search function
    document.getElementById('searchInput').addEventListener('input', function() {
      const searchValue = this.value.toLowerCase();
      const filtered = collections.filter(item => item.name.toLowerCase().includes(searchValue));
      displayCollections(filtered);
    });