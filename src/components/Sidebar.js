import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExploreIcon from '@mui/icons-material/Explore';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = ({ items, onItemSelect }) => (
    <Drawer variant="permanent">
        <List>
            {items.map((item, index) => (
                <ListItem button key={index} onClick={() => onItemSelect(item)}>
                    <ListItemIcon>
                        {item === 'Dashboard' && <DashboardIcon />}
                        {item === 'Data Explorer' && <ExploreIcon />}
                        {item === 'Settings' && <SettingsIcon />}
                    </ListItemIcon>
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </List>
    </Drawer>
);

export default Sidebar;