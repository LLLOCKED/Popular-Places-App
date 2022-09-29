import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { locationActions } from '../store/location/locationSlice';
import { placesCategoryActions } from '../store/placesCategory/placesCategorySlice';

const allActions = {
  ...locationActions,
  ...placesCategoryActions
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export default useActions;
