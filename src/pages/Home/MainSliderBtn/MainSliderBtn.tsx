import './MainSliderBtn.scss';

type Props = {
  img: string;
  onClick?: () => void;
};

const MainSliderBtn: React.FC<Props> = ({ img, onClick }) => (
  <button
    className="icon-btn main-slider__btn"
    type="button"
    onClick={onClick}
    aria-label="arrow"
  >
    <img src={img} alt="icon" />
  </button>
);

export default MainSliderBtn;
