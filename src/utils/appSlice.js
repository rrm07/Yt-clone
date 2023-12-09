import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: true,
        selectedCategory : "New",
        categoryVideo: null,
        videos : null,
    },
    reducers:{
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        },
        addCategoryVideo: (state, action) => {
            state.categoryVideo =  action.payload;
        },
        addVideos : (state, action) => {
            state.videos =  action.payload;
        }
    }
})

export const {toggleMenu, setCategory, closeMenu, addCategoryVideo, addVideos, buttonClicked} = appSlice.actions;

export default appSlice.reducer