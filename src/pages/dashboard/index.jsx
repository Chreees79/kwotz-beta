/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// Soft UI Dashboard PRO React components
import SoftBox from "@components/SoftBox";
import SoftTypography from "@components/SoftTypography";
import SoftButton from "@components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "@components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "@components/navbars/DashboardNavbar";
import DataTable from "@components/Tables/DataTable";

// Data
import dataTableData from "@pages/dashboard/data/dataTableData";
import { useUserStore } from "@contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Footer from "@components/Footer";
import NewColdRoom from "@components/NewColdRoom";

const Dashboard = observer(() => {
  const userStore = useUserStore()
  const navigate = useNavigate()

  if (!userStore.authenticated) {
    navigate('/login')
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
            <SoftBox lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Mes Projets
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Retrouvez sur cette page l'ensemble de vos projets
              </SoftTypography>
            </SoftBox>
            <Stack spacing={1} direction="row">
              <Link to="/new_project">
                <SoftButton variant="gradient" color="info" size="small">
                  + nouveau projet
                </SoftButton>
              </Link>
            </Stack>
          </SoftBox>
          <DataTable
            table={dataTableData}
            entriesPerPage={{
              defaultValue: 5,
              entries: [5, 10, 25],
            }}
            canSearch
          />
        </Card>
      </SoftBox>
      <NewColdRoom/>
      <Footer />
    </DashboardLayout>
  );
})

export default Dashboard;