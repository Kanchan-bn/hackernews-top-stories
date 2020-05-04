import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

type Props = {
    body:any
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      display: 'block'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
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
            <Typography className={classes.heading}>
               Top comments on this story <span style={{fontSize:'0.7em'}}>(Click to view) </span>
            </Typography>
            </ExpansionPanelSummary>
            <div style={{padding:'1em'}}>
                {body}
            </div>
        </ExpansionPanel>
    </>)

}

