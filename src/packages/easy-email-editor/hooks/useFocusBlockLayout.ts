import { useContext } from 'react';
import { FocusBlockLayoutContext } from '../components/Provider/FocusBlockLayoutProvider/index';

export function useFocusBlockLayout() {
  return useContext(FocusBlockLayoutContext);
}
