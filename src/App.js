import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Avatar, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const mockData = [
  { name: 'Alice', profilePic: 'https://via.placeholder.com/150', progress: 75 },
  { name: 'Bob', profilePic: 'https://via.placeholder.com/150', progress: 60 },
  { name: 'Charlie', profilePic: 'https://via.placeholder.com/150', progress: 90 },
  { name: 'David', profilePic: 'https://via.placeholder.com/150', progress: 45 },
];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchData = async () => {

      const sortedData = mockData.sort((a, b) => b.progress - a.progress);
      setData(sortedData);
    };

    fetchData();
  }, []);

  return (
    <Box>
      {/* Header */}
      <Box bg="gray.100" p={4}>
        <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
          <Avatar
            size="lg"
            name="John Doe"
            src="https://via.placeholder.com/150" // Replace this with actual image
          />
        </Flex>
      </Box>

      {/* List of potentials */}
      <Box p={4} maxW="1200px" mx="auto">
        {data.map((person, index) => (
          <Flex
            key={index}
            align="center"
            justify="space-between"
            bg="white"
            p={4}
            mb={4}
            borderRadius="md"
            boxShadow="md"
          >
            <Flex align="center">
              <Avatar
                size="md"
                name={person.name}
                src={person.profilePic}
              />
              <Text fontSize="lg" fontWeight="bold" ml={4}>
                {person.name}
              </Text>
            </Flex>

            {/* Perceptage match */}
            <CircularProgress
              value={person.progress}
              size="60px"
              color="teal.400"
            >
              <CircularProgressLabel>{person.progress}%</CircularProgressLabel>
            </CircularProgress>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}

export default App;
