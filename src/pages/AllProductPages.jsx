import React, { useState } from "react";

import data from "../data/data";

import { BiSolidPencil } from "react-icons/bi";
import { IoTrashBin } from "react-icons/io5";
// importing redux methods
import { useSelector, connect } from "react-redux";

// for notification
import { toast } from "react-toastify";

// importing components
import { Loader, Products } from "../components";
// importing reduces and ations
import { resetState, sortByPrice } from "../features";
// importing mui components
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Select from "@mui/material/Select";
import { IconButton, MenuItem, OutlinedInput } from "@mui/material";

const AllProductPages = ({ sortBy, reset }) => {
  // variables
  const [optionValue, setOptionValue] = useState([]);
  const [xVisible, setXVisible] = useState(false);
  const isLoading = useSelector((state) => state.products.loading);
  // sort  by options
  const Options = ["", "asc", "desc"];

  // function to handle option select
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setOptionValue(value);

    if (value === "asc" || value === "desc") {
      // dispatch sort by price action
      sortBy(value);
      // notification
      if (value == "asc") {
        toast.success(`Sorted by Price : Low to High.`);
      } else {
        toast.success(`Sorted by Price : High to Low.`);
      }
      setXVisible(true);
    } else {
      // dispatch sort by price action
      reset();
      // notification
      toast.success(`Order Back to default..!!`);

      setOptionValue("");
      setXVisible(false);
    }
  };

  // loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* <div className="relative">
        <Btn />
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center m-24">
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => (item.isCartItem = true)}
            className="w-full max-w-xl h-28 bg-slate-50 p-3 flex"
          >
            <div className="flex w-1/2">
              <img src={item.image} alt="image" className="w-1/3 h-full mr-4" />
              <div className="flex flex-col">
                <h1 className="overflow-hidden">{item.title}</h1>
                <p className="text-xs">Rs: {item.price}</p>
                <p className="mt-5">{item.rating}</p>
              </div>
            </div>
            <div className="flex flex-col h-full w-1/2 border border-stone-200 hover:shadow-2xl hover:shadow-gray-400 p-2 gap-3">
              <p className="h-2/3 overflow-hidden flex justify-end">
                {item.description}
              </p>
              <div className="items-end w-full justify-end flex gap-6">
                <button>
                  <BiSolidPencil />
                </button>
                <button>
                  <IoTrashBin />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      {/* Select button  start*/}
      <div className="text-right w-full mt-[7%] -mx-3 mb-2">
        <FormControl
          sx={{
            position: "relative",
            m: 3,
            width: 110,
            textAlign: "left",
          }}
        >
          <InputLabel>Sort By Price</InputLabel>

          {/* reset button  section start */}
          <IconButton
            sx={{
              display: `${xVisible ? "block" : "none"}`,
              position: "absolute",
              right: 4,
              top: "-40px",
              width: "50px",
              height: "50px",
              "&:hover": {
                color: "black",
                fontWeight: 600,
                transform: "scale(1.2)",
              },
            }}
            onClick={() => {
              reset();
              toast.success(`Order Back to default..!!`);
              setOptionValue("");
              setXVisible(false);
            }}
            size="small"
          >
            <CloseOutlinedIcon />
          </IconButton>
          {/* reset button  section end */}

          {/* display select */}

          <Select
            value={optionValue}
            onChange={handleChange}
            input={<OutlinedInput label="Sort By Price" />}
          >
            {/* looping options */}
            {Options.map((option, index) => (
              // display options
              <MenuItem
                key={index}
                value={option}
                sx={{ textTransform: "capitalize" }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* select button end */}
      <Products />
    </>
  );
};

// export default AllProductPages;

// sennding  actions to component
const mapDispatchToProp = (dispatch) => {
  return {
    sortBy: (order) => dispatch(sortByPrice(order)),
    reset: () => dispatch(resetState()),
  };
};

// exporting Home components
export default connect(null, mapDispatchToProp)(AllProductPages);
