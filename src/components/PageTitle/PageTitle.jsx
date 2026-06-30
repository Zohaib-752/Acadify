import React, { useEffect } from 'react'

const PageTitle = (props) => {
    useEffect(() => {
        document.title = `Acadify | ${props.pagetitle}`;
    }, [props.pagetitle]);

    return null;
}

export default PageTitle