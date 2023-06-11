import { moveToTop } from '../../helpers/moveToTop';
import './ButtonMove.scss';

const ButtonMove = () => (
  <div className="button-move">
    <span className="button-move__name">
      Back to top
    </span>

    <button
      type="button"
      className="icon-btn"
      onClick={moveToTop}
    >
      <img src="./icons/up.svg" alt="icon" />
    </button>
  </div>
);

export default ButtonMove;
