import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface Story {
  id: number
  title: string
  content: string
  author_name: string
  author_id: number
  created_at: string
}

export interface StoriesState {
  stories: Story[]
  loading: boolean
  error: string | null
}

const initialState: StoriesState = {
  stories: [],
  loading: false,
  error: null
}

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload
      state.loading = false
      state.error = null
    },
    addStory: (state, action: PayloadAction<Story>) => {
      state.stories.unshift(action.payload)
    },
    updateStory: (state, action: PayloadAction<Story>) => {
      const index = state.stories.findIndex(story => story.id === action.payload.id)
      if (index !== -1) {
        state.stories[index] = action.payload
      }
    },
    removeStory: (state, action: PayloadAction<number>) => {
      state.stories = state.stories.filter(story => story.id !== action.payload)
    }
  },
  selectors: {
    selectStories: (state) => state.stories,
    selectStoriesLoading: (state) => state.loading,
    selectStoriesError: (state) => state.error
  }
})

export const { 
  setLoading, 
  setError, 
  setStories, 
  addStory, 
  updateStory, 
  removeStory 
} = storiesSlice.actions

export const { 
  selectStories, 
  selectStoriesLoading, 
  selectStoriesError 
} = storiesSlice.selectors

export default storiesSlice