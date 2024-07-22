import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  // Detaildaten id basis laden

  return (
    <div>
      <h1>Detailseite für Event {id}</h1>
      {/* Detailinformationen hier */}
    </div>
  );
};

export default DetailPage;
