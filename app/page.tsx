"use client"; // This is a client component
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import "./styles.css";
import { mockPermitsDB } from "./db";
const theme = createTheme();

const workQuestionOptions = ["interior", "exterior"] as const;
type WorkQuestionOption = typeof workQuestionOptions[number];

type Work = {
  value: string
  label: string
}
const interiorOptionList = ["Bathroom remodel", "New bathroom", "New laundry room", "Other"] as const;
let interiorOptions: Work[] = []
interiorOptionList.forEach(e => {
  interiorOptions.push({ value: e, label: e })
})
type InteriorOptions = typeof interiorOptions[number];

const exteriorOptionList = ["Garage door replacement", "Exterior doors", "Fencing", "Other"] as const;
let exteriorOptions: Work[] = []
exteriorOptionList.forEach(e => {
  exteriorOptions.push({ value: e, label: e })
})
type ExteriorOptions = typeof exteriorOptions[number];

export type FormValues = {
  WorkQuestion: WorkQuestionOption;
  showInteriorWorkQuestion: boolean;
  InteriorOptions: InteriorOptions;
  ExteriorOptions: ExteriorOptions;
};

export default function Home() {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>();

  const watchWorkQuestion = watch("WorkQuestion"); // you can supply default value as second argument

  const onSubmit = (data: FormValues) => {
    console.log(data)
    let permit = mockPermitsDB.find(permit => permit.name == "No Permit")
    if (data.ExteriorOptions) {
      data.ExteriorOptions.forEach((e) => {
        if (e.value == "Exterior doors" || e.value == "Garage door replacement") {
          permit = mockPermitsDB.find(permit => permit.name == "Over-the-Counter Submission Process")
        }
        else if (e.value == "Other") {
          permit = mockPermitsDB.find(permit => permit.name == "In-House Submission Process")
        }
      })
    }
    else if (data.InteriorOptions) {
      data.InteriorOptions.forEach((e) => {
        if (e.value == "Bathroom remodel") {
          permit = mockPermitsDB.find(permit => permit.name == "Over-the-Counter Submission Process")
        }
        else {
          permit = mockPermitsDB.find(permit => permit.name == "In-House Submission Process")
        }
      })
    }
    console.log(permit)
    if (permit) {
      let msg = permit?.displayName + "\n" + permit?.displayDescription.replaceAll("*", "\n*")
      alert(msg)
    }
  };


  // console.log(errors);
  return (
    <ThemeProvider theme={theme}>
      <h1 className="Title">Permit Flow</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <section>
          <label>Where are you working?</label>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label="work type" {...field}>
                <FormControlLabel
                  value="interior"
                  control={<Radio />}
                  label="Inside the home"
                />
                <FormControlLabel
                  value="exterior"
                  control={<Radio />}
                  label="Outside the home"
                />
              </RadioGroup>
            )}
            name="WorkQuestion"
            control={control}
          />
          {watchWorkQuestion == "interior" && (
            <section>
              <label>What projects are you doing?</label>
              <Controller
                render={({ field }) => (
                  <ReactSelect
                    {...field}
                    options={interiorOptions}
                    isClearable
                    isMulti
                  />
                )}
                name="InteriorOptions"
                control={control}
              />
            </section>
          )}
          {watchWorkQuestion == "exterior" && (
            <section>
              <label>What projects are you doing?</label>
              <Controller
                render={({ field }) => (
                  <ReactSelect
                    {...field}
                    options={exteriorOptions}
                    isClearable
                    isMulti
                  />
                )}
                name="ExteriorOptions"
                control={control}
              />
            </section>
          )}
        </section>
        <button className="button">submit</button>
      </form>
    </ThemeProvider >
  );
}
