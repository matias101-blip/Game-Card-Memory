import {
  Radio,
  Box,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Tr,
  RadioGroup
} from "@chakra-ui/react";
import { useEffect, useState} from "react";
import { BehaviorSubject } from "rxjs";

const ValorObservable = new BehaviorSubject("Tiempo") //Valor inicial que sera observado
let Tabla_Score = () => {
  const [TbodyElement, setTbodyElement] = useState([])
  const [elementos, setElementos] = useState([]);
  const [value,setValue] = useState(ValorObservable.getValue()) //Volvemos el valor en un estado
  useEffect(()=>{
    const Surtir = ValorObservable.subscribe((valorNuevo)=>{
      setValue(valorNuevo);
      const ThElement = (<Th key={valorNuevo}>{valorNuevo}</Th>)
      setElementos([elementos, ThElement]);
      if (valorNuevo === "Tiempo"){
        // Peticion a la api
        const Tbody = (
          <Tr>
            <Td>1st</Td>
            <Td>Thehunter101</Td>
            <Td>30sg</Td>
          </Tr>
        );
        setTbodyElement([TbodyElement, Tbody])
      }else{
        const Tbody = (
          <Tr>
            <Td>1st</Td>
            <Td>Iori yagami</Td>
            <Td>200pts</Td>
          </Tr>
        );
        setTbodyElement([TbodyElement, Tbody])
      }
    });
    return()=>Surtir.unsubscribe();
  },[])
  const cambio = (ValorNuevo) =>{
    ValorObservable.next(ValorNuevo)
  }
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
        <Tbody id="Tbody">
          {TbodyElement}
        </Tbody>
      </Table>
    </>
  );
};

export default Tabla_Score;
