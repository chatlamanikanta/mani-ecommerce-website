export function getProduct(prodId){
    let matchingItem;
    products.forEach((product)=>{
      if(product.id===prodId){
        matchingItem = product;
      }
  });
  return matchingItem;
}


// We can use "this" keyword only in function which is inside a class.
// If we try to use "this" keyword out the class it gives the value "undefined"..

export class Products{
  id;
  image;
  name;
  rating;
  priceCents;
  keywords;

  constructor(productDetails){
    this.id=productDetails.id;
    this.image=productDetails.image;
    this.name=productDetails.name;
    this.rating=productDetails.rating;
    this.priceCents=productDetails.priceCents;
    this.keywords=productDetails.keywords;
  }

  getPrice(){
    return `${(this.priceCents/10).toFixed(2)}`;
  }
  getCount(){
    return `${this.rating.count}`;
  }
  extraInfoHTML(){
    return '';
  }
  
}

/*

function check(){ // Currently the value of this is "undefined".
  console.log(this);
}
check.call("Mani"); // But here "this" is replaced with whatever we
                    // mentioned in the "call()"" function.

const obj3={
  method : ()=>{
    console.log(this); // We can't modify "this" in the arrow functions.
                       //Because, in arrow functions we are completely creating a new function.

  }
}
obj3.method();

*/

// Built-In class Date();
// Example
const date=new Date();
console.log(date);
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());

// Inheritance
/*
class Clothing extends Products{
  sizeChartLink;

  constructor(productDetails){
    super(productDetails);
    this.sizeChartLink=productDetails.sizeChartLink;
  }

  extraInfoHTML(){
    // Inheriting parent method
    super.extraInfoHTML();
    return `
      <a href="${this.sizeChartLink}" target="_blank" style="text-decoration:none">
        Size Chart
      </a>
    `;
  }

}

class Appliances extends Products{
  instructionsLink;
  warrentyLink;

  constructor(productDetails){
    super(productDetails);
    this.instructionsLink=productDetails.instructionsLink;
    this.warrentyLink=productDetails.warrentyLink;
  }
  extraInfoHTML(){
    super.extraInfoHTML();
    return `
      <a href="${this.instructionsLink}" target="_blank" style="text-decoration:none; color: rgb(102, 9, 160)">
        Instruction Link
      </a>
      <a href="${this.warrentyLink}" target="_blank" style="text-decoration:none; color: rgb(102, 9, 160);">
        Warranty Link
      </a>
    `;
  }
}
*/

/*
export let products=[];

export function loadProducts(fun){
  const xhr=new XMLHttpRequest();

  xhr.addEventListener('load',()=>{
    products=JSON.parse(xhr.response).map((productDetails)=>{
      return new Products(productDetails);
    });
    console.log(products);
    fun();
  });

  xhr.open('GET','https://supersimplebackend.dev/products');
  xhr.send();
}*/

