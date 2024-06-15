import { Navbar } from "../../../components/navbar/Navbar";
import { Banner } from "../../../components/Banner/Banner";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
export const Index = () => {
  const products = [
    {
      code: "P001",
      name: "Laptop",
      category: "Electronics",
      quantity: 15,
    },
    {
      code: "P002",
      name: "Smartphone",
      category: "Electronics",
      quantity: 30,
    },
    {
      code: "P003",
      name: "Tablet",
      category: "Electronics",
      quantity: 20,
    },
    {
      code: "P004",
      name: "Headphones",
      category: "Accessories",
      quantity: 50,
    },
    {
      code: "P005",
      name: "Smartwatch",
      category: "Wearables",
      quantity: 25,
    },
    {
      code: "P006",
      name: "Bluetooth Speaker",
      category: "Accessories",
      quantity: 40,
    },
    {
      code: "P007",
      name: "Monitor",
      category: "Electronics",
      quantity: 10,
    },
    {
      code: "P008",
      name: "Keyboard",
      category: "Accessories",
      quantity: 35,
    },
    {
      code: "P009",
      name: "Mouse",
      category: "Accessories",
      quantity: 45,
    },
    {
      code: "P010",
      name: "External Hard Drive",
      category: "Storage",
      quantity: 20,
    },
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <Button outlined label="Hola" />
      <DataTable
        value={products}
        tableStyle={{ minWidth: "50rem" }}
        size="small"
      >
        <Column filter field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </>
  );
};
