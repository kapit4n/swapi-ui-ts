import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { increaseVisits } from "../../actions/people";
import { RootReducer } from '../../store';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PERSON_MAIN_ROUTE } from '../../constants';

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  current: state.people.current,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PersonDetailsProps extends ConnectedProps<typeof connector> { }

export const PersonDetails: React.FC<PersonDetailsProps> = ({ current }) => {
  const dispatch = useDispatch()
  const currentPerson = current as Person

  useEffect(() => {
    if (current) {
      dispatch(increaseVisits(current as Person))
    }
  }, [])

  return (
    <div>
      <Link to={PERSON_MAIN_ROUTE}>List</Link>
      Name: {currentPerson?.name}
      URL: {currentPerson?.url}
    </div>
  )
}

export default connector(PersonDetails)