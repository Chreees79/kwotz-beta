import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "@components/SoftBox";
import SoftTypography from "@components/SoftTypography";
import SoftButton from "@components/SoftButton";

// Soft UI Dashboard PRO React example components
import DataTable from "@components/Tables/DataTable";

// Data
// import dataTableData from "@pages/dashboard/data/dataTableData";

function ColdRoomsList ({ coldRooms }) {


  function Button({ id }) {
    const link = `/project-edit/${id}`
    return (
      <Link to={link}>
        <SoftButton variant="gradient" color="dark" size="small">
          Voir details
        </SoftButton>
      </Link>
    )
  } 
  
  const dataTableData = {
    columns: [
      { Header: "name", accessor: "name" },
      { Header: "Action", accessor: "button" }
    ],
  
    rows: 
    coldRooms
  };

  return (
    <SoftBox my={3}>
      <Card>
        <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
          <SoftBox lineHeight={1}>
            <SoftTypography variant="h5" fontWeight="medium">
              Chambres froides
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <DataTable
          table={dataTableData}
          entriesPerPage={{
            defaultValue: 5,
            entries: [5, 10],
          }}
        />
      </Card>
    </SoftBox>
  );
}

export default ColdRoomsList;
