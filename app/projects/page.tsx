import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Grid, GridItem } from "@chakra-ui/react";

const projects = () => {
  return (
    <Grid 
      templateColumns={{
        xl: "repeat(3, 1fr)",
        base: "repeat(1,2fr)",
        md: "repeat(2,2fr)",
      }}
     
      gap={9}
      className=" ml-20 mt-20 mr-20  h-screen "
    >
      <GridItem maxW={{lg:'md', base:''}} maxH={{sm:'md'}}  >
        <Card  >
          <CardBody className="bg-black"  >
            <Image
              src="/project1.png"
              alt="Image"
              
              height={550}
              width={550}
              
              className="rounded-[10px]"
              
            />

            <Stack mt="6" spacing="3" className="text-cyan-50" >
              <Heading size="md">Anime Vault</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="bg-black">
            <ButtonGroup spacing="2">
              <Link
                href="https://anime-vault-two-red.vercel.app"
                target="_blank"
              >
                <Button variant="ghost" colorScheme="blue">
                  View Demo
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card maxW="md">
          <CardBody className="bg-black">
            <Image
              src="/project1.png"
              alt="Image"
              height={550}
              width={550}
              className="rounded-[10px]"
            />

            <Stack mt="6" spacing="3" className="text-cyan-50">
              <Heading size="md">Anime Vault</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="bg-black">
            <ButtonGroup spacing="2">
              <Link
                href="https://anime-vault-two-red.vercel.app"
                target="_blank"
              >
                <Button variant="ghost" colorScheme="blue">
                  View Demo
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card  
        maxW={{sm:'lg', lg:'md'}}
        maxH={{base:'', lg:'md'}}
        >
          <CardBody className="bg-black">
            <Image
              src="/project1.png"
              alt="Image"
              height={550}
              width={550}
              className="rounded-[10px]"
            />

            <Stack mt="6" spacing="3" className="text-cyan-50">
              <Heading size="md">Anime Vault</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="bg-black">
            <ButtonGroup spacing="2">
              <Link
                href="https://anime-vault-two-red.vercel.app"
                target="_blank"
              >
                <Button variant="ghost" colorScheme="blue">
                  View Demo
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default projects;
