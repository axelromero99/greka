import React from "react";
import {Flex} from "@chakra-ui/react";
import {BsFillCartFill} from "react-icons/bs";
import {FaMoneyBill} from "react-icons/fa";
import {BsExclamationTriangleFill} from "react-icons/bs";
import {useInView} from "react-intersection-observer";

import InfoSectionData from "../components/InfoSectionData"

const InfoSection: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 300});

  return (
    <>
      <Flex
        alignItems="center"
        backgroundColor="rgb(109 192 198)"
        color="white"
        flexDirection={{base: "row"}}
        flexWrap="wrap"
        justifyContent="space-evenly"
        minHeight="200"
      >
        {/* vale la pena juntar la data en un array y renderizar estos 3 con un .map() ? */}
        <InfoSectionData
          Icon={BsFillCartFill}
          animateIn={inView}
          delayValue={0}
          description="Dentro de las 4 avenidas"
          title="Envios"
        />
        <InfoSectionData
          Icon={FaMoneyBill}
          animateIn={inView}
          delayValue={0.4}
          description="Transferencia o Mercado Pago"
          title="Aceptamos pagos online"
        />
        <InfoSectionData
          Icon={BsExclamationTriangleFill}
          animateIn={inView}
          delayValue={0.8}
          description="Válidos por 7 dias"
          title="Cambios y devoluciones"
        />
      </Flex>
      <div ref={ref} style={{margin: "0px"}} />
    </>
  );
};

export default InfoSection;