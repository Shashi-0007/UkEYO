

// trackQuantity : false,   
// product_status:[],
// collections:'',
// image :'',
// product_name:'',
// cost_per_item:'',
//unit:[],

// to show images-----------------------------------------------------------------------------------------------------
// import { styled } from '@mui/material/styles';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ListItemText from '@mui/material/ListItemText';
{/* <Box sx={{border : '1px solid rgb(223,223,223)', padding:1, marginTop:1}}>
</Box> */}


            const itemData = [
              // {
              //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              //     title: 'Burger',
              //   },
              // {
              //   img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              //   title: 'Breakfast',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              //   title: 'Camera',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              //   title: 'Coffee',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              //   title: 'Hats',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              //   title: 'Honey',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              //   title: 'Basketball',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              //   title: 'Fern',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              //   title: 'Mushrooms',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              //   title: 'Tomato basil',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              //   title: 'Sea star',
              // },
              // {
              //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              //   title: 'Bike',
              // },
            ];


                  // const Item = styled(Paper)(({ theme }) => ({
                  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  //   ...theme.typography.body2,
                  //   padding: theme.spacing(1),
                  
                  //   color: theme.palette.text.secondary,
                  // }));
                   {/* <Editor
                      editorState={editorState}
                      onEditorStateChange={onEditorStateChange}    
                      toolbar={{
                        inline: { inDropdown: false },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        // image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                      }}
                      /> */}
                    {/* <Box sx={{border : '1px solid rgb(223,223,223)', padding:1}}>
                        <Typography >
                            Media
                        </Typography>
                        <ImageList sx={{ width: '100%', height: 'auto', }} cols={2} rowHeight={310}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>     */}

//--------------------------------------------------------------------------------------------------------------
                  /// Quantity//

                      {/* <Box sx={{border : '1px solid rgb(223,223,223)', padding:1}}>
                        <Typography >
                            QUANTITY
                        </Typography>
                        <Grid container spacing={2} sx={{marginTop:1}}>
                          <Grid item xs={5}  sx={{  padding: 1, marginLeft:1 }}>
                            <Typography >
                              Location Name 
                            </Typography>
                            <Typography sx={{marginTop:1}} >
                              Abc Bussiness Park  Pvt Ltd 
                            </Typography>
                          </Grid>
                          <Grid item xs={5}  sx={{  padding: 1, marginLeft:1 }}>
                          <Typography >
                            Available 
                          </Typography>
                          <Typography sx={{marginTop:1}}>
                              Not Available 
                          </Typography>
                          </Grid>
                        </Grid>
                    </Box>  */}

//---------------------------------------------------------------------------------------------   
           //popup
                    // import Popup from 'reactjs-popup';
                    // import InputLabel from '@mui/material/InputLabel';

                   const [supplierList, setSupplierList]=useState([]);


                    const checkedItem = (e) =>{
                      let { value ,checked } = e.target
                      if(checked){
                      setSupplierList(old => [...old,value] )
                      }else{
                      const index = supplierList.indexOf(value);
                      supplierList.splice(index, 1);
                      console.log('supplier list is is ',supplierList) 
                      setSupplierList( [supplierList] )
        
                      }
                    }
                                {/* <Box>
                      {
                        supplierList.map((items, id)=>{
                          return(
                            <Box key={id}>
                            {items}
                            </Box>
                          )
                        })
                      }
                    </Box> */}
