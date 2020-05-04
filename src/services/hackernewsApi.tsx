import { maxTopStories } from '../util/constants';

const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
const topStoriesUrl = `${baseUrl}topstories.json`;
const storyCommentUrl = `${baseUrl}item/`;

export const getTopStoriesIds = async () => {
    return  await fetch(topStoriesUrl)
            .then(response => response.json())
            .then(data => {
                let finalData = data.slice(0, maxTopStories);
                return finalData;
            });
};

export const getItemById = async (itemId : number) => {
    return await fetch(`${storyCommentUrl + itemId}.json`)
            .then(response => response.json());
};