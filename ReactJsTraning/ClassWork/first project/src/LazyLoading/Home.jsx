import React, { lazy, Suspense } from 'react'

const Banner = lazy(() => import('./Banner'))
const Header = lazy(() => import('./Header'))
const Section = lazy(() => import('./Section'))

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <hr />
            <Suspense fallback={<h2>Header is loading</h2>} >
                <Header />
            </Suspense>
            <Suspense fallback={<h2>Banner LOading</h2>}>
                <Banner />
                <Section />
            </Suspense>
        </div>
    )
}