<Box sx={{border : '1px solid rgb(223,223,223)', padding:1, marginTop:1, border:'1px solid red'}}>
                      {/* { const labelsAre = () => {

                          return (
                          <Box> 
                            <Box sx={{display:'flex' ,justifyContent:'space-between!important' , width:'200px'}}>
                              <Box >
                                {items.product_name} 
                              </Box>
                              <Box > 
                                {items.opd_price !== '' ? <>₹{items.opd_price}</> : 'No price'} 
                              </Box>
                              </Box>
                          </Box> 
                          )
                        }} */}
                    <Popup
                      trigger={<Button className="button"> Open Modal     </Button>}
                      modal
                      nested
                    >
                      {close => (
                        <Box className="modal">
                          <Button className="close" onClick={close}>
                            &times;
                          </Button>
                          <Box className="header">Collections </Box>
                          {console.log('supplierList', supplierList)}
                          <Box className="content">
                            {''}
                            <FormControlLabel sx={{ width:'100% !important'}}
                              control= { 
                                <Checkbox  
                                  value='fs'
                                  // value={items.id}
                                  onClick={(e)=>checkedItem(e)}
                                  />  
                                }
                                label='bfghbn'  
                                // label={labelsAre}  
                            /> 
                          </Box>
                          {/* <Box className="actions">
                            <Button
                              className="button"
                              onClick={() => {
                                close();
                              }}
                            >
                              close modal
                            </Button>
                          </Box> */}
                        </Box>
                      )}
                    </Popup>
                    </Box>  


            {/* {
                        const SortableGroupItem = SortableElement(({ value }) => {
                          // console.log('object', value);
                          const index = linkGroups.indexOf(value);
                          return (
                            <>
                              <Box
                                sx={{
                                  marginBottom: "10px",
                                  marginTop: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  variant="string"
                                  sx={{
                                    width: "30%",
                                    border: "1px solid #dcdde0",
                                    padding: " 12px 7px",
                                    borderRadius: "5px",
                                  }}
                                  name="grp"
                                  key={index}
                                >
                                  {ValueAddGrps()}
                                </Typography>
                      
                                <Box
                                  className="react_box"
                                  sx={{
                                    marginBottom: "5px",
                                    marginLeft: "10px",
                                    display: "flex",
                                    marginTop: "25px",
                                    width: "100%",
                                    maxWidth: "40%",
                                  }}
                                ></Box>
                                <Button
                                  sx={{
                                    marginLeft: "53px",
                                    backgroundColor: "#808080",
                                  }}
                                  variant="contained"
                                  onClick={() => handleLinkGroupsRemove(index)}
                                >
                                  -
                                </Button>
                              </Box>
                            </>
                          );
                          //console.log('index is', index) #E8E8E8
                        });
                      } */}

                       {/* {console.log('items.attribute is', value.Attribute)} */}
                       {/* <SortableAttributeList
                        items={linkGroups[indexx].Attribute}
                        onSortEnd={onSortAttributeEnd}
                      /> */}













                      <Box className="output" >
                      {  linkGroups.map((value, index) => {
                        //console.log('index data is', index)
                        console.log("value", value)
                        //  console.log("linkGroups", linkGroups)
                        const ValueAddGrps = () => {
                          let arr = groupOptions.filter(
                            (items) => value.Group === items.value
                          );
                          for (let i = 0; i < arr.length; i++) {
                            return  (
                              <Box>
                                {
                                   "Group : "+ arr[i].label
                                }    
                              </Box>
                              );
                          }
                        };
         
                        return (
                          <Box key={index} >
                           {/* {category.group === value.Group ? console.log('ge') : null} */}
                          
                            <Box key={index}  sx={{ marginBottom:'5px', }} >
                              <Groups linkGroups={linkGroups} ValueAddGrps={ValueAddGrps} 
                               index={index} value={value} handleLinkGroupsRemove={handleLinkGroupsRemove} 
                                attributeOptions={attributeOptions} handleLinkAttributeRemove={handleLinkAttributeRemove}
                                setLinkGroups={setLinkGroups}/>
                                {/* <Box className="groupbox">
                                  <Box className="grouptitle">
                                  {ValueAddGrps()}
                                </Box>                     
                                <Box className="groupicon">
                                  <RemoveIcon
                                  sx={{
                                    marginLeft: "20px",
                                    marginTop: "40px",
                                    color: "white",
                                    backgroundColor: "#808080",
                                    borderRadius: "50%",
                                  }}
                                  className="groupremoveicon"
                                  variant="contained"
                                  onClick={() => handleLinkGroupsRemove(index)}
                                  />
                                </Box>
                              </Box> */}
        
                             
                            </Box>
                              {/* <SortableAttributeList
                                items={linkGroups[indexx].Attribute}
                                onSortEnd={onSortAttributeEnd}
                              /> */}
                          </Box>
                          );
                      })
        
                    } 
                      </Box>