export const products = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "img/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      image: "img/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 127
      },
      priceCents: 2095,
      keywords: [
        "sports",
        "basketballs"
      ],
    },
    {
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "img/products/t-shirt.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "img/clothing-size-chart.png"
    },
    {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "img/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: "img/ratings/rating-50.png",
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: 'appliance',
      instructionsLink: "img/appliance-instructions.jpg",
      warrentyLink: "img/appliance-warranty.jpg"
    },
    {
      id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
      image: "img/products/6-piece-white-dinner-plate-set.jpg",
      name: "6 Piece White Dinner Plate Set",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 37
      },
      priceCents: 2067,
      keywords: [
        "plates",
        "kitchen",
        "dining"
      ]
    },
    {
      id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      image: "img/products/6-piece-non-stick-baking-set.jpg",
      name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 175
      },
      priceCents: 3499,
      keywords: [
        "kitchen",
        "cookware"
      ]
    },
    {
      id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
      image: "img/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
      name: "Plain Hooded Fleece Sweatshirt",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 317
      },
      priceCents: 2400,
      keywords: [
        "hoodies",
        "sweaters",
        "apparel"
      ]
    },
    {
      id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
      image: "img/products/luxury-tower-set-6-piece.jpg",
      name: "Luxury Towel Set - Graphite Gray",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 144
      },
      priceCents: 3599,
      keywords: [
        "bathroom",
        "washroom",
        "restroom",
        "towels",
        "bath towels"
      ]
    },
    {
      id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
      image: "img/products/liquid-laundry-detergent-plain.jpg",
      name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 305
      },
      priceCents: 2899,
      keywords: [
        "bathroom",
        "cleaning"
      ]
    },
    {
      id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
      image: "img/products/knit-athletic-sneakers-gray.jpg",
      name: "Waterproof Knit Athletic Sneakers - Gray",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 89
      },
      priceCents: 3390,
      keywords: [
        "shoes",
        "running shoes",
        "footwear"
      ]
    },
    {
      id: "5968897c-4d27-4872-89f6-5bcb052746d7",
      image: "img/products/women-chiffon-beachwear-coverup-black.jpg",
      name: "Women's Chiffon Beachwear Cover Up - Black",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 235
      },
      priceCents: 2070,
      keywords: [
        "robe",
        "swimsuit",
        "swimming",
        "bathing",
        "apparel"
      ],
      type: "clothing",
      sizeChartLink: "img/clothing-size-chart.png"
    },
    {
      id: "aad29d11-ea98-41ee-9285-b916638cac4a",
      image: "img/products/round-sunglasses-black.jpg",
      name: "Round Sunglasses",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 30
      },
      priceCents: 1560,
      keywords: [
        "accessories",
        "shades"
      ]
    },
    {
      id: "04701903-bc79-49c6-bc11-1af7e3651358",
      image: "img/products/women-beach-sandals.jpg",
      name: "Women's Two Strap Buckle Sandals - Tan",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 562
      },
      priceCents: 2499,
      keywords: [
        "footwear",
        "sandals",
        "womens",
        "beach",
        "summer"
      ]
    },
    {
      id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
      image: "img/products/blackout-curtain-set-beige.jpg",
      name: "Blackout Curtains Set 4-Pack - Beige",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 232
      },
      priceCents: 4599,
      keywords: [
        "bedroom",
        "curtains",
        "home"
      ]
    },
    {
      id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
      image: "img/products/men-slim-fit-summer-shorts-gray.jpg",
      name: "Men's Slim-Fit Summer Shorts",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 160
      },
      priceCents: 1699,
      keywords: [
        "shorts",
        "apparel",
        "mens"
      ]
    },
    {
      id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
      image: "img/products/electric-glass-and-steel-hot-water-kettle.jpg",
      name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
      rating: {
        stars: "img/ratings/rating-50.png",
        count: 846
      },
      priceCents: 3074,
      keywords: [
        "water boiler",
        "appliances",
        "kitchen"
      ],
      type: 'appliance',
      instructionsLink: "img/appliance-instructions.jpg",
      warrentyLink: "img/appliance-warranty.jpg"
    },
    {
      id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
      image: "img/products/facial-tissue-2-ply-18-boxes.jpg",
      name: "Ultra Soft Tissue 2-Ply - 18 Box",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 99
      },
      priceCents: 2374,
      keywords: [
        "kleenex",
        "tissues",
        "kitchen",
        "tissues box",
        "napkins"
      ]
    },
    {
      id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
      image: "img/products/hat.jpg",
      name: "Straw Lifeguard Sun Hat",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 215
      },
      priceCents: 2200,
      keywords: [
        "hats",
        "straw hats",
        "summer",
        "apparel"
      ]
    },
    {
      id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
      image: "img/products/ear-rings.jpg",
      name: "Sterling Silver Sky Flower Stud Earrings",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 52
      },
      priceCents: 1799,
      keywords: [
        "jewelry",
        "accessories",
        "womens"
      ]
    },
    {
      id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
      image: "img/products/women-stretch-popover-hoodie-black.jpg",
      name: "Women's Stretch Popover Hoodie",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 2465
      },
      priceCents: 1374,
      keywords: [
        "hooded",
        "hoodies",
        "sweaters",
        "womens",
        "apparel"
      ],
      type: "clothing",
      sizeChartLink: "img/clothing-size-chart.png"
    },
    {
      id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
      image: "img/products/bathroom-rug.jpg",
      name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 119
      },
      priceCents: 1250,
      keywords: [
        "bathmat",
        "bathroom",
        "home"
      ]
    },
    {
      id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
      image: "img/products/women-knit-ballet-flat-black.jpg",
      name: "Women's Knit Ballet Flat",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 326
      },
      priceCents: 2640,
      keywords: [
        "shoes",
        "flats",
        "womens",
        "footwear"
      ]
    },
    {
      id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
      image: "img/products/men-golf-polo-t-shirt-blue.jpg",
      name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 2556
      },
      priceCents: 1599,
      keywords: [
        "tshirts",
        "shirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "img/clothing-size-chart.png"
    },
    {
      id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
      image: "img/products/trash-can-with-foot-pedal-50-liter.jpg",
      name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 2286
      },
      priceCents: 8300,
      keywords: [
        "garbage",
        "bins",
        "cans",
        "kitchen"
      ]
    },
    {
      id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
      image: "img/products/duvet-cover-set-blue-twin.jpg",
      name: "Duvet Cover Set with Zipper Closure",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 456
      },
      priceCents: 2399,
      keywords: [
        "bedroom",
        "bed sheets",
        "sheets",
        "covers",
        "home"
      ]
    },
    {
      id: "d2785924-743d-49b3-8f03-ec258e640503",
      image: "img/products/women-chunky-beanie-gray.jpg",
      name: "Women's Chunky Cable Beanie - Gray",
      rating: {
        stars: "img/ratings/rating-50.png",
        count: 83
      },
      priceCents: 1250,
      keywords: [
        "hats",
        "winter hats",
        "beanies",
        "tuques",
        "apparel",
        "womens"
      ]
    },
    {
      id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
      image: "img/products/men-chino-pants-beige.jpg",
      name: "Men's Classic-fit Pleated Chino Pants",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 9017
      },
      priceCents: 2290,
      keywords: [
        "pants",
        "apparel",
        "mens"
      ]
    },
    {
      id: "1c079479-8586-494f-ab53-219325432536",
      image: "img/products/men-athletic-shoes-green.jpg",
      name: "Men's Athletic Sneaker",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 229
      },
      priceCents: 3890,
      keywords: [
        "shoes",
        "running shoes",
        "footwear",
        "mens"
      ]
    },
    {
      id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
      image: "img/products/men-navigator-sunglasses-brown.jpg",
      name: "Men's Navigator Sunglasses Pilot",
      rating: {
        stars: "img/ratings/rating-35.png",
        count: 42
      },
      priceCents: 1690,
      keywords: [
        "sunglasses",
        "glasses",
        "accessories",
        "shades"
      ]
    },
    {
      id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
      image: "img/products/non-stick-cooking-set-15-pieces.jpg",
      name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 511
      },
      priceCents: 6797,
      keywords: [
        "cooking set",
        "kitchen"
      ]
    },
    {
      id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
      image: "img/products/vanity-mirror-silver.jpg",
      name: "Vanity Mirror with Heavy Base - Chrome",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 130
      },
      priceCents: 1649,
      keywords: [
        "bathroom",
        "washroom",
        "mirrors",
        "home"
      ]
    },
    {
      id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
      image: "img/products/women-french-terry-fleece-jogger-camo.jpg",
      name: "Women's Fleece Jogger Sweatpant",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 248
      },
      priceCents: 2400,
      keywords: [
        "pants",
        "sweatpants",
        "jogging",
        "apparel",
        "womens"
      ]
    },
    {
      id: "d339adf3-e004-4c20-a120-40e8874c66cb",
      image: "img/products/double-elongated-twist-french-wire-earrings.jpg",
      name: "Double Oval Twist French Wire Earrings - Gold",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 117
      },
      priceCents: 2400,
      keywords: [
        "accessories",
        "womens"
      ]
    },
    {
      id: "d37a651a-d501-483b-aae6-a9659b0757a0",
      image: "img/products/round-airtight-food-storage-containers.jpg",
      name: "Round Airtight Food Storage Containers - 5 Piece",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 126
      },
      priceCents: 2899,
      keywords: [
        "boxes",
        "food containers",
        "kitchen"
      ]
    },
    {
      id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
      image: "img/products/coffeemaker-with-glass-carafe-black.jpg",
      name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 1211
      },
      priceCents: 2250,
      keywords: [
        "coffeemakers",
        "kitchen",
        "appliances"
      ],
      type: 'appliance',
      instructionsLink: "img/appliance-instructions.jpg",
      warrentyLink: "img/appliance-warranty.jpg"
    },
    {
      id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
      image: "img/products/blackout-curtains-black.jpg",
      name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 363
      },
      priceCents: 3099,
      keywords: [
        "bedroom",
        "home"
      ]
    },
    {
      id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
      image: "img/products/cotton-bath-towels-teal.jpg",
      name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 93
      },
      priceCents: 2110,
      keywords: [
        "bathroom",
        "home",
        "towels"
      ]
    },
    {
      id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
      image: "img/products/knit-athletic-sneakers-pink.jpg",
      name: "Waterproof Knit Athletic Sneakers - Pink",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 89
      },
      priceCents: 3390,
      keywords: [
        "shoes",
        "running shoes",
        "footwear",
        "womens"
      ]
    },
    {
      id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
      image: "img/products/countertop-blender-64-oz.jpg",
      name: "Countertop Blender - 64oz, 1400 Watts",
      rating: {
        stars: "img/ratings/rating-40.png",
        count: 3
      },
      priceCents: 10747,
      keywords: [
        "food blenders",
        "kitchen",
        "appliances"
      ],
      type: 'appliance',
      instructionsLink: "img/appliance-instructions.jpg",
      warrentyLink: "img/appliance-warranty.jpg"
    },
    {
      id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
      image: "img/products/floral-mixing-bowl-set.jpg",
      name: "10-Piece Mixing Bowl Set with Lids - Floral",
      rating: {
        stars: "img/ratings/rating-50.png",
        count: 679
      },
      priceCents: 3899,
      keywords: [
        "mixing bowls",
        "baking",
        "cookware",
        "kitchen"
      ]
    },
    {
      id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
      image: "img/products/kitchen-paper-towels-30-pack.jpg",
      name: "2-Ply Kitchen Paper Towels - 30 Pack",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 1045
      },
      priceCents: 5799,
      keywords: [
        "kitchen",
        "kitchen towels",
        "tissues"
      ]
    },
    {
      id: "bc2847e9-5323-403f-b7cf-57fde044a955",
      image: "img/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
      name: "Men's Full-Zip Hooded Fleece Sweatshirt",
      rating: {
        stars: "img/ratings/rating-45.png",
        count: 3157
      },
      priceCents: 2400,
      keywords: [
        "sweaters",
        "hoodies",
        "apparel",
        "mens"
      ]
    }
].map((product)=>{
  /*if(product.type==='clothing'){
    return new Clothing(product);
  }
  else if(product.type==='appliance'){
    return new Appliances(product);
  }*/
  return new Products(product);
});


  