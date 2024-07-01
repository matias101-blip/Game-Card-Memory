import {
  Text,
  Heading,
  Grid,
  Box,
  GridItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import Tabla_Score from "./Componentes/tabla";
import Player_One from "/Icon_one_player.png";
import "./inicio.css"

let Inicio = () => {
  return (
    <div id="Inicio">
      <Box mr={150} ml={150} mt={10} p={15} borderRadius="20px">
        <Box
          className="Encabezado"
          display="flex"
          justifyContent="center"
          mb={6}
        >
          <Heading as="h1" size="2xl" w="8em" textAlign="center">
            Juego de cartas de memoria
          </Heading>
        </Box>
        <Grid
          templateRows="repeat(auto-fill, minmax(13em,fr))"
          templateColumns="repeat(auto-fill, minmax(13em ,1fr))"
          gap="3"
        >
          <GridItem
            colSpan="2"
            display="flex"
            gap={4}
            justifyContent="center"
            p={4}
          >
            <Box className="Icon" alignContent="center">
              <Avatar size="lg" src={Player_One} bg="blue.500" />
            </Box>
            <Box
              alignContent="center"
              justifyContent="center"
              display="flex"
              flexDir="column"
              gap="3"
            >
              <Heading as="h2">Modo un Juagador</Heading>
              <Text>
                En este modo debes descubrir los pares en el menor tiempo
                posible
              </Text>
              <Button>Iniciar Partida</Button>
            </Box>
          </GridItem>
          <GridItem colSpan="2" display="flex" gap={4} p={4}>
            <Box alignContent="center">
              <Avatar src={Player_One} size="lg" bg="blue.500" />
            </Box>
            <Box
              alignContent="center"
              display="flex"
              flexDir="column"
              justifyContent="center"
              gap="3"
            >
              <Heading as="h2">Modo Duelo</Heading>
              <Text>
                En este modo puedes jugar con un amigo, tendra una barra de vida
                y su turno sera de 5sg, el que menos vida tenga gana
              </Text>
              <Button>Iniciar Duelo</Button>
            </Box>
          </GridItem>
          <GridItem colStart="3" rowStart="-1" rowEnd="3" id="HighScore">
            <Box className="High_Score" p={2}>
              <Box
                className="Cabezera_Score"
                display="flex"
                justifyContent="center"
              >
                <Heading as="h2">Highscores</Heading>
              </Box>
              <Box className="Cuerpo_Score">
                <Tabla_Score />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};
export default Inicio;
