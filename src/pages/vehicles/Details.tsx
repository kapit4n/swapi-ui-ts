import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { vehiclesIncreaseVisits } from "../../actions/vehicles";
import { RootReducer } from '../../store';
import { VEHICLE_DETAILS_FIELDS, VEHICLE_MAIN_ROUTE, VEHICLE_TITLE_FIELD } from '../../constants';
import { DetailsDescriptionField } from '../../components/details-description-field/DetailsDescriptionField';
import './Details.css'

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  current: state.vehicles.current as Vehicle,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface VehicleDetailsProps extends ConnectedProps<typeof connector> { }

export const FilmDetails: React.FC<VehicleDetailsProps> = ({ current }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (current) {
      dispatch(vehiclesIncreaseVisits(current))
    }
  }, [dispatch, current])

  return (
    <div>
      <Link to={`/${VEHICLE_MAIN_ROUTE}`}>List</Link>
      <h1>{current[`${VEHICLE_TITLE_FIELD}`]}</h1>
      <div className="details-body">
        <img className='img-placeholder-details' src={current.imgPlaceholder} alt="img placeholder" />
        <DetailsDescriptionField fields={VEHICLE_DETAILS_FIELDS} dataSource={current}></DetailsDescriptionField>
      </div>
    </div>
  )
}

export default connector(FilmDetails)