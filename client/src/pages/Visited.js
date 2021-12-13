import React, { useState, useEffect } from "react";
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';

const Visited = () => {
    const { loading, data } = useQuery(GET_ME);

    const userData = data?.me || [];

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {console.log(userData)}
                    <div> 
                        You have visited {userData.saveVisited.length} parks!
                    </div>
                </>
            )}
        </div>
    )
}

export default Visited;