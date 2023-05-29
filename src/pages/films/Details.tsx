import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { filmsIncreaseVisits } from "../../actions/films";
import { RootReducer } from '../../store';
import { FILM_DETAILS_FIELDS, FILM_MAIN_ROUTE, FILM_TITLE_FIELD } from '../../constants';
import { DetailsDescriptionField } from '../../components/details-description-field/DetailsDescriptionField';
import './Details.css'

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  current: state.films.current as Film,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface FilmDetailsProps extends ConnectedProps<typeof connector> { }

export const FilmDetails: React.FC<FilmDetailsProps> = ({ current }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (current) {
      dispatch(filmsIncreaseVisits(current))
    }
  }, [dispatch, current])

  return (
    <div>
      <Link to={`/${FILM_MAIN_ROUTE}`}>List</Link>
      <h1>{current[`${FILM_TITLE_FIELD}`]}</h1>
      <div className="details-body">
        <img className='img-placeholder-details' src={current.imgPlaceholder} alt="img placeholder" />
        <DetailsDescriptionField fields={FILM_DETAILS_FIELDS} dataSource={current}></DetailsDescriptionField>
      </div>
    </div>
  )
}

export default connector(FilmDetails)