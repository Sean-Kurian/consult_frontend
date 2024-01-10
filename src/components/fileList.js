import React, { useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext.js';
import axios from 'axios';

function FileList() {
    const { authToken, login, logout } = useAuth();
    const [files, setFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(true);

    const getFileName = (url) => {
        const urlArr = url.split("/");
        const fileLoad = urlArr[4];
        const fileName = decodeURIComponent(fileLoad.substring(fileLoad.indexOf("-")+1, fileLoad.indexOf("?")));
        return fileName;
    }

    const setUpFiles = async () => {
        try {
            const headers = {
                'Authorization': authToken
            }
            const result = await axios.get(process.env.REACT_APP_BACKEND_URL + "/file/get", { headers });
            if ( result.data.success ) {
                setValid(true);
                setFiles(result.data.files);
                setFileNames(result.data.files.map( file => getFileName(file) ));
            } else {
                setValid(false);
                setFiles([]);
                setFileNames([]);
            }
        } catch (error) {
            console.log(error);
            setValid(false);
            setFiles([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (authToken) {
            setUpFiles();
        }
    }, [authToken]);

    if (loading) {
        return (<p>Loading...</p>);
    }

    return (valid ? (
        <div>
        <h1>List of files</h1>
            <ul>
                {
                    files.map((url, i) => (
                        <li key={i}>
                            <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px' }}>
                                { fileNames[i] }
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    ) : ( <p>You are not permitted to see this page.</p> ));
}

export default FileList;
