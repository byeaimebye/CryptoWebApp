import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid'
import TopNavData from './TopNavData';
import TopFour from './TopFour';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';




const heart = [
    {
        field: 'fav',
        headerName: 'Fav',
        renderCell: (params) => {
          return (
            <IconButton onClick={(ev) => {
              // Función para manejar el cambio de estado (acá está la dificultad)
            }}>
              <Icon>favorite_border</Icon>
            </IconButton>
          )
        }
      },
]

const columns = [
   
  {
    field: 'fav',
    headerName: 'Fav',
    renderCell: (params) => {
      return (
        <IconButton onClick={(ev) => {
          // Función para manejar el cambio de estado (acá está la dificultad)
        }}>
          <Icon>favorite_border</Icon>
        </IconButton>
      )
    }
  },
    {field: 'fav',
        headerName: 'Fav',
         field: 'id', 
         headerName: 'Nombre', 
         width: 250,
       },
    {
      field: 'price',
      headerName: 'Precio',
      type: 'number',
      width: 200,
      editable: false,
    },
    {
      field: 'change',
      headerName: '24hs Cambio',
      type: 'number',
      width: 230,
      editable: false,
    },
    {
      field: 'volume',
      headerName: '24hs Volumen',
      type: 'number',
      width: 230,
      editable: false,
     
    },
    {
      field: 'marketCap',
      headerName: 'MarketCap',
      type: 'number',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 230,
     
    },
  ];



export default function DataTable({coinsData, deleteUser}) {

    
  let rows = coinsData.map(coin => { 
    return {
      id: coin.id,
      price: coin.current_price,
      change: coin.price_change_24h,
      volume: coin.market_cap_change_24h,
      marketCap: Math.round(coin.market_cap/1000000)
     }
   }) 
  
  return (
      
    <>
        <TopNavData
        coinsData={coinsData}
        deleteUser={deleteUser}/>
        <TopFour
        coinsData={coinsData}/>
        <div className="topTen">
            Top 10
        </div>
        <div style={{ height: '650px', width: '90%', margin: '20px auto'}}>
      <DataGrid
       
        
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
       
        
      />
    </div>
    </>
  );
}
