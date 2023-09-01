import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAdventuresData from '../redux/adventureActions';
import Adventure from './Adventure';

const AdventureList = () => {
  const dispatch = useDispatch();
  const adventures = useSelector((state) => state.adventures.adventures);
  useEffect(() => {
    dispatch(fetchAdventuresData());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center mb-5">Latest Adventures</h1>
      {adventures.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          {adventures.map((adventure) => (
            <Adventure
              key={adventure.id}
              name={adventure.name}
              picture={adventure.picture}
              description={adventure.description}
            />
          ))}
        </div>
      )}

      {adventures.length === 0 && <h3>There are no adventures!</h3>}
    </>
  );
};

export default AdventureList;
