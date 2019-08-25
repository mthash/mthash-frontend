import * as React from "react";
import styled from "styled-components";

interface FieldErrors {
  [name: string]: string[];
}

interface Props {
  message: string;
  details: FieldErrors;
}

const ErrorViewer: React.FC<Props> = ({ message, details }): JSX.Element => {
  return (
    <div>
      {details ? <h3>{message}</h3> : <span>{message}</span>}
      {details &&
        Object.entries(details).map(
          (detailPair): JSX.Element => {
            const [name, errors] = detailPair;

            return (
              <dl key={name}>
                <dt>{name}</dt>
                {errors &&
                  errors.map(
                    (error, index): JSX.Element => (
                      <ErrorText key={index}>{error}</ErrorText>
                    )
                  )}
              </dl>
            );
          }
        )}
    </div>
  );
};

export default ErrorViewer;

const ErrorText = styled.dd`
  margin-inline-start: 40px;
`;
