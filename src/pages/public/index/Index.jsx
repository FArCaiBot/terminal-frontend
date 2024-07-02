import { Banner } from "../../../components/Banner/Banner";
import { Button } from "primereact/button";
import { Topbar } from "../../../components/navbar/Topbar";
export const Index = () => {
  return (
    <>
      <Topbar />
      <Banner />
      <Button outlined label="Hola" />
    </>
  );
};
