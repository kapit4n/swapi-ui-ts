import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { peopleIncreaseVisits } from "../../actions/people";
import { RootReducer } from '../../store';
import { PERSON_DETAILS_FIELDS, PERSON_MAIN_ROUTE, PERSON_TITLE_FIELD } from '../../constants';
import { DetailsDescriptionField } from '../../components/details-description-field/DetailsDescriptionField';
import './Details.css'

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  current: state.people.current as Person,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PersonDetailsProps extends ConnectedProps<typeof connector> { }

export const PersonDetails: React.FC<PersonDetailsProps> = ({ current }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (current) {
      dispatch(peopleIncreaseVisits(current))
    }
  }, [current, dispatch])

  return (
    <div className='details'>
      <Link to={`/${PERSON_MAIN_ROUTE}`}>List</Link>
      <h1>{current[`${PERSON_TITLE_FIELD}`]}</h1>
      <div className="details-body">
        <img className='img-placeholder-details' src={current.imgPlaceholder} alt="img placeholder"/>
        <DetailsDescriptionField fields={PERSON_DETAILS_FIELDS} dataSource={current}></DetailsDescriptionField>
      </div>
    </div>
  )
}

export default connector(PersonDetails)