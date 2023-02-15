import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const {
    countryName, countryFlag, countryRegion, countrySubRegion, countryCapital,
  } = props;

  return (
    <div className="card country-card text-center border-danger mb-3 ms-2" style={{ width: '18rem' }}>
      <Link to={`/weather/${countryCapital}`} className="link">
        <div className="image">
          <img src={countryFlag} alt={`Flag of ${countryFlag}`} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{countryName}</h5>
          <p className="card-text text-start text-dark">
            <strong>Continent: </strong>
            {countryRegion}
          </p>
          <p className="card-text text-start text-dark">
            <strong>Subcontinent: </strong>
            {countrySubRegion}
          </p>
          <p className="card-text text-start text-dark">
            <strong>Capital: </strong>
            {countryCapital}
          </p>
          <p className="card-text text-center">View Present Weather</p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;

CountryCard.propTypes = {
  countryName: PropTypes.string,
  countryFlag: PropTypes.string,
  countryRegion: PropTypes.string,
  countrySubRegion: PropTypes.string,
  countryCapital: PropTypes.string,
};

CountryCard.defaultProps = {
  countryName: '',
  countryFlag: '',
  countryRegion: '',
  countrySubRegion: '',
  countryCapital: '',
};
