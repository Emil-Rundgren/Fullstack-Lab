import React, { useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

// Define the styled components
const Sidebar = styled(Box)({
  position: "sticky",
  padding: "20px",
  paddingRight: "30px",
  backgroundColor: "#f5f5f5",
  width: "15%",
  overflowX: "hidden",
});

const FilterSidebar: React.FC = () => {
  // priceRange has 2 numbers because the slider downbellow uses 2 starting points, one for the min-value the other for max-value.
  const [priceRange, setPriceRange] = useState<number[]>([0, 20000]);
  const [osFilter, setOsFilter] = useState<{ Windows: boolean; Mac: boolean }>({
    Windows: false,
    Mac: false,
  });
  const [brandFilter, setBrandFilter] = useState<{ [key: string]: boolean }>({
    "Brand A": false,
    "Brand B": false,
  });

  // handlePriceChange handles new values from the Slider component.
  // The type number | number[] is used because the Slider component is designed to handle both single value sliders and range sliders. This function updates the priceRange state with the new values from the slider.
  const handlePriceChange = (__event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  //handleOsChange handles the change event for the OS filter checkboxes.
  // It updates the osFilter state with the new value from the checkbox that was toggled.
  const handleOsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOsFilter({ ...osFilter, [event.target.name]: event.target.checked });
  };

  const handleBrandChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBrandFilter({
      ...brandFilter,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Sidebar>
      <Typography variant="h6">Filter Options</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1">Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto" // Price label is shown when the user, uses the slider
        min={0}
        max={20000}
        step={10}
      />
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1">Operating System</Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={osFilter.Windows}
              onChange={handleOsChange}
              name="Windows"
            />
          }
          label="Windows"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={osFilter.Mac}
              onChange={handleOsChange}
              name="Mac"
            />
          }
          label="Mac"
        />
      </FormGroup>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1">Brand</Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={brandFilter["Brand A"]}
              onChange={handleBrandChange}
              name="Brand A"
            />
          }
          label="Brand A"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={brandFilter["Brand B"]}
              onChange={handleBrandChange}
              name="Brand B"
            />
          }
          label="Brand B"
        />
      </FormGroup>
    </Sidebar>
  );
};

export default FilterSidebar;
