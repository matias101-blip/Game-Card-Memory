// importa el componente model de la libreria chakra-ui
import { useState, useContext } from "react";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { UsersContext } from "../../main";
import { ValidUser } from "./Valid";
const Login_2 = () => {
  const { Users, setUsers } = useContext(UsersContext);
  const { user1, user2 } = Users;
  const { setUser1, setUser2 } = setUsers;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input1, setInput1] = useState("");
  const handleChange1 = (e) => {
    setInput1(e.target.value);
  };
  const isError1 = input1 === "";
  const [input2, setInput2] = useState("");
  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };
  const isError2 = input2 === "";
  return (
    <>
      <Button onClick={onOpen}>Iniciar Duelo</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={2}>
              <Text>
                Antes de continuar al juego, por favor ingrese el nombre de los
                2 jugadores :3
              </Text>
              <FormControl isInvalid={isError1}>
                <FormLabel>Jugador 1</FormLabel>
                <Input type="text" value={input1} onChange={handleChange1} />
                {!isError1 ? (
                  <FormHelperText>Jugador 1, Listo!!!</FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Por favor nombre de usuario del jugador 1
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isError2}>
                <FormLabel>Jugador 2</FormLabel>
                <Input type="text" value={input2} onChange={handleChange2} />
                {!isError2 ? (
                  <FormHelperText>Jugador 2, Listo!!!</FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Por favor nombre de usuario del jugador 2
                  </FormErrorMessage>
                )}
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                if (ValidUser(input1, input2)) {
                  setUser1(input1);
                  setUser2(input2);
                  onClose();
                } else {
                  onClose();
                }
              }}
              colorScheme="blue"
              mr={3}
            >
              Iniciar
            </Button>
            <Button mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Login = () => {
  const { Users, setUsers } = useContext(UsersContext);
  const { setUser1 } = setUsers;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const isError = input === "";
  return (
    <>
      <Button onClick={onOpen}>Iniciar Juego</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={2}>
              <Text>
                Antes de continuar al juego, por favor ingrese un nombre de
                usuario :3
              </Text>
              <FormControl isInvalid={isError}>
                <FormLabel>Nombre de ususario</FormLabel>
                <Input type="text" value={input} onChange={handleChange} />
                {!isError ? (
                  <FormHelperText>Puedes Iniciar a jugar</FormHelperText>
                ) : (
                  <FormErrorMessage>
                    Por favor ingresa un nombre de usuario
                  </FormErrorMessage>
                )}
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                if (ValidUser(input, "un jugador")) {
                  setUser1(input);
                  onClose();
                } else {
                  onClose();
                }
              }}
              colorScheme="blue"
              mr={3}
            >
              Iniciar
            </Button>
            <Button mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { Login, Login_2 };
