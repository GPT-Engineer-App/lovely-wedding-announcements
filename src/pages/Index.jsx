import React from "react";
import { Box, Text, VStack, Image, Heading, Container, Center } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="pink.100" minH="100vh" p={5}>
      <Container maxW="container.md">
        <VStack spacing={8} align="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1599462616558-2b75fd26a283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlfGVufDB8fHx8MTcxNDY0MjY2N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Wedding Couple" />
          <Heading as="h1" size="2xl" textAlign="center">
            Emily & Jordan
          </Heading>
          <Text fontSize="xl" color="gray.600">
            are getting married!
          </Text>
          <Text fontSize="lg" color="gray.500">
            Join us on 24th September 2023
          </Text>
          <Center>
            <FaHeart color="red" size="3em" />
          </Center>
          <Text fontSize="md" color="gray.500">
            Venue: Sunset Beach Resort, California
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
