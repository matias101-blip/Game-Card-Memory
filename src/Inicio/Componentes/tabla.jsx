import {Radio,Box, Table, Thead, Th, Tbody, Td, Tr, RadioGroup} from "@chakra-ui/react";

let Tabla_Score = () => {
  return (
    <>
      <RadioGroup display="flex" justifyContent="center" gap={10} m={2} defaultValue="Tiempo">
        <Radio colorScheme="red" value="Tiempo">
          Tiempo
        </Radio>
        <Radio colorScheme="blue" value="Puntos">
          Puntos
        </Radio>
      </RadioGroup>
      <Table>
        <Thead>
          <Th>Puesto</Th>
          <Th>Nombre</Th>
          <Th>Tiempo</Th>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1st</Td>
            <Td>Thehunter101</Td>
            <Td>30sg</Td>
          </Tr>
          <Tr>
            <Td>2nd</Td>
            <Td className="Username">Iori</Td>
            <Td>35sg</Td>
          </Tr>
          <Tr>
            <Td>3rd</Td>
            <Td className="Username">Jenner</Td>
            <Td>40sg</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default Tabla_Score;
