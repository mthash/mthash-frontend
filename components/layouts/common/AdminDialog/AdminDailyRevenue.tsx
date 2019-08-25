import * as React from "react";
import styled from "styled-components";
import { Formik, Form, FieldArray } from "formik";
import Button from "@material-ui/core/Button";

import TextField from "~/components/common/TextField";

interface Revenue {
  id: number;
  revenue: number;
  symbol: string;
}

interface Props {
  data: Revenue[];
  onSubmit: (any) => void;
}

const AdminDailyRevenue: React.FC<Props> = ({
  data,
  onSubmit
}): JSX.Element => {
  const handleSubmit = ({ dailyRevenue }) => {
    const dataForSend = dailyRevenue.reduce((accum, { id, revenue }) => {
      accum[id] = revenue;
      return accum;
    }, {});

    onSubmit(dataForSend);
  };

  return (
    <Formik
      initialValues={{ dailyRevenue: data }}
      onSubmit={handleSubmit}
      render={({ values, handleChange }) => (
        <Form>
          <FieldArray
            name="dailyRevenue"
            render={arrayHelpers => (
              <div>
                {values.dailyRevenue &&
                  values.dailyRevenue.length > 0 &&
                  values.dailyRevenue.map(({ revenue, symbol }, index) => (
                    <div key={index}>
                      <TextField
                        name={`dailyRevenue.${index}.revenue`}
                        value={revenue}
                        onChange={handleChange}
                        label={symbol}
                        margin="normal"
                        variant="filled"
                        type="number"
                        fullWidth
                      />
                    </div>
                  ))}
                <ActionWrapper>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </ActionWrapper>
              </div>
            )}
          />
        </Form>
      )}
    />
  );
};

export default AdminDailyRevenue;

const ActionWrapper = styled.div`
  text-align: right;
  margin-top: 10px;
`;
