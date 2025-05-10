import { useNavigate } from "react-router-dom";

interface BookTourProps {
  className?: string;
}

const BookTour: React.FC<BookTourProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex ${className}`}>
      <button
        onClick={() => navigate("/explore")}
        className="text-[33px] text-[#42a8bb] hover:text-white border-2 border-[#42a8bb] hover:border-white uppercase px-16 py-1 font-BebasNueue"
      >
        Explore Newcastle
      </button>
    </div>
  );
};

export default BookTour;
