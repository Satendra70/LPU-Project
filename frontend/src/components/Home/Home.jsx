import { Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Flex
        h={"80vh"}
        w={"100vw"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading fontSize={["2em", "5em"]}>LPU PROJECT</Heading>
        <Text>Login and Signup Project</Text>
      </Flex>
    </>
  );
};

export default Home;
