import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { increaseVisits } from "../../actions/people";
import { RootReducer } from '../../store';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

type AppState = ReturnType<typeof RootReducer>;

const mapStateToProps = (state: AppState) => ({
  current: state.people.current,
});

const mapDispatchToProps = ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

interface PersonDetailsProps extends ConnectedProps<typeof connector> { }


export const PersonDetails: React.FC<PersonDetailsProps> = ({ current }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (current) {
      dispatch(increaseVisits(current))
    }
  }, [])

  return (
    <div>
      <Link to="/people">List</Link>
      Name: {current?.name}
      Name: {current?.firstName}
      Name: {current?.url}
    </div>
  )
}

export default connector(PersonDetails)