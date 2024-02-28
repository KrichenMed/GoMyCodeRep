import React from "react";
import PlayerCard from "./PlayerCard"; // Adjust the import path based on your file structure

class PlayerList extends React.Component { handleButtonClick = (buttonText, buttonUrl) => {
    // Add logic to handle button click, e.g., show information related to the card
    console.log(`Button Clicked: ${buttonText}, URL: ${buttonUrl}`);
  };

  render() {
    const cardData = [
      {
        title: "Lionel Messi",
        imageUrl:
          "https://www.reuters.com/resizer/ryX5mF4IEJKsz-8FjRel2jc9PVI=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XEEPZPVPD5O4RO76334OJYCQ4M.jpg",
        description: "Considered one of the greatest footballers of all time.",
        age: "34",
        team: "Paris Saint-Germain (PSG)",
        price: "100 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Lionel_Messi",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Lionel_Messi",
      },
      {
        title: "Cristiano Ronaldo",
        imageUrl:
          "https://blogassets.leverageedu.com/media/uploads/2022/11/17123113/Cristiano_Ronaldo_2018.jpg",
        description: "Portuguese forward known for his goal-scoring prowess.",
        age: "36",
        team: "Manchester United",
        price: "90 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
      },
      {
        title: "Neymar Jr.",
        imageUrl:
          "https://images1.wionews.com/images/wion/900x1600/2023/8/18/1692355641053_20230815T203005Z1LYNXMPEJ7E0T0RTROPTP4SOCCERSAUDINEYMAR.JPG",
        description: "Brazilian forward, skillful and creative on the field.",
        age: "29",
        team: "Paris Saint-Germain (PSG)",
        price: "80 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Neymar_Jr.",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Neymar_Jr.",
      },
      {
        title: "Kylian Mbappé",
        imageUrl:
          "https://e3.365dm.com/23/07/1600x900/skynews-kylian-mbappe-goal_6228762.jpg?20230724120200",
        description:
          "French forward, known for his speed and goal-scoring ability.",
        age: "22",
        team: "Paris Saint-Germain (PSG)",
        price: "120 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
      },
      {
        title: "Robert Lewandowski",
        imageUrl:
          "https://www.thesun.co.uk/wp-content/uploads/2023/11/robert-lewandowski-fc-barcelona-reacts-859130783.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
        description:
          "Polish striker, regarded as one of the best goal-scorers.",
        age: "33",
        team: "Bayern Munich",
        price: "70 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Robert_Lewandowski",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Robert_Lewandowski",
      },
      {
        title: "Kevin De Bruyne",
        imageUrl:
          "https://www.coachesvoice.com/wp-content/webpc-passthru.php?src=https://www.coachesvoice.com/wp-content/uploads/2021/10/DeBruyneMobile.jpg&nocache=1",
        description: "Belgian midfielder, known for his passing and vision.",
        age: "30",
        team: "Manchester City",
        price: "90 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Kevin_De_Bruyne",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Kevin_De_Bruyne",
      },
      {
        title: "Mohamed Salah",
        imageUrl:
          "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2023-07/pp-23-24-mens-home-body-salah.webp?itok=hOje16Dr",
        description: "Egyptian forward, known for his speed and goal-scoring.",
        age: "29",
        team: "Liverpool",
        price: "80 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Mohamed_Salah",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Mohamed_Salah",
      },
      {
        title: "Erling Haaland",
        imageUrl:
          "https://i.guim.co.uk/img/media/795ff9fc82d52b955c492afc63b9e25936be892f/0_1548_5689_3413/master/5689.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a8e30628ddd6e40195a2eda87a7c5c51",
        description: "Norwegian striker, rising star in European football.",
        age: "21",
        team: "Borussia Dortmund",
        price: "100 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Erling_Haaland",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Erling_Haaland",
      },
      {
        title: "Sadio Mané",
        imageUrl:
          "https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_660,c_fill/q_auto/v1656496625/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/sadio_mane.png",
        description: "Senegalese forward, known for his pace and goal-scoring.",
        age: "29",
        team: "Liverpool",
        price: "75 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Sadio_Man%C3%A9",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Sadio_Man%C3%A9",
      },
      {
        title: "Harry Kane",
        imageUrl: "https://s.hs-data.com/bilder/spieler/gross/179293.jpg",
        description:
          "English striker, prolific goal-scorer in the Premier League.",
        age: "28",
        team: "Tottenham Hotspur",
        price: "120 million €",
        linkUrl: "https://en.wikipedia.org/wiki/Harry_Kane",
        buttonText: "Learn more",
        buttonUrl: "https://en.wikipedia.org/wiki/Harry_Kane",
      },
    ];


    return (
      <div>
        {cardData.map((card, index) => (
          <PlayerCard
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
            age={card.age}
            team={card.team}
            price={card.price}
            buttonText={card.buttonText}
            buttonUrl={card.buttonUrl}
          />
        ))}
      </div>
    );
  }
}

export default PlayerList;
