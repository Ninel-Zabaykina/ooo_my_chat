import React from 'react';
import Chat from '../components/Chat';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Chat',
    component: Chat
};

const Template = args => <Chat {...args} />;

const chat = {
    id: '001',
    createdAt: 'Dec 2020',
    title: 'Мой супер чат',
    userId: '001',
    participants: ['001', '002'],
    isPrivate: false
};

export const ChatOwner = Template.bind({});
ChatOwner.args = {
    userId: '001',
    chat,
    goHandle: action('go'),
    deleteHandle: action('delete'),
    joinHandle: action('join')
};

export const ChatParticipant = Template.bind({});
ChatParticipant.args = {
    userId: '002',
    chat,
    goHandle: action('go'),
    deleteHandle: action('delete'),
    joinHandle: action('join')
};

export const NotParticipant = Template.bind({});
NotParticipant.args = {
    userId: '003',
    chat,
    goHandle: action('go'),
    deleteHandle: action('delete'),
    joinHandle: action('join')
};
