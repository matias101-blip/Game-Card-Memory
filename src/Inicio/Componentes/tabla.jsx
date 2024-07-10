import {
  Radio,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Tr,
  RadioGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const User_api = "https://668323114102471fa4c946e5.mockapi.io/api/v1/users";

const User_pts_api =
  "https://668323114102471fa4c946e5.mockapi.io/api/v1/user_pts";

const ValorObservable = new BehaviorSubject("Tiempo"); //Valor inicial que sera observado
let Tabla_Score = () => {
  const [TbodyElement, setTbodyElement] = useState([]);
  const [elementos, setElementos] = useState([]);
  const [value, setValue] = useState(ValorObservable.getValue()); //Volvemos el valor en un estado
  useEffect(() => {
    const Surtir = ValorObservable.subscribe((valorNuevo) => {
      setValue(valorNuevo);
      const ThElement = <Th key={valorNuevo}>{valorNuevo}</Th>;
      setElementos([elementos, ThElement]);
      if (valorNuevo === "Tiempo") {
        // Peticion a la api url de la api (https://668323114102471fa4c946e5.mockapi.io/api/v1/users)
        // Los usuarios tiene la forma de {id:1, name:"Iori yagami", score:200}
        fetch(User_api)
          .then((response) => response.json())
          .then((data) => {
            const Tbody = data.map((user, index) => (
              <Tr key={user.id}>
                <Td>{index + 1}</Td>
                <Td>{user.name}</Td>
                <Td>{user.time}</Td>
              </Tr>
            ));
            setTbodyElement([TbodyElement, Tbody]);
          });
      } else {
        fetch(User_pts_api)
          .then((response) => response.json())
          .then((data) => {
            const Tbody = data.map((user, index) => (
              <Tr key={user.id}>
                <Td>{index + 1}</Td>
                <Td>{user.name}</Td>
                <Td>{user.puntos}</Td>
              </Tr>
            ));
            setTbodyElement([TbodyElement, Tbody]);
          });
      }
    });
    return () => Surtir.unsubscribe();
  }, []);
  const cambio = (ValorNuevo) => {
    ValorObservable.next(ValorNuevo);
  };
  return (
    <>
      <RadioGroup
        id="RadioPadre"
        display="flex"
        justifyContent="center"
        gap={10}
        onChange={cambio}
        value={value}
        m={2}
        defaultValue="Tiempo"
      >
        <Radio colorScheme="red" value="Tiempo">
          Tiempo
        </Radio>
        <Radio colorScheme="blue" value="Puntos">
          Puntos
        </Radio>
      </RadioGroup>
      <Table>
        <Thead>
          <Tr>
            <Th>Puesto</Th>
            <Th>Nombre</Th>
            {elementos}
          </Tr>
        </Thead>
        <Tbody id="Tbody">{TbodyElement}</Tbody>
      </Table>
    </>
  );
};

export default Tabla_Score;
