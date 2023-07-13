/* eslint-disable react-hooks/exhaustive-deps */
import Editor from "@monaco-editor/react"
import { useState, useEffect } from 'react'
import Output from "../components/Output"
import { AiOutlineHtml5 } from 'react-icons/ai'
function Playground() {
    // State 
    const [tab, setTab] = useState(1)
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')
    const [srcDoc, setSrcDoc] = useState('')

    // Handle Change Values
    const handleChangeHtml = (value) => {
        setHtml(value)
    }
    const handleChangeCss = (value) => {
        setCss(value)
    }
    const handleChangeJs = (value) => {
        setJs(value)
    }

    /**
     * Function save state srcDoc
     */
    const saveChange = () => {
        const output = ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>${css}</style>
            <title>Document</title>
        </head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
        </html>`
        setSrcDoc(output)
    }

    useEffect(() => {
        saveChange()
    }, [css, html, js])


    return (
        // Container 
        <div className="h-[80vh]">
            {/* Grid Container  */}
            <div className="grid grid-cols-2 gap-2">

                <div className="mt-2">

                    {/* Tab Language  */}
                    <ul className="grid grid-flow-col text-center text-zinc-900 ">

                        <li className="hover:cursor-pointer " onClick={() => setTab(1)}>
                            <a className={tab === 1 ? "flex items-center justify-center  bg-zinc-900  rounded-tl-lg rounded-tr-lg text-gray-200 border-l border-t border-r border-zinc-500 py-4" : "flex items-center justify-center bg-zinc-800  rounded-tl-lg rounded-tr-lg border-l border-t border-r border-zinc-400 text-gray-200 py-4"}
                            ><AiOutlineHtml5 />Html</a>

                        </li>
                        <li className="hover:cursor-pointer" onClick={() => setTab(2)}>
                            <a className={tab === 2 ? "flex items-center justify-center  bg-zinc-900   rounded-tl-lg rounded-tr-lg text-gray-200 border-l border-t border-r border-zinc-500 py-4" : "flex items-center justify-center bg-zinc-800  rounded-tl-lg rounded-tr-lg border-l border-t border-r border-zinc-400 text-gray-200 py-4"}
                            >Css</a>

                        </li>
                        <li className="hover:cursor-pointer" onClick={() => setTab(3)}>
                            <a className={tab === 3 ? "flex items-center justify-center  bg-zinc-900  rounded-tl-lg rounded-tr-lg text-gray-200 border-l border-t border-r border-zinc-500 py-4" : "flex items-center justify-center bg-zinc-800   rounded-tl-lg rounded-tr-lg border-l border-t border-r border-zinc-400 text-gray-200 py-4"}
                            >JavaScript</a>

                        </li>

                    </ul>
                    {/* Container Monaco Editor  */}
                    <div className={tab === 1 ? "bg-zinc-800 shadow  p-1 text-gray-700 rounded-lg  h-[75vh] block" : 'hidden'}>
                        {/* Monaco Editor Html  */}
                        <Editor
                            theme="vs-dark"
                            language="html"
                            onChange={handleChangeHtml}
                        />
                    </div>
                    <div className={tab === 2 ? "bg-zinc-800 shadow p-1 text-gray-700 rounded-lg  h-[75vh] block" : 'hidden'}>
                        {/* Monaco Editor Css  */}
                        <Editor
                            theme="vs-dark"
                            language="css"
                            onChange={handleChangeCss}
                        />
                    </div>
                    <div className={tab === 3 ? "bg-zinc-800 shadow p-1 text-gray-700 rounded-lg  h-[75vh] block" : 'hidden'}>
                        {/* Monaco Editor Javascript  */}
                        <Editor
                            theme="vs-dark"
                            language="javascript"
                            onChange={handleChangeJs}
                        />
                    </div>
                </div>

                {/* Component OutPut iFrame  */}
                <div className="mt-2 shadow-sm shadow-zinc-800">
                    <Output srcDoc={srcDoc} />
                </div>
            </div>

        </div>
    )
}
export default Playground