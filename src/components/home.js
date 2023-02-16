import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = (props) => {
  const {
    countryName, countryFlag, countryRegion, countrySubRegion, countryCapital,
  } = props;

  return (
    <div className="card country-card text-center border-danger mb-3 ms-2" style={{ width: '45%' }}>
      <Link to={`/weather/${countryCapital}`} className="link">
        <div className="row no-gutters">
          <div className="col-md-8">
            <img src={countryFlag} alt={`Flag of ${countryFlag}`} className="card-img-top" />
          </div>
          <div className="col-md-4 pt-4">
            <h5 className="card-title text-white">{countryName}</h5>
            <p className="card-text text-start text-white">
              Continent:&nbsp;
              {countryRegion}
            </p>
            <p className="card-text text-start text-white">
              Subcontinent:&nbsp;
              {countrySubRegion}
            </p>
            <p className="card-text text-start text-white">
              Capital:&nbsp;
              {countryCapital}
            </p>
            <p className="card-text text-center text-white">View Present Weather</p>
          </div>
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
