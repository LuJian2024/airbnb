import { useState } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import Modal from "../../components/Modal/Modal";
// import MainCarousel from "../../components/MainCarousel/MainCarousel";
import "./MainInfoCard.css";

const photos = [
  {
    photo: "/images/x-mansion.webp",
    title: "Train at the X-Mansion",
    personName: "Jubilee",
    date: "€ 35 per guest",
    carouselImages: [
      "/images/x-mansion.webp",
      "/images/x-2.webp",
      "/images/x-3.webp",
      "/images/x-4.webp",
      "/images/x-5.webp",
    ],
    liveButton: true,
  },
  {
    photo: "/images/kevin-open.webp",
    title: "Go VIP with Kevin Hart",
    personName: "Kevin Hart",
    date: "Coming August 21",
    carouselImages: [
      "/images/kevin-open.webp",
      "/images/kevin-2.webp",
      "/images/kevin-4.jpeg",
      "/images/kevin-3-3.webp",
      "/images/kevin-5.jpeg",
    ],
  },
  {
    photo: "/images/doja-cat.webp",
    title: "Join a living room session with Doja",
    personName: "Doja Cat",
    date: "Coming October",
  },
  {
    photo: "/images/prince.webp",
    title: "Stay in Prince's Purple Rain house",
    personName: "Wendy and Lisa",
    date: "Coming October",
  },

  {
    photo: "/images/paris.webp",
    title: "Open the Olympic Games at Musée",
    personName: "Mathieu Lehanneur",
    date: "Sold out",
  },
  {
    photo: "/images/musee.webp",
    title: "Wake up in the Musée d’Orsay",
    personName: " Mathieu Lehanneur",
    date: "Sold out",
    carouselImages: [
      "/images/musee.webp",
      "/images/6-c-2.webp",
      "/images/6-c-3.webp",
      "/images/6-c-4.webp",
      "/images/6-c-5.webp",
    ],
  },
  {
    photo: "/images/bollywood.webp",
    title: "Live like Bollywood star Janhvi Kapoor",
    personName: "Janhvi Kapoor",
    date: "Sold out",
    carouselImages: [
      "/images/bollywood.webp",
      "/images/7-c-2.webp",
      "/images/7-c-3.webp",
      "/images/7-c-4.webp",
      "/images/7-c-5.webp",
    ],
  },
];

