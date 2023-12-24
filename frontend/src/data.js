const data = {
  products: [
    {
      name: 'Samsung Galaxy M34 5G (Waterfall Blue,6GB,128GB)',
      slug: 'samsung-galaxy-m34-5g',
      category: 'Mobile',
      image: '/public/images/p1.webp', // 679px × 829px
      price: 1200,
      countInStock: 14,
      brand: 'Samsung',
      rating: 4.5,
      numReviews: 10,
      description:(
        <ul>
          <li>
            16.42 Centimeters (6.5-Inch) Super AMOLED Display, FHD+ Resolution,
            1080 x 2340 Pixels Protected by Corning Gorilla Glass 5
          </li>
          <li>
            50MP+8MP+2MP Triple Camera Setup - True 50MP No Shake Cam (F1.8)
            Main Camera + 8MP (F2.2) + 2MP (F2.4)| 13MP (F2.0) Front Camera
          </li>
          <li>
            6000mAH Lithium-ion battery, 1 Year Manufacturer Warranty for Device
            and 6 Months Manufacturer Warranty for Inbox Accessories including
            batteries from the date of purchase
          </li>
          <li>4 Generations of OS Upgrades and 5 Years of Security Updates</li>
          <li>
            Exynos 1280 Octa Core 2.4GHz with the 12 Band Support for a True 5G
            Experience
          </li>
        </ul>
      ),
    },
    {
      name: 'OnePlus Nord CE 3 5G',
      slug: 'oneplus-nord-ce-3-5g',
      category: 'Mobile',
      image: '/images/p2.jpeg',
      price: 2500,
      countInStock: 8,
      brand: 'OnePlus',
      rating: 4.0,
      numReviews: 10,
      description: (
        <ul>
          <li>
            Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP
            Ultrawide Camera with Sony IMX355 (FOV: 112 degree) and 2MP Macro
            lens; 16MP Front (Selfie) Camera
          </li>
          <li>
            Camera Features: Ultra Steady Mode, Dual-view Video, HDR,
            Nightscape, Portrait Mode, Video Portrait, Pano, Macro, Slo-mo,
            Time-lapse, Text-scanner, Retouching, Filters, Google Lens, Extra
            HD, Pro Mode
          </li>
          <li>
            Display: 6.7 Inches; 120 Hz AMOLED FHD+, Resolution: 2412 x 1080
            pixels; HDR 10+, sRGB, 10-bit Color Depth, 93.4% Screen to body
            ratio
          </li>
          <li>Operating System: OxygenOS 13 based on Android 13.1</li>
          <li>Processor: Qualcomm Snapdragon 782G Mobile Platform</li>
          <li>Storage: 8 GB + 128 GB | 12 GB + 256 GB; LPDDR4X RAM, UFS 3.1</li>
          <li>Battery & Charging: 5000 mAh with 80W SUPERVOOC Fast-charging</li>
        </ul>
      ),
    },

    {
      name: 'Apple MacBook Air Laptop M1',
      slug: 'apple-macbook-m1',
      category: 'laptop',
      image: '/images/p3.jpg',
      price: 35000,
      countInStock: 15,
      brand: 'Apple',
      rating: 4.8,
      numReviews: 14,
      description: (
        <ul>
          <li>
            All-Day Battery Life – Go longer than ever with up to 18 hours of
            battery life.
          </li>
          <li>
            Powerful Performance –The Apple M1 chip with an 8-core CPU delivers
            up to 3.5x faster performance.
          </li>
          <li>
            Superfast Memory – 8GB of unified memory makes your entire system
            speedy and responsive.
          </li>
          <li>
            Stunning Display – With a 13.3-inch/33.74 cm Retina display, images
            come alive with new levels of realism.
          </li>
          <li>
            Why Mac – Easy to learn. Easy to set up. Astoundingly powerful.
            Intuitive. Packed with apps to use right out of the box. Mac is
            designed to let you work, play, and create like never before.
          </li>
        </ul>
      ),
    },
    {
      name: 'HP Victus Gaming Laptop',
      slug: 'hp-victus-gaming-laptop',
      category: 'laptop',
      image: '/images/p4.jpg',
      price: 18000,
      countInStock: 5,
      brand: 'HP',
      rating: 4.7,
      numReviews: 10,
      description: (
        <ul>
          <li>
            【8-core 12th Gen Intel Core i5-12450H】12 threads and 12MB L3 cache
            enable you to dominate virtual battles and juggle multiple tasks.
          </li>
          <li>
            【NVIDIA GeForce RTX 3050 Laptop GPU】Experience immersive, lifelike
            gameplay with stunning graphics.
          </li>
          <li>
            【Upgraded memory and storage】Make room for all your games with
            512GB PCIe Gen4 NVMe TLC M.2 SSD.
          </li>
          <li>
            【Popular games】Play all your favorite games like League of
            Legends, Valorant, Fortunate, Call of Duty.
          </li>
          <li>
            【Micro-edge display】The 15.6-inch, FHD, 250-nit, 144Hz,
            anti-glare, and micro-edge display keeps you in the thick of action
            with a fast 9 ms response time, reduced image ghosting, and crisp
            visuals.
          </li>
        </ul>
      ),
    },
  ],
};
export default data;
