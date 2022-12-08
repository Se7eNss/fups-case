import { useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

const useLoading = () =>{
  const context = useContext(LoadingContext)

  if(!context) throw new Error('Loading context must be use inside LoadingProvider');

  return context
}
export default useLoading;