import React from 'react'  
import {withRouter} from 'next/router'


const Post = ({router: {query: {title}}}) => (
    <>
        <h1>{title}</h1>

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus architecto fugit rem quisquam eligendi, illo ipsam voluptas minima quia error nihil enim minus praesentium nisi, eum quae ab rerum! Dolore, laboriosam. Nisi reiciendis aliquid nesciunt repellendus temporibus minima veniam aperiam, voluptas sequi praesentium beatae ex necessitatibus quaerat repellat nemo vel.
    </>
)

export default withRouter(Post)