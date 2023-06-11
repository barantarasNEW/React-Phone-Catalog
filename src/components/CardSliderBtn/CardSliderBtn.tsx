import cn from 'classnames';

const classes = (isDis: boolean) => cn(
  'icon-btn', { 'button-dis': isDis },
);

type Props = {
  img: string;
  isDis: boolean;
  onClick: () => void;
};

const CardSliderBtn: React.FC<Props> = ({ img, isDis, onClick }) => (
  <button
    type="button"
    className={classes(isDis)}
    onClick={onClick}
  >
    <img src={img} alt="icon" />
  </button>
);

export default CardSliderBtn;
