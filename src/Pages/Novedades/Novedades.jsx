import React from 'react'
import { Link } from 'react-router-dom'

const Novedades = () => {
    return (
        <div>
            Novedades <br />
            <p>Sanrio, Inc. ("Sanrio," "we," "us", "our") provides www.sanrio.com (the "Site"). We are committed to safeguarding all personally identifiable information we collect through our Site and to explaining the choices you ("users," "you" or "your") can make about the collection and use of your personally identifiable information on or through the Site. This Privacy Policy explains our information practices in connection with the Site, and our Terms of Service govern your use of the Site. Except as set forth within this Privacy Policy, we do not release personally identifiable information about our users without their permission.
It is for this we are proud to be known, and at this which we continue to strive to be the very best.</p>
            Ir al <Link to={"/"}> Home</Link>
        </div>
    )
}

export default Novedades