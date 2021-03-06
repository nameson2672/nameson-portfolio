import React from "react";
import Transition from "../../components/Transition";
import { Text, useColorModeValue, Container, Grid } from "@chakra-ui/react";
import Work from "../../components/Work";
import workData from "../../lib/worksInfo.json";
import HeadInfo from "../../components/HeadInfo";

const service = () => {
  //const workDataConverted = JSON.parse(workData);

  return (
    <Transition>
     <HeadInfo title={"Nameson Gaudel - Work"}
        image={"/card.jpg"}
        desc={"Project and work I have done"}
        url={`/work`}/>

      <Container maxW={["25em", "md", "2xl"]}>
        <Text
          fontSize={["2xl", "4xl"]}
          fontFamily="monospace"
          fontWeight={"bold"}
          color={"black"}
          _dark={{ color: "white" }}
          my={"2"}
          textDecor={"underline"}
        >
          Works
        </Text>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={6}
          py={"4"}
        >
          {workData.map((e) => (
            <Work
              title={e.title}
              desc={e.desc}
              image={e.image}
              stackList={e.stackList}
              id={e.id}
              key={e.id}
              slug={e.slug}
            />
          ))}
        </Grid>
      </Container>
    </Transition>
  );
};

export default service;
