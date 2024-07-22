import { useState } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import Modal from "../../components/Modal/Modal";
import "./MainInfoCard.css";

const photos = [
  {
    photo: "/images/kevin-hart.webp",
    title: "VIP-Abend mit Kevin Hart",
    personName: "Kevin Hart",
    date: "Ab Juli aktiv",
  },
  {
    photo: "/images/doja-cat.webp",
    title: "Event 2",
    personName: "John Doe",
    date: "02.01.2024",
  },
  {
    photo: "/images/prince.webp",
    title: "Event 3",
    personName: "Jane Smith",
    date: "03.01.2024",
  },
  {
    photo: "/images/x-mansion.webp",
    title: "Event 4",
    personName: "Chris Evans",
    date: "04.01.2024",
  },
  {
    photo: "/images/paris.webp",
    title: "Event 5",
    personName: "Scarlett Johansson",
    date: "05.01.2024",
  },
  {
    photo: "/images/musee.webp",
    title: "Event 6",
    personName: "Robert Downey Jr.",
    date: "06.01.2024",
  },
  {
    photo: "/images/bollywood.webp",
    title: "Event 7",
    personName: "Tom Holland",
    date: "07.01.2024",
  },
];

const pastPhotos = [
  {
    photo: "/images/schaffe.webp",
    title: "Event 8",
    personName: "Person 1",
    date: "01.08.2023",
  },
  {
    photo: "/images/event2.jpg",
    title: "Event 9",
    personName: "Person 2",
    date: "02.08.2023",
  },
  {
    photo: "/images/event3.jpg",
    title: "Event 10",
    personName: "Person 3",
    date: "03.08.2023",
  },
  {
    photo: "/images/event4.jpg",
    title: "Event 11",
    personName: "Person 4",
    date: "04.08.2023",
  },
  {
    photo: "/images/event5.jpg",
    title: "Event 12",
    personName: "Person 5",
    date: "05.08.2023",
  },
  {
    photo: "/images/event6.jpg",
    title: "Event 13",
    personName: "Person 6",
    date: "06.08.2023",
  },
  {
    photo: "/images/event7.jpg",
    title: "Event 14",
    personName: "Person 7",
    date: "07.08.2023",
  },
  {
    photo: "/images/event8.jpg",
    title: "Event 15",
    personName: "Person 8",
    date: "08.08.2023",
  },
  {
    photo: "/images/event9.jpg",
    title: "Event 16",
    personName: "Person 9",
    date: "09.08.2023",
  },
  {
    photo: "/images/event10.jpg",
    title: "Event 17",
    personName: "Person 10",
    date: "10.08.2023",
  },
  {
    photo: "/images/event11.jpg",
    title: "Event 18",
    personName: "Person 11",
    date: "11.08.2023",
  },
  {
    photo: "/images/event12.jpg",
    title: "Event 19",
    personName: "Person 12",
    date: "12.08.2023",
  },
  {
    photo: "/images/event13.jpg",
    title: "Event 20",
    personName: "Person 13",
    date: "13.08.2023",
  },
];

const MainInfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1>Ich bin die Startseite</h1>
      <div className="main-content">
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              photo={photo.photo}
              title={photo.title}
              personName={photo.personName}
              date={photo.date}
              onClick={() =>
                openModal(
                  photo.title,
                  "Hier ist der Detailinhalt für " + photo.title
                )
              }
            />
          ))}
        </div>
        <h2>Frühere Erlebnisse</h2>
        <div className="photo-grid">
          {pastPhotos.map((photo, index) => (
            <PhotoCard
              key={index}
              photo={photo.photo}
              title={photo.title}
              personName={photo.personName}
              date={photo.date}
              onClick={() =>
                openModal(
                  photo.title,
                  "Hier ist der Detailinhalt für " + photo.title
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
        />
      </div>
    </>
  );
};

export default MainInfoCard;
