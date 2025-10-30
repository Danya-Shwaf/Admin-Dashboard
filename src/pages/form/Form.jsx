import React from "react";
import { Box, Stack, TextField, MenuItem, Button, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Header from "../../components/Header";
export default function Form() {
  const [rule, setRule] = React.useState("User");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const regEmail =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const handleChange = (event) => {
    setRule(event.target.value);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(watch);
  const onSubmit = () => {
    handleClick();
    console.log("done");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Stack direction={"row"} gap={2}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "This field is required & min 3 character."
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "This field is required & min 3 character." : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please provide a valid email address." : null
        }
        {...register("email", { required: true, pattern: regEmail })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.phone)}
        helperText={
          errors.phone ? "Please provide a valid phone number." : null
        }
        {...register("phone", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address1" variant="filled" />
      <TextField label="Address2" variant="filled" />
      <TextField
        id="demo-simple-select"
        variant="filled"
        select
        value={rule}
        label="Rule"
        onChange={handleChange}
      >
        <MenuItem value={"Admin"}>Admin</MenuItem>
        <MenuItem value={"Manager"}>Manager</MenuItem>
        <MenuItem value={"User"}>User</MenuItem>
      </TextField>
      <Box mx="auto">
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            This is a success Alert inside a Snackbar!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
