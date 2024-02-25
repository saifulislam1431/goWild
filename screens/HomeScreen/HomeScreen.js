import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import CreateTourScreen from '../CreateTourScreen/CreateTourScreen';
import TourSummaryScreen from '../TourSummaryScreen/TourSummaryScreen';
import ManageTourScreen from '../ManageTourScreen/ManageTourScreen';
import Home from '../Home/Home';
import TourManageDetails from '../ManageTourScreen/TourManageDetails';
import Costs from '../Costs/Costs';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="User_Home" component={Home} options={{
                title: "Home",
                drawerActiveTintColor: "#32a1b9",
                drawerActiveBackgroundColor: "#ffffff",
                drawerContentStyle: {
                    backgroundColor: "#8BD8EA"
                }
            }} />
            <Drawer.Screen name="Expenses" component={ProfileScreen} options={{
                title: "Cost Expenses",
                drawerActiveTintColor: "#32a1b9",
                drawerActiveBackgroundColor: "#ffffff",
                drawerContentStyle: {
                    backgroundColor: "#8BD8EA"
                }
            }} />
            <Drawer.Screen name="Costs" component={Costs} options={{
                title: "Costs",
                drawerItemStyle: { display: 'none' },
                drawerActiveTintColor: "#32a1b9",
                drawerActiveBackgroundColor: "#ffffff",
                drawerContentStyle: {
                    backgroundColor: "#8BD8EA"
                }
            }} />
            <Drawer.Screen name="Create_Tour" component={CreateTourScreen} options={{
                title: "Create Tour",
                drawerActiveTintColor: "#32a1b9",
                drawerActiveBackgroundColor: "#ffffff",
                drawerContentStyle: {
                    backgroundColor: "#8BD8EA"
                }
            }} />
            <Drawer.Screen name="Summary_Tour" component={TourSummaryScreen} options={{
                title: "Tour Summary",
                drawerActiveTintColor: "#32a1b9",
                drawerActiveBackgroundColor: "#ffffff",
                drawerContentStyle: {
                    backgroundColor: "#8BD8EA"
                }
            }} />
            <Drawer.Screen name="Manage_Tour" component={ManageTourScreen} options={{
                title: "Manage Tour",
                drawerActiveTintColor: "#32a1b9",
                drawerActiveBackgroundColor: "#ffffff",
                drawerContentStyle: {
                    backgroundColor: "#8BD8EA"
                }
            }} />
            <Drawer.Screen name="Manage_Tour_Details" component={TourManageDetails} options={{
                title: "Manage Tour Details",
                drawerItemStyle: { display: 'none' },
                drawerActiveTintColor: "#32a1b9",
                drawerActiveBackgroundColor: "#ffffff",
                drawerContentStyle: {
                    backgroundColor: "#8BD8EA"
                }
            }} />
        </Drawer.Navigator>
    );
}

// const styles = StyleSheet.create({})

export default HomeScreen;
