import * as React from "react";
import styled from "styled-components";
import { Formik, Form, FieldArray } from "formik";
import Button from "@material-ui/core/Button";

import TextField from "~/components/common/TextField";

interface Power {
  id: number;
  hashrate: string;
  name: string;
  power: string;
}

interface Props {
  data: Power[];
  onSubmit: (any) => void;
}

const AdminPower: React.FC<Props> = ({ data, onSubmit }): JSX.Element => {
  const handleSubmit = ({ power }) => {
    const dataForSend = power.reduce((accum, { id, hashrate, power }) => {
      accum[id] = { hashrate, power };
      return accum;
    }, {});

    onSubmit({ power: dataForSend });
  };

  return (
    <Formik
      initialValues={{ power: data }}
      onSubmit={handleSubmit}
      render={({ values, handleChange }) => (
        <Form>
          <FieldArray
            name="power"
            render={arrayHelpers => (
              <div>
                {values.power &&
                  values.power.length > 0 &&
                  values.power.map(({ hashrate, power, name }, index) => (
                    <FormRow key={index}>
                      <AlgoName>{name}</AlgoName>

                      <FieldWrapper>
                        <TextField
                          name={`power.${index}.hashrate`}
                          value={hashrate}
                          onChange={handleChange}
                          label="hashrate"
                          margin="normal"
                          variant="filled"
                          type="number"
                          fullWidth
                        />
                      </FieldWrapper>
                      <FieldWrapper>
                        <TextField
                          name={`power.${index}.power`}
                          value={power}
                          onChange={handleChange}
                          label="power"
                          margin="normal"
                          variant="filled"
                          type="number"
                          fullWidth
                        />
                      </FieldWrapper>
                    </FormRow>
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

export default AdminPower;

const ActionWrapper = styled.div`
  text-align: right;
  margin-top: 10px;
`;

const AlgoName = styled.div`
  flex-basis: 130px;
`;

const FieldWrapper = styled.div`
  margin-left: 10px;
  flex: 1;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
