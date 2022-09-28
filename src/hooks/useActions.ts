import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { locationActions } from '../store/location/locationSlice';

const allActions = {
  ...locationActions
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export default useActions;
