import React, { useRef, useEffect } from 'react'
import style from '../../styles/Tree.module.scss'
// import RealTurtle from 'real-turtle'

export default function Tree() {

    const ref = useRef()
    useEffect(() => {
        if (ref.current) {
            const ctx = ref.current.getContext('2d')
            // const turtle = new RealTurtle(ref.current)
            // console.log(ctx)
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#ee0000";
            ctx.rect(100, 200, 100, 100);
            ctx.fill();

        }
    }, [])

    return (
        <div id='tree' className={style.container}>
            Welcome to tree
            <canvas id="tree-canvas" width="343" height="624" ref={ref} className={style.canva}></canvas>
        </div>
    )
}
