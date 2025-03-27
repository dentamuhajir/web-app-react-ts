import { createSlice } from "@reduxjs/toolkit";

const breadcrumb :any[] = [
    { title: "Home",route: "/cms/test", isActive: true }
]

const breadcrumbSlice = createSlice({
    name: "breadcrumbs",
    initialState: breadcrumb,
    reducers: {
        setBreadcumbs: (state, action) => {
            return action.payload
            //state.push(action.payload)
        }
    }
})

 

export const { setBreadcumbs } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer