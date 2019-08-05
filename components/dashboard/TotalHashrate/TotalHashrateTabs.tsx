import * as React from "react";
import styled from "styled-components";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab, { TabProps } from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

interface TabDefinition {
  caption: string;
  id: number;
}

interface Props {
  tabs: TabDefinition[];
  selected: number;
  tabStyle?: any;
  tabProps?: TabDefinition;
  onChange: (any, number) => void;
}

const useTabsStyles = makeStyles(() => ({
  root: {
    marginLeft: 20
  },
  indicator: {
    display: "none"
  }
}));

const useTabStyles = makeStyles(({ palette }) =>
  createStyles({
    root: {
      backgroundColor: `${palette.background.paper} !important`,
      borderRadius: "20px 20px 0 0 !important",
      border: 0,
      height: 48,
      padding: "0 30px"
    },
    label: {
      textTransform: "capitalize"
    }
  })
);

const TotalHashrateTabs: React.FC<Props> = ({
  tabs,
  tabStyle,
  tabProps,
  selected,
  onChange,
  ...props
}): JSX.Element => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles(props);

  return (
    <>
      <Tabs value={selected} onChange={onChange} classes={tabsClasses}>
        {tabs.map(
          ({ id, caption }: TabDefinition): JSX.Element => (
            <Tab key={id} label={caption} value={id} classes={tabClasses} />
          )
        )}
      </Tabs>
    </>
  );
};

export default TotalHashrateTabs;
