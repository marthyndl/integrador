import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const Filters = () => {
  /* const { onFilterChange } = useContext(
    DataContext
  ) as unknown as ProductContextType;
 */
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
