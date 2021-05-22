import React from 'react'
import { Switch, Route } from "react-router-dom";

const Content = () => {
    return (
        <div>
            <Switch>
            // Pages will go here
                
                <Route exact path="/">
                    // Home Page
                </Route>
            </Switch>
        </div>
    )
}

export default Content
