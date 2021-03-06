import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { CommentTitle } from '../styles/styledComponents';

type Props = {
    body:any
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      display: 'block',
      padding: '0.5em'
    },
    body: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightLight,
      padding: theme.typography.pxToRem(10)
    }
  }));

export const ExpansionPanelComponent: React.FC<Props> = ({body}) => {
    const classes = useStyles();

    return (
            <>
        <ExpansionPanel>
            <ExpansionPanelSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <CommentTitle>Top comments on this story <span style={{fontSize:'0.7em'}}>(Click to view) </span></CommentTitle>
            </ExpansionPanelSummary>
            <div className={classes.body}>
                {body}
            </div>
        </ExpansionPanel>
    </>)

}

