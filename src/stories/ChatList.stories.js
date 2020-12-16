import React from 'react';
import ChatList from '../components/ChatList';
import { action } from '@storybook/addon-actions';

export default {
    title: 'ChatList',
    component: ChatList
};

const Template = args => <ChatList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    list: [
        {
            id: '123',
            createdAt: 'date1',
            title: 'My chat'
        },
        {
            id: '456',
            createdAt: 'date2',
            title: 'My chat too'
        }
    ],
    clickHandle: action('clicked!')
};
