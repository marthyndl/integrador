import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const Filters: React.FC = (): JSX.Element | null => {
  const appContext = useContext(DataContext);

  if (!appContext) return null;
  const { onFilterChange } = appContext;

  return (
    <div>
      <input
        type="text"
        placeholder="Search... Title"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filters;
