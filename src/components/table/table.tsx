import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchTimeAction } from '../../store/api-actions';

function Table() : JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTimeAction());
  }, [dispatch])
  
  return (
    <div>
      <h1>Главный компонент</h1>
    </div>
  )
}

export default Table;
