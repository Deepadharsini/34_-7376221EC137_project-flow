// src/context/GrievanceContext.js
import  { createContext, useState } from 'react';

export const GrievanceContext = createContext();

export const GrievanceProvider = ({ children }) => {
  const [grievances, setGrievances] = useState([]);
  const [resolvedGrievances, setResolvedGrievances] = useState([]);

  const addGrievance = (title, description) => {
    const newGrievance = {
      id: Date.now(),
      title,
      description,
      upvotes: 0,
      userUpvoted: false,
      resolved: false,
    };
    setGrievances([newGrievance, ...grievances]);
  };

  const toggleUpvote = (id) => {
    setGrievances((prevGrievances) =>
      prevGrievances.map((grievance) =>
        grievance.id === id
          ? {
              ...grievance,
              upvotes: grievance.userUpvoted
                ? grievance.upvotes - 1
                : grievance.upvotes + 1,
              userUpvoted: !grievance.userUpvoted,
            }
          : grievance
      )
    );
  };

  const resolveGrievance = (id) => {
    const grievanceToResolve = grievances.find((g) => g.id === id);
    if (grievanceToResolve) {
      grievanceToResolve.resolved = true;
      setResolvedGrievances([grievanceToResolve, ...resolvedGrievances]);
      setGrievances(grievances.filter((g) => g.id !== id));
    }
  };

  return (
    <GrievanceContext.Provider
      value={{
        grievances,
        resolvedGrievances,
        addGrievance,
        toggleUpvote,
        resolveGrievance,
      }}
    >
      {children}
    </GrievanceContext.Provider>
  );
};
