import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data=useLoaderData()
    // const [data, setData] = useState(null); // Initialize with null

    // useEffect(() => {
    //     fetch('https://api.github.com/users/royal10000')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data.followers);
    //             setData(data); // Update the state with the entire data object
    //         })
    //         .catch((e) => {
    //             console.log('Something is wrong with it:', e);
    //         });
    // }, []); // Empty dependency array as we only want to fetch once

    return (
        <>
            {data && (
                <div className='text-center bg-gray-900 text-white p-5 text-3xl'>
                    GitHub followers: {data.followers}
                </div>
            )}
            {data && (
                <div>
                    <img src={data.avatar_url} alt='GitHub avatar' />
                </div>
            )}
        </>
    );
};

export default Github;
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/royal10000')
    return response.json()
}