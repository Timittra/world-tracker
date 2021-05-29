import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountry, setLoading } from '../../actions/searchActions';
import Spinner from '../layout/Spinner';


export class Country extends Component {
  componentDidMount() {
    this.props.fetchCountry(this.props.match.params.name);
    this.props.setLoading();
  }
  render() {
    const { loading, country } = this.props;
   console.log(country); 

    let countryInfo = (
      <div className="container">
    <div className="row">
      <div className="col-md-4 card card-body">
        <img src={country.flag} className="thumbnail" alt="Poster" />
      </div>
      <div className="col-md-8">
        <h2 className="mb-4">{country.name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Region:</strong> {country.region}
          </li>
          <li className="list-group-item">
            <strong>Area:</strong> {country.area}
          </li>
          <li className="list-group-item">
            <strong>Native Name:</strong> {country.nativeName}
          </li>
          <li className="list-group-item">
            <strong>Capital:</strong> {country.capital}
          </li>
          <li className="list-group-item">
            <strong>Population:</strong> {country.population}
          </li>
          <li className="list-group-item">
            <strong>Subregion:</strong> {country.subregion}
          </li>
          <li className="list-group-item">
            <strong>Nationality:</strong> {country.demonym}
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="card card-body bg-dark my-5 text-light">
        <div className="col-md-12">
          <Link to="/" className="btn btn-default text-light">
            Go Back To Search
          </Link>
        </div>
      </div>
    </div>
  </div>
);

    let content = loading ? <Spinner /> : countryInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.countries.loading,
  country: state.countries.country
});

export default connect(
  mapStateToProps,
  { fetchCountry, setLoading }
)(Country);