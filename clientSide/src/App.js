import React from 'react'
import { FirstPage } from './pages/firstPage/'
import { BrowserRouter , Route } from 'react-router-dom'
import { RichTextEditor } from './pages/editor'
import { StoryReader } from './pages/storyReader'
import { Dashboard } from './pages/dashboard'
import { Stories } from './pages/stories'

export const App = () => (
    <BrowserRouter>
        <Route path = '/' exact component = { FirstPage }/>
        <Route path = '/editor'  component = { RichTextEditor }/>
        <Route path = '/dashboard'  component = { Dashboard }/>
        <Route path = '/stories'  component = { Stories }/>
        <Route path = '/storyreader'  component = { StoryReader }/>
    </BrowserRouter>
)