import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { planetsIncreaseVisits } from "../../actions/planets";
import { RootReducer } from '../../store';
import { PLANET_DETAILS_FIELDS, PLANET_MAIN_ROUTE, PLANET_TITLE_FIELD } from '../../constants';
import { DetailsDescriptionField } from '../../components/details-description-field/DetailsDescriptionField';
import './Details.css'

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  current: state.planets.current as Planet,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PlanetDetailsProps extends ConnectedProps<typeof connector> { }

export const PlanetDetails: React.FC<PlanetDetailsProps> = ({ current }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (current) {
      dispatch(planetsIncreaseVisits(current))
    }
  }, [dispatch, current])

  return (
    <div>
      <Link to={`/${PLANET_MAIN_ROUTE}`}>List</Link>
      <h1>{current[`${PLANET_TITLE_FIELD}`]}</h1>
      <div className="details-body">
        <img className='img-placeholder-details' src={current.imgPlaceholder} alt="img placeholder" />
        <DetailsDescriptionField fields={PLANET_DETAILS_FIELDS} dataSource={current}></DetailsDescriptionField>
      </div>
    </div>
  )
}

export default connector(PlanetDetails)