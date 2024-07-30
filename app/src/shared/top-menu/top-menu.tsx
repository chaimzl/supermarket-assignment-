import { AppBar, Box, Button, Toolbar,Badge} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const TopMenu = (props: any) => {
  const productCount=useSelector(
    (state: RootState) => state?.cart?.data?.map(x=> x.count)?.reduce((sum:any, num:any) => sum + num,0)
  )
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <div style={{ flex: 1 }}></div>
          <Badge className="me-7 h-15" badgeContent={productCount } color="error">
                <ShoppingCartIcon className="h-15 w-15" />
              </Badge>
          <Button className="ms-3" variant="contained" color="success">
              הזמנת פריטים
            </Button>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
};
