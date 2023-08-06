import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { educationOptions } from "@/constant/educationOptions";
import Modal from "../Modal";
import { addPerson } from "@/services/personServices";
import { schema } from "@/utils/validation/AddPersonForm";
import { stateOptions } from "@/constant/stateOptions";
import { AddPersonType } from "@/types/person";

interface propTypes {
  onConfirm: (data: AddPersonType) => void;
}
const PersonForm: React.FC<propTypes> = ({ onConfirm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  // suvmit handler
  const handleFormSubmit = async (data: AddPersonType) => {
    setLoading(true);
    try {
      await addPerson(data);
      onConfirm(data);
      setOpen(false);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-2">
        <Button
          variant="contained"
          style={{ fontFamily: "vazir" }}
          onClick={() => setOpen(true)}
        >
          افرودن شخص
        </Button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="افرودن شخص">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Grid container spacing={2} dir="rtl">
            <Grid item xs={6}>
              <TextField
                dir="rtl"
                label="نام"
                variant="outlined"
                fullWidth
                size="medium"
                {...register("name", { required: true })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                dir="rtl"
                size="medium"
                label="نام خوانوادگی"
                variant="outlined"
                fullWidth
                {...register("familyName")}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                dir="rtl"
                type="number"
                label="کد ملی"
                size="medium"
                variant="outlined"
                fullWidth
                {...register("nationalCode", { required: true })}
                error={!!errors.nationalCode}
                helperText={errors.nationalCode?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>تحصیلات</InputLabel>
                <Select
                  size="medium"
                  dir="rtl"
                  label="تحصیلات"
                  {...register("education", { required: true })}
                  error={!!errors.education}
                >
                  {educationOptions.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>وضعیت</InputLabel>
                <Select
                  dir="rtl"
                  size="medium"
                  label="وضعیت"
                  {...register("state", { required: true })}
                  error={!!errors.state}
                >
                  {stateOptions.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box dir="rtl" mt={3}>
            <div className="flex gap-5">
              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                color="primary"
              >
                {!loading ? "افزودن شخص" : "در حال بارگذاری..."}
              </Button>
              <Button
                variant="contained"
                onClick={() => setOpen(false)}
                color="error"
              >
                انصراف
              </Button>
            </div>
          </Box>
        </form>
      </Modal>
    </>
  );
};

export default PersonForm;
