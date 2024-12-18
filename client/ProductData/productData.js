import image from "../src/assets/Products/image.png";
import image1 from "../src/assets/Products/image2.png";
import {
  image2,
  image3,
  image4,
  image5,
} from "../src/assets/SingleProduct/index";

//im2 = https://ibb.co/Qpmzk2w
//im3 =  https://ibb.co/YBYqmQx
//im4 =  https://ibb.co/n3KhsK2
//im5 =  https://ibb.co/hcsBdhv
//im6 =  https://ibb.co/k89jvth =im1
//im7 =  https://ibb.co/7YSsVFB =im2

const productData = [
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4, image4],
    category: "Retrofit Switches",
    dateCreated: "2023-11-20",
    isFeatured: false,
    desc: "Upgrade your home effortlessly with this 4-switch control kit. Easily installed behind your existing switchboard, it requires no additional wiring or wall damage. Control your appliances like lights, fans, ACs, and coolers through your mobile phone, remote, or voice commands via Alexa—all from the comfort of your sofa or bed.",
    features: [
      "No extra wiring or wall damage",
      "Mobile, remote, and voice control (Alexa)",
      "Supports lights, fans, ACs, coolers, and more",
      "Installation support available via call",
    ],
    kitIncludes: [
      "Eco-4N Controller (60mm x 55mm x 21mm)",
      "User manual & warranty card",
    ],
    howItWorks:
      "It will be installed behind your existing switchboard, it doesn't require any additional wiring & physical damage of wall. It gives you power to control all your household appliances like Light, Fan, AC, Cooler, etc., through your Mobile phone, Remote, and even with your voice via Alexa/Google Home, while seated on Sofa or Bed.",
    legalDisclaimer:
      "All product information is provided in good faith. Usage of this product should be in compliance with applicable laws and regulations. The company holds no responsibility for misuse or unintended usage of the product.",
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [
      image1,
      image3,
      image4,
      image5,
      image2,
      image3,
      image4,
      image4,
      image4,
    ],
    category: "Retrofit Switches",
    dateCreated: "2024-10-20",
    isFeatured: false,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [
      image1,
      image3,
      image4,
      image5,
      ,
      image4,
      image2,
      image3,
      image4,
    ],
    category: "Retrofit Switches",
    dateCreated: "2024-11-10",
    isFeatured: true,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Retrofit Switches",
    dateCreated: "2021-11-20",
    isFeatured: true,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, , image4, image5, image2, image3, image4],
    category: "Retrofit Switches",
    dateCreated: "2024-11-22",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [
      image,
      image3,
      image4,
      image5,
      image4,
      image4,
      image2,
      image3,
      image4,
    ],
    category: "Retrofit Switches",
    dateCreated: "2024-11-10",
    isFeatured: true,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4, image4],
    category: "Retrofit Switches",
    dateCreated: "2024-11-24",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Retrofit Switches",
    dateCreated: "2024-11-04",
    isFeatured: true,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Retrofit Switches",
    dateCreated: "2024-10-20",
    isFeatured: true,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Retrofit Switches",
    dateCreated: "2024-02-20",
    isFeatured: true,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2023-10-20",
    isFeatured: false,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-10-10",
    isFeatured: false,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-09-20",
    isFeatured: false,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-03-20",
    isFeatured: true,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2023-10-20",
    isFeatured: true,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-10-19",
    isFeatured: true,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-04-20",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2023-10-20",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-10-10",
    isFeatured: false,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-10-24",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-10-25",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-06-20",
    isFeatured: true,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2023-10-20",
    isFeatured: false,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Sensors",
    dateCreated: "2024-10-10",
    isFeatured: false,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Curtain",
    dateCreated: "2023-10-20",
    isFeatured: false,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Curtain",
    dateCreated: "2024-11-20",
    isFeatured: true,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Curtain",
    dateCreated: "2024-10-10",
    isFeatured: true,
  },
  {
    name: "4 Switch Control With Remote & 1 FAN (10 amp each)",
    originalPrice: "₹5,490.00",
    discountedPrice: "₹5,215.50",
    imageSrc: [image1, image3, image4, image5, image2, image3, image4],
    category: "Smart Curtain",
    dateCreated: "2024-10-23",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Curtain",
    dateCreated: "2024-11-20",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Curtain",
    dateCreated: "2023-10-20",
    isFeatured: false,
  },
  {
    name: "Another Product Name",
    originalPrice: "₹4,990.00",
    discountedPrice: "₹4,699.00",
    imageSrc: [image, image3, image4, image5, image2, image3, image4],
    category: "Smart Curtain",
    dateCreated: "2024-10-23",
    isFeatured: true,
  },

  // Add more products here
];

export default productData;
