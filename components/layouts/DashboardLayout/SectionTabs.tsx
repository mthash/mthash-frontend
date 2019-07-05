import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const SECTIONS = [
  { name: "Dashboard", id: 1 },
  { name: "Mining", id: 2 },
  { name: "Exchange", id: 3 }
];

const SectionTabs: React.FC = (): JSX.Element => {
  const [activated, setActivated] = React.useState(1);

  const handleClick = (id: number) => () => setActivated(id);

  return (
    <nav>
      {SECTIONS.map(
        ({ id, name }): JSX.Element => (
          <SectionButton
            key={id}
            onClick={handleClick(id)}
            activated={activated === id}
          >
            {name}
          </SectionButton>
        )
      )}
    </nav>
  );
};

export default SectionTabs;

const SectionButton = styled(Button)`
  text-transform: capitalize;
  color: ${p =>
    p.activated
      ? p.theme.palette.text.primary
      : p.theme.palette.text.secondary}};
  padding: 10px 20px;

  &&:hover {
    color: ${p => p.theme.palette.text.primary};
  }
`;
