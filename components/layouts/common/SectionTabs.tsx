import * as React from "react";
import styled, { DefaultTheme } from "styled-components";
import Button from "@material-ui/core/Button";
import Router from "next/router";

import APP_SECTIONS from "~/constants/appSections";
import { useRouter } from "next/router";

// const sectionIds = Object.values(APP_SECTION_IDS);
// type sectionID = typeof sectionIds;

interface Props {
  activatedSection: number;
  namespace?: string;
}

const SectionTabs: React.FC<Props> = ({
  activatedSection,
  namespace
}): JSX.Element => {
  const handleClick = (route: string) => () => {
    const link = namespace ? `${namespace}${route}` : route;
    Router.push(link);
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

interface SectionButtonProps {
  activated: boolean;
  theme: DefaultTheme;
}

const SectionButton = styled(Button)`
  text-transform: capitalize;
  color: ${(p: SectionButtonProps) =>
    p.activated
      ? p.theme.palette.text.primary
      : p.theme.palette.text.secondary}};
  padding: 10px 20px;

  &&:hover {
    color: ${p => p.theme.palette.text.primary};
  }
`;
