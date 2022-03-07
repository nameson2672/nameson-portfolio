import {
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";

const BioList = ({ data, text }) => {
    const bioInfo = [
      {
        date: "1999",
        desc: "Born in Parbat,Nepal",
        id: 1,
      },
      {
        date: "2015",
        desc: "Passed SLC board exam from RASTRIYA BAL SHIKSHA SADAN SCHOOL",
        id: 2,
      },
      {
        date: "2017",
        desc: "Passed NEB board exam from Narayan Secondary School",
        id: 3,
      },
      {
        date: "2017",
        desc: "Learn about computer hardware by training program conducted by Vocational and Skill Development Training Centre of Government of Nepal",
        id: 4,
      },
      {
        date: "2018 to present",
        desc: "Studing BSc Physics",
        id: 5,
      },
    ];
  return (
    <div>
      <Table variant="simple">
        <Tbody>
        {bioInfo.map((e)=>(<Tr key={e.id}>
          <Td>{e.date}</Td>
          <Td>{e.desc} </Td>
        </Tr>))}
        </Tbody>
      </Table>
    </div>
  );
};

export default BioList;
