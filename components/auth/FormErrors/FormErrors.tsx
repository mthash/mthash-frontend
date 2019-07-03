import * as React from "react";
import styled from "styled-components";
import { isEmpty } from "ramda";

import { RESPONSE_ERROR_NAME } from "~/constants/request";

export interface Props {
  touched?: any;
  errors?: any;
}

export interface State {}

const FormErrors: React.FC<Props> = ({
  touched,
  errors
}): JSX.Element | null => {
  if (isEmpty(errors)) return null;

  return (
    <>
      {Object.entries(errors).map(
        (errorPair): JSX.element => {
          const [name, error] = errorPair;
          const isTouched = touched[name];

          if (isTouched || name === RESPONSE_ERROR_NAME) {
            return <Error key={name}>{error}</Error>;
          }
        }
      )}
    </>
  );
};

export default FormErrors;

const Error = styled.div`
  color: ${p => p.theme.palette.error.primary};
`;
