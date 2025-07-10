import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { key: "all", value: "All" },
          { key: "no-discount", value: "No Discount" },
          { key: "with-discount", value: "With Discount" },
        ]}
      ></Filter>
      <SortBy
        options={[
          { key: "name-asc", value: "Sort by name (A-Z)" },
          { key: "name-desc", value: "Sort by name (Z-A)" },
          { key: "regularPrice-asc", value: "Sort by price (low first)" },
          { key: "regularPrice-desc", value: "Sort by price (high first)" },
          { key: "maxCapacity-asc", value: "Sort by capacity (low first)" },
          { key: "maxCapacity-desc", value: "Sort by capacity (high first)" },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableOperations;
