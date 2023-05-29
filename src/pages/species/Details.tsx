import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { speciesIncreaseVisits } from "../../actions/species";
import { RootReducer } from '../../store';
import { SPECIE_DETAILS_FIELDS, SPECIE_MAIN_ROUTE, SPECIE_TITLE_FIELD } from '../../constants';
import { DetailsDescriptionField } from '../../components/details-description-field/DetailsDescriptionField';
import './Details.css'

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  current: state.species.current as Specie,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface SpecieDetailsProps extends ConnectedProps<typeof connector> { }

export const FilmDetails: React.FC<SpecieDetailsProps> = ({ current }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (current) {
      dispatch(speciesIncreaseVisits(current))
    }
  }, [dispatch, current])

  return (
    <div>
      <Link to={`/${SPECIE_MAIN_ROUTE}`}>List</Link>
      <h1>{current[`${SPECIE_TITLE_FIELD}`]}</h1>
      <div className="details-body">
        <img className='img-placeholder-details' src={current.imgPlaceholder} alt="img placeholder" />
        <DetailsDescriptionField fields={SPECIE_DETAILS_FIELDS} dataSource={current}></DetailsDescriptionField>
      </div>
    </div>
  )
}

export default connector(FilmDetails)