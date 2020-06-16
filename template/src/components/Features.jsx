import React, { Suspense, useState } from "react";
import { useQuery } from "react-query";
import { getRequest } from "../services/api";
import { Button, ButtonGroup } from "@material-ui/core";

const FeatureData = ({ currency }) => {
  const { data } = useQuery([currency], getRequest, {
    suspense: true,
  });
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

const Features = () => {
  const [currency, setcurrency] = useState("USD");
  return (
    <>
      <ButtonGroup>
        <Button onClick={() => setcurrency("USD")}>USD</Button>
        <Button onClick={() => setcurrency("EUR")}>EUR</Button>
        <Button onClick={() => setcurrency("CAD")}>CAD</Button>
      </ButtonGroup>
      <Suspense fallback={"Loading features... "}>
        <FeatureData currency={currency} />
      </Suspense>
    </>
  );
};
export default Features;