const pastPhotos = [
  {
    photo: "/images/schaffe.webp",
    title: "Event 8",
    personName: "Person 1",
    date: "01.08.2023",
    carouselImages: [
      "/images/schaffe.webp",
      "/images/8-2.webp",
      "/images/8-3.webp",
      "/images/8-4.jpeg",
      "/images/8-5.jpeg",
    ],
  },
  {
    photo: "/images/9-1.jpg",
    title: "Design your Incredibles Supersuit",
    personName: "Edna Mode",
    date: "Sold out",
    carouselImages: [
      "/images/9-1.jpeg",
      "/images/9-2.webp",
      "/images/9-3.webp",
      "/images/9-4.jpeg",
      "/images/9-5.webp",
    ],
  },
  {
    photo: "/images/10-1.webp",
    title: "Go on tour with Feid",
    personName: "Feid",
    date: "Sold out",
    carouselImages: [
      "/images/10-1.webp",
      "/images/10-2.webp",
      "/images/10-3.webp",
      "/images/10-4.webp",
      "/images/10-5.webp",
    ],
  },
  {
    photo: "/images/11-1.webp",
    title: "Game with Khaby Lame",
    personName: "Khaby Lame",
    date: "Sold out",
    carouselImages: [
      "/images/11-1.webp",
      "/images/11-2.webp",
      "/images/11-3.webp",
      "/images/11-4.webp",
      "/images/11-5.webp",
    ],
  },
  {
    photo: "/images/12-1.webp",
    title: "Crash at the X-Mansion",
    personName: "Jubilee",
    date: "Sold out",
    carouselImages: [
      "/images/12-1.webp",
      "/images/12-2.webp",
      "/images/12-3.webp",
      "/images/12-4.webp",
      "/images/12-5.webp",
    ],
  },
  {
    photo: "/images/13-1.jpg",
    title: "Spend the night in the Ferrari Museum",
    personName: "Marc Gené",
    date: "Sold out",
    carouselImages: [
      "/images/13-1.jpeg",
      "/images/13-2.jpeg",
      "/images/13-3.webp",
      "/images/13-4.webp",
      "/images/13-5.webp",
    ],
  },
  {
    photo: "/images/14-plus-1.webp",
    title: "Drift off in the Up house",
    personName: "Carl Fredricksen",
    date: "Sold Out",
    carouselImages: [
      "/images/14-plus-1.webp",
      "/images/14-plus-2.webp",
      "/images/14-3.webp",
      "/images/14-4.webp",
      "/images/14-5.webp",
    ],
  },
  {
    photo: "/images/15-1.webp",
    title: "Shrek’s Swamp",
    personName: "Donkey",
    date: "Sold out",
    carouselImages: [
      "/images/15-1.webp",
      "/images/15-2.webp",
      "/images/15-3.webp",
      "/images/15-4.webp",
      "/images/15-5.webp",
    ],
  },
  {
    photo: "/images/16-1.webp",
    title: "Barbie’s Malibu DreamHouse, Ken’s Way",
    personName: "Ken",
    date: "Sold out",
    carouselImages: [
      "/images/16-1.webp",
      "/images/16-2.webp",
      "/images/16-3.webp",
      "/images/16-4.webp",
      "/images/16-5.webp",
    ],
  },
  {
    photo: "/images/17-1.webp",
    title: "Ted Lasso’s Favorite Pub",
    personName: "Mae",
    date: "Sold out",
    carouselImages: [
      "/images/17-1.webp",
      "/images/17-2.webp",
      "/images/17-3.webp",
      "/images/17-4.webp",
      "/images/17-5.webp",
    ],
  },
  {
    photo: "/images/18-1.webp",
    title: "Houseplant Retreat",
    personName: "Set Rogen",
    date: "Sold out",
    carouselImages: [
      "/images/18-1.webp",
      "/images/18-2.webp",
      "/images/18-3.webp",
      "/images/18-4.webp",
      "/images/18-5.webp",
    ],
  },
  {
    photo: "/images/19-1.jpg",
    title: "Home Alone Holiday",
    personName: "Buzz",
    date: "Sold out",
    carouselImages: [
      "/images/19-1.jpeg",
      "/images/19-2.webp",
      "/images/19-3.webp",
      "/images/19-4.jpeg",
      "/images/19-5.webp",
    ],
  },
  {
    photo: "/images/20-1.webp",
    title: "The Last Blockbuster",
    personName: "Sandy",
    date: "Sold out",
    carouselImages: [
      "/images/20-1.webp",
      "/images/20-2.webp",
      "/images/20-3.webp",
      "/images/20-4.webp",
      "/images/20-5.webp",
    ],
  },
];

const MainInfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
    photo: "",
  });

  const openModal = (title, content, photo) => {
    setModalContent({ title, content, photo });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="main-content">
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div key={index}>
              {/* {photo.carouselImages ? (
                <div>
                  <h2>{photo.title}</h2>
                  <MainCarousel images={photo.carouselImages} />
                </div>
              ) : ( */}
              <PhotoCard
                // key={index}
                photo={photo.photo}
                title={photo.title}
                personName={`hosted by ${photo.personName}`}
                date={photo.date}
                carouselImages={photo.carouselImages}
                liveButton={photo.liveButton}
                onClick={() =>
                  openModal(
                    photo.title,
                    "Hier ist der Detailinhalt für " + photo.title,
                    photo.photo
                  )
                }
              />
            </div>
          ))}
        </div>
        <h2 className="past-experiences">Past Experiences</h2>
        <div className="photo-grid">
          {pastPhotos.map((photo, index) => (
            <PhotoCard
              key={index}
              photo={photo.photo}
              title={photo.title}
              personName={photo.personName}
              date={photo.date}
              // hier
              carouselImages={photo.carouselImages}
              onClick={() =>
                openModal(
                  photo.title,
                  "Hier ist der Detailinhalt für " + photo.title,
                  photo.photo
                )
              }
            />
          ))}
        </div>
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          title={modalContent.title}
          content={modalContent.content}
          photo={modalContent.photo}
        />
      </div>
    </>
  );
};

export default MainInfoCard;
