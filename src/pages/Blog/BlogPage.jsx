import './blogPage.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const BlogPage = () => {
  return (
    <div className='blogpage'>
        <div className='container'>
            <div className='header'>
                <div className='userInfo'>
                    <p className='author'>KunalBose47</p>
                    <p className='time'>2:21 AM · Jun 24, 2023</p>
                </div>
                <div className='icons'>
                    <DeleteIcon className='deleteIcon'/>
                    <EditIcon className='icon'/>
                </div>
            </div>
            <div className='body'>
                <h1>useState in React: A complete guide</h1>
                <p>
                    Editor's note: This React useState Hook tutorial was last updated on 7 February 2023 to include more information on React useStateand to reflect updates to React. Check out our React Hooks reference guide and cheat sheet for more information about React Hooks.

                    The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

                    This tutorial serves as a complete guide to the useState Hook in React, the equivalent of this.state/this.setSate for functional components.

                    We'll cover the following in detail:

                    Class and functional components in React
                    What is the useState Hook?
                    What can useState hold?
                    Updating objects and arrays in useState
                    What does the React.useState Hook do?
                    Declaring state in React
                    Using React Hooks to update the state
                    Implementing an object as a state variable with useState Hook
                    How to update state in a nested object in React with Hooks
                    Working with multiple state variables or one state object
                    Rules for using useState
                    useState vs. useEffect
                    Understanding the useReducer Hook
                    If you're just getting started with React Hooks and looking for a visual guide, check out the video tutorial below:
                </p>
            </div>
        </div>
    </div>
  )
}

export default BlogPage