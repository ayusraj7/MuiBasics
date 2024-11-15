import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import 'ag-grid-community/styles/ag-theme-alpine.css';
import React, { useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import 'ag-grid-enterprise'

//cell component
//learn about valueGetter, cellRenderer
//resizing columns:defaultColumnDef
//filtering
//access the selected rows using gridapi
const MyCellComponent = (p) => {
  return (
    <>
      <button className="" onClick={() => window.alert("Action!")}>
        +
      </button>
      {p.value}
    </>
  );
};

const AgGrid1 = () => {
  //   const [rowData, setRowData] = useState([
  //     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //     { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   ]);

  //   const defaultColDef = useMemo(()=>{
  //     return {
  //         flex:1,
  //         filter:true,
  //         floatingFilter:true,
  //     }
  //   })
  // defaultColDef={defaultColDef}
  const gridRef = useRef(null);
  const [colDefs, setColDefs] = useState([
    {
      field: "make",
      cellRenderer: MyCellComponent,
      sortable: true,
      headerName: "Company",
      checkboxSelection: true,
      flex: 2,
      valueGetter: (p) => p.data.make + " " + p.data.price,
      maxWidth: 200,
      filter:true,
      searchable:true,
      floatingFilter:true,
    },
    { field: "model", flex: 1, sortable: false },
    {
      field: "price",
      valueGetter: (p) => "$" + p.data.price.toString(),
      flex: 1,
    },
    // { field: "electric",flex:1,sortable:false},
  ]);
  const onButtonClick = () => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + " " + node.model)
      .join(", ");
    alert(`Selected Nodes: ${selectedDataStringPresentation}`);
  };
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((response) => response.json())
      .then((data) => setRowData(getUniqueValues(data)));
  }, []);
  const getUniqueValues = (data) => {
    const newData = [];
    const unique = new Map();
    data?.map((item) => {
      if (!unique.has(item.make)) {
        // If it doesn't exist, initialize it to 1
        unique.set(item.make, 1);
        newData.push(item); // Push the first occurrence
      } else {
        // If it already exists, increment the counter
        unique.set(item.make, unique.get(item.make) + 1);
      }
    });
    return newData;
  };

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 500 }}>
      <button onClick={onButtonClick}>Get selected rows </button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection="multiple"
      />
    </div>
  );
};

export default AgGrid1;
