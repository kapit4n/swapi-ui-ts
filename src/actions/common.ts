import { AnyAction, Dispatch } from 'redux';
import axios from 'axios';
import { PERSON_IMAGE_PLACEHOLDER, PERSON_OBJECT_TYPE, PLANET_IMAGE_PLACEHOLDER, PLANET_OBJECT_TYPE } from '../constants';

function getPlaceholderByType(objectType: string) {
  switch (objectType) {
    case PERSON_OBJECT_TYPE:
      return PERSON_IMAGE_PLACEHOLDER;
    case PLANET_OBJECT_TYPE:
      return PLANET_IMAGE_PLACEHOLDER;
    default:
      return ""
  }
}

export const loadAsyncCreator = (url: string, successAction: (data: any[]) => AnyAction, objectType: string) => { 
  const fetcherAsync = () => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(url)
      const data = res.data.results;

      const dataWrapper = data.map((d: any) => ({...d, imgPlaceholder: getPlaceholderByType(objectType)}))

      dispatch(successAction(dataWrapper))
    } catch(error) {
      //dispatchError(dispatch, error)
    }
  }

  return fetcherAsync
}

