import React from 'react'
import './style.css'
import Layout from '@theme/Layout'
import { useDropzone } from 'react-dropzone';

const ImportFile = () => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <Layout
            title={`Document For Me`}
            description="Description will go into a meta tag in <head />"
        >
            <div className="form" style={{ marginTop: '100px' }}>
                <form className="login-form" onSubmit={handleSubmit}>
                    <section >
                        <div {...getRootProps({ className: 'dropzone' })} style={{ backgroundColor: '#797979111', height: '100px', border: '1px solid' }}>
                            <input {...getInputProps()} />
                            <p>Drag and drop .md files here, or click to select .md files.</p>
                        </div>
                        <aside>
                            {/* <h4>Files</h4> */}
                            <ul>{files}</ul>
                        </aside>
                    </section>
                    <button>Upload</button>
                </form>
            </div>
        </Layout>
    )
}

export default ImportFile