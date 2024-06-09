import { createContext } from "react";
export const FilterContext = createContext('All')
export default function FilterContextWrapper({children, context})
{
    return(
        <FilterContext.Provider value={context}>
            {children}
        </FilterContext.Provider>
    );
}