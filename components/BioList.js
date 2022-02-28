import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const BioList = ({ data, text }) => {
    const bioInfo = [
        {
            date: "1999",
            desc: "Born in Parbat,Nepal"
        },
      {
        date: "2015",
        desc: "Passed SLC board exam from RASTRIYA BAL SHIKSHA SADAN SCHOOL",
      },
      {
        date: "2017",
        desc: "Passed NEB board exam from Narayan Secondary School",
        },
        {
            date: "2017",
            desc:"Learn about computer hardware by traning program by Nepal grovenments Vocational and Skill Development Traning Centre "
      },
        {
            date: "2018 to present",
            desc: "Studing BSc Physics"
      }
    ];
  return (
    <div>
      <Table variant="simple">
        <Tbody>
        {bioInfo.map((e)=>(<Tr>
          <Td>{e.date}</Td>
          <Td>{e.desc} </Td>
        </Tr>))}
          {/* <Tr>
            <Td>inches</Td>
            <Td>millimetres </Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
          </Tr> */}
        </Tbody>
      </Table>
    </div>
  );
};

export default BioList;
