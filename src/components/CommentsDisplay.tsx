import React from 'react';
import { Comment } from './Comment';
import { maxTopComments } from '../util/constants';
import { ExpansionPanelComponent } from './ExpansionPanelComponent';

type Props = {
    comments: number[]
}

export const CommentsDisplay: React.FC<Props> = ({ comments }) => {
    const topComments: number[] = comments && comments.splice(0, maxTopComments);
    
    const displayComments = topComments && topComments.map(comment => <Comment commentId = {comment} key={comment} />);

    return displayComments && <ExpansionPanelComponent body={displayComments} />
}