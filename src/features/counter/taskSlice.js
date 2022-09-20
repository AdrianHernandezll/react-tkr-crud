import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        name: 'task 1',
        description: 'Task 1 description',
        completed: false,
    },
    {
        id: '2',
        name: 'task 2',
        description: 'Task 2 description',
        completed: false,
    },
];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
});

export default taskSlice.reducer;
