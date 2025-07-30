import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: "",
    posts: []
}

export const getPosts = createAsyncThunk("posts/get", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    return data
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addReaction: (state, action) => {
            // id = post id, name = reaction name
            const { id, name } = action.payload;
            // find the post that match the id
            const post = state.posts.find(post => post.id === id)
            if (post) {
                post.reactions[name]++
            }

        }
    },
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state) => {
            state.loading = "loading"
            console.log(state)
        })
        builder.addCase(getPosts.rejected, (state) => {
            state.loading = "error"
            console.log(state)
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.loading = "succes"
            const reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            }
            const postWithReaction = action.payload.map(post => {
                return { ...post, reactions }
            })
            state.posts = postWithReaction
            console.log(action)
        })
    }
})

export const state = (state) => state.postSliceReducer
export const { addReaction } = postsSlice.actions
export default postsSlice.reducer