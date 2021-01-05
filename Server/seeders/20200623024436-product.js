"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Product",
      [
        {
          title: "White dress",
          available: true,
          description:
            "latest popular selection - Easy match - Fiery new style - unique design - Slim fit - Elegant Fashion.",
          type: "dress",
          price: 199000,
          imageUrl:
            "https://i.pinimg.com/736x/25/0e/b1/250eb1c1b43eddda52570cadf886547c.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {//maxi dress
          title: "Maxi Dress",
          available: true,
          description:
            "You'll love the Running Free Maxi Dress! This gorgeous dress features lace detailing and a maxi length. This is the perfect dress for any occasion! ...",
          type: "dress",
          price: 990000,
          imageUrl:
            "https://www.showpo.com/on/demandware.static/-/Sites-sp-master-catalog/default/dw1d8cbaeb/images/running-free-maxi-dress/tn_running_free_maxi_dress_in_white.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Slim Elegant lace",
          available: true,
          description:
            "latest popular selection - Easy match - Fiery new style - unique design - Slim fit - Elegant Fashion.",
          type: "dress",
          price: 350000,
          imageUrl:
            "https://dynamic.zacdn.com/hwM8GdoGwYaOTFMZ8lyomaYKAzo=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.sg.zalora.net/p/crystal-korea-fashion-1071-4439711-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "long sleeve lace ball",
          available: true,
          description:
            "A breathtaking choice for the unconventional bride, this wedding dress features contrasting layers of tulle, lace motifs, and Chantilly lace. The sheer bodice features illusion long sleeves, a plunging V-neckline, and scoop back, all accented in 3D floral lace motifs. Hemline trimmed in horsehair, completing the tulle ballgown skirt. Includes detachable modesty panel option for a more demure neckline. Finished with covered buttons over zipper closure.",
          type: "wedding_dress",
          price: 3000000,
          imageUrl:
            "https://www.kleinfeldbridal.com/wp-content/uploads/2019/03/sottero-and-midgley-long-sleeve-lace-ball-gown-wedding-dress-33910704.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Scarpin",
          available: true,
          description:
            "The most beloved type of formal shoes for women, the right Scarpins go perfectly with pencil skirts, trousers, suits, different types of dresses, and all other kinds of work wear.",
          type: "shoe",
          price: 380000,
          imageUrl:
            "https://lojaanimale.vteximg.com.br/arquivos/ids/821701/09030501_0003_1-SCARPIN-DE-VERNIZ-SALTO-ALTO.jpg?v=637153164646500000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Peep-Toe Heels",
          available: true,
          description:
            "It has an opening at the toe-box which allows the toes to show, Peep toe heels are used as both formal wear and party wear.",
          type: "shoe",
          price: 400000,
          imageUrl:
            "https://cheapsalemarket.com/wp-content/uploads/2020/03/Black-High-Heels-Peep-Toe-Platform-Womens-Pumps-Shoes.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Calvin Klein Minimal",
          available: true,
          description:
            "Prime Retail India Limited - Offering Calvin Klein Brown minimal women watch at Rs 19220/piece in Kolkata, West Bengal. Read about company. Get ...",
          type: "watch",
          price: 3600000,
          imageUrl:
            "https://5.imimg.com/data5/GF/YG/MY-7832626/calvin-klein-minimal-women-watch-500x500.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Timex Butterfly",
          available: true,
          description:
            "Buy Timex Butterfly Pattern Dial Women Watch online at best price from IGP. Gift/Send Timex Butterfly Pattern Dial Women Watch online. Send Fashion ...",
          type: "watch",
          price: 3000000,
          imageUrl:
            "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-timex-fashion-analog-golden-dial-watch-for-women-23588-m.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ladies watches",
          available: true,
          description:
            "Cheap Women's Watches, Buy Quality Watches Directly from China Suppliers:Ladies watches Women Fashion Colorful Ultra thin Leather Rhinestone Analog ...",
          type: "watch",
          price: 33000,
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/-RSS0PoEKxe4uv_TkarlM4sdzSgOwukXicMfEN02tCXeqvSsVywhebO7U8ZUc1mtg4qXK5GP2VF_umDhxCYc4PJnOAJcrAYttDUb5MbZo52Xy0XVSewMvFA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FILA trainers",
          available: true,
          description:
            "The Iconic Disruptor II, Comfortable, durable and great looking, these athletic trainers for women and men are a new twist on an old favourite. You'll ...",
          type: "trainers",
          price: 590000,
          imageUrl:
            "https://cf.shopee.vn/file/3c47a539ea7525190b25cc36854b2d5e",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gym trainers",
          available: true,
          description:
            "adidas Sleek Trainers White White U.K. Foreign Secretary: Leave Voters Will Be Disappointed by Brexit Reality adidas all white trainers U.S. Denies ...",
          type: "trainers",
          price: 320000,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKhaIQEF1COJiIBqCS2Nj4nkVvT681WYFFQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FILA Disruptor",
          available: true,
          description:
            "Retro-inspired sneakers from the sports pros at FILA. With sporty-cool vibes + a lace-up silhouette in a sleek, durable faux leather with branded ...",
          type: "trainers",
          price: 690000,
          imageUrl:
            "https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315092941046_010_b?$xlarge$&fit=constrain&qlt=80&wid=683",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Brera continental ",
          available: true,
          description:
            "This elegant and timeless city wallet features a thoughtfully organised interior that offers ample space for cards, notes and coins. Easy to carry in ...",
          type: "purse",
          price: 300000,
          imageUrl:
            "https://d346btfl32uj11.cloudfront.net/media/catalog/product/cache/7/image/800x/9df78eab33525d08d6e5fb8d27136e95/V/9/V9L34__028000R__OC_1_1_1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "black purse",
          available: true,
          description:
            "Amore features a sleek crossbody design, supportive shoulder strap, and high definition graffiti print throughout. A spacious interior ensures ...",
          type: "purse",
          price: 3300000,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/2496/4916/products/product-image-991057547_1200x1200.jpg?v=1571710223",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "wallet classic",
          available: true,
          description:
            "PPallas wallet\r\nM58414 💎\r\nThis versatile Pallas wallet is extremely subtle, stylish and practical.The colorful Monogram canvas and the iconic ...",
          type: "purse",
          price: 259000,
          imageUrl:
            "https://cf.shopee.vn/file/cb0ee438f050905470c7f7fa57462adc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "volatile",
          available: true,
          description:
            "It was only a matter of time, wasn't it? Made for frivolous outings, the Volatile clasp frame purse is the new throw and go purse. Perfect for ...",
          type: "purse",
          price: 320000,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0214/8218/products/status-anxiety-wallet-purse-volatile-black-front.jpg?v=1607572547",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "small handbag",
          available: true,
          description:
            "bags for women small handbag purse shoulder bag lady's mini mobile p",
          type: "purse",
          price: 169000,
          imageUrl:
            "https://ae01.alicdn.com/kf/HTB1RcmwbMaH3KVjSZFpq6zhKpXao/bags-for-women-small-handbag-purse-shoulder-bag-lady-s-mini-mobile-phone-cute-business-handbag.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Product", null, {});
  },
};
