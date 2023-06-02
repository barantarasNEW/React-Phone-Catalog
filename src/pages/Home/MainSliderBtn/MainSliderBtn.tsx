import './MainSliderBtn.scss';

type Props = {
  img: string;
  onClick?: () => void;
};

const MainSliderBtn: React.FC<Props> = ({ img, onClick }) => (
  <button
    type="button"
    className="icon-btn main-slider__btn"
    onClick={onClick}
    aria-label="arrow"
  >
    <img src={img} alt="icon" />
  </button>
);

export default MainSliderBtn;
