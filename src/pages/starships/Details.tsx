import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { starshipsIncreaseVisits } from "../../actions/starships";
import { RootReducer } from '../../store';
import { STARSHIP_DETAILS_FIELDS, STARSHIP_MAIN_ROUTE, STARSHIP_TITLE_FIELD } from '../../constants';
import { DetailsDescriptionField } from '../../components/details-description-field/DetailsDescriptionField';
import './Details.css'

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  current: state.starships.current as Vehicle,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface StarshipDetailsProps extends ConnectedProps<typeof connector> { }

export const FilmDetails: React.FC<StarshipDetailsProps> = ({ current }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (current) {
      dispatch(starshipsIncreaseVisits(current))
    }
  }, [dispatch, current])

  return (
    <div>
      <Link to={`/${STARSHIP_MAIN_ROUTE}`}>List</Link>
      <h1>{current[`${STARSHIP_TITLE_FIELD}`]}</h1>
      <div className="details-body">
        <img className='img-placeholder-details' src={current.imgPlaceholder} alt="img placeholder" />
        <DetailsDescriptionField fields={STARSHIP_DETAILS_FIELDS} dataSource={current}></DetailsDescriptionField>
      </div>
    </div>
  )
}

export default connector(FilmDetails)