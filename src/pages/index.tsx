import Box from "@component/Box";
import Section10 from "@component/home-3/Section10";
// import Section11 from "@component/home-3/Section11";
// import Section6 from "@component/home-3/Section6";
import Section7 from "@component/home-3/Section7";
import Section8 from "@component/home-3/Section8";
import Section9 from "@component/home-3/Section9";
import Navbar from "@component/navbar/Navbar";
import { Fragment } from "react";
import Section1 from "../components/home-3/Section1";
import AppLayout from "../components/layout/AppLayout";

import {useQuery} from '@apollo/client';
import { VIEWER } from '../apollo/client/queries';

const Index = () => {
    const { data } = useQuery(VIEWER);
    const viewer = data?.viewer;
    console.log(viewer)
  return (
    <Fragment>
      <Navbar />

      <Box my="2rem">
        <Section1 />
        {/*<Section6 />*/}
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        {/*<Section11 />*/}
      </Box>
    </Fragment>
  );
};

Index.layout = AppLayout;

export default Index;
