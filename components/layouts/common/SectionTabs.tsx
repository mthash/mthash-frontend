import * as React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Router from "next/router";

import APP_SECTIONS from "~/constants/appSections";

// const sectionIds = Object.values(APP_SECTION_IDS);
// type sectionID = typeof sectionIds;

interface Props {
  activatedSection: number;
}

const SectionTabs: React.FC<Props> = ({ activatedSection }): JSX.Element => {
  const handleClick = (route: string) => () => {
    Router.push(route);
  };

  return (
    <nav>
      {APP_SECTIONS.map(
        ({ id, name, route }): JSX.Element => (
          <SectionButton
            key={id}
            onClick={handleClick(route)}
            activated={activatedSection === id}
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
