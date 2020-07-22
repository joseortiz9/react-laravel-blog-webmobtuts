import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./components/pages/Dashboard";
import ListPosts from "./components/pages/posts/Index";
import AddPosts from "./components/pages/posts/Add";
import EditPosts from "./components/pages/posts/Edit";
import ListCategories from "./components/pages/categories/Index";
import AddCategories from "./components/pages/categories/Add";
import EditCategories from "./components/pages/categories/Edit";
import ListTags from "./components/pages/tags/Index";
import AddTags from "./components/pages/tags/Add";
import EditTags from "./components/pages/tags/Edit";
import ListComments from "./components/pages/comments/Index";
import ListUsers from "./components/pages/users/Index";
import AddUsers from "./components/pages/users/Add";
import EditUsers from "./components/pages/users/Edit";

class Routes extends React.Component
{
    render()
    {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/posts' component={ListPosts} />
                <Route path='/posts/add' component={AddPosts} />
                <Route path='/posts/edit/:id' component={EditPosts} />
                <Route exact path='/tags' component={ListTags} />
                <Route path='/tags/add' component={AddTags} />
                <Route path='/tags/edit/:id' component={EditTags} />
                <Route exact path='/categories' component={ListCategories} />
                <Route path='/categories/add' component={AddCategories} />
                <Route path='/categories/edit/:id' component={EditCategories} />
                <Route exact path='/comments' component={ListComments} />
                <Route exact path='/users' component={ListUsers} />
                <Route path='/users/add' component={AddUsers} />
                <Route path='/users/edit/:id' component={EditUsers} />
            </Switch>
        )
    }
}

export default Routes;
