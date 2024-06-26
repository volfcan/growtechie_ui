import CardModel from "./card-model";
import { SimpleGrid } from "@chakra-ui/react";

const Models = (props: any) => {
  const models = props.data.models;

  const displayModels = models.map((model: any, idx: any) => (
    <CardModel key={idx} model={model}></CardModel>
  ));
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 6 }}>
      {displayModels}{" "}
    </SimpleGrid>
  );
};

export default Models;
