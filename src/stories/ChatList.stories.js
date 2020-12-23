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
            id: '001',
            createdAt: 'Dec 2020',
            title: 'My chat',
            userId: '001',
            participants: ['001', '002'],
            isPrivate: false
        },
        {
            id: '002',
            createdAt: 'Nov 2020',
            title: 'My chat too',
            userId: '002',
            participants: ['001', '002'],
            isPrivate: false
        },
        {
            id: '003',
            createdAt: 'Oct 2020',
            title: 'Я не знаю это чьё',
            userId: '003',
            participants: ['002', '003'],
            isPrivate: false
        }
    ],
    goHandle: action('go'),
    deleteHandle: action('delete'),
    joinHandle: action('join')
};
