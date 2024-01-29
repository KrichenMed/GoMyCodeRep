import React from "react";
import Product from "./Product";

class Products extends React.Component {
  handleButtonClick = (buttonText, buttonUrl) => {
    console.log(`Button Clicked: ${buttonText}, URL: ${buttonUrl}`);
  };
  render() {
    const cardData = [
      {
        title: "Iphone 15 pro max",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009278906",
        description: "From $1750",
        content:
          "6.7    Super Retina XDR display    ProMotion technology    Always-On display",
        linkText: "Go to Link!",
        linkUrl: "https://gomycode.com/tn/",
        buttonText: "Click me",
        buttonUrl: "https://example.com",
      },
      {
        title: "Iphone 14 pro max",
        imageUrl:
          "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
        description: "From $1500",
        content:
          "6.7    Super Retina XDR display    ProMotion technology    Always-On display",
        linkText: "Visit GoMyCode from this Link",
        linkUrl: "https://gomycode.com/tn/",
        buttonText: "Click me 2",
        buttonUrl: "https://example.com",
      },
      {
        title: "Iphone 13 pro max",
        imageUrl:
          "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg",
        description: "From $1300",
        content: "6.7    Super Retina XDR display    ProMotion technology",
        linkText: "Visit GoMyCode from this Link",
        linkUrl: "https://gomycode.com/tn/",
        buttonText: "Click me",
        buttonUrl: "https://example.com",
      },
      {
        title: "Samsung Galaxy S24 Ultra",
        imageUrl:
          "https://fdn.gsmarena.com/imgroot/news/24/01/samsung-galaxy-s24-ultra-what-to-expect/-326/gsmarena_002.jpg",
        description: "From $1500",
        content: "Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)",
        linkText: "Visit GoMyCode from this Link",
        linkUrl: "https://gomycode.com/tn/",
        buttonText: "Click me",
        buttonUrl: "https://example.com",
      },
      {
        title: "Samsung Galaxy S23 Ultra",
        imageUrl:
          "https://www.phonemart.ng/wp-content/uploads/2023/04/images-55.jpeg",
        description: "From $1200",
        content: "Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 1750 nits (peak)",
        linkText: "Visit GoMyCode from this Link",
        linkUrl: "https://gomycode.com/tn/",
        buttonText: "Click me",
        buttonUrl: "https://example.com",
      },
    ];

    return (
      <div>
        {cardData.map((card, index) => (
          <Product
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
            content={card.content}
            buttonText={"Add"}
            buttonUrl={card.buttonUrl}
            onButtonClick={() => this.props.onAddToCart(card.title)}
          />
        ))}
      </div>
    );
  }
}

export default Products;