import React, { useEffect, useState, useRef  } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { Paper,  Box,  Button, Typography,  TextField,  FormControlLabel,  Checkbox,  Grid} from "@mui/material";
import AttributeComponent from "./attributeComponent";



 const  Groups = (props) => {

  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
 
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    // console.log('hello ', e);
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  const helloclicl =() =>{
    console.log("okkkkk")
  }
  // console.log("okkkkk", props.linkGroups)

  return (

    <>
    {
    list &&
    list.map((item, index) => (
      <div
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
          {item}
      </div>
      ))}
    
    
      {
      props.linkGroups?.map((value, index)=>{
        const ValueAddGrps = () => {
          let arr = props.groupOptions.filter(
            (items) => value.Group === items.value
          );
          for (let i = 0; i < arr.length; i++) {
            return  (
              <Box>
                {
                   "Group : "+ arr[i].label
                }    
              </Box>
              );
          }
        };
        return(
          <Box key={index} className="maingroup"
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          draggable
          >
               <Box className="groupbox">
                <Box className="grouptitle">
                 {ValueAddGrps()}
                 </Box>                     
             <Box className="groupicon">
                <RemoveIcon
                sx={{
                  marginLeft: "20px",
                  marginTop: "40px",
                  color: "white",
                  backgroundColor: "#808080",
                  borderRadius: "50%",
                }}
                className="groupremoveicon"
                variant="contained"
                // onClick={() => handleLinkGroupsRemove(index)}
                />
              </Box>
            </Box>
            {/* {value.Attribute !== ''? 
                value.Attribute.map((subItems, subIndex)=>{
                console.log('subIndex is', subIndex)
                console.log('subIndex is', subIndex)
                const ValueAddAttribute = () => {
                  let arr = attributeOptions.filter(
                    (items) => subItems.Attribute === items.value
                  );
                  for (let i = 0; i < arr.length; i++) {
                    return  (
                      <Box>
                        { `${subIndex+1}. :  ${arr[i].label}` }    
                      </Box>
                      );
                  }
                };
                  return (
                  <Box sx={{display:'flex', marginBottom:'10px'}}>
                    <AttributeComponent subItems={subItems} ValueAddAttribute={ValueAddAttribute} value={value}
                      handleLinkAttributeRemove={handleLinkAttributeRemove} />
        
        
                  </Box>
                  )
          
              })
           : null} */}
           
            
          </Box>
        )

      })
      
      
      
      
      }
    
   
    {/* {  linkGroups.map((value, index) => {




    })} */}
            
  
    </>
  );


  console.log('linkGroups props', props.value);
  // return (
  //   <Box key={props.index} className="maingroup">
  //     <Box className="groupbox">
  //       <Box className="grouptitle">
  //       {props.ValueAddGrps()}
  //       </Box>                     
  //     <Box className="groupicon">
  //       <RemoveIcon
  //       sx={{
  //         marginLeft: "20px",
  //         marginTop: "40px",
  //         color: "white",
  //         backgroundColor: "#808080",
  //         borderRadius: "50%",
  //       }}
  //       className="groupremoveicon"
  //       variant="contained"
  //       onClick={() => props.handleLinkGroupsRemove(props.index)}
  //       />
  //     </Box>
  //   </Box>
  //   {props.value.Attribute !== ''? 
  //       props.value.Attribute.map((subItems, subIndex)=>{
  //       console.log('subIndex is', subIndex)
  //       console.log('subIndex is', subIndex)
  //       const ValueAddAttribute = () => {
  //         let arr = props.attributeOptions.filter(
  //           (items) => subItems.Attribute === items.value
  //         );
  //         for (let i = 0; i < arr.length; i++) {
  //           return  (
  //             <Box>
  //               { `${subIndex+1}. :  ${arr[i].label}` }    
  //             </Box>
  //             );
  //         }
  //       };
  //         return (
  //         <Box sx={{display:'flex', marginBottom:'10px'}}>
  //           <AttributeComponent subItems={subItems} ValueAddAttribute={ValueAddAttribute} value={props.value}
  //             handleLinkAttributeRemove={props.handleLinkAttributeRemove} />


  //         </Box>
  //         )
  
  //     })
  //                    : null}
  //   {/* <AttributeComponent value={props.value} /> */}
    
  // </Box>
  // )
}

export default Groups;
