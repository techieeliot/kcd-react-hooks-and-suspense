import React from 'react';
import { render, fireEvent} from 'react-testing-library';
import Counter from './Exercises';

// test is a function that allows us to say what I'm testing then run a function
test('counter increments the count', () => {

    // test that the container renders a Counter component
    const {container} = render( 
        <Counter />
    )
    
    // Inside the container their should be a button
    const button = container.firstChild;
    
    // fire event tests the button on click when it's 0
    fireEvent.click(button).toBe('0');

    // the expected outcome is that the button will add one on click
    expect(button.textContent).toBe('1');

})