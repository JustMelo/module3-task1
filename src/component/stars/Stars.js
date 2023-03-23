import Star from "../star/Star";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export default function Stars (props) {

  const cauntStars = (starsCount) => {

    if (typeof(starsCount) !== 'number' || starsCount > 5 || starsCount < 1 ) {
      return
    }

    return [...new Array( starsCount )].map( () => <Star key={nanoid(6)}/> )
  };

  return (
    <ul className="card-body-stars u-clearfix">
      <li>
        {cauntStars(props.count)}
      </li>
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number
}